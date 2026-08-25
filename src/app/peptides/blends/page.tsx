import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Peptide blends",
  description:
    "Purpose-built peptide combinations that pair compounds for a shared goal — recovery, metabolic support, longevity. Educational profiles in preparation.",
};

// Blends are curated combinations of the single peptides in the library. The
// individual-page profiles ship first (some already live); the per-blend
// education pages are in preparation. This page names the goal-based families
// and points to the individual compounds behind them, so a visitor can already
// explore the parts. Non-promotional — no outcome claims.
const FAMILIES: { name: string; goal: string; parts: string[] }[] = [
  { name: "Recovery & repair", goal: "Connective-tissue and soft-tissue recovery.", parts: ["BPC-157", "TB-500"] },
  { name: "Growth-hormone support", goal: "A smoother, more sustained GH pulse.", parts: ["CJC-1295", "Ipamorelin"] },
  { name: "Metabolic & fat loss", goal: "Appetite regulation and energy metabolism.", parts: ["AOD-9604", "5-Amino-1MQ"] },
  { name: "Longevity & cellular energy", goal: "Mitochondrial and cellular-energy support.", parts: ["NAD+", "MOTS-c", "Glutathione"] },
];

export default function Blends() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Peptides", path: "/peptides" },
          { name: "Blends", path: "/peptides/blends" },
        ])}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Eyebrow>Education library</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptide blends</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            A blend pairs two or more peptides that work toward the same goal. The individual profiles
            come first; each blend&apos;s own education page is in preparation. In the meantime, here are the
            goal-based families and the compounds behind them.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {FAMILIES.map((f) => (
            <Card key={f.name}>
              <span className="inline-block rounded border border-ink/15 bg-ink/5 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                In preparation
              </span>
              <h3 className="mt-3 text-xl">{f.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{f.goal}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">Built from</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {f.parts.map((part) => (
                  <span key={part} className="rounded-md border border-ink/10 bg-white px-2 py-1 text-xs text-ink-soft">
                    {part}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <CTA href={signupUrl}>Talk to a licensed provider</CTA>
          <Link
            href="/peptides"
            className="inline-flex items-center text-sm font-semibold text-clinic underline underline-offset-4 hover:text-clinic-deep"
          >
            Browse individual peptides
          </Link>
        </div>

        <ImportantSafetyInfo className="mt-12" />
      </Section>
    </>
  );
}
