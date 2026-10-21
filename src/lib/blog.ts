import fs from "node:fs";
import path from "node:path";
import type { Block } from "./articles";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  date: string;
  updated: string;
  readMinutes: number;
  status: "PUBLISHED" | "DRAFT";
  body: Block[];
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function scalar(value: string): string | number | boolean {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
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
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    if (key) fields[key] = scalar(line.slice(separator + 1));
  }
  return { fields, body: match[2] };
}

function markdownBlocks(markdown: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "p", text: paragraph.join(" ").trim() });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "ul", items: list });
      list = [];
    }
  };

  for (const line of markdown.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }
    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }
    flushList();
    if (/^##\s+/.test(trimmed)) {
      flushParagraph();
      blocks.push({ type: "h2", text: trimmed.replace(/^##\s+/, "") });
    } else if (/^>\s+/.test(trimmed)) {
      flushParagraph();
      blocks.push({ type: "callout", text: trimmed.replace(/^>\s+/, "") });
    } else if (/^#\s+/.test(trimmed)) {
      flushParagraph();
    } else {
      paragraph.push(trimmed);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}

function readPost(filename: string): BlogPost | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { fields, body } = parseFrontmatter(raw);
  if (typeof fields.title !== "string" || typeof fields.slug !== "string") return null;

  const status = fields.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
  const date = typeof fields.date === "string" ? fields.date : "";
  const updated = typeof fields.updated === "string" ? fields.updated : date;
  return {
    slug: fields.slug,
    title: fields.title,
    description: typeof fields.description === "string" ? fields.description : "",
    topic: typeof fields.topic === "string" ? fields.topic : "Blog",
    date,
    updated,
    readMinutes: typeof fields.readMinutes === "number" ? fields.readMinutes : 1,
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
