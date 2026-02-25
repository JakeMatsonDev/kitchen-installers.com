// Item #14: Before/after project gallery page
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { galleryProjects } from "@/lib/gallery-data";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery — Before & After IKEA Kitchen Installations",
  description:
    "See before and after photos of our IKEA kitchen installations across New York and New Jersey. Real projects, real results from Kitchen Installers.",
  path: "/gallery",
});

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
                Our Work
              </span>
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                Before &amp; After Gallery
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                See the transformations we&apos;ve made in kitchens across New York
                and New Jersey. Every project showcases our attention to detail
                and quality craftsmanship.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            {galleryProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border border-gray-light bg-white shadow-sm"
              >
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeAlt={`Before: ${project.title}`}
                  afterAlt={`After: ${project.title}`}
                />
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-yellow/20 px-2.5 py-0.5 font-semibold text-navy">
                      {project.service}
                    </span>
                    <span className="text-muted">
                      {project.city}, {project.state}
                    </span>
                  </div>
                  <h2 className="mb-1 font-jakarta text-lg font-bold text-navy">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-4 text-muted">
              Want to see your kitchen transformed like these?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
