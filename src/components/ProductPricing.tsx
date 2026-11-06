import { Card } from "@/components/ui";
import {
  BELIEVE_SHIPPING_USD,
  CATALOG_DISCLOSURES,
  CATALOG_SOURCE,
  formatUsd,
  GLP1_LADDERS,
  PEPTIDE_RETAIL,
  TRT_KITS,
  type CatalogItem,
} from "@/lib/catalogPricing";

function PriceRow({ item }: { item: CatalogItem }) {
  return (
    <li className="flex flex-col gap-1 border-b border-ink/10 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <p className="font-medium text-ink">{item.name}</p>
        {item.packageNote ? (
          <p className="mt-1 text-sm text-ink-muted">{item.packageNote}</p>
        ) : null}
        <p className="mt-1 text-xs text-ink-muted">Pharmacy partner: {item.pharmacy}</p>
      </div>
      <p className="shrink-0 text-base font-semibold tabular-nums text-ink">
        {formatUsd(item.retailUsd)}
      </p>
    </li>
  );
}

/**
 * Customer-facing retail menu for FitClinicMD (Todd 11.05.2026).
 * Logistics and retail figures only — no efficacy claims.
 */
export default function ProductPricing() {
  return (
    <div className="space-y-10">
      <Card className="border-accent/40 bg-accent-light/40">
        <h2 className="text-lg">How to read this list</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          {CATALOG_DISCLOSURES.map((line) => (
            <li key={line} className="flex gap-2">
              <span aria-hidden="true" className="text-clinic">
                —
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink-muted">Source: {CATALOG_SOURCE}</p>
      </Card>

      <section aria-labelledby="pricing-peptides">
        <h2 id="pricing-peptides" className="text-2xl">
          Peptides
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Believe Rx. Flat {formatUsd(BELIEVE_SHIPPING_USD)} shipping per order.
        </p>
        <Card className="mt-4">
          <ul>
            {PEPTIDE_RETAIL.map((item) => (
              <PriceRow key={item.name} item={item} />
            ))}
          </ul>
        </Card>
      </section>

      <section aria-labelledby="pricing-glp1">
        <h2 id="pricing-glp1" className="text-2xl">
          GLP-1 medications
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Four lines — Semaglutide or Tirzepatide with Glycine or B12. Same retail price for Glycine
          or B12 at each ladder step. One vial per month on the source list. Believe Rx; flat{" "}
          {formatUsd(BELIEVE_SHIPPING_USD)} shipping per order.
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          {GLP1_LADDERS.map((ladder) => (
            <Card key={ladder.lineName}>
              <div className="mb-2 border-b border-ink/10 pb-3">
                <h3 className="text-lg text-clinic">{ladder.lineName}</h3>
                <p className="mt-1 text-xs text-ink-muted">Pharmacy partner: {ladder.pharmacy}</p>
              </div>
              <ul>
                {ladder.tiers.map((item) => (
                  <PriceRow key={item.name} item={item} />
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="pricing-trt">
        <h2 id="pricing-trt" className="text-2xl">
          Men&apos;s health — TRT kits
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Vios. Monthly kit price includes shipping to the patient. Enclomiphene-only is not offered
          on this FitClinicMD list.
        </p>
        <Card className="mt-4">
          <ul>
            {TRT_KITS.map((item) => (
              <PriceRow key={item.name} item={item} />
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
