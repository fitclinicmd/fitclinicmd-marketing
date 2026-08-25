// PRODUCT MENU — peptides & compounded blends.
//
// NOT CURRENTLY RENDERED. Nothing imports this file. /treatments/peptides moved
// to the consultation-led PeptideMenu presentation, which carries no prices; the
// header here previously described this as the source of truth for that page,
// which stopped being true and misled a later reader. If this is ever wired up
// again, read the two rules below first.
//
// RULE 1 · NAMES. Use our own plain-English names only (RENEW, BURN, REST...).
// The 503A partner's archetype names are that company's property and are marked
// "reference only" in our rename workbook — they must never be published. The
// mapping lives in lib/blends.ts as `sourceName`, which is never rendered.
//
// RULE 2 · BLURBS DESCRIBE USE, NEVER EVIDENCE. Every blurb here used to read
// "a peptide studied for X". That was inaccurate in two directions at once:
//   · no blend has ever been studied AS A BLEND — there are no trials of these
//     combinations, so "studied for" was false for all nineteen; and
//   · several single peptides have no human studies at all (5-Amino-1MQ has
//     never been given to a human in a published study; BPC-157 has no
//     completed human trial of consequence), so it was false there too.
// On a page that also carries a price, an implied evidence claim is the most
// consequential sentence on the row. Blurbs now say what a compound IS and what
// it is USED FOR, and make no claim about what is known. Evidence belongs to
// the education library, where it is graded honestly per compound — link there
// via `educationSlug` rather than restating it here.
//
// Any renderer of this catalog MUST also display CATALOG_EVIDENCE_NOTE.
//
// Prices come from the Medvora Medical / Active Pharm provider price list
// (6/18/2026); RETAIL = provider price × 2 (per Michael, 2026-08-01). We store
// the provider price and derive retail in one place (`retail()`), so the ×2 rule
// is explicit and auditable and a price change is a one-number edit.
//
// Availability of any specific compound depends on the provider's judgment and
// on state/federal law; nothing here is offered for sale directly.

export type ProductCategory = "peptide" | "blend";

