import Link from "next/link";
import { Container, Section, Eyebrow, CTA, Card, Claim, Photo } from "@/components/ui";
import GoalCards from "@/components/GoalCards";
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl animate-rise">
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
            <div className="animate-rise overflow-hidden rounded-xl2 border border-ink/10 shadow-[0_16px_50px_rgba(15,27,45,.12)] aspect-[4/3]">
              <Photo
                src="/images/hero-cycling.jpg"
                alt="Two people cycling together along a coastal road on a bright day"
                priority
              />
            </div>
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
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Four steps, start to delivery.</h2>
            <p className="mt-4 text-ink-muted">
              From your first visit to medication at your door — handled online, from wherever you
              are.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl2 border border-ink/10 aspect-[16/10]">
            <Photo
              src="/images/telehealth-visit.jpg"
              alt="A person connecting with their care team from home using a phone"
            />
          </div>
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

      {/* Goal-first entry — patients choose the outcome they want, not a drug */}
      <GoalCards />

      {/* Lifestyle band — aspirational, logistics copy only (no treatment claim) */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-xl2 border border-ink/10 aspect-[4/5] lg:order-1">
            <Photo
              src="/images/lifestyle-running.jpg"
              alt="A person running along a ridge outdoors on a bright day"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Care that fits your life</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Built around how you actually live.</h2>
            <p className="mt-4 text-ink-muted">
              Your visits, labs, and medication are handled online and delivered to your door — so
              staying with your plan fits around work, travel, and everything else you have going on.
            </p>
          </div>
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
