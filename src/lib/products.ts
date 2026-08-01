// PRODUCT MENU — peptides & proprietary blends.
//
// Source of truth for the catalog shown on /treatments/peptides. Prices come
// from the Medvora Medical / Active Pharm provider price list (6/18/2026);
// RETAIL = provider price × 2 (per Michael, 2026-08-01). We store the provider
// price and derive retail in one place (`retail()`), so the ×2 rule is explicit
// and auditable and a price change is a one-number edit.
//
// ⚠️ COUNSEL / CLINICAL GATE: the one-line `blurb` for each item is a regulated
// product description. Every blurb here is DRAFT — deliberately conservative,
// associative wording ("studied for…"), never an efficacy or outcome promise,
// and never implying FDA approval of a compounded preparation. The page renders
// the whole menu behind a "pending final review" marker and the site stays
// non-indexable until these are approved (see PRODUCTS_STATUS + claims.ts).
//
// Availability of any specific compound depends on the provider's judgment and
// on state/federal law; nothing here is offered for sale directly.

export type ProductCategory = "peptide" | "blend";

export type Product = {
  name: string;
  category: ProductCategory;
  /** Presentation, e.g. "5 mL · 10 mg" or the blend's component list. */
  strength: string;
  /** DRAFT, conservative, non-efficacy description — pending counsel. */
  blurb: string;
  /** Provider price in USD (from the provider price list). */
  providerPrice: number;
};

