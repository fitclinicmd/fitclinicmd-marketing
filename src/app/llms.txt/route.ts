import { llmsTxt } from "@/lib/llms";

// Generated from the same registries as the sitemap — see lib/llms.ts for why
// this is a route rather than a static file in public/.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
