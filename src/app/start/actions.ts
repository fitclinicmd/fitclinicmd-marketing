"use server";

import { SITE, bookingUrl } from "@/lib/site";
import { sendEmail } from "@/lib/email";
import { readAttribution } from "@/lib/attribution-server";
import { handoffLeadToGenHealth, withAttribution } from "@/lib/genhealth";

export type StartResult = {
  ok: boolean;
  message: string;
  /** When set, the client forwards the visitor to the booking calendar. */
  next?: string;
};

// Escape user text before it goes into an HTML email body.
function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

// Pre-booking lead capture — the "start your booking" step.
//
// ⚠️ PHI-free zone. This records no health information: the service field is a
// marketing category (which offering the visitor is interested in), not a
// diagnosis, and nothing is stored on this host. The submission is emailed as a
// structured "booking started" notice to the inbox the conversion agent is
// connected to, so the agent can follow up on an abandoned booking. Delivery is
// via Paubox (BAA-covered). If no inbox is configured, we never claim success.
export async function submitBookingStart(
  _prev: StartResult | undefined,
  formData: FormData,
): Promise<StartResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const smsConsent = formData.get("smsConsent") != null;

  if (!name) return { ok: false, message: "Please enter your first name." };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return { ok: false, message: "Please enter a valid email address." };

  // Booking notices go to the connected conversion-agent inbox. BOOKING_INBOX
  // overrides CONTACT_INBOX when the two should differ.
  const inbox = process.env.BOOKING_INBOX || process.env.CONTACT_INBOX;
  if (!inbox) {
    return {
      ok: false,
      message: `Booking isn't live yet. Please email us at ${SITE.email} and we'll help you schedule.`,
    };
  }

  // First-touch referrer attribution (set by ReferralCapture, first-party
  // cookie, no PHI). Recorded with the lead so the referral is credited even if
  // the person booked days after arriving from a referrer link.
  const attribution = await readAttribution();
  const campaign = [attribution?.source, attribution?.medium, attribution?.campaign]
    .filter(Boolean)
    .join(" / ");

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Mobile: ${phone || "(not provided)"}`,
    `Service interested in: ${service || "(not specified)"}`,
    `SMS consent: ${smsConsent ? "yes" : "no"}`,
    `Stage: booking started`,
    `Source: fitclinicmd.com/start`,
    `Referrer code: ${attribution?.code || "(none / direct)"}`,
    `Campaign: ${campaign || "(none)"}`,
  ];

  const result = await sendEmail({
    to: inbox,
    replyTo: email,
    subject: `Booking started — ${service || "unspecified"} — ${name}`,
    text: lines.join("\n") + "\n",
    html:
      `<p><strong>New booking started</strong></p>` +
      `<p>${lines.map((l) => escapeHtml(l)).join("<br>")}</p>`,
  });

  if (!result.ok) {
    if (result.error) console.error("[start] Paubox send failed:", result.error);
    return {
      ok: false,
      message: `Sorry — something went wrong. Please email us at ${SITE.email} and we'll help you schedule.`,
    };
  }

  // Lead captured. Resolve the forward in priority order, carrying attribution:
  //   1) GEN Health hosted assessment/checkout (the funnel's real destination)
  //   2) the LocumTele booking calendar (also attributed)
  //   3) a confirmation, so no lead is lost pre-launch.
  // The lead + attribution are already recorded above, so nothing is lost if
  // neither handoff link is configured.
  const handoff = await handoffLeadToGenHealth({ name, email, phone, service, attribution });
  if (handoff.delivered && handoff.handoffUrl) {
    return {
      ok: true,
      message: "Thanks — taking you to continue your assessment…",
      next: handoff.handoffUrl,
    };
  }
  if (bookingUrl) {
    return {
      ok: true,
      message: "Thanks — taking you to the scheduler…",
      next: withAttribution(bookingUrl, attribution),
    };
  }
  return {
    ok: true,
    message: "Thanks! We've got your details and the care team will reach out to schedule your visit.",
  };
}
