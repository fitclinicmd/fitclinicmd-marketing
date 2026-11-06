// FitClinicMD retail product catalog — Todd's 5 Nov 2026 pharmacy switch.
// Source: Product_List_FitClinicMD_and_NewStartMD_11.05.2026.xlsx → FitClinicMD tab.
//
// RULES (Michael / counsel, 2026-11-06 preview authorization):
// - Customer retail only. Never store or render pharmacy cost or profit.
// - Believe Rx: peptides + GLP-1s. Vios: TRT kits.
// - Enclomiphene and Connect are OFF this storefront (LegitScript / NewStartMD).
// - $40 flat shipping applies to Believe Rx orders only. TRT kit monthly price
//   already includes shipping to the patient.
// - Product-name amounts (e.g. "1 mg", "10 mg") are pharmacy vial preparations
//   from the source list — NOT prescribed patient doses. Omit internal
//   strength columns from the customer UI.
// - 90-day kit notes exist on the sheet but are omitted here until separately
//   confirmed for storefront copy.
//
// This replaces the obsolete Active Pharm provider×2 model previously documented
// in products.ts (that file is unused by any page).

export type PharmacyPartner = "Believe Rx" | "Vios";

export type CatalogItem = {
  /** Exact customer-facing label from the FitClinicMD source tab. */
  name: string;
  /** Short package / contents note for TRT kits; optional for others. */
  packageNote?: string;
  /** Customer retail USD. */
  retailUsd: number;
  pharmacy: PharmacyPartner;
};

export type Glp1Ladder = {
  /** Plain line name: Semaglutide/Tirzepatide × Glycine/B12. */
  lineName: string;
  pharmacy: "Believe Rx";
  /** One vial per month — ladder by pharmacy vial preparation on the source list. */
  tiers: CatalogItem[];
};

export function formatUsd(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

/** Source workbook + tab this catalog was transcribed from. */
export const CATALOG_SOURCE =
  "Product_List_FitClinicMD_and_NewStartMD_11.05.2026.xlsx — FitClinicMD tab (5 Nov 2026)";

export const CATALOG_STATUS: "DRAFT" | "APPROVED" = "APPROVED";
export const CATALOG_APPROVAL =
  "Michael Roth — 2026-11-06 preview authorization; retail figures from Todd Dyson FitClinicMD product list 11.05.2026. Staging/preview only until Michael approves live.";

export const BELIEVE_SHIPPING_USD = 40;

export const PEPTIDE_RETAIL: CatalogItem[] = [
  { name: "Glutathione", retailUsd: 99, pharmacy: "Believe Rx" },
  { name: "NAD+", retailUsd: 139, pharmacy: "Believe Rx" },
  { name: "PT-141", retailUsd: 189, pharmacy: "Believe Rx" },
  { name: "Sermorelin", retailUsd: 139, pharmacy: "Believe Rx" },
  { name: "Tesamorelin", retailUsd: 229, pharmacy: "Believe Rx" },
];

export const GLP1_LADDERS: Glp1Ladder[] = [
  {
    lineName: "Semaglutide + Glycine",
    pharmacy: "Believe Rx",
    tiers: [
      { name: "Semaglutide + Glycine 1 mg", retailUsd: 169, pharmacy: "Believe Rx" },
      { name: "Semaglutide + Glycine 2 mg", retailUsd: 189, pharmacy: "Believe Rx" },
      { name: "Semaglutide + Glycine 4 mg", retailUsd: 219, pharmacy: "Believe Rx" },
      { name: "Semaglutide + Glycine 6 mg", retailUsd: 249, pharmacy: "Believe Rx" },
      { name: "Semaglutide + Glycine 10 mg", retailUsd: 299, pharmacy: "Believe Rx" },
    ],
  },
  {
    lineName: "Semaglutide + B12",
    pharmacy: "Believe Rx",
    tiers: [
      { name: "Semaglutide + B12 1 mg", retailUsd: 169, pharmacy: "Believe Rx" },
      { name: "Semaglutide + B12 2 mg", retailUsd: 189, pharmacy: "Believe Rx" },
      { name: "Semaglutide + B12 4 mg", retailUsd: 219, pharmacy: "Believe Rx" },
      { name: "Semaglutide + B12 6 mg", retailUsd: 249, pharmacy: "Believe Rx" },
      { name: "Semaglutide + B12 10 mg", retailUsd: 299, pharmacy: "Believe Rx" },
    ],
  },
  {
    lineName: "Tirzepatide + Glycine",
    pharmacy: "Believe Rx",
    tiers: [
      { name: "Tirzepatide + Glycine 10 mg", retailUsd: 199, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + Glycine 20 mg", retailUsd: 249, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + Glycine 30 mg", retailUsd: 299, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + Glycine 40 mg", retailUsd: 379, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + Glycine 50 mg", retailUsd: 429, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + Glycine 60 mg", retailUsd: 479, pharmacy: "Believe Rx" },
    ],
  },
  {
    lineName: "Tirzepatide + B12",
    pharmacy: "Believe Rx",
    tiers: [
      { name: "Tirzepatide + B12 10 mg", retailUsd: 199, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + B12 20 mg", retailUsd: 249, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + B12 30 mg", retailUsd: 299, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + B12 40 mg", retailUsd: 379, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + B12 50 mg", retailUsd: 429, pharmacy: "Believe Rx" },
      { name: "Tirzepatide + B12 60 mg", retailUsd: 479, pharmacy: "Believe Rx" },
    ],
  },
];

/** Vios TRT kits on the FitClinicMD tab. Enclomiphene Only deliberately omitted. */
export const TRT_KITS: CatalogItem[] = [
  {
    name: "TRT Core",
    packageNote:
      "Monthly kit: testosterone cypionate 200 mg/mL (5 mL vial), anastrozole 0.5 mg (8 capsules), and 10 syringes — kit contents from the source list, not a prescribed dose.",
    retailUsd: 149.99,
    pharmacy: "Vios",
  },
  {
    name: "TRT Complete",
    packageNote:
      "Monthly kit: everything in TRT Core plus enclomiphene 12.5 mg (30 capsules) — kit contents from the source list, not a prescribed dose.",
    retailUsd: 199.99,
    pharmacy: "Vios",
  },
];

export const CATALOG_DISCLOSURES = [
  "FitClinicMD is pre-launch and is not accepting patients. Figures below are customer retail prices from the FitClinicMD product list dated 5 Nov 2026.",
  "Medication is prescribed only when a licensed provider determines it is clinically appropriate after an individual evaluation. A prescription is never guaranteed.",
  "Compounded medications are prepared by a state-licensed pharmacy for an individual patient. They are not FDA-approved.",
  "Amounts appearing in GLP-1 product names (for example “1 mg” or “10 mg”) describe the pharmacy vial preparation on the source list. They are not prescribed patient doses. Your licensed provider determines any dose.",
  `Peptides and GLP-1 medications ship from Believe Rx. Customer shipping is a flat $${BELIEVE_SHIPPING_USD} per Believe Rx order (all 50 states on the source list).`,
  "TRT kits ship from Vios. The monthly kit price already includes shipping to the patient (all 50 states on the source list).",
  "Enclomiphene-only and Connect products are not on this FitClinicMD storefront.",
] as const;
