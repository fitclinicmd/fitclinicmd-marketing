// PEPTIDE BLEND EDUCATION LIBRARY — original, non-promotional education pages.
//
// Same discipline as lib/peptides.ts: describe what a pairing is FOR, never
// promise an outcome; regulatory and safety material sits at the foot; never
// write "approved" except for the GLP-1 medicines. Efficacy claims belong in
// lib/claims.ts (counsel-gated) — never here.
//
// TWO THINGS THAT MAKE BLEND PAGES DIFFERENT FROM SINGLE-PEPTIDE PAGES:
//
// 1. There is no blend-level evidence, for any blend, anywhere. Every one of
//    these combinations is unstudied AS A COMBINATION. The honest page does not
//    bury that — it leads with it, and sends the reader to the component pages
//    where the real evidence tiers live. See EVIDENCE_NOTE below, which renders
//    on every blend page. Do not add a blend-level evidence chip; there is
//    nothing truthful to put in it.
//
// 2. Naming. These formulations originate with a 503A partner whose catalog
//    names them for archetypes (Fountain of Youth, Atlas, Hypnøs...). Those
//    names are that company's, marked "reference only" in our own rename
//    workbook, and must not be published by us. `sourceName` records the
//    origin name for internal traceability ONLY and is deliberately never
//    rendered. Our published names are the plain-English "System A" set that
//    describes what the pairing is for.

/** A component of a blend. `slug` links to our peptide page when one is published. */
export type BlendComponent = {
  peptide: string;
  /** Per 5 mL vial, as compounded. A fact about the preparation, not a dosing instruction. */
  dose: string;
  /** Peptide-library slug, when that page exists. Planned peptides have no page yet. */
  slug?: string;
  /** Why this one is in this pairing. Descriptive of intent — never an outcome claim. */
  role: string;
};

export type Blend = {
  slug: string;
  name: string;
  category: string;
  /** Internal traceability only — never rendered. See header note 2. */
  sourceName: string;
  tagline: string;
  summary: string;
  /** Why these particular peptides are put together. Paragraphs. */
  rationale: string[];
  components: BlendComponent[];
  /** Situations a provider might consider it in. Framed as context, not indication. */
  consideredFor: string[];
  updated: string;
};

/** Renders on every blend page. The single most important thing on it. */
export const EVIDENCE_NOTE =
  "No peptide blend on this page has been studied as a blend. There are no trials of these combinations, no combined safety data, and no published outcomes for any of them as a unit. What evidence exists belongs to the individual peptides, and it varies enormously between them — some have human trials, several have none at all. Each component below links to its own page, where that evidence is graded honestly. Treat a combination as no better established than its weakest part.";

export const BLEND_CATEGORY_ORDER: string[] = [
  "Anti-Aging & Regeneration",
  "Metabolic Support",
  "Strength, Recovery & Performance",
  "Cognition, Mood & Stress",
  "Connection & Intimacy",
  "Sleep & Restoration",
  "Immune & Defense",
];

