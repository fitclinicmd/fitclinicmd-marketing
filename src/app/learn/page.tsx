import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Straightforward explanations of how telehealth care, compounded medication, labs and subscription billing actually work.",
};

// Educational articles are published here as they are written and reviewed.
// Anything describing what a medication does or how well it works is a
// regulated claim and must clear review before publication (see lib/claims.ts).
const PLANNED = [
  {
    title: "What a telehealth visit actually involves",
    summary:
      "What your provider sees before the call, what you'll be asked, and what a good visit looks like.",
  },
  {
    title: "Compounded medication, explained",
    summary:
      "What compounding is, how it differs from a commercially manufactured product, and what questions to ask your provider.",
  },
  {
    title: "Why your labs matter",
    summary:
      "Which values providers look at, why some treatments require bloodwork first, and what follow-up testing is for.",
  },
  {
    title: "Reading a subscription before you sign up",
    summary:
      "How recurring billing works, what to check before you agree, and how cancellation should work at any reputable clinic.",
  },
  {
    title: "How to tell a real telehealth clinic from a pill mill",
    summary:
      "The questions worth asking: who examines you, who can say no, and what happens to your data.",
  },
];

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
          {PLANNED.map((a) => (
            <Card key={a.title}>
              <h2 className="text-xl">{a.title}</h2>
              <p className="mt-2 text-ink-muted">{a.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-ink-muted">
                Publishing before launch
              </p>
            </Card>
          ))}
        </div>

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
