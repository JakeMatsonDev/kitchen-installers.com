"use client";

import { useRef, useState } from "react";
import type { VideoProject } from "@/lib/video-gallery-data";

export default function VideoCard({ project }: { project: VideoProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-light bg-white shadow-sm md:rounded-2xl">
      <div className="relative cursor-pointer" onClick={handlePlay}>
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.posterImage}
          preload="metadata"
          playsInline
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className="aspect-[4/3] w-full bg-navy/5 object-cover md:aspect-video"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/20 transition-colors hover:bg-navy/30">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16">
              <svg
                className="ml-1 h-9 w-9 text-navy md:h-7 md:w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 md:p-5">
        <div className="mb-1.5 flex items-center gap-2 text-xs md:mb-2">
          <span className="rounded-full bg-yellow/20 px-2.5 py-0.5 font-semibold text-navy">
            {project.service}
          </span>
        </div>
        <h3 className="mb-0.5 font-jakarta text-base font-bold text-navy md:mb-1 md:text-lg">
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed text-muted sm:text-sm">
          {project.description}
        </p>
      </div>
    </div>
  );
}
