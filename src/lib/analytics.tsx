import Script from "next/script";

// PRIVACY-PRESERVING ANALYTICS ONLY.
//
// Rules for this zone (approved posture — see COUNSEL-REVIEW-PACKET.md §3.3):
//   • No third-party ADVERTISING pixels. Ever. CI fails the build if one appears.
//   • Cookieless, no cross-site identifiers.
//   • No event name, page identifier or property may reveal a condition or a
//     treatment interest.
//   • Nothing loads unless explicitly enabled AND a script source is configured,
//     so the default state is: no third-party requests at all.
//
// Deliberately dormant: shipped off, enabled by config after counsel sign-off.
export function Analytics() {
  const enabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;

  if (!enabled || !src || !domain) return null;

  return <Script src={src} data-domain={domain} strategy="afterInteractive" defer />;
}
