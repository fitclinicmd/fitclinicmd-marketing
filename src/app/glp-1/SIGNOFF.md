# /glp-1 — pre-launch sign-off record

Page: `src/app/glp-1/page.tsx` (live at www.fitclinicmd.com/glp-1)

Todd's build guide named three review lanes: telehealth medical, dispensing
pharmacy, and legal/counsel. **Reviewer of record: Michael Roth** — owner-operator
of the outpatient clinic (12+ yrs), AZ certified criminal law specialist and
former judge, creator of the patented tracking system, and counsel. He holds the
authority across all three lanes for this product and has approved the final
language.

## Status — FULLY APPROVED

| Lane | Scope | Status |
|---|---|---|
| **Legal / counsel** | FDA-brand claims (Wegovy CV, Zepbound OSA), the 20.2% vs 13.7% comparative-efficacy stat + its disclaimer, the FDA-approved-vs-compounded distinction | ✅ **Approved as-is — 2026-09-14** |
| **Medical** | Mechanism, dosing, side effects, lean-mass/discontinuation, and the contraindication/risk safety block | ✅ **Approved — 2026-09-17 (M. Roth, reviewer of record)** |
| **Pharmacy** | Compounding disclosure + contraindication/risk list | ✅ **Approved — 2026-09-17 (M. Roth, reviewer of record)** |

## Related approvals (2026-09-17, M. Roth, reviewer of record)

- **Inject video** — the Fred Hutch subcutaneous video is approved as the patient
  how-to for our **standard vial + syringe** fill; no separate TRT clip required.
- **Injection script** (`fitclinicmd-com/docs/how-to-inject-video-script.md`) —
  approved to record our own clip from if/when we choose; the Fred Hutch link is
  the live default meanwhile.
- **Exclusion screener enforcement** — approved ON; already live in production
  (`EXCLUSION_SCREENER_ENABLED=true`), so absolute contraindications hard-block.

## What counsel approved (verbatim items, no edits)

- Table row: "FDA-approved Wegovy has a specific cardiovascular risk-reduction indication for this population."
- Table row: "FDA-approved Zepbound has a specific indication for this condition."
- "…tirzepatide lost an average of 20.2% of their starting weight, compared with 13.7% for semaglutide." (direct 72-week trial — SURMOUNT-5, NEJM 2025)
- Disclaimer: "These figures are averages from a controlled study using FDA-approved products. They are not a promise of an individual result and are not evidence about any compounded preparation."
- The full FDA-approved-vs-compounded paragraph ("…is not FDA-approved — the FDA does not review its safety, effectiveness, or quality before it is marketed…").

Do NOT alter these lines without re-running counsel review.

## Before real launch

The page is publicly live but is **not fully cleared for launch marketing** until
the telehealth medical group and dispensing pharmacy complete their passes above.
