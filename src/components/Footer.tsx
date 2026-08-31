import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { Container, EmergencyNotice } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/fitclinicmd-wordmark.png"
              alt="FitClinicMD"
              width={150}
              height={27}
              className="h-[27px] w-auto"
            />
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Physician-guided care by licensed providers, with medication fulfilled by a partner
              compounding pharmacy.
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                {col.heading}
              </h2>
              <ul className="space-y-2 text-sm text-ink-muted">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-clinic">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 space-y-4 border-t border-ink/10 pt-8">
          <EmergencyNotice className="text-ink-muted" />
          <p className="text-sm text-ink-muted">
            FitClinicMD provides access to licensed healthcare providers. Information on this site is
            general and is not medical advice, and does not create a provider-patient relationship.
            Compounded medications are prepared by a licensed pharmacy and are not FDA-approved
            products. Treatment is prescribed only when a provider determines it is clinically
            appropriate.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-ink-muted">
            <p>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p>
              <Link href="/legal/privacy" className="hover:text-clinic">
                Notice of Privacy Practices
              </Link>
              <span aria-hidden="true"> · </span>
              <Link href="/legal/terms" className="hover:text-clinic">
                Terms
              </Link>
              <span aria-hidden="true"> · </span>
              <Link href="/contact" className="hover:text-clinic">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
