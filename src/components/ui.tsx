import Link from "next/link";
import { getClaim } from "@/lib/claims";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-content px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-clinic">{children}</p>
  );
}

export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";
  const styles = {
    primary: "bg-clinic text-white hover:bg-clinic-deep",
    secondary: "border border-ink/15 bg-white text-ink hover:border-clinic hover:text-clinic",
    quiet: "text-clinic hover:text-clinic-deep underline underline-offset-4",
  }[variant];

  // External handoff to the application zone opens in the same tab and carries
  // no health context in the URL.
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl2 border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(15,27,45,.04)] ${className}`}>
      {children}
    </div>
  );
}

/**
 * Self-hosted photograph. Licensed stock lives in /public/images (no hotlinks,
 * per the network image rule). Wrap it in an aspect-ratio + overflow-hidden
 * container — this fills and covers it. `priority` = eager-load for above-the-fold.
 * Photos are lifestyle/experience only; they never depict our specific clinicians
 * (provider photos remain real-only placeholders) and never imply a treatment result.
 */
export function Photo({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- site deliberately avoids next/image (no sharp dep)
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

/**
 * A regulated marketing claim. Renders counsel-approved text, or a clearly
 * marked placeholder — never invented copy. See src/lib/claims.ts.
 */
export function Claim({ id, className = "" }: { id: string; className?: string }) {
  const claim = getClaim(id);

  if (!claim) {
    return (
      <span className="rounded-sm bg-red-100 px-2 py-1 text-sm text-red-800">
        Unknown claim: {id}
      </span>
    );
  }

  // Counsel-approved: render clean.
  if (claim.status === "APPROVED" && claim.text) {
    return <span className={className}>{claim.text}</span>;
  }

  // Drafted for counsel review: show the proposed copy with a small marker so
  // counsel reviews real text. NOT treated as approved — the site stays
  // non-indexable and the pre-launch banner stays up until status is APPROVED.
  if (claim.status === "DRAFT" && claim.text) {
    return (
      <span className={className} data-claim-draft={claim.id}>
        {claim.text}{" "}
        <span className="ml-1 whitespace-nowrap rounded-sm bg-accent-light px-1.5 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-ink/70">
          Draft · pending counsel
        </span>
      </span>
    );
  }

  // No text yet: placeholder describing what the slot must say.
  return (
    <span
      className={`inline-block rounded-md border border-dashed border-accent bg-accent-light/60 px-3 py-2 text-sm text-ink-soft ${className}`}
      data-claim-pending={claim.id}
    >
      {/* Dark text on gold — white on #c8962a fails WCAG AA contrast. */}
      <span className="mr-2 rounded-sm bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
        Pending counsel
      </span>
      {claim.intent}
    </span>
  );
}

/**
 * Important Safety Information — a standing compounded-medication + non-medical-
 * advice disclosure, modeled on the pattern counsel referenced. This is a
 * protective disclaimer, not a promotional claim. Place at the foot of pages
 * that describe treatments.
 */
export function ImportantSafetyInfo({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl2 border border-ink/10 bg-white p-6 text-xs leading-relaxed text-ink-muted ${className}`}>
      <p className="mb-2 font-semibold uppercase tracking-wide text-ink/70">Important safety information</p>
      <p>
        Compounded medications offered through FitClinicMD are prescribed only after an individual
        clinical evaluation by a licensed provider, and are prepared by state-licensed compounding
        pharmacies. Compounded medications have not been evaluated or approved by the U.S. Food and
        Drug Administration as safe or effective for the treatment of any condition. Information on
        this site is for general educational purposes and is not medical advice. You must be 18 or
        older. Individual results vary. A prescription is issued only if a licensed provider
        determines it is appropriate for you.
      </p>
    </div>
  );
}

/** Site-wide notice while any regulated claim is still unapproved. */
export function PreLaunchBanner({ pending }: { pending: number }) {
  if (pending === 0) return null;
  return (
    <div data-prelaunch-banner className="bg-ink px-4 py-2 text-center text-xs text-white">
      <strong className="font-semibold">Pre-launch preview.</strong>{" "}
      {pending} marketing {pending === 1 ? "claim is" : "claims are"} awaiting counsel approval and
      shown as drafts pending review. This site is not indexed and is not open to patients.
    </div>
  );
}

/** Standing safety notice. Wording must match the telehealth consent. */
export function EmergencyNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm ${className}`}>
      <strong>This service is not for emergencies.</strong> If you have a medical emergency, call 911
      or go to your nearest emergency department. Messages are not monitored 24/7.
    </p>
  );
}