// Retail rule: provider price × 2.
export const RETAIL_MULTIPLIER = 2;
export function retail(p: Product): number {
  return Math.round(p.providerPrice * RETAIL_MULTIPLIER * 100) / 100;
}
export function formatUsd(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// Menu descriptions and retail pricing approved by Michael 2026-08-01. (Site
// indexing/patient signup remain separately gated — see claims.ts + the app.)
export const PRODUCTS_STATUS: "DRAFT" | "APPROVED" = "APPROVED";

export const INDIVIDUAL_PEPTIDES: Product[] = [
  { name: "BPC-157", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for tissue repair and recovery support.", providerPrice: 80.99 },
  { name: "TB-500", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for recovery, mobility, and soft-tissue support.", providerPrice: 80.99 },
  { name: "Ipamorelin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A growth-hormone-releasing peptide studied for recovery and body-composition support.", providerPrice: 89.99 },
  { name: "Sermorelin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A growth-hormone-releasing peptide studied for sleep and recovery support.", providerPrice: 73.99 },
  { name: "Tesamorelin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A growth-hormone-releasing analog studied for body-composition support.", providerPrice: 82.99 },
  { name: "Tesamorelin", category: "peptide", strength: "10 mL · 20 mg", blurb: "A growth-hormone-releasing analog studied for body-composition support.", providerPrice: 158.99 },
  { name: "AOD 9604", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide fragment studied for metabolic and body-composition support.", providerPrice: 117.99 },
  { name: "Mots-C", category: "peptide", strength: "5 mL · 10 mg", blurb: "A mitochondrial-derived peptide studied for metabolism and energy support.", providerPrice: 57.99 },
  { name: "5-Amino-1MQ", category: "peptide", strength: "5 mL · 10 mg", blurb: "A small molecule studied for metabolism and fat-cell support.", providerPrice: 89.99 },
  { name: "NAD+", category: "peptide", strength: "5 mL · 500 mg", blurb: "A coenzyme studied for cellular energy metabolism and healthy-aging support.", providerPrice: 60.0 },
  { name: "NAD+", category: "peptide", strength: "5 mL · 1000 mg", blurb: "A coenzyme studied for cellular energy metabolism and healthy-aging support.", providerPrice: 99.0 },
  { name: "Epitalon", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for healthy-aging and sleep-cycle support.", providerPrice: 61.99 },
  { name: "Epitalon", category: "peptide", strength: "5 mL · 20 mg", blurb: "A peptide studied for healthy-aging and sleep-cycle support.", providerPrice: 74.99 },
  { name: "GHK-CU", category: "peptide", strength: "5 mL · 50 mg", blurb: "A copper peptide studied for skin, hair, and tissue support.", providerPrice: 69.99 },
  { name: "GHK-CU", category: "peptide", strength: "5 mL · 100 mg", blurb: "A copper peptide studied for skin, hair, and tissue support.", providerPrice: 79.99 },
  { name: "IGF-1 LR3", category: "peptide", strength: "5 mL · 1 mg", blurb: "A peptide studied for recovery and lean-tissue support.", providerPrice: 88.99 },
  { name: "Thymosin Alpha-1", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for immune-system support.", providerPrice: 66.99 },
  { name: "LL-37", category: "peptide", strength: "5 mL · 5 mg", blurb: "A peptide studied for immune and skin support.", providerPrice: 59.99 },
  { name: "KPV", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide (lysine-proline-valine) studied for calming and gut/skin support.", providerPrice: 91.99 },
  { name: "Selank", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for calm, focus, and stress resilience.", providerPrice: 51.99 },
  { name: "Semax", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for focus and mental clarity.", providerPrice: 51.99 },
  { name: "DSIP", category: "peptide", strength: "5 mL · 5 mg", blurb: "A peptide (delta-sleep-inducing peptide) studied for sleep quality.", providerPrice: 69.99 },
  { name: "PT-141", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for libido and sexual-wellness support.", providerPrice: 69.99 },
  { name: "Oxytocin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for mood and wellbeing support.", providerPrice: 54.99 },
  { name: "Kisspeptin-10", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide studied for hormonal and reproductive signaling.", providerPrice: 74.99 },
];

export const PROPRIETARY_BLENDS: Product[] = [
  { name: "Prometheus", category: "blend", strength: "CJC-1295 / Ipamorelin", blurb: "A growth-hormone-support blend studied for recovery and body composition.", providerPrice: 114.99 },
  { name: "Valkyr", category: "blend", strength: "BPC-157 / TB-500", blurb: "A recovery-focused blend studied for tissue repair and mobility.", providerPrice: 118.99 },
  { name: "Fountain of Youth", category: "blend", strength: "GHK-CU / BPC-157 / TB-500 / Epitalon", blurb: "A longevity-and-recovery blend studied for skin, tissue, and healthy-aging support.", providerPrice: 169.99 },
  { name: "Kälm", category: "blend", strength: "Semax / Selank", blurb: "A calm-and-focus blend studied for stress resilience and clarity.", providerPrice: 89.99 },
  { name: "APEX", category: "blend", strength: "Tesamorelin / CJC-1295 / Ipamorelin / BPC-157", blurb: "A performance-and-recovery blend studied for body composition and repair.", providerPrice: 189.99 },
  { name: "Adonix", category: "blend", strength: "Tesamorelin / Ipamorelin / AOD-9604 / Mots-C", blurb: "A body-composition blend studied for metabolic and recovery support.", providerPrice: 189.99 },
  { name: "Samson & Delilah", category: "blend", strength: "GHK-CU / CJC-1295 / Ipamorelin / TB-500", blurb: "A recovery-and-appearance blend studied for tissue, skin, and repair support.", providerPrice: 169.99 },
  { name: "Empress", category: "blend", strength: "Mots-C / BPC-157 / GHK-CU / Kisspeptin-10", blurb: "A women's wellness blend studied for metabolic, recovery, and hormonal support.", providerPrice: 179.99 },
  { name: "Inferno", category: "blend", strength: "AOD-9604 / CJC-1295 / Ipamorelin / Mots-C", blurb: "A metabolic blend studied for body-composition and energy support.", providerPrice: 189.99 },
  { name: "Lucid", category: "blend", strength: "Semax / Selank / Mots-C / Tesamorelin", blurb: "A focus-and-vitality blend studied for clarity, energy, and composition support.", providerPrice: 189.99 },
  { name: "Love & Happiness", category: "blend", strength: "Oxytocin / PT-141", blurb: "An intimacy-and-mood blend studied for libido and wellbeing support.", providerPrice: 118.99 },
  { name: "Atlas", category: "blend", strength: "CJC-1295 / Ipamorelin / Tesamorelin / IGF-1 LR3", blurb: "A performance blend studied for recovery and lean-tissue support.", providerPrice: 189.99 },
  { name: "Sentinel", category: "blend", strength: "Thymosin Alpha-1 / BPC-157 / KPV / LL-37", blurb: "An immune-and-repair blend studied for immune, gut, and tissue support.", providerPrice: 159.99 },
  { name: "Hypnøs", category: "blend", strength: "DSIP / Selank / CJC-1295 / Ipamorelin", blurb: "A sleep-and-recovery blend studied for rest and overnight repair support.", providerPrice: 189.99 },
  { name: "Selene", category: "blend", strength: "GHK-CU / Tesamorelin", blurb: "A skin-and-composition blend studied for appearance and body-composition support.", providerPrice: 118.99 },
  { name: "Bodhi", category: "blend", strength: "Semax / Selank / BPC-157 / KPV", blurb: "A mind-and-gut blend studied for clarity, calm, and gut support.", providerPrice: 169.99 },
  { name: "Kali", category: "blend", strength: "BPC-157 / Mots-C / 5-Amino-1MQ / Tesamorelin", blurb: "A metabolic-recovery blend studied for composition and repair support.", providerPrice: 189.99 },
  { name: "Hyperion", category: "blend", strength: "Ipamorelin / Tesamorelin", blurb: "A growth-hormone-support blend studied for recovery and body composition.", providerPrice: 118.99 },
  { name: "Crave", category: "blend", strength: "PT-141 / Oxytocin / Kisspeptin-10", blurb: "An intimacy blend studied for libido and mood support.", providerPrice: 149.99 },
];
