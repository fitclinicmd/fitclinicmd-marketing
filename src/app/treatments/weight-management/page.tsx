import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA, EmergencyNotice } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weight management",
  description:
    "A provider-supervised weight management program. Evaluation, labs where indicated, and medication delivered when clinically appropriate.",
};

export default function WeightManagement() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-clinic">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/treatments" className="hover:text-clinic">
              Treatments
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">Weight management</span>
          </nav>
          <Eyebrow>Treatment</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Weight management.</h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <Claim id="glp1-what-it-is" />
          </div>
        </Container>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">What to expect</h2>
              <p className="mt-3 text-ink-muted">
                Care begins with an evaluation, not a product. You complete a medical intake in your
                portal, your provider reviews it along with any labs they need, and you meet by
                video. Together you decide whether treatment makes sense, and what the plan looks
                like.
              </p>
              <p className="mt-3 text-ink-muted">
                If medication is prescribed, it&apos;s prepared by a partner compounding pharmacy
                and shipped to you. Your provider stays involved: you can message your care team,
                review labs, and adjust the plan over time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Results</h2>
              <div className="mt-3">
                <Claim id="glp1-outcomes" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl">About compounded medication</h2>
              <div className="mt-3">
                <Claim id="glp1-compounded-status" />
              </div>
              <p className="mt-3 text-ink-muted">
                Your provider will explain what compounding means for your specific treatment and
                answer any questions before you start.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Who may be a candidate</h2>
              <div className="mt-3">
                <Claim id="eligibility-summary" />
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Eligibility is determined by a licensed provider during your visit — not by this
                website. We deliberately do not ask health questions here.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <Card>
              <h2 className="text-lg">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-ink-muted">Evaluation</dt>
                  <dd className="font-medium">Video visit with a licensed provider</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Labs</dt>
                  <dd className="font-medium">When clinically indicated</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Fulfillment</dt>
                  <dd className="font-medium">Partner compounding pharmacy, shipped</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Insurance</dt>
                  <dd className="font-medium">Not billed — cash pricing</dd>
                </div>
              </dl>
              <div className="mt-6">
                <CTA href={signupUrl} className="w-full">
                  Get started
                </CTA>
              </div>
              <p className="mt-3 text-center text-xs text-ink-muted">
                <Link href="/pricing" className="hover:text-clinic">
                  See pricing
                </Link>
              </p>
            </Card>
            <Card>
              <EmergencyNotice className="text-ink-muted" />
            </Card>
          </aside>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: "Weight management", path: "/treatments/weight-management" },
        ])}
      />
    </>
  );
}
