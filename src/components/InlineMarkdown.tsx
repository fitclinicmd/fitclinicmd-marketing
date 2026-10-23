import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

/**
 * Inline Markdown for blog posts: links, autolinks, bold, italic,
 * strikethrough, code and backslash escapes. Output is React elements, never
 * raw HTML, so post text can't inject markup.
 *
 * Off-site links open in a new tab with rel="noopener noreferrer", the same
 * convention as PrimarySources.
 */

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, body: string) => {
    if (body[0] === "#") {
      const code = body[1].toLowerCase() === "x" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }
    return NAMED_ENTITIES[body.toLowerCase()] ?? match;
  });
}

function isSafeHref(href: string): boolean {
  return /^(https?:|mailto:|tel:|\/|#)/i.test(href);
}

function isExternal(href: string): boolean {
  if (!/^https?:/i.test(href)) return false;
  try {
    return new URL(href).hostname.replace(/^www\./, "") !== new URL(SITE.url).hostname.replace(/^www\./, "");
  } catch {
    return true;
  }
}

const LINK_CLASS = "font-medium text-clinic underline decoration-clinic/30 underline-offset-2 transition hover:decoration-clinic";

// Order matters: code spans first (their contents are literal), then images
// and links (their text may hold emphasis), then emphasis, longest marker first.
const TOKEN =
  /(\\[!-/:-@[-`{-~])|(`+)([\s\S]*?[^`])\2(?!`)|!\[([^\]]*)\]\(\s*(?:<([^>\n]+)>|((?:[^()\s]|\([^()\s]*\))+))(?:\s+"[^"]*")?\s*\)|\[((?:\\.|[^\]\\])*)\]\(\s*(?:<([^>\n]+)>|((?:[^()\s]|\([^()\s]*\))+))(?:\s+"[^"]*")?\s*\)|<(https?:\/\/[^>\s]+)>|(\*\*|__)(?=\S)([\s\S]*?\S)\11|(~~)(?=\S)([\s\S]*?\S)~~|(?<![\w*])(\*|_)(?=\S)([\s\S]*?\S)\15(?![*_\w])/;

let keyCounter = 0;

function link(href: string, children: ReactNode): ReactNode {
  if (!isSafeHref(href)) return children;
  const external = isExternal(href);
  return (
    <a
      key={`l${keyCounter++}`}
      href={href}
      className={LINK_CLASS}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function parse(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let rest = text;
  while (rest) {
    const m = rest.match(TOKEN);
    if (!m || m.index === undefined) {
      out.push(decodeEntities(rest));
      break;
    }
    if (m.index > 0) out.push(decodeEntities(rest.slice(0, m.index)));
    const k = `t${keyCounter++}`;
    if (m[1]) {
      out.push(m[1].slice(1));
    } else if (m[2]) {
      out.push(
        <code key={k} className="rounded bg-ink/5 px-1 py-0.5 text-[0.9em]">
          {m[3].trim()}
        </code>,
      );
    } else if (m[5] !== undefined || m[6] !== undefined) {
      // Inline images are rare in posts; render the alt text as a link so
      // nothing loads from an unreviewed host.
      const src = m[5] ?? m[6];
      out.push(link(src, decodeEntities(m[4] || src)));
    } else if (m[8] !== undefined || m[9] !== undefined) {
      out.push(link(m[8] ?? m[9], parse(m[7])));
    } else if (m[10]) {
      out.push(link(m[10], m[10]));
    } else if (m[11]) {
      out.push(
        <strong key={k} className="font-semibold text-ink">
          {parse(m[12])}
        </strong>,
      );
    } else if (m[13]) {
      out.push(<s key={k}>{parse(m[14])}</s>);
    } else if (m[15]) {
      out.push(<em key={k}>{parse(m[16])}</em>);
    }
    rest = rest.slice(m.index + m[0].length);
  }
  return out;
}

export default function InlineMarkdown({ text }: { text: string }) {
  return <>{parse(text)}</>;
}
