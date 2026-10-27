import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA, EmergencyNotice, Photo, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/weight-management" },
  openGraph: { url: "https://www.fitclinicmd.com/treatments/weight-management" },
  title: { absolute: "Medical Weight Management Education | FitClinicMD" },
  description:
    "Learn how FitClinicMD approaches provider-guided weight management: evaluation first, labs when indicated, and prescriptions when clinically appropriate.",
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
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Medical weight management.</h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <p>
              FitClinicMD is pre-launch and is not accepting patients. This page explains how
              provider-guided weight management may work when care is available. A licensed provider
              would evaluate your health history, order labs when clinically indicated, and consider
              a prescription only if it is clinically appropriate. Compounded medications are not
              FDA-approved.
            </p>
          </div>
        </Container>
      </div>

      <Container className="pt-10 sm:pt-12">
        <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-21/8">
          <Photo
            src="/images/weight-active.jpg"
            alt="Person running on a gravel path outdoors"
            priority
          />
        </div>
      </Container>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">How provider-guided care works</h2>
              <p className="mt-3 text-ink-muted">
                Care is designed to begin with an evaluation, not a product. When the service is
                available, a licensed provider would review your health information, meet with you by
                phone or video, and order labs when clinically indicated. A prescription would be
                considered only if the provider determines it is appropriate.
              </p>
              <p className="mt-3 text-ink-muted">
                If a prescription is issued, a licensed pharmacy may prepare and dispense the
                medication under applicable law. The provider would explain the plan, monitoring, and
                follow-up that apply to your individual situation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">What to know about results</h2>
              <p className="mt-3 text-ink-muted">
                Individual results vary and no result is guaranteed. A licensed provider can discuss
                what may be reasonable for you only after reviewing your health history and clinical
                needs.
              </p>
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
              <p className="mt-3 text-ink-muted">
                This page provides general education, not a medical evaluation. A licensed provider
                would decide whether weight-management care is appropriate after reviewing your health
                history and clinical needs. Do not share health details on this page; the website does
                not determine eligibility.
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
                  <dd className="font-medium">
                    Medication, if prescribed: A licensed pharmacy may dispense medication only if a
                    licensed provider prescribes it; availability varies by therapy and state.
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Availability</dt>
                  <dd className="font-medium">Varies by therapy and state</dd>
                </div>
              </dl>
              <div className="mt-6">
                <CTA href="/learn" className="w-full">
                  Looking for education
                </CTA>
              </div>
            </Card>
            <Card>
              <EmergencyNotice className="text-ink-muted" />
            </Card>
          </aside>
        </div>
      </Section>

      <Container className="pb-16 sm:pb-20">
        <ImportantSafetyInfo />
      </Container>

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
