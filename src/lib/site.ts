// Site-wide configuration for the PHI-free marketing zone.

export const SITE = {
  name: "FitClinicMD",
  tagline: "Physician-guided peptide and weight-management care, delivered.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fitclinicmd.com",
  // The PHI application — a separate zone, separate host. CTAs hand off here
  // and never carry health context in the URL.
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.fitclinicmd.com",
  email: "hello@fitclinicmd.com",
} as const;

// Is the patient app deployed and accepting signups? Until it is, the app host
// (app.fitclinicmd.com) does not resolve, so pointing CTAs at it produces dead
// links. Pre-launch we route "Get started" to the contact page as a
// request-early-access action and hide "Sign in" (there are no patients yet).
// Flip on by setting NEXT_PUBLIC_APP_LIVE=true once the app is deployed.
export const APP_LIVE = process.env.NEXT_PUBLIC_APP_LIVE === "true";

export const signupUrl = APP_LIVE ? `${SITE.appUrl}/signup` : "/contact";
export const loginUrl = `${SITE.appUrl}/login`;

// "Sign in" and "Get started" are separate decisions, so they get separate
// switches. Sign in is a door for people who already have an account — staff,
// providers, a partner's referred patient. Get started opens self-signup on a
// HIPAA telehealth app to anyone who finds the page, which is a launch
// decision: it needs payments switched on and a provider licensed in the
// visitor's state, or the person signs up and nobody can treat them.
//
// NEXT_PUBLIC_SHOW_SIGN_IN=true shows the sign-in links on their own.
// NEXT_PUBLIC_APP_LIVE=true does that AND opens signup.
export const showSignIn = APP_LIVE || process.env.NEXT_PUBLIC_SHOW_SIGN_IN === "true";

// The peptide library is the largest body of content on the site — 14 peptide
// pages, 19 blend pages, and two section pages. Until 2026-08-25 it was reachable
// only from the homepage finder and a link on /treatments: absent from the primary
// nav, absent from the footer, and absent from the sitemap.
//
// Peptides leads the nav AND has a pill in the header (see Header.tsx). That is
// deliberate duplication, not an oversight: peptides are the current focus, and
// the library is what people arrive looking for. Two routes to it beats one.
export const NAV = [
  { href: "/peptides", label: "Peptides" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/treatments", label: "Treatments" },
  { href: "/providers", label: "Our providers" },
  { href: "/faq", label: "FAQ" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "Care",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/treatments/peptides", label: "Peptide therapy" },
      { href: "/treatments/weight-management", label: "Weight management" },
      { href: "/peptides", label: "Peptide library" },
      { href: "/peptides/blends", label: "Peptide blends" },
      { href: "/peptides/glp-1", label: "GLP-1 medicines" },
      { href: "/peptides/fda-status", label: "Peptides and the FDA" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/providers", label: "Our providers" },
      { href: "/learn", label: "Learn" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy", label: "Notice of Privacy Practices" },
      { href: "/legal/terms", label: "Terms of Service" },
      { href: "/legal/telehealth-consent", label: "Telehealth Consent" },
    ],
  },
] as const;
