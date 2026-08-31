import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import { PEPTIDES, getPeptide } from "@/lib/peptides";
import { getFullReview, reviewPdfUrl } from "@/lib/fullReviews";
import FullReviewBody from "@/components/FullReviewBody";

export function generateStaticParams() {
  return PEPTIDES.filter((p) => getFullReview("peptide", p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getFullReview("peptide", slug);
  return r ? { title: r.title, description: r.standfirst } : { title: "Full review" };
}

export default async function PeptideFullReview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getFullReview("peptide", slug);
  const p = getPeptide(slug);
  if (!r || !p) notFound();

  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: r.title,
            description: r.standfirst,
            path: `/peptides/${slug}/full`,
            lastReviewed: p.updated,
            about: { name: p.name, description: `${p.subtitle}. ${p.oneLiner}` },
          }),
          breadcrumbSchema([
            { name: "Peptides", path: "/peptides" },
            { name: p.name, path: `/peptides/${slug}` },
            { name: "Full review", path: `/peptides/${slug}/full` },
          ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Link
            data-print-hide
            href={`/peptides/${slug}`}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-clinic"
          >
            ← {p.name}
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {r.category}
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl">{r.title}</h1>
          {r.subtitle && (
            <p className="mt-2 text-sm uppercase tracking-wide text-ink-soft">{r.subtitle}</p>
          )}
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          <p className="rounded-xl2 border border-accent/40 bg-accent-light/40 p-5 text-lg leading-relaxed text-ink-soft">
            {r.standfirst}
          </p>

          <FullReviewBody sections={r.sections} />

          {/* The approved PDF stays available — same content, for printing or
              for a provider who wants the document rather than the page. */}
          <section data-print-hide className="mt-12">
            <a
              href={reviewPdfUrl("peptide", slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-clinic hover:text-clinic"
            >
              Download this review as a PDF <span aria-hidden="true">↓</span>
            </a>
          </section>

          <div data-print-hide className="mt-10 flex flex-wrap gap-3">
            <CTA href={signupUrl}>Talk to a licensed provider</CTA>
            <CTA href={`/peptides/${slug}`} variant="secondary">
              Back to {p.name}
            </CTA>
          </div>

          <ImportantSafetyInfo className="mt-10" />
        </article>
      </Container>
    </>
  );
}
