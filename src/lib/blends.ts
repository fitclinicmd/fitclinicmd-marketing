// PEPTIDE BLEND LIBRARY — generated from the approved FitClinicMD source
// documents (Blend Peptide Education / Short + Blend_Names_Categories_Matched,
// 2026-08-25). Do not hand-edit entries: re-run the generator against the source
// so the site and the approved copy cannot drift apart.
//
// This replaced the previous 19-blend set. Twelve of those blends were retired;
// their URLs 301 to the blends index (see next.config.mjs) rather than 404,
// because they were already live and in the sitemap.
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

export const BLENDS: Blend[] = [
  {
    slug: "sculpt",
    name: "Sculpt",
    category: "Metabolic & Fat Loss",
    oneLiner: "Body-composition signalling without a stimulant.",
    intro: [
      "Four peptides approaching fat loss from different angles: two work through the growth-hormone axis, one acts directly on fat cells, one supports mitochondrial capacity to sustain the demand.",
    ],
    composition: [
      { peptide: "Tesamorelin", dose: "10mg", role: "The visceral-fat signal. A GHRH analog with its own FDA- approved history (as Egrifta) — the only ingredient here with regulatory-grade trial data." },
      { peptide: "CJC-1295", dose: "6mg", role: "Extends and smooths the growth-hormone pulse Tesamorelin starts." },
      { peptide: "AOD-9604", dose: "10mg", role: "A different angle — acts on fat cells directly, without touching the GH/IGF-1 axis the other two rely on." },
      { peptide: "MOTS-c", dose: "10mg", role: "The engine-room piece. Keeps mitochondrial output and insulin sensitivity up to match the demand." },
    ],
    uses: [
      { use: "Fat loss, particularly visceral fat", inShort: "Components address fat loss through separate, non- competing mechanisms." },
      { use: "Lean-mass preservation during a", inShort: "CJC-1295 and Tesamorelin both support the GH axis," },
      { use: "deficit", inShort: "believed to help protect muscle during fat loss." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Anyone with active malignancy or a history of cancer without physician clearance",
      "Patients with diabetes or insulin resistance, without close clinician oversight",
    ],
    pairsWith: [
      { name: "BPC-157", slug: "bpc-157", kind: "peptide", reason: "Adds gut and tissue protection during the caloric deficit this blend is built for — useful if GI comfort is a concern while losing fat." },
      { name: "Sermorelin", slug: "sermorelin", kind: "peptide", reason: "A gentler, lower-dose GHRH layer some patients add for sustained coverage between Tesamorelin’s pulses. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "build",
    name: "Build",
    category: "Growth Hormone & Anabolic Signaling",
    oneLiner: "The two-peptide growth-hormone foundation.",
    intro: [
      "A focused two-peptide pairing that combines a long-acting growth-hormone signal with a fast, clean pulse on top of it — one of the most widely used growth-hormone combinations in compounded peptide therapy.",
    ],
    composition: [
      { peptide: "CJC-1295", dose: "6mg", role: "Ignites the pathway — establishes a sustained baseline signal telling the pituitary to release growth hormone." },
      { peptide: "Ipamorelin", dose: "12mg", role: "Delivers a clean pulse on top of that baseline — cortisol- neutral, without the broader hormonal disturbance older secretagogues cause." },
    ],
    uses: [
      { use: "Sleep quality and overnight", inShort: "A commonly cited rationale for this pairing, tied to" },
      { use: "recovery", inShort: "growth hormone’s natural nighttime release pattern." },
      { use: "Lean tissue support and recovery", inShort: "The combination is intended to mirror the body’s own pulsatile GH release more closely than either peptide alone." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Anyone with active malignancy or a history of cancer without physician clearance",
      "Patients with uncontrolled diabetes or significant cardiovascular disease",
      "Competitive athletes subject to anti-doping testing — GH secretagogues are prohibited in- competition",
    ],
    pairsWith: [
      { name: "BPC-157", slug: "bpc-157", kind: "peptide", reason: "Adds tissue and gut repair underneath a stack that’s otherwise focused purely on GH signaling." },
      { name: "Tesamorelin", slug: "tesamorelin", kind: "peptide", reason: "Adds visceral-fat targeting on top of Build’s general GH pulse, for patients who want both recovery and fat-loss coverage. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "renew",
    name: "Renew",
    category: "Mitochondrial & Cellular Energy",
    oneLiner: "Cellular energy, from the mitochondria out.",
    intro: [
      "Three compounds addressing different points in cellular energy: one repairs the mitochondrial membrane, one reprograms metabolism, one supplies the coenzyme those reactions depend on.",
    ],
    composition: [
      { peptide: "MOTS-c", dose: "10mg", role: "The signal piece. Activates AMPK, the cell’s main metabolic switch, telling mitochondria to multiply and burn fuel more efficiently." },
      { peptide: "SS-31", dose: "10mg", role: "The structural piece. Binds and stabilizes cardiolipin in the inner mitochondrial membrane — the only ingredient here with a real FDA approval behind it (as elamipretide, for Barth syndrome)." },
      { peptide: "NAD+", dose: "500mg", role: "The fuel piece. The coenzyme every one of those energy- producing reactions actually runs on — levels decline substantially with age." },
    ],
    uses: [
      { use: "Cellular energy / fatigue support", inShort: "The most consistent rationale across the three components — each targets a distinct point in mitochondrial energy production." },
      { use: "Metabolic and age-related decline", inShort: "MOTS-c in particular is discussed for metabolic adaptation and insulin sensitivity. No human studies." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Patients with significant cardiac or renal disease, without clinician oversight",
      "Anyone on blood-sugar-lowering medication, due to MOTS-c’s effect on glucose metabolism",
    ],
    pairsWith: [
      { name: "Glutathione", slug: "glutathione", kind: "peptide", reason: "The body’s primary antioxidant, addressing oxidative stress alongside the mitochondrial repair and energy work this blend does." },
      { name: "Sermorelin", slug: "sermorelin", kind: "peptide", reason: "Broadens coverage into the GH axis for patients whose fatigue has a hormonal component beyond cellular energy alone. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "wolverine",
    name: "Wolverine",
    category: "Tissue Repair & Recovery",
    oneLiner: "The two-peptide standard for tissue repair.",
    intro: [
      "Wolverine pairs two widely used repair-focused peptides — BPC-157 and TB-500, each dosed at 10mg — in a single preparation. One is broadly protective, the other focused on cell movement and new blood vessel growth.",
    ],
    composition: [
      { peptide: "BPC-157", dose: "10mg", role: "The protective arm. Best known for supporting the gastrointestinal lining, and discussed for tendon, ligament, muscle, and skin repair. No human studies." },
      { peptide: "TB-500", dose: "10mg", role: "The move-and-build arm. A fragment of thymosin beta-4 that promotes cell migration and new blood vessel formation, thought to bring cells and circulation to where BPC-157’s protective work is happening." },
    ],
    uses: [
      { use: "Soft-tissue injury recovery", inShort: "The most common use for this pairing. No human studies." },
      { use: "Tendon, ligament & muscle repair", inShort: "Each peptide is used individually for connective-tissue repair. No human studies." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Anyone with a personal or family history of cancer — TB-500’s blood-vessel-growth mechanism is a theoretical concern for feeding tumor growth",
      "Anyone on anticoagulant or antiplatelet medication without provider review",
      "Competitive athletes subject to anti-doping testing — both peptides are prohibited in-competition",
    ],
    pairsWith: [
      { name: "GHK-Cu", slug: "ghk-cu", kind: "peptide", reason: "Adds collagen and connective-tissue support beneath Wolverine’s repair-focused pairing — the basis for the Glow and Klow blends." },
      { name: "Sermorelin", slug: "sermorelin", kind: "peptide", reason: "Supports the GH axis, which is often suppressed during prolonged injury recovery, to help the body return to baseline function. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "glow",
    name: "Glow",
    category: "Skin & Anti-Aging",
    oneLiner: "Three peptides aimed at the tissues that show age first.",
    intro: [
      "A three-peptide blend that pairs two repair-focused peptides with a copper-binding peptide known for its role in collagen production and skin renewal — combining tissue repair with a specific skin and connective-tissue focus.",
    ],
    composition: [
      { peptide: "GHK-Cu", dose: "50mg", role: "The renewal signal. A copper-binding peptide that supports collagen and elastin production, skin remodeling, and connective-tissue repair." },
      { peptide: "BPC-157", dose: "10mg", role: "The protector. Contributes general tissue repair and anti- inflammatory support underneath the skin-focused effect." },
      { peptide: "TB-500", dose: "10mg", role: "The circulation piece. Promotes cell migration and new blood vessel formation, supporting circulation to the skin and connective tissue." },
    ],
    uses: [
      { use: "Skin firmness, collagen support", inShort: "GHK-Cu has the most developed evidence of the three for skin-specific effects, including human topical and injectable research." },
      { use: "Connective-tissue and dermal", inShort: "BPC-157 and TB-500 contribute general repair support" },
      { use: "repair", inShort: "underneath the skin-specific GHK-Cu effect." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Patients with copper-metabolism disorders — GHK-Cu delivers bioavailable copper and should be monitored in extended use",
      "Anyone with a personal or family history of cancer, without physician clearance, given TB-500’s angiogenic mechanism",
      "Anyone on anticoagulant medication without provider review",
    ],
    pairsWith: [
      { name: "NAD+", slug: "nad", kind: "peptide", reason: "Adds mitochondrial and cofactor support beneath the regenerative work Glow is doing, addressing the cellular energy decline that often precedes visible aging. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "klow",
    name: "Klow",
    category: "Skin & Anti-Aging",
    oneLiner: "Glow, plus a peptide that calms inflammation.",
    intro: [
      "A four-peptide extension of Glow, adding an anti-inflammatory peptide for a more comprehensive version, dosed slightly above the market-standard ratio.",
    ],
    composition: [
      { peptide: "GHK-Cu", dose: "55mg", role: "The renewal signal. A copper-binding peptide that supports collagen and elastin production, skin remodeling, and connective-tissue repair." },
      { peptide: "BPC-157", dose: "12mg", role: "The protector. Contributes general tissue repair and anti- inflammatory support underneath the skin-focused effect." },
      { peptide: "TB-500", dose: "12mg", role: "The circulation piece. Promotes cell migration and new blood vessel formation, supporting circulation to the skin and connective tissue." },
      { peptide: "KPV", dose: "12mg", role: "The inflammation control. Calms excess inflammatory signaling without suppressing normal immune function, rounding out the repair-and-renewal focus." },
    ],
    uses: [
      { use: "Skin firmness, collagen support", inShort: "Same GHK-Cu-driven rationale as Glow, with an added anti-inflammatory component." },
      { use: "Comprehensive tissue repair with", inShort: "The addition of KPV is intended to address inflammation" },
      { use: "inflammation control", inShort: "alongside the structural repair the other three peptides support." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Patients with copper-metabolism disorders, without monitoring",
      "Anyone with a personal or family history of cancer, without physician clearance",
    ],
    pairsWith: [
      { name: "NAD+", slug: "nad", kind: "peptide", reason: "Adds mitochondrial and cofactor support beneath the regenerative work Klow is doing. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "defend",
    name: "Defend",
    category: "Inflammation & Immune Defense",
    oneLiner: "Three peptides on the immune and barrier side.",
    intro: [
      "Three peptides on separate layers of immune function: one coordinates the response, one calms excess inflammation without suppressing normal defense, and one acts as a broad-spectrum antimicrobial.",
    ],
    composition: [
      { peptide: "Thymosin Alpha-1", dose: "5mg", role: "The coordinator. Recruits and regulates T-cells for a faster, more organized immune response, rather than just a stronger one." },
      { peptide: "KPV", dose: "2mg", role: "The calibrator. Turns down inflammation that’s run too high, without blunting the immune system’s normal job." },
      { peptide: "LL-37", dose: "1mg", role: "The direct responder. A broad-spectrum antimicrobial peptide that acts on pathogens itself, rather than only signaling other cells to respond." },
    ],
    uses: [
      { use: "General immune support", inShort: "Thymosin Alpha-1 has the most developed evidence of the three, including approved uses outside the US for immune modulation." },
      { use: "Inflammation control without", inShort: "KPV’s proposed mechanism specifically avoids blunting" },
      { use: "immune suppression", inShort: "normal immune defense while calming excess inflammatory signaling." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Patients with autoimmune disorders or high baseline inflammation, without clinician oversight",
      "Anyone with a highly reactive immune history",
    ],
    pairsWith: [
      { name: "NAD+", slug: "nad", kind: "peptide", reason: "Supports the mitochondrial energy demands of activated immune cells during high-burden states — real cellular cost to mounting a coordinated response." },
      { name: "Sermorelin", slug: "sermorelin", kind: "peptide", reason: "Restores GH signaling that’s often suppressed during prolonged immune activation or post- infectious recovery. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "calm",
    name: "Calm",
    category: "Cognitive Function & Neuroprotection",
    oneLiner: "Two neuropeptides aimed at stress load, not sedation.",
    intro: [
      "A two-peptide pairing that combines a focus- and memory-oriented compound with an anti-anxiety compound, intended to support mental clarity and calm at the same time rather than trading one for the other.",
    ],
    composition: [
      { peptide: "Semax", dose: "5mg", role: "The clarity driver. Elevates BDNF to support cognition, memory, and neural resilience." },
      { peptide: "Selank", dose: "5mg", role: "The ballast. Reduces cortisol and anxiety while stabilizing mood, so background stress doesn’t drown out the clarity Semax provides." },
    ],
    uses: [
      { use: "Focus and cognitive clarity", inShort: "Semax has meaningful use history outside the US (approved in Russia for certain neurological indications); US evidence is more limited." },
      { use: "Stress and anxiety support without", inShort: "Selank is studied for anxiolytic effects without the" },
      { use: "sedation", inShort: "sedation associated with many anti-anxiety compounds." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Patients with a seizure disorder, without clinician review",
      "Anyone expecting a sedative or stimulant effect — neither peptide is designed to produce either",
      "Patients on other mood-affecting medications, without discussing potential interaction with their provider",
    ],
    pairsWith: [
      { name: "NAD+", slug: "nad", kind: "peptide", reason: "Provides the cellular and mitochondrial energy substrate that supports neural resilience under sustained cortisol load." },
      { name: "DSIP", slug: "dsip", kind: "peptide", reason: "Improves sleep depth, often compromised in the same patients carrying the chronic cortisol load Calm is meant to ease. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "rest",
    name: "Rest",
    category: "Longevity, Sleep & Circadian",
    oneLiner: "Three peptides aimed at deep sleep, not just time in bed.",
    intro: [
      "A three-peptide combination built around deep, restorative sleep: one activates the body’s natural deep-sleep signaling, one supports a nighttime growth-hormone pulse tied to that same window, and one adds overnight tissue repair on top.",
    ],
    composition: [
      { peptide: "DSIP", dose: "5mg", role: "The depth signal. Enhances slow-wave (delta) sleep and promotes sleep onset without acting as a sedative." },
      { peptide: "CJC-1295", dose: "6mg", role: "The overnight pulse. Times a growth-hormone signal to the same window natural deep sleep already uses." },
      { peptide: "BPC-157", dose: "10mg", role: "The repair layer. Puts the overnight recovery window to work on tissue repair as well as rest." },
    ],
    uses: [
      { use: "Deep sleep / sleep architecture", inShort: "DSIP’s primary studied use; enhances delta-wave sleep specifically rather than simply promoting drowsiness." },
      { use: "Overnight recovery", inShort: "The rationale for adding CJC-1295 and BPC-157 to a sleep-focused peptide, aligning GH release and tissue repair with the sleep window." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients",
      "Patients with epilepsy or a severe psychiatric disorder — DSIP specifically should be avoided in these groups without provider oversight",
      "Anyone with a personal or family history of cancer, without physician clearance, given BPC-157’s role in tissue growth signaling",
      "Competitive athletes subject to anti-doping testing — CJC-1295 is prohibited in-competition",
    ],
    pairsWith: [
      { name: "Selank", slug: "selank", kind: "peptide", reason: "Reduces cortisol and the background stress response that often interferes with sleep onset in the first place — addresses a cause Rest’s own three peptides don’t directly target. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "connect",
    name: "Connect",
    category: "Sexual Health & Intimacy",
    oneLiner: "Two peptides, two different aspects of intimacy.",
    intro: [
      "A two-peptide pairing addressing emotional bonding and physical arousal through separate pathways — one on trust and closeness, the other centrally on desire.",
    ],
    composition: [
      { peptide: "Oxytocin", dose: "50mg", role: "The closeness signal. Supports trust, empathy, and emotional closeness — the hormone naturally released during physical affection and connection." },
      { peptide: "PT-141", dose: "10mg", role: "The arousal driver. Activates central arousal pathways in the brain for libido and responsiveness, rather than acting on blood flow the way some other options do." },
    ],
    uses: [
      { use: "Emotional connection and intimacy", inShort: "Oxytocin’s bonding effects are well-characterized" },
      { use: "support", inShort: "physiologically, though marketed intimacy use is broader than its approved indications." },
      { use: "Libido and arousal support", inShort: "PT-141 (bremelanotide) is FDA-approved as Vyleesi for hypoactive sexual desire disorder in premenopausal women — the only FDA-approved compound in this blend." },
    ],
    notFor: [
      "Pregnant patients — oxytocin is avoided in pregnancy unless medically indicated",
      "Patients with uncontrolled hypertension or heart disease",
      "Anyone taking dopamine agonists, without clinician oversight",
    ],
    pairsWith: [
      { name: "Kisspeptin", slug: "kisspeptin", kind: "peptide", reason: "Adds upstream reproductive hormone signaling that amplifies the bonding and arousal pathways Connect targets." },
      { name: "Selank", slug: "selank", kind: "peptide", reason: "Reduces social and performance-related anxiety that can interfere with intimate presence and emotional availability. in your name, using ingredients traceable to a named source, under published sterile- compounding standards." },
    ],
    updated: "2026-08-25",
  },
];

export function getBlend(slug: string) {
  return BLENDS.find((b) => b.slug === slug);
}

export function blendsByCategory() {
  return BLEND_CATEGORY_ORDER.map((category) => ({
    category,
    blends: BLENDS.filter((b) => b.category === category),
  })).filter((g) => g.blends.length > 0);
}

/** Blends retired in the 2026-08-25 revision. These URLs were live and in the
 *  sitemap, so they 301 to the index rather than 404. Kept here as the single
 *  source of truth for the redirect list in next.config.mjs. */
export const RETIRED_BLEND_SLUGS: string[] = [
  "regrow", "refine", "restore", "guard", "burn", "perform",
  "repair", "pulse", "maintain", "focus", "balance", "desire",
];
