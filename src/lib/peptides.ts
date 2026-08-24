// PEPTIDE EDUCATION LIBRARY — original, non-promotional education pages.
//
// Written in our own words from Todd/Medvora's reviewed source material
// (site-content/peptide-pages), following the FitClinicMD page template
// (26 peptides + 19 blends planned). Same discipline as lib/articles.ts and
// the site's claims rules: describe use, never promise outcome; the evidence
// tier is a spec, not a warning; regulatory/safety material sits at the foot;
// never write "approved" except for the GLP-1 medicines. Efficacy claims belong
// in lib/claims.ts (counsel-gated) — never here.
//
// PUBLISHED peptides are real pages. PLANNED ones render as cards on /peptides
// until their reviewed content is transcribed in.

export type Tier = "human" | "limited" | "theoretical" | "none" | "approved";

export const TIER_LABEL: Record<Tier, string> = {
  approved: "FDA-approved",
  human: "Human trials",
  limited: "Limited human data",
  theoretical: "Theoretical",
  none: "No human data",
};

/** Chip color intent — spec, not warning. Green approved, blue limited, amber theoretical. */
export const TIER_TONE: Record<Tier, string> = {
  approved: "bg-emerald-50 text-emerald-800 border-emerald-200",
  human: "bg-sky-50 text-sky-800 border-sky-200",
  limited: "bg-sky-50 text-sky-800 border-sky-200",
  theoretical: "bg-amber-50 text-amber-800 border-amber-200",
  none: "bg-ink/5 text-ink-soft border-ink/15",
};

export type UseRow = { use: string; tier: Tier; meaning: string };
export type Misunderstanding = { claim: string; reality: string };

export type Peptide = {
  slug: string;
  name: string;
  drugClass: string;
  /** Evidence chip: the tier headline and one line summarising the human data. */
  tier: Tier;
  tierNote?: string; // e.g. "(one form) · Theoretical (the other)"
  chipSub: string;
  /** Category for the library grid. */
  category: string;
  status: "PUBLISHED" | "PLANNED";
  updated: string;
  /** Card + page summary. Neutral, non-promissory. */
  summary: string;
  // Full page content (PUBLISHED only) —
  standfirst?: string;
  whatItIs?: string[]; // paragraphs
  uses?: UseRow[];
  evidence?: { heading: string; paras: string[]; callout?: string }[];
  misunderstandings?: Misunderstanding[];
  notFor?: string[];
  dopingLine?: string;
  questions?: string[];
  clinicalDetail?: string[]; // provider-level paragraphs
};

