import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA, EmergencyNotice, Photo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hormone therapy",
  description:
    "Provider-supervised hormone therapy with evaluation, bloodwork and ongoing monitoring. Prescribed only when clinically appropriate.",
};

export default function HormoneTherapy() {
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
            <span className="text-ink">Hormone therapy</span>
          </nav>
          <Eyebrow>Treatment</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Hormone therapy.</h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <Claim id="hormone-what-it-is" />
          </div>
        </Container>
      </div>

      <Container className="pt-10 sm:pt-12">
        <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-21/8">
          <Photo
            src="/images/hormone-active.jpg"
            alt="A person cycling on a road through green countryside"
            priority
          />
        </div>
      </Container>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">Bloodwork comes first</h2>
              <p className="mt-3 text-ink-muted">
                Hormone therapy is not prescribed on symptoms alone. Your provider will order
                bloodwork, review the results with you, and use them to decide whether treatment is
                appropriate and at what level.
              </p>
              <p className="mt-3 text-ink-muted">
                Monitoring continues after you start. Follow-up labs and check-ins let your provider
                confirm the plan is working and adjust it if it isn&apos;t.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">What patients report</h2>
              <div className="mt-3">
                <Claim id="hormone-outcomes" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl">Who may be a candidate</h2>
              <div className="mt-3">
                <Claim id="eligibility-summary" />
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Determined by a licensed provider during your visit — not by this website.
              </p>
            </div>

            <Card className="border-accent/40 bg-accent-light/40">
              <h2 className="text-lg">A note on availability</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Some hormone therapies are controlled substances, and the rules for prescribing them
                by telehealth differ by state and are subject to federal requirements. Availability
                may be limited depending on where you live, and we will tell you clearly if we
                cannot treat you.
              </p>
            </Card>
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
                  <dd className="font-medium">Required before treatment</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Monitoring</dt>
                  <dd className="font-medium">Ongoing, with follow-up labs</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Availability</dt>
                  <dd className="font-medium">Varies by state</dd>
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
          { name: "Hormone therapy", path: "/treatments/hormone-therapy" },
        ])}
      />
    </>
  );
}
