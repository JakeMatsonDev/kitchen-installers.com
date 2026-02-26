import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoCard from "@/components/ui/VideoCard";
import ProjectGallery from "@/components/ui/ProjectGallery";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { galleryProjects } from "@/lib/gallery-data";
import { videoProjects } from "@/lib/video-gallery-data";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery — IKEA Kitchen Installation Photos & Videos",
  description:
    "Browse real photos and videos of our IKEA kitchen installations across New York and New Jersey. See our craftsmanship in action — from cabinet assembly to finished kitchens.",
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
                Project Gallery
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Browse real photos and videos from our IKEA kitchen
                installations across New York and New Jersey. Every image is
                from an actual project — see our craftsmanship for yourself.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Videos"
            title="Our Work in Action"
            subtitle="Watch our kitchen installation process from start to finish. Real projects filmed on-site across NY and NJ."
            align="center"
          />
          <div className="grid gap-10 md:grid-cols-2">
            {videoProjects.map((project) => (
              <VideoCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Photo Gallery"
            title="Our Kitchen Projects"
            subtitle="Click any project to explore all photos. Tap an image to view full size."
            align="center"
          />
          <ProjectGallery projects={galleryProjects} />

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
