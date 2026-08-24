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

  // PLANNED — reviewed source material on file (site-content/peptide-pages);
  // full page content transcribed in per the template before each is PUBLISHED.
  ...(
    [
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
