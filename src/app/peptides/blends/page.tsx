import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import { blendsByCategory, BLENDS, EVIDENCE_NOTE } from "@/lib/blends";

export const metadata: Metadata = {
  title: "Peptide blends",
  description:
    "Nineteen compounded peptide combinations, grouped by what each is for. Every one is unstudied as a combination — the evidence belongs to the individual peptides, and each page says so plainly.",
};

export default function Blends() {
  const groups = blendsByCategory();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: "Peptide blends",
            description:
              "Compounded peptide combinations, grouped by purpose. Every one is unstudied as a combination — the evidence belongs to the individual peptides.",
            path: "/peptides/blends",
          }),
          breadcrumbSchema([
            { name: "Peptides", path: "/peptides" },
            { name: "Blends", path: "/peptides/blends" },
          ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Eyebrow>Education library</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptide blends</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            A blend pairs two or more peptides that work toward the same goal. There are{" "}
            {BLENDS.length} of them here, grouped by what they are for. Each has its own page
            explaining why those particular peptides are put together — and what is, and is not,
            known about the combination.
          </p>
        </Container>
      </div>

      <Section>
        {/* The evidence position, once, at the top of the index — the same
            note repeats on every individual blend page. */}
        <div className="rounded-xl2 border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
            Read this first
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed text-amber-900/90">{EVIDENCE_NOTE}</p>
        </div>

        {groups.map((g) => (
          <div key={g.category} className="mt-14">
            <h2 className="text-2xl">{g.category}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {g.blends.map((b) => (
                <Link key={b.slug} href={`/peptides/blends/${b.slug}`} className="group block">
                  <Card className="h-full transition group-hover:border-clinic/40">
                    <h3 className="text-xl">{b.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{b.tagline}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Built from
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {b.components.map((c) => (
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

        <div className="mt-14 flex flex-wrap gap-3">
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
