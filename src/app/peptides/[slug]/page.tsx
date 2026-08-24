import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import {
  PEPTIDES,
  getPeptide,
  publishedPeptides,
  TIER_LABEL,
  TIER_TONE,
  type Tier,
} from "@/lib/peptides";

export function generateStaticParams() {
  return publishedPeptides().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPeptide(slug);
  return p ? { title: `${p.name} — education`, description: p.summary } : { title: "Peptide" };
}

function TierChip({ tier, note }: { tier: Tier; note?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${TIER_TONE[tier]}`}
    >
      {TIER_LABEL[tier]}
      {note ? <span className="font-normal normal-case opacity-70">{note}</span> : null}
    </span>
  );
}

export default async function PeptidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPeptide(slug);
  if (!p || p.status !== "PUBLISHED") notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Peptides", path: "/peptides" },
          { name: p.name, path: `/peptides/${p.slug}` },
        ])}
      />

      {/* 1 · Name and evidence chip */}
      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Link href="/peptides" className="text-xs font-semibold uppercase tracking-[0.18em] text-clinic">
            ← Peptide library
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl">{p.name}</h1>
          <p className="mt-2 text-lg text-ink-soft">{p.drugClass}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <TierChip tier={p.tier} note={p.tierNote} />
            <span className="max-w-xl text-sm text-ink-muted">{p.chipSub}</span>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          {/* 2 · Standfirst */}
          {p.standfirst && (
            <p className="rounded-xl2 border border-accent/40 bg-accent-light/40 p-5 text-lg italic leading-relaxed text-ink-soft">
              {p.standfirst}
            </p>
          )}

          {/* 3 · What it is */}
          {p.whatItIs && (
            <section className="mt-10">
              <h2 className="text-2xl">What it is</h2>
              {p.whatItIs.map((para, i) => (
                <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </section>
          )}

          {/* 4 · What people use it for */}
          {p.uses && (
            <section className="mt-12">
              <h2 className="text-2xl">What people use it for</h2>
              <div className="mt-4 overflow-hidden rounded-xl2 border border-ink/10">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-ink/[0.03] text-xs uppercase tracking-wide text-ink-muted">
                    <tr>
                      <th className="p-3 font-semibold">Used for</th>
                      <th className="p-3 font-semibold">Evidence</th>
                      <th className="p-3 font-semibold">What that means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.uses.map((row, i) => (
                      <tr key={i} className="border-t border-ink/10 align-top">
                        <td className="p-3 font-semibold text-ink">{row.use}</td>
                        <td className="p-3">
                          <span
                            className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${TIER_TONE[row.tier]}`}
                          >
                            {TIER_LABEL[row.tier]}
                          </span>
                        </td>
                        <td className="p-3 text-ink-soft">{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* 5–6 · Evidence sections */}
          {p.evidence?.map((sec, i) => (
            <section key={i} className="mt-12">
              <h2 className="text-2xl">{sec.heading}</h2>
              {sec.paras.map((para, j) => (
                <p key={j} className="mt-4 leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
              {sec.callout && (
                <p className="mt-5 rounded-xl2 border-l-4 border-accent bg-accent-light/40 p-4 font-medium text-ink">
                  {sec.callout}
                </p>
              )}
            </section>
          ))}

          {/* 7 · Common misunderstandings */}
          {p.misunderstandings && (
            <section className="mt-12">
              <h2 className="text-2xl">Common misunderstandings</h2>
              <ul className="mt-4 space-y-4">
                {p.misunderstandings.map((m, i) => (
                  <li key={i} className="rounded-xl2 border border-ink/10 p-4">
                    <p className="font-semibold text-ink">“{m.claim}”</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.reality}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8 · Who it is not for */}
          {p.notFor && (
            <section className="mt-12">
              <h2 className="text-2xl">Who it is not for</h2>
              <ul className="mt-4 space-y-2 pl-5">
                {p.notFor.map((it, i) => (
                  <li key={i} className="list-disc text-ink-soft marker:text-clinic">
                    {it}
                  </li>
                ))}
              </ul>
              {p.dopingLine && (
                <p className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
                  {p.dopingLine}
                </p>
              )}
            </section>
          )}

          {/* 9 · What to ask your provider */}
          {p.questions && (
            <section className="mt-12">
              <h2 className="text-2xl">What to ask your provider</h2>
              <ul className="mt-4 space-y-2 pl-5">
                {p.questions.map((q, i) => (
                  <li key={i} className="list-disc text-ink-soft marker:text-clinic">
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 10 · Clinical detail — referring-provider level */}
          {p.clinicalDetail && (
            <section className="mt-12">
              <div className="rounded-xl2 border border-ink/15 bg-ink/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-clinic">
                  Clinical detail · for referring providers
                </p>
                {p.clinicalDetail.map((para, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* Handoff */}
          <div className="mt-12 flex flex-wrap gap-3">
            <CTA href={signupUrl}>Talk to a licensed provider</CTA>
            <CTA href="/peptides" variant="secondary">
              Back to the library
            </CTA>
          </div>

          {/* 11 · Disclosure */}
          <ImportantSafetyInfo className="mt-10" />
        </article>
      </Container>
    </>
  );
}
