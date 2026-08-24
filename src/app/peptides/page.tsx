import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { PEPTIDES, TIER_LABEL, TIER_TONE, type Peptide } from "@/lib/peptides";

export const metadata: Metadata = {
  title: "Peptide education library",
  description:
    "Plain, sourced explanations of individual peptides — what each one is, what people use it for, what the evidence actually shows, and who it is not for. Education, not marketing.",
};

// Same editorial line as /learn: describe use, never promise outcome. The
// evidence tier is a specification shown up front, not a warning. Nothing here
// is an FDA-approved product except where a page expressly says so.

function PeptideCard({ p }: { p: Peptide }) {
  const inner = (
    <Card className="h-full transition group-hover:border-clinic group-hover:shadow-[0_6px_20px_rgba(14,124,134,.10)]">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-block rounded border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${TIER_TONE[p.tier]}`}
        >
          {TIER_LABEL[p.tier]}
        </span>
        {p.status === "PLANNED" && (
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
            In preparation
          </span>
        )}
      </div>
      <h3 className="mt-3 text-xl">{p.name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{p.drugClass}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
    </Card>
  );

  return p.status === "PUBLISHED" ? (
    <Link href={`/peptides/${p.slug}`} className="group block">
      {inner}
    </Link>
  ) : (
    <div className="block opacity-80">{inner}</div>
  );
}

export default function PeptideLibrary() {
  const categories = Array.from(new Set(PEPTIDES.map((p) => p.category)));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Peptides", path: "/peptides" }])} />

      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Education library</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Every peptide, explained honestly.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            One page per compound, all built the same way: what it is, what people use it for, what
            the evidence actually shows, and who it is not for. The evidence tier is stated up front —
            a specification, not a sales pitch. Nothing here is an FDA-approved product except where a
            page expressly says so.
          </p>
        </Container>
      </div>

      <Section>
        <div className="mb-14 grid gap-6 sm:grid-cols-2">
          <Link href="/peptides/fda-status" className="group block">
            <Card className="h-full border-clinic/20 bg-clinic/[0.03] transition group-hover:border-clinic group-hover:shadow-[0_6px_20px_rgba(14,124,134,.10)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-clinic">Start here</p>
              <h3 className="mt-2 text-xl">Peptides and the FDA — where things actually stand</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                What the July 2026 advisory vote did and did not do — and why “an FDA panel recommended it” and
                “the FDA approved it” are not the same thing.
              </p>
            </Card>
          </Link>
          <Link href="/peptides/glp-1" className="group block">
            <Card className="h-full border-clinic/20 bg-clinic/[0.03] transition group-hover:border-clinic group-hover:shadow-[0_6px_20px_rgba(14,124,134,.10)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-clinic">Metabolic</p>
              <h3 className="mt-2 text-xl">GLP-1 therapy</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Semaglutide, tirzepatide and retatrutide — and the difference between an FDA-approved brand and a
                compounded preparation.
              </p>
            </Card>
          </Link>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-14 last:mb-0">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">{cat}</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PEPTIDES.filter((p) => p.category === cat).map((p) => (
                <PeptideCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        ))}

        <ImportantSafetyInfo className="mt-14" />
      </Section>
    </>
  );
}
