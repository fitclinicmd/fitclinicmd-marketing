import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Claim, CTA } from "@/components/ui";
import ProductPricing from "@/components/ProductPricing";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  openGraph: { url: "https://www.fitclinicmd.com/pricing" },
  title: "Product pricing",
  description:
    "FitClinicMD customer retail prices for peptides, GLP-1 lines, and TRT kits from the 5 Nov 2026 product list. Prescription only when clinically appropriate.",
  // Keep out of search until Michael approves a live go-public of this catalog.
  robots: { index: false, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-clinic">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">Pricing</span>
          </nav>
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Product and shipping prices.</h1>
          <div className="mt-5 max-w-2xl space-y-4 text-lg text-ink-soft">
            <Claim id="pricing-headline" />
            <p className="text-base text-ink-muted">
              Medication retail prices below come from the FitClinicMD product list dated 5 Nov 2026
              (Believe Rx for peptides and GLP-1s; Vios for TRT kits). They are not a cart and not a
              promise that any product will be prescribed.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <ProductPricing />

        <div className="mt-12 rounded-xl2 border border-ink/10 bg-white p-6">
          <h2 className="text-lg">Automatic renewal</h2>
          <div className="mt-2 text-ink-muted">
            <Claim id="pricing-autorenewal" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA href={signupUrl}>Get started</CTA>
            <CTA href="/treatments" variant="secondary">
              View treatments
            </CTA>
            <CTA href="/glp-1" variant="quiet">
              GLP-1 education
            </CTA>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
    </>
  );
}
