// TRT clinical copy is original and conservative; needs attorney + medical review before launch.
//
// This page is a DEFERRED offering and stays noindex via the per-page robots
// gate below even after the rest of the site is switched to indexable. Regulated
// statements (what the therapy is, outcomes, who may be a candidate) are rendered
// through counsel-approved claims in lib/claims.ts; the surrounding copy is
// ordinary educational/logistics text written directly, per the claims-registry
// convention. Testosterone is prescription-only and is presented without any
// FDA-approval claim for a compounded preparation, and without naming
// Enclomiphene as an offering.
import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, Claim, CTA, EmergencyNotice, Photo, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testosterone therapy (TRT)",
  description:
    "Provider-supervised testosterone replacement therapy with evaluation, bloodwork and ongoing monitoring. Prescribed only when a licensed provider determines it is clinically appropriate.",
  // Deferred offering: page kept for a later launch phase but not indexed while
  // the program (testosterone + other hormones) is still under clinical and
  // legal review. Preserve this gate — do not make the page indexable.
  robots: { index: false, follow: true },
};

const FAQ = [
  {
    q: "What is testosterone replacement therapy?",
    a: "TRT is a prescription therapy that supplies testosterone when a person's own levels are low and that low level is causing symptoms. It is prescribed and supervised by a licensed provider after an evaluation and bloodwork — not based on symptoms alone, and not through this website.",
  },
  {
    q: "Do I need a blood test first?",
    a: "Yes. A provider confirms low testosterone with lab work before considering treatment, and uses follow-up labs to monitor the plan. Treatment is never started on symptoms alone.",
  },
  {
    q: "How is it taken?",
    a: "The most common form is an injection, typically self-administered at home on a schedule your provider sets. Your provider will explain the specific product, dose, and technique that apply to you.",
  },
  {
    q: "Is it available everywhere?",
    a: "Not necessarily. Testosterone is a controlled substance, and the rules for prescribing it by telehealth differ by state and are subject to federal requirements. Availability may be limited depending on where you live, and we will tell you clearly if we cannot treat you.",
  },
  {
    q: "Is this the same as taking testosterone to build muscle?",
    a: "No. TRT is medical treatment for diagnosed low testosterone, dosed to restore a normal range under monitoring. Using testosterone or related compounds for performance, outside a provider's care, is a different thing entirely and carries its own risks.",
  },
];

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
            <span className="text-ink">Testosterone therapy</span>
          </nav>
          <Eyebrow>Treatment</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Testosterone therapy (TRT).</h1>
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
              <h2 className="text-2xl">What low testosterone is</h2>
              <p className="mt-3 text-ink-muted">
                Testosterone is a hormone the body makes on its own. Levels tend to drift down
                gradually with age, and in some people they fall far enough, or fast enough, to cause
                symptoms. When a low level is confirmed by lab work and is paired with symptoms, a
                provider may describe it as clinically low testosterone. Testosterone replacement
                therapy supplies testosterone to bring a low level back toward a normal range.
              </p>
              <p className="mt-3 text-ink-muted">
                A low level by itself is not automatically treated. Whether treatment makes sense is a
                clinical judgment a licensed provider makes with you, weighing your labs, your
                symptoms, your health history, and your goals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Symptoms people ask about</h2>
              <p className="mt-3 text-ink-muted">
                Low testosterone is commonly associated with low energy, reduced sex drive, changes in
                mood, difficulty building or keeping muscle, and poorer sleep. These symptoms are
                non-specific — they overlap with many other conditions, from thyroid problems to sleep
                apnea to depression — which is exactly why a provider evaluates them rather than
                assuming the cause. Having some of these symptoms does not confirm low testosterone,
                and only an evaluation and bloodwork can sort it out.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Prescription-only, and how care works</h2>
              <p className="mt-3 text-ink-muted">
                Testosterone is a prescription medication and a controlled substance. It is prescribed
                only after a video consultation with a licensed provider, when the provider determines
                it is clinically appropriate for you — and never on symptoms alone. Here is the path
                when the service is available:
              </p>
              <ol className="mt-4 space-y-3 text-ink-muted">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-clinic">1.</span>
                  <span>
                    <strong className="font-medium text-ink">Create an account and complete your intake</strong> in
                    the secure patient portal. Health information is entered there, not on this
                    website.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-clinic">2.</span>
                  <span>
                    <strong className="font-medium text-ink">Lab work first.</strong> A provider orders
                    bloodwork to confirm your testosterone level and check related markers before any
                    treatment is considered.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-clinic">3.</span>
                  <span>
                    <strong className="font-medium text-ink">Video visit</strong> with a provider
                    licensed in your state, who reviews your labs and history with you.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-clinic">4.</span>
                  <span>
                    <strong className="font-medium text-ink">A prescription, if appropriate.</strong> If
                    the provider determines TRT is right for you, they issue a prescription. If not,
                    they will tell you and discuss alternatives.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-clinic">5.</span>
                  <span>
                    <strong className="font-medium text-ink">Dispensing by a licensed pharmacy</strong> under
                    applicable law, shipped to you where permitted.
                  </span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl">How it is taken</h2>
              <p className="mt-3 text-ink-muted">
                TRT is most commonly given as an injection, usually self-administered at home on a
                schedule your provider sets. Your provider will explain the specific product, dose, and
                technique that apply to your treatment, and answer your questions before you start.
              </p>
            </div>

            <div>
              <h2 className="text-2xl">Monitoring never stops at the first prescription</h2>
              <p className="mt-3 text-ink-muted">
                Starting TRT is the beginning of ongoing care, not a one-time transaction. Your
                provider schedules follow-up bloodwork and check-ins to confirm the plan is working,
                keep your levels in a healthy range, and watch for side effects. The plan is adjusted
                based on how you respond — and stopped if it is not serving you.
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

            <div>
              <h2 className="text-2xl">Common questions</h2>
              <dl className="mt-4 space-y-5">
                {FAQ.map((item) => (
                  <div key={item.q}>
                    <dt className="font-medium text-ink">{item.q}</dt>
                    <dd className="mt-1 text-ink-muted">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Card className="border-accent/40 bg-accent-light/40">
              <h2 className="text-lg">A note on availability</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Testosterone is a controlled substance, and the rules for prescribing controlled
                substances by telehealth differ by state and are subject to federal requirements.
                Availability may be limited depending on where you live, and we will tell you clearly
                if we cannot treat you.
              </p>
            </Card>

            <div className="rounded-xl2 border border-ink/10 bg-white p-6">
              <h2 className="text-lg">Related reading</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Low sex drive is one of the symptoms people associate with low testosterone, but it has
                many possible causes. Our{" "}
                <Link href="/peptides/pt-141" className="font-semibold text-clinic hover:text-clinic-deep">
                  PT-141 profile
                </Link>{" "}
                explains one of the options sometimes discussed for desire and arousal. As always, what
                is appropriate for you is a provider&apos;s call after an evaluation.
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
                  <dd className="font-medium">Required before treatment</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">How it&apos;s taken</dt>
                  <dd className="font-medium">Injection, as prescribed</dd>
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
          { name: "Testosterone therapy", path: "/treatments/hormone-therapy" },
        ])}
      />
    </>
  );
}
