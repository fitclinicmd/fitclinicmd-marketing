import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { siteIsIndexable } from "@/lib/claims";

// Pre-launch (or with any unapproved marketing claim) the whole site is
// disallowed. Both conditions must be true to open it up — see lib/claims.ts.
//
// ⚠️ A named user-agent group REPLACES the "*" group for that agent — it does
// NOT inherit from it. Hand-writing per-agent rules is how a sibling site in
// this network ended up granting named AI crawlers exactly the paths "*"
// denied. So the rule set is defined ONCE and mapped across every agent below,
// which makes divergence structurally impossible. If you add a Disallow, add it
// to `OPEN_RULE` and every group gets it.
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  // Others that drive citations
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

const OPEN_RULE = { allow: "/" } as const;

export default function robots(): MetadataRoute.Robots {
  if (!siteIsIndexable()) {
    // Blocked state: a single wildcard rule covers every agent, named or not.
    // Deliberately NO named groups here — adding one would carve that agent an
    // exception out of this disallow, which is the opposite of the intent.
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", ...OPEN_RULE },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, ...OPEN_RULE })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
