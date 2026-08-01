import { Section, Eyebrow } from "./ui";
import {
  INDIVIDUAL_PEPTIDES,
  PROPRIETARY_BLENDS,
  PRODUCTS_STATUS,
  type Product,
  retail,
  formatUsd,
} from "@/lib/products";

// The peptide & blend catalog. Prices are RETAIL (provider price × 2). Every
// description is a DRAFT, conservative product claim — while PRODUCTS_STATUS is
// "DRAFT" the whole menu carries a visible "pending final review" marker and
// nothing is offered for direct sale here (a provider decides after a visit).
function ProductRow({ p }: { p: Product }) {
  return (
    <li className="flex flex-col gap-1 border-b border-ink/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-semibold text-ink">{p.name}</span>
          <span className="text-sm text-ink-muted">{p.strength}</span>
        </div>
        <p className="mt-1 text-sm text-ink-muted">{p.blurb}</p>
      </div>
      <div className="shrink-0 text-sm sm:text-right">
        <span className="font-semibold text-ink">{formatUsd(retail(p))}</span>
        <span className="block text-xs text-ink-muted">per vial · when prescribed</span>
      </div>
    </li>
  );
}

export default function PeptideMenu() {
  return (
    <Section className="border-t border-ink/10" id="menu">
      <div className="mb-8 max-w-2xl">
        <Eyebrow>The menu</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Peptides & proprietary blends</h2>
        <p className="mt-3 text-ink-muted">
          The compounds a provider may prescribe when a peptide therapy is appropriate for you.
          Prices shown are retail per vial and apply only when a licensed provider prescribes the
          therapy after your evaluation — nothing here is sold directly, and availability depends on
          your provider&apos;s judgment and applicable law.
        </p>
        {PRODUCTS_STATUS === "DRAFT" && (
          <p className="mt-4 inline-block rounded-md border border-accent/40 bg-accent-light/40 px-3 py-2 text-sm text-ink-soft">
            Draft · descriptions and pricing are being finalized with our clinical and legal teams.
          </p>
        )}
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xl">Individual peptides</h3>
          <ul className="mt-2">
            {INDIVIDUAL_PEPTIDES.map((p) => (
              <ProductRow key={`${p.name}-${p.strength}`} p={p} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl">Proprietary blends</h3>
          <ul className="mt-2">
            {PROPRIETARY_BLENDS.map((p) => (
              <ProductRow key={p.name} p={p} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
