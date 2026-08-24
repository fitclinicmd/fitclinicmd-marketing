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

export type Tier = "human" | "limited" | "theoretical" | "animal" | "none" | "approved";

export const TIER_LABEL: Record<Tier, string> = {
  approved: "FDA-approved",
  human: "Human trials",
  limited: "Limited human data",
  theoretical: "Theoretical",
  animal: "Animal data only",
  none: "No human data",
};

/** Chip color intent — spec, not warning. Green approved, blue human, amber theoretical/animal. */
export const TIER_TONE: Record<Tier, string> = {
  approved: "bg-emerald-50 text-emerald-800 border-emerald-200",
  human: "bg-sky-50 text-sky-800 border-sky-200",
  limited: "bg-sky-50 text-sky-800 border-sky-200",
  theoretical: "bg-amber-50 text-amber-800 border-amber-200",
  animal: "bg-amber-50 text-amber-800 border-amber-200",
  none: "bg-ink/5 text-ink-soft border-ink/15",
};

export type UseRow = { use: string; tier: Tier; meaning: string };
export type Misunderstanding = { claim: string; reality: string };

/**
 * Structured contraindications. This is the SHARED exclusions dataset:
 *  - the education page renders `absolute` items as a red "do not use" block;
 *  - the app intake screener (fitclinicmd-com) matches a client's pre-call
 *    application answers against `screen` keys and HARD-LOCKS the prescription
 *    for any absolute match, so the exclusion is enforced by the platform and
 *    not left to the provider's memory.
 * Keep `screen` keys stable and shared across peptides (one key = one intake
 * question), so a single application answer can gate every relevant peptide.
 */