export const PEPTIDES: Peptide[] = [
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    drugClass: "Growth hormone-releasing hormone analogue",
    tier: "limited",
    tierNote: "(one form) · Theoretical (the other)",
    chipSub:
      "A few dozen healthy volunteers, all short hormone studies. No efficacy outcome has ever been published.",
    category: "Growth hormone pathway",
    status: "PUBLISHED",
    updated: "2026-08-20",
    summary:
      "Two different molecules are sold under one name, and they behave nothing alike. This page starts by telling you which is which, because everything else depends on it.",
    standfirst:
      "Two different molecules are sold under this one name, and they behave nothing alike. Almost no page on the internet tells you which one it is describing. That is where this page starts, because everything else depends on it.",
    whatItIs: [
      "CJC-1295 was designed as a modified copy of the natural brain hormone that tells your pituitary to release growth hormone. Then it was made in two versions, and the difference between them is not a detail.",
      "One version has an extra piece attached — an anchor that latches permanently onto a protein in your blood. That anchor is the whole point of the design: it keeps the molecule circulating for the better part of a week instead of minutes. That version is called CJC-1295 with DAC.",
      "The other version is the same molecule without the anchor. It leaves the body quickly. Chemically it is a compound that already had a different name — modified GRF (1-29). It is now widely sold as “CJC-1295 without DAC,” which is how the confusion got started.",
      "If a supplier cannot tell you which of these two is in the vial, that is a reason to stop and ask, not a technicality. The FDA has said the same thing in its own words — it treats the inconsistent naming as a safety problem, not a labelling one.",
    ],
    uses: [
      {
        use: "Raising growth hormone and IGF-1 levels",
        tier: "human",
        meaning:
          "This much is established for the DAC form. It does raise the numbers. Whether raising them produces any benefit is a separate question the studies did not ask.",
      },
      {
        use: "Body composition, fat loss, lean mass",
        tier: "theoretical",
        meaning:
          "The one trial designed to test this was terminated and never reported. No published human outcome data exists.",
      },
      {
        use: "Recovery, injury healing, joint repair",
        tier: "theoretical",
        meaning: "No human trial with any healing endpoint. Extrapolated from growth hormone biology.",
      },
      {
        use: "Sleep quality",
        tier: "theoretical",
        meaning: "No trial with sleep as an endpoint. The reasoning is mechanistic.",
      },
      {
        use: "Anti-ageing, general wellness",
        tier: "theoretical",
        meaning: "No supporting human evidence of any kind.",
      },
      {
        use: "Anything at all, in the non-DAC form",
        tier: "none",
        meaning:
          "Zero controlled studies in people. Every published human trial used the DAC version.",
      },
    ],
    evidence: [
      {
        heading: "Where it stands with the FDA",
        paras: [
          "It has never been approved, in either form, anywhere in the world, for anything.",
          "It is not on the FDA’s approved compounding list either. It appears on a different list — substances that were put forward for compounding and then withdrawn by the people who nominated them. When the FDA reviewed it in December 2024 it proposed that all five submitted forms should not be included, citing no quality standard, missing purity and contamination data, and a finding that laboratory work had shown DNA damage in pituitary cells.",
          "The July 2026 advisory meeting that has been in the news did not cover CJC-1295. Nothing changed for it.",
        ],
      },
      {
        heading: "How many people have been studied",
        paras: [
          "A few dozen healthy volunteers — and every one of them received the DAC version.",
          "Three studies are published. Two measured hormone levels after single doses in twelve men and eleven men. A third ran ascending doses for 28 and 49 days; the number of participants is not obtainable from freely available sources.",
          "All of them measured hormone levels. None measured whether anything happened to the people — not body composition, not recovery, not sleep, not strength.",
        ],
      },
      {
        heading: "Why there is no evidence of benefit",
        paras: [
          "One trial was ever registered to test whether CJC-1295 actually does anything useful. It enrolled 120 people with HIV-associated abdominal fat and was scheduled to run twelve weeks. It was terminated early in 2006, and its results have never been published.",
        ],
        callout:
          "That is the reason there is no evidence of benefit to weigh. Not because nobody looked — because the one study designed to look did not finish, and nothing has replaced it in the twenty years since.",
      },
    ],
    misunderstandings: [
      {
        claim: "It restores your natural pulses of growth hormone.",
        reality:
          "This is backwards, and it is the claim made most often. The one study that looked found pulse frequency and size unchanged, while the baseline level rose about 7.5-fold. It raises the floor, not the peaks — exactly what a molecule engineered to stay attached to blood protein for a week would be expected to do.",
      },
      {
        claim: "It is well tolerated — the trials reported no serious side effects.",
        reality:
          "True and misleading in the same breath. No serious reactions were reported. The FDA, reading those same studies, found that 94 percent of participants reported some adverse event after a single injection, injection-site reactions affected every subject in one study, and effects included raised heart rate, flushing, dizziness and low blood pressure.",
      },
      {
        claim: "With DAC and without DAC are the same thing at different doses.",
        reality:
          "They are different molecules with different durations, and only one of them has ever been given to people in a published study.",
      },
      { claim: "It is approved somewhere in Europe or Asia.", reality: "It is not approved anywhere." },
    ],
    notFor: [
      "Anyone with known heart disease or significant cardiac risk factors. The FDA has documented raised heart rate and vasodilatory reactions in the published studies.",
      "Anyone with active or previous cancer, or an unscreened suspicious finding. Raising growth hormone and IGF-1 carries a theoretical risk of promoting existing disease.",
      "Anyone with diabetes, prediabetes or unstable blood sugar. Raising growth hormone pushes blood sugar in the wrong direction.",
      "Pregnancy, breastfeeding, or anyone trying to conceive.",
      "Anyone prone to fluid retention, or with existing carpal tunnel symptoms. Both are recognised effects of raising growth hormone.",
      "Anyone unwilling to be monitored. There is no approved labelling for this, which means there is no official monitoring schedule.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times under the World Anti-Doping Code, which names CJC-1295 explicitly. Ipamorelin — its usual partner in a blend — is named in the same section.",
    questions: [
      "Which form is this — with DAC or without? What does the certificate of analysis say?",
      "What human evidence is there that this produces the result I am after, rather than just changing a hormone level?",
      "Given my heart history and family history, is there any reason this is not appropriate for me?",
      "There is no approved labelling for this. What is the protocol based on, and what will you monitor?",
      "What result would make you stop, and how long before we call it a failure?",
    ],
    clinicalDetail: [
      "Tetrasubstituted GHRH(1-29)-NH2 (D-Ala2, Gln8, Ala15, Leu27). The DAC variant adds a thirtieth residue — a lysine bearing a maleimidopropionyl group — which undergoes Michael addition with albumin Cys34 to form a covalent conjugate. Measured half-life 5.8 to 8.1 days. The non-DAC variant is the same tetrasubstituted sequence without Lys30-MPA, chemically identical to modified GRF(1-29); no human pharmacokinetic data exist for it.",
      "Three published human studies, all DAC, all healthy volunteers: Teichman 2006 (two randomised double-blind placebo-controlled ascending-dose trials, 28 and 49 days); Ionescu and Frohman 2006 (12 healthy men, single dose, documented increased heart rate); Sackmann-Sala 2009 (11 healthy young men). Pulsatility analysis found frequency and amplitude unchanged with trough GH elevated approximately 7.5-fold.",
      "NCT00267527 (ConjuChem, Phase 2, HIV-associated visceral obesity, n=120, 12 weeks) was terminated in September 2006. Results were never posted.",
      "FDA Category 2 page, “nominated but withdrawn” table: cites immunogenicity risk, serious adverse events including increased heart rate and systemic vasodilatory reaction, and limited clinical data. At the December 2024 PCAC both nominators withdrew; FDA proposed all five submitted forms not be included, citing absence of a USP monograph, missing certificates of analysis, absent impurity and endotoxin data, limited water solubility of the free base, and in-vitro and in-vivo evidence of DNA damage in pituitary cells. Not addressed at the July 2026 PCAC.",
      "Prohibited under WADA S2.2.4, named explicitly alongside CJC-1293, sermorelin and tesamorelin; ipamorelin appears in the same section. Prohibited at all times, Non-Specified Substance.",
    ],
  },

  // PLANNED — reviewed source material on file (site-content/peptide-pages);
  // full page content transcribed in per the template before each is PUBLISHED.
  ...(
    [
      ["bpc-157", "BPC-157", "Tissue repair", "Musculoskeletal & repair"],
      ["ipamorelin", "Ipamorelin", "Growth hormone secretagogue", "Growth hormone pathway"],
      ["ghk-cu", "GHK-Cu", "Copper tripeptide", "Repair & longevity"],
      ["mots-c", "MOTS-c", "Mitochondrial-derived peptide", "Metabolic"],
      ["nad", "NAD+", "Coenzyme", "Repair & longevity"],
      ["epitalon", "Epitalon", "Pineal tetrapeptide", "Repair & longevity"],
      ["kisspeptin", "Kisspeptin", "Reproductive signalling peptide", "Hormonal"],
      ["kpv", "KPV", "Anti-inflammatory tripeptide", "Immune & inflammation"],
      ["igf1-lr3", "IGF-1 LR3", "Insulin-like growth factor analogue", "Growth hormone pathway"],
      ["dsip", "DSIP", "Delta sleep-inducing peptide", "Sleep & recovery"],
      ["aod9604", "AOD9604", "Modified growth hormone fragment", "Metabolic"],
      ["glutathione", "Glutathione", "Antioxidant tripeptide", "Repair & longevity"],
      ["5-amino-1mq", "5-Amino-1MQ", "NNMT inhibitor", "Metabolic"],
    ] as const
  ).map(
    ([slug, name, drugClass, category]): Peptide => ({
      slug,
      name,
      drugClass,
      tier: "limited",
      chipSub: "Reviewed source material on file. Full education page in preparation.",
      category,
      status: "PLANNED",
      updated: "2026-08-24",
      summary: "Full, sourced education page in preparation, written to the same honest template.",
    }),
  ),
];

export function publishedPeptides() {
  return PEPTIDES.filter((p) => p.status === "PUBLISHED");
}
export function getPeptide(slug: string) {
  return PEPTIDES.find((p) => p.slug === slug);
}
