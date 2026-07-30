# FitClinicMD — Proposed Marketing-Claim Language for Counsel Review

**Status: DRAFT / PROPOSED. Nothing in this document is live.** Every claim in
`src/lib/claims.ts` remains `PENDING_COUNSEL`; the site renders placeholders and
a pre-launch banner until counsel approves each item. This document exists so
counsel reviews *concrete proposed wording* rather than blank slots.

**How approved text goes live (per claim):** counsel finalizes the wording →
replace `text` in `src/lib/claims.ts`, record who/when in `approval`, flip
`status` to `APPROVED`. The site only becomes indexable once **every** claim is
approved *and* `NEXT_PUBLIC_SITE_INDEXABLE=true`.

**Operating entity:** fitclinicmd.com is owned by **Medvora LLC** — provider/PC
structure and all "who we are" language must be consistent with that (see
provider-credentials, and Counsel Packet §1.1).

**Legend for inline flags:**
`⟦COUNSEL: …⟧` = a decision or confirmation counsel must make before this can be approved.

---

## ⚠️ Threshold scope decision (gates much of the below)

Michael's direction: **offer ALL peptides, testosterone, and other prescribed
medications** through the site. Before any product-specific claim can be
approved, counsel must resolve — these are the same items flagged in the Counsel
Review Packet as the launch blockers, restated here because the marketing menu
now turns on them:

1. **Peptides.** FDA placed several popular peptides (BPC-157, CJC-1295,
   ipamorelin, MOTS-c, and others) in the bulk-drug-substance category that is
   **not permitted for 503A/503B compounding**. Marketing a peptide as an
   available product — however carefully worded — presumes it can lawfully be
   compounded and dispensed. ⟦COUNSEL: confirm, per current FDA lists + the PCAC
   outcome, which specific peptides may be lawfully offered. The site should list
   ONLY those; "all peptides" cannot be represented as available.⟧
2. **Testosterone / TRT.** Schedule III controlled substance. Telehealth
   prescribing implicates the Ryan Haight Act, per-provider/per-state DEA
   registration, EPCS, and PDMP checks. ⟦COUNSEL: confirm TRT may be offered
   telehealth, in which states, and under what exam conditions. Until then the
   hormone-therapy claims below stay dark.⟧
3. **"Other prescribed medications."** Open-ended. ⟦COUNSEL: define the permissible
   catalog; each drug class carries its own advertising + prescribing rules.⟧

**Drafting posture used below:** no claim promises an outcome or implies FDA
approval of a compounded drug; product availability is written as conditional on
a provider's independent clinical judgment. This keeps the copy defensible
*regardless* of which products ultimately clear counsel — the gate on *whether a
product appears at all* is the scope decision above, not the wording.

---

## The 10 claims — proposed language

### 1. `hero-promise` — top-of-page statement
> **Proposed:** "Physician-guided weight and hormone care, by telehealth.
> Licensed providers evaluate you first and prescribe only when it's clinically
> appropriate for you."

*Why this is safe:* states the service, not a result; "only when clinically
appropriate" defeats any implied guarantee. No product named at the top level.

---

### 2. `glp1-what-it-is` — what the therapy is
> **Proposed:** "GLP-1 medications are a class of prescription drugs used in
> medically supervised weight management. When your provider prescribes one, it
> is prepared by a licensed U.S. compounding pharmacy and shipped to you.
> Compounded medications are not FDA-approved."

*Includes the mandatory compounded-status sentence so it can't read as an FDA
endorsement.*

---

### 3. `glp1-outcomes` — expected results
> **Recommended: OMIT specific numbers.** Proposed fallback wording if any
> outcome statement is used at all:
> "Results vary and are not guaranteed. Your provider will discuss what you may
> reasonably expect based on your individual health history."

⟦COUNSEL: any specific figure (e.g., "lose X% in Y weeks") requires
substantiation on file + disclaimers, or must be omitted. Recommendation:
omit numbers entirely at launch.⟧

---

