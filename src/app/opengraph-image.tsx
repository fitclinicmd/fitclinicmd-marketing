import { ImageResponse } from "next/og";

// Brand social-share card (1200×630). Rendered by next/og at build time — no
// external fonts or images, so it's self-contained and fast. Next wires this
// into og:image automatically for every page that doesn't define its own.
export const runtime = "nodejs";
export const alt = "FitClinicMD — Physician-guided weight and hormone care, delivered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0f1b2d";
const INK_MUTED = "#5a6472";
const CLINIC = "#0e7c86";
const ACCENT = "#c8962a";
const SAND = "#faf8f5";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: SAND,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 8, background: CLINIC, borderRadius: 4 }} />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              color: INK_MUTED,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Physician-guided care
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Matches the wordmark: "FitClinic" teal, "MD" ink. This card
              previously had it the other way round, which is how the header
              was wrong too — both are corrected now. */}
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>
            <span style={{ color: CLINIC }}>FitClinic</span>
            <span style={{ color: INK }}>MD</span>
          </div>
          <div style={{ fontSize: 40, color: INK, marginTop: 18, maxWidth: 900, lineHeight: 1.25 }}>
            Weight, hormone, and wellness therapies — prescribed by licensed U.S. providers when
            it&apos;s right for you.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, background: ACCENT, borderRadius: 999 }} />
          <div style={{ fontSize: 26, color: INK_MUTED }}>
            Licensed U.S. providers · Cash-pay telehealth · Medication delivered
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
