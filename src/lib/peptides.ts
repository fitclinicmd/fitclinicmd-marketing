// PEPTIDE EDUCATION LIBRARY — generated from the approved FitClinicMD source
// documents (Single Peptide Education / Short + the Peptide Index Update List,
// 2026-08-25). Do not hand-edit entries: re-run the generator against the source
// PDFs so the site and the approved copy cannot drift apart.
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
// "not an FDA-approved medicine" footer.

export type PeptideUse = { use: string; inShort: string };
/** A related peptide. `slug` always resolves — every name in the source
 *  documents maps to a peptide in this library, and the generator fails if one
 *  does not. Rendered as a link that opens in a new tab. */
export type PeptidePair = { name: string; reason: string; slug: string };

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

/** Approved long-form review, opened in a new tab. */
export function fullReviewUrl(slug: string): string {
  return `/education/peptides/${slug}.pdf`;
}

export const PEPTIDES: Peptide[] = [
  {
    slug: "5-amino-1mq",
    name: "5-Amino-1MQ",
    subtitle: "Small-molecule nnmt inhibitor",
    category: "Metabolic & Fat Loss",
    oneLiner: "A go-to for people wanting to nudge their metabolism higher.",
    intro: [
      "5-Amino-1MQ is a small synthetic molecule, not a peptide, designed to influence an enzyme involved in fat metabolism. It is sold as an oral capsule and used by people interested in fat loss and metabolic support.",
    ],
    uses: [
      { use: "Fat loss and weight loss", inShort: "The primary use it is marketed for, tied to fat-cell metabolism." },
      { use: "Insulin sensitivity and metabolic health", inShort: "The enzyme it targets is tied to how fat tissue handles blood sugar." },
      { use: "Cellular energy and NAD+", inShort: "Proposed to leave more of a key energy-building block available to cells." },
    ],
    notFor: [
      "Anyone who is pregnant, might become pregnant, or is breastfeeding.",
      "Anyone with a current or previous cancer, without their oncologist’s input.",
      "Anyone with liver disease or abnormal liver tests.",
      "Anyone taking prescription medication, without a review first.",
    ],
    wada: "Competitive athletes: 5-Amino-1MQ is not currently named on the WADA Prohibited List.",
    pairsWith: [
      { name: "AOD-9604", slug: "aod9604", reason: "shares a focus on fat metabolism through a separate pathway." },
      { name: "MOTS-c", slug: "mots-c", reason: "both relate to mitochondrial and cellular energy signaling." },
      { name: "NAD+", slug: "nad", reason: "ties into the same cellular-energy building blocks this compound is thought to affect." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "aod9604",
    name: "AOD-9604",
    subtitle: "Growth hormone fragment (176-191)",
    category: "Metabolic & Fat Loss",
    oneLiner: "Popular among people looking to target stubborn fat.",
    intro: [
      "AOD-9604 is a lab-made piece of human growth hormone, isolating the region thought to be involved in fat metabolism. It is used by people interested in fat loss and, more recently, joint support.",
    ],
    uses: [
      { use: "Fat loss and weight loss", inShort: "Went through the largest human trial in this category; details are in the full review." },
      { use: "Fat loss without growth hormone’s other effects", inShort: "Designed for selectivity, without raising blood sugar or IGF-1 the way growth hormone does." },
      { use: "Joint and cartilage support", inShort: "A newer, less-studied use." },
    ],
    notFor: [
      "Anyone with liver disease or abnormal liver tests.",
      "Anyone with osteoporosis, osteopenia or a fracture history.",
      "Anyone being offered it as a cream or a capsule.",
      "Anyone with an immune or allergic history, if an injectable is proposed.",
    ],
    wada: "Competitive athletes: AOD-9604 falls within WADA’s S2 category and is prohibited at all times.",
    pairsWith: [
      { name: "Semaglutide", slug: "semaglutide", reason: "complements incretin-driven weight loss from a different angle." },
      { name: "5-Amino-1MQ", slug: "5-amino-1mq", reason: "shares an interest in metabolic energy expenditure." },
      { name: "MOTS-c", slug: "mots-c", reason: "works through a related mitochondrial metabolic pathway." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    subtitle: "Glp-1 receptor agonist",
    category: "Metabolic & Fat Loss",
    oneLiner: "Widely known for steady, sustained weight loss.",
    intro: [
      "Semaglutide is a lab-made copy of a natural gut hormone, GLP-1, modified to remain active for about a week instead of minutes. It is a fully FDA-approved medicine. It is used by people managing type 2 diabetes, long-term weight management, and cardiovascular risk reduction.",
    ],
    uses: [
      { use: "Type 2 diabetes", inShort: "An approved use, studied in large placebo-controlled trials." },
      { use: "Long-term weight management", inShort: "Approved for adults, and adolescents 12 and older, with obesity." },
      { use: "Reducing cardiovascular events", inShort: "Shown to lower heart attack, stroke, and cardiovascular death risk." },
    ],
    notFor: [
      "Anyone with a personal or family history of medullary thyroid cancer, or MEN 2.",
      "Anyone with a serious allergic reaction to semaglutide or its ingredients.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
      "Anyone with a history of pancreatitis or gallbladder disease, without discussing it first.",
    ],
    wada: "Competitive athletes: Not currently prohibited, though semaglutide is on WADA’s Monitoring Program.",
    pairsWith: [
      { name: "Ipamorelin", slug: "ipamorelin", reason: "helps preserve lean muscle mass while the weight comes off." },
      { name: "Tesamorelin", slug: "tesamorelin", reason: "adds targeted visceral-fat and lean-mass support through the growth-hormone axis." },
      { name: "AOD-9604", slug: "aod9604", reason: "works through a separate, fat-cell-specific metabolic pathway." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    subtitle: "Dual gip and glp-1 receptor agonist",
    category: "Metabolic & Fat Loss",
    oneLiner: "Talked about for delivering some of the strongest weight-loss results available.",
    intro: [
      "How it differs from Semaglutide: Tirzepatide activates two gut hormones, GIP and GLP-1, instead of one, and produced greater average weight loss in a 72-week head-to-head trial of about 750 people — roughly 20% versus 14% of body weight, each at its approved dose.",
      "Tirzepatide is a lab-made molecule that activates two natural gut hormones released after eating, GIP and GLP-1, engineered to remain active for about a week between doses. It is a fully FDA- approved medicine. It is used by people managing type 2 diabetes, chronic weight management, and moderate-to-severe obstructive sleep apnea.",
    ],
    uses: [
      { use: "Type 2 diabetes", inShort: "One of three approved uses, alongside standard diabetes care." },
      { use: "Chronic weight management", inShort: "Approved for adults with obesity or a weight-related condition." },
      { use: "Moderate-to-severe obstructive sleep apnea", inShort: "The newest approved use, studied in adults with obesity." },
    ],
    notFor: [
      "Anyone with a personal or family history of medullary thyroid cancer, or MEN 2.",
      "Anyone with a serious allergic reaction to tirzepatide or any ingredient in the product.",
      "Pregnant or breastfeeding patients, or anyone actively trying to conceive.",
    ],
    wada: "Competitive athletes: Not currently prohibited by WADA or USADA; a related compound in this class is",
    pairsWith: [
      { name: "Ipamorelin", slug: "ipamorelin", reason: "helps preserve lean muscle mass during the weight loss." },
      { name: "Tesamorelin", slug: "tesamorelin", reason: "adds visceral-fat and lean-mass support through the growth-hormone axis." },
      { name: "AOD-9604", slug: "aod9604", reason: "targets fat metabolism through a separate, fat-cell-specific pathway." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    subtitle: "Growth hormone-releasing hormone analogue",
    category: "Growth Hormone & Anabolic Signaling",
    oneLiner: "Known for a longer, steadier growth-hormone lift.",
    intro: [
      "CJC-1295 is a lab-made analogue of a natural brain hormone, GHRH, that exists in two forms — with and without an added chemical anchor called DAC that extends how long it stays active. It is used by people interested in growth hormone support, usually as part of a nightly routine.",
    ],
    uses: [
      { use: "Raising growth hormone and IGF-1 levels", inShort: "Established for the with-DAC form, which stays active for about a week per dose." },
      { use: "Body composition, fat loss, or recovery", inShort: "The reason most people use it, alongside a released growth hormone pulse." },
      { use: "Combined with ipamorelin or other secretagogues", inShort: "A common pairing intended to combine two release pathways." },
    ],
    notFor: [
      "Anyone with known coronary artery disease, a prior heart attack, or significant cardiac risk factors.",
      "Anyone with active cancer, a cancer history, or an unscreened suspicious finding.",
      "Anyone with diabetes, prediabetes, or unstable blood sugar.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
    ],
    wada: "Competitive athletes: CJC-1295 is prohibited at all times under the WADA Prohibited List.",
    pairsWith: [
      { name: "Ipamorelin", slug: "ipamorelin", reason: "the standard clinical growth-hormone-releasing pairing." },
      { name: "BPC-157", slug: "bpc-157", reason: "commonly considered alongside it for recovery support." },
      { name: "Semaglutide", slug: "semaglutide", reason: "adds lean-mass support alongside incretin-driven weight loss." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "igf1-lr3",
    name: "IGF-1 LR3",
    subtitle: "Engineered long-acting igf-1 analogue",
    category: "Growth Hormone & Anabolic Signaling",
    oneLiner: "Talked about for its role in muscle growth and recovery.",
    intro: [
      "IGF-1 LR3 is an engineered, long-acting version of IGF-1, the growth factor the liver produces when growth hormone signals it to. It is used by people interested in muscle growth and recovery, and is among the more aggressive compounds in this category.",
    ],
    uses: [
      { use: "Muscle growth and hypertrophy", inShort: "The primary use it is marketed for." },
      { use: "Faster healing of tendons, muscles and injuries", inShort: "Extends the mechanism beyond what has been directly tested." },
      { use: "Site-specific growth where it is injected", inShort: "A widely repeated claim; a circulating hormone does not stay localized to an injection site." },
    ],
    notFor: [
      "Anyone with an active cancer, a history of cancer, or an undiagnosed lump or symptom.",
      "Anyone who cannot reliably recognise and treat low blood sugar.",
      "Anyone taking insulin or any glucose-lowering medication, or who trains fasted or drinks alcohol.",
      "Anyone pregnant, trying to conceive, or breastfeeding, and any child or adolescent.",
    ],
    wada: "Competitive athletes: IGF-1 LR3 falls within WADA’s S2 category and is prohibited at all times.",
    pairsWith: [
      { name: "Ipamorelin", slug: "ipamorelin", reason: "a complementary growth-hormone pulse upstream of this compound’s own pathway." },
      { name: "BPC-157", slug: "bpc-157", reason: "shares an interest in tissue repair." },
      { name: "TB-500", slug: "tb-500", reason: "both relate to connective-tissue recovery." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    subtitle: "Selective growth hormone secretagogue",
    category: "Growth Hormone & Anabolic Signaling",
    oneLiner: "Popular for a clean, gentle growth-hormone boost.",
    intro: [
      "Ipamorelin is a short synthetic peptide that acts at the ghrelin receptor in the pituitary gland, prompting a pulse of the body’s own growth hormone rather than supplying it directly. It is used by people interested in body composition, recovery, and sleep quality, usually taken at night.",
    ],
    uses: [
      { use: "Releasing your own growth hormone", inShort: "The one effect measured directly — it does what it is designed to do." },
      { use: "Lean mass and body composition", inShort: "Follows from the growth hormone rise." },
      { use: "Sleep quality and recovery", inShort: "Commonly reported and consistent with the mechanism." },
    ],
    notFor: [
      "Anyone with an active or recent cancer.",
      "Anyone with diabetes or prediabetes.",
      "Anyone pregnant, trying to conceive, or breastfeeding.",
      "Children and adolescents whose growth plates are still open.",
    ],
    wada: "Competitive athletes: Growth hormone-releasing peptides fall within WADA’s S2 category and are",
    pairsWith: [
      { name: "Semaglutide", slug: "semaglutide", reason: "helps preserve lean mass during weight loss." },
      { name: "Tesamorelin", slug: "tesamorelin", reason: "shares an interest in visceral-fat reduction through the growth-hormone axis." },
      { name: "BPC-157", slug: "bpc-157", reason: "commonly considered alongside it for recovery support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    subtitle: "Growth hormone-releasing hormone analogue",
    category: "Growth Hormone & Anabolic Signaling",
    oneLiner: "Known for encouraging the body's own natural growth-hormone rhythm.",
    intro: [
      "Sermorelin is a lab-made copy of a natural brain hormone, GHRH, which signals the pituitary gland to release its own growth hormone in short bursts. It is used by people interested in growth hormone support, typically as a nightly injection.",
    ],
    uses: [
      { use: "Adult GH optimization, body composition", inShort: "Studied for fat and lean-mass changes." },
      { use: "Cognitive function", inShort: "A less-studied, secondary area of interest." },
      { use: "Recovery, sleep, and general wellness", inShort: "Commonly reported alongside the growth hormone pulse." },
    ],
    notFor: [
      "Anyone whose growth hormone deficiency originates at the pituitary itself, or from a known or suspected pituitary lesion.",
      "Anyone with prediabetes, diabetes, or insulin resistance.",
      "Anyone with active cancer or a recent cancer history.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
    ],
    wada: "Competitive athletes: Sermorelin is prohibited at all times under WADA’s growth hormone-releasing",
    pairsWith: [
      { name: "Semaglutide", slug: "semaglutide", reason: "adds lean-mass support alongside incretin-driven weight loss." },
      { name: "Ipamorelin", slug: "ipamorelin", reason: "a complementary growth-hormone pulse through a related pathway." },
      { name: "BPC-157", slug: "bpc-157", reason: "commonly considered alongside it for recovery support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    subtitle: "Growth hormone-releasing hormone analogue",
    category: "Growth Hormone & Anabolic Signaling",
    oneLiner: "A favorite for targeting stubborn visceral fat.",
    intro: [
      "Tesamorelin is a lab-made copy of a natural brain hormone that prompts the pituitary gland to release growth hormone, targeted specifically at visceral fat. It is a fully FDA-approved medicine for one narrow use — excess abdominal fat in HIV-associated lipodystrophy — and is not intended for general weight loss.",
    ],
    uses: [
      { use: "Excess visceral fat in HIV- associated lipodystrophy", inShort: "The approved use; visceral fat down 11–15% versus placebo in trials." },
      { use: "Liver fat in HIV patients with fatty liver disease", inShort: "A related use studied in the same patient population." },
      { use: "Cognitive function", inShort: "A newer, less-studied area of interest." },
    ],
    notFor: [
      "Anyone with disruption of the pituitary gland or its signaling.",
      "Anyone with active cancer or a cancer history.",
      "Pregnant patients, or anyone with a known hypersensitivity to the medicine.",
      "Anyone with diabetes or unstable blood sugar, without discussing it first.",
    ],
    wada: "Competitive athletes: Tesamorelin is named on the WADA Prohibited List and is prohibited at all",
    pairsWith: [
      { name: "Semaglutide", slug: "semaglutide", reason: "adds lean-mass support alongside incretin-driven weight loss." },
      { name: "Ipamorelin", slug: "ipamorelin", reason: "a complementary growth-hormone pulse through a related pathway." },
      { name: "MOTS-c", slug: "mots-c", reason: "shares an interest in metabolic signaling." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    subtitle: "Endogenous tripeptide antioxidant",
    category: "Mitochondrial & Cellular Energy",
    oneLiner: "A go-to antioxidant for skin brightening and overall wellness.",
    intro: [
      "Glutathione is a tiny protein every cell manufactures for itself, the body’s main internal antioxidant. Swallowed glutathione is broken down before it can be absorbed intact, so it is given by injection, IV, or nebulizer instead. It is used by people interested in skin tone, oxidative stress, and general recovery.",
    ],
    uses: [
      { use: "General antioxidant and oxidative stress", inShort: "The underlying use tied to its natural role in the body." },
      { use: "Skin tone and brightening", inShort: "The most-marketed use." },
      { use: "Chemotherapy side effects and neuropathy", inShort: "Studied as an add-on in oncology, alongside an oncologist’s input." },
    ],
    notFor: [
      "Anyone with asthma or reactive airways, where an inhaled or nebulised form is proposed.",
      "Anyone with a history of anaphylaxis or severe drug allergy.",
      "Anyone with liver disease or abnormal liver tests.",
      "Pregnant or breastfeeding patients, and anyone on chemotherapy without involving their oncologist.",
    ],
    wada: "Competitive athletes: Glutathione itself is not prohibited by WADA; large-volume IV infusions fall",
    pairsWith: [
      { name: "NAD+", slug: "nad", reason: "shares a focus on cellular energy and antioxidant balance." },
      { name: "SS-31", slug: "ss-31", reason: "both relate to protecting mitochondrial function." },
      { name: "Epitalon", slug: "epitalon", reason: "commonly paired for antioxidant, longevity-adjacent support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    subtitle: "Mitochondrial dna-encoded peptide",
    category: "Mitochondrial & Cellular Energy",
    oneLiner: "A rising favorite for cellular energy and metabolic support.",
    intro: [
      "MOTS-c is a small peptide encoded by mitochondrial DNA rather than the body’s usual genetic blueprint, part of a recently discovered family of signals that let mitochondria communicate with the rest of the cell. It is used by people interested in metabolic health, weight and body composition, and exercise recovery.",
    ],
    uses: [
      { use: "Metabolic health and insulin sensitivity", inShort: "Tied to blood sugar regulation and cellular fuel use." },
      { use: "Weight and body composition", inShort: "Involves fat metabolism and preserving lean muscle mass." },
      { use: "Exercise performance and recovery", inShort: "Relates to cellular energy production during activity." },
    ],
    notFor: [
      "Anyone pregnant, breastfeeding, or trying to conceive.",
      "Anyone with active cancer, a cancer history, or an undiagnosed mass.",
      "Anyone taking metformin or other AMPK-pathway medications.",
    ],
    wada: "Competitive athletes: MOTS-c is prohibited at all times under WADA’s S4 category (hormone and",
    pairsWith: [
      { name: "NAD+", slug: "nad", reason: "shares its focus on the cell’s energy systems." },
      { name: "AOD-9604", slug: "aod9604", reason: "targets fat loss through a different, fat-cell pathway." },
      { name: "Tesamorelin", slug: "tesamorelin", reason: "works through the growth-hormone axis — a complementary route." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "nad",
    name: "NAD+",
    subtitle: "Cellular energy coenzyme",
    category: "Mitochondrial & Cellular Energy",
    oneLiner: "Known for supporting cellular energy and everyday vitality.",
    intro: [
      "NAD+ is not a peptide — it is a coenzyme every cell already makes and uses constantly, central to how cells convert food into energy. What is offered clinically is the injected or IV form. It is used by people interested in energy, cognitive clarity, and general cellular support.",
    ],
    uses: [
      { use: "Energy and general vitality", inShort: "Tied to its central role in how cells produce energy." },
      { use: "Cognitive clarity", inShort: "A commonly reported use among people who take it." },
      { use: "Anti-aging and longevity", inShort: "The use most associated with its wellness marketing." },
    ],
    notFor: [
      "Pregnancy or breastfeeding.",
      "Cardiac history, without discussing it first.",
    ],
    wada: "Competitive athletes: NAD+ does not appear on the WADA Prohibited List and is not treated as a",
    pairsWith: [
      { name: "MOTS-c", slug: "mots-c", reason: "shares a focus on mitochondrial signaling." },
      { name: "Epitalon", slug: "epitalon", reason: "both relate to longevity-adjacent cellular pathways." },
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", reason: "pairs cellular-energy support with systemic immune repair." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "ss-31",
    name: "SS-31",
    subtitle: "Cardiolipin-targeting tetrapeptide (elamipretide)",
    category: "Mitochondrial & Cellular Energy",
    oneLiner: "Known for supporting the cell's own energy centers.",
    intro: [
      "SS-31, known as elamipretide, is a small peptide engineered to target cardiolipin, a molecule inside mitochondria central to how cells produce energy. It is used by people interested in mitochondrial health and cellular energy support.",
    ],
    uses: [
      { use: "Muscle strength support", inShort: "The one narrow FDA-approved use, in a rare genetic condition." },
      { use: "Age-related vision support", inShort: "An area of active research interest." },
      { use: "General mitochondrial health", inShort: "The use most associated with its wellness marketing." },
    ],
    notFor: [
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
      "Anyone with a known hypersensitivity.",
      "Anyone extrapolating a narrow approval to general wellness or longevity use without discussing it first.",
      "Anyone sourcing product from an unverified compounder or vendor.",
    ],
    wada: "Competitive athletes: SS-31’s status is recent and still settling; confirm current status before use.",
    pairsWith: [
      { name: "NAD+", slug: "nad", reason: "shares a focus on cellular energy production." },
      { name: "MOTS-c", slug: "mots-c", reason: "both act on mitochondrial signaling pathways." },
      { name: "Epitalon", slug: "epitalon", reason: "commonly considered alongside it for longevity-adjacent support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    subtitle: "Synthetic 15-amino-acid peptide",
    category: "Tissue Repair & Recovery",
    oneLiner: "One of the most talked-about peptides for gut and tissue support.",
    intro: [
      "BPC-157 is a lab-made chain of 15 amino acids, copied from a small piece of a larger protein originally found in human gastric juice. It is used by people interested in injury healing, gut support, and joint comfort.",
    ],
    uses: [
      { use: "Tendon, ligament and muscle injury healing", inShort: "The primary use it is marketed for." },
      { use: "Knee and joint pain", inShort: "A commonly reported use among people who take it." },
      { use: "Gut healing and inflammatory bowel support", inShort: "One of the earliest interests behind the compound." },
    ],
    notFor: [
      "Anyone on blood thinners, or with a bleeding or clotting disorder.",
      "Anyone with liver disease or abnormal liver tests.",
      "Anyone with active cancer, a cancer history, or an unscreened suspicious finding.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
    ],
    wada: "Competitive athletes: BPC-157 is prohibited at all times under WADA’s S0 category.",
    pairsWith: [
      { name: "TB-500", slug: "tb-500", reason: "a closely related repair peptide, often considered together for soft-tissue recovery." },
      { name: "GHK-Cu", slug: "ghk-cu", reason: "shares an interest in skin and tissue repair." },
      { name: "KPV", slug: "kpv", reason: "both relate to gut-lining and barrier support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    subtitle: "Copper-binding tripeptide",
    category: "Tissue Repair & Recovery",
    oneLiner: "Well known for supporting collagen and skin renewal.",
    intro: [
      "GHK-Cu is a naturally occurring copper-binding tripeptide long used in topical skin-care formulations, and more recently offered as an injectable. It is used by people interested in tissue repair, skin quality, and recovery.",
    ],
    uses: [
      { use: "Fine lines, firmness and skin density", inShort: "The best-supported use, from topical studies." },
      { use: "Collagen production in skin", inShort: "The best-supported mechanism, again from topical studies." },
      { use: "Wound healing and scar reduction", inShort: "A less-studied use for the injectable form." },
    ],
    notFor: [
      "Anyone with Wilson disease or another copper-handling disorder, or anyone already taking copper supplements.",
      "Anyone pregnant or breastfeeding.",
      "Anyone with an active cancer diagnosis, without discussing it first.",
      "Anyone with sensitive skin, eczema or rosacea should patch-test any topical first.",
    ],
    wada: "Competitive athletes: GHK-Cu is not currently named on the WADA Prohibited List.",
    pairsWith: [
      { name: "BPC-157", slug: "bpc-157", reason: "shares a focus on tissue repair." },
      { name: "TB-500", slug: "tb-500", reason: "both relate to connective-tissue recovery." },
      { name: "Sermorelin", slug: "sermorelin", reason: "commonly considered alongside it for skin and collagen support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    subtitle: "Synthetic fragment of thymosin beta-4",
    category: "Tissue Repair & Recovery",
    oneLiner: "Popular for supporting faster recovery and tissue repair.",
    intro: [
      "TB-500 is a lab-made chain of seven amino acids, built to copy a small stretch of a much larger, naturally occurring protein called thymosin beta-4. It is used by people interested in tendon, ligament, and muscle injury recovery, and general wound healing.",
    ],
    uses: [
      { use: "Tendon, ligament, and muscle injury recovery", inShort: "The primary use it is marketed for." },
      { use: "General wound and skin healing", inShort: "A related, commonly explored use." },
      { use: "Vascular support and general recovery", inShort: "A broader use some people apply it to." },
    ],
    notFor: [
      "Active cancer, a cancer history, an undiagnosed mass, or overdue cancer screening.",
      "Autoimmune disease or a history of drug hypersensitivity reactions.",
      "Pregnancy, breastfeeding, or trying to conceive.",
      "Anyone relying on it in place of a proven treatment for their condition.",
    ],
    wada: "Competitive athletes: TB-500 is explicitly named and prohibited at all times under WADA category",
    pairsWith: [
      { name: "BPC-157", slug: "bpc-157", reason: "a closely related repair peptide, often considered together for soft-tissue recovery." },
      { name: "GHK-Cu", slug: "ghk-cu", reason: "shares an interest in skin and connective-tissue repair." },
      { name: "IGF-1 LR3", slug: "igf1-lr3", reason: "both relate to anabolic tissue repair." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "kpv",
    name: "KPV",
    subtitle: "Tripeptide fragment of alpha-msh",
    category: "Inflammation & Immune Defense",
    oneLiner: "A favorite for calming inflammation naturally.",
    intro: [
      "KPV is a three-amino-acid piece of alpha-MSH, a natural hormone the body uses in part to keep inflammation in check. It is the smallest active fragment of that molecule. It is used by people dealing with gut inflammation, inflammatory skin conditions, and general inflammatory load.",
    ],
    uses: [
      { use: "Gut inflammation and colitis", inShort: "The original use KPV became known for." },
      { use: "Inflammatory skin conditions", inShort: "Also used to help calm inflamed, reactive skin." },
      { use: "General anti-inflammatory support", inShort: "A broader use some people apply it to, beyond those two." },
    ],
    notFor: [
      "Anyone pregnant, breastfeeding or trying to conceive.",
      "Anyone with an active cancer diagnosis.",
      "Anyone with an autoimmune or immune-mediated condition — the mechanism is immune modulation.",
      "Anyone who would delay or replace a proven treatment for inflammatory bowel disease or a skin condition.",
    ],
    wada: "Competitive athletes: KPV is not currently named on the WADA Prohibited List.",
    pairsWith: [
      { name: "BPC-157", slug: "bpc-157", reason: "shares an interest in gut-lining and tissue repair." },
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", reason: "both relate to immune modulation." },
      { name: "LL-37", slug: "ll-37", reason: "shares an interest in antimicrobial support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "ll-37",
    name: "LL-37",
    subtitle: "Cathelicidin antimicrobial peptide",
    category: "Inflammation & Immune Defense",
    oneLiner: "Known for its role in wound healing and defense.",
    intro: [
      "LL-37 is a synthetic copy of the only cathelicidin antimicrobial peptide the human body makes, part of its fast-acting immune defense. It is used by people interested in wound healing and skin support.",
    ],
    uses: [
      { use: "Wound healing", inShort: "The main use with real supporting evidence." },
      { use: "Skin and tissue support", inShort: "A related, commonly explored use." },
      { use: "Immune and antimicrobial support", inShort: "The mechanism behind its broader reputation." },
    ],
    notFor: [
      "Anyone with an autoimmune or autoinflammatory condition, including psoriasis, lupus, or rosacea.",
      "Anyone with a personal or strong family history of cancer, or an undiagnosed mass.",
      "Pregnant or breastfeeding patients, or anyone trying to conceive.",
      "Anyone with an active infection who needs established antimicrobial treatment rather than an unproven alternative.",
    ],
    wada: "Competitive athletes: is not currently named on the WADA Prohibited List by name.",
    pairsWith: [
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", reason: "both relate to immune modulation." },
      { name: "KPV", slug: "kpv", reason: "shares an interest in calming inflammation." },
      { name: "BPC-157", slug: "bpc-157", reason: "commonly considered alongside it for recovery support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    subtitle: "Synthetic thymic peptide (thymalfasin)",
    category: "Inflammation & Immune Defense",
    oneLiner: "Talked about for helping the immune system respond more precisely.",
    intro: [
      "Thymosin alpha-1 is a small protein fragment the thymus gland naturally produces, part of how the immune system’s T cells are trained. A synthetic copy has been given to patients outside the United States for more than three decades. It is used by people interested in immune system support and modulation.",
    ],
    uses: [
      { use: "Immune system support and modulation", inShort: "The broad use tied to its role in training T cells." },
      { use: "Vaccine response in people who respond poorly", inShort: "Studied in dialysis and immunocompromised patients." },
      { use: "Sepsis and severe infection", inShort: "Studied as an add-on to standard hospital care." },
    ],
    notFor: [
      "Organ transplant recipients and anyone on immunosuppressive medication.",
      "Stem-cell or bone-marrow transplant patients.",
      "Anyone with an autoimmune condition.",
      "Anyone pregnant or breastfeeding, and anyone with a known hypersensitivity to it.",
    ],
    wada: "Competitive athletes: Thymosin alpha-1 is not currently named on the WADA Prohibited List (distinct",
    pairsWith: [
      { name: "LL-37", slug: "ll-37", reason: "both relate to antimicrobial immune defense." },
      { name: "KPV", slug: "kpv", reason: "shares an interest in calming inflammation." },
      { name: "BPC-157", slug: "bpc-157", reason: "commonly considered alongside it for recovery support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "selank",
    name: "Selank",
    subtitle: "Tuftsin-derived synthetic peptide",
    category: "Cognitive Function & Neuroprotection",
    oneLiner: "A go-to for easing stress without feeling sedated.",
    intro: [
      "Selank is a synthetic peptide engineered in Russia as a stabilized analog of tuftsin, a naturally occurring immune-signaling fragment. It is used by people interested in calm and stress resilience, most often as an intranasal spray.",
    ],
    uses: [
      { use: "Anxiety, including generalized anxiety", inShort: "The primary use studied in Russian clinical research." },
      { use: "Stress resilience", inShort: "A related use drawn from the same research base." },
      { use: "Cognitive focus", inShort: "A secondary, less-studied area of interest." },
    ],
    notFor: [
      "Anyone seeking a substitute for established anxiety treatment or psychotherapy.",
      "Pregnancy or breastfeeding, or trying to conceive.",
      "Children and adolescents.",
      "Anyone with a known or suspected autoimmune condition.",
    ],
    wada: "Competitive athletes: Selank is not individually named on the WADA Prohibited List but may fall under",
    pairsWith: [
      { name: "Semax", slug: "semax", reason: "a complementary nootropic, often considered together." },
      { name: "DSIP", slug: "dsip", reason: "both relate to sleep and stress support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "semax",
    name: "Semax",
    subtitle: "Acth-derived synthetic peptide",
    category: "Cognitive Function & Neuroprotection",
    oneLiner: "Popular for supporting focus, memory, and mental clarity.",
    intro: [
      "Semax is a lab-made chain of seven amino acids copied from a small fragment of ACTH, the hormone the pituitary gland normally releases to trigger cortisol production. It is used by people interested in focus, memory, and mental performance, most often as a nasal spray.",
    ],
    uses: [
      { use: "Recovery after ischemic stroke", inShort: "The approved use in Russia, in a diagnosed patient population." },
      { use: "Cognitive focus or memory", inShort: "The use most associated with its wellness marketing." },
      { use: "General neuroprotection", inShort: "A broader use tied to the same underlying mechanism." },
    ],
    notFor: [
      "Pregnancy or breastfeeding, or trying to conceive.",
      "Active psychosis or significant psychiatric instability.",
      "A personal or family history of substance-use disorder, or stimulant sensitivity.",
      "Significant nasal mucosal disease or recent nasal surgery.",
    ],
    wada: "Competitive athletes: Semax is not explicitly named on the WADA Prohibited List but its status is",
    pairsWith: [
      { name: "Selank", slug: "selank", reason: "a complementary nootropic, often considered together." },
      { name: "NAD+", slug: "nad", reason: "shares an interest in neural energy support." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "dsip",
    name: "DSIP",
    subtitle: "Delta sleep-inducing peptide",
    category: "Longevity, Sleep & Circadian",
    oneLiner: "Known for supporting deep, restorative sleep.",
    intro: [
      "DSIP is a short peptide first identified in 1970s sleep research, named for the deep, restorative stage of sleep it was studied alongside. It is used by people looking to improve the quality of their sleep and its restfulness.",
    ],
    uses: [
      { use: "Deeper, more restorative sleep", inShort: "The use it was named for, explored in early human research." },
      { use: "Falling asleep more easily", inShort: "Reported in the same research. It is not a sedative." },
      { use: "Stress and recovery", inShort: "Based on how it appears to interact with stress-hormone rhythms." },
    ],
    notFor: [
      "Anyone with chronic insomnia or narcolepsy who would use this in place of an evaluated treatment.",
      "Anyone with an immune or allergic history, where an injectable is proposed.",
      "Pregnant or breastfeeding women, and anyone under 18.",
      "Anyone already taking sedatives or sleep medication, without discussing it first.",
    ],
    wada: "Competitive athletes: DSIP is not currently named on the WADA Prohibited List.",
    pairsWith: [
      { name: "Epitalon", slug: "epitalon", reason: "both relate to circadian rhythm and sleep." },
      { name: "Selank", slug: "selank", reason: "shares an interest in stress and calm." },
      { name: "Oxytocin", slug: "oxytocin", reason: "commonly considered alongside it for relaxation." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    subtitle: "Synthetic four-amino-acid pineal peptide",
    category: "Longevity, Sleep & Circadian",
    oneLiner: "Talked about for its role in sleep and healthy aging.",
    intro: [
      "(Typically used in short courses of 10–20 days, repeated once or twice a year — not a daily, ongoing peptide.)",
      "Epitalon is a synthetic four-amino-acid peptide developed in Russia to mimic a natural pineal gland extract tied to sleep and aging research. It is used by people interested in longevity and circadian rhythm, usually taken in short cycles rather than continuously.",
    ],
    uses: [
      { use: "Longevity and cellular ageing", inShort: "The use behind its reputation, tied to telomere-protecting mechanisms." },
      { use: "Sleep quality and circadian rhythm", inShort: "The area with the most direct human research, in older adults." },
      { use: "Antioxidant and neuroprotective effects", inShort: "A less-marketed, secondary area of interest." },
    ],
    notFor: [
      "Anyone with a current or past cancer, or a strong family history of cancer.",
      "Anyone with insomnia who would use this in place of an evaluated treatment.",
      "Pregnant or breastfeeding women, and anyone under 18.",
      "Anyone considering subcutaneous injection specifically.",
    ],
    wada: "Competitive athletes: Epitalon is not currently named on the WADA Prohibited List.",
    pairsWith: [
      { name: "NAD+", slug: "nad", reason: "shares an interest in longevity-adjacent cellular pathways." },
      { name: "DSIP", slug: "dsip", reason: "both relate to sleep and circadian rhythm." },
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", reason: "commonly considered alongside it for immune resilience." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "kisspeptin",
    name: "Kisspeptin",
    subtitle: "Reproductive signaling peptide (kisspeptin-10)",
    category: "Sexual & Reproductive Health",
    oneLiner: "Talked about for its role in desire and reproductive health.",
    intro: [
      "Kisspeptin is a natural signaling peptide made in the hypothalamus that sits at the top of the reproductive hormone chain. It is used by people interested in libido, sexual desire, and reproductive hormone signaling.",
    ],
    uses: [
      { use: "Low sexual desire", inShort: "Studied for its role in brain response to sexual stimuli." },
      { use: "Fertility support and ovulation triggering", inShort: "The strongest evidence, using a longer-acting form given intravenously." },
      { use: "Testosterone and reproductive hormone support", inShort: "Reliably raises a key reproductive hormone signal." },
    ],
    notFor: [
      "Anyone with a hormone-sensitive cancer — prostate, breast, ovarian or endometrial.",
      "Anyone being treated with a GnRH agonist or antagonist, for any reason.",
      "Anyone trying to conceive or on fertility treatment who is not under the care of a fertility specialist.",
      "Anyone with a hormone or pituitary disorder, and anyone in tested sport.",
    ],
    wada: "Competitive athletes: Kisspeptin is named on the WADA Prohibited List and should be treated as",
    pairsWith: [
      { name: "PT-141", slug: "pt-141", reason: "both relate to desire and arousal." },
      { name: "Oxytocin", slug: "oxytocin", reason: "shares an interest in intimacy and bonding." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "oxytocin",
    name: "Oxytocin",
    subtitle: "Nonapeptide neurohormone",
    category: "Sexual & Reproductive Health",
    oneLiner: "Known for its role in trust, bonding, and connection.",
    intro: [
      "Oxytocin is a hormone the body already makes, released during labor, delivery, breastfeeding, and touch and closeness. As an FDA-approved hospital drug, it has one well-established job: causing the uterus to contract. It is used by people interested in mood, social connection, and intimacy, through a compounded preparation different from the hospital drug.",
    ],
    uses: [
      { use: "Induction or augmentation of labor", inShort: "A core approved use — IV only, in a hospital setting." },
      { use: "Control of postpartum bleeding", inShort: "The other core approved use, standard of care after delivery." },
      { use: "Bonding, trust, and social connection", inShort: "The most-studied wellness use, with mixed results." },
    ],
    notFor: [
      "Anyone hoping to self-induce or speed up labor at home or outside a hospital.",
      "Replacing established, evidence-based treatment for anxiety, depression, or relationship difficulties.",
      "Heart, kidney, or fluid-balance conditions.",
      "Known hypersensitivity to oxytocin.",
    ],
    wada: "Competitive athletes: Oxytocin does not appear to be named on the WADA Prohibited List; confirm",
    pairsWith: [
      { name: "PT-141", slug: "pt-141", reason: "shares a focus on desire and arousal pathways." },
      { name: "Kisspeptin", slug: "kisspeptin", reason: "shares an interest in reproductive hormone signaling." },
      { name: "DSIP", slug: "dsip", reason: "commonly considered alongside it for relaxation." },
    ],
    updated: "2026-08-25",
  },
  {
    slug: "pt-141",
    name: "PT-141",
    subtitle: "Melanocortin receptor agonist (bremelanotide)",
    category: "Sexual & Reproductive Health",
    oneLiner: "Popular for reigniting desire from the inside out.",
    intro: [
      "PT-141, also known as bremelanotide, is a lab-made peptide built to mimic a natural hormone involved in the brain’s desire and arousal pathway. As Vyleesi, it is FDA-approved for one specific population. It is used by people addressing low sexual desire and interest.",
    ],
    uses: [
      { use: "Low sexual desire in premenopausal women", inShort: "The approved use — a modest, statistically significant benefit." },
      { use: "Male erectile dysfunction, off-label", inShort: "Based on an older development program." },
      { use: "Male low libido without diagnosed ED", inShort: "Extrapolated from related research." },
    ],
    notFor: [
      "Uncontrolled hypertension or known cardiovascular disease.",
      "Pregnancy, or trying to conceive without reliable contraception.",
      "Low desire caused by another medical condition, psychiatric condition, relationship problem, or medication.",
      "Postmenopausal women.",
    ],
    wada: "Competitive athletes: Not currently named on the WADA Prohibited List; confirm current status before",
    pairsWith: [
      { name: "Oxytocin", slug: "oxytocin", reason: "shares a focus on arousal and bonding pathways." },
      { name: "Kisspeptin", slug: "kisspeptin", reason: "shares an interest in reproductive hormone signaling." },
    ],
    updated: "2026-08-25",
  },
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
