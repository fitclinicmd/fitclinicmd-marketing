// Twitter/X share card — reuses the same generated brand image as og:image.
// `runtime` is declared here directly (Next can't read it through a re-export).
export const runtime = "nodejs";
export { default, alt, size, contentType } from "./opengraph-image";
