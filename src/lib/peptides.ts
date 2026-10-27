// PEPTIDE EDUCATION LIBRARY — generated from the approved FitClinicMD source
// documents (Single Peptide Education / Short + the Peptide Index Update List,
// 2026-08-25). Do not hand-edit entries: re-run the generator against the source
// PDFs so the site and the approved copy cannot drift apart.
//
// SOURCE ADDENDUM (2026-09-22). Four optional fields below — boxedWarning,
// availabilityNote, suppress503A, sources — are NOT in the 2026-08-25 SHORT/FULL
// PDFs. They are approved additions recorded in the source set at
// fitclinicmd-materials/site-content/peptide-library-2026-08-25/
// ADDENDUM-2026-09-22-regulatory-fields.md (shipped in marketing PR #112). A
// regeneration MUST fold that addendum in for bpc-157, ghk-cu, semaglutide, and
// tirzepatide, or these caveats/sources will silently disappear. The addendum
// also records the guardrail below in writing.
//
// STRUCTURE. Each peptide has a SHORT page (this data) and a long-form FULL
// REVIEW (an approved PDF in /public/education/peptides/<slug>.pdf, opened in a
// new tab). The short page is what opens first; the full review is one click
// down for anyone who wants it.
//
// NO EVIDENCE TIERS. The graded tier chips ("Animal data only", "Limited human
// data", etc.) were removed at Michael's direction on 2026-08-25. The pages
// still carry the substance that matters: what it is, what people use it for,
// who it is NOT for, the WADA status, the 503A provenance, and the standing
// "not an FDA-approved medicine" footer. The 2026-09-22 addendum's regulatory
// caveats were written to respect this rule and the no-animal-framing rule
// (2026-08-31): keep them tier-free and usage-based on any regen.

export type PeptideUse = { use: string; inShort: string };
/** A related peptide. `slug` always resolves — every name in the source
 *  documents maps to a peptide in this library, and the generator fails if one
 *  does not. Rendered as a link that opens in a new tab. */
export type PeptidePair = { name: string; reason: string; slug: string };

/** A primary-source link, rendered as a lightweight "Sources" list on the
 *  molecule page. Same shape as the regulatory-page Source. */
export type PeptideSource = { title: string; publisher: string; href: string };

export type Peptide = {
  slug: string;
  name: string;
  /** Drug class / description line under the name. */
  subtitle: string;
  category: string;
  /** One-line card summary on the library index. */
  oneLiner: string;
  intro: string[];
  uses: PeptideUse[];
  notFor: string[];
  /** WADA status sentence, verbatim from the approved source. */
  wada: string;
  pairsWith: PeptidePair[];
  updated: string;
  /** Optional prominent boxed-warning callout — for FDA-approved molecules that
   *  carry one (e.g. the GLP-1 class thyroid C-cell tumor warning). Plain-language
   *  summary; the full boxed warning lives on the product's Medication Guide. */
  boxedWarning?: string;
  /** Optional regulatory/availability caveat, rendered as a neutral callout
   *  before the provenance block. Used where compounding availability is limited
   *  or conditional, or to keep FDA-approved-brand vs compounded distinct. */
  availabilityNote?: string;
  /** When true, hide the blanket "Prepared by a 503A pharmacy" provenance block
   *  for this molecule — used where a routine-compounding claim would not be
   *  accurate under current federal rules (e.g. BPC-157 bulk-substance limits). */
  suppress503A?: boolean;
  /** Optional primary-source links, rendered as a lightweight sources list. */
  sources?: PeptideSource[];
};

export const CATEGORY_ORDER: string[] = [
  "Metabolic & Fat Loss",
  "Growth Hormone & Anabolic Signaling",
  "Mitochondrial & Cellular Energy",
  "Tissue Repair & Recovery",
  "Inflammation & Immune Defense",
  "Cognitive Function & Neuroprotection",
  "Longevity, Sleep & Circadian",
  "Sexual & Reproductive Health",
];

