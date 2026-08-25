import { SITE } from "./site";

// JSON-LD builders. Entity-level facts that are still open (legal entity name,
// registered address, provider roster) are deliberately omitted rather than
// guessed — a structured-data claim is still a claim. Fill them in once the
// entity structure is settled (COUNSEL-REVIEW-PACKET 1.1).

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description:
      "Telehealth clinic offering physician-guided peptide therapy and weight management (GLP-1), with medication fulfilled by a partner compounding pharmacy.",
    medicalSpecialty: ["Endocrine", "PrimaryCare"],
    availableService: [
      { "@type": "MedicalTherapy", name: "Peptide therapy" },
      { "@type": "MedicalTherapy", name: "Weight management program" },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.path}`,
    })),
  };
}

/**
 * MedicalWebPage for the education library — one per peptide and per blend.
 *
 * `about` is typed **Substance**, not Drug, on purpose. Drug is schema.org's
 * type for a medicinal product, and asserting it for a compounded peptide
 * would structurally imply exactly the approval status these pages spend their
 * word count denying. Substance is a MedicalEntity, is accurate for every
 * compound here, and claims nothing about regulatory standing.
 *
 * `reviewedBy` is deliberately ABSENT. MedicalWebPage supports it and Google
 * reads it, but no named clinician has reviewed these pages — asserting one
 * would fabricate a medical credential in machine-readable form, which is the
 * worst place to put a claim you cannot support. Add it only when a real
 * reviewer exists, with their real name and credential.
 *
 * `lastReviewed` uses the content's own `updated` date, which is maintained in
 * the registries and is a fact rather than an assertion about oversight.
 */
export function medicalWebPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  lastReviewed?: string;
  /** Omit on pages that are about a topic rather than a compound. */
  about?: { name: string; description: string; activeIngredient?: string[] };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SITE.url}${opts.path}#webpage`,
    url: `${SITE.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE.url}/#website` },
    publisher: { "@id": `${SITE.url}/#organization` },
    ...(opts.lastReviewed ? { lastReviewed: opts.lastReviewed } : {}),
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    ...(opts.about
      ? {
          about: {
            "@type": "Substance",
            name: opts.about.name,
            description: opts.about.description,
            ...(opts.about.activeIngredient?.length
              ? { activeIngredient: opts.about.activeIngredient }
              : {}),
          },
        }
      : {}),
  };
}

export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// Renders a JSON-LD block. Content is our own structured data, not user input.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
