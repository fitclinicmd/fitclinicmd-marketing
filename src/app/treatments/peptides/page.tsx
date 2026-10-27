import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA, EmergencyNotice, Photo, ImportantSafetyInfo } from "@/components/ui";
import PeptideMenu from "@/components/PeptideMenu";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Peptide Therapy Education — FitClinicMD" },
  description:
    "Learn about peptide evaluation, potential uses, and safety. Any treatment decision depends on location, labs, and a licensed provider's review.",
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
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptide therapy.</h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <Claim id="peptides-what-it-is" />
          </div>
        </Container>
      </div>

      <Container className="pt-10 sm:pt-12">
        <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-21/8">
          <Photo
            src="/images/peptides-active.jpg"
            alt="A person swimming laps in a pool"
            priority
          />
        </div>
      </Container>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">Evaluation first, always</h2>
              <p className="mt-3 text-ink-muted">
                Peptide therapy is not a product you add to a cart. A licensed provider reviews your
                intake and goals, orders bloodwork where it is clinically indicated, and decides
                whether a peptide therapy is appropriate for you at all.
              </p>
              <p className="mt-3 text-ink-muted">
                If a therapy is prescribed, it is prepared by a licensed U.S. compounding pharmacy and
                shipped to you, and your provider stays involved for monitoring and adjustments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">What patients report</h2>
              <div className="mt-3">
                <Claim id="peptides-outcomes" />
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
                  <dd className="font-medium">Licensed U.S. compounding pharmacy</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Availability</dt>
                  <dd className="font-medium">Varies by therapy and state</dd>
                </div>
              </dl>
              <div className="mt-6">
                <CTA href={signupUrl} className="w-full">
                  Get started
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
