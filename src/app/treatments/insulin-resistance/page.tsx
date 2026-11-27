import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Section,
  Eyebrow,
  Card,
  CTA,
  EmergencyNotice,
  Photo,
  ImportantSafetyInfo,
} from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/insulin-resistance" },
  openGraph: { url: "https://www.fitclinicmd.com/treatments/insulin-resistance" },
  title: { absolute: "Insulin Resistance Evaluation & Education | FitClinicMD" },
  description:
    "Learn what insulin resistance means, how a clinician may evaluate metabolic health, and what to expect from FitClinicMD's pre-launch inquiry process.",
};

export default function InsulinResistance() {
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
            <span className="text-ink">Insulin resistance evaluation</span>
          </nav>
          <Eyebrow>Treatment</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Insulin resistance evaluation.</h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <p>
              FitClinicMD is pre-launch and is not accepting patients. This page provides general
              education about insulin resistance and explains what an evaluation-first pathway could
              involve if the service opens. A licensed provider would decide whether any clinical
              option is appropriate after an individual evaluation. This page is not medical advice
              and does not diagnose or treat anyone.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTA href="/contact">Get started today</CTA>
            <CTA href="/learn" variant="secondary">
              Looking for education
            </CTA>
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
              <h2 className="text-2xl">What insulin resistance means</h2>
              <p className="mt-3 text-ink-muted">
                Insulin is a hormone that helps the body move glucose from the bloodstream into cells
                for energy. Insulin resistance describes a reduced response to insulin. It can be
                discussed alongside prediabetes, type 2 diabetes, weight changes, and other metabolic
                concerns, but the words are not a diagnosis on their own. People can have different
                symptoms, risk factors, and lab results, and some people may not notice symptoms at
                all.
              </p>
              <p className="mt-3 text-ink-muted">
                People searching for insulin resistance treatment often want a clear explanation of
                what to do next. A webpage cannot determine whether insulin resistance is present. A
                licensed clinician must consider your health history and, when clinically indicated,
                relevant measurements or lab results before discussing a diagnosis or care options.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr] items-start">
              <div>
                <h2 className="text-2xl">Why evaluation comes first</h2>
                <p className="mt-3 text-ink-muted">
                  If FitClinicMD opens this service, an independent licensed provider would begin with
                  an evaluation rather than a product selection. The provider may review your health
                  history, current medicines, goals, family history, and any information you bring to
                  the visit. Labs may be ordered when clinically indicated. The exact evaluation would
                  depend on your individual situation.
                </p>
                <p className="mt-3 text-ink-muted">
                  That process matters because a concern about insulin resistance can overlap with
                  other health questions. A provider, not a webpage, would decide what information is
                  relevant, whether additional evaluation is needed, and whether any clinical option
                  is appropriate. No prescription, diagnosis, or treatment result is guaranteed.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-[4/3]">
                <Photo
                  src="/images/telehealth-visit.jpg"
                  alt="A person connecting with their care team from home using a phone"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl">What a clinician may discuss</h2>
              <p className="mt-3 text-ink-muted">
                If care becomes available, the conversation may include your questions, health
                history, medicines, goals, and any clinically relevant testing. A licensed provider
                may explain what the available information suggests, what needs more evaluation, and
                what follow-up would be reasonable. The discussion is individual: there is no single
                plan that fits everyone who searches for insulin resistance treatment.
              </p>
              <p className="mt-3 text-ink-muted">
                General health habits may be part of a broader conversation, but FitClinicMD will not
                promise that a particular food plan, exercise routine, supplement, or medication will
                reverse insulin resistance or produce a specific result. Do not use this page to
                self-diagnose or to change prescribed care. Speak with your own healthcare
                professional about urgent or personal medical questions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Treatment is not one-size-fits-all</h2>
              <p className="mt-3 text-ink-muted">
                Depending on a person&apos;s health history and clinical findings, a clinician may
                discuss lifestyle support, follow-up monitoring, or medication options. Whether any
                option is appropriate is a decision for an independent licensed provider after an
                evaluation. FitClinicMD is not an online medicine store, and this page is not a
                formulary or a promise that a medication will be offered.
              </p>
              <p className="mt-3 text-ink-muted">
                If a prescription is issued after a provider&apos;s decision, a licensed pharmacy may
                prepare and dispense medication under applicable law. Compounded medications are not
                FDA-approved. Availability can change and depends on the therapy, the provider&apos;s
                clinical judgment, applicable law, and the state where the patient is located.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Who this page is for</h2>
              <p className="mt-3 text-ink-muted">
                This page is for adults seeking general education about insulin resistance and the
                questions an evaluation may address. It is not a medical evaluation, patient intake,
                or secure channel for health information. FitClinicMD has no physical locations. If
                the service opens, availability will depend on whether a FitClinicMD-affiliated
                clinician is licensed in the state where you are located, and care will not be
                available in every state.
              </p>
              <p className="mt-3 text-ink-muted">
                FitClinicMD is pre-launch and is not accepting patients. If you send a message, it
                will be a general inquiry only. Please do not include medical details. For education
                about related topics, visit <Link href="/learn" className="text-clinic hover:text-clinic-deep">Learn</Link>, including <Link href="/learn/type-2-diabetes-basics" className="text-clinic hover:text-clinic-deep">type 2 diabetes basics</Link> and <Link href="/learn/why-your-labs-matter" className="text-clinic hover:text-clinic-deep">why your labs matter</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Common questions</h2>
              <div className="mt-4 space-y-3">
                <Card>
                  <h3 className="text-lg">Is insulin resistance the same as diabetes?</h3>
                  <p className="mt-2 text-ink-muted">
                    No. They are related health terms, but they are not interchangeable. A licensed
                    clinician uses a person&apos;s history and clinically relevant information to
                    determine what a finding means. This page cannot diagnose diabetes, prediabetes, or
                    insulin resistance.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-lg">How is insulin resistance evaluated?</h3>
                  <p className="mt-2 text-ink-muted">
                    The approach depends on the individual. If the service opens, a licensed provider
                    would review health history and may order labs when clinically indicated. A webpage
                    or symptom checklist cannot determine whether you have insulin resistance.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-lg">Can FitClinicMD prescribe treatment for insulin resistance?</h3>
                  <p className="mt-2 text-ink-muted">
                    FitClinicMD is pre-launch and is not accepting patients. If the service opens, an
                    independent licensed provider would decide whether any clinical option is
                    appropriate after an evaluation. A prescription is never guaranteed.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-lg">Is insulin resistance care available where I live?</h3>
                  <p className="mt-2 text-ink-muted">
                    FitClinicMD has no physical locations. If care becomes available, it will depend
                    on the state where you are located, the clinician&apos;s license, the service&apos;s
                    status, and clinical appropriateness. Send a general inquiry for education or
                    availability questions, and do not include medical details.
                  </p>
                </Card>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr] items-start">
              <div>
                <h2 className="text-2xl">How evaluation would work if the service opens</h2>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-muted">
                  <li><strong className="text-ink">Share a general question.</strong> Use the contact path for an inquiry only; it is not booking or patient intake.</li>
                  <li><strong className="text-ink">Complete an evaluation.</strong> An independent licensed provider would review your individual situation by phone or video if care is available.</li>
                  <li><strong className="text-ink">Review labs when indicated.</strong> The provider would decide whether testing is relevant to your questions.</li>
                  <li><strong className="text-ink">Discuss options if appropriate.</strong> Any recommendation or prescription would depend on the provider&apos;s clinical decision and applicable law.</li>
                  <li><strong className="text-ink">Continue follow-up if care begins.</strong> Monitoring and follow-up would be explained for the individual plan.</li>
                </ol>
              </div>
              <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-[4/3]">
                <Photo
                  src="/images/hero-cycling.jpg"
                  alt="Two people cycling together along a coastal road on a bright day"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <Card>
              <h2 className="text-lg">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-ink-muted">Evaluation</dt>
                  <dd className="font-medium">Phone or video evaluation with a licensed provider if care opens</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Labs</dt>
                  <dd className="font-medium">When clinically indicated</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Approach</dt>
                  <dd className="font-medium">Evaluation first, not product selection</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Availability</dt>
                  <dd className="font-medium">Depends on state licensure, service status, and clinical appropriateness</dd>
                </div>
              </dl>
              <div className="mt-6 space-y-3">
                <CTA href="/contact" className="w-full">
                  Get started today
                </CTA>
                <CTA href="/learn" variant="secondary" className="w-full">
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

      <Section className="pt-0">
        <Card className="border-accent/40 bg-accent-light/40">
          <h2 className="text-2xl">Looking for education?</h2>
          <p className="mt-3 text-ink-soft">
            FitClinicMD is pre-launch and is not accepting patients. For general education, visit
            Learn. For a question about the evaluation-first pathway or availability, send an inquiry
            through Contact. An inquiry does not book a visit, start a patient intake, or purchase
            medication. Please do not include medical details.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTA href="/contact">Get started today</CTA>
            <CTA href="/learn" variant="secondary">
              Looking for education
            </CTA>
          </div>
        </Card>
      </Section>

      <Container className="pb-16 sm:pb-20">
        <ImportantSafetyInfo />
      </Container>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: "Insulin resistance evaluation", path: "/treatments/insulin-resistance" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@id": "https://www.fitclinicmd.com/treatments/insulin-resistance#webpage",
              "@type": "MedicalWebPage",
              "url": "https://www.fitclinicmd.com/treatments/insulin-resistance",
              "name": "Insulin Resistance Evaluation & Education | FitClinicMD",
              "description": "FitClinicMD is pre-launch and is not accepting patients. This page provides general education about insulin resistance and explains what an evaluation-first pathway could involve if the service opens. A licensed provider would decide whether any clinical option is appropriate after an individual evaluation. This page is not medical advice and does not diagnose or treat anyone.",
              "about": {
                "@type": "MedicalCondition",
                "name": "Insulin resistance"
              },
              "isPartOf": {
                "@id": "https://www.fitclinicmd.com/#website"
              },
              "publisher": {
                "@id": "https://www.fitclinicmd.com/#organization"
              }
            }
          ]
        }}
      />
    </>
  );
}
