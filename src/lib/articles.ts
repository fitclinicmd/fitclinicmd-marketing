// EDUCATION ARTICLES — original copy for the Learn hub.
//
// These are written IN OUR OWN WORDS from background research; they do not
// reproduce any pharmacy or vendor marketing. The editorial line (see the Learn
// page) is "plain answers, not marketing": explain how this kind of care works
// so a reader can judge any clinic on the merits.
//
// COMPLIANCE: education is not a place to smuggle in efficacy claims. Articles
// describe mechanisms and process conservatively, never promise an outcome from
// a specific product, and always state that compounded medications are not
// FDA-approved and that individual results vary. Anything that would function as
// a product efficacy claim belongs in lib/claims.ts, gated for counsel — not
// here. Keep this content general and non-promissory.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  /** Short category label shown on the card and article header. */
  topic: string;
  /** ISO date; shown as "Last updated". */
  updated: string;
  /** Rough read time, minutes. */
  readMinutes: number;
  status: "PUBLISHED" | "PLANNED";
  body?: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "storing-your-peptide-medication",
    title: "How to store and handle your peptide medication",
    summary:
      "Peptides are sensitive to light and heat. Here's how to store yours so it stays effective, what to do if it arrives warm, and when to call your care team.",
    topic: "Using your medication",
    updated: "2026-08-01",
    readMinutes: 4,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "If your provider prescribes a compounded peptide, it arrives as a liquid that has been prepared specifically for you and shipped cold. Peptides are delicate molecules, and a little care in how you store and handle yours goes a long way toward keeping it stable. None of this is complicated — but it is worth getting right.",
      },
      { type: "h2", text: "Keep it cold — but not frozen" },
      {
        type: "p",
        text: "Refrigerate your medication promptly when it arrives. The target range is a normal refrigerator temperature, roughly 40–46°F (4–8°C).",
      },
      {
        type: "ul",
        items: [
          "Store the vial toward the front-middle of the fridge, where the temperature is most stable.",
          "Avoid the back wall, the cooling vents, and the chill/crisper drawers — those spots run coldest and can dip too low.",
          "Do not freeze it, and don't let it sit against an ice pack. Freezing can damage a peptide solution.",
        ],
      },
      { type: "h2", text: "Light matters more than a warm delivery" },
      {
        type: "p",
        text: "It's natural to worry if a package arrives warm after a day in transit. In most cases that's fine. Peer-reviewed stability research on reconstituted peptides has generally found that brief temperature swings in shipping are far less damaging than people assume — light exposure, not a short warm spell, tends to be the bigger driver of degradation. That's why quality shipments go out in opaque, light-blocking packaging.",
      },
      {
        type: "p",
        text: "So the habit that protects your medication most is simple: keep it out of the light.",
      },
      {
        type: "ul",
        items: [
          "Keep the vial away from direct sunlight and bright fluorescent lighting.",
          "Don't leave it sitting out in the light while you draw a dose — take it out, use it, and put it back.",
          "Store it in its original packaging or a dark container between uses.",
        ],
      },
      { type: "h2", text: "When to check with your care team" },
      {
        type: "p",
        text: "Contact your care team before using your medication if any of these apply:",
      },
      {
        type: "ul",
        items: [
          "The solution looks cloudy, has gelled or thickened, or has visible particles that don't dissolve.",
          "You think the vial was frozen, or left unrefrigerated for an extended period.",
          "The packaging arrived damaged, or you're simply unsure whether it's still good.",
        ],
      },
      {
        type: "callout",
        text: "Always follow the specific storage and handling instructions that come with your prescription and anything your provider tells you — those take priority over general guidance. This article is general information, not medical advice, and not a substitute for your provider's directions.",
      },
    ],
  },
  {
    slug: "why-results-vary",
    title: "Why two people can respond differently to the same peptide",
    summary:
      "\"I don't feel anything\" and \"this worked better for my friend\" usually aren't about the vial. Here's the honest biology of why responses vary — and what actually helps.",
    topic: "Setting expectations",
    updated: "2026-08-01",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "One of the most common questions in this kind of care is some version of \"why didn't I feel what someone else felt?\" It's a fair question, and the honest answer is rarely \"a better vial.\" It's biology. Understanding why sets realistic expectations — and points to the things that genuinely move the needle.",
      },
      { type: "h2", text: "Peptides are signals, not force" },
      {
        type: "p",
        text: "A useful way to think about most peptides: they are messengers. They ask your body to do something — repair a tissue, build collagen, support a metabolic process — rather than doing the work themselves. Your body still has to carry out the request.",
      },
      {
        type: "callout",
        text: "A peptide is like an instruction. Your cells are what actually do the job. A great instruction sent to a tired, under-resourced system doesn't get carried out as well.",
      },
      { type: "h2", text: "Your cells need the resources to respond" },
      {
        type: "p",
        text: "Carrying out that instruction takes energy and raw materials. Your cells run on ATP — the energy your mitochondria produce — and they need building blocks like protein, plus rest and recovery, to do things like repair tissue or rebuild after exercise. When the underlying system is depleted, even a good signal produces a quieter response.",
      },
      {
        type: "p",
        text: "That's why the same therapy can land differently for two people. Consider two patients on an identical protocol:",
      },
      {
        type: "ul",
        items: [
          "One is younger, sleeps well, eats enough protein, trains consistently, and has lower inflammation — a body that's ready to act on the signal.",
          "The other is under-slept, sedentary, more inflamed, and metabolically stressed — the signal arrives, but the system has less capacity to respond.",
        ],
      },
      {
        type: "p",
        text: "Age plays a role too: the cellular environment gradually changes over the decades, and recovery tends to slow. None of this means a therapy \"isn't working\" — it means results depend on the whole person, not the vial alone.",
      },
      { type: "h2", text: "What actually helps" },
      {
        type: "p",
        text: "This is exactly why a responsible program treats a prescription as one part of the picture, not a magic bullet. The fundamentals still matter — sleep, protein, movement, and managing stress all improve your body's ability to respond — and your provider looks at your labs and history to tailor the plan and set realistic expectations.",
      },
      {
        type: "callout",
        text: "Individual results vary and are not guaranteed. Compounded medications are not FDA-approved. Whether any therapy is appropriate for you is a decision for a licensed provider after an evaluation — not something this article can promise.",
      },
    ],
  },
  {
    slug: "compounded-medication-explained",
    title: "Compounded medication, explained",
    summary:
      "What it means when a medication is \"compounded,\" how that differs from a product off a pharmacy shelf, why it isn't FDA-approved, and the questions worth asking.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 5,
    status: "PUBLISHED",
    body: [
      {
        type: "p",
        text: "A lot of the medication offered through telehealth wellness programs — including peptides — is \"compounded.\" It's a word people see and skip past. It's worth understanding, because it changes what you're getting and what questions to ask.",
      },
      { type: "h2", text: "What \"compounded\" means" },
      {
        type: "p",
        text: "A compounded medication is prepared by a licensed pharmacy for an individual patient, based on a prescription from a licensed provider, rather than mass-manufactured in fixed doses. Compounding pharmacies in the U.S. generally operate under what are known as 503A and 503B frameworks. It's an established part of medicine — it's how a patient can get a specific formulation or strength that isn't available as a standard commercial product.",
      },
      { type: "h2", text: "How it differs from a product off the shelf" },
      {
        type: "ul",
        items: [
          "A commercially manufactured drug is made in large batches and reviewed and approved by the FDA for a specific use.",
          "A compounded preparation is made for you. Because each preparation is individualized, compounded medications are not FDA-approved — the FDA does not review individual compounded formulations for safety or effectiveness.",
          "That is not the same as \"unregulated.\" The pharmacy is state-licensed and the medication is dispensed only on a valid prescription from a provider licensed in your state.",
        ],
      },
      {
        type: "callout",
        text: "Compounded medications are prepared by a state-licensed pharmacy for an individual patient. They have not been evaluated or approved by the FDA as safe or effective for the treatment of any condition.",
      },
      { type: "h2", text: "Questions worth asking any clinic" },
      {
        type: "p",
        text: "Whether you're considering us or anyone else, these are reasonable things to ask before you start:",
      },
      {
        type: "ul",
        items: [
          "Who evaluates me, and are they licensed in my state? A prescription should follow an actual evaluation, not a checkout page.",
          "Is the pharmacy licensed, and where is my medication made?",
          "What are the realistic expectations, and what are the risks and side effects for someone like me?",
          "How does billing work, and how do I cancel if I want to stop?",
          "Who can say no? A clinic that will decline to prescribe when it isn't appropriate is a good sign, not a bad one.",
        ],
      },
      {
        type: "callout",
        text: "This article is general information, not medical advice. Whether a compounded therapy is appropriate for you is decided by a licensed provider after an evaluation.",
      },
    ],
  },
  // Planned (title/summary only — cards render as "in progress" until body is added and status flips to PUBLISHED).
  {
    slug: "what-a-telehealth-visit-involves",
    title: "What a telehealth visit actually involves",
    summary:
      "What your provider sees before the call, what you'll be asked, and what a good visit looks like.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 4,
    status: "PLANNED",
  },
  {
    slug: "why-your-labs-matter",
    title: "Why your labs matter",
    summary:
      "Which values providers look at, why some treatments require bloodwork first, and what follow-up testing is for.",
    topic: "How this works",
    updated: "2026-08-01",
    readMinutes: 4,
    status: "PLANNED",
  },
  {
    slug: "reading-a-subscription-before-you-sign-up",
    title: "Reading a subscription before you sign up",
    summary:
      "How recurring billing works, what to check before you agree, and how cancellation should work at any reputable clinic.",
    topic: "Before you start",
    updated: "2026-08-01",
    readMinutes: 4,
    status: "PLANNED",
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
export function publishedArticles(): Article[] {
  return ARTICLES.filter((a) => a.status === "PUBLISHED");
}
export function plannedArticles(): Article[] {
  return ARTICLES.filter((a) => a.status === "PLANNED");
}
