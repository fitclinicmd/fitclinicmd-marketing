import Link from "next/link";
import { NAV, signupUrl, loginUrl, showSignIn } from "@/lib/site";
import { publishedPeptides } from "@/lib/peptides";
import { BLENDS } from "@/lib/blends";
import { Container, CTA } from "./ui";

// Zero-JS header. On large screens the nav sits inline; below that it moves to
// its own full-width row so links are never clipped behind the CTA.
//
// The peptide library gets a pill of its own rather than a text nav entry. It is
// the deepest content on the site and the thing people arrive looking for, and a
// fifth grey link would not have found it. The pill is styled in the warm accent
// rather than clinic blue on purpose: it has to read as prominent without
// competing with "Get started", which is the conversion action. It stays visible
// at every breakpoint, shedding only its count on the smallest screens.
export default function Header() {
  const libraryCount = publishedPeptides().length + BLENDS.length;

  const navLinks = (
    <ul className="flex items-center gap-5 text-sm text-ink-muted">
      {NAV.map((n) => (
        <li key={n.href} className="shrink-0">
          <Link href={n.href} className="whitespace-nowrap hover:text-clinic">
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/85 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-lg font-semibold tracking-tight">
          <span className="font-display text-ink">FitClinic</span>
          <span className="font-display text-clinic">MD</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          {navLinks}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/peptides"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/60 bg-accent-light px-3 py-2 text-sm font-semibold text-ink transition hover:border-clinic hover:text-clinic sm:px-4"
          >
            Peptides
            <span
              aria-hidden
              className="hidden rounded-full bg-white/70 px-1.5 py-0.5 text-[11px] font-semibold text-ink-muted sm:inline"
            >
              {libraryCount}
            </span>
          </Link>
          {showSignIn && (
            <a href={loginUrl} className="hidden text-sm text-ink-muted hover:text-clinic lg:block">
              Sign in
            </a>
          )}
          <CTA href={signupUrl} className="px-4 py-2">
            Get started
          </CTA>
        </div>
      </Container>

      {/* Small/medium screens: nav on its own scrollable row. */}
      <nav
        aria-label="Primary"
        className="border-t border-ink/10 lg:hidden"
      >
        <Container className="overflow-x-auto py-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {navLinks}
        </Container>
      </nav>
    </header>
  );
}
