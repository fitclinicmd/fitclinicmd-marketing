import Link from "next/link";
import { NAV, signupUrl, loginUrl, showSignIn } from "@/lib/site";
import { Container, CTA } from "./ui";

// Zero-JS header. On large screens the nav sits inline; below that it moves to
// its own full-width row so links are never clipped behind the CTA.
export default function Header() {
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

        <div className="flex shrink-0 items-center gap-3">
          {showSignIn && (
            <a href={loginUrl} className="hidden text-sm text-ink-muted hover:text-clinic sm:block">
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
