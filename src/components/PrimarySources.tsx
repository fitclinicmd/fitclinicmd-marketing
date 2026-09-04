/**
 * Primary-source list for the regulatory pages.
 *
 * These pages describe federal action, so a reader has to be able to check the
 * record rather than take our word for it — and every URL here was fetched and
 * confirmed to resolve before it shipped. Links open in a new tab so nobody
 * loses their place, and carry rel="noopener noreferrer" because they leave
 * the site.
 */
export type Source = { href: string; title: string; publisher: string; note?: string };

export default function PrimarySources({
  sources,
  className = "",
}: {
  sources: Source[];
  className?: string;
}) {
  return (
    <section className={`rounded-xl2 border border-ink/15 bg-white p-5 sm:p-6 ${className}`}>
      <h2 className="text-lg sm:text-xl">Primary sources</h2>
      <p className="mt-2 text-sm text-ink-soft">
        Everything above is drawn from the federal record. These are the underlying documents, so
        you can read them yourself rather than take our summary for it.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-clinic underline decoration-clinic/30 underline-offset-2 transition hover:decoration-clinic"
            >
              {s.title} <span aria-hidden="true">↗</span>
            </a>
            <span className="ml-1 text-sm text-ink-muted">— {s.publisher}</span>
            {s.note ? <p className="mt-0.5 text-sm text-ink-soft">{s.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