export const BLENDS: Blend[] = [
  {
    slug: "renew",
    name: "RENEW",
    category: "Anti-Aging & Regeneration",
    sourceName: "Fountain of Youth",
    tagline: "Four peptides aimed at the tissues that show age first.",
    summary:
      "A broad regenerative pairing — skin and connective tissue, with a circadian peptide added on top. The widest-reaching of the anti-ageing combinations, and the one with the most extrapolation in it.",
    rationale: [
      "This combination is built around a simple idea: the tissues people notice ageing in — skin, connective tissue, the small vessels that supply them — are also the tissues with the most peptide research pointing at them. Rather than target one, this pairing puts several signals in at once.",
      "That breadth is also its weakness. Four peptides means four separate evidence bases, none of which were built by studying them together, and the two with the strongest laboratory support (GHK-Cu and BPC-157) are also the two whose human data is thinnest at the doses used here. A provider considering this is making a judgement about plausibility, not following a trial.",
    ],
    components: [
      { peptide: "GHK-Cu", dose: "50 mg", slug: "ghk-cu", role: "A copper-binding peptide, included for its documented role in skin and connective-tissue signalling." },
      { peptide: "BPC-157", dose: "10 mg", slug: "bpc-157", role: "Included for tissue-repair signalling; the human evidence base for it is essentially absent." },
      { peptide: "TB-500", dose: "10 mg", role: "A synthetic fragment related to thymosin beta-4, included for cell migration and vascular signalling." },
      { peptide: "Epitalon", dose: "10 mg", slug: "epitalon", role: "A circadian and pineal-signalling peptide; the longevity claims attached to it rest on a small and contested literature." },
    ],
    consideredFor: [
      "General skin and connective-tissue support, where the goal is maintenance rather than treatment of a diagnosed condition.",
      "Recovery of skin quality after a period of illness, weight loss, or hormonal change.",
      "Alongside a cosmetic or dermatological plan directed by another clinician.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "regrow",
    name: "REGROW",
    category: "Anti-Aging & Regeneration",
    sourceName: "Samson & Delilah",
    tagline: "A scalp- and follicle-directed pairing.",
    summary:
      "Aimed at the scalp: a copper peptide and a repair peptide applied to follicle and vascular tissue, with growth-hormone-axis signalling underneath.",
    rationale: [
      "Hair thinning is partly a circulation and tissue-quality problem, and this pairing is assembled on that reasoning. GHK-Cu and TB-500 are the locally-acting half; CJC-1295 and Ipamorelin sit underneath as systemic growth-hormone-axis signals.",
      "It is worth being precise about what that reasoning is not. None of these peptides is an approved hair-loss treatment, none has been tested against minoxidil or finasteride, and no trial has measured hair count as an endpoint for any of them. Established treatments exist and have real evidence behind them; this is not a substitute for that conversation.",
    ],
    components: [
      { peptide: "GHK-Cu", dose: "50 mg", slug: "ghk-cu", role: "The locally-directed component, included for scalp and collagen signalling." },
      { peptide: "CJC-1295", dose: "6 mg", slug: "cjc-1295", role: "A GHRH analogue. Note the DAC/non-DAC distinction covered on its own page — it matters here." },
      { peptide: "Ipamorelin", dose: "12 mg", slug: "ipamorelin", role: "A selective GH secretagogue, paired with CJC-1295 to shape the release pattern." },
      { peptide: "TB-500", dose: "10 mg", role: "Included for microvascular and tissue-renewal signalling around the follicle." },
    ],
    consideredFor: [
      "Diffuse thinning in men and women where an established treatment has been discussed first.",
      "Scalp and skin recovery after a hormonal shift, illness, or significant weight change.",
      "Adjunctive support alongside a dermatologist-directed plan.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "refine",
    name: "REFINE",
    category: "Anti-Aging & Regeneration",
    sourceName: "Selene",
    tagline: "Two peptides, not four — skin tone with metabolic signalling.",
    summary:
      "The simplest of the regenerative pairings: one skin-directed peptide, one growth-hormone-axis peptide. Fewer moving parts, and correspondingly easier to reason about.",
    rationale: [
      "Two-peptide combinations are easier to think about than four-peptide ones, and that is most of the argument for this pairing. GHK-Cu carries the skin and connective-tissue rationale; Tesamorelin adds growth-hormone-axis signalling with a better-characterised regulatory history than most peptides on this site.",
      "Tesamorelin is the unusual component here — it has an FDA-approved form for a specific, narrow indication unrelated to cosmetic use. That approval says nothing about the use described on this page, and it should not be read as transferring.",
    ],
    components: [
      { peptide: "GHK-Cu", dose: "50 mg", slug: "ghk-cu", role: "The skin and connective-tissue component." },
      { peptide: "Tesamorelin", dose: "10 mg", role: "A GHRH analogue with an approved form for an unrelated indication; here it supplies the metabolic and GH-axis half." },
    ],
    consideredFor: [
      "Someone who wants a narrower combination than the four-peptide regenerative stacks.",
      "Skin-quality maintenance where a simpler regimen is more likely to be followed.",
      "A first step before considering broader combinations.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "restore",
    name: "RESTORE",
    category: "Anti-Aging & Regeneration",
    sourceName: "Empress",
    tagline: "Assembled with women's midlife physiology in mind.",
    summary:
      "A four-peptide combination spanning mitochondrial signalling, gut and inflammation, connective tissue, and the upstream reproductive-hormone axis.",
    rationale: [
      "This pairing is organised around the observation that midlife change in women is rarely one system at a time — energy, tissue quality, gut symptoms, and hormonal rhythm tend to move together. The four components each address a different one of those.",
      "Kisspeptin-10 is the component to look at carefully. It acts upstream on the reproductive hormone axis, which is a meaningful intervention rather than a supportive one, and it is the least characterised peptide in this combination in terms of sustained dosing. Anyone with a hormone-sensitive condition, or who is pregnant, breastfeeding, or trying to conceive, is outside this entirely — see the exclusions on the component pages.",
    ],
    components: [
      { peptide: "MOTS-c", dose: "10 mg", slug: "mots-c", role: "A mitochondrial-derived peptide, included for cellular-energy signalling." },
      { peptide: "BPC-157", dose: "10 mg", slug: "bpc-157", role: "Included for gut and inflammation signalling." },
      { peptide: "GHK-Cu", dose: "50 mg", slug: "ghk-cu", role: "The connective-tissue and skin component." },
      { peptide: "Kisspeptin-10", dose: "2 mg", slug: "kisspeptin", role: "Acts upstream on the reproductive hormone axis. The most consequential component here, and the least characterised." },
    ],
    consideredFor: [
      "Midlife energy and tissue-quality concerns, after conventional causes have been investigated.",
      "Alongside — not instead of — a gynaecological or endocrine workup.",
      "Someone already under care for menopausal symptoms who is asking about adjunctive options.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "guard",
    name: "GUARD",
    category: "Metabolic Support",
    sourceName: "Kali",
    tagline: "A companion protocol for people already on a GLP-1.",
    summary:
      "Built for the problems that show up alongside GLP-1 therapy rather than for weight loss itself: GI tolerability, energy, and the lean-mass question.",
    rationale: [
      "This is the one combination on the site defined by what it sits next to. GLP-1 medicines work, and they are approved — that is stated plainly on our GLP-1 page. They also come with well-documented GI side effects and an ongoing clinical conversation about loss of lean mass alongside fat.",
      "This pairing is aimed at those secondary problems, not at the weight loss. It is not a GLP-1, not a substitute for one, and not a way to avoid one. If the goal is weight loss, the approved medicine is the conversation to have — this is a question of what goes alongside it.",
    ],
    components: [
      { peptide: "BPC-157", dose: "10 mg", slug: "bpc-157", role: "Included for GI-tolerability signalling, which is the most common reason people struggle to stay on a GLP-1." },
      { peptide: "MOTS-c", dose: "10 mg", slug: "mots-c", role: "Included for mitochondrial and energy signalling during sustained caloric deficit." },
      { peptide: "Tesamorelin", dose: "5 mg", role: "A GHRH analogue, included at a reduced dose for the lean-mass side of the equation." },
      { peptide: "5-Amino-1MQ", dose: "10 mg", slug: "5-amino-1mq", role: "Included for metabolic signalling in fat and muscle tissue; the human data is minimal." },
    ],
    consideredFor: [
      "Someone established on semaglutide or tirzepatide who is struggling with GI tolerability.",
      "Concern about lean-mass loss during rapid weight reduction, alongside resistance training and adequate protein.",
      "A deliberate maintenance phase after a GLP-1 is tapered.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "sculpt",
    name: "SCULPT",
    category: "Metabolic Support",
    sourceName: "Adonix",
    tagline: "Body-composition signalling without a stimulant.",
    summary:
      "Four peptides aimed at the composition question rather than the scale: hormonal fat distribution, lean-mass preservation, and cellular energy.",
    rationale: [
      "The premise is that body composition and body weight are different problems. This combination layers growth-hormone-axis signalling with two peptides aimed more specifically at fat metabolism, and contains no stimulant of any kind.",
      "What it does not have is any outcome evidence. No trial has measured body composition as an endpoint for this combination or, in most cases, for its individual components at these doses. Diet, training, sleep and protein intake remain the parts of this with actual evidence behind them, and a provider who does not raise them first is skipping the effective step.",
    ],
    components: [
      { peptide: "Tesamorelin", dose: "10 mg", role: "GHRH-axis signalling; the component with the most regulatory history behind it." },
      { peptide: "Ipamorelin", dose: "10 mg", slug: "ipamorelin", role: "A selective GH secretagogue, shaping the release pattern." },
      { peptide: "AOD-9604", dose: "10 mg", slug: "aod9604", role: "A growth-hormone fragment; its own page covers why the fat-loss trials were disappointing." },
      { peptide: "MOTS-c", dose: "10 mg", slug: "mots-c", role: "Mitochondrial signalling for the energy side." },
    ],
    consideredFor: [
      "Recomposition goals where training and nutrition are already in place.",
      "Someone who has explicitly ruled out stimulant-based approaches.",
      "A structured phase with a defined review point rather than open-ended use.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "burn",
    name: "BURN",
    category: "Metabolic Support",
    sourceName: "Inferno",
    tagline: "Fat metabolism and steady energy, stimulant-free.",
    summary:
      "The most directly fat-metabolism-oriented of the combinations, pairing a growth-hormone fragment with GH-axis signalling and a mitochondrial peptide.",
    rationale: [
      "This combination pairs AOD-9604, which was designed specifically around the fat-metabolising region of growth hormone, with the CJC-1295 and Ipamorelin axis and a mitochondrial peptide for the energy side.",
      "AOD-9604's own page is worth reading before this one. It was taken into human obesity trials — which is more than almost any peptide here can say — and those trials did not produce the weight-loss result its design predicted. Including it in a combination does not resolve that; it inherits it.",
    ],
    components: [
      { peptide: "AOD-9604", dose: "10 mg", slug: "aod9604", role: "The fat-metabolism component, and the one with actual — disappointing — human trial data." },
      { peptide: "CJC-1295", dose: "6 mg", slug: "cjc-1295", role: "GHRH signalling. The DAC/non-DAC distinction on its page applies here." },
      { peptide: "Ipamorelin", dose: "10 mg", slug: "ipamorelin", role: "Paired GH secretagogue." },
      { peptide: "MOTS-c", dose: "10 mg", slug: "mots-c", role: "Mitochondrial and energy signalling." },
    ],
    consideredFor: [
      "Someone who cannot or will not take a stimulant-based product.",
      "A defined phase alongside a nutrition plan, with a review date set at the start.",
      "Where a GLP-1 has been discussed and declined or is not appropriate.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "perform",
    name: "PERFORM",
    category: "Strength, Recovery & Performance",
    sourceName: "Apex",
    tagline: "The general-purpose strength and recovery foundation.",
    summary:
      "Layered growth-hormone-axis signalling with a tissue-repair peptide added — the broadest of the performance combinations.",
    rationale: [
      "Three of the four components here work on the growth-hormone axis from slightly different angles, with BPC-157 added for the repair side. The reasoning is that recovery capacity, rather than training stimulus, is often what limits progress.",
      "Every peptide in this combination that acts on the growth-hormone axis is prohibited in competitive sport at all times under the World Anti-Doping Code. If you are tested — in any federation, at any level, including masters and amateur competition — this ends your eligibility. That is not a caution, it is the rule, and it applies regardless of whether a doctor prescribed it.",
    ],
    components: [
      { peptide: "Tesamorelin", dose: "10 mg", role: "GHRH-axis signalling." },
      { peptide: "CJC-1295", dose: "6 mg", slug: "cjc-1295", role: "A second GHRH-axis signal with different kinetics." },
      { peptide: "Ipamorelin", dose: "12 mg", slug: "ipamorelin", role: "Selective GH secretagogue." },
      { peptide: "BPC-157", dose: "10 mg", slug: "bpc-157", role: "The tissue-repair component." },
    ],
    consideredFor: [
      "Non-competing athletes and recreational lifters, where anti-doping rules do not apply.",
      "Recovery capacity that has not responded to sleep, nutrition and load management.",
      "A structured block with a defined endpoint, not indefinite use.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "repair",
    name: "REPAIR",
    category: "Strength, Recovery & Performance",
    sourceName: "Välkyr",
    tagline: "Two repair peptides, nothing else.",
    summary:
      "The narrowest combination here: the two most-requested tissue-repair peptides, with no hormonal component at all.",
    rationale: [
      "BPC-157 and TB-500 are the two peptides people ask about for injury more than any others, and this pairs them without adding anything hormonal. For someone whose question is specifically about a soft-tissue problem, that narrowness is the point — it does not touch the growth-hormone axis.",
      "Both are also, bluntly, among the least evidenced compounds we write about. BPC-157 has no completed human trials of consequence; TB-500 is a synthetic fragment whose human data is thinner still. Widespread anecdotal use is not the same as evidence, and the honest position is that this pairing is plausible rather than demonstrated.",
    ],
    components: [
      { peptide: "BPC-157", dose: "10 mg", slug: "bpc-157", role: "Repair and inflammation signalling. Extensive animal literature, essentially no human trial evidence." },
      { peptide: "TB-500", dose: "10 mg", role: "Cell migration and vascular signalling. Human data thinner still." },
    ],
    consideredFor: [
      "A specific soft-tissue complaint that has been properly diagnosed first.",
      "Someone who wants to avoid any growth-hormone-axis component.",
      "Alongside physiotherapy and load management, not instead of them.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "pulse",
    name: "PULSE",
    category: "Strength, Recovery & Performance",
    sourceName: "Prometheus",
    tagline: "The two-peptide growth-hormone foundation.",
    summary:
      "CJC-1295 with Ipamorelin — the most widely used pairing in this category, and the simplest way to approach growth-hormone-axis signalling.",
    rationale: [
      "These two are paired so routinely that the combination is often discussed as though it were a single compound. The logic is complementary mechanism: a GHRH analogue and a selective secretagogue acting at different points, intended to produce a release pattern closer to the body's own rhythm than either alone.",
      "Read the CJC-1295 page before this one. Two different molecules are sold under that name and they behave nothing alike, which means 'CJC-1295 and Ipamorelin' can describe two materially different preparations. Knowing which is in the vial is not a technicality.",
    ],
    components: [
      { peptide: "CJC-1295", dose: "6 mg", slug: "cjc-1295", role: "GHRH analogue. Which form matters enormously — see its page." },
      { peptide: "Ipamorelin", dose: "12 mg", slug: "ipamorelin", role: "Selective GH secretagogue, chosen for not meaningfully raising cortisol or prolactin." },
    ],
    consideredFor: [
      "A first, deliberately simple approach to GH-axis signalling.",
      "Sleep quality and recovery, where the mechanistic reasoning is clearest.",
      "Non-competing individuals only — both components are prohibited in tested sport.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "build",
    name: "BUILD",
    category: "Strength, Recovery & Performance",
    sourceName: "Atlas",
    tagline: "The most aggressive combination on this site.",
    summary:
      "Multi-tier growth-hormone-axis signalling plus direct anabolic signalling through IGF-1 LR3. The one that most warrants a slow conversation.",
    rationale: [
      "This is the maximal end of the category, and it differs from the others in kind rather than degree. Three components work the growth-hormone axis; IGF-1 LR3 bypasses that axis and signals directly, which is a substantially different intervention from encouraging the body's own release.",
      "That difference is where the caution belongs. Direct IGF-1 signalling has real theoretical concerns attached to it around tissue growth generally, and anyone with a personal or family cancer history, or any undiagnosed lump or lesion, should not be having this conversation at all. It is also, like the rest of the category, prohibited in tested sport. Of everything on this site, this is the combination where the gap between enthusiasm and evidence is widest.",
    ],
    components: [
      { peptide: "CJC-1295", dose: "6 mg", slug: "cjc-1295", role: "GHRH analogue." },
      { peptide: "Ipamorelin", dose: "12 mg", slug: "ipamorelin", role: "Selective GH secretagogue." },
      { peptide: "Tesamorelin", dose: "10 mg", role: "A third GH-axis signal, layered beneath the pulsatile pair." },
      { peptide: "IGF-1 LR3", dose: "1 mg", slug: "igf1-lr3", role: "Direct anabolic signalling that bypasses the GH axis. The component that changes the risk profile — read its page." },
    ],
    consideredFor: [
      "Experienced, non-competing individuals who have already used simpler approaches.",
      "Only after a personal and family cancer history has been taken properly.",
      "A time-limited block with monitoring, never open-ended use.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "maintain",
    name: "MAINTAIN",
    category: "Strength, Recovery & Performance",
    sourceName: "Hyperion",
    tagline: "A two-peptide maintenance pairing.",
    summary:
      "Growth-hormone-axis support without the complexity of a four-peptide stack — intended for a steady state rather than a push.",
    rationale: [
      "Not every phase is a building phase. This pairing is the same idea as the more aggressive combinations with the layers stripped out: two components, both acting on the growth-hormone axis, intended for maintenance rather than a peak.",
      "Simplicity has a real clinical argument behind it beyond convenience. Fewer components means fewer variables when something has to be attributed — if a side effect appears on two peptides, working out which is responsible is tractable in a way it is not on four.",
    ],
    components: [
      { peptide: "Tesamorelin", dose: "10 mg", role: "GHRH-axis signalling." },
      { peptide: "Ipamorelin", dose: "10 mg", slug: "ipamorelin", role: "Selective GH secretagogue." },
    ],
    consideredFor: [
      "A maintenance phase following a more structured block.",
      "Someone who wants the fewest moving parts that still addresses the goal.",
      "Where attributing any side effect cleanly matters — fewer components make that possible.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "calm",
    name: "CALM",
    category: "Cognition, Mood & Stress",
    sourceName: "Kälm",
    tagline: "Two neuropeptides aimed at stress load, not sedation.",
    summary:
      "Semax with Selank — a pairing intended to reduce stress-driven noise without the sedation of conventional anxiolytics.",
    rationale: [
      "These two Russian-developed neuropeptides are almost always discussed together. The intent of the pairing is a reduction in stress reactivity that does not come with the cognitive dulling or dependence profile of conventional anxiolytics.",
      "The evidence position needs stating clearly. Both have a Russian clinical literature behind them that is genuinely more substantial than most peptides here, and that literature is also largely unreplicated in Western trials and difficult to appraise at a distance. Neither is approved in the United States for any indication. If the question is a diagnosed anxiety disorder, treatments with real evidence exist and this is not a substitute for that conversation.",
    ],
    components: [
      { peptide: "Semax", dose: "5 mg", role: "An ACTH-fragment-derived neuropeptide, included for the cognitive and stress-reactivity side." },
      { peptide: "Selank", dose: "5 mg", role: "A tuftsin-derived anxiolytic peptide, included for stress load without sedation." },
    ],
    consideredFor: [
      "Situational stress load, where a diagnosed anxiety disorder has been excluded.",
      "Someone who has specifically declined conventional anxiolytics and understands the evidence trade-off.",
      "Alongside — not instead of — psychological therapy where that is indicated.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "focus",
    name: "FOCUS",
    category: "Cognition, Mood & Stress",
    sourceName: "Lucid",
    tagline: "Cognitive endurance without a stimulant.",
    summary:
      "The two neuropeptides of CALM, with mitochondrial and growth-hormone-axis signalling added for the fatigue side of concentration.",
    rationale: [
      "This extends the Semax and Selank pairing with two components aimed at a different problem: the physical fatigue that limits sustained concentration. The reasoning is that mental endurance and cellular energy are related, so the combination addresses both.",
      "It is worth naming what this is not. Concentration difficulty has causes worth investigating — sleep disorders, thyroid disease, anaemia, depression, ADHD — all of which have real diagnostic pathways and real treatments. A peptide combination is not a substitute for finding out why, and any provider who reaches for this before asking that question has the order wrong.",
    ],
    components: [
      { peptide: "Semax", dose: "5 mg", role: "The cognitive component." },
      { peptide: "Selank", dose: "5 mg", role: "The stress-reactivity component." },
      { peptide: "MOTS-c", dose: "10 mg", slug: "mots-c", role: "Mitochondrial signalling for the fatigue side." },
      { peptide: "Tesamorelin", dose: "10 mg", role: "GH-axis signalling, included for the metabolic contribution to sustained effort." },
    ],
    consideredFor: [
      "Sustained cognitive demand where medical causes have been excluded first.",
      "Someone avoiding stimulants, by preference or because of cardiovascular history.",
      "A defined period of high demand rather than indefinite use.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "balance",
    name: "BALANCE",
    category: "Cognition, Mood & Stress",
    sourceName: "Bodhi",
    tagline: "The gut-brain pairing.",
    summary:
      "Neuropeptides combined with two gut- and inflammation-directed peptides, built on the gut-brain axis rationale.",
    rationale: [
      "This combination is organised around the gut-brain axis: the observation that inflammatory and gastrointestinal states and mood states track together more closely than they were once thought to. Semax and Selank supply the neural half, BPC-157 and KPV the gut and inflammation half.",
      "The gut-brain axis is real and is a legitimate area of research. It is also, at present, a far better established idea in general than it is a basis for any specific intervention — which is the gap this combination sits in. The mechanism is plausible; the combination is untested.",
    ],
    components: [
      { peptide: "Semax", dose: "5 mg", role: "Neural component." },
      { peptide: "Selank", dose: "5 mg", role: "Stress-reactivity component." },
      { peptide: "BPC-157", dose: "10 mg", slug: "bpc-157", role: "Gut and inflammation signalling." },
      { peptide: "KPV", dose: "10 mg", slug: "kpv", role: "An anti-inflammatory tripeptide, included for the mucosal side." },
    ],
    consideredFor: [
      "Overlapping gut symptoms and low mood, where both have been investigated properly.",
      "Someone under gastroenterological care asking about adjunctive options.",
      "Where inflammatory bowel disease has been excluded or is already managed.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "connect",
    name: "CONNECT",
    category: "Connection & Intimacy",
    sourceName: "Love & Happiness",
    tagline: "Two peptides, two different aspects of intimacy.",
    summary:
      "Oxytocin paired with PT-141 — one acting on bonding and social signalling, the other centrally on arousal.",
    rationale: [
      "These two are paired because they act on genuinely different things. Oxytocin is associated with bonding and social connection; PT-141 acts centrally on arousal pathways rather than on blood flow, which is what separates it mechanistically from the familiar erectile-dysfunction drugs.",
      "PT-141 is the component that needs care. It has real human trial data — more than most peptides here — and a documented side-effect profile including nausea, flushing, and transient blood-pressure changes. Anyone with uncontrolled hypertension or significant cardiovascular disease is outside this. Sexual difficulty also has medical and relational causes worth exploring properly, and a peptide is not the first question to ask.",
    ],
    components: [
      { peptide: "Oxytocin", dose: "50 mg", role: "Included for bonding and social-connection signalling." },
      { peptide: "PT-141", dose: "10 mg", role: "A melanocortin agonist acting centrally on arousal. Real trial data, and a real side-effect profile." },
    ],
    consideredFor: [
      "Low desire where medical causes — hormonal, vascular, medication-related — have been investigated.",
      "Couples already engaged with relational or psychosexual support.",
      "Only after cardiovascular status and blood pressure have been assessed.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "desire",
    name: "DESIRE",
    category: "Connection & Intimacy",
    sourceName: "Crave",
    tagline: "CONNECT, with the upstream hormonal axis added.",
    summary:
      "The oxytocin and PT-141 pairing plus Kisspeptin-10, reaching further upstream into the reproductive hormone axis.",
    rationale: [
      "This is the CONNECT pairing with a third component that works at a different level. Kisspeptin-10 acts upstream on the reproductive hormone axis rather than on arousal directly — the reasoning being that desire has a hormonal substrate as well as a neural one.",
      "Adding an upstream hormonal signal is a meaningful escalation rather than an incremental one, and it brings the same exclusions as anywhere else on this site: pregnancy, breastfeeding, trying to conceive, and hormone-sensitive conditions rule it out. The PT-141 cardiovascular cautions from CONNECT apply here unchanged.",
    ],
    components: [
      { peptide: "PT-141", dose: "10 mg", role: "Central arousal signalling; the cardiovascular cautions apply." },
      { peptide: "Oxytocin", dose: "50 mg", role: "Bonding and connection signalling." },
      { peptide: "Kisspeptin-10", dose: "10 mg", slug: "kisspeptin", role: "Upstream reproductive-axis signalling. Note this is a substantially higher dose than in RESTORE." },
    ],
    consideredFor: [
      "Where a simpler approach has been tried and a hormonal contribution is suspected.",
      "Only after a full hormonal workup, not before one.",
      "Never where pregnancy, conception, or a hormone-sensitive condition is in the picture.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "rest",
    name: "REST",
    category: "Sleep & Restoration",
    sourceName: "Hypnøs",
    tagline: "Sleep depth, and what happens during it.",
    summary:
      "A sleep-directed peptide with growth-hormone-axis signalling and an anxiolytic component — aimed at sleep architecture rather than sedation.",
    rationale: [
      "The premise is that sleep quality and overnight recovery are the same problem viewed from two angles: most growth-hormone release happens during deep sleep, so a combination aimed at sleep depth is also aimed at that release. DSIP carries the sleep-specific rationale, CJC-1295 and Ipamorelin the hormonal half, and Selank addresses the stress reactivity that keeps people awake.",
      "Before any of this: sleep apnoea is common, seriously underdiagnosed, and genuinely dangerous, and it will not be fixed by a peptide. Loud snoring, witnessed pauses in breathing, or daytime sleepiness need a sleep study, not a prescription from this page. Insomnia also responds well to cognitive behavioural therapy, which has better evidence behind it than anything in this vial.",
    ],
    components: [
      { peptide: "DSIP", dose: "5 mg", slug: "dsip", role: "Delta sleep-inducing peptide — the sleep-specific component. Its own page is candid about how thin the evidence is." },
      { peptide: "CJC-1295", dose: "6 mg", slug: "cjc-1295", role: "GHRH signalling, timed to the overnight release." },
      { peptide: "Ipamorelin", dose: "12 mg", slug: "ipamorelin", role: "Paired GH secretagogue." },
      { peptide: "Selank", dose: "5 mg", role: "Included for the stress-reactivity side of sleep onset." },
    ],
    consideredFor: [
      "Poor sleep quality where sleep apnoea has been excluded by proper assessment.",
      "Someone who has already tried cognitive behavioural therapy for insomnia.",
      "Recovery-focused use where overnight quality is the limiting factor.",
    ],
    updated: "2026-08-25",
  },
  {
    slug: "defend",
    name: "DEFEND",
    category: "Immune & Defense",
    sourceName: "Sentinel",
    tagline: "Four peptides on the immune and barrier side.",
    summary:
      "Immune signalling, antimicrobial peptides, and barrier support combined — the only combination here aimed squarely at immune function.",
    rationale: [
      "This combination spans immune modulation, antimicrobial activity, and mucosal barrier integrity. Thymosin Alpha-1 is the most substantiated component by a distance: it is an approved medicine in a number of countries outside the United States for specific infectious and immunological indications, which is more than any other peptide in this library can claim.",
      "That approval elsewhere does not transfer to the general immune-support use described here, and immune modulation cuts both ways — anyone with an autoimmune condition, or on immunosuppressive therapy, or with a transplant history, needs a specialist's view before any of this is considered rather than after.",
    ],
    components: [
      { peptide: "Thymosin Alpha-1", dose: "5 mg", role: "Immune modulation. Approved for specific indications in some countries outside the US — but not for this use." },
      { peptide: "BPC-157", dose: "5 mg", slug: "bpc-157", role: "Included for barrier and inflammation signalling." },
      { peptide: "KPV", dose: "2 mg", slug: "kpv", role: "An anti-inflammatory tripeptide for the mucosal side." },
      { peptide: "LL-37", dose: "1 mg", role: "A human antimicrobial peptide. Powerful biology, and correspondingly the component with the least margin for casual use." },
    ],
    consideredFor: [
      "Frequent recurrent infection, after an immunological workup rather than instead of one.",
      "Recovery following a significant illness.",
      "Never in autoimmune disease, on immunosuppression, or with a transplant history without specialist input.",
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
