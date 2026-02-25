// Items #7 (H1 with location), #20 (next/image priority), #24 (social proof badge)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { Star } from "lucide-react";

export default function HeroSection() {
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
              Our team of experienced professionals specializes in IKEA kitchen
              cabinet installation. From assembly to countertops, we handle
              every detail so you can enjoy your dream kitchen.
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
                4.9 from 500+ Reviews
              </span>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                500+ Kitchens Installed
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                2-Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                Fully Insured
              </div>
            </div>
          </motion.div>

          {/* Image — Item #20: next/image with priority for LCP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Modern IKEA kitchen installation in New York"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg md:-bottom-6 md:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow font-jakarta text-xl font-bold text-navy">
                  5★
                </div>
                <div>
                  <p className="font-jakarta text-sm font-bold text-navy">
                    Rated 5/5
                  </p>
                  <p className="text-xs text-muted">by our customers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
