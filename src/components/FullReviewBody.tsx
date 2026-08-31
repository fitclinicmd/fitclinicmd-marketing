import type { ReviewSection } from "@/lib/fullReviews";

/** Renders the generated long-form review. Shared by the peptide and blend
 *  routes so both read identically — the source documents use the same
 *  structure, and the pages should not drift apart either. */
export default function FullReviewBody({ sections }: { sections: ReviewSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.heading} className="mt-12">
          <h2 className="text-2xl">{s.heading}</h2>
          {s.blocks.map((b, i) => {
            if (b.type === "para") {
              return (
                <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                  {b.text}
                </p>
              );
            }
            if (b.type === "list") {
              return (
                <ul key={i} className="mt-4 space-y-3">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-ink-soft">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinic"
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            // Tables carry their own scroll container so the page body never
            // scrolls sideways on a phone.
            return (
              <div key={i} className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      {b.columns.map((c) => (
                        <th
                          key={c}
                          className="border-b border-ink/15 py-2 pr-4 text-xs font-semibold uppercase tracking-wide text-ink-muted"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <td
                            key={ci}
                            className={`border-b border-ink/10 py-3 pr-4 align-top leading-relaxed ${
                              ci === 0 ? "font-semibold text-ink" : "text-ink-soft"
                            }`}
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}
