"use client";

import { useState } from "react";
import type { ChainEntry } from "@/lib/provenance";

export default function VerifyLookup({
  chain,
  verified,
  sampleCodes,
}: {
  chain: ChainEntry[];
  verified: boolean;
  sampleCodes: string[];
}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<ChainEntry | null | "none">(null);

  function lookup(code: string) {
    const c = code.trim().toUpperCase();
    setQuery(code);
    if (!c) {
      setResult(null);
      return;
    }
    setResult(chain.find((e) => e.code.toUpperCase() === c) ?? "none");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          lookup(query);
        }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your order's verification code (e.g. FC-7F3A-2K9D)"
          aria-label="Verification code"
          className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 font-mono text-sm text-ink placeholder:text-ink-muted focus:border-clinic focus:outline-none focus:ring-2 focus:ring-clinic/30"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-clinic px-6 py-3 text-sm font-semibold text-white transition hover:bg-clinic-deep"
        >
          Verify
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-muted">
        <span className="font-mono uppercase tracking-wide">Try a sample:</span>
        {sampleCodes.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => lookup(c)}
            className="rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[0.7rem] text-clinic transition hover:border-clinic"
          >
            {c}
          </button>
        ))}
      </div>

      {result === "none" ? (
        <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-6">
          <p className="text-sm font-semibold text-ink">No match for that code.</p>
          <p className="mt-1 text-sm text-ink-muted">
            Check the code on your order, or{" "}
            <a href="/contact" className="font-semibold text-clinic hover:text-clinic-deep">message our care team</a>.
          </p>
        </div>
      ) : null}

      {result && result !== "none" ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-ink/10 bg-clinic-light px-6 py-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clinic text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-clinic-deep">Verified</p>
              <p className="text-xs text-ink-muted">
                {verified
                  ? `Entry #${result.seq} in an intact tamper-evident chain of ${chain.length} records.`
                  : "Record found."}
              </p>
            </div>
          </div>
          <dl className="grid gap-x-8 gap-y-3 px-6 py-5 sm:grid-cols-2">
            <Field label="Product" value={result.product} />
            <Field label="Dispensed" value={result.dispensedAt} />
            <Field label="Licensed U.S. pharmacy" value={`${result.pharmacy} (${result.pharmacyState})`} />
            <Field label="Batch" value={result.batch} mono />
            <Field label="Certificate of Analysis" value={result.coa} mono />
            <Field label="Verification code" value={result.code} mono />
          </dl>
          <div className="border-t border-ink/10 px-6 py-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">Chain hash</p>
            <p className="mt-1 break-all font-mono text-[0.7rem] text-ink">{result.hash}</p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">Links to previous</p>
            <p className="mt-1 break-all font-mono text-[0.7rem] text-ink-muted">{result.prevHash}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Field({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">{label}</dt>
      <dd className={`mt-0.5 text-sm text-ink ${mono ? "font-mono" : ""}`}>{value}</dd>
    </div>
  );
}
