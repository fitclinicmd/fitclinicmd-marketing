import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import { BLENDS, getBlend, EVIDENCE_NOTE } from "@/lib/blends";

export function generateStaticParams() {
  return BLENDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBlend(slug);
  return b ? { title: `${b.name} — blend education`, description: b.summary } : { title: "Blend" };
}

export default async function BlendPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBlend(slug);
  if (!b) notFound();

  const related = BLENDS.filter((x) => x.category === b.category && x.slug !== b.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Peptides", path: "/peptides" },
          { name: "Blends", path: "/peptides/blends" },
          { name: b.name, path: `/peptides/blends/${b.slug}` },
        ])}
      />

      {/* 1 · Name and category */}
      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Link
            href="/peptides/blends"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-clinic"
          >
            ← Peptide blends
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl">{b.name}</h1>
          <p className="mt-2 text-lg text-ink-soft">{b.tagline}</p>
          <p className="mt-5 max-w-2xl text-sm text-ink-muted">{b.category}</p>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          {/* 2 · Summary */}
          <p className="rounded-xl2 border border-accent/40 bg-accent-light/40 p-5 text-lg italic leading-relaxed text-ink-soft">
            {b.summary}
          </p>

          {/* 3 · The evidence position, stated before anything else.
                 A blend has no evidence of its own; saying so first is the
                 whole difference between education and marketing. */}
          <section className="mt-10">
            <div className="rounded-xl2 border border-amber-200 bg-amber-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
                What is known about this combination
              </p>
              <p className="mt-3 leading-relaxed text-amber-900/90">{EVIDENCE_NOTE}</p>
            </div>
          </section>

          {/* 4 · Why these peptides together */}
          <section className="mt-12">
            <h2 className="text-2xl">Why these together</h2>
            {b.rationale.map((para, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </section>

          {/* 5 · Composition. Doses are a fact about the preparation, not a
                 dosing instruction — the provider decides what is used. */}
          <section className="mt-12">
            <h2 className="text-2xl">What is in it</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Per 5 mL vial, as compounded. This describes the preparation — it is not a dosing
              schedule, and what is actually used is decided by the treating provider.
            </p>
            <ul className="mt-6 space-y-5">
              {b.components.map((c) => (
                <li key={c.peptide} className="rounded-xl2 border border-ink/10 p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-ink">
                      {c.slug ? (
                        <Link href={`/peptides/${c.slug}`} className="text-clinic hover:underline">
                          {c.peptide}
                        </Link>
                      ) : (
                        c.peptide
                      )}
                    </p>
                    <p className="font-mono text-xs text-ink-muted">{c.dose}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.role}</p>
                  {!c.slug && (
                    <p className="mt-2 text-xs text-ink-muted">
                      Its own education page is in preparation.
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* 6 · Context, deliberately not called "indications" */}
          <section className="mt-12">
            <h2 className="text-2xl">Where a provider might consider it</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Context, not indications. Nothing here is a reason to start treatment on its own, and
              none of it substitutes for an evaluation.
            </p>
            <ul className="mt-5 space-y-3">
              {b.consideredFor.map((c, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinic" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7 · Exclusions live on the component pages — point there rather
                 than restating them, so there is one source of truth. */}
          <section className="mt-12">
            <div className="rounded-xl2 border border-ink/15 bg-ink/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-clinic">
                Who this is not for
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A combination inherits every exclusion of every peptide in it. Those are listed in
                full on each component page above, and they are not optional — pregnancy,
                breastfeeding or trying to conceive, active or suspected cancer, and a number of
                condition-specific exclusions rule out much of this library outright. If any
                component excludes you, the combination excludes you.
              </p>
            </div>
          </section>

          {/* Who makes this — shared 503A standard, identical to peptide pages */}
          <section className="mt-12">
            <div className="rounded-xl2 border border-ink/10 bg-ink/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-clinic">
                Who makes this, and under what rules
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Everything we dispense is prepared by a licensed <strong>503A compounding pharmacy</strong> —
                not bought from a supplier and repackaged, and not sourced from an online seller. That
                designation carries specific, enforceable obligations: a prescription in your name after an
                evaluation; a state licence subject to board inspection; ingredients traceable to a named
                source and lot via a certificate of analysis from an FDA-registered facility; sterile
                preparation to USP standards; and a lot number and beyond-use date on every preparation.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                A compounded preparation is not an FDA-approved medicine — but it is the difference between a
                licensed pharmacy working to a standard and an unregulated website.
              </p>
            </div>
          </section>

          {/* 8 · Siblings in the same category */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl">Others in {b.category}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/peptides/blends/${r.slug}`}
                      className="block rounded-xl2 border border-ink/10 p-4 transition hover:border-clinic/40"
                    >
                      <p className="font-semibold text-ink">{r.name}</p>
                      <p className="mt-1 text-sm text-ink-muted">{r.tagline}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Handoff */}
          <div className="mt-12 flex flex-wrap gap-3">
            <CTA href={signupUrl}>Talk to a licensed provider</CTA>
            <CTA href="/peptides/blends" variant="secondary">
              All blends
            </CTA>
          </div>

          <ImportantSafetyInfo className="mt-10" />
        </article>
      </Container>
    </>
  );
}
