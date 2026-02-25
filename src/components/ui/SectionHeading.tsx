"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left"
      )}
    >
      {label && (
        <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
          {label}
        </span>
      )}
      <h2
        className={clsx(
          "font-jakarta text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mx-auto mt-4 max-w-2xl text-lg",
            light ? "text-white/70" : "text-muted",
            align === "left" && "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
