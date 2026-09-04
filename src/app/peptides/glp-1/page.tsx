import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import PrimarySources, { type Source } from "@/components/PrimarySources";

export const metadata: Metadata = {
  title: "GLP-1 therapy — Semaglutide, Tirzepatide, Retatrutide",
  description:
    "A plain explainer of the GLP-1 class: what each medicine is, how it works, which are FDA-approved brands, and the difference between an approved brand and a compounded preparation.",
};

// Unlike the peptide library, the leading GLP-1s are FDA-APPROVED medicines
// (as branded products, for specific indications). This page states the
// approved indications factually and is careful to distinguish an approved
// brand from a compounded preparation, and to note that retatrutide is
// investigational and not approved. No promissory language.

type Med = {
  name: string;
  tag: string;
  mechanism: string;
  what: string;
  brands?: { name: string; use: string }[];
  investigational?: boolean;
  studiedFor: string[];
};

const MEDS: Med[] = [
  {
    name: "Semaglutide",
    tag: "GLP-1 receptor agonist",
    mechanism: "Activates the GLP-1 receptor to help regulate appetite, slow gastric emptying, and improve blood-sugar control.",
    what: "One of the most recognized medicines for weight management and type 2 diabetes, and the active ingredient in several widely advertised prescription products.",
    brands: [
      { name: "Ozempic®", use: "type 2 diabetes" },
      { name: "Wegovy®", use: "chronic weight management" },
      { name: "Rybelsus®", use: "type 2 diabetes (oral tablet)" },
    ],
    studiedFor: [
      "Weight loss",
      "Reduced appetite",
      "Improved blood-sugar control",
      "Improved insulin sensitivity",
    ],
  },
  {
    name: "Tirzepatide",
    tag: "Dual GIP + GLP-1 receptor agonist",
    mechanism: "Activates both the GIP and GLP-1 pathways to regulate blood sugar, reduce appetite, slow gastric emptying, and support metabolic health.",
    what: "Activating both receptors has demonstrated significant weight loss and glycemic control in clinical studies.",
    brands: [
      { name: "Mounjaro®", use: "type 2 diabetes" },
      { name: "Zepbound®", use: "chronic weight management" },
    ],
    studiedFor: [
      "Significant weight loss",
      "Reduced appetite and food cravings",
      "Improved insulin sensitivity",
      "Better blood-sugar control",
    ],
  },
  {
    name: "Retatrutide",
    tag: "Investigational triple agonist (GLP-1 + GIP + glucagon)",
    mechanism: "Targets three receptors at once — GLP-1 (appetite, gastric emptying, blood sugar), GIP (insulin secretion), and glucagon (energy expenditure and fat metabolism).",
    what: "A next-generation molecule still in clinical development. It is not FDA-approved for any use, and no branded product exists.",
    investigational: true,
    studiedFor: [
      "Weight loss (in clinical studies)",
      "Improved glycemic control",
      "Increased caloric expenditure",
      "Reduction in visceral fat",
    ],
  },
];

/** Every URL confirmed to resolve on 2026-09-04 before shipping. */
const SOURCES: Source[] = [
  {
    href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize",
    title: "FDA clarifies policies for compounders as national GLP-1 supply begins to stabilize",
    publisher: "U.S. Food and Drug Administration",
    note: "Why compounded GLP-1s were widely available during the shortage, and what changed when it ended.",
  },
  {
    href: "https://www.fda.gov/drugs/human-drug-compounding/fda-telehealth-companies-what-know-when-promoting-compounded-drugs",
    title: "FDA to telehealth companies: what to know when promoting compounded drugs",
    publisher: "U.S. Food and Drug Administration",
    note: "The agency's own statement of where marketing claims cross the line.",
  },
  {
    href: "https://www.fda.gov/news-events/press-announcements/fda-warns-30-telehealth-companies-against-illegal-marketing-compounded-glp-1s",
    title: "FDA warns 30 telehealth companies against illegal marketing of compounded GLP-1s",
    publisher: "U.S. Food and Drug Administration",
  },
  {
    href: "https://www.fda.gov/news-events/press-announcements/fda-intends-take-action-against-non-fda-approved-glp-1-drugs",
    title: "FDA intends to take action against non-FDA-approved GLP-1 drugs",
    publisher: "U.S. Food and Drug Administration",
  },
];

export default function Glp1() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: "GLP-1 therapy",
            description:
              "Semaglutide, tirzepatide and retatrutide — and the difference between an FDA-approved brand and a compounded preparation.",
            path: "/peptides/glp-1",
            about: {
              name: "GLP-1 receptor agonists",
              description:
                "A class of medicines with FDA-approved brand forms. A compounded version of one is not the approved product.",
              activeIngredient: ["Semaglutide", "Tirzepatide", "Retatrutide"],
            },
          }),
          breadcrumbSchema([
          { name: "Peptides", path: "/peptides" },
          { name: "GLP-1 therapy", path: "/peptides/glp-1" },
        ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Eyebrow>Metabolic education</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">GLP-1 therapy</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Semaglutide, tirzepatide and the investigational triple agonist retatrutide — what each is, how it
            works, and what “FDA-approved” does and does not mean here.
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          <div className="rounded-xl2 border border-clinic/20 bg-clinic/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-clinic">Read this first</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The leading GLP-1 medicines are <strong>FDA-approved as branded products</strong> for specific
              conditions. A <strong>compounded</strong> preparation of the same active ingredient is a different
              thing: it is prepared by a licensed pharmacy against an individual prescription and is{" "}
              <strong>not an FDA-approved product</strong> — it has not been reviewed by the FDA for safety,
              effectiveness or quality. In February 2026 the FDA restricted ingredients used in mass-marketed
              compounded GLP-1 products and acted against misleading advertising. Whether a compounded GLP-1 is
              appropriate for you is a decision for a licensed provider after an individual evaluation.
            </p>
          </div>

          {MEDS.map((m) => (
            <section key={m.name} className="mt-10">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl">{m.name}</h2>
                <span
                  className={`inline-block rounded-md border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${
                    m.investigational
                      ? "border-amber-200 bg-amber-50 text-amber-800"
                      : "border-emerald-200 bg-emerald-50 text-emerald-800"
                  }`}
                >
                  {m.investigational ? "Investigational — not FDA-approved" : "FDA-approved (as branded product)"}
                </span>
              </div>
              <p className="mt-1 text-ink-muted">{m.tag}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{m.what}</p>

              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink/70">How it works</p>
              <p className="mt-1 leading-relaxed text-ink-soft">{m.mechanism}</p>

              {m.brands && (
                <>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink/70">
                    FDA-approved brand products
                  </p>
                  <ul className="mt-1 space-y-1 pl-5">
                    {m.brands.map((b) => (
                      <li key={b.name} className="list-disc text-ink-soft marker:text-clinic">
                        <strong>{b.name}</strong> — {b.use}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink/70">
                Studied for {m.investigational ? "(in trials)" : "(the approved uses above)"}
              </p>
              <ul className="mt-1 space-y-1 pl-5">
                {m.studiedFor.map((s) => (
                  <li key={s} className="list-disc text-ink-soft marker:text-clinic">
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="mt-12 flex flex-wrap gap-3">
            <CTA href={signupUrl}>Talk to a licensed provider</CTA>
            <Link href="/peptides" className="inline-flex items-center text-sm font-semibold text-clinic underline underline-offset-4 hover:text-clinic-deep">
              Back to the peptide library
            </Link>
          </div>

          <PrimarySources sources={SOURCES} className="mt-10" />

          <ImportantSafetyInfo className="mt-10" />
        </article>
      </Container>
    </>
  );
}
