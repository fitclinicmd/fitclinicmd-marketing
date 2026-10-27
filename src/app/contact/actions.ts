"use server";

import { SITE } from "@/lib/site";
import { sendEmail } from "@/lib/email";

export type ContactResult = { ok: boolean; message: string };

// Escape user text before it goes into an HTML email body.
function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

// General-inquiry contact only.
//
// ⚠️ This is the PHI-free zone. This endpoint must never become a channel for
// clinical information: the form warns users not to include medical details,
// asks no health questions, and the submission is NOT stored anywhere. Patients
// with clinical questions use secure messaging inside the patient portal.
//
// Delivery is guarded: with no inbox configured nothing is silently swallowed —
// the user is told to email directly instead.
export async function submitContact(
  _prev: ContactResult | undefined,
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Optional lead fields — the conversion agent uses these to route follow-up.
  const service = String(formData.get("service") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!name) return { ok: false, message: "Please enter your name." };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return { ok: false, message: "Please enter a valid email address." };
  if (message.length < 10)
    return { ok: false, message: "Please tell us a little more so we can help." };

  const inbox = process.env.CONTACT_INBOX;
  if (!inbox) {
    // Not configured yet — say so plainly rather than pretending it sent.
    return {
      ok: false,
      message: `Our contact form isn't live yet. Please email us directly at ${SITE.email} and we'll get back to you.`,
    };
  }

  // Deliver via Paubox. Payload is PHI-free by design: name, email, and the
  // free-text message only (the form warns against including medical details).
  // Reply-to is the submitter so a reply goes straight back to them.
  const meta = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Mobile: ${phone || "(not provided)"}`,
    `Service interested in: ${service || "(not specified)"}`,
    `Stage: request for information`,
    `Source: fitclinicmd.com/contact`,
  ];

  const result = await sendEmail({
    to: inbox,
    replyTo: email,
    subject: `New ${SITE.name} contact from ${name}${service ? ` — ${service}` : ""}`,
    text: meta.join("\n") + `\n\n${message}\n`,
    html:
      `<p>${meta.map((l) => escapeHtml(l)).join("<br>")}</p>` +
      `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });

  // Never claim success without a real send. If Paubox isn't configured, or the
  // send fails, tell the user to email directly rather than silently dropping it.
  if (!result.ok) {
    if (result.error) console.error("[contact] Paubox send failed:", result.error);
    return {
      ok: false,
      message: `Sorry — we couldn't send that just now. Please email us directly at ${SITE.email}.`,
    };
  }

  return {
    ok: true,
    message: "Thanks — we've got your message and will reply by email.",
  };
}
