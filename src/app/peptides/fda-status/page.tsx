import type { Metadata } from "next";
import { Container, Section, Eyebrow, CTA, ImportantSafetyInfo } from "@/components/ui";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Peptides and the FDA — where things actually stand",
  description:
    "A plain, sourced briefing on the July 2026 FDA advisory vote: what it did, what it did not do, and why ‘an FDA panel recommended it’ and ‘the FDA approved it’ are not the same thing.",
};

const TIMELINE: [string, string][] = [
  ["Feb 2026", "FDA restricts ingredients used in mass-marketed compounded GLP-1 drugs and moves against misleading advertising. In early March it warns thirty telehealth companies at once."],
  ["Late Mar 2026", "Reporting emerges that the administration is working to lift the 2023 restrictions on peptides; the Health Secretary has been publicly supportive of wider access."],
  ["Apr 2026", "FDA formally announces it will review seven peptides and opens a public comment docket. More than 2,600 comments are eventually filed."],
  ["Jun 2026", "Reporting shows most of the newly appointed committee members prescribe, produce or sell peptides. Days later, FDA’s own career review scientists publish assessments recommending against all seven."],
  ["23–24 Jul 2026", "The committee meets over two days and votes."],
  ["Aug 2026", "No FDA action. The recommendations sit unadopted."],
];

const VOTE: [string, string, string, string][] = [
  ["BPC-157", "Ulcerative colitis", "8–6–1", "Recommended"],
  ["KPV", "Wound healing, inflammation", "8–6–1", "Recommended"],
  ["TB-500", "Wound healing", "8–6–1", "Recommended"],
  ["MOTS-c", "Obesity, osteoporosis", "7–5–2", "Recommended"],
  ["Semax", "Cerebral ischemia, migraine", "8–5–1", "Recommended"],
  ["Epitalon", "Insomnia", "7–4–1", "Recommended"],
  ["Emideltide (DSIP)", "Opioid withdrawal, insomnia", "6–7–1", "Rejected"],
];

