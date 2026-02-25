import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = buildMetadata({
  title: "IKEA Kitchen Installation Blog | Tips, Guides & Advice",
  description:
    "Expert tips, guides, and advice for IKEA kitchen installation. Cost guides, comparisons, design ideas, and more from Kitchen Installers.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                Kitchen Installation Blog
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Expert tips, cost guides, and practical advice for your IKEA kitchen installation project. Learn from our experience of 500+ kitchen installations across NY and NJ.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-light bg-white overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-yellow/20 px-3 py-1 text-xs font-semibold text-navy">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="mb-2 font-jakarta text-lg font-bold text-navy group-hover:text-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
