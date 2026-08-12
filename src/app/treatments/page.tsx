import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Physician-guided peptide therapy and weight management (GLP-1) — prescribed only when a licensed provider determines it is clinically appropriate.",
};

const TREATMENTS = [
  {
    href: "/treatments/peptides",
    title: "Peptide therapy",
    claim: "peptides-what-it-is",
    points: ["Provider evaluation first", "Compounded by a licensed pharmacy", "Availability varies by state"],
  },
  {
    href: "/treatments/weight-management",
    title: "Weight management",
    claim: "glp1-what-it-is",
    points: ["Provider-supervised program", "Labs where clinically indicated", "Delivered to your door"],
  },
];

export default function Treatments() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Treatments</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">What we treat.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Every treatment starts with an evaluation by a licensed provider. Medication is
            prescribed only when it is clinically appropriate for you.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {TREATMENTS.map((t) => (
            <Card key={t.href} className="flex flex-col">
              <h2 className="text-2xl">{t.title}</h2>
              <div className="mt-3 text-ink-muted">
                <Claim id={t.claim} />
              </div>
              <ul className="mt-5 space-y-2 text-sm text-ink-muted">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden="true" className="text-clinic">
                      —
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className="mt-6 text-sm font-semibold text-clinic hover:text-clinic-deep"
              >
                Learn more about {t.title.toLowerCase()} →
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-xl2 border border-ink/10 bg-white p-6">
          <h2 className="text-lg">Not sure which is right for you?</h2>
          <p className="mt-2 text-ink-muted">
            That&apos;s what the visit is for. Create an account, complete your intake, and your
            provider will talk it through with you.{" "}
            <strong>We don&apos;t ask about your health on this website.</strong>
          </p>
          <div className="mt-5">
            <CTA href={signupUrl}>Get started</CTA>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />
    </>
  );
}