export default function FdaStatus() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            name: "Peptides and the FDA",
            description:
              "Where peptides actually stand with the FDA — and why \"an FDA panel recommended it\" and \"the FDA approved it\" are not the same thing.",
            path: "/peptides/fda-status",
          }),
          breadcrumbSchema([
          { name: "Peptides", path: "/peptides" },
          { name: "Peptides and the FDA", path: "/peptides/fda-status" },
        ]),
        ]}
      />

      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <Eyebrow>Regulatory education</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Peptides and the FDA — where things actually stand</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">A short, sourced briefing on the last six months.</p>
        </Container>
      </div>

      <Container className="py-12">
        <article className="mx-auto max-w-3xl">
          <p className="rounded-xl2 border border-accent/40 bg-accent-light/40 p-5 leading-relaxed text-ink">
            <strong>The short version:</strong> in July an FDA advisory panel voted to recommend six peptides
            for a list that would let compounding pharmacies make them. It made headlines as though the FDA
            had approved peptides. It did not. The panel only advises, the agency has not acted on it, and it is
            still not legal to compound any of the six. A rule change, if it comes at all, is likely years out.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl">How the process actually works</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Compounding pharmacies can only work from ingredients that appear on an approved federal list —
              the 503A Bulks List. If a substance is not on it, a pharmacy cannot legally compound with it,
              regardless of what any doctor thinks of it.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Getting onto that list is a formal process: someone nominates a substance, FDA scientists review
              the evidence and publish their assessment, an advisory committee meets in public and votes on a
              recommendation, and then the FDA decides.
            </p>
            <p className="mt-5 rounded-xl2 border-l-4 border-accent bg-accent-light/40 p-4 font-medium text-ink">
              The part everyone misses: the committee only recommends. The FDA is not bound by it and has gone
              against these panels before. Even when the agency agrees, it must publish a proposed rule, take
              public comment, and issue a final rule — with no statutory deadline. Previous substances have
              taken more than two years.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">What happened, in order</h2>
            <div className="mt-4 overflow-hidden rounded-xl2 border border-ink/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-ink/[0.03] text-xs uppercase tracking-wide text-ink-muted">
                  <tr>
                    <th className="p-3 font-semibold">When</th>
                    <th className="p-3 font-semibold">What</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMELINE.map(([when, what], i) => (
                    <tr key={i} className="border-t border-ink/10 align-top">
                      <td className="whitespace-nowrap p-3 font-semibold text-ink">{when}</td>
                      <td className="p-3 text-ink-soft">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">The vote</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Six of seven were recommended. The margins were narrow and several members abstained. Tallies
              come from attorneys who attended; FDA has not published official minutes.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl2 border border-ink/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-ink/[0.03] text-xs uppercase tracking-wide text-ink-muted">
                  <tr>
                    <th className="p-3 font-semibold">Peptide</th>
                    <th className="p-3 font-semibold">Nominated for</th>
                    <th className="p-3 font-semibold">Vote</th>
                    <th className="p-3 font-semibold">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {VOTE.map(([p, nom, vote, outcome], i) => (
                    <tr key={i} className="border-t border-ink/10 align-top">
                      <td className="p-3 font-semibold text-ink">{p}</td>
                      <td className="p-3 text-ink-soft">{nom}</td>
                      <td className="whitespace-nowrap p-3 text-ink-soft">{vote}</td>
                      <td className="p-3">
                        <span
                          className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${
                            outcome === "Rejected"
                              ? "border-red-200 bg-red-50 text-red-800"
                              : "border-ink/15 bg-ink/5 text-ink-soft"
                          }`}
                        >
                          {outcome}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 rounded-xl2 border-l-4 border-accent bg-accent-light/40 p-4 text-ink-soft">
              Worth noticing what these were actually reviewed <em>for</em>. BPC-157 was evaluated for
              ulcerative colitis — not for the tendon or joint injury that virtually everyone taking it is
              taking it for. None of the seven was reviewed for the recovery, performance or anti-ageing uses
              that drive the market. A recommendation for one use is not a finding about any other.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">What the vote did not do</h2>
            <ul className="mt-4 space-y-2 pl-5">
              <li className="list-disc text-ink-soft marker:text-clinic"><strong>It was not approval.</strong> Drug approval is an entirely separate pathway. Nothing was approved.</li>
              <li className="list-disc text-ink-soft marker:text-clinic"><strong>It did not make compounding legal.</strong> None of the six can lawfully be compounded today — unchanged from before the meeting.</li>
              <li className="list-disc text-ink-soft marker:text-clinic"><strong>It was not a safety finding.</strong> The panel voted on eligibility for a list, not on whether anything is safe or works.</li>
              <li className="list-disc text-ink-soft marker:text-clinic"><strong>It did not settle the evidence question.</strong> The agency’s own scientists opposed all seven, citing very little human data and no agreed standard for identity or purity.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">Where it stands, and what to watch</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              As of today the FDA has taken no action; the six remain off the list. The signal that something has
              genuinely changed is a proposed rule appearing in the Federal Register. Until then nothing has
              moved. Reporting suggested the process could run into 2028, and the agency can still decline to
              follow the panel. A second committee meeting is expected in early 2027 on five more peptides.
            </p>
            <p className="mt-5 rounded-xl2 border-l-4 border-accent bg-accent-light/40 p-4 font-medium text-ink">
              If you take one thing from this: “an FDA panel recommended it” and “the FDA approved it” are being
              used interchangeably right now, including by people selling these products. They are not the same,
              the gap between them is measured in years, and it may never close.
            </p>
          </section>

          <p className="mt-10 text-xs leading-relaxed text-ink-muted">
            Sourced from FDA meeting materials and briefing documents, the Federal Register notice, and
            contemporaneous reporting by NPR, the Associated Press, PBS NewsHour, CBS, ABC, TIME and the
            American Journal of Managed Care.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CTA href="/peptides" variant="secondary">Back to the peptide library</CTA>
          </div>

          <ImportantSafetyInfo className="mt-10" />
        </article>
      </Container>
    </>
  );
}
