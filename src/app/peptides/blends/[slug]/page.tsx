import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { signupUrl, MEDICAL_REVIEWER } from "@/lib/site";
import { BLENDS, getBlend } from "@/lib/blends";

/** "2026-08-25" → "August 25, 2026" (UTC, so the day never shifts). */
function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

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
  return b ? { title: b.name, description: b.oneLiner } : { title: "Blend" };
}

export default async function BlendPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBlend(slug);
  if (!b) notFound();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: b.name,
            description: b.oneLiner,
            path: `/peptides/blends/${b.slug}`,
            lastReviewed: b.updated,
            about: {
              name: b.name,
              description: b.oneLiner,
              // Naming the components is what lets a retrieval system connect a
              // blend to the individual compound pages.
              activeIngredient: b.composition.map((c) => c.peptide),
            },
          }),
          breadcrumbSchema([
            { name: "Peptides", path: "/peptides" },
            { name: "Blends", path: "/peptides/blends" },
            { name: b.name, path: `/peptides/blends/${b.slug}` },
          ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Link
            href="/peptides/blends"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-clinic"
          >
            ← Peptide blends
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {b.category}
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl">{b.name}</h1>
          <p className="mt-2 text-lg text-ink-soft">{b.oneLiner}</p>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
            {MEDICAL_REVIEWER ? (
              <>
                <span>Medically reviewed by {MEDICAL_REVIEWER}</span>
                <span aria-hidden="true">·</span>
              </>
            ) : null}
            <span>Last updated {formatDate(b.updated)}</span>
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          {b.intro.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "rounded-xl2 border border-accent/40 bg-accent-light/40 p-5 text-lg leading-relaxed text-ink-soft"
                  : "mt-4 leading-relaxed text-ink-soft"
              }
            >
              {para}
            </p>
          ))}

          {/* At a glance — scannable summary from fields we already carry. */}
          <section className="mt-8">
            <div className="rounded-xl2 border border-ink/10 bg-white p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clinic">
                At a glance
              </p>
              <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[180px_1fr]">
                <dt className="font-semibold text-ink">Composition</dt>
                <dd className="text-ink-soft">{b.composition.map((c) => c.peptide).join(" + ")}</dd>
                <dt className="font-semibold text-ink">What it&apos;s used for</dt>
                <dd className="text-ink-soft">{b.uses.map((u) => u.use).join(" · ")}</dd>
                {b.wada ? (
                  <>
                    <dt className="font-semibold text-ink">Sport (WADA)</dt>
                    <dd className="text-ink-soft">{b.wada}</dd>
                  </>
                ) : null}
                <dt className="font-semibold text-ink">Provenance</dt>
                <dd className="text-ink-soft">
                  Compounded by a licensed U.S. pharmacy;{" "}
                  <Link href="/verify" className="font-semibold text-clinic hover:underline">
                    verify the exact pharmacy, batch and COA
                  </Link>
                  .
                </dd>
                <dt className="font-semibold text-ink">Last updated</dt>
                <dd className="text-ink-soft">{formatDate(b.updated)}</dd>
              </dl>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">What&apos;s in it</h2>
            <p className="mt-2 text-sm text-ink-muted">
              This describes the preparation — it is not a dosing schedule. What is actually used is
              decided by the treating provider.
            </p>
            <ul className="mt-6 space-y-5">
              {b.composition.map((c) => (
                <li key={c.peptide} className="rounded-xl2 border border-ink/10 p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-ink">{c.peptide}</p>
                    <p className="font-mono text-xs text-ink-muted">{c.dose}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.role}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">What it&apos;s used for</h2>
            <ul className="mt-5 space-y-4">
              {b.uses.map((u) => (
                <li key={u.use} className="rounded-xl2 border border-ink/10 p-5">
                  <p className="font-semibold text-ink">{u.use}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{u.inShort}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">Who it&apos;s not for</h2>
            <ul className="mt-5 space-y-3">
              {b.notFor.map((n, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinic" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            {b.wada && <p className="mt-5 text-sm text-ink-muted">{b.wada}</p>}
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              A combination also carries every exclusion of every peptide in it — those are listed in
              full on each component&apos;s own page.
            </p>
          </section>

          <section className="mt-12">
            <div className="rounded-xl2 border border-ink/10 bg-ink/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-clinic">
                Prepared for you by a licensed 503A compounding pharmacy
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                From a prescription in your name, using ingredients traceable to a named source,
                under published sterile-compounding standards.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Most sites can&apos;t tell you where your blend actually came from. We can: after your
                order ships, see the exact licensed U.S. pharmacy that compounded it, its batch and
                Certificate of Analysis — on a tamper-evident record you can check yourself.
              </p>
              <Link
                href="/verify"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clinic hover:underline"
              >
                Verify your order <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          {/* Pairs well with — links to the individual peptide pages, new tab. */}
          {b.pairsWith.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl">Pairs well with</h2>
              <ul className="mt-5 space-y-3">
                {b.pairsWith.map((r) => (
                  <li key={`${r.kind}-${r.slug}`} className="rounded-xl2 border border-ink/10 p-4">
                    <Link
                      href={r.kind === "blend" ? `/peptides/blends/${r.slug}` : `/peptides/${r.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-clinic hover:underline"
                    >
                      {r.name} <span aria-hidden="true">↗</span>
                    </Link>
                    <p className="mt-1 text-sm text-ink-soft">{r.reason}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12">
            <Link
              href={`/peptides/blends/${b.slug}/full`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl2 border border-clinic/40 bg-clinic-light/40 p-6 transition hover:border-clinic"
            >
              <p className="text-lg font-semibold text-clinic">
                Read the full {b.name} review <span aria-hidden="true">↗</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                How the combination is put together, what each component contributes, who it is not
                for in full, how it is sourced and prepared, and what your consultation covers.
              </p>
            </Link>
          </section>

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