### 4. `glp1-compounded-status` — regulatory status
> **Proposed:** "Compounded medications are prepared by a licensed pharmacy for
> an individual patient. They are not reviewed or approved by the FDA and are
> permitted only under specific federal and state compounding laws."

---

### 5. `hormone-what-it-is` — hormone/testosterone therapy
> **Proposed (contingent):** "For certain patients with a clinically confirmed
> hormone deficiency, a provider may consider hormone therapy based on bloodwork
> and a full evaluation. It is never prescribed on symptoms alone."

⟦COUNSEL: contingent on the controlled-substance / Ryan Haight decision (scope
item 2). If TRT does not launch, this claim stays dark and testosterone is not
mentioned anywhere on the site.⟧

---

### 6. `hormone-outcomes` — hormone results
> **Recommended: OMIT.** Fallback if used:
> "Any benefit depends on your individual clinical picture and is determined by
> your provider. Results are not guaranteed."

---

### 7. `eligibility-summary` — who may be a candidate
> **Proposed:** "This is general information, not a medical screening. Whether a
> treatment is right for you is decided during your provider visit. Please don't
> enter any health details on this site."

*Must not function as a diagnostic tool and must not collect health info in the
marketing zone (that's the PHI-free-zone rule).*

---

### 8. `pricing-headline` — price + what's included
> **Proposed (fill bracketed values):** "$[AMOUNT] per [month/quarter] — includes
> your provider visit and, when prescribed, your medication and shipping."

⟦COUNSEL: confirm exact inclusions + that the auto-renewal disclosure (below)
appears with any price.⟧

---

### 9. `pricing-autorenewal` — ROSCA / auto-renewal disclosure
> **Proposed:** "Your membership renews automatically every [interval] at
> $[amount], charged to the card on file, until you cancel. Cancel anytime at
> [method/URL]; cancellation stops future charges."

⟦COUNSEL: finalize to satisfy ROSCA + applicable state automatic-renewal statutes
(clear-and-conspicuous, affirmative consent, simple cancellation). This is a UI
requirement at checkout in the app, mirrored here.⟧

---

### 10. `provider-credentials` — how providers are described
> **Proposed:** "Care is provided by licensed U.S. clinicians (MD, DO, NP, or PA)
> authorized to practice in your state."

⟦COUNSEL: align exact wording with the Medvora LLC entity / professional-entity
structure (Packet §1.1). Do NOT name or picture specific providers until real,
verifiable clinicians are contracted — provider profiles remain placeholders.⟧

---

## New claim slots the scope expansion will require

If counsel clears additional products, these slots should be added to
`claims.ts` (drafted the same conservative way, one per product family):

- `peptides-what-it-is` — only for the specific peptides counsel confirms are
  lawfully compoundable; each with the compounded-status sentence; no outcome
  claims. ⟦COUNSEL: provide the permitted list.⟧
- `peptides-compounded-status` — same non-FDA-approved disclosure as GLP-1.
- `other-meds-what-it-is` — per additional class counsel approves.

Until counsel provides the permitted catalog, the site should **not** state or
imply that "all peptides" or any specific restricted peptide is available.

---

## Separate but related: the 3 legal documents (also PENDING)

These are not marketing claims but are on the same gate (`src/lib/legal.ts`,
mirrored from the app's `COUNSEL-REVIEW-PACKET.md`). Signup cannot open while any
is DRAFT:

1. **Notice of Privacy Practices** (`privacy`) — v1.0, PENDING.
2. **Terms of Service** (`terms`) — v1.0, PENDING (must carry the ROSCA
   auto-renewal terms).
3. **Informed Consent to Telehealth** (`telehealth-consent`) — v1.0, PENDING
   (heightened content if controlled substances are prescribed).

The full section-by-section requirements for these live in the app repo's
`docs/COUNSEL-REVIEW-PACKET.md`.

---

## What counsel returns → what we do

For each claim: **approve as-is / redline / omit.** For approved items we set
`text` + `approval` + `status: "APPROVED"` in `claims.ts`. When all 10 (plus any
new peptide/other-med slots) are approved and the 3 legal docs are published, the
site can be flipped to indexable and opened to patients.
