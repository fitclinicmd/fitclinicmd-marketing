// MEGA SEO optimizer, installed by Mega for SEO (on-page optimizations).
//
// Rendered as a plain async <script> in the document <head> so it is present
// in the server HTML (MEGA's verifier reads static HTML). No site key: the
// optimizer resolves the site from the domain. It is not an advertising pixel
// and sends no custom events.
export const MEGA_OPTIMIZER_SRC = "https://cdn.gomega.ai/scripts/optimizer.min.js";

export function MegaOptimizer() {
  return <script src={MEGA_OPTIMIZER_SRC} async />;
}
