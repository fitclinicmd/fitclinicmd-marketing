import { Section, Eyebrow, Card, CTA } from "./ui";

const TOPICS = [
  {
    title: "Performance & strength",
    copy: "General education about questions related to performance, strength, and recovery. Individual goals and clinical appropriateness vary.",
  },
  {
    title: "Healthy aging & vitality",
    copy: "General education about questions related to healthy aging and vitality. This page does not promise an anti-aging result or indicate that a therapy is available.",
  },
  {
    title: "Wellness & vitality",
    copy: "General education about wellness questions and healthy routines. Any clinical option would depend on a licensed provider's evaluation and applicable law.",
  },
];

const STEPS = [
  "Share your goals",
  "Complete an evaluation",
  "Review labs, when indicated",
  "Discuss clinical options",
  "Receive recommendations, if appropriate",
  "Continue follow-up, if care begins",
];

export default function PeptideMenu() {
  return (
    <Section className="border-t border-ink/10" id="menu">
      <div className="mb-10 max-w-2xl">
        <Eyebrow>Education pathways</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Explore peptide education by topic</h2>
        <p className="mt-3 text-ink-muted">
          Peptide education can be organized around questions about performance and strength, healthy
          aging and vitality, and general wellness. These topics are for education only, not a
          formulary, product menu, or promise of treatment. If the service opens, a licensed provider
          would decide whether any therapy is appropriate after an evaluation.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {TOPICS.map((topic) => (
          <Card key={topic.title} className="flex flex-col">
            <h3 className="text-xl text-clinic">{topic.title}</h3>
            <p className="mt-3 text-sm text-ink-muted">{topic.copy}</p>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-2xl">How evaluation would work if the service opens</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-start gap-3 lg:flex-col">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clinic/10 text-xs font-semibold text-clinic">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <Card className="mt-12 flex flex-col items-center gap-4 border-accent/40 bg-accent-light/40 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="text-xl">Looking for education?</h3>
          <p className="mt-1 text-sm text-ink-muted">
            FitClinicMD is pre-launch and is not accepting patients. For general educational
            information, visit Learn. If the service opens, a licensed provider would determine
            whether any therapy is appropriate.
          </p>
        </div>
        <CTA href="/learn" className="shrink-0">
          Looking for education
        </CTA>
      </Card>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-muted">
        Peptide therapy is an educational topic, not a product menu. If the service opens, any
        prescription decision, formulation, dosing, and monitoring would remain with an independent
        licensed provider, subject to applicable law. Compounded medications are not FDA-approved.
        Nothing on this page is medical advice.
      </p>
    </Section>
  );
}
