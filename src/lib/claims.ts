// MARKETING CLAIMS REGISTRY — counsel-gated.
//
// Any statement about what a medication does, how well it works, expected
// outcomes, or pricing terms is a REGULATED CLAIM and lives here. Ordinary
// copy (how the service works, logistics, privacy) is written directly in the
// pages — it is not a claim.
//
// Compounded medications carry real advertising exposure: we must not imply
// FDA approval of a compounded preparation, and efficacy/outcome claims need
// substantiation. See COUNSEL-REVIEW-PACKET.md Part 4 in the application repo.
//
// HOW COUNSEL'S TEXT DROPS IN (per claim):
//   1. Replace `text` with the approved wording.
//   2. Record who approved it and when in `approval`.
//   3. Flip `status` to "APPROVED".
// Until then the claim renders as a clearly-marked placeholder and the site
// shows a pre-launch banner. Mirrors the legal-document registry in the app.

export type ClaimStatus = "PENDING_COUNSEL" | "APPROVED";

export type Claim = {
  id: string;
  /** Plain-language description of what this slot says, for counsel. */
  intent: string;
  status: ClaimStatus;
  /** Counsel-approved wording. Rendered only when status is APPROVED. */
  text?: string;
  /** Who approved it and when — recorded for the file. */
  approval?: string;
};

export const CLAIMS: Record<string, Claim> = {
  "hero-promise": {
    id: "hero-promise",
    intent:
      "Top-of-page statement of what the service offers. Must not promise an outcome or imply FDA approval of a compounded product.",
    status: "PENDING_COUNSEL",
  },
  "glp1-what-it-is": {
    id: "glp1-what-it-is",
    intent:
      "Description of compounded GLP-1 therapy: what the medication class is and how it is used in a supervised weight-management program.",
    status: "PENDING_COUNSEL",
  },
  "glp1-outcomes": {
    id: "glp1-outcomes",
    intent:
      "Any statement about expected weight-loss results, ranges or timelines. Requires substantiation and disclaimers, or must be omitted entirely.",
    status: "PENDING_COUNSEL",
  },
  "glp1-compounded-status": {
    id: "glp1-compounded-status",
    intent:
      "Accurate description of the regulatory status of compounded preparations, including that compounded drugs are not FDA-approved.",
    status: "PENDING_COUNSEL",
  },
  "hormone-what-it-is": {
    id: "hormone-what-it-is",
    intent:
      "Description of hormone/testosterone therapy and who it may be appropriate for. Gated on the controlled-substance decision (packet 1.2) — this treatment may not launch at all.",
    status: "PENDING_COUNSEL",
  },
  "hormone-outcomes": {
    id: "hormone-outcomes",
    intent: "Any statement about symptom improvement or results from hormone therapy.",
    status: "PENDING_COUNSEL",
  },
  "eligibility-summary": {
    id: "eligibility-summary",
    intent:
      "Plain summary of who may be a candidate. Must not function as a diagnostic screen and must not collect health information on this site.",
    status: "PENDING_COUNSEL",
  },
  "pricing-headline": {
    id: "pricing-headline",
    intent:
      "Price, billing interval and what is included. Must carry the automatic-renewal disclosures required by ROSCA and state law (packet 2.3(3)).",
    status: "PENDING_COUNSEL",
  },
  "pricing-autorenewal": {
    id: "pricing-autorenewal",
    intent:
      "The automatic-renewal disclosure shown before purchase: amount, interval, that the card on file is charged automatically, and how to cancel.",
    status: "PENDING_COUNSEL",
  },
  "provider-credentials": {
    id: "provider-credentials",
    intent:
      "How providers, their credentials and licensure are described, consistent with the entity structure (packet 1.1).",
    status: "PENDING_COUNSEL",
  },
};

export function getClaim(id: string): Claim | undefined {
  return CLAIMS[id];
}

export function pendingClaims(): Claim[] {
  return Object.values(CLAIMS).filter((c) => c.status !== "APPROVED");
}

export function allClaimsApproved(): boolean {
  return pendingClaims().length === 0;
}

// The site may only be indexed once every claim is approved AND indexing is
// explicitly switched on. Belt and braces: an unapproved claim can never be
// indexed by accident.
export function siteIsIndexable(): boolean {
  return process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true" && allClaimsApproved();
}
