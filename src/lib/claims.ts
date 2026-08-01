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
// STATUS MODEL:
//   PENDING_COUNSEL — no text yet; renders a placeholder describing the slot.
//   DRAFT           — proposed text drafted for counsel review; renders the
//                     text with a small "draft · pending counsel" marker. NOT
//                     treated as approved: the site stays non-indexable and the
//                     pre-launch banner stays up until every claim is APPROVED.
//   APPROVED        — counsel-finalized; renders the text clean.
//
// The draft text below (2026-07-31) is written in the conservative,
// descriptive style counsel referenced (telewellnessmd.com): associative
// wording ("widely studied for", "may support") rather than efficacy promises;
// the compounded-not-FDA-approved disclosure; "individual results vary"; and a
// licensed-U.S.-provider/pharmacy framing. It reflects the answered decisions
// (TRT + other prescribed meds available by telehealth; entity Medvora LLC).
// It is DRAFT for counsel review — not approved.
//
// HOW COUNSEL'S APPROVAL DROPS IN (per claim): edit `text` to the final wording,
// record who/when in `approval`, and set `status: "APPROVED"`.

export type ClaimStatus = "PENDING_COUNSEL" | "DRAFT" | "APPROVED";

export type Claim = {
  id: string;
  /** Plain-language description of what this slot says, for counsel. */
  intent: string;
  status: ClaimStatus;
  /** Proposed (DRAFT) or approved (APPROVED) wording. */
  text?: string;
  /** Who approved it and when — recorded for the file. */
  approval?: string;
};

export const CLAIMS: Record<string, Claim> = {
  "hero-promise": {
    id: "hero-promise",
    intent:
      "Top-of-page statement of what the service offers. Must not promise an outcome or imply FDA approval of a compounded product.",
    status: "DRAFT",
    text: "Physician-guided weight, hormone, and wellness therapies — prescribed by licensed U.S. providers when it's appropriate for you, and shipped to your door.",
  },
  "glp1-what-it-is": {
    id: "glp1-what-it-is",
    intent:
      "Description of compounded GLP-1 therapy: what the medication class is and how it is used in a supervised weight-management program.",
    status: "DRAFT",
    text: "GLP-1 medications are a class of prescription drugs widely studied for use in medically supervised weight management, alongside diet and lifestyle changes. When a provider prescribes one, it is prepared by a licensed U.S. compounding pharmacy. Compounded medications are not FDA-approved.",
  },
  "glp1-outcomes": {
    id: "glp1-outcomes",
    intent:
      "Any statement about expected weight-loss results, ranges or timelines. Requires substantiation and disclaimers, or must be omitted entirely.",
    status: "DRAFT",
    text: "Individual results vary and are not guaranteed. Your provider will discuss what may be reasonable for you based on your health history.",
  },
  "glp1-compounded-status": {
    id: "glp1-compounded-status",
    intent:
      "Accurate description of the regulatory status of compounded preparations, including that compounded drugs are not FDA-approved.",
    status: "DRAFT",
    text: "Compounded medications are prepared by a state-licensed pharmacy for an individual patient based on a provider's evaluation. They have not been evaluated or approved by the U.S. Food and Drug Administration as safe or effective for the treatment of any condition.",
  },
  "hormone-what-it-is": {
    id: "hormone-what-it-is",
    intent:
      "Description of hormone/testosterone therapy and who it may be appropriate for. Counsel confirmed TRT + other prescribed meds are available by telehealth, gated by provider licensure.",
    status: "DRAFT",
    text: "Physician-guided hormone therapy — including testosterone (TRT) and other hormone support — offered through licensed U.S. providers and partner pharmacies for patients whose evaluation and bloodwork indicate it may be appropriate. It is never prescribed on symptoms alone.",
  },
  "hormone-outcomes": {
    id: "hormone-outcomes",
    intent: "Any statement about symptom improvement or results from hormone therapy.",
    status: "DRAFT",
    text: "Any benefit depends on your individual clinical picture and is determined by your provider. Individual results vary and are not guaranteed.",
  },
  "eligibility-summary": {
    id: "eligibility-summary",
    intent:
      "Plain summary of who may be a candidate. Must not function as a diagnostic screen and must not collect health information on this site.",
    status: "DRAFT",
    text: "This is general wellness information, not a medical evaluation. Whether a therapy is appropriate is decided by a licensed provider after you register and complete an evaluation — not on this page. Please don't share health details here.",
  },
  "pricing-headline": {
    id: "pricing-headline",
    intent:
      "Price, billing interval and what is included. Must carry the automatic-renewal disclosures required by ROSCA and state law (packet 2.3(3)).",
    status: "DRAFT",
    text: "$[AMOUNT] per [month/quarter] — includes your provider consultation and, when prescribed, your medication and shipping. No hidden fees.",
  },
  "pricing-autorenewal": {
    id: "pricing-autorenewal",
    intent:
      "The automatic-renewal disclosure shown before purchase: amount, interval, that the card on file is charged automatically, and how to cancel.",
    status: "DRAFT",
    text: "Your membership renews automatically every [interval] at $[amount], charged to the card on file, until you cancel. Cancel anytime from your account; cancellation stops future charges.",
  },
  "provider-credentials": {
    id: "provider-credentials",
    intent:
      "How providers, their credentials and licensure are described, consistent with the entity structure (Medvora LLC).",
    status: "DRAFT",
    text: "Care is provided by licensed, U.S.-based physicians and clinicians (MD, DO, NP, or PA) authorized to practice in your state, working with state-licensed pharmacies.",
  },
  "peptides-what-it-is": {
    id: "peptides-what-it-is",
    intent:
      "Description of the peptide-therapy category and how it is offered. Peptides are a regulatory gray area for compounding — wording must be especially conservative and must not imply FDA approval or a specific result.",
    status: "DRAFT",
    text: "Peptide therapies are a group of prescription compounds studied for uses such as recovery, performance support, and general wellness. Where a provider determines it is appropriate after an individual evaluation, they are prepared by a licensed U.S. compounding pharmacy. Compounded medications are not FDA-approved, and availability depends on your provider's judgment and applicable law.",
  },
  "peptides-outcomes": {
    id: "peptides-outcomes",
    intent: "Any statement about results from peptide therapy. Keep conservative — no performance or outcome promises.",
    status: "DRAFT",
    text: "Individual results vary and are not guaranteed. A provider will discuss whether a peptide therapy is appropriate for your goals and health history.",
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

// The site may only be indexed once every claim is APPROVED (drafts do not
// count) AND indexing is explicitly switched on. Belt and braces: an unapproved
// claim can never be indexed by accident.
export function siteIsIndexable(): boolean {
  return process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true" && allClaimsApproved();
}
