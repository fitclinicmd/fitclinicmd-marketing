import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PUBLIC_LEGAL_DOCS } from "@/lib/legal";
import { publishedArticles } from "@/lib/articles";
import { PEPTIDES } from "@/lib/peptides";
import { BLENDS } from "@/lib/blends";
import { FULL_REVIEWS } from "@/lib/fullReviews";

const ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/how-it-works", priority: 0.9 },
  { path: "/treatments", priority: 0.9 },
  { path: "/treatments/peptides", priority: 0.9 },
  { path: "/treatments/weight-management", priority: 0.9 },
  { path: "/learn", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/peptides", priority: 0.9 },
  { path: "/education/start-here.html", priority: 0.9 },
  { path: "/education/foundations.html", priority: 0.8 },
  { path: "/glp-1", priority: 0.9 },
  { path: "/peptides/fda-status", priority: 0.8 },
  { path: "/faq", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...ROUTES.map((r) => ({
      url: `${SITE.url}${r.path}`,
      lastModified: now,
      priority: r.priority,
    })),
    // Education articles — generated from the registry so new posts are never
    // missed from the sitemap.
    ...publishedArticles().map((a) => ({
      url: `${SITE.url}/learn/${a.slug}`,
      lastModified: new Date(a.updated),
      priority: 0.6,
    })),
    // Peptide library — the largest body of content on the site, and it was
    // absent from the sitemap entirely until 2026-08-25. Generated from the
    // registries, like the articles above, so new entries are never missed.
    ...PEPTIDES.map((p) => ({
      url: `${SITE.url}/peptides/${p.slug}`,
      lastModified: new Date(p.updated),
      priority: 0.7,
    })),
    ...BLENDS.map((b) => ({
      url: `${SITE.url}/peptides/blends/${b.slug}`,
      lastModified: new Date(b.updated),
      priority: 0.7,
    })),
    // Long-form reviews. These existed only as PDFs until 2026-08-31 and were
    // therefore absent from the sitemap entirely — roughly 43,000 words of the
    // deepest content on the site, invisible.
    // Only full reviews for peptides still in the library (blends removed from
    // FitClinicMD per the LegitScript scope, 2026-10).
    ...FULL_REVIEWS.filter(
      (r) => r.kind === "peptide" && PEPTIDES.some((p) => p.slug === r.slug),
    ).map((r) => ({
      url: `${SITE.url}/peptides/${r.slug}/full`,
      lastModified: now,
      priority: 0.6,
    })),
    ...PUBLIC_LEGAL_DOCS.map((d) => ({
      url: `${SITE.url}/legal/${d.slug}`,
      lastModified: now,
      priority: 0.3,
    })),
  ];
}
