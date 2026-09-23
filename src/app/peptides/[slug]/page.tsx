import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import { PEPTIDES, getPeptide } from "@/lib/peptides";

export function generateStaticParams() {
  return PEPTIDES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPeptide(slug);
  return p ? { title: p.name, description: p.oneLiner } : { title: "Peptide" };
}

export default async function PeptidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p) notFound();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: p.name,
            description: p.oneLiner,
            path: `/peptides/${p.slug}`,
            lastReviewed: p.updated,
            about: { name: p.name, description: `${p.subtitle}. ${p.oneLiner}` },
          }),
          breadcrumbSchema([
            { name: "Peptides", path: "/peptides" },
            { name: p.name, path: `/peptides/${p.slug}` },
          ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Link
            href="/peptides"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-clinic"
          >
            ← Peptide library
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {p.category}
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl">{p.name}</h1>
          <p className="mt-2 text-sm uppercase tracking-wide text-ink-soft">{p.subtitle}</p>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          {p.intro.map((para, i) => (
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

          <section className="mt-12">
            <h2 className="text-2xl">What people use it for</h2>
            <ul className="mt-5 space-y-4">
              {p.uses.map((u) => (
                <li key={u.use} className="rounded-xl2 border border-ink/10 p-5">
                  <p className="font-semibold text-ink">{u.use}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{u.inShort}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">Who it is not for</h2>
            <ul className="mt-5 space-y-3">
              {p.notFor.map((n, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinic" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink-muted">{p.wada}</p>
          </section>

          {/* Boxed warning — FDA-approved molecules that carry one. Rendered as a
              prominent safety callout, distinct from the neutral provenance box. */}
          {p.boxedWarning && (
            <section className="mt-12">
              <div className="rounded-xl2 border border-red-300 bg-red-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-red-800">
                  Boxed warning
                </p>
                <p className="mt-3 text-sm leading-relaxed text-red-900">{p.boxedWarning}</p>
              </div>
            </section>
          )}

          {/* Availability / regulatory caveat — where compounding is limited or a
              category distinction matters. */}
          {p.availabilityNote && (
            <section className="mt-12">
              <div className="rounded-xl2 border border-amber-300 bg-amber-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                  Availability &amp; regulatory status
                </p>
                <p className="mt-3 text-sm leading-relaxed text-amber-900">{p.availabilityNote}</p>
              </div>
            </section>
          )}

          {/* Shared 503A provenance — identical on every page in the library,
              except where a routine-compounding claim would not be accurate under
              current federal rules (p.suppress503A). */}
          {!p.suppress503A && (
            <section className="mt-12">
              <div className="rounded-xl2 border border-ink/10 bg-ink/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-clinic">
                  Prepared for you by a licensed 503A compounding pharmacy
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  From a prescription in your name, using ingredients traceable to a named source,
                  under published sterile-compounding standards.
                </p>
              </div>
            </section>
          )}

          {/* Pairs well with — every name links to that peptide's own page, in a
              new tab so the reader keeps their place. */}
          {p.pairsWith.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl">Pairs well with</h2>
              <ul className="mt-5 space-y-3">
                {p.pairsWith.map((r) => (
                  <li key={r.slug} className="rounded-xl2 border border-ink/10 p-4">
                    <Link
                      href={`/peptides/${r.slug}`}
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

          {/* Full review — the approved long-form document, new tab. */}
          <section className="mt-12">
            {/* Now an HTML page rather than the PDF — still a new tab, as
                specified. The PDF is offered as a download on that page. */}
            <Link
              href={`/peptides/${p.slug}/full`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl2 border border-clinic/40 bg-clinic-light/40 p-6 transition hover:border-clinic"
            >
              <p className="text-lg font-semibold text-clinic">
                Read the full {p.name} review <span aria-hidden="true">↗</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                How it works, what the research actually measured and where it stopped, who it is
                not for in full, how it is sourced and prepared, and what your consultation covers.
              </p>
            </Link>
          </section>

          <div className="mt-12 flex flex-wrap gap-3">
            <CTA href={signupUrl}>Talk to a licensed provider</CTA>
            <CTA href="/peptides" variant="secondary">
              Back to the library
            </CTA>
          </div>

          {/* Primary sources — lightweight list, only where the molecule carries
              cited references. */}
          {p.sources && p.sources.length > 0 && (
            <section className="mt-12 rounded-xl2 border border-ink/15 bg-white p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl">Sources</h2>
              <ul className="mt-4 space-y-3">
                {p.sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-clinic underline decoration-clinic/30 underline-offset-2 transition hover:decoration-clinic"
                    >
                      {s.title} <span aria-hidden="true">↗</span>
                    </a>
                    <span className="ml-1 text-sm text-ink-muted">— {s.publisher}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <ImportantSafetyInfo className="mt-10" />
        </article>
      </Container>
    </>
  );
}
