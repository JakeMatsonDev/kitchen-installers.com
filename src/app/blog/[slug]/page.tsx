// Items #16 (Table of Contents), #29 (nofollow external links), #30 (breadcrumbs)
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import {
  blogPostJsonLd,
  breadcrumbJsonLd,
} from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

// Item #16: Extract headings from content for Table of Contents
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      headings.push({ id, text, level: 2 });
    } else if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      headings.push({ id, text, level: 3 });
    }
  }
  return headings;
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      elements.push(
        <h3
          key={i}
          id={id}
          className="mt-8 mb-3 font-jakarta text-xl font-bold text-navy scroll-mt-24"
        >
          {text}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      elements.push(
        <h2
          key={i}
          id={id}
          className="mt-10 mb-4 font-jakarta text-2xl font-bold text-navy scroll-mt-24"
        >
          {text}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 list-disc pl-6 space-y-2 text-[15px] leading-relaxed text-muted">
          {listItems.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
          ))}
        </ul>
      );
      continue;
    } else if (line.match(/^\d+\. /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 list-decimal pl-6 space-y-2 text-[15px] leading-relaxed text-muted">
          {listItems.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="my-4 text-[15px] leading-relaxed text-muted"
          dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(line) }}
        />
      );
    }
    i++;
  }

  return elements;
}

// Item #29: Add rel="nofollow noopener" to external links
function parseInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-navy">$1</strong>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      '<a href="$2" class="text-blue hover:underline" target="_blank" rel="nofollow noopener">$1</a>'
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-blue hover:underline">$1</a>'
    );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  // Item #30: Breadcrumb schema
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Item #16: Extract headings for TOC
  const headings = extractHeadings(post.content);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={blogPostJsonLd(post)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-yellow/20 px-3 py-1 text-xs font-semibold text-navy">
                  {post.category}
                </span>
                <span className="text-sm text-muted">{post.readTime}</span>
              </div>
              <h1 className="font-jakarta text-3xl font-bold text-navy md:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted">
                <span>{post.author}</span>
                <span>·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
          </Container>
        </div>

        <div className="py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              {/* Item #16: Table of Contents */}
              {headings.length > 3 && (
                <nav className="mb-10 rounded-xl border border-gray-light bg-off-white p-6">
                  <h2 className="mb-3 font-jakarta text-sm font-bold uppercase tracking-wider text-navy/60">
                    Table of Contents
                  </h2>
                  <ol className="space-y-1.5">
                    {headings.map((h) => (
                      <li
                        key={h.id}
                        className={h.level === 3 ? "ml-4" : ""}
                      >
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-muted transition-colors hover:text-blue"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {renderMarkdown(post.content)}
            </div>
          </Container>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-off-white py-16">
          <Container>
            <h2 className="mb-8 font-jakarta text-2xl font-bold text-navy">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp!.slug}
                  href={`/blog/${rp!.slug}`}
                  className="rounded-xl border border-gray-light bg-white p-5 transition-all hover:border-yellow hover:shadow-md"
                >
                  <span className="text-xs font-semibold text-blue">{rp!.category}</span>
                  <h3 className="mt-1 font-jakarta font-bold text-navy">{rp!.title}</h3>
                  <p className="mt-2 text-sm text-muted">{rp!.excerpt}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-navy py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your Kitchen Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Get a free quote for your IKEA kitchen installation in New York or New Jersey.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
