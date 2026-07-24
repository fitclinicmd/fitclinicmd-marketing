import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Card, EmergencyNotice } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE, loginUrl } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "General questions about FitClinicMD. For anything clinical, use secure messaging inside your patient portal.",
};

export default function Contact() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Get in touch.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Questions about how the service works, billing, or availability in your state — we&apos;re
            happy to help.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-ink-muted">
              We reply by email, usually within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            <Card className="border-accent/40 bg-accent-light/40">
              <h2 className="text-lg">Already a patient?</h2>
              <p className="mt-2 text-sm text-ink-soft">
                For anything about your care, treatment or medication, use secure messaging in your
                patient portal — it&apos;s protected and goes to your care team.
              </p>
              <a
                href={loginUrl}
                className="mt-4 inline-block text-sm font-semibold text-clinic hover:text-clinic-deep"
              >
                Sign in to your portal →
              </a>
            </Card>

            <Card>
              <h2 className="text-lg">Email us directly</h2>
              <p className="mt-2 text-sm text-ink-muted">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-clinic underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                Email isn&apos;t a secure channel — please don&apos;t send medical information.
              </p>
            </Card>

            <Card>
              <EmergencyNotice className="text-ink-muted" />
            </Card>

            <Card>
              <h2 className="text-lg">Privacy</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Read our{" "}
                <Link href="/legal/privacy" className="text-clinic underline underline-offset-4">
                  Notice of Privacy Practices
                </Link>{" "}
                to see how medical information is used and disclosed, and what rights you have.
              </p>
            </Card>
          </aside>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
