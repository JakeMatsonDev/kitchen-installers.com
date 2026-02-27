// Items #7 (H1 with location), #20 (next/image priority), #24 (social proof badge)
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { Star } from "lucide-react";

const HERO_IMAGES = [
  {
    src: "/images/gallery/img_6893.webp",
    alt: "White U-shaped IKEA kitchen with black handles and farmhouse sink",
  },
  {
    src: "/images/gallery/img_9681.webp",
    alt: "Sage green IKEA kitchen with glass-front cabinets and wine cooler",
  },
  {
    src: "/images/gallery/img_3731.webp",
    alt: "Modern black IKEA KUNGSBACKA cabinet kitchen with bright windows",
  },
  {
    src: "/images/gallery/img_3907.webp",
    alt: "Classic white shaker IKEA kitchen with gold hardware and countertops",
  },
  {
    src: "/images/gallery/img_5717.webp",
    alt: "Light wood IKEA kitchen with tall cabinets and island workspace",
  },
  {
    src: "/images/gallery/img_4850.webp",
    alt: "Walnut butler's pantry with glass-front upper cabinets and wine fridge",
  },
  {
    src: "/images/gallery/img_1768.webp",
    alt: "Dark green IKEA kitchen with wood countertop accents",
  },
];

const INTERVAL = 4000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % HERO_IMAGES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-white to-yellow/5" />
      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
              Serving New York &amp; New Jersey
            </span>
            {/* Item #7: H1 with location keywords for local SEO */}
            <h1 className="font-jakarta text-4xl font-bold leading-[1.1] text-navy md:text-5xl lg:text-6xl">
              IKEA Kitchen Cabinet{" "}
              <span className="text-blue">Installation in New York &amp; New Jersey</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              600+ IKEA kitchens installed across NY &amp; NJ. From cabinet
              assembly to countertops, we complete most kitchens in 1–3
              days — fully insured with a 5-year warranty.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>

            {/* Item #24: Social proof badge with star rating */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-md">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow text-yellow" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm font-semibold text-navy">
                4.9 from 200+ Reviews
              </span>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                600+ Kitchens Installed
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                Fully Insured &amp; Licensed
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                5-Year Warranty
              </div>
            </div>
          </motion.div>

          {/* Image slideshow — Item #20: next/image with priority for LCP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HERO_IMAGES[current].src}
                    alt={HERO_IMAGES[current].alt}
                    fill
                    priority={current === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-0 rounded-xl bg-white p-4 shadow-lg md:-bottom-6 md:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow font-jakarta text-xl font-bold text-navy">
                  4.9
                </div>
                <div>
                  <p className="font-jakarta text-sm font-bold text-navy">
                    Rated 4.9/5
                  </p>
                  <p className="text-xs text-muted">from 200+ reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
