# fitclinicmd-marketing

Public marketing site for **FitClinicMD** — `fitclinicmd.com`.

> ## ⚠️ This is the PHI-FREE zone
>
> This repository is **zone 1 of a deliberate two-zone architecture**. It must never collect, transmit, store or display protected health information.
>
> | | Marketing zone (**this repo**) | Application zone (`fitclinicmd-com`) |
> |---|---|---|
> | Domain | `fitclinicmd.com` | `app.fitclinicmd.com` |
> | Host | Vercel | BAA-signing host (Aptible) |
> | PHI | **Never** | Yes — BAA-covered |
> | Analytics | Privacy-preserving only | **None, ever** |
> | Indexed | Yes (at launch) | Never |
>
> **Hard rules — do not violate:**
> 1. **No health information is collected here.** No intake, no symptom questions, no eligibility quiz. Eligibility assessment happens *inside the application*, after registration.
> 2. **No third-party advertising pixels.** Ever. See `docs/COUNSEL-REVIEW-PACKET.md` §3.3 in the app repo.
> 3. **No condition or treatment terms** in URLs, form fields, or analytics event names.
> 4. The contact form is **general inquiries only** and warns users not to include medical details.
> 5. CTAs **hand off** to the application zone; they never carry health context.

## Stack

Next.js (App Router, static-first) · TypeScript · Tailwind CSS · deployed on Vercel. No database, no auth, no server-side patient data.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npm run typecheck
```

## Environment

See `.env.example`. Notable:

- `NEXT_PUBLIC_SITE_INDEXABLE` — **leave `false` until counsel approves marketing claims.** Guards against unapproved claims being indexed.
- `NEXT_PUBLIC_ANALYTICS_ENABLED` — privacy-preserving analytics, **off by default**; requires counsel sign-off.
- `NEXT_PUBLIC_APP_URL` — where CTAs hand off (the PHI application).

## Marketing claims are gated

Treatment, efficacy and outcome claims live in a registry (`src/lib/claims.ts`) with an approval status. **Unapproved claims render as clearly-marked placeholders**, and the site shows a pre-launch banner while any claim is pending. This mirrors the legal-document registry in the application repo.

To publish a claim: fill its `text`, record the counsel approval, and set `status: "APPROVED"`.

## Accessibility & performance targets

WCAG 2.2 AA · Lighthouse ≥ 95 (network gate) · LCP < 1.8s · INP < 150ms · CLS < 0.05.

## Related

- Application repo: `rothlaw-network/fitclinicmd-com` (HIPAA-isolated)
- `docs/GO-LIVE-PUNCHLIST.md` (app repo) — items D6 / E4 cover this site
- `docs/COUNSEL-REVIEW-PACKET.md` (app repo) — Part 4 gates the claims on this site

**Emergency contact:** security@rothandroth.net
