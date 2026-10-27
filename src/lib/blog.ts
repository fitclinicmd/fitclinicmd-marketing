import fs from "node:fs";
import path from "node:path";

// Block text stays as inline Markdown (links, bold, italic, code). The page
// turns it into elements with <InlineMarkdown>, so nothing here is ever
// rendered as raw HTML.
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[]; start: number }
  | { type: "callout"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string }
  | { type: "code"; text: string }
  | { type: "hr" };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  date: string;
  updated: string;
  readMinutes: number;
  status: "PUBLISHED" | "DRAFT";
  body: BlogBlock[];
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 225;

// Double-quoted YAML scalars use backslash escapes (\" \\ \n \t \xNN \uNNNN).
function unescapeDoubleQuoted(value: string): string {
  return value.replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|.)/g, (_, esc: string) => {
    if (esc.length > 1) return String.fromCharCode(parseInt(esc.slice(1), 16));
    return ({ n: "\n", t: "\t", r: "\r", "0": "\0" } as Record<string, string>)[esc] ?? esc;
  });
}

function scalar(value: string): string | number | boolean {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
    return unescapeDoubleQuoted(trimmed.slice(1, -1));
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length >= 2) {
    return trimmed.slice(1, -1).replace(/''/g, "'");
  }
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  return trimmed;
}

function parseFrontmatter(raw: string): { fields: Record<string, string | number | boolean>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { fields: {}, body: raw };

  const fields: Record<string, string | number | boolean> = {};
  for (const line of match[1].split("\n")) {
    // Skip list items and indented continuation lines (e.g. `tags:` arrays).
    if (/^\s/.test(line)) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    if (key) fields[key] = scalar(line.slice(separator + 1));
  }
  return { fields, body: match[2] };
}

const HEADING = /^(#{1,6})\s+(.*?)\s*#*\s*$/;
const LIST_ITEM = /^(\s*)([*+-]|\d{1,9}[.)])\s+(.*)$/;
const RULE = /^(?:[-*_]\s*){3,}$/;
const IMAGE_LINE = /^!\[([^\]]*)\]\(\s*(?:<([^>\n]+)>|((?:[^()\s]|\([^()\s]*\))+))(?:\s+"[^"]*")?\s*\)$/;
const TABLE_DIVIDER = /^\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)*\|?$/;

function tableCells(line: string): string[] {
  const inner = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return inner.split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, "|"));
}

function markdownBlocks(markdown: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  let paragraph: string[] = [];
  let quote: string[] = [];
  let list: { ordered: boolean; start: number; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "p", text: paragraph.join(" ").trim() });
      paragraph = [];
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      blocks.push({ type: "callout", text: quote.join(" ").trim() });
      quote = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(
        list.ordered
          ? { type: "ol", items: list.items, start: list.start }
          : { type: "ul", items: list.items },
      );
      list = null;
    }
  };
  const flushAll = () => {
    flushParagraph();
    flushQuote();
    flushList();
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      // A blank line ends a paragraph or quote. Lists survive it, because
      // "loose" lists put a blank line between every item.
      flushParagraph();
      flushQuote();
      continue;
    }

    if (/^(```|~~~)/.test(trimmed)) {
      flushAll();
      const fence = trimmed.slice(0, 3);
      const code: string[] = [];
      for (i++; i < lines.length && !lines[i].trim().startsWith(fence); i++) code.push(lines[i]);
      blocks.push({ type: "code", text: code.join("\n") });
      continue;
    }

    const item = line.match(LIST_ITEM);
    if (item && !RULE.test(trimmed)) {
      flushParagraph();
      flushQuote();
      const ordered = /\d/.test(item[2]);
      if (!list || list.ordered !== ordered) {
        flushList();
        list = { ordered, start: ordered ? parseInt(item[2], 10) : 1, items: [] };
      }
      list.items.push(item[3].trim());
      continue;
    }

    // Indented text right under a list item continues that item.
    if (list && /^\s{2,}/.test(line) && !paragraph.length) {
      list.items[list.items.length - 1] += ` ${trimmed}`;
      continue;
    }
    flushList();

    const heading = trimmed.match(HEADING);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      // The page already renders the title as the only <h1>.
      if (level === 1) continue;
      blocks.push({ type: level === 2 ? "h2" : level === 3 ? "h3" : "h4", text: heading[2] });
      continue;
    }

    if (RULE.test(trimmed)) {
      flushAll();
      blocks.push({ type: "hr" });
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      quote.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }
    flushQuote();

    if (trimmed.startsWith("|") && i + 1 < lines.length && TABLE_DIVIDER.test(lines[i + 1].trim())) {
      flushParagraph();
      const head = tableCells(trimmed);
      const rows: string[][] = [];
      for (i += 2; i < lines.length && lines[i].trim().startsWith("|"); i++) rows.push(tableCells(lines[i]));
      i--;
      blocks.push({ type: "table", head, rows });
      continue;
    }

    const image = trimmed.match(IMAGE_LINE);
    if (image && !paragraph.length) {
      blocks.push({ type: "image", alt: image[1], src: image[2] ?? image[3] });
      continue;
    }

    // Trailing "\" or two spaces is a hard break; a space reads the same here.
    paragraph.push(trimmed.replace(/\\$/, ""));
  }
  flushAll();
  return blocks;
}

function estimateReadMinutes(markdown: string): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function readPost(filename: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { fields, body } = parseFrontmatter(raw);
  if (typeof fields.title !== "string" || typeof fields.slug !== "string") return null;

  const status = fields.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
  const date = typeof fields.date === "string" ? fields.date : "";
  const updated = typeof fields.updated === "string" ? fields.updated : date;
  const readMinutes = Number(fields.readMinutes);
  return {
    slug: fields.slug,
    title: fields.title,
    description: typeof fields.description === "string" ? fields.description : "",
    topic: typeof fields.topic === "string" ? fields.topic : "Blog",
    date,
    updated,
    readMinutes: readMinutes > 0 ? Math.round(readMinutes) : estimateReadMinutes(body),
    status,
    body: markdownBlocks(body),
  };
}

export function allBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map(readPost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function publishedBlogPosts(): BlogPost[] {
  return allBlogPosts().filter((post) => post.status === "PUBLISHED");
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return publishedBlogPosts().find((post) => post.slug === slug);
}
