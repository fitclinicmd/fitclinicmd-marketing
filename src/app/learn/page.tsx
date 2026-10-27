import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import { publishedArticles, plannedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  alternates: { canonical: "/learn" },
  openGraph: { url: "https://www.fitclinicmd.com/learn" },
  title: { absolute: "Weight & Peptide Care Education — FitClinicMD" },
  description:
    "Straightforward education on telehealth, weight management, peptides, compounded medication, labs, and billing from FitClinicMD.",
};

type ArticleGroup = { heading: string; slugs: readonly string[] };

const articleGroups: ArticleGroup[] = [
  {
    heading: "Start with weight and metabolic health",
    slugs: [
      "understanding-obesity",
      "type-2-diabetes-basics",
      "how-glp-1-medicines-work",
      "why-results-vary",
    ],
  },
  {
    heading: "Understand peptide therapy and the evidence",
    slugs: [
      "compounded-medication-explained",
      "peptides-and-hormone-therapy",
      "mitochondrial-peptides-explained",
      "how-the-fda-sees-peptide-medicines",
      "why-peptides-are-given-by-injection",
      "hormones-signals-peptides",
    ],
  },
  {
    heading: "Prepare for a clinician-guided conversation",
    slugs: [
      "what-a-telehealth-visit-involves",
      "why-your-labs-matter",
      "storing-your-peptide-medication",
      "glp-1-dosing-safety",
      "glp-1-shortage-and-compounding",
      "peptides-vs-research-chemicals",
    ],
  },
];

// Content is sourced from lib/articles.ts. Anything describing what a medication
// does or how well it works is a regulated claim and must clear review before
// publication (see lib/claims.ts); articles here stay general and non-promissory.

export default function Learn() {
  const articles = publishedArticles();

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
        <div className="space-y-12">
          {articleGroups.map((group) => (
            <section key={group.heading}>
              <h2 className="text-2xl">{group.heading}</h2>
              {group.heading === "Start with weight and metabolic health" && (
                <p className="mt-4 max-w-3xl text-ink-muted">
                  Start with the foundations of weight and metabolic health. Explore{" "}
                  <Link href="/treatments/weight-management" className="text-clinic underline underline-offset-4">
                    weight-management care
                  </Link>
                  , then read{" "}
                  <Link href="/blog/glp-1-agonists-for-weight-loss" className="text-clinic underline underline-offset-4">
                    GLP-1 agonists for weight loss
                  </Link>{" "}
                  for a practical overview.
                </p>
              )}
              {group.heading === "Understand peptide therapy and the evidence" && (
                <p className="mt-4 max-w-3xl text-ink-muted">
                  Learn how peptides, hormones, compounded medication, and FDA oversight fit together. For a broader
                  care overview, visit{" "}
                  <Link href="/treatments/peptides" className="text-clinic underline underline-offset-4">
                    peptide therapy
                  </Link>{" "}
                  and browse the{" "}
                  <Link href="/blog" className="text-clinic underline underline-offset-4">
                    Blog
                  </Link>
                  .
                </p>
              )}
              {group.heading === "Prepare for a clinician-guided conversation" && (
                <p className="mt-4 max-w-3xl text-ink-muted">
                  Before any conversation with a clinician, learn what a telehealth visit and lab review can involve
                  and how to handle medication safely. Review{" "}
                  <Link href="/how-it-works" className="text-clinic underline underline-offset-4">
                    how care works
                  </Link>{" "}
                  and find more practical reading on the{" "}
                  <Link href="/blog" className="text-clinic underline underline-offset-4">
                    Blog
                  </Link>
                  .
                </p>
              )}
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {group.slugs
                  .flatMap((slug) => {
                    const article = articles.find((a) => a.slug === slug);
                    return article ? [article] : [];
                  })
                  .map((a) => (
                    <Link key={a.slug} href={`/learn/${a.slug}`} className="group block">
                      <Card className="h-full transition group-hover:border-clinic group-hover:shadow-[0_6px_20px_rgba(14,124,134,.10)]">
                        <p className="text-xs uppercase tracking-wide text-clinic">{a.topic}</p>
                        <h3 className="mt-2 text-xl">{a.title}</h3>
                        <p className="mt-2 text-ink-muted">{a.summary}</p>
                        <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                          Read <span aria-hidden="true">→</span>
                        </p>
                      </Card>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl2 border border-ink/10 bg-white p-6">
          <h2 className="text-2xl">Explore care and education</h2>
          <p className="mt-4 text-ink-muted">
            Looking for education? Explore{" "}
            <Link href="/treatments/weight-management" className="text-clinic underline underline-offset-4">
              weight-management care
            </Link>{" "}
            and{" "}
            <Link href="/treatments/peptides" className="text-clinic underline underline-offset-4">
              peptide therapy
            </Link>
            , then visit the{" "}
            <Link href="/blog" className="text-clinic underline underline-offset-4">
              Blog
            </Link>{" "}
            for practical answers.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/blog/best-glp-1-for-weight-loss" className="text-clinic underline underline-offset-4">
                Best GLP-1 for Weight Loss: Compare 3 Medications
              </Link>
            </li>
            <li>
              <Link href="/blog/semaglutide-weight-management-cost" className="text-clinic underline underline-offset-4">
                Semaglutide Weight Management Cost &amp; Insurance Coverage
              </Link>
            </li>
            <li>
              <Link href="/blog/glp-1-agonists-for-weight-loss" className="text-clinic underline underline-offset-4">
                GLP-1 Agonists for Weight Loss: Benefits and Risks
              </Link>
            </li>
          </ul>
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
