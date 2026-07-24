// PUBLIC legal document registry for the marketing zone.
//
// ⚠️ SYNC NOTE: the patient application (`fitclinicmd-com`) holds the
// authoritative registry — it is what records the version a patient consented
// to. When a document is approved or its version bumped THERE, mirror it here.
// The version numbers must match; a patient must be able to read on the public
// site exactly the version they agreed to in the app.
//
// Unlike the app registry, this one does NOT carry the internal drafting
// checklists — those are working notes for counsel, not public content. Until a
// document is approved the public page says so plainly.

export type PublicLegalStatus = "PENDING" | "PUBLISHED";

export type PublicLegalDoc = {
  slug: string;
  title: string;
  summary: string;
  version: string;
  status: PublicLegalStatus;
  effectiveDate: string | null;
  /** Approved text, in order. Populated when status is PUBLISHED. */
  sections?: { heading: string; body: string }[];
};

export const PUBLIC_LEGAL_DOCS: PublicLegalDoc[] = [
  {
    slug: "privacy",
    title: "Notice of Privacy Practices",
    summary:
      "How medical information about you may be used and disclosed, and how you can get access to it.",
    version: "1.0",
    status: "PENDING",
    effectiveDate: null,
  },
  {
    slug: "terms",
    title: "Terms of Service",
    summary: "The agreement between you and FitClinicMD for use of this service.",
    version: "1.0",
    status: "PENDING",
    effectiveDate: null,
  },
  {
    slug: "telehealth-consent",
    title: "Informed Consent to Telehealth",
    summary:
      "What a telehealth visit is, its limits and risks, and what you agree to before being seen.",
    version: "1.0",
    status: "PENDING",
    effectiveDate: null,
  },
];

export function getPublicLegalDoc(slug: string): PublicLegalDoc | undefined {
  return PUBLIC_LEGAL_DOCS.find((d) => d.slug === slug);
}
