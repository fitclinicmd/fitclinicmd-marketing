import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { PEPTIDES, peptidesByCategory } from "@/lib/peptides";
import { BLENDS } from "@/lib/blends";

export const metadata: Metadata = {
  title: "Peptide education library",
  description:
    "Start with the foundations, then browse single peptides or blends. One short page per compound, with a full review a click away.",
};

export default function PeptidesIndex() {
  const groups = peptidesByCategory();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: "Peptide education library",
            description:
              "Foundational knowledge, single peptides, and peptide blends — a short page for each, with a full review a click away.",
            path: "/peptides",
          }),
          breadcrumbSchema([{ name: "Peptides", path: "/peptides" }]),
        ]}
      />

      {/* Everything above this fold is navigation: the foundations first,
          then the two ways into the library. No scrolling required to reach
          either — that ordering is deliberate, per Michael 2026-08-25. */}
      <div className="wash border-b border-ink/10">
        <Container className="py-12 sm:py-14">
          <Eyebrow>Education library</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptides, explained plainly.</h1>

          {/* 1 · Foundations — opens in its own tab so nobody loses their place. */}
          <a
            href="/education/foundations.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 block rounded-xl2 border border-accent/60 bg-accent-light p-6 transition hover:border-clinic"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Start here
            </p>
            <h2 className="mt-2 text-2xl">Peptide foundational knowledge</h2>
            <p className="mt-2 max-w-2xl text-ink-soft">
              What a peptide actually is, why it is injected, who makes it, what “FDA approved”
              really means, how to read a health claim, and what happens at your first visit.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
              Read the foundations <span aria-hidden="true">↗</span>
            </span>
          </a>

          {/* 2 · The two libraries, side by side. */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="#single-peptides"
              className="group rounded-xl2 border border-ink/15 bg-white p-6 transition hover:border-clinic"
            >
              <h2 className="text-xl">Single Peptides</h2>
              <p className="mt-1 text-sm text-ink-muted">
                {PEPTIDES.length} compounds, one page each.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                Browse <span aria-hidden="true">→</span>
              </span>
            </Link>
            <Link
              href="/peptides/blends"
              className="group rounded-xl2 border border-ink/15 bg-white p-6 transition hover:border-clinic"
            >
              <h2 className="text-xl">Peptide Blends</h2>
              <p className="mt-1 text-sm text-ink-muted">
                {BLENDS.length} combinations, grouped by purpose.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                Browse <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </Container>
      </div>

      <Section id="single-peptides">
        <div className="max-w-2xl">
          <h2 className="text-3xl">Single peptides</h2>
          <p className="mt-3 text-ink-muted">
            One short page per compound — what it is, what people use it for, and who it is not
            for. Each links to a full review if you want the long version.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.category} className="mt-12">
            <h3 className="text-xl text-clinic">{g.category}</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.peptides.map((p) => (
                <Link key={p.slug} href={`/peptides/${p.slug}`} className="group block">
                  <Card className="h-full transition group-hover:border-clinic/40">
                    <h4 className="text-lg">{p.name}</h4>
                    <p className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
                      {p.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-ink-soft">{p.oneLiner}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-clinic">
                      Read about {p.name} →
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <ImportantSafetyInfo className="mt-14" />
      </Section>
    </>
  );
}