/**
 * Stable anchor per category, so an outside page can deep-link to one group.
 * The slugs are Todd's (2026-09-02) — they are shorter than the headings and
 * already referenced from the education pages, so they are part of the URL
 * contract now: renaming a heading must not change its anchor.
 */
export const CATEGORY_ANCHORS: Record<string, string> = {
  "Metabolic & Fat Loss": "metabolic",
  "Growth Hormone & Anabolic Signaling": "growth",
  "Mitochondrial & Cellular Energy": "energy",
  "Tissue Repair & Recovery": "repair",
  "Inflammation & Immune Defense": "immune",
  "Cognitive Function & Neuroprotection": "cognitive",
  "Longevity, Sleep & Circadian": "sleep",
  "Sexual & Reproductive Health": "sexual",
};

/** Approved long-form review, opened in a new tab. */
export function fullReviewUrl(slug: string): string {
  return `/education/peptides/${slug}.pdf`;
}

export const PEPTIDES: Peptide[] = [
  {
    "slug": "semaglutide",
    "name": "Semaglutide",
    "subtitle": "Glp-1 receptor agonist",
    "category": "Metabolic & Fat Loss",
    "oneLiner": "Widely known for steady, sustained weight loss.",
    "intro": [
      "Semaglutide is a lab-made copy of a natural gut hormone, GLP-1, modified to remain active for about a week instead of minutes. It is a fully FDA-approved medicine. It is used by people managing type 2 diabetes, long-term weight management, and cardiovascular risk reduction."
    ],
    "uses": [
      {
        "use": "Type 2 diabetes",
        "inShort": "An approved use, studied in large placebo-controlled trials."
      },
      {
        "use": "Long-term weight management",
        "inShort": "Approved for adults, and adolescents 12 and older, with obesity."
      },
      {
        "use": "Reducing cardiovascular events",
        "inShort": "Shown to lower heart attack, stroke, and cardiovascular death risk."
      }
    ],
    "notFor": [
      "Anyone with a personal or family history of medullary thyroid cancer, or MEN 2.",
      "Anyone with a serious allergic reaction to semaglutide or its ingredients.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
      "Anyone with a history of pancreatitis or gallbladder disease, without discussing it first."
    ],
    "wada": "Competitive athletes: Not currently prohibited, though semaglutide is on WADA’s Monitoring Program.",
    "pairsWith": [
      {
        "name": "Tesamorelin",
        "slug": "tesamorelin",
        "reason": "adds targeted visceral-fat and lean-mass support through the growth-hormone axis."
      }
    ],
    "updated": "2026-09-22",
    "boxedWarning": "Boxed warning (class): semaglutide and other GLP-1 medicines carry an FDA boxed warning for the risk of thyroid C-cell tumors seen in rodent studies. Do not use if you or a family member has had medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN2). A compounded semaglutide preparation is not FDA-approved Ozempic, Wegovy, or Rybelsus, and is not an interchangeable generic of the brand product — confirm the concentration and draw volume before any injection. Always follow the Medication Guide for the exact product you are prescribed.",
    "sources": [
      {
        "title": "Drugs@FDA — official approved labels",
        "publisher": "U.S. Food and Drug Administration",
        "href": "https://www.accessdata.fda.gov/scripts/cder/daf/"
      },
      {
        "title": "Semaglutide injection — patient drug information",
        "publisher": "MedlinePlus",
        "href": "https://medlineplus.gov/druginfo/meds/a618008.html"
      },
      {
        "title": "GLP-1 agonists — medication class overview",
        "publisher": "MedlinePlus",
        "href": "https://medlineplus.gov/ency/article/007853.htm"
      },
      {
        "title": "Concerns with unapproved GLP-1 drugs used for weight loss",
        "publisher": "U.S. Food and Drug Administration",
        "href": "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss"
      }
    ]
  },
  {
    "slug": "tirzepatide",
    "name": "Tirzepatide",
    "subtitle": "Dual gip and glp-1 receptor agonist",
    "category": "Metabolic & Fat Loss",
    "oneLiner": "Talked about for delivering some of the strongest weight-loss results available.",
    "intro": [
      "How it differs from Semaglutide: Tirzepatide activates two gut hormones, GIP and GLP-1, instead of one, and produced greater average weight loss in a 72-week head-to-head trial of about 750 people — roughly 20% versus 14% of body weight, each at its approved dose.",
      "Tirzepatide is a lab-made molecule that activates two natural gut hormones released after eating, GIP and GLP-1, engineered to remain active for about a week between doses. It is a fully FDA-approved medicine. It is used by people managing type 2 diabetes, chronic weight management, and moderate-to-severe obstructive sleep apnea."
    ],
    "uses": [
      {
        "use": "Type 2 diabetes",
        "inShort": "One of three approved uses, alongside standard diabetes care."
      },
      {
        "use": "Chronic weight management",
        "inShort": "Approved for adults with obesity or a weight-related condition."
      },
      {
        "use": "Moderate-to-severe obstructive sleep apnea",
        "inShort": "The newest approved use, studied in adults with obesity."
      }
    ],
    "notFor": [
      "Anyone with a personal or family history of medullary thyroid cancer, or MEN 2.",
      "Anyone with a serious allergic reaction to tirzepatide or any ingredient in the product.",
      "Pregnant or breastfeeding patients, or anyone actively trying to conceive."
    ],
    "wada": "Competitive athletes: Not currently prohibited by WADA or USADA; a related compound in this class is",
    "pairsWith": [
      {
        "name": "Tesamorelin",
        "slug": "tesamorelin",
        "reason": "adds visceral-fat and lean-mass support through the growth-hormone axis."
      }
    ],
    "updated": "2026-09-22",
    "boxedWarning": "Boxed warning (class): tirzepatide carries the same FDA boxed warning as other GLP-1/GIP medicines for the risk of thyroid C-cell tumors seen in rodent studies. Do not use if you or a family member has had medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN2). Tirzepatide is a distinct molecule, not “stronger Ozempic.” A compounded tirzepatide preparation is not FDA-approved Mounjaro or Zepbound and is not an interchangeable generic — confirm the concentration and measuring instructions before any injection. Always follow the Medication Guide for the exact product you are prescribed.",
    "sources": [
      {
        "title": "Drugs@FDA — official approved labels",
        "publisher": "U.S. Food and Drug Administration",
        "href": "https://www.accessdata.fda.gov/scripts/cder/daf/"
      },
      {
        "title": "GLP-1 agonists — medication class overview",
        "publisher": "MedlinePlus",
        "href": "https://medlineplus.gov/ency/article/007853.htm"
      },
      {
        "title": "FDA clarifies policies for compounders as national GLP-1 supply stabilizes",
        "publisher": "U.S. Food and Drug Administration",
        "href": "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize"
      }
    ]
  },
  {
    "slug": "sermorelin",
    "name": "Sermorelin",
    "subtitle": "Growth hormone-releasing hormone analogue",
    "category": "Growth Hormone & Anabolic Signaling",
    "oneLiner": "Known for encouraging the body's own natural growth-hormone rhythm.",
    "intro": [
      "Sermorelin is a lab-made copy of a natural brain hormone, GHRH, which signals the pituitary gland to release its own growth hormone in short bursts. It is used by people interested in growth hormone support, typically as a nightly injection."
    ],
    "uses": [
      {
        "use": "Adult GH optimization, body composition",
        "inShort": "Studied for fat and lean-mass changes."
      },
      {
        "use": "Cognitive function",
        "inShort": "A less-studied, secondary area of interest."
      },
      {
        "use": "Recovery, sleep, and general wellness",
        "inShort": "Commonly reported alongside the growth hormone pulse."
      }
    ],
    "notFor": [
      "Anyone whose growth hormone deficiency originates at the pituitary itself, or from a known or suspected pituitary lesion.",
      "Anyone with prediabetes, diabetes, or insulin resistance.",
      "Anyone with active cancer or a recent cancer history.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive."
    ],
    "wada": "Competitive athletes: Sermorelin is prohibited at all times under WADA’s growth hormone-releasing",
    "pairsWith": [
      {
        "name": "Semaglutide",
        "slug": "semaglutide",
        "reason": "adds lean-mass support alongside incretin-driven weight loss."
      }
    ],
    "updated": "2026-08-25"
  },
  {
    "slug": "tesamorelin",
    "name": "Tesamorelin",
    "subtitle": "Growth hormone-releasing hormone analogue",
    "category": "Growth Hormone & Anabolic Signaling",
    "oneLiner": "A favorite for targeting stubborn visceral fat.",
    "intro": [
      "Tesamorelin is a lab-made copy of a natural brain hormone that prompts the pituitary gland to release growth hormone, targeted specifically at visceral fat. It is a fully FDA-approved medicine for one narrow use — excess abdominal fat in HIV-associated lipodystrophy — and is not intended for general weight loss."
    ],
    "uses": [
      {
        "use": "Excess visceral fat in HIV-associated lipodystrophy",
        "inShort": "The approved use; visceral fat down 11–15% versus placebo in trials."
      },
      {
        "use": "Liver fat in HIV patients with fatty liver disease",
        "inShort": "A related use studied in the same patient population."
      },
      {
        "use": "Cognitive function",
        "inShort": "A newer, less-studied area of interest."
      }
    ],
    "notFor": [
      "Anyone with disruption of the pituitary gland or its signaling.",
      "Anyone with active cancer or a cancer history.",
      "Pregnant patients, or anyone with a known hypersensitivity to the medicine.",
      "Anyone with diabetes or unstable blood sugar, without discussing it first."
    ],
    "wada": "Competitive athletes: Tesamorelin is named on the WADA Prohibited List and is prohibited at all",
    "pairsWith": [
      {
        "name": "Semaglutide",
        "slug": "semaglutide",
        "reason": "adds lean-mass support alongside incretin-driven weight loss."
      }
    ],
    "updated": "2026-08-25"
  },
  {
    "slug": "glutathione",
    "name": "Glutathione",
    "subtitle": "Endogenous tripeptide antioxidant",
    "category": "Mitochondrial & Cellular Energy",
    "oneLiner": "A go-to antioxidant for skin brightening and overall wellness.",
    "intro": [
      "Glutathione is a tiny protein every cell manufactures for itself, the body’s main internal antioxidant. Swallowed glutathione is broken down before it can be absorbed intact, so it is given by injection, IV, or nebulizer instead. It is used by people interested in skin tone, oxidative stress, and general recovery."
    ],
    "uses": [
      {
        "use": "General antioxidant and oxidative stress",
        "inShort": "The underlying use tied to its natural role in the body."
      },
      {
        "use": "Skin tone and brightening",
        "inShort": "The most-marketed use."
      },
      {
        "use": "Chemotherapy side effects and neuropathy",
        "inShort": "Studied as an add-on in oncology, alongside an oncologist’s input."
      }
    ],
    "notFor": [
      "Anyone with asthma or reactive airways, where an inhaled or nebulised form is proposed.",
      "Anyone with a history of anaphylaxis or severe drug allergy.",
      "Anyone with liver disease or abnormal liver tests.",
      "Pregnant or breastfeeding patients, and anyone on chemotherapy without involving their oncologist."
    ],
    "wada": "Competitive athletes: Glutathione itself is not prohibited by WADA; large-volume IV infusions fall",
    "pairsWith": [
      {
        "name": "NAD+",
        "slug": "nad",
        "reason": "shares a focus on cellular energy and antioxidant balance."
      },
      {
        "name": "SS-31",
        "slug": "ss-31",
        "reason": "both relate to protecting mitochondrial function."
      }
    ],
    "updated": "2026-08-25"
  },
  {
    "slug": "nad",
    "name": "NAD+",
    "subtitle": "Cellular energy coenzyme",
    "category": "Mitochondrial & Cellular Energy",
    "oneLiner": "Known for supporting cellular energy and everyday vitality.",
    "intro": [
      "NAD+ is not a peptide — it is a coenzyme every cell already makes and uses constantly, central to how cells convert food into energy. What is offered clinically is the injected or IV form. It is used by people interested in energy, cognitive clarity, and general cellular support."
    ],
    "uses": [
      {
        "use": "Energy and general vitality",
        "inShort": "Tied to its central role in how cells produce energy."
      },
      {
        "use": "Cognitive clarity",
        "inShort": "A commonly reported use among people who take it."
      },
      {
        "use": "Anti-aging and longevity",
        "inShort": "The use most associated with its wellness marketing."
      }
    ],
    "notFor": [
      "Pregnancy or breastfeeding.",
      "Cardiac history, without discussing it first."
    ],
    "wada": "Competitive athletes: NAD+ does not appear on the WADA Prohibited List and is not treated as a",
    "pairsWith": [],
    "updated": "2026-08-25"
  },
  {
    "slug": "ss-31",
    "name": "SS-31",
    "subtitle": "Cardiolipin-targeting tetrapeptide (elamipretide)",
    "category": "Mitochondrial & Cellular Energy",
    "oneLiner": "Known for supporting the cell's own energy centers.",
    "intro": [
      "SS-31, known as elamipretide, is a small peptide engineered to target cardiolipin, a molecule inside mitochondria central to how cells produce energy. It is used by people interested in mitochondrial health and cellular energy support."
    ],
    "uses": [
      {
        "use": "Muscle strength support",
        "inShort": "The one narrow FDA-approved use, in a rare genetic condition."
      },
      {
        "use": "Age-related vision support",
        "inShort": "An area of active research interest."
      },
      {
        "use": "General mitochondrial health",
        "inShort": "The use most associated with its wellness marketing."
      }
    ],
    "notFor": [
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
      "Anyone with a known hypersensitivity.",
      "Anyone extrapolating a narrow approval to general wellness or longevity use without discussing it first.",
      "Anyone sourcing product from an unverified compounder or vendor."
    ],
    "wada": "Competitive athletes: SS-31’s status is recent and still settling; confirm current status before use.",
    "pairsWith": [
      {
        "name": "NAD+",
        "slug": "nad",
        "reason": "shares a focus on cellular energy production."
      }
    ],
    "updated": "2026-08-25"
  },
  {
    "slug": "pt-141",
    "name": "PT-141",
    "subtitle": "Melanocortin receptor agonist (bremelanotide)",
    "category": "Sexual & Reproductive Health",
    "oneLiner": "Popular for reigniting desire from the inside out.",
    "intro": [
      "PT-141, also known as bremelanotide, is a lab-made peptide built to mimic a natural hormone involved in the brain’s desire and arousal pathway. As Vyleesi, it is FDA-approved for one specific population. It is used by people addressing low sexual desire and interest."
    ],
    "uses": [
      {
        "use": "Low sexual desire in premenopausal women",
        "inShort": "The approved use — a modest, statistically significant benefit."
      },
      {
        "use": "Male erectile dysfunction, off-label",
        "inShort": "Based on an older development program."
      },
      {
        "use": "Male low libido without diagnosed ED",
        "inShort": "Extrapolated from related research."
      }
    ],
    "notFor": [
      "Uncontrolled hypertension or known cardiovascular disease.",
      "Pregnancy, or trying to conceive without reliable contraception.",
      "Low desire caused by another medical condition, psychiatric condition, relationship problem, or medication.",
      "Postmenopausal women."
    ],
    "wada": "Competitive athletes: Not currently named on the WADA Prohibited List; confirm current status before",
    "pairsWith": [],
    "updated": "2026-08-25"
  }
];

export function getPeptide(slug: string) {
  return PEPTIDES.find((p) => p.slug === slug);
}

export function peptidesByCategory() {
  return CATEGORY_ORDER.map((category) => ({
    category,
    peptides: PEPTIDES.filter((p) => p.category === category),
  })).filter((g) => g.peptides.length > 0);
}
