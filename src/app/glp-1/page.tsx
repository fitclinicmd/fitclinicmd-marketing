import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Card, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { signupUrl } from "@/lib/site";
import PrimarySources, { type Source } from "@/components/PrimarySources";

export const metadata: Metadata = {
  title: "GLP-1s — Semaglutide vs Tirzepatide",
  description:
    "How GLP-1 medications work, how semaglutide and tirzepatide compare, and which direction may fit you — with the FDA-approved vs compounded distinction stated plainly. A licensed provider makes the final call.",
};

// Built from Todd's GLP-1 build guide, two levels: a two-minute quick read up
// top with the medical-intake panel, then optional detail under "Want to
// understand more". FDA-approved brand claims (Wegovy CV, Zepbound OSA) are kept
// strictly separate from any mention of a compounded preparation, and every
// weight-loss figure is labelled as a controlled-trial average, not a promise.

const SOURCES: Source[] = [
  { href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s024lbl.pdf", title: "Wegovy (semaglutide) prescribing information", publisher: "U.S. Food and Drug Administration" },
  { href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/217806s002lbl.pdf", title: "Zepbound (tirzepatide) prescribing information", publisher: "U.S. Food and Drug Administration" },
  { href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2416394", title: "Tirzepatide compared with semaglutide for the treatment of obesity", publisher: "New England Journal of Medicine", note: "The 72-week head-to-head trial the weight-loss averages come from." },
  { href: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-reduce-risk-serious-heart-problems-specifically-adults-obesity-or", title: "FDA approves cardiovascular risk-reduction indication for Wegovy", publisher: "U.S. Food and Drug Administration" },
  { href: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-obstructive-sleep-apnea", title: "FDA approves Zepbound for obstructive sleep apnea", publisher: "U.S. Food and Drug Administration" },
  { href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize", title: "FDA clarifies policies for compounders as national GLP-1 supply begins to stabilize", publisher: "U.S. Food and Drug Administration" },
];

function IntakePanel({ heading = "Find out which option may fit you" }: { heading?: string }) {
  return (
    <div className="rounded-xl2 border border-clinic/30 bg-clinic/[0.05] p-7 sm:p-8">
      <h2 className="text-2xl">{heading}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
        Complete a confidential medical intake and meet with a licensed provider to determine whether treatment
        is appropriate — and, if it is, which medication and starting plan make sense for you.
      </p>
      <div className="mt-5">
        <CTA href={signupUrl}>Begin your medical intake</CTA>
      </div>
    </div>
  );
}

export default function Glp1() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: "GLP-1s",
            description:
              "How GLP-1 medications work, how semaglutide and tirzepatide compare, and the FDA-approved vs compounded distinction.",
            path: "/glp-1",
            about: {
              name: "GLP-1 receptor agonists",
              description: "A class of medicines with FDA-approved brand forms; a compounded version of one is not the approved product.",
              activeIngredient: ["Semaglutide", "Tirzepatide"],
            },
          }),
          breadcrumbSchema([{ name: "GLP-1s", path: "/glp-1" }]),
        ]}
      />

      {/* Hero */}
      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Eyebrow>Weight management</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">GLP-1s</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            What GLP-1 medications do, why they make weight loss feel different, and how semaglutide and
            tirzepatide compare — in about two minutes.
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          {/* Level 1 — quick understanding */}
          <section>
            <h2 className="text-2xl">GLP-1s turn down biological hunger</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              GLP-1 is a hormone your body naturally releases after you eat. It helps tell your brain that food
              has arrived and that you have had enough. GLP-1 medications make that signal stronger and help it
              last longer — reducing hunger, quieting food cravings, helping you feel satisfied with less food,
              and improving how your body regulates blood sugar.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              They do not create more willpower. They change some of the biological signals that make weight
              difficult to control.
            </p>
          </section>

          {/* The two choices — side-by-side cards */}
          <section className="mt-12">
            <h2 className="text-2xl">The two choices</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="text-xl">Semaglutide</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink-muted">One hormone pathway</p>
                <ul className="mt-4 space-y-2 pl-5 text-ink-soft">
                  <li className="list-disc marker:text-clinic">Activates GLP-1 receptors</li>
                  <li className="list-disc marker:text-clinic">Reduces appetite and improves blood-sugar signaling</li>
                  <li className="list-disc marker:text-clinic">Extensive weight-management and cardiovascular research</li>
                  <li className="list-disc marker:text-clinic">May be worth discussing for people with established cardiovascular disease</li>
                </ul>
              </Card>
              <Card>
                <h3 className="text-xl">Tirzepatide</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink-muted">Two hormone pathways</p>
                <ul className="mt-4 space-y-2 pl-5 text-ink-soft">
                  <li className="list-disc marker:text-clinic">Activates GLP-1 <em>and</em> GIP receptors</li>
                  <li className="list-disc marker:text-clinic">Combines two signals involved in appetite and metabolic regulation</li>
                  <li className="list-disc marker:text-clinic">Produced greater average weight loss in the direct comparison</li>
                  <li className="list-disc marker:text-clinic">May be worth discussing when greater average weight reduction is the priority</li>
                </ul>
              </Card>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Neither is automatically better for everyone. The right choice depends on your medical history,
              goals, other medications, previous experience, side effects, and how your body responds.
            </p>
          </section>

          {/* Which direction may fit you — comparison table */}
          <section className="mt-12">
            <h2 className="text-2xl">Which direction may fit you</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/15 text-xs uppercase tracking-wide text-ink-muted">
                    <th className="py-2 pr-4 font-semibold">If your priority is</th>
                    <th className="py-2 pr-4 font-semibold">Discuss</th>
                    <th className="py-2 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody className="text-ink-soft">
                  {[
                    ["A well-established GLP-1 option", "Semaglutide", "Extensive clinical research in weight management and long-term cardiovascular outcomes."],
                    ["The greatest average weight reduction", "Tirzepatide", "Produced greater average weight loss than semaglutide in a direct 72-week trial."],
                    ["Established cardiovascular disease with overweight or obesity", "Semaglutide", "FDA-approved Wegovy has a specific cardiovascular risk-reduction indication for this population."],
                    ["Obesity with moderate-to-severe obstructive sleep apnea", "Tirzepatide", "FDA-approved Zepbound has a specific indication for this condition."],
                    ["Better tolerability", "Either", "Individual responses vary; a provider cannot know in advance which one a patient will tolerate better."],
                    ["Diabetes or several other medications", "Individual review", "Blood-sugar treatment and other prescriptions may require monitoring or adjustment."],
                  ].map(([p, d, w]) => (
                    <tr key={p} className="border-b border-ink/10 align-top">
                      <td className="py-3 pr-4 font-medium text-ink">{p}</td>
                      <td className="py-3 pr-4 font-semibold text-clinic">{d}</td>
                      <td className="py-3">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              A licensed provider makes the final recommendation after reviewing your health history,
              medications, goals, and potential risks.
            </p>
          </section>

          {/* Primary CTA panel */}
          <div className="mt-12">
            <IntakePanel />
          </div>

          {/* Level 2 — optional detail */}
          <section className="mt-16">
            <Eyebrow>Want to understand more</Eyebrow>

            <h3 className="mt-3 text-xl">What happens inside your body</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              GLP-1 receptors are found in areas of the brain involved in appetite regulation; activating them
              can reduce calorie intake and help a person feel satisfied with less food. GLP-1 medications also
              support glucose-dependent insulin release, reduce glucagon secretion, and delay stomach emptying.
              Semaglutide works through GLP-1 receptors; tirzepatide works through both GLP-1 and GIP receptors,
              GIP being another naturally occurring hormone involved in appetite and metabolic regulation.
            </p>

            <h3 className="mt-8 text-xl">What the research found</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              In a direct 72-week trial of adults with obesity who did not have diabetes, participants receiving
              tirzepatide lost an average of <strong>20.2%</strong> of their starting weight, compared with{" "}
              <strong>13.7%</strong> for semaglutide.
            </p>
            <p className="mt-3 rounded-xl2 border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
              These figures are averages from a controlled study using FDA-approved products. They are not a
              promise of an individual result and are not evidence about any compounded preparation.
            </p>

            <h3 className="mt-8 text-xl">What treatment involves</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Both injectable medications are generally given once weekly and increased gradually. Starting low
              gives the digestive system time to adjust; increasing the dose faster does not guarantee better
              results and can make side effects harder to manage. Common side effects include nausea, diarrhea
              or constipation, vomiting, abdominal discomfort, indigestion or reflux, and fatigue — often most
              noticeable when treatment begins or after a dose increase. The right dose is the one that produces
              meaningful progress while remaining tolerable, not automatically the highest.
            </p>

            <h3 className="mt-8 text-xl">Protecting muscle and maintaining results</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Weight loss can include lean tissue as well as body fat, particularly when weight comes off
              quickly. A responsible program supports adequate protein, resistance training, hydration, sleep,
              and ongoing clinical monitoring. Studies also found many participants regained a meaningful amount
              of weight after semaglutide or tirzepatide was discontinued, so long-term maintenance should be
              discussed before treatment begins.
            </p>

            <div className="mt-8">
              <IntakePanel />
            </div>
          </section>

          {/* Compounded vs approved — the distinction, stated plainly */}
          <div className="mt-12 rounded-xl2 border border-clinic/20 bg-clinic/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-clinic">One important distinction</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The FDA-approved brand products (such as Wegovy and Zepbound) are different, as a regulatory
              category, from a <strong>compounded</strong> preparation of the same active ingredient. A compounded
              medication is prepared by a licensed pharmacy against an individual prescription and is{" "}
              <strong>not FDA-approved</strong> — the FDA does not review its safety, effectiveness, or quality
              before it is marketed. Whether one is appropriate for you is a decision for a licensed provider
              after an individual evaluation.
            </p>
          </div>

          {/* GLP-1-specific safety — the shared notice below is generic. */}
          <div className="mt-12 rounded-xl2 border border-ink/10 bg-white p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-ink/70">GLP-1 safety information</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              GLP-1-based medications are not appropriate for everyone. They should <strong>not</strong> be used
              during pregnancy, or by anyone with a personal or family history of medullary thyroid carcinoma or
              Multiple Endocrine Neoplasia syndrome type 2, and are generally not recommended for severe
              gastroparesis.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Potential risks include pancreatitis, gallbladder disease, dehydration-related kidney injury, severe
              gastrointestinal reactions, allergic reactions, and low blood sugar — particularly when combined
              with insulin or certain diabetes medications. Because these medicines delay stomach emptying, tell
              your healthcare team before any surgery or procedure requiring anesthesia. Seek medical attention
              for severe or persistent abdominal pain, repeated vomiting, signs of dehydration or a serious
              allergic reaction, or any other concerning symptom.
            </p>
          </div>

          <PrimarySources sources={SOURCES} className="mt-10" />
          <ImportantSafetyInfo className="mt-10" />

          <div className="mt-10 text-sm text-ink-muted">
            Looking for single peptides and blends instead?{" "}
            <Link href="/peptides" className="font-semibold text-clinic underline underline-offset-4 hover:text-clinic-deep">
              Browse the peptide library
            </Link>
            .
          </div>
        </article>
      </Container>
    </>
  );
}