export type ExclusionSeverity = "absolute" | "caution";
export type Exclusion = {
  /** Short label shown to patients, e.g. "Pregnancy, breastfeeding, or trying to conceive". */
  condition: string;
  severity: ExclusionSeverity;
  /** One line on why it rules the patient out. */
  note?: string;
  /** Stable machine key the intake screener matches against, e.g. "pregnancy". */
  screen?: string;
};

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
  /** Hard/soft contraindications (structured). `absolute` items render in red and,
   *  in the app, lock the prescription. Softer cautions live in `notFor`. */
  exclusions?: Exclusion[];
  notFor?: string[];
  dopingLine?: string;
  /** "What to ask your provider" (default) or "What your consultation covers". */
  questionsHeading?: string;
  questions?: string[];
  /** Short "Where this stands" summary, rendered as a card near the foot. */
  whereThisStands?: string[];
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
    exclusions: [
      {
        condition: "Active or previous cancer, or an unscreened suspicious finding",
        severity: "absolute",
        note: "Raising growth hormone and IGF-1 carries a theoretical risk of promoting existing disease.",
        screen: "cancer_history",
      },
      {
        condition: "Pregnancy, breastfeeding, or trying to conceive",
        severity: "absolute",
        note: "No safety data support use, and none of the studies enrolled these patients.",
        screen: "pregnancy",
      },
      {
        condition: "Competitive drug-tested athletes",
        severity: "absolute",
        note: "Named explicitly and prohibited at all times under the World Anti-Doping Code.",
        screen: "tested_athlete",
      },
    ],
    notFor: [
      "Anyone with known heart disease or significant cardiac risk factors. The FDA has documented raised heart rate and vasodilatory reactions in the published studies.",
      "Anyone with diabetes, prediabetes or unstable blood sugar. Raising growth hormone pushes blood sugar in the wrong direction.",
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

  {
    slug: "bpc-157",
    name: "BPC-157",
    drugClass: "Synthetic 15-amino-acid peptide",
    tier: "animal",
    chipSub:
      "About 81 people, total, have ever been given it in a documented study — and no completed, published, controlled human trial has shown it works for anything it is sold for.",
    category: "Musculoskeletal & repair",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "One of the most talked-about peptides and one of the least studied. What it is, what the ~81 humans ever studied actually showed, and who it is not for.",
    standfirst:
      "Almost everything known about BPC-157 comes from rats and mice. Fewer than about 100 people have ever been given it in a documented study — and the route almost everyone actually takes it by has never been tested in a single person.",
    whatItIs: [
      "BPC-157 is a lab-made chain of 15 amino acids. Its sequence was copied from a small piece of a larger protein found in human stomach fluid — but the fragment itself is not something your body is known to make or use on its own, and researchers have not identified the receptor it acts on.",
      "It is sold by injection, as a nasal spray, and as capsules, and is promoted for healing injuries, gut problems, and joint pain. Almost everything known about it comes from experiments in rats and mice, and no completed, published, controlled human trial has shown it works for anything it is actually sold for.",
    ],
    uses: [
      { use: "Tendon, ligament and muscle injury healing, faster sports recovery", tier: "animal", meaning: "No completed controlled human trial exists. The evidence is rat tendon and muscle studies; the first real human test only began recruiting in 2026 and will not report until 2028." },
      { use: "Knee and joint pain", tier: "limited", meaning: "Rests almost entirely on one uncontrolled chart review of 17 patients with phone follow-up — no placebo, no blinding, no objective measurement — and four were also given a second peptide." },
      { use: "Ulcerative colitis and inflammatory bowel disease", tier: "limited", meaning: "The only indication with any randomized human data — a placebo-controlled trial of 53 people — but it was never published in full and is missing basic information about its own primary result." },
      { use: "Gut healing, ‘leaky gut’, general GI protection", tier: "animal", meaning: "Extensively studied in rodent gut-injury models. There is no human trial for any of these uses; ‘leaky gut’ is marketing language layered onto rat studies." },
      { use: "Oral capsules for systemic repair", tier: "theoretical", meaning: "Nobody has shown a swallowed dose reaches the bloodstream in a human. The claim rests on the peptide being stable in gastric juice — a statement about stability, not absorption." },
      { use: "Skin wound healing, burns, post-surgical recovery", tier: "animal", meaning: "Rodent wound models show faster closure. No human wound-healing trial exists in any published form." },
      { use: "General anti-inflammatory effect, longevity", tier: "theoretical", meaning: "No human data. The name ‘Body Protection Compound’ is a 1993 laboratory label, not a demonstrated effect in people." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "Honestly: nobody knows, and the basic biology is unresolved — not merely untested in people. In animal studies it appears to nudge several general repair systems at once, including raising nitric oxide and encouraging new small blood vessels to grow into injured tissue. That is a summary of rat findings, not a proven human mechanism.",
          "FDA’s own reviewers stated the mechanisms ‘remain unknown,’ and the same blood-vessel-growth pathway invoked to explain benefit is also active in roughly half of human cancers studied — the basis of an unresolved safety question rather than a reassurance in either direction.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Approximately 81 people, total — FDA’s own count of every documented human ever given BPC-157, across five small trials: 24 healthy subjects by rectal enema; about 26 people with ulcerative colitis, also by enema; 17 with knee pain, by injection into the joint; 12 with bladder pain, instilled into the bladder; and 2 healthy subjects intravenously. Only one was randomized and placebo-controlled, and it was never published in full.",
          "The routes people actually use today are the least studied of all. FDA found no human data of any kind — not even basic absorption data — for oral, subcutaneous, nasal, or transdermal use. Subcutaneous injection, by far the most common way it is sold, has zero published human evidence behind it.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "BPC-157 is well studied — there are hundreds of published studies.", reality: "Both halves are true and the conclusion is false. There are hundreds of studies; about 81 humans have ever been given the drug. The literature is almost entirely rodent work, much from a single research group." },
      { claim: "The FDA approved BPC-157 in July 2026.", reality: "The most damaging misconception in circulation. An FDA advisory committee voted 8–6 to recommend adding it to a compounding ingredient list — for ulcerative colitis specifically — over the objection of FDA’s own scientists. The vote is non-binding, FDA has not adopted it, and BPC-157 remains off that list. A compounding-list vote is not drug approval." },
      { claim: "It’s natural — your body already makes it.", reality: "It is a synthetic 15-amino-acid sequence copied from a fragment of a stomach-fluid protein. The fragment itself is not an established human signalling molecule, and FDA states its molecular target has never been identified." },
      { claim: "It has no side effects — no toxic dose has ever been found.", reality: "Absence of evidence read as evidence of absence. No cancer-risk study has ever been done. The animal toxicology that exists found liver enzyme elevation and blood-clotting abnormalities in both rats and dogs." },
    ],
    notFor: [
      "Anyone on blood thinners or antiplatelet medication, or with a bleeding or clotting disorder — animal data showed clotting time changes in both directions.",
      "Anyone with liver disease or abnormal liver tests — animal toxicology showed liver enzyme elevation, against the common claim that this protects the liver.",
      "Anyone with active cancer, a cancer history, or an unscreened suspicious finding — the mechanism invoked for benefit is a pathway active in about half of human cancers, and no cancer-risk study has ever been done.",
      "Anyone pregnant, breastfeeding or trying to conceive — there is no complete reproductive safety data.",
      "Anyone buying from an online ‘research use only’ vendor rather than a licensed pharmacy — unknown purity, sterility and identity is the real, immediate risk.",
      "Anyone with autoimmune disease or a history of drug hypersensitivity, if an injectable or nasal form is proposed — FDA specifically flags an immune-reaction risk for those routes.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times, in and out of competition, under WADA category S0. A speedskater was sanctioned for a year after using a supplement containing it — without ever testing positive. Anti-doping is strict liability; nothing here is a defence.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you’re trying to achieve, and what proven, evaluated options exist for the same problem.",
      "Your history: bleeding or clotting issues, liver disease, any cancer history or unscreened finding.",
      "How many people have actually been studied taking it the way you’d be taking it — for most routes, the honest answer is zero.",
      "Where the material comes from, and the certificate of analysis for your lot.",
      "What we measure, on what schedule, and the point at which we’d stop.",
    ],
    whereThisStands: [
      "Never approved, anywhere, and no trial has shown it works for what it’s sold for. The entire published human record is about 81 people across five small studies; the one randomized trial was never published in full.",
      "The strongest safety concern is in FDA’s own review: animal toxicology found liver enzyme changes and clotting abnormalities, no cancer-risk study has ever been performed, and the growth-promoting mechanism proposed for benefit is active in many human cancers.",
      "Widely used, thinly studied — and the route almost everyone actually takes it by has never been tested in a single person.",
    ],
    clinicalDetail: [
      "Synthetic pentadecapeptide (GEPPPGKPADDAGLV), described as a fragment of the ‘body protection compound’ protein originally isolated from human gastric juice. FDA: ‘The molecular targets for BPC-157-related substances have not been identified, and the mechanisms of action remain poorly understood.’",
      "No human pharmacokinetic data exist for oral, subcutaneous, nasal, or transdermal administration. Rectal dosing — the route used in the only randomized trial — does not appear to achieve meaningful systemic absorption. Animal IM bioavailability is roughly 14–19% in rats and 45–51% in dogs.",
      "28-day toxicology in rats and dogs found aPTT shortening and prolongation (clotting changes in both directions) and liver-associated signals including increased ALT, glucose and triglycerides. No carcinogenicity study has ever been performed; reproductive toxicity data are incomplete.",
      "Not on the FDA 503A Bulks List. An April 2020 warning letter to a compounding pharmacy specifically cited BPC-157 as ineligible for 503A compounding exemptions. FDA staff recommended against adding it at the July 2026 advisory meeting; the committee voted 8–6 to recommend it anyway, for ulcerative colitis, non-bindingly.",
    ],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    drugClass: "Selective growth hormone secretagogue",
    tier: "theoretical",
    chipSub:
      "About 150 people studied, all dosed intravenously, none longer than a week. No published trial of the injected form used today has measured body composition, sleep or recovery.",
    category: "Growth hormone pathway",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "It reliably triggers a pulse of your own growth hormone — that part is measured. Whether that produces the results people want has never been studied in people.",
    standfirst:
      "Ipamorelin does one thing that is genuinely measured: it triggers a pulse of your own growth hormone. Everything it is actually sold for — muscle, fat, sleep, recovery — has never been tested in a human by the route people use.",
    whatItIs: [
      "Ipamorelin is a very short synthetic peptide — five amino acids — that mimics ghrelin, the ‘hunger hormone’, at one of its pituitary receptors. Triggering that receptor causes the pituitary to release a burst of your own growth hormone.",
      "It was originally developed as an intravenous hospital drug to restart the gut after bowel surgery. That programme did not succeed, and ipamorelin has never been approved for anything.",
    ],
    uses: [
      { use: "Triggers release of your own growth hormone", tier: "human", meaning: "Real and measured — a 1999 intravenous study in 40 healthy men showed a clear, dose-related pulse of growth hormone." },
      { use: "Increased lean muscle, reduced body fat", tier: "theoretical", meaning: "No published human trial of subcutaneous ipamorelin measuring body composition. The claim is inferred from what growth hormone does, not from studying ipamorelin in people." },
      { use: "Deeper or better sleep", tier: "theoretical", meaning: "No published human sleep study of ipamorelin exists." },
      { use: "Faster recovery from training or injury", tier: "theoretical", meaning: "No published human trial has tested this." },
      { use: "Anti-ageing, ‘restoring youthful GH levels’", tier: "theoretical", meaning: "Never tested; the Endocrine Society and AACE hold that GH therapy should be reserved for confirmed deficiency, and Endotext states GH use for anti-ageing ‘is not warranted’." },
      { use: "Improved bone density and growth", tier: "animal", meaning: "Ipamorelin induced longitudinal bone growth in rats; never reproduced in a human study." },
      { use: "Selective — raises GH without cortisol or prolactin", tier: "animal", meaning: "The selectivity finding originates in preclinical work; no human trial has confirmed it across repeated subcutaneous dosing." },
    ],
    evidence: [
      {
        heading: "What the research actually looked at",
        paras: [
          "Small, old, and entirely intravenous. Two published human studies account for essentially all of it: a 1999 phase 1 PK/PD study in 40 healthy men given the drug by 15-minute IV infusion; and a 2014 phase 2 trial in bowel-resection patients (117 enrolled, 114 analysed) given intravenously for up to 7 days, which missed its primary endpoint.",
          "That is on the order of 150 people, all dosed intravenously, none for longer than a week. There is no published randomised trial — none — of subcutaneous ipamorelin for body composition, sleep, recovery, injury or ageing, the uses it is sold for. There is no long-term human safety data of any kind.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "Ipamorelin is the safest and most selective of the growth hormone peptides.", reality: "The selectivity claim comes from preclinical animal work, not human trials. FDA’s own file cites serious adverse events including death in the only human indication studied intravenously, and states it lacks the information to know whether other injectable routes would cause harm." },
      { claim: "FDA approved peptides like ipamorelin in July 2026.", reality: "Two errors. The July 2026 PCAC recommended six peptides for the 503A list — a non-binding advisory recommendation, not approval, still needing rulemaking. And ipamorelin was not among them; it was not on the agenda at all." },
      { claim: "It just releases your own growth hormone, so it is physiologic and safe.", reality: "The human data show a single sharp pulse of GH, not restoration of a youthful rhythm. The downstream signal — elevated IGF-1 — carries the same theoretical cancer and glucose concerns regardless of how it was produced." },
      { claim: "It builds muscle and burns fat.", reality: "No published human trial has measured body composition on ipamorelin. The claim is borrowed from growth hormone research and applied to a different molecule at unstudied doses by an unstudied route." },
    ],
    notFor: [
      "Anyone with an active or recent cancer — ipamorelin raises GH and therefore IGF-1, which are growth factors, and the class has no malignancy safety data.",
      "Anyone with diabetes or prediabetes — GH raises blood sugar and reduces insulin sensitivity.",
      "Anyone pregnant, trying to conceive, or breastfeeding — there is no human reproductive safety data.",
      "Children and adolescents with open growth plates — GH signalling affects bone growth and this has never been studied in that group for ipamorelin.",
      "Anyone acutely and critically ill — increased mortality has been reported with pharmacologic GH after major surgery, trauma or acute respiratory failure.",
      "Anyone unwilling to accept that the long-term consequences of repeatedly pulsing their own growth hormone are genuinely unknown.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times. Ipamorelin is a named example on the 2026 WADA Prohibited List at S2.2.4 (growth hormone secretagogues), in and out of competition, for all levels of athlete. A clinic prescription does not create an exemption.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are trying to change, and whether growth hormone signalling is actually the lever for it.",
      "Your history: cancer, diabetes or prediabetes, pregnancy or plans to conceive, and whether growth plates are still open.",
      "What has been measured in people — the GH pulse itself — and what has not, at the route and dose you would be using.",
      "Where the material comes from, which pharmacy prepares it, and the certificate of analysis for your lot.",
      "Your baseline IGF-1 and fasting glucose, how often we recheck them, and the result that would take you off it.",
    ],
    whereThisStands: [
      "Never approved, anywhere. FDA has placed ipamorelin acetate on its list of bulk substances that may present significant safety risks (Category 2), citing a published trial in which serious adverse events occurred.",
      "Essentially all human data comes from two studies, the main one a 1999 trial in 40 healthy men given the drug intravenously. No published human trial of the injected form used today has measured body composition, recovery or sleep.",
      "It does reliably raise growth hormone — that part is measured. Whether raising it produces the outcomes people are after has not been studied in people.",
    ],
    clinicalDetail: [
      "Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH2) is a relatively selective GHSR-1a agonist. In the only published human pharmacology study, IV infusion produced dose-proportional kinetics with a terminal half-life of about 2 hours and a single episodic GH release. Downstream IGF-1 consequences of repeated subcutaneous dosing in humans have not been characterised in any published trial.",
      "Never approved anywhere; not a component of any FDA-approved drug and no USP/NF monograph exists. VERIFIED FDA CATEGORY 2: ‘Ipamorelin acetate’ appears in Category 2 of FDA’s 503B interim policy — bulk drug substances that may present significant safety risks. FDA states it ‘would consider taking action against an outsourcing facility for compounding drug products with this bulk drug substance.’",
      "It also appears in FDA’s ‘nominated but withdrawn’ table for 503A and is absent from the 503A Bulks List. It was not on the July 23–24 2026 PCAC agenda. Net effect: there is no clean lawful compounding pathway for ipamorelin under either 503A or 503B.",
    ],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    drugClass: "Copper-binding tripeptide",
    tier: "limited",
    chipSub:
      "The human evidence is cosmetic-appearance data in small topical skin studies. There are zero published human trials of injected or systemic GHK-Cu.",
    category: "Repair & longevity",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "A decades-old skincare ingredient now sold as an injection. What the small topical studies actually showed — and why that doesn’t transfer to the needle.",
    standfirst:
      "GHK-Cu has been in skin creams for decades, with small human studies behind the topical use. The injection now sold for ‘systemic anti-ageing’ has no published human study at all — and evidence for a compound applied one way does not transfer to a different route.",
    whatItIs: [
      "GHK is a very small natural molecule — three amino acids — that circulates in human blood and is released from tissue when you are injured. It grabs onto copper, and the copper-carrying version is called GHK-Cu.",
      "It has been in skin creams for decades and is best known as an anti-ageing skincare ingredient. More recently it is sold as an injection for tissue repair and ‘systemic anti-ageing’ — a use with no published human studies behind it.",
    ],
    uses: [
      { use: "Reducing fine lines/wrinkles, improving skin firmness (topical)", tier: "limited", meaning: "Three or four small placebo- or comparator-controlled studies of 20–71 subjects over 8–12 weeks reported measurable improvement in skin thickness, density and wrinkle depth." },
      { use: "Increasing collagen production in skin (topical)", tier: "limited", meaning: "One small human study reported increased procollagen synthesis in ~70% of treated volunteers — a laboratory marker, not a visible outcome patients would notice." },
      { use: "Wound healing and scar reduction", tier: "animal", meaning: "Every wound-healing result comes from rabbits, rats and mice — the peer-reviewed reviews describe no human wound-healing trials at all." },
      { use: "Hair growth and thickening", tier: "animal", meaning: "Follicle effects described in animal and cell work; no published controlled human hair trial." },
      { use: "Injected ‘systemic anti-ageing’, organ regeneration", tier: "theoretical", meaning: "Extrapolation from gene-expression profiling in cell lines and animal experiments — no human has been studied on injected GHK-Cu." },
      { use: "Nerve, lung and liver repair", tier: "animal", meaning: "Animal models only, mostly with systemic dosing never replicated in people." },
      { use: "Anti-inflammatory ‘whole-body’ benefit", tier: "theoretical", meaning: "Plausible from laboratory data, but no human study has measured whether taking GHK-Cu changes inflammation in a person." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "GHK acts as a copper courier and a signal. In laboratory cells it switches on genes that build collagen and elastin and switches down some inflammatory genes. Copper itself is required for the enzymes that cross-link collagen, so delivering copper is part of the story — but this is cell and animal biology, not a demonstrated human treatment effect.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Small, and entirely topical. Published human exposure across the controlled cosmetic studies is on the order of 130–200 subjects total: a facial-cream study in 71 women, an eye-cream study in 41 women, a thigh-skin comparison in ~20, and an 8-week wrinkle study. Durations 4–12 weeks.",
          "There are zero published human trials of injected or systemic GHK-Cu, and zero human wound-healing trials. FDA’s note on the injectable route says only that ‘there are limited data in humans.’",
        ],
      },
    ],
    misunderstandings: [
      { claim: "GHK-Cu is clinically proven to heal wounds.", reality: "The peer-reviewed reviews describe no human wound-healing trials. All wound data is from rabbits, rats and mice. The human evidence is cosmetic appearance in small skin studies." },
      { claim: "Your GHK levels crash as you age, so you need to replace it.", reality: "The decline is real (~200 ng/mL at 20 to ~80 by 60) but it is an observation, not a treatment rationale. No study has shown that restoring GHK levels changes any health outcome in a person." },
      { claim: "GHK-Cu is FDA-approved.", reality: "It is not approved as a drug for anything. It is a lawful cosmetic ingredient, and US cosmetics require no FDA premarket approval — so its shelf presence is not a regulatory endorsement." },
      { claim: "The injection works better than the cream.", reality: "Nobody has published a human study of injected GHK-Cu, so there is nothing to compare. The topical route has its own problem — GHK is charged and water-loving, making it poor at crossing intact skin." },
    ],
    notFor: [
      "Anyone with Wilson disease or another copper-handling disorder, or already taking copper — this molecule is deliberately carrying copper into you.",
      "Anyone pregnant or breastfeeding — there is no human safety data, and none whatsoever for injection.",
      "Anyone considering the injectable form — there is no published human injectable study, and FDA has flagged immunogenicity risk from aggregation and peptide-related impurities.",
      "Anyone with an active cancer diagnosis should discuss it first — GHK increases cell proliferation and new blood-vessel formation in laboratory models, never studied in a person with cancer.",
      "People with sensitive skin, eczema or rosacea should patch-test any topical; copper peptides are incompatible with vitamin C and acid products used at the same time.",
      "Anyone expecting a wound or scar to heal faster — that specific claim has never been tested in a human.",
    ],
    dopingLine:
      "Competitive athletes: not prohibited — USADA lists Tripeptide-1 (GHK) among cosmetic ingredients that are not prohibited. But a compounded injectable could contain other prohibited ingredients, and route is not a loophole for anything that is on the List. Check the specific product, not just the ingredient name.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are treating — skin quality, a wound or scar, or something systemic — and which form actually suits that.",
      "Any condition or medication affecting copper handling, and whether you are already taking copper.",
      "The rest of your skincare routine if topical — vitamin C, acids, retinoids — and whether they need separating.",
      "Where the material comes from and the certificate of analysis for your lot.",
      "How we will judge whether it worked, by what date, and the point at which we stop.",
    ],
    whereThisStands: [
      "Never approved as an injectable medicine. It appears in approved cosmetic products applied to skin; the injectable form used in clinics is not an approved medicine.",
      "The topical evidence is better than the injectable evidence — and evidence for a compound applied one way does not transfer to a different route.",
    ],
    clinicalDetail: [
      "Gly-His-Lys chelated to Cu(II) (free tripeptide MW 340.4 Da). Reported activity includes stimulation of collagen, elastin and glycosaminoglycan synthesis in dermal fibroblasts, MMP/TIMP modulation, and angiogenic activity. A key limitation for topical products is dermal delivery: GHK’s clogP of −2.24 sits outside the window favourable for skin permeation.",
      "Not FDA-approved as a drug for any indication. It is a long-standing lawful cosmetic ingredient (INCI Copper Tripeptide-1), and cosmetics are marketed in the US without FDA premarket approval — so ‘available in stores’ says nothing about proven medical benefit.",
      "Route-dependent compounding status: GHK-Cu for injectable routes was nominated then withdrawn and now sits in FDA’s ‘nominated but withdrawn’ table, with FDA’s stated concern about immunogenicity and ‘limited data in humans.’ GHK-Cu for non-injectable routes was in 503A Category 1 and was removed on 22 April 2026 because the nominations were withdrawn.",
    ],
  },

  {
    slug: "mots-c",
    name: "MOTS-c",
    drugClass: "Mitochondrial-derived peptide",
    tier: "animal",
    chipSub:
      "Promising cell and mouse biology, with essentially no human data on what happens when the peptide is actually given to a person. The first controlled human trial only began in 2026.",
    category: "Mitochondrial & cellular energy",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "One of the newest compounds in the library. The interesting biology is almost entirely mouse and cell work; the ‘exercise in a shot’ story is usually told backwards.",
    standfirst:
      "MOTS-c is one of the newest peptides here, and the honest state of the evidence reflects that: promising cell and animal biology, with almost no human data yet on what happens when it’s actually given to a person.",
    whatItIs: [
      "MOTS-c is a small, lab-made chain of 16 amino acids with an unusual origin: its blueprint comes from your mitochondrial DNA rather than the DNA in your cell’s nucleus. It appears to be one of a recently discovered family of signals mitochondria use to communicate with the rest of the body.",
      "It was first identified in 2015 and is sold today as an injection, marketed for metabolic health, weight management, exercise performance and longevity.",
    ],
    uses: [
      { use: "Metabolic health and insulin sensitivity", tier: "animal", meaning: "Mouse studies show real improvements through an AMPK-driven mechanism. In humans, only correlational blood-level data exists; the first controlled human trial of the injected peptide only began enrolling in 2026." },
      { use: "Weight management and fat metabolism", tier: "animal", meaning: "Supported by mouse studies. No completed human efficacy trial of the native peptide exists." },
      { use: "Exercise performance (‘exercise mimetic’)", tier: "animal", meaning: "The signature finding — doubled treadmill endurance — is a mouse result. The only human data shows exercise raises your own MOTS-c levels, not that injecting it improves performance." },
      { use: "Longevity and healthy aging", tier: "animal", meaning: "Based on aging-mouse studies. Human data is limited to correlational levels that vary with age and muscle mass, not a tested aging outcome." },
      { use: "General mitochondrial support", tier: "theoretical", meaning: "A plausible extension of MOTS-c’s role as a mitochondrial signal, but not a validated outcome tested in any human trial." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "The leading idea is that MOTS-c activates AMPK, a master fuel-sensing switch that also turns on with exercise and calorie restriction, driving increased fat burning and glucose uptake in mouse studies. A 2021 finding showed mice given MOTS-c ran roughly twice as long on a treadmill — but the same study’s human data showed a bout of exercise raises a person’s own MOTS-c, which is evidence that exercise triggers MOTS-c, not that injecting it reproduces exercise.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "There are two very different kinds of MOTS-c research, and marketing blurs them together. One measures people’s own natural MOTS-c blood levels and correlates them with health markers — useful, but it doesn’t involve giving anyone the peptide.",
          "Actually administering MOTS-c to a person and measuring what happens is essentially unstudied. FDA’s review states it has not identified any human exposure data for MOTS-c administered by any route. The first real trial of native MOTS-c only began enrolling in early 2026.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "It’s exercise in a shot, proven in humans.", reality: "The dramatic finding is a mouse result. The human evidence points the other way: exercising raises your own MOTS-c — it doesn’t show that injecting MOTS-c gives you the benefits of exercise." },
      { claim: "Because my body makes it naturally, injecting more must be safe.", reality: "The opposite is closer to true: regulators have specifically noted no human exposure data exists for administered MOTS-c at any dose, by any route." },
      { claim: "There’s a lot of research on this, so it’s well established.", reality: "Most of that research is mouse and cell-culture work, plus human studies that only measure existing blood levels. Very little involves giving a person the peptide." },
      { claim: "A recent FDA advisory vote means this is basically approved now.", reality: "That vote was non-binding, passed narrowly (7–5, two abstentions), over FDA staff’s own objection, and only concerned whether pharmacies may legally compound with it — not whether it works or is safe." },
    ],
    notFor: [
      "Anyone expecting an established human safety profile — none exists yet at any dose.",
      "Anyone pregnant, breastfeeding, or trying to conceive.",
      "Anyone with active cancer, a cancer history, or an undiagnosed mass — its mechanism touches cell-growth and stress-signalling pathways not fully characterised in humans.",
      "Anyone taking metformin or other medications that work through the same AMPK pathway, given an unstudied potential interaction.",
      "Anyone sourcing it from an unverified online seller rather than a licensed compounding pharmacy.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times, in and out of competition, explicitly named by WADA (category S4). There is no realistic exemption pathway, since exemptions require an approved therapeutic use and MOTS-c has none.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are trying to achieve, and that this is genuinely early-stage human evidence — an honest starting point for the conversation.",
      "Your history: any cancer diagnosis or unscreened finding, and current medications including metformin.",
      "Where the material comes from, and the certificate of analysis for your lot.",
      "What we measure, on what schedule, and the point at which we would stop.",
      "What proven, better-evidenced options exist for the same goal.",
    ],
    whereThisStands: [
      "One of the newest compounds in the library, and the human evidence reflects that honestly. The interesting biology is almost entirely mouse and cell-culture work; a controlled human trial of the actual peptide only began in 2026.",
      "The exercise-mimetic story is often told backwards. The real human finding is that exercise raises your own MOTS-c, not that the peptide replicates what exercise does.",
    ],
    clinicalDetail: [
      "MOTS-c (MRWQEMGYIFYPRKLR) is a 16-amino-acid mitochondrial-derived peptide encoded within the 12S rRNA region of the mitochondrial genome, discovered in 2015 (Lee et al., Cell Metabolism). Proposed mechanisms include AMPK activation and an AMPK-independent nuclear-translocation pathway under metabolic stress.",
      "FDA’s compounding-safety review states no human exposure data exists for MOTS-c administered by any route. A structurally distinct analog, CB4211, underwent a Phase 1a/1b trial (~88 subjects) before its developer dissolved. The first controlled trial of native MOTS-c (NCT07505745, Phase 2a, ~120 adults) began enrolling February 2026 with an estimated 2028 completion.",
      "Not FDA-approved; not on the 503A Bulks List. Reviewed at the July 2026 PCAC for obesity and osteoporosis; FDA staff recommended against inclusion and the committee voted 7–5 (two abstentions) to recommend inclusion anyway — the narrowest margin of the peptides reviewed. Non-binding and not adopted. Prohibited under WADA category S4.",
    ],
  },
  {
    slug: "nad",
    name: "NAD+",
    drugClass: "Cellular energy coenzyme",
    tier: "limited",
    chipSub:
      "Human trials of the injected/IV form are few and small — well under 200 people across every indication combined — and the largest dataset is uncontrolled.",
    category: "Mitochondrial & cellular energy",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "The biology is real and well established; the case for injecting it is much less so. And it’s genuinely uncomfortable medicine if rushed.",
    standfirst:
      "NAD+ is a coenzyme every cell needs. The biology is well established — but the case for infusing or injecting it is much thinner, and this is genuinely uncomfortable medicine if given too fast.",
    whatItIs: [
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme every cell needs to turn food into usable energy and to power DNA-repair systems. Levels naturally decline with age, which is the basis for interest in restoring them.",
      "It is sold two very different ways. Oral precursor supplements (NR, NMN) are over-the-counter dietary supplements. What’s offered by injection or IV infusion at a wellness clinic — the form discussed here — is a compounded drug product held to a more scrutinised standard.",
    ],
    uses: [
      { use: "Energy, fatigue and general vitality", tier: "limited", meaning: "The mechanistic rationale is solid biology, but few controlled human trials of the IV form measure fatigue or energy directly as an outcome." },
      { use: "Cognitive function, mental clarity, brain fog", tier: "limited", meaning: "One small peer-reviewed human trial exists for cognition — a meaningful result on a genuinely limited evidence base, not a well-replicated finding." },
      { use: "Support during addiction or substance withdrawal", tier: "limited", meaning: "The most-cited human data for injected NAD+, but from an uncontrolled, unblinded chart review combining NAD+ with other treatments — not a randomized trial isolating NAD+." },
      { use: "Anti-aging and longevity", tier: "theoretical", meaning: "No controlled human trial of IV NAD+ has tested aging or longevity. A 2026 study also questioned the premise that NAD+ reliably declines with age the way marketing assumes." },
      { use: "Exercise performance and recovery", tier: "theoretical", meaning: "Plausible given NAD+’s role in energy metabolism, but no dedicated human performance trial of the injected form was identified." },
      { use: "Hangover or general detox support", tier: "none", meaning: "No controlled human trial supports this specific marketing claim." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "Inside your cells NAD+ is essential fuel for mitochondrial energy production and for enzymes that repair DNA. What’s less certain is what happens when it’s infused rather than made by your own cells: NAD+ is a relatively large, charged molecule that isn’t expected to cross into cells easily, and a recent controlled study found IV NAD+ didn’t reliably raise blood NAD+ the way an equivalent dose of a smaller precursor did.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Human trials of injected or IV NAD+ specifically are limited — a handful of qualifying studies spanning several decades, totaling well under 200 people across every indication combined. The single largest body of human data is an uncontrolled, unblinded chart review of NAD+ used alongside other treatments for addiction withdrawal.",
          "The commonly repeated premise that everyone’s NAD+ meaningfully declines with age was itself called into question by a 2026 study, and no controlled human trial has tested whether IV NAD+ slows aging in any measurable way.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "IV NAD+ is proven to slow aging.", reality: "No controlled human trial has tested this. A 2026 study also complicates the basic premise that NAD+ reliably declines with age the way it’s marketed." },
      { claim: "It’s basically a vitamin, so it’s totally safe at any dose or speed.", reality: "Fast infusion is specifically associated with real, uncomfortable effects — chest tightness, cramping and flushing — which is why slow infusion protocols exist." },
      { claim: "The strong oral-supplement research applies here too.", reality: "Oral precursors (NR, NMN) are a separate research base from injected or IV NAD+ itself; the evidence quality and quantity are not interchangeable." },
      { claim: "Getting it by IV means it definitely reaches your cells better.", reality: "A controlled comparison found IV NAD+ didn’t reliably raise blood NAD+ the way an equivalent IV dose of a smaller precursor did — the infusion route doesn’t automatically solve absorption." },
    ],
    notFor: [
      "Anyone expecting a fast infusion — rapid administration is linked to chest tightness, cramping, flushing and shortness of breath; slow infusion over several hours meaningfully reduces this.",
      "Anyone with a cardiac or chest-pain history who hasn’t discussed infusion-related chest tightness with their provider beforehand.",
      "Anyone pregnant or breastfeeding — no dedicated safety data exists for the injected or IV form.",
      "Anyone expecting a guaranteed anti-aging or longevity effect — no controlled human trial supports this claim for the injected form.",
      "Anyone sourcing it from an unlicensed provider — FDA has taken direct enforcement action against a seller after a contamination-related adverse event.",
    ],
    dopingLine:
      "Competitive athletes: not named on the WADA Prohibited List or flagged by USADA in the sources reviewed for this page. (A compounded product could still contain other prohibited ingredients — check the specific preparation.)",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are hoping to achieve, and what the injected form has and has not actually been shown to do.",
      "Your cardiac history and any prior reaction to infusions.",
      "What a typical session feels like, and why we infuse slowly.",
      "Where the material comes from, and the certificate of analysis for your lot.",
      "What we measure, on what schedule, and the point at which we would stop.",
    ],
    whereThisStands: [
      "The biology behind NAD+ is real and well established; the case for injecting it is much less so. Human trials of the injected form are few, small, and — for the addiction-support use with the most data — uncontrolled and unblinded.",
      "This is genuinely uncomfortable medicine if rushed. FDA’s own review and independent studies both describe real, common infusion-related symptoms that slow administration is designed to avoid — worth knowing before your first session.",
    ],
    clinicalDetail: [
      "NAD+ is a dinucleotide coenzyme central to redox reactions in energy metabolism and a required substrate for sirtuin and PARP enzymes involved in DNA repair.",
      "FDA evaluated NAD+ for both 503A and 503B compounding and did not add it in either review, citing stability concerns and lack of toxicology data; it currently sits in FDA’s 503B ‘Category 1 — Under Evaluation.’ A January 2026 warning letter to a compounder cited NAD+ as ineligible for 503B and documented three patients who developed hypotension, shaking and body aches after an infusion found to contain high bacterial endotoxin, following a Class I recall.",
      "The human interventional literature is roughly five qualifying studies across all indications (1961–2019, ~140 people combined); the largest single dataset is uncontrolled addiction/withdrawal support. A 2026 randomized comparison found IV NAD+ did not reliably raise blood NAD+ the way IV nicotinamide riboside did.",
    ],
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    drugClass: "Synthetic four-amino-acid pineal peptide",
    tier: "animal",
    chipSub:
      "Only two human studies of Epitalon itself exist, neither replicated. FDA states it found no clinical studies assessing the safety of Epitalon in humans; zero exist for the injection route clinics dispense.",
    category: "Longevity, sleep & circadian",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "The famous ‘lifespan’ studies used a different substance. It was reviewed for insomnia; it is sold for ageing. Those are not the same claim.",
    standfirst:
      "Epitalon is sold as an anti-ageing injection on a telomere-lengthening claim. The famous human ‘lifespan’ results used a different substance entirely — and no human study has ever measured telomere length or lifespan on Epitalon itself.",
    whatItIs: [
      "Epitalon is a lab-made peptide of just four amino acids, designed in Russia to imitate a natural extract of the pineal gland — the small brain gland that helps run your sleep-wake cycle. It is sold as an anti-aging injection on the claim that it lengthens telomeres, the protective caps on your chromosomes.",
      "It has never been approved as a medicine anywhere in the world.",
    ],
    uses: [
      { use: "Cellular longevity / lifespan / telomere maintenance", tier: "animal", meaning: "The human longevity and mortality results were obtained with Epithalamin, a bovine pineal extract — not with Epitalon. No human study has measured telomere length or lifespan on Epitalon itself." },
      { use: "Insomnia and sleep quality", tier: "limited", meaning: "The indication the July 2026 panel voted on. FDA found exactly one relevant human study — 75 people, 20 days, sublingual — which did not measure sleep outcomes at all." },
      { use: "Normalising circadian rhythm / melatonin", tier: "limited", meaning: "One study of 75 women reported a 1.6-fold increase in melatonin synthesis versus placebo over 20 days of sublingual dosing; never independently replicated." },
      { use: "Antioxidant and neuroprotective effects", tier: "animal", meaning: "Rodent and cell-culture data only." },
      { use: "Cancer suppression / tumour prevention", tier: "animal", meaning: "Mouse and rat studies reported reduced tumour incidence; FDA’s reviewers reached the opposite concern for humans and called for genotoxicity and carcinogenicity studies." },
      { use: "Retinitis pigmentosa (degenerative eye disease)", tier: "limited", meaning: "The largest human study — 162 patients, injections around the eye — reported visual improvement, but had no control group and has never been replicated." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "In laboratory dishes, Epitalon switches on telomerase, an enzyme that rebuilds the caps at the ends of chromosomes, letting cultured cells divide more times than usual. Nobody has shown this happens inside a living human. And the same mechanism is why regulators worry about cancer — cancer cells are precisely cells that have escaped the limit on how many times they can divide.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Extremely limited. A 2025 review identified only two human clinical studies of Epitalon itself: 162 patients with retinitis pigmentosa (parabulbar injection, no control arm), and 75 women (sublingual, 20 days, measuring melatonin). Neither has been independently replicated.",
          "FDA’s July 2026 review reached the same place: for the nominated insomnia indication it identified only that n=75 sublingual study, which ‘did not evaluate sleep outcomes.’ FDA was blunt on safety: ‘there are no clinical data to support the safety of epitalon… when used in humans.’ Zero human studies exist for the subcutaneous injection route clinics dispense.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "Epitalon has been shown in human trials to extend lifespan and reduce mortality in elderly people.", reality: "The single most consequential error in Epitalon marketing. Those long-term human mortality studies used Epithalamin, a bovine pineal gland extract — not Epitalon, the synthetic tetrapeptide. No human lifespan or mortality study of Epitalon itself exists." },
      { claim: "Epitalon lengthens your telomeres.", reality: "Telomere lengthening has been shown in cultured human fibroblasts in a dish. No human in vivo telomere lengthening has ever been documented; the 2025 review’s own conclusion is that ‘its mechanism of action remains unclear.’" },
      { claim: "Studies suggest Epitalon suppresses cancer, so telomerase activation is not a concern.", reality: "That reassurance comes from mouse and rat studies. FDA’s toxicologists reviewing the same mechanism reached the opposite conclusion for humans and called for genotoxicity and carcinogenicity testing. The honest statement is: nobody knows, and the regulator’s concern runs the other way." },
      { claim: "The FDA panel recommended Epitalon, so it is on its way to approval.", reality: "The panel recommended it for a compounding list, for insomnia, over the objection of FDA’s own scientists, by a narrow margin. A bulks-list recommendation is not drug approval, is not binding, and requires rulemaking." },
    ],
    notFor: [
      "Anyone with a current or past cancer, or a strong family history — FDA’s reviewers warned specifically that chronically switching on telomerase could push cells past the limit that keeps them from becoming cancerous.",
      "Anyone who wants human safety data before injecting something — FDA states plainly it identified no clinical studies assessing the safety of Epitalon in humans. There is no established safe dose.",
      "Anyone considering subcutaneous injection specifically — FDA flagged a particular immunogenicity risk for that route, and no human has been studied on it.",
      "Anyone with insomnia who would use this instead of an evaluated treatment — FDA noted there are multiple FDA-approved products with established efficacy for insomnia.",
      "Pregnant or breastfeeding women and anyone under 18 — no data whatsoever.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times under WADA section S0 (non-approved substances) — Epitalon has no approval from any governmental health authority anywhere, so there is no ambiguity.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are actually trying to change — sleep, circadian rhythm, or a broader interest in longevity — and whether something else should be addressed first.",
      "Your personal and family cancer history, since the proposed mechanism is telomerase activation, and how we screen and monitor for that.",
      "Your history and current medications, including anything affecting sleep or hormone rhythm.",
      "Where the raw material comes from and against what standard it is tested — there is no pharmacopeial monograph for this compound.",
      "What we measure, on what schedule, and the point at which we stop.",
    ],
    whereThisStands: [
      "Never approved. Recommended in July 2026 for insomnia — not for the anti-ageing claims it is actually marketed for.",
      "The longevity claims rest on very thin evidence, mostly older and difficult to verify. It was reviewed for insomnia. It is sold for ageing. Those are not the same claim.",
    ],
    clinicalDetail: [
      "AEDG tetrapeptide reported in vitro to activate telomerase and maintain telomere length in human fetal fibroblasts, and in animals to modulate clock-gene expression and restore melatonin rhythm. FDA framed the same mechanism as the principal hazard: chronic exposure ‘by virtue of upregulating telomerase… could result in carcinogenicity.’ No human in vivo telomerase activation has been documented.",
      "Never FDA-approved for any indication, and not approved in Canada, Australia, the UK or across the EU; not recognised in major foreign pharmacopeias. Previously in Category 2 of FDA’s interim compounding policy; that nomination was withdrawn, re-nominated, and reviewed at the July 2026 PCAC — for insomnia, not anti-aging (FDA declined to evaluate the anti-aging uses for lack of information). FDA scientists recommended against listing; the committee voted narrowly (reported 7–5) to recommend inclusion. Advisory only. Named in a 2020 FDA warning letter as a bulk substance not eligible for 503A exemptions.",
    ],
  },

  {
    slug: "kisspeptin",
    name: "Kisspeptin",
    drugClass: "Reproductive signalling peptide (kisspeptin-10)",
    tier: "limited",
    chipSub:
      "Real hospital research exists — but it used kisspeptin-54 by IV drip. The form clinics dispense is kisspeptin-10 by injection, which has no published repeated-dosing trial for any marketed use.",
    category: "Sexual & reproductive health",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "Genuinely important biology, studied by serious researchers — but in a different molecule and route than what clinics sell. And it is explicitly named on the WADA list.",
    standfirst:
      "Kisspeptin sits at the very top of the reproductive hormone chain, and it has been studied in real clinical trials. The catch: those trials used kisspeptin-54 by IV drip in a hospital. Clinics sell kisspeptin-10 by injection — a different, much shorter-acting molecule.",
    whatItIs: [
      "Kisspeptin is a natural signalling peptide made in the hypothalamus that tells the brain to release GnRH, which drives LH and FSH, which tell the testes or ovaries to make testosterone or oestrogen. It has been studied at Imperial College London for fertility and low sexual desire.",
      "But those trials used kisspeptin-54, given by intravenous drip in a hospital. The form sold by peptide clinics is kisspeptin-10 — a different, much shorter-acting molecule — given as an injection under the skin.",
    ],
    uses: [
      { use: "Testosterone support / ‘natural TRT alternative’", tier: "limited", meaning: "Kisspeptin does stimulate the axis that makes testosterone, but the human studies measured short-term hormone responses to single doses — not sustained levels, symptoms or safety over time — and none used the kisspeptin-10 form clinics dispense." },
      { use: "Fertility support and ovulation triggering in IVF", tier: "human", meaning: "The strongest evidence for kisspeptin — three Phase 2 trials in 175 women showed high oocyte maturation and near-elimination of severe ovarian hyperstimulation — but all used kisspeptin-54 under specialist IVF supervision, not kisspeptin-10 from a wellness clinic." },
      { use: "Low sexual desire (HSDD)", tier: "limited", meaning: "Two small randomized crossover trials — 32 men and 32 women — showed changes in brain activity after a single 75-minute IV infusion; the investigators themselves call this proof-of-concept requiring larger studies." },
      { use: "Restoring reproductive function (amenorrhoea, PCOS)", tier: "human", meaning: "Active academic research areas, still investigational — no approved product exists for any of them." },
      { use: "Libido enhancement in people without a diagnosis", tier: "theoretical", meaning: "The trials enrolled people with a diagnosed disorder; nothing supports use in people without one." },
      { use: "Anti-aging / general hormone optimisation", tier: "theoretical", meaning: "No human evidence of any kind for these framings." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "Kisspeptin is the switch upstream of the switch. It acts on the brain to release the hormone that releases the hormones that drive your testes or ovaries — which is why it interests fertility doctors, and why it raises testosterone or oestrogen indirectly rather than replacing it.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Real but modest, and almost entirely in the wrong molecule and route for what is sold. The Imperial College programme ran the first-in-human studies (men 2005, women 2007). Published evidence: for HSDD, two crossover trials (32 men, 32 women) each given a single IV infusion of kisspeptin-54; for IVF, three Phase 2 trials totalling 175 women given subcutaneous kisspeptin-54.",
          "Total human exposure across the entire published literature is in the low hundreds, overwhelmingly single doses, overwhelmingly kisspeptin-54. There is no published trial of repeated or chronic kisspeptin-10 dosing in humans for any marketed use.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "Kisspeptin has been proven in clinical trials to boost sexual desire.", reality: "Two crossover trials of 32 people each received a single IV infusion of kisspeptin-54 in a research unit, with brain imaging as the outcome. The investigators call it ‘proof-of-concept.’ It is not a demonstration that a subcutaneous kisspeptin-10 injection improves anyone’s sex life over time." },
      { claim: "Kisspeptin-10 and kisspeptin-54 are basically the same thing.", reality: "They are not interchangeable. Their half-lives differ roughly ten-fold — ~3 minutes for KP10 versus ~28 minutes for KP54. Nearly all the encouraging human research used KP54. FDA’s Category 2 safety listing is specifically for kisspeptin-10." },
      { claim: "It’s a natural, safer alternative to TRT.", reality: "No trial has compared it to TRT, none has measured sustained testosterone or symptom outcomes, and FDA states it lacks the information to know whether kisspeptin-10 would cause harm. ‘Safer’ is not a claim anyone is in a position to make." },
      { claim: "It’s fine for athletes because it’s just a natural hormone.", reality: "It is specifically named on the WADA Prohibited List, section S2.2.1, prohibited at all times in males." },
    ],
    notFor: [
      "Athletes and anyone in tested sport must not use this — kisspeptin is explicitly named on the WADA Prohibited List.",
      "Anyone with a hormone-sensitive cancer — prostate, breast, ovarian, endometrial — should not take something whose purpose is to drive the sex-hormone axis upward.",
      "Anyone on a GnRH agonist or antagonist for prostate cancer, endometriosis, fibroids or precocious puberty, since kisspeptin works directly against that therapy.",
      "Anyone trying to conceive or on fertility treatment who is not under the care of a fertility specialist — kisspeptin can trigger ovulation, and using it outside a monitored cycle is unpredictable.",
      "Anyone with a hormone or pituitary disorder, since kisspeptin acts at the top of the axis and can disturb it in ways that are not well characterised.",
    ],
    dopingLine:
      "Competitive athletes: explicitly prohibited. The 2026 WADA Prohibited List names ‘Kisspeptin and its agonist analogues’ under S2.2.1, prohibited at all times in males — one of the few peptides here named by name rather than caught by the S0 catch-all.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are actually treating — libido, fertility, or hormone signalling — and what the evaluated options for that are.",
      "Whether you compete in tested sport. Kisspeptin is named on the WADA Prohibited List, and that ends the conversation.",
      "Your history: hormone-sensitive cancer, pituitary or hormone disorders, GnRH therapy, and any fertility treatment already under way.",
      "The difference between the form used in the published hospital trials and the form available to you, and what that means for expectations.",
      "What labs we check before and during, and the result that would make us stop.",
    ],
    whereThisStands: [
      "Never approved anywhere. The human research is real but early, mostly in controlled research settings.",
      "Being studied by serious researchers is not the same as being established as a treatment.",
    ],
    clinicalDetail: [
      "KISS1R (GPR54) agonist acting on hypothalamic GnRH neurons to stimulate pulsatile GnRH release. Kisspeptin-54 and kisspeptin-10 differ materially in PK — terminal half-life ~28 minutes for KP54 versus ~3 minutes for KP10. In fMRI studies of HSDD, kisspeptin-54 modulated activity in sexual-processing brain structures.",
      "Never FDA-approved for any indication, anywhere. Kisspeptin-10 is currently on FDA’s active Category 2 list — bulk substances used in 503A compounding that may present significant safety risks — added 29 September 2023 and still listed as of the 22 April 2026 update, with FDA stating it ‘lacks sufficient information to know whether the drug would cause harm when administered to humans.’ Not among the seven peptides reviewed at the July 2026 PCAC; its Category 2 listing remains active.",
    ],
  },
  {
    slug: "kpv",
    name: "KPV",
    drugClass: "Tripeptide fragment of alpha-MSH",
    tier: "animal",
    chipSub:
      "No study has ever been published in which a human being received KPV, by any route. The entire evidence base is cell-culture and mouse work.",
    category: "Inflammation & immune defense",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "Promising anti-inflammatory biology in mice and dishes — and zero human data. FDA searched and found no record of any person ever receiving it.",
    standfirst:
      "In laboratory dishes and in mice, KPV calms inflammatory signalling in the gut and skin. But no study has ever been published in which a human being received it — FDA searched and found none.",
    whatItIs: [
      "KPV is a three-amino-acid fragment of a natural hormone called alpha-MSH, which your body uses partly to control inflammation. In laboratory dishes and in mice, this small fragment calms inflammatory signalling in the gut and in skin.",
      "It is sold as capsules, injections and creams for gut inflammation, skin conditions and general anti-inflammatory use.",
    ],
    uses: [
      { use: "Inflammatory bowel disease, colitis, ‘leaky gut’", tier: "animal", meaning: "Mouse colitis studies — often using engineered nanoparticle delivery — are the entire evidence base; no person with IBD has been studied on KPV in a published trial." },
      { use: "Wound healing and inflammatory skin conditions (the use FDA reviewed)", tier: "animal", meaning: "The nominated indication for a 0.1% topical cream — and FDA concluded there is a lack of evidence to evaluate whether it works." },
      { use: "Eczema, psoriasis, acne, rosacea (topical)", tier: "animal", meaning: "Extrapolated from general anti-inflammatory activity in animal and cell models; no controlled human skin trial exists." },
      { use: "Antimicrobial and antifungal activity", tier: "animal", meaning: "Reported in laboratory cultures and animal models only, with no human infection trial." },
      { use: "Mast cell activation, histamine intolerance, allergy", tier: "theoretical", meaning: "A mechanistic guess with no animal or human study addressing these conditions specifically." },
      { use: "Pairing with BPC-157 for ‘gut repair’", tier: "theoretical", meaning: "No study has ever examined the combination in any species, let alone in people." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "Alpha-MSH is a natural off-switch for inflammation. KPV is the tail end of that hormone — the part thought to carry the anti-inflammatory signal without the parts that control skin pigment. In mouse colitis and cell culture it dampens the master inflammatory switch NF-κB and reduces inflammatory cytokines.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Zero. Not few — none. FDA searched both the nomination package and the published literature in 2026 and reported no information of any kind on KPV administered to humans by any route, and no record of human use of compounded KPV products. There is also no repeat-dose toxicology, and FDA stated it had no information with which to assess immunogenicity or aggregation. The entire literature is in-vitro and rodent.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "The FDA approved KPV in July 2026.", reality: "An advisory committee voted 8–6 to recommend adding it to the list of ingredients compounding pharmacies may use — for wound healing, as a topical cream. FDA’s own scientists recommended against it, the vote is non-binding, and the rulemaking that would give it effect has not happened." },
      { claim: "KPV gives you alpha-MSH’s anti-inflammatory benefit without the hormonal effects.", reality: "A reasonable hypothesis from animal and cell work that has never been checked in a human. FDA additionally considers KPV itself ‘not well-characterized,’ with inconsistent naming across suppliers." },
      { claim: "Oral KPV heals the gut lining.", reality: "The gut work is mouse colitis, much of it using engineered nanoparticle carriers precisely because plain oral peptides are broken down by stomach acid and enzymes into amino acids before they can act." },
      { claim: "It’s been used safely by clinics for years.", reality: "FDA looked for exactly this and found nothing — the extent of use in compounding is ‘unknown,’ and no human exposure data exists in the literature. Unrecorded use is not a safety record." },
    ],
    notFor: [
      "Nobody can tell you the safety profile of this compound, because no human has been studied — so any claim that KPV is ‘well tolerated’ is unsupported by data.",
      "Anyone pregnant, breastfeeding or trying to conceive — there is no reproductive or developmental toxicity data at all.",
      "Anyone with a history of severe allergic reaction or anaphylaxis, if an injectable is proposed — FDA said explicitly it had no information to assess KPV’s immunogenicity.",
      "Anyone with an active cancer diagnosis — this compound acts on melanocortin and immune signalling, never studied in a person with cancer.",
      "Anyone with an autoimmune or immune-mediated condition — modulating an already dysregulated immune system without data is a gamble.",
      "Anyone who would delay or replace a proven treatment for IBD or a skin condition with this — that is the concrete harm risk here.",
    ],
    dopingLine:
      "Competitive athletes: not named on the WADA list, but S0 prohibits any substance with no approval from any regulator anywhere — which describes KPV. A tested athlete should treat KPV as prohibited and not use it without a written ruling. Route (a topical) is not a loophole.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What is actually driving the inflammation, and whether a proven treatment for it should be in place first.",
      "Your history and current medications, particularly any autoimmune condition, cancer history, or severe allergy.",
      "Which form fits the target — capsule, injection or cream — and what is known about each.",
      "Who compounds it, whether it is free base or acetate, and what identity, purity, endotoxin and sterility testing was done on your batch.",
      "What it costs, over what period, what we measure, and the plan if nothing changes.",
    ],
    whereThisStands: [
      "Never approved. Recommended by an advisory panel in July 2026 for wound healing and inflammatory conditions — advisory, not approval.",
      "The evidence is animal and laboratory work. The July vote does not change what is known about whether it works in people.",
    ],
    clinicalDetail: [
      "Lys-Pro-Val, the α-MSH(11–13) fragment. Proposed mechanisms include NF-κB inhibition and, in intestinal epithelium, uptake via the PepT1 transporter upregulated in inflamed colonic tissue. All derived from in-vitro and rodent models; FDA characterises the identity itself as inadequately established.",
      "Never approved anywhere, for any indication, by any route. Not on the 503A Bulks List. Previously nominated and placed in Category 2; the nomination was withdrawn, and KPV now sits in FDA’s ‘nominated but withdrawn’ table: ‘FDA has not identified any human exposure data on drug products containing KPV… FDA lacks important information regarding any safety issues.’ Re-nominated and reviewed at the July 2026 PCAC — the nominated product was a 0.1% cream/gel, topical. FDA proposed against including it, finding it ‘not well-characterized’ with efficacy and safety information absent.",
    ],
  },
  {
    slug: "igf1-lr3",
    name: "IGF-1 LR3",
    drugClass: "Engineered long-acting IGF-1 analogue",
    tier: "animal",
    chipSub:
      "There is no published human study of IGF-1 LR3 at any dose, by any route, for any purpose. It was designed as a lab reagent, not a medicine — and it is among the more potent things in the catalogue.",
    category: "Growth hormone pathway",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "An engineered chimera built to bypass the body’s controls on IGF-1. Among the most potent things in the catalogue and among the least studied — both facts matter.",
    standfirst:
      "IGF-1 LR3 is not a peptide your body makes. It is a laboratory-engineered version of IGF-1, modified to bypass the binding proteins that normally hold IGF-1 in check. It was designed as a cell-culture reagent, not a medicine, and has never been through a published human study.",
    whatItIs: [
      "IGF-1 LR3 is a laboratory-engineered version of IGF-1 — the growth factor your liver makes when growth hormone tells it to — modified so it lasts longer and acts more freely: one amino acid swapped and a 13-amino-acid tail bolted on, stripping away most of its ability to be captured by the binding proteins that regulate IGF-1.",
      "It was designed as a research and cell-culture reagent, not a medicine, and it has never been through a published human study.",
    ],
    uses: [
      { use: "Muscle growth and hypertrophy", tier: "animal", meaning: "IGF-1 receptor signalling drives muscle protein synthesis in lab and animal models, but no human study of IGF-1 LR3 has ever measured muscle." },
      { use: "Fat loss", tier: "theoretical", meaning: "No human or convincing animal evidence that IGF-1 LR3 reduces body fat." },
      { use: "Faster healing of tendons, muscles and injuries", tier: "theoretical", meaning: "Extrapolated from growth-factor biology; never tested in people with IGF-1 LR3." },
      { use: "‘Site-specific’ growth where injected", tier: "theoretical", meaning: "No evidence for this, and it works against the molecule’s own design — the modifications exist precisely so it escapes local binding and circulates." },
      { use: "Anti-ageing and longevity", tier: "theoretical", meaning: "Not only untested, but pointing the wrong way: reduced IGF-1 signalling, not increased, is associated with extended lifespan in animal longevity models." },
      { use: "Improved insulin sensitivity or glucose control", tier: "animal", meaning: "The animal data show it suppresses insulin secretion rather than improving control — insulin fell 66% during a glucose challenge in fetal sheep." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "Normal IGF-1 circulates mostly bound to carrier proteins that release it slowly and in the right places. IGF-1 LR3 was built to dodge those carriers, so more of it is free to reach the IGF-1 receptor, and it stays active longer. Hitting that receptor tells cells to grow, make protein and resist dying — the intended anabolic effect, and also, unavoidably, the same instruction any cancer cell present would receive.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Zero. There is no published human study of IGF-1 LR3 at any dose, by any route, for any purpose — a June 2026 review grades it Tier D, ‘no peer-reviewed human studies,’ and no registered human trial exists. The published literature is animal work in fetal sheep.",
          "The only human safety evidence anywhere near this molecule is for a different molecule — mecasermin (INCRELEX), recombinant human IGF-1, approved in 2005 for a small orphan paediatric population. That should be read as a floor on the risks, not a ceiling: LR3 was engineered to be more potent and less restrained.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "It’s just IGF-1, and IGF-1 is something your body makes naturally.", reality: "It is not the IGF-1 your body makes. It is an engineered chimera with one amino acid swapped and a 13-residue tail added, built specifically to escape the binding proteins the body uses to regulate IGF-1. The whole point of the modification is to bypass a control system." },
      { claim: "It causes localised muscle growth where you inject it.", reality: "There is no human evidence for site-specific growth, and the molecule’s defining modification reduces local retention. This claim circulates in bodybuilding forums, not the literature." },
      { claim: "It’s approved — Increlex is IGF-1 and it’s FDA-approved.", reality: "INCRELEX is mecasermin, recombinant human IGF-1, approved for growth failure in a specific paediatric population. It is a different molecule for a different population. IGF-1 LR3 has no approval anywhere." },
      { claim: "It’s safer than growth hormone because it skips the pituitary.", reality: "Skipping the pituitary also means skipping the feedback loops that limit the signal. The two most serious concerns — hypoglycaemia and proliferation of existing cancer — live downstream at the IGF-1 receptor, which is exactly where this molecule acts." },
    ],
    notFor: [
      "Anyone with an active cancer, a history of cancer, or an undiagnosed lump — the approved recombinant IGF-1 product is contraindicated in malignancy, and IGF-1 receptor signalling is a direct proliferation signal.",
      "Anyone who cannot reliably monitor and treat low blood sugar — with the approved IGF-1 product, 42% of subjects had at least one hypoglycaemia episode, some severe with seizures or loss of consciousness.",
      "Anyone taking insulin or glucose-lowering medication, or who drinks alcohol, skips meals or trains fasted — all compound the hypoglycaemia risk.",
      "Any child or adolescent, or anyone with closed growth plates being told this will make them taller.",
      "Anyone pregnant, trying to conceive, or breastfeeding — there is no reproductive safety data.",
      "Anyone at all who wants to know what a safe dose is — nobody knows, because no human has been studied.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times. The 2026 WADA list, section S2.3, prohibits ‘IGF-1… and its analogues’ — IGF-1 LR3 is squarely an IGF-1 analogue. Treat it as a sanctionable substance.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are trying to achieve, and whether this is the right tool for it given how aggressive the compound is.",
      "Cancer screening and family history, since IGF-1 is a growth factor and this form escapes the body’s normal restraint on it.",
      "Your ability to recognise and treat low blood sugar, and any insulin or glucose-lowering medication, alcohol use or fasted training.",
      "Exactly what you would be given — IGF-1 LR3, DES(1-3) IGF-1 or recombinant IGF-1 are different molecules — and the certificate of analysis for your lot.",
      "What we measure, on what schedule, and the point at which we stop.",
    ],
    whereThisStands: [
      "Never approved, and not a peptide most clinics will prescribe. The evidence is animal and laboratory work; what is known about the risks — low blood sugar, organ enlargement, accelerating existing cancer — comes from the biology of IGF-1 itself rather than studies of this compound in people.",
      "This is among the more potent things in the catalogue and among the least studied. Both facts matter.",
    ],
    clinicalDetail: [
      "IGF-1 LR3 carries a Glu3-to-Arg substitution plus a 13-residue N-terminal extension, markedly reducing affinity for IGF binding proteins while retaining high affinity for the IGF-1 receptor, driving IRS-1/PI3K/Akt signalling with downstream mTOR activation. FDA’s substance record indicates the N-terminal extension derives from a porcine somatotropin sequence — a human-porcine chimera, an immunogenicity consideration no human study has addressed.",
      "Animal data are unflattering: an IGF-1 LR3 infusion in fetal sheep cut insulin during a hyperglycaemic clamp by 66%, and a one-week infusion in growth-restricted fetal sheep failed to improve growth. Never approved, anywhere, for any use, in humans or animals — and it has no compounding pathway of any kind (not on the 503A Bulks List, absent from all nomination categories, not even on FDA’s Category 2 or ‘nominated but withdrawn’ tables). The one approved IGF-1 product, INCRELEX (mecasermin), is a different molecule.",
    ],
  },
  {
    slug: "dsip",
    name: "DSIP",
    drugClass: "Delta Sleep-Inducing Peptide",
    tier: "limited",
    chipSub:
      "Roughly 130 people across five decades and every indication combined — all older studies, all intravenous. The injection route clinics sell has never been studied in a human.",
    category: "Longevity, sleep & circadian",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "A fifty-year-old ‘riddle’: science still can’t agree on its receptor or whether the body even makes it. It was the one peptide the July 2026 panel voted down.",
    standfirst:
      "DSIP was named in the 1970s for inducing deep ‘delta’ sleep — an effect later research struggled to confirm. Most human study was in the 1980s, in tiny groups, given intravenously. It is now sold as an injection under the skin, a route that has never been studied in a human being.",
    whatItIs: [
      "DSIP is a nine-amino-acid peptide first isolated in the 1970s from the blood of sleeping rabbits and named for the idea that it induced deep ‘delta’ sleep. It has never been approved as a medicine anywhere.",
      "Most of the human research was done in the 1980s, in tiny groups, given intravenously in a sleep lab. It is now sold by peptide clinics as an injection under the skin for sleep — a route that has never been studied in a human being.",
    ],
    uses: [
      { use: "Deep / slow-wave sleep enhancement and insomnia", tier: "limited", meaning: "Six published trials totalling ~60 people, all given the peptide intravenously; FDA concluded the results were ‘inconclusive and at best preliminary’ and that there is insufficient evidence to reach a conclusion on effectiveness." },
      { use: "Sleep onset without sedation", tier: "limited", meaning: "Rests on the same handful of tiny 1980s intravenous studies; nothing supports this for the injectable form sold today." },
      { use: "Opioid withdrawal", tier: "limited", meaning: "Two small uncontrolled studies, 67 people total, with no control group — no way to separate the peptide’s effect from the natural course of withdrawal." },
      { use: "Narcolepsy", tier: "limited", meaning: "The entire human evidence base is a single case report — one person." },
      { use: "Stress, blood-pressure normalisation, pain, anti-aging", tier: "theoretical", meaning: "Marketing claims not part of the FDA nomination, with no controlled human evidence behind them at all." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "DSIP was named for an effect — deep sleep — that later research struggled to confirm. Decades on, scientists still cannot agree on whether your body actually makes this peptide, what receptor it acts on, or how it would produce sleep. A 2006 peer-reviewed review is titled, accurately, ‘a still unresolved riddle.’",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Small, old, and delivered by the wrong route. FDA’s July 2026 briefing is the most complete accounting: for chronic insomnia, six trials with ~60 subjects total (n=6 to n=16), all intravenous; for narcolepsy, one case report; for opioid withdrawal, two small uncontrolled studies. That is roughly 130 people across five decades and every indication combined.",
          "FDA’s decisive finding: ‘There was no study evaluating effectiveness to support use of emideltide… via the nominated SC route of administration.’ Clinics dispense it subcutaneously. Not one human has been studied that way.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "DSIP is a natural sleep hormone your body already produces.", reality: "After fifty years, whether DSIP genuinely exists as a functional endogenous peptide in humans remains unresolved — one review is titled ‘a still unresolved riddle.’ ‘Natural’ is not an established fact here, let alone a safety argument." },
      { claim: "DSIP is clinically proven to increase deep, slow-wave sleep.", reality: "FDA reviewed the six existing trials — about 60 people total — and concluded the results were ‘inconclusive and at best preliminary,’ with small samples and inadequate controls." },
      { claim: "DSIP came out of the July 2026 FDA peptide review looking good.", reality: "The exact opposite. Six of the seven peptides reviewed were recommended. DSIP/emideltide was the only one the committee voted down — a panel that repeatedly overruled FDA’s own scientists for other peptides declined to do so for this one." },
      { claim: "It works without acting as a sedative, so it is gentle.", reality: "There is no established mechanism at all, sedative or otherwise. ‘Gentle’ is not a finding; it is an absence of data." },
    ],
    notFor: [
      "Anyone who wants to know what they are injecting — FDA found that specific tests for impurities, aggregates and endotoxins ‘were not found’ anywhere in the public record.",
      "Anyone offered a 1 mg/mL injectable should know FDA questioned whether it can even be made — the free base ‘has limited solubility in water,’ so the proposed concentration may not dissolve properly and may deliver an unpredictable dose.",
      "Anyone with an immune or allergic history — FDA flagged immunogenicity risk from aggregation and peptide-related impurities in subcutaneous formulations.",
      "Anyone with chronic insomnia, narcolepsy or opioid withdrawal who would use this instead of an evaluated treatment — approved products with established efficacy exist for all three.",
      "Pregnant or breastfeeding women and anyone under 18 — no data.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times under WADA section S0 (non-approved substances) — DSIP/emideltide has no approval from any governmental health authority.",
    questionsHeading: "What your consultation covers",
    questions: [
      "Whether your sleep problem has actually been evaluated — sleep apnoea, thyroid disease and depression all present as poor sleep and need treating on their own terms.",
      "Your history and current medications, particularly sedatives, sleep medication, and any immune or allergic history.",
      "What the existing human research measured, the route it used, and what that does and does not tell us about the injected form.",
      "Where the material comes from: which pharmacy, free base or acetate, and the certificate of analysis for your lot.",
      "How we will judge whether it is working, on what timeline, and the point at which we stop.",
    ],
    whereThisStands: [
      "Never approved anywhere; identified in the 1970s. Human research is old and sparse, decades old, not replicated to modern standards.",
      "A compound known about for fifty years with almost no modern trial data is telling you something.",
    ],
    clinicalDetail: [
      "No established receptor, no confirmed endogenous role, and no accepted mechanism of action after five decades. Original 1970s work described induction of delta EEG activity in rabbits; 1980s human trials produced inconsistent effects on sleep architecture.",
      "Never FDA-approved for any indication. FDA refers to DSIP as emideltide (a common name, not a USAN). Previously in Category 2; nomination withdrawn, re-nominated and reviewed at the July 2026 PCAC for opioid withdrawal, chronic insomnia and narcolepsy. FDA’s scientists recommended against listing — and, uniquely, the advisory committee agreed and voted it down. Not on the 503A Bulks List. Named in a 2020 FDA warning letter as a bulk substance not eligible for 503A exemptions.",
    ],
  },

  {
    slug: "aod9604",
    name: "AOD-9604",
    drugClass: "Growth hormone fragment (176-191)",
    tier: "human",
    chipSub:
      "Tested and failed. The pivotal 24-week trial (536 people) found no significant weight-loss difference from placebo, and development was terminated in 2007.",
    category: "Metabolic & fat loss",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "A nineteen-year-old failure, not an exciting new fat-loss peptide. Reasonably well tolerated, reasonably well studied — and the studies did not find the effect it is sold for.",
    standfirst:
      "The idea was elegant: isolate just the fat-burning tail of growth hormone. It was taken all the way through human testing — and in the pivotal trial it did not work. Development was discontinued in 2007.",
    whatItIs: [
      "AOD-9604 is a laboratory-made piece of human growth hormone — FDA describes it as ‘a synthetic fragment of human growth hormone (15 amino acids: 177-191) with an additional tyrosine at the N-terminal end.’ The 1990s idea was to isolate just the fat-burning tail without the blood-sugar and tissue-growth effects of the whole hormone.",
      "That hypothesis was tested in humans. In the pivotal trial it did not work, and the sponsor discontinued development in 2007. Everything sold today under this name — or as ‘HGH Fragment 176-191’ — has no approval anywhere, made outside any regulated supply chain, marketed for a purpose the drug itself failed to achieve.",
    ],
    uses: [
      { use: "Fat loss and weight loss", tier: "human", meaning: "Tested and failed — the pivotal 24-week randomized trial enrolled 536 people and, in FDA’s words, found ‘not a significant difference in the primary endpoint of weight loss between placebo and AOD-9604,’ after which the sponsor terminated development in 2007." },
      { use: "Targeted fat loss without GH’s side effects", tier: "animal", meaning: "The selectivity claim is real preclinical pharmacology from obese-mouse studies — but it is a claim about what the drug does NOT do, and it stops mattering once the drug also failed to produce the fat loss it was supposed to deliver." },
      { use: "Joint repair, cartilage regeneration, osteoarthritis", tier: "animal", meaning: "No human study for any joint condition; the supporting evidence is a 2015 injection study in a rabbit model, and FDA flagged a possible negative bone-health signal in rats running the opposite direction." },
      { use: "Osteoporosis and bone health", tier: "animal", meaning: "One of the two nominated indications, yet FDA’s review found dose-dependent osteocalcin changes in 6-month rat studies that ‘might represent negative effects on bone health’ — the animal data point toward harm, not benefit." },
      { use: "Injury recovery, tendon healing, performance", tier: "theoretical", meaning: "No human or animal study supports these; they migrated onto AOD-9604 from the recovery-peptide marketing vocabulary. It is prohibited in sport at all times." },
      { use: "Anti-aging, longevity, metabolic optimization", tier: "theoretical", meaning: "No trial has tested AOD-9604 against any aging or healthspan endpoint in any species." },
      { use: "Oral ‘fat burner’ capsules and topical creams", tier: "theoretical", meaning: "Oral is the route where it was actually tested and failed; for topical, FDA identified no human exposure data — so the cream is untested and the capsule is disproven." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "The tail end of growth hormone was identified in mouse work as the part associated with breaking down fat. AOD-9604 is a synthetic copy of that tail. In obese mice it reduced body fat without the blood-sugar problems of whole growth hormone, and without raising IGF-1. A clever idea — but in people, across six studies, the weight effects were tiny and inconsistent, the best result came from the lowest dose (a pattern usually indicating noise), and the definitive 24-week trial found no difference from placebo.",
          "Mechanism is a hypothesis about why something might work. A trial is a finding about whether it does. Here the trial was run and the answer was no.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Approximately 947 subjects across six company-sponsored studies — every one dosed orally or intravenously. There is no human exposure data at all for the subcutaneous injection or topical cream clinics dispense; FDA states this explicitly.",
          "The pivotal OPTIONS study (536 enrolled) found, in FDA’s words, ‘not a significant difference in the primary endpoint of weight loss between placebo and AOD-9604.’ Development was terminated in 2007. An independent review lists it in a table of drugs that failed Phase 2. The OPTIONS results appear never to have been published in a peer-reviewed journal — so the negative result is far less discoverable than the original mechanism papers.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "AOD-9604 is an exciting new fat-loss peptide.", reality: "It is a nineteen-year-old failure. The pivotal 24-week trial found no significant weight-loss difference from placebo and development was terminated in 2007. The claim comes from vendors, for whom a compound that was tested and abandoned is commercially indistinguishable from one that is merely early." },
      { claim: "AOD-9604 has FDA GRAS status, so it’s been recognized as safe.", reality: "A search of FDA’s GRAS inventory located no GRAS notice for AOD-9604. Even if one existed, GRAS is a food-additive concept about ingestion — it says nothing about an injected drug and is not an FDA approval. FDA’s actual position is that it ‘lacks sufficient information to know whether the drug would cause harm.’" },
      { claim: "It burns fat without the side effects of growth hormone.", reality: "The ‘without the side effects’ part comes from mouse studies. The ‘burns fat’ part failed in humans. A drug that reliably does not do the bad thing and also does not do the good thing is not selective — it is inactive." },
      { claim: "AOD-9604 is the same thing as HGH Fragment 176-191.", reality: "Sold interchangeably but not described identically — FDA characterises AOD-9604 as hGH 177–191 with an additional tyrosine (16 amino acids), while ‘HGH Fragment 176-191’ is catalogued separately. Which one is in a given vial is not knowable without a certificate of analysis." },
    ],
    notFor: [
      "Anyone wanting a reliable safety profile — FDA’s own words: it ‘lacks sufficient information to know whether the drug would cause harm when administered to humans,’ and it ‘identified serious adverse events that may be associated with AOD-9604, though causality is not clear.’",
      "Anyone offered it as a subcutaneous injection or topical cream — FDA found no human exposure data for either route; all human testing was oral or intravenous.",
      "Anyone with liver disease or abnormal liver tests — 9-month monkey studies showed periportal liver vacuolation at higher doses, which FDA noted can signal drug-induced liver injury.",
      "Anyone with osteoporosis, osteopenia or a fracture history — FDA found dose-dependent osteocalcin changes in 6-month rat studies, a signal of possible negative effects on bone health.",
      "Anyone who cannot confirm the source — FDA found available certificates of analysis lacked the impurity, aggregate and microbial testing needed to characterise the material.",
    ],
    dopingLine:
      "Competitive athletes: prohibited at all times — WADA issued a compound-specific statement that AOD-9604 ‘has not been approved for therapeutic use by any government health authority in the world’ and is captured by section S0. Detection assays have been published since 2015. There is no TUE pathway.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are trying to achieve, and what the human trial evidence for this compound actually shows — set out plainly.",
      "Your history: liver disease or abnormal liver tests, osteoporosis, osteopenia or fracture history, and any immune or allergic history.",
      "Which route is proposed, and the fact that human testing was oral and intravenous rather than injected or topical.",
      "Where the material comes from and the certificate of analysis for your lot.",
      "What we measure, on what timeline, and the point at which we stop.",
    ],
    whereThisStands: [
      "Never approved, and the largest trial failed. Tested in several hundred people, no significant weight loss versus placebo, development stopped.",
      "The safety record is actually the reassuring part — pooled data suggests it does not raise IGF-1 or disturb blood sugar the way growth hormone does. What does not hold up is the claim that it produces meaningful fat loss. Reasonably well tolerated, reasonably well studied, and the studies did not find the effect it is sold for.",
    ],
    clinicalDetail: [
      "AOD-9604 is Tyr-hGH(177–191): the 15-residue C-terminal domain of human somatotropin with an N-terminal tyrosine, a 16-amino-acid peptide. Preclinical rationale rests on 1990s rodent work; no validated human receptor target has been established and the mechanism in humans remains, in FDA’s assessment, unsupported by effectiveness data.",
      "Never approved anywhere — not a drug awaiting its moment, but one that was properly tested, failed, and was abandoned in 2007. Not on the 503A Bulks List. Formally nominated (dockets FDA-2015-N-3534 and FDA-2018-N-2973) for weight loss, osteoporosis and osteoarthritis. FDA’s FAERS/CAERS searches found no reports but cautioned this ‘does not imply that the substance is safe.’",
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    drugClass: "Endogenous tripeptide antioxidant",
    tier: "limited",
    chipSub:
      "FDA reviewed it against 24 proposed uses in 2022 and did not find adequate evidence for any of them. The largest, best-controlled trials were negative.",
    category: "Mitochondrial & cellular energy",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "Real, central biochemistry inside your cells — and a delivery problem outside them. Well tolerated is not the same as effective; both need to be true.",
    standfirst:
      "Glutathione is your body’s main internal antioxidant, made by every cell. It is marketed for almost everything by IV drip — but swallowed glutathione is barely absorbed and infused glutathione is cleared quickly, and FDA reviewed it against 24 uses in 2022 without finding adequate evidence for any.",
    whatItIs: [
      "Glutathione is a tiny protein of three amino acids that every cell manufactures for itself — the body’s main internal antioxidant and its principal tool for neutralising reactive by-products, including in the liver.",
      "Because levels drop in illness and with age, it has been marketed for skin lightening, detoxification, immunity, hangovers, Parkinson’s and chemotherapy side effects. Swallowed glutathione is barely absorbed, which is the argument used for IV drips, injections and nebulizers instead.",
    ],
    uses: [
      { use: "Skin lightening / brightening (the most-marketed IV use)", tier: "limited", meaning: "One placebo-controlled IV trial in 50 people found 37.5% lightening versus 18.7% on placebo, fading after treatment; FDA reviewers called the efficacy data ‘minimal and contradictory,’ and the Philippines and Thailand have acted against IV glutathione for this use." },
      { use: "‘Detox’ / liver support / hangover drips", tier: "theoretical", meaning: "No controlled trial supports it; the liver makes its own glutathione and an infusion is cleared from the blood quickly." },
      { use: "Acetaminophen (Tylenol) overdose", tier: "theoretical", meaning: "There is an approved antidote that works by restoring glutathione — IV N-acetylcysteine — but IV glutathione itself is not approved and not the standard of care." },
      { use: "Reducing chemotherapy side effects / neuropathy", tier: "limited", meaning: "The largest placebo-controlled trial (185 patients) showed no benefit in any subgroup, and ASCO guidance says agents including glutathione should not be offered to prevent chemotherapy-induced neuropathy." },
      { use: "Parkinson’s disease", tier: "limited", meaning: "A 21-patient randomized trial showed no significant difference, and the largest (a 45-patient phase IIb of intranasal glutathione) found neither treatment superior to placebo." },
      { use: "General antioxidant / oxidative stress", tier: "limited", meaning: "A 40-person oral trial versus placebo showed no significant change in any measure of oxidative stress." },
      { use: "Cystic fibrosis, asthma, COPD (nebulized)", tier: "limited", meaning: "A Cochrane review found no evidence to recommend nebulized glutathione, and inhaled use caused serious bronchoconstriction in trials." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "Glutathione works like a rechargeable sponge for reactive molecules — handing off a sulphur-bearing hydrogen to neutralise damaging by-products, with enzymes recharging it. It also helps the liver tag toxins for removal. All real biochemistry that happens inside your cells. The problem for the injected version is that glutathione put into your bloodstream is cleared quickly and does not straightforwardly reach the inside of cells — FDA specifically noted the rapid elimination.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Scattered and small across roughly two dozen proposed uses, with the largest, best-controlled trials negative: chemotherapy side effects (N=185, no benefit); Parkinson’s (no difference); oxidative stress (N=40 oral, no change). Most intravenous studies enrolled fewer than 50 people.",
          "There is no adequately powered trial demonstrating clinical benefit from IV glutathione for any condition, and FDA identified none in its 2022 review.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "Oral glutathione doesn’t absorb, so IV is the way to get it into your cells.", reality: "Only the first half holds up. FDA notes oral glutathione is minimally absorbed — but also that IV glutathione is rapidly eliminated. Getting it into the bloodstream is not the same as getting it into cells, and no trial has shown IV dosing raises intracellular glutathione in a way that changes an outcome." },
      { claim: "It’s the master antioxidant, so it detoxes your body.", reality: "Glutathione genuinely is central to your cells’ antioxidant chemistry. ‘Detox’ as a service is a marketing frame, not a clinical endpoint. FDA reviewed 24 proposed uses and found the evidence insufficient for all of them." },
      { claim: "Glutathione IV is the treatment for Tylenol overdose, so it must be powerful.", reality: "The approved antidote is IV N-acetylcysteine, which supplies cysteine so your liver can rebuild its own glutathione. IV glutathione is not the approved treatment for acetaminophen toxicity." },
      { claim: "An FDA advisory panel voted for it, so it’s been cleared.", reality: "The June 2022 panel voted 8–5–1 to add glutathione to the compounding bulks list — over FDA’s own recommendation against it. Four years on, FDA has not adopted that vote and glutathione is not on the list. A compounding-list vote is not a finding of effectiveness." },
    ],
    notFor: [
      "Anyone with asthma or reactive airways considering nebulized glutathione — trials recorded severe wheezing, breathlessness, facial palsy and coughing up blood, with high dropout rates.",
      "Anyone with a history of anaphylaxis or severe drug allergy — FDA has two recorded anaphylaxis cases after IV glutathione, one recurring on re-exposure.",
      "Anyone with liver disease or abnormal liver tests — FDA recorded hepatotoxicity (AST 26×, ALT 22× the upper limit at 1,200 mg weekly), resolving after stopping.",
      "Anyone who cannot confirm the source and endotoxin testing — a 2019 FDA alert and a January 2026 warning letter both involved contaminated or mislabelled compounded product.",
      "Anyone seeking it for skin lightening — regulators in the Philippines and Thailand have warned against or banned IV glutathione for whitening, citing Stevens-Johnson syndrome, toxic epidermal necrolysis and anaphylaxis.",
      "Anyone on chemotherapy — one study found reduced neurotoxicity but also lowered blood levels of the chemotherapy drug itself; involve your oncologist before any antioxidant infusion.",
    ],
    dopingLine:
      "Competitive athletes: glutathione itself is not named on the WADA list, but USADA’s rule is volume-based — IV infusions over 100 mL in a 12-hour period are prohibited regardless of contents. A typical drip in 250–500 mL of saline breaks the rule; a small-volume push under 100 mL would not. Confirm on Global DRO.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are trying to achieve, and whether the route proposed can plausibly deliver it — oral is poorly absorbed and IV is cleared quickly.",
      "Your history: asthma or reactive airways, anaphylaxis or severe drug allergy, liver disease, pregnancy, and any chemotherapy under way.",
      "Your liver enzymes before and during treatment.",
      "Where the product comes from and its endotoxin and sterility testing — contamination has been the recurring problem with compounded glutathione.",
      "What we do if you have an infusion reaction, what we measure, and the point at which we stop.",
    ],
    whereThisStands: [
      "Not approved for the uses it is marketed for. Injectable and IV glutathione is widely offered for skin brightening, detox and wellness — none an FDA-approved use — and regulators in several countries have warned about injectable skin-lightening products specifically.",
      "Well tolerated is not the same as effective. Both need to be true.",
    ],
    clinicalDetail: [
      "Reduced glutathione (GSH) is the dominant intracellular thiol redox buffer and a cofactor for glutathione peroxidases and S-transferases. FDA characterises the substance itself as well characterised and stable, but the unresolved issue is delivery: oral is minimally absorbed and IV is rapidly eliminated, so neither route has been shown to raise intracellular GSH in a way that produces clinical benefit.",
      "Never FDA-approved for any indication, by any route — there is no glutathione drug product in the US; injectable/nebulized/IV forms are compounded only, oral is a supplement. It sits in ‘Category 1 — Under Evaluation’ on both 503A and 503B lists (interim enforcement discretion, expressly not approval and not a safety finding), and is not on the 503A Bulks List or the Category 2 safety-risk list. Its advisory hearing was 8 June 2022, where FDA’s scientists recommended against it and the committee voted 8–5–1 to add it anyway.",
    ],
  },
  {
    slug: "5-amino-1mq",
    name: "5-Amino-1MQ",
    drugClass: "Small-molecule NNMT inhibitor — not a peptide",
    tier: "animal",
    chipSub:
      "There is no human study of any kind — zero. The entire evidence base is a single 11-day proof-of-concept experiment in obese mice. Anyone taking it is the study.",
    category: "Metabolic & fat loss",
    status: "PUBLISHED",
    updated: "2026-08-21",
    summary:
      "Not actually a peptide — a small synthetic molecule sold on peptide menus. Everything claimed rests on rodent research; no human has ever been studied.",
    standfirst:
      "A correction that matters: 5-Amino-1MQ is not a peptide. It is a small synthetic chemical sold on peptide menus because that is the market it is sold into. There is no human study — zero. The entire evidence base for the fat-loss claim is one 11-day experiment in obese mice.",
    whatItIs: [
      "5-Amino-1MQ is a small synthetic chemical — a quinolinium molecule, usually supplied as an iodide salt — that gets sold on peptide menus and described in peptide vocabulary because that is the market it is sold into. It contains no amino acids and no peptide bonds.",
      "It was designed in 2017 as a tool to block NNMT, an enzyme unusually active in the fat tissue of obese animals. When obese mice were injected for eleven days, they lost about 5% of body weight without eating less. That is the whole story — there is no human study. Nobody has published what this compound does in a person, at any dose, by any route.",
    ],
    uses: [
      { use: "Fat loss and weight loss", tier: "animal", meaning: "The single supporting study injected obese mice for eleven days and saw ~5.1% weight loss with ~35% reduction in one fat pad and no change in food intake — a rodent proof-of-concept never repeated in a human." },
      { use: "Raising NAD+ / cellular energy", tier: "animal", meaning: "The proposed mechanism, not a measured human outcome — no study has ever measured NAD+ levels in a person given 5-Amino-1MQ." },
      { use: "Building or preserving muscle", tier: "animal", meaning: "Explored in animal models; no human has been studied and no muscle outcome has ever been measured in a person taking it." },
      { use: "Improving insulin sensitivity / metabolic syndrome", tier: "animal", meaning: "Supportive findings come from mouse studies including knockdown models, with no human metabolic data of any kind." },
      { use: "Anti-aging and longevity", tier: "theoretical", meaning: "No study in any species has tested it against a lifespan or healthspan endpoint; the framing is extrapolated from the general NAD+/aging association." },
      { use: "Oral capsules as an effective delivery route", tier: "theoretical", meaning: "Every efficacy result comes from injection in mice; no oral absorption or exposure data in humans exists — so the most commonly sold form is the least supported." },
      { use: "Cancer prevention or treatment", tier: "theoretical", meaning: "NNMT is a legitimate oncology research target — which cuts both ways: no human cancer trial exists, and the consequences of chronically inhibiting a methylation-cycle enzyme in a person are entirely unmeasured." },
    ],
    evidence: [
      {
        heading: "How it works",
        paras: [
          "An enzyme called NNMT tags nicotinamide (a form of vitamin B3 used to build NAD+) for disposal. In obese animals, fat tissue makes far too much NNMT. 5-Amino-1MQ blocks it — in theory leaving more nicotinamide available and letting fat cells burn energy again.",
          "But NNMT is not only in fat tissue — it is abundant in the liver and throughout the body, sitting at the junction of NAD+ production and methylation (how cells switch genes on and off). Blocking it long-term does not do one clean thing; it shifts a hub. What that shift does in a living human over months has never been measured.",
        ],
      },
      {
        heading: "What the research actually looked at",
        paras: [
          "Zero. Not ‘limited’ — zero. A PubMed search for the exact term returns no results; the full chemical name returns three records, all preclinical (mice or cell lines). No registered human trial could be located: no phase 1 safety study, no pharmacokinetics, no dose-finding, no case series, no post-market surveillance.",
          "For scale: semaglutide has more than 50,000 randomized trial participants; even AOD-9604 (a failure) has ~947 human subjects. 5-Amino-1MQ has none. Anyone taking it is not taking an under-studied drug — they are the study. Every page claiming ‘human clinical trials’ traces to a vendor or an AI-generated directory and must not be repeated.",
        ],
      },
    ],
    misunderstandings: [
      { claim: "5-Amino-1MQ is a peptide.", reality: "It is not. It is a small synthetic molecule (5-amino-1-methylquinolinium) with no amino acids and no peptide bonds. The error is propagated across the market that sells it and matters because the compound is being reasoned about and consented for under the wrong pharmacological class." },
      { claim: "Human clinical trials show 5-Amino-1MQ produces fat loss.", reality: "There are no human clinical trials. PubMed returns zero for the term and three (all animal/cell) for its chemical name. Every page asserting human results traces back to a company selling the compound — marketing documents, not evidence." },
      { claim: "It’s a NAD+ booster, like NMN or NR.", reality: "Different mechanism entirely. NMN and NR are precursors — you supply raw material. 5-Amino-1MQ blocks an enzyme that disposes of a precursor, and also affects the methylation cycle. Conflating them imports the (already contested) safety familiarity of NAD+ precursors onto a compound with no human data at all." },
      { claim: "The mouse studies showed dramatic fat loss.", reality: "They showed ~5.1% body-weight loss over eleven days, in mice deliberately made obese, given injections at ~34 mg/kg/day. The authors called it a ‘sub-chronic proof-of-concept.’ The ~35% figure refers to one specific fat depot in mice, not a person’s body fat." },
    ],
    notFor: [
      "Everyone, for a straightforward safety read: there is no published human safety study of any kind — no phase 1, no case series, no pharmacokinetics, no adverse-event surveillance. Any clinic that gives you a specific safety profile is telling you something the literature does not contain.",
      "Anyone expecting a known safe dose or route — there is no human dose-finding study; the only dosing that ever produced a documented effect was injection at ~34 mg/kg/day in mice for eleven days.",
      "Anyone pregnant, who might become pregnant, or breastfeeding — no reproductive or developmental data in any relevant species.",
      "Anyone with a current or previous cancer — NNMT is an active cancer research target elevated in several tumour types; the effect of blocking it systemically in a person with cancer is genuinely unknown and could run either direction.",
      "Anyone with liver disease or abnormal liver tests — NNMT is highly expressed in the liver, and there is no human hepatic safety data.",
      "Anyone on prescription medication, or with a methylation/homocysteine condition or on methyl-donor therapy — the compound acts directly on the nicotinamide methylation step, with no human drug-interaction data whatsoever.",
    ],
    dopingLine:
      "Competitive athletes: treat as prohibited. WADA has not issued a compound-specific ruling, and it is not named on the list — but S0 captures any substance with no approval from any health authority, which describes this one. Assume prohibited status, do not use it, and verify at GlobalDRO.",
    questionsHeading: "What your consultation covers",
    questions: [
      "What you are trying to achieve, and which evaluated options should be considered alongside or instead.",
      "Your history: cancer, liver disease or abnormal liver tests, pregnancy or plans to conceive, and every prescription medication you take.",
      "The route question — the animal work used injection, the product sold is a capsule — and what that means for expectations.",
      "Who manufactures the material, what salt form it is, and the certificate of analysis for identity, purity and potency.",
      "What we measure, on what timeline, and the point at which we stop.",
    ],
    whereThisStands: [
      "Never approved, and not actually a peptide — a small synthetic molecule despite being sold alongside peptides.",
      "The evidence is animal and cell work. No published human trial has measured whether it changes body composition in people. Everything claimed rests on rodent research.",
    ],
    clinicalDetail: [
      "5-Amino-1MQ is a membrane-permeable, methylquinolinium-scaffold small-molecule inhibitor of NNMT (EC 2.1.1.1). The therapeutic hypothesis is that NNMT overexpression in white adipose tissue in obesity depletes the nicotinamide salvage pool for NAD+ biosynthesis and consumes S-adenosylmethionine, and that inhibition restores adipocyte NAD+ and SAM and de-represses energy expenditure. No validated human receptor engagement or exposure data exists.",
      "Not FDA-approved for anything, and further from any regulatory pathway than almost any compound in this category — never approved, never withdrawn, never submitted. On no FDA bulks list (503A or 503B), not on the Category 2 safety-risk list, and not even nominated for compounding. Not among the seven peptides addressed at the July 2026 PCAC.",
    ],
  },
];

export function publishedPeptides() {
  return PEPTIDES.filter((p) => p.status === "PUBLISHED");
}
export function getPeptide(slug: string) {
  return PEPTIDES.find((p) => p.slug === slug);
}
