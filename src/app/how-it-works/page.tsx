import type { Metadata } from "next";
import { Container, Section, Eyebrow, CTA, Card, EmergencyNotice } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From account to delivery: intake in our secure portal, labs if needed, a video visit with a licensed provider, and medication shipped if prescribed.",
};

const STEPS = [
  {
    n: "01",
    title: "Create your account",
    body: "You sign up in our secure patient portal — a separate, protected system from this website. We ask for your name, contact details and the state you live in, because your state determines which providers can treat you.",
    detail: "Takes a few minutes",
  },
  {
    n: "02",
    title: "Complete your medical intake",
    body: "Inside the portal you answer questions about your health history, medications, allergies and goals. This is the only place we ever collect health information — never on this public website.",
    detail: "About 10 minutes",
  },
  {
    n: "03",
    title: "Labs, if your provider needs them",
    body: "Some treatments require bloodwork before they can be prescribed safely. If yours does, we'll arrange it and your results are attached to your chart for your provider to review.",
    detail: "Only when clinically indicated",
  },
  {
    n: "04",
    title: "Meet your provider by video",
    body: "A provider licensed in your state reviews your intake and labs and meets you by video. They'll discuss your goals, answer questions, and decide whether treatment is appropriate for you.",
    detail: "Scheduled at your convenience",
  },
  {
    n: "05",
    title: "Your prescription is filled and shipped",
    body: "If your provider prescribes treatment, a partner compounding pharmacy prepares it and ships it to your door. You can follow the status in your portal.",
    detail: "Tracked to delivery",
  },
  {
    n: "06",
    title: "Ongoing care and check-ins",
    body: "Message your care team from the portal, review labs, and adjust your plan with your provider over time. Everything is managed from your account, and you can pause or stop at any point there.",
    detail: "For as long as you're with us",
  },
];

export default function HowItWorks() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            From first question to front door.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            No waiting rooms, no insurance paperwork. Here is exactly what happens, in order, and
            what we ask of you at each step.
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
            <h2 className="text-3xl">A prescription is never guaranteed.</h2>
            <p className="mt-3 text-ink-muted">
              Our providers prescribe only when they judge treatment to be clinically appropriate
              for you. If it isn&apos;t, they&apos;ll tell you why and talk through alternatives.
              That&apos;s the point of seeing a clinician rather than filling out a form.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <h3 className="text-lg">Your state matters</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Providers may only treat patients in states where they hold an active license. Our
                system enforces this — if we can&apos;t serve your state yet, we&apos;ll say so
                up front rather than after you&apos;ve paid.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg">Compounded medication</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Medications are prepared by a licensed compounding pharmacy. Compounded
                preparations are not FDA-approved products. Your provider will explain what this
                means for your treatment.
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
          <h2 className="text-3xl">Start when you&apos;re ready.</h2>
          <p className="mt-3 text-ink-muted">
            You can create an account and complete your intake before committing to anything.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href={signupUrl}>Get started</CTA>
            <CTA href="/faq" variant="secondary">
              Read the FAQ
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
