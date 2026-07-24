"use server";

import { SITE } from "@/lib/site";

export type ContactResult = { ok: boolean; message: string };

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

  // TODO: deliver via the transactional email provider once configured.
  // Keep the payload PHI-free: name, email and the free-text message only.
  return {
    ok: true,
    message: "Thanks — we've got your message and will reply by email.",
  };
}
