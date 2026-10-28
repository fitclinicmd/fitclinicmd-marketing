# FitClinicMD — Launch Runbook

**Status as of 2026-10-28 (verified live):** PRE-LAUNCH. The site, legal, and
content are launch-ready. The gate is purely config + the GEN Health BAA.

- Live: `robots.txt` = `Disallow: /`, homepage serves `noindex` + a pre-launch banner.
- Marketing claims: **all 13 approved** (PR #148). Legal docs published.
- Prod env (Vercel team `fit-clinic-md`) currently has ONLY: `NEXT_PUBLIC_APP_URL`,
  `NEXT_PUBLIC_SHOW_SIGN_IN`.
- The go-public gate is `siteIsIndexable()` in `src/lib/claims.ts`:
  `NEXT_PUBLIC_SITE_INDEXABLE === "true" && allClaimsApproved()`. Claims half is
  already true, so the only remaining switch for indexing is the env flag.

Marketing site is PHI-free. Making it public is not a compliance event in
itself; the risk is launching with no working funnel endpoint and losing leads.
So the order below is **wire leads first, then flip** (Michael's call).

---

## ① GEN Health BAA — the real functional blocker (Michael + GEN)

Without it, GEN stays sandbox and the funnel cannot process a real patient. Do ONE of:
- **Execute the negotiated BAA.** Send the cover email drafted in Michael's
  Gmail (To: chad@gen-health.app) with `GEN-Health-BAA-Medvora-FINAL-2026-10-27.docx`
  attached (in `fitclinicmd-com/docs/`). Get it countersigned. **or**
- **Accept GEN's click-through** only after it clears the Part C checklist in
  `fitclinicmd-com/docs/GEN-HEALTH-BAA-AND-ONBOARDING.md`; save a PDF/screenshot.

This is Michael's lane as counsel. Claude cannot send the email.

---

## ② Lead capture — so no lead is lost (Michael provides, Claude sets)

`/contact` and `/start` deliver through Paubox. Until these are set, both fall
back to "we'll be in touch" and nothing is delivered.

**Values needed from Michael:**
- Paubox: `PAUBOX_API_USER`, `PAUBOX_API_KEY`, `PAUBOX_FROM` (verified sender)
- Lead inbox(es): `CONTACT_INBOX`, `BOOKING_INBOX` (one address is fine for both)
- LocumTele booking link: `NEXT_PUBLIC_BOOKING_URL`

**Commands (run from `fitclinicmd-marketing/`, Vercel team `fit-clinic-md`):**
```bash
vercel env add PAUBOX_API_USER production
vercel env add PAUBOX_API_KEY production
vercel env add PAUBOX_FROM production
vercel env add CONTACT_INBOX production
vercel env add BOOKING_INBOX production
vercel env add NEXT_PUBLIC_BOOKING_URL production
```
Then redeploy and **verify a real submission actually lands** in the inbox from
both `/contact` and `/start` before going further.

---

## ③ GEN funnel wiring (after the BAA clears)

- `GENHEALTH_ASSESSMENT_URL` (+ `GENHEALTH_API_KEY`, `GENHEALTH_BASE_URL`) turns on
  the assessment → checkout handoff built in `src/lib/genhealth.ts` / `/start`.
- Verify `/start` forwards to the GEN assessment with attribution, then to the
  LocumTele booking.
- ⚠️ Do NOT set `GENHEALTH_WEBHOOK_SECRET` on this PHI-free marketing host until
  counsel confirms per-order records may surface here (vs. only the PHI app).

---

## ④ Go-public flip — LAST step (Claude, one variable)

Only after ① and ② are done:
```bash
vercel env add NEXT_PUBLIC_SITE_INDEXABLE production   # value: true
```
Redeploy, then verify on the live site:
- `https://www.fitclinicmd.com/robots.txt` allows crawling (no `Disallow: /`)
- homepage has NO `noindex` meta and the pre-launch banner is gone
- `llms.txt` serves the full map (it gates on `siteIsIndexable()` too)

FitClinicMD is live.

---

## ⑤ Post-launch

- Submit the sitemap in Google Search Console (see `docs/SEARCH-CONSOLE.md`).
- Confirm analytics is firing (if/when enabled).
- Watch the first real leads land in the inbox; confirm the GEN handoff completes.

---

## Fastest path to launch

Two inputs from Michael start everything:
1. **Send the GEN BAA email** (unblocks ①).
2. **Send the Paubox creds + lead inbox + LocumTele URL** (unblocks ②).

With those, ②③④ can be done within the hour, and the flip happens the moment
the BAA clears. New Start MD is already fully public; FitClinicMD is the only
one still gated.
