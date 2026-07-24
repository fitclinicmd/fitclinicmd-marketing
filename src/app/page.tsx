import Link from "next/link";
import { Container, Section, Eyebrow, CTA, Card, Claim } from "@/components/ui";
import { signupUrl } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    title: "Tell us about your health",
    body: "You create an account and complete a medical intake in our secure patient portal — never on this website.",
  },
  {
    n: "02",
    title: "Labs where they're needed",
    body: "If your provider needs bloodwork to treat you safely, we'll arrange it before anything is prescribed.",
  },
  {
    n: "03",
    title: "Meet your provider",
    body: "A licensed provider reviews your intake and meets you by video to decide whether treatment is appropriate.",
  },
  {
    n: "04",
    title: "Medication delivered",
    body: "If prescribed, a partner compounding pharmacy fills your prescription and ships it to your door.",
  },
];

const PILLARS = [
  {
    title: "Licensed providers, in your state",
    body: "Every visit is with a provider licensed where you live. Our system will not let a provider treat you otherwise.",
  },
  {
    title: "Cash pricing, no insurance",
    body: "One transparent price. No claims, no surprise billing, no deductible to meet first.",
  },
  {
    title: "Care that continues",
    body: "Message your care team, track your labs, and adjust your plan from your portal between visits.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="wash">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl animate-rise">
            <Eyebrow>Telehealth weight &amp; hormone care</Eyebrow>
            <h1 className="text-4xl leading-[1.08] sm:text-6xl">
              Real medicine,
              <br />
              <span className="text-clinic">without the waiting room.</span>
            </h1>
            <div className="mt-6 max-w-2xl text-lg text-ink-soft">
              <Claim id="hero-promise" />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTA href={signupUrl}>Get started</CTA>
              <CTA href="/how-it-works" variant="secondary">
                See how it works
              </CTA>
            </div>
            <p className="mt-5 text-sm text-ink-muted">
              No insurance needed · Licensed providers · Prescription only if clinically appropriate
            </p>
          </div>
        </Container>
      </div>

      {/* Pillars */}
      <Section className="border-t border-ink/10 bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Card key={p.title}>
              <div className="mb-4 h-1 w-12 rounded-full rule" />
              <h2 className="text-xl">{p.title}</h2>
              <p className="mt-2 text-ink-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">Four steps, start to delivery.</h2>
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n}>
              <div className="font-display text-3xl text-clinic/60">{s.n}</div>
              <h3 className="mt-2 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <CTA href="/how-it-works" variant="quiet">
            Read the full process →
          </CTA>
        </div>
      </Section>

      {/* Treatments */}
      <Section className="border-t border-ink/10 bg-white">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Treatments</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">What we treat.</h2>
          <p className="mt-3 text-ink-muted">
            Treatment is prescribed only when a licensed provider determines it is clinically
            appropriate for you.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-2xl">Weight management</h3>
            <div className="mt-3 flex-1 text-ink-muted">
              <Claim id="glp1-what-it-is" />
            </div>
            <Link
              href="/treatments/weight-management"
              className="mt-5 text-sm font-semibold text-clinic hover:text-clinic-deep"
            >
              Learn about weight management →
            </Link>
          </Card>
          <Card className="flex flex-col">
            <h3 className="text-2xl">Hormone therapy</h3>
            <div className="mt-3 flex-1 text-ink-muted">
              <Claim id="hormone-what-it-is" />
            </div>
            <Link
              href="/treatments/hormone-therapy"
              className="mt-5 text-sm font-semibold text-clinic hover:text-clinic-deep"
            >
              Learn about hormone therapy →
            </Link>
          </Card>
        </div>
      </Section>

      {/* Privacy stance — a genuine differentiator, and true of this build */}
      <Section>
        <div className="rounded-xl2 border border-ink/10 bg-ink px-8 py-12 text-white sm:px-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Your privacy
            </p>
            <h2 className="text-3xl text-white sm:text-4xl">
              We don&apos;t collect health information on this website.
            </h2>
            <p className="mt-4 text-white/70">
              Nothing on this page asks about your health. Your medical information is only ever
              entered inside our secure patient portal, which is kept separate from this site and
              carries no advertising trackers. We do not sell your information, and we do not share
              it with advertising platforms.
            </p>
            <div className="mt-6">
              <Link
                href="/legal/privacy"
                className="text-sm font-semibold text-accent underline underline-offset-4 hover:text-white"
              >
                Read our Notice of Privacy Practices
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Ready to start?</h2>
          <p className="mt-3 text-ink-muted">
            Create your account, complete your intake, and meet a licensed provider.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href={signupUrl}>Get started</CTA>
            <CTA href="/pricing" variant="secondary">
              See pricing
            </CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
