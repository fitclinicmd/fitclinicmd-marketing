import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, Eyebrow, Section } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { publishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: "Blog | Weight & Peptide Education — FitClinicMD" },
  description:
    "Read practical FitClinicMD education about weight management, GLP-1 medicines, peptides, telehealth, and what evaluation-first care involves.",
};

export default function BlogIndex() {
  const posts = publishedBlogPosts();
  return (
    <>
      <div className="wash border-b border-ink/10">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Practical answers for the road ahead.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Plain-language education and updates from FitClinicMD, written to help you ask better
            questions about your care.
          </p>
        </Container>
      </div>

      <Section>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="h-full transition group-hover:border-clinic group-hover:shadow-[0_6px_20px_rgba(14,124,134,.10)]">
                  <p className="text-xs uppercase tracking-wide text-clinic">{post.topic}</p>
                  <h2 className="mt-2 text-xl">{post.title}</h2>
                  <p className="mt-2 text-ink-muted">{post.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clinic transition group-hover:gap-2">
                    Read <span aria-hidden="true">→</span>
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl2 border border-ink/10 bg-white p-8 text-center">
            <h2 className="text-xl">New posts are on the way.</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              We are preparing practical, education-first articles for the FitClinicMD community.
            </p>
          </div>
        )}
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
