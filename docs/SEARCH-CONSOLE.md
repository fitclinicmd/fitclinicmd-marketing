# Google Search Console — setup runbook (FitClinicMD)

Goal: verify `fitclinicmd.com` in Google Search Console (GSC) and submit the
sitemap, so Google reports coverage/impressions once the site is indexable.

> IMPORTANT — indexing gate. The site is currently **non-indexed** on purpose
> (`robots.txt` disallows all, every page ships `noindex`). GSC can be verified
> at any time, but Google will not index pages while that block is in place.
> Indexing turns on only when **all marketing claims are APPROVED** *and*
> `NEXT_PUBLIC_SITE_INDEXABLE=true`. Do the verification now so it's ready;
> expect "Discovered/blocked by robots" in GSC until launch — that's expected.

## Recommended: DNS TXT verification (a Domain property — no code)

This covers the apex and every subdomain, and is the network standard (it does
**not** grant Google any access to the registrar).

1. In GSC, add a property → choose **Domain** → enter `fitclinicmd.com`.
2. Google shows a **TXT record** value, e.g. `google-site-verification=XXXXXXXX`.
3. Add that TXT record to `fitclinicmd.com` DNS at whatever manages the domain's
   DNS (registrar or Vercel DNS). Host/name `@` (root), type `TXT`, value = the
   full string Google gave.
4. Wait for DNS propagation (minutes–hours), then click **Verify** in GSC.
5. After verification, submit the sitemap: GSC → Sitemaps → add
   `https://fitclinicmd.com/sitemap.xml`.

## Alternative: HTML meta-tag verification (a URL-prefix property — code ready)

Use this only if you prefer not to touch DNS. The code hook already exists.

1. In GSC, add a property → choose **URL prefix** → `https://fitclinicmd.com`.
2. Choose the **HTML tag** method. Google shows a tag like
   `<meta name="google-site-verification" content="TOKEN">` — copy the `TOKEN`.
3. Set the env var on the Vercel project (Production):
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=TOKEN`, then redeploy.
   The tag renders automatically on every page (see `src/app/layout.tsx`).
4. Click **Verify** in GSC.

Note: a Domain property (DNS method) is broader and preferred; the meta-tag
method verifies only the exact `https://fitclinicmd.com` prefix.

## After launch (once indexable)

- Confirm `https://fitclinicmd.com/robots.txt` shows `Allow: /` and lists the
  sitemap, and that pages no longer carry `noindex` (view-source → `robots` meta).
- In GSC, use **URL Inspection** on a few key pages and "Request indexing."
- Re-submit / confirm the sitemap is read without errors.
- Watch Coverage and Page Indexing for issues over the first few weeks.

## What's already in place (no action needed)

- `sitemap.xml` — auto-generated, currently 23 URLs (home, treatments incl.
  peptides, pricing, providers, faq, about, learn + 8 articles, legal).
- `robots.ts` — flips from disallow-all to allow + sitemap on the indexing gate.
- Structured data: Organization, WebSite, BreadcrumbList, FAQPage, Article.
- `llms.txt` and `llms-full.txt` for AI crawlers.
- Open Graph / Twitter share image (`opengraph-image`).
