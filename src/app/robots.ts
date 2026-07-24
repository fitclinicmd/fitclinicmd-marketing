import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { siteIsIndexable } from "@/lib/claims";

// Pre-launch (or with any unapproved marketing claim) the whole site is
// disallowed. Both conditions must be true to open it up — see lib/claims.ts.
export default function robots(): MetadataRoute.Robots {
  if (!siteIsIndexable()) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
