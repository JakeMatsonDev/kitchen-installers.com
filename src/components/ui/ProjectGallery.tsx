"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryProject } from "@/lib/gallery-data";

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
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

      {images.length > 1 && (
        <>
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
        </>
      )}

      <img
        src={images[index]}
        alt=""
        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: GalleryProject }) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleImages = expanded ? project.images : project.images.slice(0, 1);
  const hasMore = project.images.length > 1;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-2xl border border-gray-light bg-white shadow-sm"
      >
        {/* Image grid */}
        <div
          className={
            expanded && project.images.length > 1
              ? "grid grid-cols-2 gap-1"
              : ""
          }
        >
          {visibleImages.map((src, i) => (
            <button
              key={src}
              onClick={() => openLightbox(i)}
              className={`relative block w-full overflow-hidden bg-navy/5 ${
                !expanded || project.images.length === 1
                  ? "aspect-[4/3]"
                  : "aspect-square"
              } ${
                expanded &&
                project.images.length > 1 &&
                i === project.images.length - 1 &&
                project.images.length % 2 !== 0
                  ? "col-span-2 aspect-[2/1]"
                  : ""
              }`}
            >
              <img
                src={src}
                alt={`${project.title} — photo ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* "More photos" overlay on first image */}
              {!expanded && hasMore && i === 0 && (
                <div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(true);
                  }}
                >
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy">
                    +{project.images.length - 1} more photo
                    {project.images.length - 1 > 1 ? "s" : ""}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-yellow/20 px-2.5 py-0.5 font-semibold text-navy">
              {project.service}
            </span>
          </div>
          <h3 className="mb-1 font-jakarta text-lg font-bold text-navy">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-sm font-semibold text-blue transition-colors hover:text-blue/80"
            >
              {expanded
                ? "Show less"
                : `View all ${project.images.length} photos`}
            </button>
          )}
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + project.images.length) %
                project.images.length
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % project.images.length)
          }
        />
      )}
    </>
  );
}

export default function ProjectGallery({
  projects,
}: {
  projects: GalleryProject[];
}) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
