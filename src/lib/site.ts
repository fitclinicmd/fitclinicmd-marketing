// Site-wide configuration for the PHI-free marketing zone.

export const SITE = {
  name: "FitClinicMD",
  tagline: "Physician-guided weight and hormone care, delivered.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fitclinicmd.com",
  // The PHI application — a separate zone, separate host. CTAs hand off here
  // and never carry health context in the URL.
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.fitclinicmd.com",
  email: "hello@fitclinicmd.com",
} as const;

export const signupUrl = `${SITE.appUrl}/signup`;
export const loginUrl = `${SITE.appUrl}/login`;

export const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/treatments", label: "Treatments" },
  { href: "/pricing", label: "Pricing" },
  { href: "/providers", label: "Our providers" },
  { href: "/faq", label: "FAQ" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "Care",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/treatments/weight-management", label: "Weight management" },
      { href: "/treatments/hormone-therapy", label: "Hormone therapy" },
      { href: "/pricing", label: "Pricing" },
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
