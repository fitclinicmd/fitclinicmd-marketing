import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, Eyebrow, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ARTICLES, getArticle, MEDICAL_REVIEW, reviewByline, type Block } from "@/lib/articles";
import { SITE, signupUrl } from "@/lib/site";

// Only PUBLISHED articles are real pages. Planned ones live as cards on /learn.
export function generateStaticParams() {
  return ARTICLES.filter((a) => a.status === "PUBLISHED").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? { title: a.title, description: a.summary } : { title: "Learn" };
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 text-2xl">
          {b.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2 pl-5">
          {b.items.map((it, j) => (
            <li key={j} className="list-disc text-ink-soft marker:text-clinic">
              {it}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p
          key={i}
          className="mt-6 rounded-xl2 border border-accent/40 bg-accent-light/40 p-4 text-sm text-ink-soft"
        >
          {b.text}
        </p>
      );
    default:
      return (
        <p key={i} className="mt-4 text-ink-soft leading-relaxed">
          {b.text}
        </p>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a || a.status !== "PUBLISHED" || !a.body) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.updated,
    dateModified: a.updated,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    ...(MEDICAL_REVIEW && {
      reviewedBy:
        MEDICAL_REVIEW.kind === "person"
          ? {
              "@type": "Person",
              name: MEDICAL_REVIEW.name,
              ...(MEDICAL_REVIEW.title ? { jobTitle: MEDICAL_REVIEW.title } : {}),
              ...(MEDICAL_REVIEW.credentials
                ? { honorificSuffix: MEDICAL_REVIEW.credentials }
                : {}),
            }
          : { "@type": "Organization", name: "FitClinicMD Clinical Team" },
      lastReviewed: (MEDICAL_REVIEW.kind === "person" && MEDICAL_REVIEW.reviewedOn) || a.updated,
    }),
    mainEntityOfPage: `${SITE.url}/learn/${a.slug}`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-clinic">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/learn" className="hover:text-clinic">
              Learn
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">{a.topic}</span>
          </nav>
          <Eyebrow>{a.topic}</Eyebrow>
          <h1 className="max-w-3xl text-3xl sm:text-4xl">{a.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{a.summary}</p>
          <p className="mt-4 text-sm text-ink-muted">
            {a.readMinutes} min read · Last updated {a.updated}
          </p>
          {MEDICAL_REVIEW && (
            <p className="mt-2 text-sm font-medium text-ink-soft">
              Medically reviewed by {reviewByline(MEDICAL_REVIEW)}
            </p>
          )}
        </Container>
      </div>

      <Section>
        <article className="mx-auto max-w-2xl">
          {a.body.map(renderBlock)}

          {a.sources && a.sources.length > 0 && (
            <div className="mt-10 rounded-xl2 border border-ink/10 bg-ink/[0.02] p-5">
              <h2 className="text-base font-semibold text-ink">Sources</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Peer-reviewed, open-access research behind this article — so you can read it yourself.
              </p>
              <ul className="mt-3 space-y-2">
                {a.sources.map((s) => (
                  <li key={s.href} className="text-sm">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-clinic underline decoration-clinic/30 underline-offset-2 hover:decoration-clinic"
                    >
                      {s.title} <span aria-hidden="true">↗</span>
                    </a>
                    <span className="ml-1 text-ink-muted">— {s.publisher}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink-muted">
            This article is general education, not medical advice, and does not create a
            provider-patient relationship. Whether any treatment is appropriate for you is decided by
            a licensed provider after an evaluation.
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTA href={signupUrl}>Get started</CTA>
            <Link href="/learn" className="text-sm text-clinic hover:text-clinic-deep">
              ← More from Learn
            </Link>
          </div>
        </article>
      </Section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: a.title, path: `/learn/${a.slug}` },
          ]),
          articleSchema,
        ]}
      />
    </>
  );
}
