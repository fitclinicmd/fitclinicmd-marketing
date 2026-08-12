import { Section, Eyebrow, Card, CTA } from "./ui";

// Consultation-led "Program Pathways" presentation. There are no prices here by
// design: peptide therapy is prescribed by a licensed provider after an
// evaluation, never sold directly. The blend names below are how we organize
// care and are a starting point for the conversation, not an off-the-shelf menu.
// (The retail catalog data still lives in @/lib/products if pricing is ever
// surfaced elsewhere; it is intentionally not rendered on this page.)

type Blend = { name: string; peptides: string; description: string };
type Pathway = { number: string; title: string; tagline: string; blends: Blend[] };

const PATHWAYS: Pathway[] = [
  {
    number: "01",
    title: "Performance & Strength",
    tagline: "Train harder. Recover faster.",
    blends: [
      {
        name: "Inferno",
        peptides: "AOD-9604 · CJC-1295 · Ipamorelin · MOTS-c",
        description: "The body-composition stack for lean-out, energy, and metabolic drive.",
      },
      {
        name: "Atlas",
        peptides: "CJC-1295 · Ipamorelin · Tesamorelin · IGF-1 LR3",
        description: "GH-axis support for muscle, strength, and training adaptation.",
      },
      {
        name: "Apex",
        peptides: "Tesamorelin · CJC-1295 · Ipamorelin · BPC-157",
        description: "Strength built on real recovery and tissue repair.",
      },
    ],
  },
  {
    number: "02",
    title: "Anti-Aging & Longevity",
    tagline: "Age on your own terms.",
    blends: [
      {
        name: "Fountain of Youth",
        peptides: "GHK-Cu · BPC-157 · TB-500 · Epitalon",
        description: "Flagship repair: collagen, recovery, and cellular aging.",
      },
      {
        name: "Samson & Delilah",
        peptides: "GHK-Cu · CJC-1295 · Ipamorelin · TB-500",
        description: "Hair and scalp restoration with whole-body repair.",
      },
      {
        name: "Hyperion",
        peptides: "Ipamorelin · Tesamorelin",
        description: "GH optimization for healthy aging and body composition.",
      },
    ],
  },
  {
    number: "03",
    title: "Wellness & Vitality",
    tagline: "Feel like yourself again.",
    blends: [
      {
        name: "Love & Happiness",
        peptides: "Oxytocin · PT-141",
        description: "Connection, confidence, and intimacy.",
      },
      {
        name: "Empress",
        peptides: "MOTS-c · BPC-157 · GHK-Cu · Kisspeptin-10",
        description: "Female vitality, hormonal balance, and renewal.",
      },
      {
        name: "Hypnos",
        peptides: "DSIP · CJC-1295 · Ipamorelin · Selank",
        description: "Deep sleep and overnight recovery.",
      },
    ],
  },
];

const STEPS = [
  "Consultation",
  "Medical assessment",
  "Laboratory review",
  "Clinical planning",
  "Personalized recommendations",
  "Ongoing medical oversight",
];

function PathwayCard({ pw }: { pw: Pathway }) {
  return (
    <Card className="flex flex-col">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl text-clinic">{pw.title}</h3>
        <span className="text-xs font-semibold text-ink-muted">{pw.number}</span>
      </div>
      <p className="mt-1 text-sm italic text-ink-soft">{pw.tagline}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
        Featured blends
      </p>
      <ul className="mt-3 space-y-5">
        {pw.blends.map((b) => (
          <li key={b.name}>
            <p className="font-semibold text-ink">{b.name}</p>
            <p className="mt-0.5 font-mono text-xs text-ink-soft">{b.peptides}</p>
            <p className="mt-1 text-sm text-ink-muted">{b.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function PeptideMenu() {
  return (
    <Section className="border-t border-ink/10" id="menu">
      <div className="mb-10 max-w-2xl">
        <Eyebrow>Program pathways</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Choose the area that matters most</h2>
        <p className="mt-3 text-ink-muted">
          Our peptide program is organized into three pathways. Each lists the signature blends a
          provider may consider — a starting point for the conversation, not an off-the-shelf menu.
          What&apos;s appropriate for you, if anything, is decided by a licensed provider after your
          evaluation.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {PATHWAYS.map((pw) => (
          <PathwayCard key={pw.title} pw={pw} />
        ))}
      </div>

      <div className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
          How the program works
        </p>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-start gap-3 lg:flex-col">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clinic/10 text-xs font-semibold text-clinic">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <Card className="mt-12 flex flex-col items-center gap-4 border-accent/40 bg-accent-light/40 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="text-xl">Reach out for a consultation</h3>
          <p className="mt-1 text-sm text-ink-muted">
            Pick the pathway that fits your goals — a licensed provider takes it from there.
          </p>
        </div>
        <CTA href="/contact" className="shrink-0">
          Book a consultation
        </CTA>
      </Card>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-muted">
        All recommendations are provided under licensed medical supervision and individualized to
        your goals, health history, and clinical needs. Any formulations are patient-specific
        compounded preparations dispensed through a licensed U.S. compounding pharmacy, prepared only
        pursuant to a valid prescription under applicable state and federal law. Certificates of
        Analysis are available on request. Decisions on suitability, dosing, and ongoing monitoring
        remain the responsibility of the licensed healthcare provider. Blend names are how we
        organize care and are not products sold directly through this website.
      </p>
    </Section>
  );
}
