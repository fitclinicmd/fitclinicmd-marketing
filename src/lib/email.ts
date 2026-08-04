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
// Docs: https://docs.paubox.com/docs/paubox_email_api/messages

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  /** Address replies should go to (e.g. the person who submitted the form). */
  replyTo?: string;
};

export type SendEmailResult = { ok: boolean; configured: boolean; error?: string };

const PAUBOX_BASE = "https://api.paubox.net/v1";

/** True when the Paubox API user + key are both present in the environment. */
export function emailConfigured(): boolean {
  return Boolean(process.env.PAUBOX_API_USER && process.env.PAUBOX_API_KEY);
}

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const user = process.env.PAUBOX_API_USER;
  const key = process.env.PAUBOX_API_KEY;
  if (!user || !key) return { ok: false, configured: false };

  // Must be an address on a Paubox-verified sending domain (SPF/DKIM set up in
  // the Paubox dashboard for fitclinicmd.com).
  const from = process.env.PAUBOX_FROM ?? "FitClinicMD <no-reply@fitclinicmd.com>";
  const recipients = Array.isArray(input.to) ? input.to : [input.to];

  const headers: Record<string, string> = { subject: input.subject, from };
  if (input.replyTo) headers["reply-to"] = input.replyTo;

  // Paubox requires the HTML part base64-encoded; plain text is sent as-is.
  const content: Record<string, string> = { "text/plain": input.text };
  if (input.html) content["text/html"] = Buffer.from(input.html, "utf8").toString("base64");

  const payload = { data: { message: { recipients, headers, content } } };

  try {
    const res = await fetch(`${PAUBOX_BASE}/${encodeURIComponent(user)}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${key}`,
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
