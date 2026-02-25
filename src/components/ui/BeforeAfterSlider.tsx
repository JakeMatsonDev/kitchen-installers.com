"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 2));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-col-resize select-none overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full width, behind) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Draggable handle */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7 4L3 10L7 16" stroke="#0e0d39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="#0e0d39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-3 right-3 rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-navy pointer-events-none">
        After
      </span>
    </div>
  );
}