export type Product = {
  name: string;
  category: ProductCategory;
  /** Presentation, e.g. "5 mL · 10 mg" or the blend's component list. */
  strength: string;
  /** What it is and what it is used for. NEVER an evidence or outcome claim. */
  blurb: string;
  /** Education-library slug, where the evidence for this compound is graded.
   *  Peptides: /peptides/<slug>. Blends: /peptides/blends/<slug>. Absent where
   *  that page is still in preparation. */
  educationSlug?: string;
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

/** Mandatory disclosure for any surface that renders PROPRIETARY_BLENDS. Kept in
 *  step with EVIDENCE_NOTE in lib/blends.ts, which the education pages render. */
export const CATALOG_EVIDENCE_NOTE =
  "No blend has been studied as a blend. There are no trials of these combinations, no combined safety data, and no published outcomes for any of them as a unit. What evidence exists belongs to the individual peptides and varies enormously between them — some have human trials, several have none at all. A combination is no better established than its weakest part.";

export const INDIVIDUAL_PEPTIDES: Product[] = [
  { name: "BPC-157", category: "peptide", strength: "5 mL · 10 mg", blurb: "A synthetic peptide used in protocols aimed at soft-tissue repair and recovery.", educationSlug: "bpc-157", providerPrice: 80.99 },
  { name: "TB-500", category: "peptide", strength: "5 mL · 10 mg", blurb: "A thymosin beta-4 fragment used in protocols aimed at recovery and mobility.", providerPrice: 80.99 },
  { name: "Ipamorelin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A selective growth-hormone secretagogue used in growth-hormone-axis protocols.", educationSlug: "ipamorelin", providerPrice: 89.99 },
  { name: "Sermorelin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A growth-hormone-releasing hormone analogue used in growth-hormone-axis protocols.", providerPrice: 73.99 },
  { name: "Tesamorelin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A growth-hormone-releasing hormone analogue. Its approved form treats an unrelated indication.", providerPrice: 82.99 },
  { name: "Tesamorelin", category: "peptide", strength: "10 mL · 20 mg", blurb: "A growth-hormone-releasing hormone analogue. Its approved form treats an unrelated indication.", providerPrice: 158.99 },
  { name: "AOD 9604", category: "peptide", strength: "5 mL · 10 mg", blurb: "A growth-hormone fragment (176-191) used in metabolic protocols.", educationSlug: "aod9604", providerPrice: 117.99 },
  { name: "Mots-C", category: "peptide", strength: "5 mL · 10 mg", blurb: "A mitochondrial-derived peptide used in protocols aimed at cellular energy.", educationSlug: "mots-c", providerPrice: 57.99 },
  { name: "5-Amino-1MQ", category: "peptide", strength: "5 mL · 10 mg", blurb: "A small synthetic molecule, not a peptide, used in metabolic protocols.", educationSlug: "5-amino-1mq", providerPrice: 89.99 },
  { name: "NAD+", category: "peptide", strength: "5 mL · 500 mg", blurb: "A coenzyme used in protocols aimed at cellular energy metabolism.", educationSlug: "nad", providerPrice: 60.0 },
  { name: "NAD+", category: "peptide", strength: "5 mL · 1000 mg", blurb: "A coenzyme used in protocols aimed at cellular energy metabolism.", educationSlug: "nad", providerPrice: 99.0 },
  { name: "Epitalon", category: "peptide", strength: "5 mL · 10 mg", blurb: "A pineal peptide used in circadian and healthy-ageing protocols.", educationSlug: "epitalon", providerPrice: 61.99 },
  { name: "Epitalon", category: "peptide", strength: "5 mL · 20 mg", blurb: "A pineal peptide used in circadian and healthy-ageing protocols.", educationSlug: "epitalon", providerPrice: 74.99 },
  { name: "GHK-CU", category: "peptide", strength: "5 mL · 50 mg", blurb: "A copper-binding peptide used in skin and connective-tissue protocols.", educationSlug: "ghk-cu", providerPrice: 69.99 },
  { name: "GHK-CU", category: "peptide", strength: "5 mL · 100 mg", blurb: "A copper-binding peptide used in skin and connective-tissue protocols.", educationSlug: "ghk-cu", providerPrice: 79.99 },
  { name: "IGF-1 LR3", category: "peptide", strength: "5 mL · 1 mg", blurb: "An IGF-1 analogue that signals directly rather than through the growth-hormone axis.", educationSlug: "igf1-lr3", providerPrice: 88.99 },
  { name: "Thymosin Alpha-1", category: "peptide", strength: "5 mL · 10 mg", blurb: "An immune-signalling peptide, approved outside the US for specific unrelated indications.", providerPrice: 66.99 },
  { name: "LL-37", category: "peptide", strength: "5 mL · 5 mg", blurb: "A human antimicrobial peptide used in immune and barrier protocols.", providerPrice: 59.99 },
  { name: "KPV", category: "peptide", strength: "5 mL · 10 mg", blurb: "An alpha-MSH tripeptide fragment used in inflammation and mucosal protocols.", educationSlug: "kpv", providerPrice: 91.99 },
  { name: "Selank", category: "peptide", strength: "5 mL · 10 mg", blurb: "A tuftsin-derived neuropeptide used in stress-reactivity protocols.", providerPrice: 51.99 },
  { name: "Semax", category: "peptide", strength: "5 mL · 10 mg", blurb: "An ACTH-fragment-derived neuropeptide used in cognitive protocols.", providerPrice: 51.99 },
  { name: "DSIP", category: "peptide", strength: "5 mL · 5 mg", blurb: "Delta sleep-inducing peptide, used in sleep-architecture protocols.", educationSlug: "dsip", providerPrice: 69.99 },
  { name: "PT-141", category: "peptide", strength: "5 mL · 10 mg", blurb: "A melanocortin agonist acting centrally, used in arousal protocols.", providerPrice: 69.99 },
  { name: "Oxytocin", category: "peptide", strength: "5 mL · 10 mg", blurb: "A neuropeptide used in bonding and social-signalling protocols.", providerPrice: 54.99 },
  { name: "Kisspeptin-10", category: "peptide", strength: "5 mL · 10 mg", blurb: "A peptide acting upstream on the reproductive hormone axis.", educationSlug: "kisspeptin", providerPrice: 74.99 },
];

export const PROPRIETARY_BLENDS: Product[] = [
  { name: "PULSE", category: "blend", strength: "CJC-1295 / Ipamorelin", blurb: "A two-peptide growth-hormone-axis combination.", educationSlug: "pulse", providerPrice: 114.99 },
  { name: "REPAIR", category: "blend", strength: "BPC-157 / TB-500", blurb: "A two-peptide combination aimed at soft-tissue repair.", educationSlug: "repair", providerPrice: 118.99 },
  { name: "RENEW", category: "blend", strength: "GHK-CU / BPC-157 / TB-500 / Epitalon", blurb: "A four-peptide combination aimed at skin and connective tissue.", educationSlug: "renew", providerPrice: 169.99 },
  { name: "CALM", category: "blend", strength: "Semax / Selank", blurb: "A two-neuropeptide combination aimed at stress reactivity.", educationSlug: "calm", providerPrice: 89.99 },
  { name: "PERFORM", category: "blend", strength: "Tesamorelin / CJC-1295 / Ipamorelin / BPC-157", blurb: "A four-peptide combination aimed at strength and recovery.", educationSlug: "perform", providerPrice: 189.99 },
  { name: "SCULPT", category: "blend", strength: "Tesamorelin / Ipamorelin / AOD-9604 / Mots-C", blurb: "A four-peptide combination aimed at body composition.", educationSlug: "sculpt", providerPrice: 189.99 },
  { name: "REGROW", category: "blend", strength: "GHK-CU / CJC-1295 / Ipamorelin / TB-500", blurb: "A four-peptide combination aimed at scalp and follicle tissue.", educationSlug: "regrow", providerPrice: 169.99 },
  { name: "RESTORE", category: "blend", strength: "Mots-C / BPC-157 / GHK-CU / Kisspeptin-10", blurb: "A four-peptide combination assembled for women's midlife physiology.", educationSlug: "restore", providerPrice: 179.99 },
  { name: "BURN", category: "blend", strength: "AOD-9604 / CJC-1295 / Ipamorelin / Mots-C", blurb: "A four-peptide combination aimed at fat metabolism, stimulant-free.", educationSlug: "burn", providerPrice: 189.99 },
  { name: "FOCUS", category: "blend", strength: "Semax / Selank / Mots-C / Tesamorelin", blurb: "A four-peptide combination aimed at cognitive endurance.", educationSlug: "focus", providerPrice: 189.99 },
  { name: "CONNECT", category: "blend", strength: "Oxytocin / PT-141", blurb: "A two-peptide combination aimed at bonding and arousal.", educationSlug: "connect", providerPrice: 118.99 },
  { name: "BUILD", category: "blend", strength: "CJC-1295 / Ipamorelin / Tesamorelin / IGF-1 LR3", blurb: "A four-peptide combination adding direct anabolic signalling to the GH axis.", educationSlug: "build", providerPrice: 189.99 },
  { name: "DEFEND", category: "blend", strength: "Thymosin Alpha-1 / BPC-157 / KPV / LL-37", blurb: "A four-peptide combination aimed at immune and barrier function.", educationSlug: "defend", providerPrice: 159.99 },
  { name: "REST", category: "blend", strength: "DSIP / Selank / CJC-1295 / Ipamorelin", blurb: "A four-peptide combination aimed at sleep architecture.", educationSlug: "rest", providerPrice: 189.99 },
  { name: "REFINE", category: "blend", strength: "GHK-CU / Tesamorelin", blurb: "A two-peptide combination aimed at skin tone and metabolic signalling.", educationSlug: "refine", providerPrice: 118.99 },
  { name: "BALANCE", category: "blend", strength: "Semax / Selank / BPC-157 / KPV", blurb: "A four-peptide combination built on the gut-brain axis.", educationSlug: "balance", providerPrice: 169.99 },
  { name: "GUARD", category: "blend", strength: "BPC-157 / Mots-C / 5-Amino-1MQ / Tesamorelin", blurb: "A four-peptide combination intended alongside GLP-1 therapy.", educationSlug: "guard", providerPrice: 189.99 },
  { name: "MAINTAIN", category: "blend", strength: "Ipamorelin / Tesamorelin", blurb: "A two-peptide growth-hormone-axis maintenance combination.", educationSlug: "maintain", providerPrice: 118.99 },
  { name: "DESIRE", category: "blend", strength: "PT-141 / Oxytocin / Kisspeptin-10", blurb: "A three-peptide combination adding upstream hormonal signalling.", educationSlug: "desire", providerPrice: 149.99 },
];
