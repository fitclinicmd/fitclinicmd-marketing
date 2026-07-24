import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent cash pricing. No insurance, no claims, no surprise billing. Cancel from your account at any time.",
};

const INCLUDED = [
  "Your video visit with a licensed provider",
  "Review of your intake and labs",
  "Your prescription, when clinically appropriate",
  "Medication prepared by a partner pharmacy and shipped",
  "Secure messaging with your care team",
  "Ongoing plan adjustments with your provider",
];

const NOT_INCLUDED = [
  "Laboratory fees, where labs are ordered",
  "Any care delivered outside FitClinicMD",
];

export default function Pricing() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">One price. No insurance.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            We don&apos;t bill insurance, so there are no claims, no deductibles and no surprise
            bills months later. You see the price before you pay it.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Card className="h-fit">
            <Eyebrow>Program pricing</Eyebrow>
            <div className="mt-2">
              <Claim id="pricing-headline" />
            </div>
            <div className="mt-6 border-t border-ink/10 pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Before you&apos;re charged
              </h2>
              <div className="mt-3">
                <Claim id="pricing-autorenewal" />
              </div>
            </div>
            <div className="mt-6">
              <CTA href={signupUrl} className="w-full">
                Get started
              </CTA>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-xl">What&apos;s included</h2>
              <ul className="mt-4 space-y-2 text-ink-muted">
                {INCLUDED.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 text-clinic">
                      ✓
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-xl">What&apos;s not included</h2>
              <ul className="mt-4 space-y-2 text-ink-muted">
                {NOT_INCLUDED.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 text-ink-muted">
                      —
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="border-t border-ink/10 bg-white">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl">Cancel from your account</h2>
            <p className="mt-2 text-ink-muted">
              You can pause or cancel your subscription yourself, in your account — no phone call, no
              retention script.
            </p>
          </div>
          <div>
            <h2 className="text-xl">You&apos;re told before you&apos;re billed</h2>
            <p className="mt-2 text-ink-muted">
              We show the amount, the interval and the date before you agree, and again in your
              account. If a payment fails we contact you rather than quietly cutting off care.
            </p>
          </div>
          <div>
            <h2 className="text-xl">No prescription, no charge for it</h2>
            <p className="mt-2 text-ink-muted">
              If your provider concludes treatment isn&apos;t appropriate for you, you&apos;re not
              charged for medication.
            </p>
          </div>
        </div>
        <p className="mt-10 text-sm text-ink-muted">
          Full billing terms are set out in our{" "}
          <Link href="/legal/terms" className="text-clinic underline underline-offset-4">
            Terms of Service
          </Link>
          .
        </p>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
    </>
  );
}
