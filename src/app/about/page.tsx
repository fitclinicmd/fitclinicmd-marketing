import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

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
    title: "Pricing, straight from us",
    // Deliberately no figure. Pricing is a regulated claim (lib/claims.ts) and
    // the model is itemized with three numbers still unset, so this points at
    // the contact channel instead of stating a price. Swap in a phone number
    // here and on /faq once one exists — there is none on the site today, so
    // "call us" would point at nothing.
    body: "If care becomes available, FitClinicMD will be cash pay and will not bill insurance. Charges may include a consultation, labs when ordered, medication only if a licensed provider decides it is appropriate, and shipping. We will explain applicable charges before each payment.",
  },
  // EARLIER PRICING PRINCIPLE — REMOVED FROM THE PAGE 2026-08-25, KEPT FOR LATER.
  //
  // Pulled for two reasons: the pricing model is not settled (it is itemized —
  // consultation, labs if ordered, medication, shipping — and three of those
  // numbers do not exist yet), and it described recurring billing, which was
  // removed from the marketing copy sitewide. It is also a regulated claim, so
  // whatever replaces it belongs in lib/claims.ts and needs counsel sign-off
  // before it renders anywhere.
  //
  // Restore only once pricing is final and approved — and rewrite it first:
  // "one price" is no longer true of an itemized model.
  //
  // {
  //   title: "Prices you can see",
  //   body: "One price, shown before you pay it, billed on a schedule you agreed to, cancellable from your account without a phone call. No claims, no deductibles, no bill arriving three months later.",
  // },
  {
    title: "Boundaries we don't cross",
    body: "We will only offer care where an affiliated clinician is licensed and where the law and evidence support it. Availability will depend on where you are located, and care will not be available in every state.",
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
            FitClinicMD is preparing an evaluation-first telehealth experience. We are not open to
            patients yet. If care becomes available, an independent licensed clinician will evaluate
            each person and decide whether treatment is appropriate, based on applicable requirements
            and the person&apos;s location.
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
            <h2 className="text-3xl">Evaluation first, then a decision.</h2>
            <p className="mt-4 text-ink-muted">
              FitClinicMD is not open to patients yet. If care becomes available, an independent
              licensed clinician will evaluate you by phone or video, order labs when indicated, and
              decide whether any treatment is appropriate. A prescription is never guaranteed.
            </p>
            <p className="mt-4 text-ink-muted">
              Availability depends on where you are located and whether a FitClinicMD-affiliated
              clinician is licensed in the state where you are located. Care is not available in
              every state.
            </p>
            <p className="mt-4 text-ink-muted">
              FitClinicMD is the technology and administrative platform for this planned experience.
              Independent licensed clinicians make clinical decisions. A licensed pharmacy may
              dispense medication only if a clinician prescribes it.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <h3 className="text-lg">What we are</h3>
              <p className="mt-2 text-sm text-ink-muted">
                A pre-launch telehealth platform preparing an evaluation-first care experience. The
                service is not open to patients yet. If care becomes available, independent licensed
                clinicians will make clinical decisions, and a licensed pharmacy may dispense
                medication only when a clinician prescribes it.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg">What we are not</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Not open to patients yet. Not a pharmacy, a supplement company, or a substitute for
                emergency or in-person care. Information on this site is general and is not medical
                advice.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg">Questions?</h3>
              <p className="mt-2 text-sm text-ink-muted">
                <Link href="/contact" className="text-clinic underline underline-offset-4">
                  Send an inquiry
                </Link>{" "}
                — please don&apos;t include medical details in your message.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl">Questions before launch?</h2>
          <p className="mt-3 text-ink-muted">
            FitClinicMD is not open to patients yet. For general questions about the evaluation-first
            pathway, availability, or cash-pay structure, send an inquiry. For general education,
            explore the Learn library.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href="/contact">Send an inquiry</CTA>
            <CTA href="/learn" variant="secondary">
              Looking for education
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
