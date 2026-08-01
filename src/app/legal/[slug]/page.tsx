import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui";
import { PUBLIC_LEGAL_DOCS, getPublicLegalDoc } from "@/lib/legal";
import { SITE, APP_LIVE } from "@/lib/site";

export function generateStaticParams() {
  return PUBLIC_LEGAL_DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getPublicLegalDoc(slug);
  return doc ? { title: doc.title, description: doc.summary } : { title: "Legal" };
}

export default async function LegalDoc({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getPublicLegalDoc(slug);
  if (!doc) notFound();

  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
        <Link href="/" className="hover:text-clinic">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{doc.title}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl">{doc.title}</h1>
      <p className="mt-3 text-ink-muted">{doc.summary}</p>
      <p className="mt-4 text-sm text-ink-muted">
        Version {doc.version}
        {doc.effectiveDate ? ` · Effective ${doc.effectiveDate}` : " · Not yet in effect"}
      </p>

      <div className="mt-10">
        {doc.status === "PUBLISHED" && doc.sections?.length ? (
          <div className="space-y-8">
            {doc.sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-xl">{s.heading}</h2>
                <p className="mt-2 whitespace-pre-wrap leading-relaxed text-ink-soft">{s.body}</p>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-xl2 border border-ink/10 bg-white p-6">
            <h2 className="text-lg">This document is being finalized</h2>
            <p className="mt-2 text-ink-muted">
              We&apos;re completing this document with our legal counsel ahead of launch. It will be
              published here, and you&apos;ll be asked to review and agree to it before any care
              begins.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Questions in the meantime?{" "}
              <Link href="/contact" className="text-clinic underline underline-offset-4">
                Contact us
              </Link>
              {" — "}please don&apos;t include medical details.
            </p>
          </div>
        )}
      </div>

      <p className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink-muted">
        When you create an account, the version of each document you agree to is recorded with the
        date. You can always read the current version here
        {APP_LIVE ? (
          <>
            {" "}or in your account at{" "}
            <a href={SITE.appUrl} className="text-clinic underline underline-offset-4">
              {SITE.appUrl.replace("https://", "")}
            </a>
          </>
        ) : null}
        .
      </p>
    </Container>
  );
}
