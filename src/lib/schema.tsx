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
