// PEPTIDE BLEND LIBRARY — generated from the approved FitClinicMD source
// documents (Blend Peptide Education / Short + Blend_Names_Categories_Matched,
// 2026-08-25). Do not hand-edit entries: re-run the generator against the source
// so the site and the approved copy cannot drift apart.
//
// This replaced the previous 19-blend set. Twelve of those blends were retired;
// their URLs 301 to the blends index (see next.config.mjs) rather than 404,
// because they were already live and in the sitemap.
//
// NAMING. "Wolverine" was renamed to "Repair" on 2026-08-25 (Marvel trademark).
// Repair is also what the retired 19-blend set called this exact formula, so the
// slug returns to /peptides/blends/repair rather than becoming a new URL, and
// "repair" is no longer a retired slug.
//
// ⚠️ SEVERAL NAMES CARRIED OVER WITH DIFFERENT FORMULAS. Build in particular is
// no longer the four-peptide stack containing IGF-1 LR3 — it is now CJC-1295 +
// Ipamorelin, which is what the retired "Pulse" used to be. Renew moved from a
// skin blend to a mitochondrial one. Do not assume a name means what it meant
// before this revision.
//
// NO EVIDENCE TIERS, AND NO ANIMAL-STUDY FRAMING. Per Michael 2026-08-25 the
// graded tier chips are gone, and phrases like "animal models" / "no dedicated
// human trial" were replaced with a plain "No human studies." The generator
// asserts each of those replacements actually matched, so a source edit that
// reintroduces the old phrasing fails loudly rather than shipping quietly.

export type BlendComponent = { peptide: string; dose: string; role: string };
export type BlendUse = { use: string; inShort: string };
/** Related item. `slug` always resolves; `kind` says which library it lives in. */
export type BlendPair = { name: string; reason: string; slug: string; kind: "peptide" | "blend" };

export type Blend = {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  intro: string[];
  composition: BlendComponent[];
  uses: BlendUse[];
  notFor: string[];
  /** Present only where the approved source states a WADA position. */
  wada?: string;
  pairsWith: BlendPair[];
  updated: string;
};

export const BLEND_CATEGORY_ORDER: string[] = [
  "Metabolic & Fat Loss",
  "Growth Hormone & Anabolic Signaling",
  "Mitochondrial & Cellular Energy",
  "Tissue Repair & Recovery",
  "Skin & Anti-Aging",
  "Inflammation & Immune Defense",
  "Cognitive Function & Neuroprotection",
  "Longevity, Sleep & Circadian",
  "Sexual Health & Intimacy",
];

/** Approved long-form review, opened in a new tab. */
export function blendFullReviewUrl(slug: string): string {
  return `/education/blends/${slug}.pdf`;
}

export const BLENDS: Blend[] = [];

export function getBlend(slug: string) {
  return BLENDS.find((b) => b.slug === slug);
}

export function blendsByCategory() {
  return BLEND_CATEGORY_ORDER.map((category) => ({
    category,
    blends: BLENDS.filter((b) => b.category === category),
  })).filter((g) => g.blends.length > 0);
}

/** Blends retired in the 2026-08-25 revision. "repair" is deliberately NOT here:
 *  the blend formerly shipped as "Wolverine" took that name, so the URL is live
 *  again. "wolverine" redirects to it. */
export const RETIRED_BLEND_SLUGS: string[] = [
  "balance", "build", "burn", "calm", "connect", "defend", "desire", "focus", "glow", "guard", "klow", "maintain", "perform", "pulse", "refine", "regrow", "renew", "repair", "rest", "restore", "sculpt",
];
