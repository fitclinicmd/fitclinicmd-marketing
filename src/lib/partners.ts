// PARTNER ATTRIBUTION ENGINE
// ---------------------------------------------------------------------------
// FitClinicMD acquires patients both directly and through referrers (coaches,
// clinics, affiliates). When a visitor arrives from a referrer, we capture the
// referrer code on the FIRST touch and carry it — first-party cookie only, no
// third-party pixel — all the way to the backend, so the referral is credited
// even if the person books days later.
//
// The code maps cleanly onto the GEN Health V2 Client API's own attribution
// fields (see the lib/genhealth bridge): the referrer's code becomes the order
// `couponCode` (an attribution code created in the GEN Health admin, not a
// patient discount), and the campaign/source become `order.tracking`. These
// are the same fields GEN echoes back on order.* webhooks.
//
// COMPLIANCE NOTE (this is attribution, not compensation). Capturing WHO
// referred a patient is tracking. HOW a referrer is paid is a separate, legal
// question governed by EKRA (18 U.S.C. §220) and state anti-kickback /
// fee-splitting law. Nothing in this file computes or implies per-referral pay;
// it only records the source. Keep it that way — compensation is modeled and
// gated elsewhere, with counsel.

/** URL params we honor, in priority order. The first non-empty wins as the
 *  referrer code. UTM params are captured alongside as campaign context. */
export const REF_PARAMS = ["ref", "partner", "aff", "promo"] as const;
export const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** First-party cookie that persists the first-touch attribution. */
export const ATTR_COOKIE = "fcmd_attr";
/** 90 days — a referred patient may research for weeks before booking. */
export const ATTR_MAX_AGE_DAYS = 90;

export type Attribution = {
  /** The referrer / affiliate code, e.g. a clinic's slug. Uppercased, trimmed. */
  code: string;
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  /** ISO timestamp of first touch. */
  at: string;
};

/** Normalize a raw code: trim, uppercase, strip anything but A–Z/0–9/-/_ , cap
 *  length. Referrer codes are short and human-shared ("COACHJEN", "CLINIC-AZ"). */
export function normalizeCode(raw: string | null | undefined): string {
  if (!raw) return "";
  return raw
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, "")
    .slice(0, 32);
}

/** Build an Attribution from a URLSearchParams (client first-touch). Returns
 *  null when there is no referrer code present. */
export function attributionFromParams(params: URLSearchParams): Attribution | null {
  let code = "";
  for (const p of REF_PARAMS) {
    code = normalizeCode(params.get(p));
    if (code) break;
  }
  if (!code) return null;
  const get = (k: string) => params.get(k)?.slice(0, 64) || undefined;
  return {
    code,
    source: get("utm_source"),
    medium: get("utm_medium"),
    campaign: get("utm_campaign"),
    content: get("utm_content"),
    term: get("utm_term"),
    at: new Date().toISOString(),
  };
}

/** Serialize for the cookie (compact JSON). */
export function serializeAttribution(a: Attribution): string {
  return JSON.stringify(a);
}

/** Parse a cookie value back to Attribution; tolerant of junk. */
export function parseAttribution(value: string | undefined): Attribution | null {
  if (!value) return null;
  try {
    const a = JSON.parse(value) as Partial<Attribution>;
    const code = normalizeCode(a.code);
    if (!code) return null;
    return {
      code,
      source: a.source,
      medium: a.medium,
      campaign: a.campaign,
      content: a.content,
      term: a.term,
      at: typeof a.at === "string" ? a.at : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/** Map our attribution onto the GEN Health order fields. The referrer code
 *  doubles as the attribution/promo code (created in the GEN Health admin);
 *  the UTM context travels as free-form tracking. The partner order id is
 *  minted by the backend at checkout, not here. */
export function toGenHealthAttribution(a: Attribution | null): {
  couponCode?: string;
  tracking?: Record<string, string>;
} {
  if (!a) return {};
  const tracking: Record<string, string> = { ref: a.code };
  if (a.source) tracking.utm_source = a.source;
  if (a.medium) tracking.utm_medium = a.medium;
  if (a.campaign) tracking.utm_campaign = a.campaign;
  if (a.content) tracking.utm_content = a.content;
  if (a.term) tracking.utm_term = a.term;
  return { couponCode: a.code, tracking };
}
