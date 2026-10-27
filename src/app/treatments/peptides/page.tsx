import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA, EmergencyNotice, Photo, ImportantSafetyInfo } from "@/components/ui";
import PeptideMenu from "@/components/PeptideMenu";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/peptides" },
  openGraph: { url: "https://www.fitclinicmd.com/treatments/peptides" },
  title: { absolute: "Peptide Therapy Education and Safety | FitClinicMD" },
  description:
    "Learn about provider-guided peptide therapy, evaluation, availability, and compounded medication safety. Pre-launch; not accepting patients.",
};

export default function Peptides() {
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
            <span className="text-ink">Peptide therapy</span>
          </nav>
          <Eyebrow>Treatment</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptide therapy education.</h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <p>
              FitClinicMD is pre-launch and is not accepting patients. This page provides general
              education about peptide therapy, evaluation, availability, and compounded medication
              safety. If the service opens, a licensed provider would decide whether any therapy is
              appropriate after an individual evaluation. Compounded medications are not FDA-approved.
            </p>
          </div>
        </Container>
      </div>

      <Container className="pt-10 sm:pt-12">
        <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-21/8">
          <Photo
            src="/images/peptides-active.jpg"
            alt="Swimmer doing freestyle laps in a pool"
            priority
          />
        </div>
      </Container>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">Evaluation first</h2>
              <p className="mt-3 text-ink-muted">
                Peptide therapy is an educational topic, not a product you add to a cart. If the
                service opens, a licensed provider would review your health history and goals, order
                bloodwork when clinically indicated, and decide whether any therapy is appropriate.
              </p>
              <p className="mt-3 text-ink-muted">
                If a prescription is issued, a licensed pharmacy may prepare and dispense it under
                applicable law. The provider would explain the relevant monitoring and follow-up for
                your individual situation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">What to know about individual results</h2>
              <p className="mt-3 text-ink-muted">
                Individual results vary and no result is guaranteed. A licensed provider can discuss
                clinical options only after reviewing your health history and needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Who may be a candidate</h2>
              <p className="mt-3 text-ink-muted">
                This page provides general education, not a medical evaluation. A licensed provider
                would decide whether any peptide therapy is appropriate after reviewing your health
                history and clinical needs. Do not share health details on this page; the website does
                not determine eligibility.
              </p>
            </div>

            <Card className="border-accent/40 bg-accent-light/40">
              <h2 className="text-lg">A note on availability</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Which specific peptide therapies can be compounded and prescribed is governed by
                federal and state law and can change. Availability depends on your provider&apos;s
                clinical judgment and on what may lawfully be offered where you live, and we will tell
                you clearly if a therapy is not available to you.
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

      <PeptideMenu />

      <Container className="pb-16 sm:pb-20 pt-16">
        <ImportantSafetyInfo />
      </Container>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: "Peptide therapy", path: "/treatments/peptides" },
        ])}
      />
    </>
  );
}
