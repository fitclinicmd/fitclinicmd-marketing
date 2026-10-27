// GEN HEALTH BACKEND BRIDGE  (server-only)
// ---------------------------------------------------------------------------
// FitClinicMD's patient app / checkout runs on GEN Health's EHR. This marketing
// site does NOT hold PHI and does NOT prescribe. Its only job against the
// backend is to hand a captured lead — with referrer attribution intact — into
// GEN Health's own hosted assessment/checkout, where the patient finishes
// intake (DOB, full address, medical history), pays, and is treated.
//
// WHY A REDIRECT, NOT A SERVER-SIDE createPatient/createOrder: GEN Health's
// PatientInput REQUIRES date of birth + full address, and an order needs an
// activated product. This public form collects none of that on purpose (it must
// not become a PHI surface). So the GEN-documented handoff is to route the lead
// to a hosted assessment / checkout link and let GEN collect the rest, carrying
// our first-touch attribution as the order couponCode + UTM tracking.
//
// The attribution rides as query params on the hosted link (couponCode + utm_*),
// the same fields GEN echoes back on order.* webhooks. If GEN ignores an unknown
// param the lead still reaches intake, and the inbox path (lib/email) has
// already recorded the lead + attribution, so nothing is ever lost.
//
// SANDBOX: GEN Health's API has Sandbox on under the same host + key, so this
// handoff can be wired and tested against a GEN sandbox assessment/checkout link
// before launch. Set GENHEALTH_ASSESSMENT_URL to that link to turn it on. Until
// it is set, /start falls back to the LocumTele booking calendar (or a
// "we'll reach out" confirmation), so nothing points at a dead link pre-launch.

import "server-only";
import { toGenHealthAttribution, type Attribution } from "@/lib/partners";

const API_KEY = process.env.GENHEALTH_API_KEY ?? "";
const BASE_URL = process.env.GENHEALTH_BASE_URL ?? "https://api.gen-health.app";
// GEN-hosted assessment/checkout link the lead is handed off into. A single
// default today; a per-service map can replace this once products are activated.
const ASSESSMENT_URL = process.env.GENHEALTH_ASSESSMENT_URL ?? "";

/** True once GEN Health has provisioned a server API key (for future reads). */
export function genHealthConfigured(): boolean {
  return API_KEY.length > 0;
}

/** True once the hosted assessment/checkout handoff link is configured. */
export function genHealthHandoffConfigured(): boolean {
  return ASSESSMENT_URL.length > 0;
}

export type PartnerLead = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  attribution: Attribution | null;
};

export type HandoffResult = {
  delivered: boolean;
  /** Where to send the patient to finish intake on GEN Health, with attribution. */
  handoffUrl?: string;
  reason?: string;
};

/**
 * Build the GEN-hosted handoff URL for a lead: the configured assessment link
 * with the lead's email prefilled and attribution (referrer couponCode + UTM)
 * appended as query params. Returns null when no assessment link is configured.
 */
export function buildHandoffUrl(lead: PartnerLead): string | null {
  if (!ASSESSMENT_URL) return null;
  let url: URL;
  try {
    url = new URL(ASSESSMENT_URL);
  } catch {
    return null;
  }
  // Prefill the submitter's email so GEN's intake starts warm (not PHI beyond
  // what the person just typed to us). Never pass health details in the URL.
  if (lead.email) url.searchParams.set("email", lead.email);

  const { couponCode, tracking } = toGenHealthAttribution(lead.attribution);
  if (couponCode) url.searchParams.set("couponCode", couponCode);
  if (tracking) {
    for (const [k, v] of Object.entries(tracking)) {
      if (v) url.searchParams.set(k, v);
    }
  }
  return url.toString();
}

/**
 * Append the same first-touch attribution to any other hosted destination (for
 * us, the LocumTele booking calendar) so the referral survives even when the
 * GEN assessment link is not the forward target. Returns the input unchanged if
 * it is empty or not a valid URL.
 */
export function withAttribution(rawUrl: string, attribution: Attribution | null): string {
  if (!rawUrl) return rawUrl;
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return rawUrl;
  }
  const { couponCode, tracking } = toGenHealthAttribution(attribution);
  if (couponCode) url.searchParams.set("couponCode", couponCode);
  if (tracking) {
    for (const [k, v] of Object.entries(tracking)) {
      if (v) url.searchParams.set(k, v);
    }
  }
  return url.toString();
}

/**
 * Hand a lead to GEN Health. Resolves the hosted assessment/checkout URL (with
 * attribution) the caller should route the patient to. When no handoff link is
 * configured, returns delivered:false so the inbox + booking path stays
 * authoritative and the form shows a standard confirmation.
 */
export async function handoffLeadToGenHealth(lead: PartnerLead): Promise<HandoffResult> {
  void BASE_URL; // reserved for future server-side reads (getPatientByEmail, products)
  const handoffUrl = buildHandoffUrl(lead);
  if (!handoffUrl) {
    return { delivered: false, reason: genHealthHandoffConfigured() ? "bad-url" : "not-configured" };
  }
  return { delivered: true, handoffUrl };
}
