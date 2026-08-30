import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, CTA, EmergencyNotice } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "How visits work, what happens with your data, how billing and cancellation work, and what to expect from a FitClinicMD provider.",
};

// Process, privacy and billing questions only. Anything about what a
// medication does or how well it works is a regulated claim and belongs in the
// claims registry — deliberately not answered here.
const FAQ = [
  {
    q: "Do I need insurance?",
    a: "No. FitClinicMD is cash-pay and we do not bill insurance. You pay one transparent price, so there are no claims, deductibles or surprise bills later.",
  },
  {
    q: "Am I guaranteed a prescription?",
    a: "No. A licensed provider evaluates you and prescribes only when they determine treatment is clinically appropriate. If it isn't, they will explain why and discuss alternatives. You are not charged for medication that isn't prescribed.",
  },
  {
    q: "Who will I be seeing?",
    a: "A licensed clinician — a nurse practitioner, physician assistant or physician — who holds an active license in the state where you are located. Our system verifies licensure before a visit or prescription can occur.",
  },
  {
    q: "What happens during the visit?",
    a: "You meet your provider by video. They review the intake you completed in your portal and any lab results, discuss your history and goals, answer your questions, and decide with you whether treatment is appropriate.",
  },
  {
    q: "Will I need bloodwork?",
    a: "Sometimes. Some treatments require labs before they can be prescribed safely, and hormone therapy always does. If labs are needed we arrange them, and the results are attached to your chart for your provider.",
  },
  {
    q: "Where does my medication come from?",
    a: "If you are prescribed treatment, a licensed partner compounding pharmacy prepares it and ships it to you. Compounded preparations are not FDA-approved products; your provider will explain what that means for your treatment.",
  },
  {
    q: "Do you collect health information on this website?",
    a: "No. Nothing on this public website asks about your health. Medical intake happens only inside our secure patient portal, which is a separate system. We do not run advertising trackers on either.",
  },
  {
    q: "Do you sell my data or share it with advertisers?",
    a: "No. We do not sell your information and we do not share it with advertising platforms. Our Notice of Privacy Practices explains how your medical information may be used and disclosed and what rights you have.",
  },
  {
    q: "How does billing work?",
    a: "You are shown exactly what you will be charged, and what it covers, before you agree to anything. Everything is itemized and visible in your account.",
  },
  {
    q: "How do I cancel?",
    a: "From your account, yourself — no phone call needed. Stopping future charges takes effect immediately; it does not refund medication already dispensed and shipped.",
  },
  {
    q: "What if a payment fails?",
    a: "We contact you and give you time to update your payment method rather than immediately ending your care. If it isn't resolved, your plan is paused.",
  },
  {
    q: "Which states do you serve?",
    a: "Availability depends on where our providers hold licenses, and some treatments have additional state-level restrictions. You will be told clearly during signup if we cannot serve your state.",
  },
  {
    q: "Can I message my provider between visits?",
    a: "Yes. Secure messaging with your care team is built into your patient portal. It is not monitored around the clock and must never be used for emergencies.",
  },
  {
    q: "Is this suitable for an emergency?",
    a: "No. FitClinicMD is not for emergencies. If you have a medical emergency, call 911 or go to your nearest emergency department.",
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Questions, answered plainly.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            How visits work, what happens with your information, and how billing works. Questions
            about specific treatments are best answered by your provider during your visit.
          </p>
        </Container>
      </div>

      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-ink/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium marker:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-clinic transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl2 border border-ink/10 bg-white p-6">
          <EmergencyNotice />
          <p className="mt-4 text-sm text-ink-muted">
            Still have a question?{" "}
            <Link href="/contact" className="text-clinic underline underline-offset-4">
              Contact us
            </Link>{" "}
            — please don&apos;t include medical details in your message.
          </p>
        </div>

        <div className="mt-12 text-center">
          <CTA href={signupUrl}>Get started</CTA>
        </div>
      </Section>

      <JsonLd
        data={[
          faqSchema(FAQ.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
    </>
  );
}
