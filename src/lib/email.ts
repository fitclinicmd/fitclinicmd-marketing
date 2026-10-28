// Transactional email for the marketing zone, via the Paubox Email API.
//
// Paubox is a HIPAA-capable provider (encrypted delivery, BAA-eligible). This
// zone stays PHI-free by design, but using Paubox means that if a visitor
// ignores the "no medical details" warning, their message is still handled by a
// BAA-covered channel rather than a plain mail relay.
//
// Fully guarded: if the Paubox credentials are not configured, sendEmail returns
// { ok: false, configured: false } so callers can fall back to a direct-email
// instruction rather than silently dropping the message.
//
// Uses Paubox's CURRENT Email API: a single account-scoped key (Bearer auth),
// no username in the path, HTML sent inline — the same form proven working in
// the fitclinicmd-com app. The legacy api.paubox.net/v1/{username} + base64 form
// is retired here so this zone needs only PAUBOX_API_KEY (+ PAUBOX_FROM), which
// the existing FitClinicMD Paubox account already provides — no separate account
// or API user required. Docs: https://docs.paubox.com/email-api/quickstart

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  /** Address replies should go to (e.g. the person who submitted the form). */
  replyTo?: string;
};

export type SendEmailResult = { ok: boolean; configured: boolean; error?: string };

const PAUBOX_URL = "https://api.paubox.com/v1/email/messages";

/** True when the Paubox API key is present in the environment. */
export function emailConfigured(): boolean {
  return Boolean(process.env.PAUBOX_API_KEY);
}

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const key = process.env.PAUBOX_API_KEY;
  if (!key) return { ok: false, configured: false };

  // Must be an address on a Paubox-verified sending domain (SPF set up in the
  // Paubox dashboard for fitclinicmd.com).
  const from = process.env.PAUBOX_FROM ?? "FitClinicMD <no-reply@fitclinicmd.com>";
  const recipients = Array.isArray(input.to) ? input.to : [input.to];

  const headers: Record<string, string> = { subject: input.subject, from };
  if (input.replyTo) headers["reply-to"] = input.replyTo;

  // Current API takes HTML inline (the legacy API required base64 — this one
  // does not; sending base64 here would deliver garbled markup).
  const content: Record<string, string> = { "text/plain": input.text };
  if (input.html) content["text/html"] = input.html;

  const payload = { data: { message: { recipients, headers, content } } };

  try {
    const res = await fetch(PAUBOX_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const bodyText = await res.text().catch(() => "");
    let parsed: { errors?: unknown } | undefined;
    try {
      parsed = JSON.parse(bodyText) as { errors?: unknown };
    } catch {
      /* non-JSON body */
    }

    // Paubox can return HTTP 200 with an `errors` array, so check both.
    if (!res.ok || (parsed && parsed.errors)) {
      const detail = parsed?.errors ? JSON.stringify(parsed.errors) : bodyText.slice(0, 300);
      return { ok: false, configured: true, error: `Paubox ${res.status}: ${detail}` };
    }
    return { ok: true, configured: true };
  } catch (err) {
    return { ok: false, configured: true, error: err instanceof Error ? err.message : "send failed" };
  }
}
