// Security headers for the public marketing zone. This zone is PHI-free, but
// it still must not leak referrers to third parties or be framed.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak the page a visitor came from to any third party.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()" },
];

// Blends retired in the 2026-08-25 revision. These URLs were live and in the
// sitemap, so they 301 to the blends index rather than 404. Kept in step with
// RETIRED_BLEND_SLUGS in src/lib/blends.ts.
const RETIRED_BLENDS = [
  "regrow", "refine", "restore", "guard", "burn", "perform",
  "pulse", "maintain", "focus", "balance", "desire",
];

// "Wolverine" shipped briefly on 2026-08-25 and was renamed to "Repair" the
// same day (Marvel trademark). Repair is also what the retired 19-blend set
// called this exact formula, so that URL is live again rather than retired.
const RENAMED_BLENDS = { wolverine: "repair" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      ...RETIRED_BLENDS.map((slug) => ({
        source: `/peptides/blends/${slug}`,
        destination: "/peptides/blends",
        permanent: true,
      })),
      ...Object.entries(RENAMED_BLENDS).map(([from, to]) => ({
        source: `/peptides/blends/${from}`,
        destination: `/peptides/blends/${to}`,
        permanent: true,
      })),
      // Subscription content was removed sitewide 2026-08-25; this article was
      // live and in the sitemap, so it redirects rather than 404s.
      {
        source: "/learn/reading-a-subscription-before-you-sign-up",
        destination: "/learn",
        permanent: true,
      },
      // Short marketing vanity paths that appear in printed/hand-off material,
      // pointed at the real hubs so they never dead-end.
      { source: "/weight", destination: "/treatments/weight-management", permanent: true },
      { source: "/recover", destination: "/peptides", permanent: true },
      { source: "/library", destination: "/peptides", permanent: true },
      { source: "/visit", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
