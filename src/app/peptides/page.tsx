import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { PEPTIDES, peptidesByCategory, CATEGORY_ANCHORS } from "@/lib/peptides";
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
        <Container className="py-8 sm:py-14">
          <Eyebrow>Education library</Eyebrow>
          <h1 className="max-w-3xl text-3xl sm:text-5xl">Peptides, explained plainly.</h1>

          {/* 1 · The two education entry points. "Start here" is the ten-minute
              on-ramp (Todd, 2026-09-02); foundations is now the deeper second
              step, so it reduces beside it rather than leading. Both open in
              their own tab — they are static pages outside the app, and nobody
              should lose their place in the library. */}
          <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-[1.55fr_1fr] sm:gap-4">
            <a
              href="/education/start-here.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl2 border border-ink/15 border-l-4 border-l-clinic bg-white p-4 transition hover:border-clinic sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clinic">
                Start here
              </p>
              <h2 className="mt-1 text-lg sm:mt-2 sm:text-2xl">How peptides actually work</h2>
              <p className="mt-2 hidden max-w-xl text-ink-soft sm:block">
                Why the same peptide works for one person and not another — and how to get from a
                goal to the right group of compounds.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2 sm:mt-4">
                Read it <span aria-hidden="true">↗</span>
                <span className="font-normal text-ink-muted">· 10 min</span>
              </span>
            </a>

            <a
              href="/education/foundations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl2 border border-accent/60 bg-accent-light p-4 transition hover:border-clinic sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Go deeper
              </p>
              <h2 className="mt-1 text-base sm:mt-2 sm:text-xl">Peptide foundational knowledge</h2>
              <p className="mt-2 hidden text-sm text-ink-soft sm:block">
                Ten short pieces on how this field is regulated, who makes your medication, and
                what treatment actually involves.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2 sm:mt-4">
                Read the foundations <span aria-hidden="true">↗</span>
                <span className="font-normal text-ink-muted">· 20 min</span>
              </span>
            </a>
          </div>

          {/* 2 · The two libraries, side by side. */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
            <Link
              href="#single-peptides"
              className="group rounded-xl2 border border-ink/15 bg-white p-4 transition hover:border-clinic sm:p-6"
            >
              <h2 className="text-lg sm:text-xl">Single Peptides</h2>
              <p className="mt-1 text-xs text-ink-muted sm:text-sm">
                {PEPTIDES.length} compounds, one page each.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                Browse <span aria-hidden="true">→</span>
              </span>
            </Link>
            <Link
              href="/peptides/blends"
              className="group rounded-xl2 border border-ink/15 bg-white p-4 transition hover:border-clinic sm:p-6"
            >
              <h2 className="text-lg sm:text-xl">Peptide Blends</h2>
              <p className="mt-1 text-xs text-ink-muted sm:text-sm">
                {BLENDS.length} combinations, grouped by purpose.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                Browse <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>

          {/* 3 · Regulatory context. These two pages lost their cards in the
              library rebuild (#62) and have been reachable only from the footer
              since — roughly 4,600 words nobody could find. Restored BELOW the
              library buttons on purpose: anything added above them breaks the
              above-the-fold rule at 375px, which has only ~66px of slack. */}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
            <Link
              href="/peptides/fda-status"
              className="group flex items-baseline gap-2 rounded-xl2 border border-ink/10 bg-white/60 px-4 py-3 transition hover:border-clinic"
            >
              <span className="text-sm font-semibold text-ink">Peptides and the FDA</span>
              <span className="text-xs text-ink-muted">Where things actually stand</span>
              <span className="ml-auto text-sm text-clinic transition group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              href="/peptides/glp-1"
              className="group flex items-baseline gap-2 rounded-xl2 border border-ink/10 bg-white/60 px-4 py-3 transition hover:border-clinic"
            >
              <span className="text-sm font-semibold text-ink">GLP-1 medicines</span>
              <span className="text-xs text-ink-muted">Approved vs compounded</span>
              <span className="ml-auto text-sm text-clinic transition group-hover:translate-x-0.5" aria-hidden="true">
                →
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
            <h3
              id={CATEGORY_ANCHORS[g.category]}
              className="scroll-mt-32 text-xl text-clinic"
            >
              {g.category}
            </h3>
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
