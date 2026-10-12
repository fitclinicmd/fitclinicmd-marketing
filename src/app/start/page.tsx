import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui";
import StartForm from "./StartForm";

export const metadata: Metadata = {
  title: "Start your visit",
  description:
    "Get your FitClinicMD visit started in under a minute — tell us who you are and which service you're interested in, and we'll take you to booking.",
  // Funnel step, not content: keep it out of search so it doesn't compete with
  // the real pages and isn't indexed as a thin page.
  robots: { index: false, follow: true },
};

export default function Start() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Eyebrow>Start your visit</Eyebrow>
          <h1 className="max-w-2xl text-4xl sm:text-5xl">Let&apos;s get you booked.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            A few quick details and we&apos;ll take you straight to scheduling your visit with a
            licensed provider. It takes about a minute.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-md">
            <StartForm />
          </div>

          <aside className="space-y-4 text-sm text-ink-soft">
            <div className="rounded-xl2 border border-ink/10 bg-ink/[0.02] p-5">
              <p className="font-semibold text-ink">How it works</p>
              <ol className="mt-3 space-y-2">
                <li>1. Tell us who you are and what you&apos;re interested in.</li>
                <li>2. Book a time with a licensed provider.</li>
                <li>3. Complete your intake and labs if needed.</li>
                <li>4. If it&apos;s appropriate, your treatment ships to your door.</li>
              </ol>
            </div>
            <p className="text-xs text-ink-muted">
              Prescriptions are issued only if a licensed provider determines treatment is
              appropriate for you. Compounded medications are not FDA-approved. You must be 18 or
              older. Individual results vary.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
