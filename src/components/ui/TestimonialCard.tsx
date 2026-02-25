"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-2xl bg-white p-7 shadow-sm"
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-yellow text-yellow"
          />
        ))}
      </div>
      <p className="mb-5 text-[15px] leading-relaxed text-muted italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <p className="font-jakarta font-bold text-navy">{testimonial.name}</p>
        <p className="text-sm text-muted">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}
