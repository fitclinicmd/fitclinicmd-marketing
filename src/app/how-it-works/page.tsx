import type { Metadata } from "next";
import { Container, Section, Eyebrow, CTA, Card, EmergencyNotice } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "How Evaluation Works | Telehealth — FitClinicMD" },
  description:
    "See how FitClinicMD's evaluation-first pathway may work: location check, intake, labs when indicated, video visit, and a prescription only if appropriate.",
};

const STEPS: {
  n: string;
  title: string;
  body: string;
  detail: string;
  href?: string;
  linkText?: string;
}[] = [
  {
    n: "01",
    title: "Start with education",
    body: "Begin in the education library — plain-English explainers on how peptide and GLP-1 care works, what a telehealth visit involves, and what to expect. Review what applies to you first; when you're ready, the next step is a medical evaluation with a licensed clinician. Availability depends on where you are located and whether a FitClinicMD-affiliated clinician is licensed in your state. This public website does not collect health information.",
    detail: "Education first",
    href: "/learn",
    linkText: "Browse the education library",
  },
  {
    n: "02",
    title: "Share your goals and health questions",
    body: "If you continue, an independent licensed clinician can discuss your goals, health history, medications, allergies, and questions by phone or video. The evaluation comes before any treatment decision.",
    detail: "Education or inquiry",
  },
  {
    n: "03",
    title: "Complete labs when indicated",
    body: "Labs may be requested when clinically indicated. An independent licensed clinician reviews the results as part of deciding whether a treatment is appropriate for you.",
    detail: "Only when clinically indicated",
  },
  {
    n: "04",
    title: "Meet with an independent licensed clinician",
    body: "An independent licensed clinician reviews the information relevant to your evaluation, answers your questions, and makes the clinical decision. FitClinicMD does not promise a prescription, diagnosis, or outcome.",
    detail: "By phone or video",
  },
  {
    n: "05",
    title: "Receive a treatment decision",
    body: "If a clinician decides treatment is appropriate and prescribes it, a partner 503A compounding pharmacy may dispense the medication. Compounded medicines, including compounded semaglutide and tirzepatide, are not FDA-approved.",
    detail: "Only if appropriate",
  },
  {
    n: "06",
    title: "Continue care if appropriate",
    body: "If care is appropriate, your clinician can explain follow-up, monitoring, and any next steps. Availability depends on clinician licensure and your location, and care is not available in every state.",
    detail: "If care is appropriate",
  },
];

export default function HowItWorks() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            How an evaluation-first care pathway works
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            FitClinicMD is preparing an evaluation-first telehealth pathway. Start with the
            education library, then learn what a licensed clinician may review before deciding
            whether care is appropriate for you. Availability depends on your location and clinician
            licensure.
          </p>
        </Container>
      </div>

      <Section>
        <ol className="space-y-6">
          {STEPS.map((s) => (
            <li key={s.n}>
              <Card className="grid gap-4 sm:grid-cols-[6rem_1fr]">
                <div>
                  <div className="font-display text-3xl text-clinic/60">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
                    {s.detail}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl">{s.title}</h2>
                  <p className="mt-2 text-ink-muted">{s.body}</p>
                  {s.href && (
                    <a
                      href={s.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-clinic hover:underline"
                    >
                      {s.linkText} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-ink/10 bg-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="text-3xl">An evaluation comes before any treatment decision.</h2>
            <p className="mt-3 text-ink-muted">
              A phone or video inquiry does not guarantee a prescription, diagnosis, or result. An
              independent licensed clinician decides whether treatment is appropriate based on your
              situation and may discuss alternatives.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <h3 className="text-lg">Availability depends on your location</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Care is available only where a FitClinicMD-affiliated clinician is licensed. We will
                explain whether the pathway is available in your state before any clinical step.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg">Compounded medication is not FDA-approved</h3>
              <p className="mt-2 text-sm text-ink-muted">
                If a clinician prescribes a compounded medication, a partner 503A compounding
                pharmacy may dispense it. Compounded medications are not FDA-approved products. Your
                clinician can explain what this means for your treatment.
              </p>
            </Card>
            <Card>
              <EmergencyNotice className="text-ink-muted" />
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl">Have questions? Start with an inquiry.</h2>
          <p className="mt-3 text-ink-muted">
            Use the inquiry form to ask about the evaluation-first pathway or request education. This
            does not book a visit, guarantee treatment, or create a provider-patient relationship.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href="/contact">Get started today</CTA>
            <CTA href="/learn" variant="secondary">
              Looking for education
            </CTA>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
    </>
  );
}
