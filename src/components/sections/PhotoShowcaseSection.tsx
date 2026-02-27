"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { galleryProjects } from "@/lib/gallery-data";

// Collect one hero image per project, then fill with secondary shots for density
const heroImages = galleryProjects.map((p) => ({
  src: p.images[0],
  title: p.title,
  service: p.service,
}));

// Add select secondary images from projects with many photos for a richer grid
const bonusImages = galleryProjects
  .filter((p) => p.images.length >= 3)
  .flatMap((p) =>
    p.images.slice(1, 3).map((src) => ({
      src,
      title: p.title,
      service: p.service,
    }))
  );

const allShowcaseImages = [...heroImages, ...bonusImages];

// Deduplicate by src (some images may overlap between projects)
const seen = new Set<string>();
const showcaseImages = allShowcaseImages.filter((img) => {
  if (seen.has(img.src)) return false;
  seen.add(img.src);
  return true;
});

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof showcaseImages;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div
        className="flex max-h-[90vh] max-w-[90vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index].src}
          alt={images[index].title}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
        />
        <div className="mt-3 text-center">
          <p className="text-sm font-medium text-white">
            {images[index].title}
          </p>
          <p className="text-xs text-white/50">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PhotoShowcaseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <section className="bg-off-white py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Our Portfolio"
          title="Recent Kitchen Projects"
          subtitle="Browse photos from our recent IKEA kitchen installations across New York and New Jersey."
        />

        {/* Dense photo grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {showcaseImages.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-navy/5"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-2.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-3">
                <p className="text-xs font-semibold text-white drop-shadow sm:text-sm">
                  {img.title}
                </p>
                <p className="text-[10px] text-white/70 sm:text-xs">
                  {img.service}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-8 py-3.5 font-semibold text-navy transition-all hover:bg-navy hover:text-white"
          >
            View Full Gallery
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={showcaseImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + showcaseImages.length) %
                showcaseImages.length
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % showcaseImages.length)
          }
        />
      )}
    </section>
  );
}
