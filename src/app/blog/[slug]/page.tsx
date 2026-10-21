import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow, Section } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { getBlogPost, publishedBlogPosts, type BlogPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return publishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return post
    ? { title: post.title, description: post.description }
    : { title: "Blog" };
}

function renderBlock(block: BlogPost["body"][number], index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={index} className="mt-10 text-2xl">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={index} className="mt-4 space-y-2 pl-5">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-disc text-ink-soft marker:text-clinic">
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p
          key={index}
          className="mt-6 rounded-xl2 border border-accent/40 bg-accent-light/40 p-4 text-sm text-ink-soft"
        >
          {block.text}
        </p>
      );
    default:
      return (
        <p key={index} className="mt-4 text-ink-soft leading-relaxed">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-clinic">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog" className="hover:text-clinic">
              Blog
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">{post.topic}</span>
          </nav>
          <Eyebrow>{post.topic}</Eyebrow>
          <h1 className="max-w-3xl text-3xl sm:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{post.description}</p>
          <p className="mt-4 text-sm text-ink-muted">
            {post.readMinutes} min read · Last updated {post.updated}
          </p>
        </Container>
      </div>

      <Section>
        <article className="mx-auto max-w-2xl">
          {post.body.map(renderBlock)}
          <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink-muted">
            This article is general education, not medical advice, and does not create a
            provider-patient relationship. Whether any treatment is appropriate for you is decided by
            a licensed provider after an evaluation.
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-sm text-clinic hover:text-clinic-deep">
              ← More from the blog
            </Link>
          </div>
        </article>
      </Section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema,
        ]}
      />
    </>
  );
}
