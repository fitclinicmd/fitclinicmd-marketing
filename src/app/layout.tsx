import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PreLaunchBanner } from "@/components/ui";
import { pendingClaims, siteIsIndexable } from "@/lib/claims";
import { Analytics } from "@/lib/analytics";
import { GoogleAnalytics } from "@/lib/google-analytics";
import { MegaOptimizer } from "@/lib/mega-optimizer";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

// Self-hosted at build time by next/font — no runtime requests to Google.
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Physician-guided peptide therapy and weight management (GLP-1) by telehealth. Licensed providers, medication delivered.",
  // Never index while any marketing claim is unapproved (see lib/claims.ts).
  robots: siteIsIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Physician-guided peptide therapy and weight management (GLP-1) by telehealth.",
  },
  // Google Search Console verification. Preferred method is a DNS TXT record
  // (no code) — see docs/SEARCH-CONSOLE.md. This meta-tag path is a ready
  // alternative: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the token Google
  // gives you and the tag renders automatically; unset, nothing is emitted.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pending = pendingClaims().length;

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <MegaOptimizer />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-clinic focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <PreLaunchBanner pending={pending} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
