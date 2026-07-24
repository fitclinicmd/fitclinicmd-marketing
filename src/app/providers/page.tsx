import type { Metadata } from "next";
import { Container, Section, Eyebrow, Card, Claim, CTA } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our providers",
  description:
    "Care is delivered by licensed clinicians — nurse practitioners, physician assistants and physicians — licensed in the state where you live.",
};

const STANDARDS = [
  {
    title: "Licensed in your state",
    body: "Every provider who treats you holds an active license in the state where you are located at the time of your visit. Our system verifies this before a visit or prescription can happen — it is not left to memory.",
  },
  {
    title: "Credentials verified",
    body: "We verify licensure and credentials before a provider sees patients, and we track expiration dates so a lapsed license cannot be used.",
  },
  {
    title: "Clinical oversight",
    body: "Our clinical protocols are reviewed and signed off by our medical director, and prescribing follows those protocols rather than patient request.",
  },
  {
    title: "They can say no",
    body: "Providers are not compensated for prescribing. If treatment isn't appropriate for you, the right answer is no — and our providers are free to give it.",
  },
];

export default function Providers() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Our providers</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Licensed clinicians, accountable care.
          </h1>
          <div className="mt-5 max-w-2xl text-lg text-ink-soft">
            <Claim id="provider-credentials" />
          </div>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {STANDARDS.map((s) => (
            <Card key={s.title}>
              <div className="mb-4 h-1 w-12 rounded-full rule" />
              <h2 className="text-xl">{s.title}</h2>
              <p className="mt-2 text-ink-muted">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-ink/10 bg-white">
        <div className="max-w-2xl">
          <Eyebrow>Meet the team</Eyebrow>
          <h2 className="text-3xl">Provider profiles</h2>
          <p className="mt-3 text-ink-muted">
            Individual provider profiles — names, credentials, licensure and photographs — will be
            published here before launch.
          </p>
        </div>
        {/* Real headshots and bios only. No stock imagery or illustrated
            avatars will be used to represent clinicians. */}
        <div className="mt-8 rounded-xl2 border border-dashed border-ink/25 bg-sand p-8 text-center">
          <p className="text-sm text-ink-muted">
            Provider profiles are added as clinicians are credentialed. Real photographs and
            verified credentials only.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl">See a provider.</h2>
          <p className="mt-3 text-ink-muted">
            Create your account and complete your intake to be matched with a provider licensed in
            your state.
          </p>
          <div className="mt-7">
            <CTA href={signupUrl}>Get started</CTA>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our providers", path: "/providers" },
        ])}
      />
    </>
  );
}
