import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { blendsByCategory, BLENDS } from "@/lib/blends";

export const metadata: Metadata = {
  title: "Peptide blends",
  description:
    "Compounded peptide combinations, grouped by purpose. A short page for each, with a full review a click away.",
};

export default function BlendsIndex() {
  const groups = blendsByCategory();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: "Peptide blends",
            description: "Compounded peptide combinations, grouped by purpose.",
            path: "/peptides/blends",
          }),
          breadcrumbSchema([
            { name: "Peptides", path: "/peptides" },
            { name: "Blends", path: "/peptides/blends" },
          ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-12 sm:py-14">
          <Eyebrow>Education library</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptide blends</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            A blend combines peptides that work toward the same goal. There are {BLENDS.length},
            grouped by what they are for. Each has a short page, with a full review a click away.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
            href="/education/foundations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-accent/60 bg-accent-light px-4 py-2 text-sm font-semibold text-ink transition hover:border-clinic"
            >
              Peptide foundations <span aria-hidden="true">↗</span>
            </a>
            <Link
              href="/peptides#single-peptides"
              className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-clinic hover:text-clinic"
            >
              Single Peptides →
            </Link>
          </div>
        </Container>
      </div>

      <Section>
        {groups.map((g) => (
          <div key={g.category} className="mt-2 first:mt-0 [&:not(:first-child)]:mt-12">
            <h2 className="text-xl text-clinic">{g.category}</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {g.blends.map((b) => (
                <Link key={b.slug} href={`/peptides/blends/${b.slug}`} className="group block">
                  <Card className="h-full transition group-hover:border-clinic/40">
                    <h3 className="text-xl">{b.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{b.oneLiner}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      What&apos;s in it
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {b.composition.map((c) => (
                        <span
                          key={c.peptide}
                          className="rounded-md border border-ink/10 bg-white px-2 py-1 text-xs text-ink-soft"
                        >
                          {c.peptide}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-block text-sm font-semibold text-clinic">
                      Read about {b.name} →
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
