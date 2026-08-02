import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PUBLIC_LEGAL_DOCS } from "@/lib/legal";
import { publishedArticles } from "@/lib/articles";

const ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/how-it-works", priority: 0.9 },
  { path: "/treatments", priority: 0.9 },
  { path: "/treatments/weight-management", priority: 0.9 },
  { path: "/treatments/hormone-therapy", priority: 0.9 },
  { path: "/treatments/peptides", priority: 0.9 },
  { path: "/pricing", priority: 0.8 },
  { path: "/learn", priority: 0.7 },
  { path: "/providers", priority: 0.7 },
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
    ...PUBLIC_LEGAL_DOCS.map((d) => ({
      url: `${SITE.url}/legal/${d.slug}`,
      lastModified: now,
      priority: 0.3,
    })),
  ];
}
