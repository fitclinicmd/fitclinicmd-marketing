import type { Config } from "tailwindcss";

// FitClinicMD brand — clinical, premium, warm. Deliberately its own identity:
// this vertical is HIPAA-isolated and must NOT visually or topically associate
// with the DUI/legal network. Core tokens match the patient application so the
// marketing → app handoff doesn't feel like two different companies.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0f1b2d", soft: "#1e2f45", muted: "#5a6472" },
        clinic: { DEFAULT: "#0e7c86", deep: "#0a5c64", light: "#e6f2f3" },
        accent: { DEFAULT: "#c8962a", light: "#f6efdf" },
        sand: "#faf8f5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { rise: "rise .6s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
