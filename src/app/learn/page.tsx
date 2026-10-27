import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import { publishedArticles, plannedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Weight & Peptide Care Education — FitClinicMD" },
  description:
    "Straightforward education on telehealth, weight management, peptides, compounded medication, labs, and billing from FitClinicMD.",
};

// Content is sourced from lib/articles.ts. Anything describing what a medication
// does or how well it works is a regulated claim and must clear review before
// publication (see lib/claims.ts); articles here stay general and non-promissory.

export default function Learn() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Learn</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Plain answers, not marketing.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Straightforward explanations of how this kind of care works — so you can judge any
            clinic, including ours, on the merits.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {publishedArticles().map((a) => (
            <Link key={a.slug} href={`/learn/${a.slug}`} className="group block">
              <Card className="h-full transition group-hover:border-clinic group-hover:shadow-[0_6px_20px_rgba(14,124,134,.10)]">
                <p className="text-xs uppercase tracking-wide text-clinic">{a.topic}</p>
                <h2 className="mt-2 text-xl">{a.title}</h2>
                <p className="mt-2 text-ink-muted">{a.summary}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                  Read <span aria-hidden="true">→</span>
                </p>
              </Card>
            </Link>
          ))}
        </div>

        {plannedArticles().length > 0 && (
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              More, in progress
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {plannedArticles().map((a) => (
                <Card key={a.slug} className="opacity-80">
                  <h3 className="text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{a.summary}</p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-ink-muted">Coming soon</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-xl2 border border-ink/10 bg-white p-6">
          <h2 className="text-lg">Have a question we haven&apos;t covered?</h2>
          <p className="mt-2 text-ink-muted">
            Our{" "}
            <Link href="/faq" className="text-clinic underline underline-offset-4">
              FAQ
            </Link>{" "}
            covers how visits, privacy and billing work. For anything else,{" "}
            <Link href="/contact" className="text-clinic underline underline-offset-4">
              get in touch
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 text-center">
          <CTA href={signupUrl}>Get started</CTA>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Learn", path: "/learn" },
        ])}
      />
    </>
  );
}
