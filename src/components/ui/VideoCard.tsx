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
    <div className="overflow-hidden rounded-2xl border border-gray-light bg-white shadow-sm">
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
          className="aspect-video w-full bg-navy/5 object-cover"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/20 transition-colors hover:bg-navy/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
              <svg
                className="ml-1 h-7 w-7 text-navy"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
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
      </div>
    </div>
  );
}
