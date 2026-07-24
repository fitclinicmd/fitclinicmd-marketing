import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why FitClinicMD exists, how we practice, and the commitments we make about your care and your privacy.",
};

const PRINCIPLES = [
  {
    title: "A clinician decides, not a checkout",
    body: "Plenty of services will sell you a medication if you tick the right boxes. We don't. A licensed provider evaluates you, and prescribes only when treatment is appropriate. Sometimes the answer is no — and our providers are free to give it, because we don't pay them to prescribe.",
  },
  {
    title: "Your data isn't the product",
    body: "We don't run advertising trackers, we don't sell your information, and we don't share it with ad platforms. This website collects no health information at all — your medical details live only in the secure portal, which is a deliberately separate system.",
  },
  {
    title: "Prices you can see",
    body: "One price, shown before you pay it, billed on a schedule you agreed to, cancellable from your account without a phone call. No claims, no deductibles, no bill arriving three months later.",
  },
  {
    title: "Boundaries we don't cross",
    body: "We only offer treatments we can stand behind, in states where our providers are licensed. Where the law or the evidence isn't settled, we wait rather than launch and apologize later.",
  },
];

export default function About() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>About</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Built to practice medicine properly, at a distance.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Telehealth should mean better access to a real clinician — not a vending machine with a
            questionnaire in front of it. FitClinicMD is built around that difference.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <Card key={p.title}>
              <div className="mb-4 h-1 w-12 rounded-full rule" />
              <h2 className="text-xl">{p.title}</h2>
              <p className="mt-2 text-ink-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-ink/10 bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-3xl">Care, then medication — in that order.</h2>
            <p className="mt-4 text-ink-muted">
              Every patient is evaluated by a provider licensed in their state. Where a treatment
              needs bloodwork to be prescribed safely, we get the bloodwork. Where a treatment
              carries additional legal requirements, we meet them before we offer it — not after.
            </p>
            <p className="mt-4 text-ink-muted">
              Our clinical protocols are owned by our medical director, and our systems enforce the
              rules rather than trusting anyone to remember them: a provider cannot treat outside
              their licensed states, and controlled medications stay locked until every requirement
              is satisfied.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <h3 className="text-lg">What we are</h3>
              <p className="mt-2 text-sm text-ink-muted">
                A telehealth clinic. Licensed providers evaluate and treat patients; a partner
                compounding pharmacy fills prescriptions and ships them.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg">What we are not</h3>
              <p className="mt-2 text-sm text-ink-muted">
                A pharmacy, a supplement company, or a substitute for emergency or in-person care.
                Information on this site is general and is not medical advice.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg">Questions?</h3>
              <p className="mt-2 text-sm text-ink-muted">
                <Link href="/contact" className="text-clinic underline underline-offset-4">
                  Contact us
                </Link>{" "}
                — please don&apos;t include medical details in your message.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl">See whether we&apos;re a fit.</h2>
          <p className="mt-3 text-ink-muted">
            Create an account and complete your intake — you&apos;ll speak to a provider before
            anything is prescribed.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href={signupUrl}>Get started</CTA>
            <CTA href="/how-it-works" variant="secondary">
              How it works
            </CTA>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
