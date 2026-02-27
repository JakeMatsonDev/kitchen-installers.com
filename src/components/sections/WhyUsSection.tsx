"use client";

import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";

const rows = [
  "IKEA SEKTION specialists",
  "Fully insured & background-checked",
  "5-year installation warranty",
  "Quote within 3 hours",
  "Transparent pricing — no hidden fees",
  "600+ kitchens completed",
  "Dedicated post-install support",
];

export default function WhyUsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Why Kitchen Installers"
          title="How We Compare"
          subtitle="Not all installers are equal. Here's what sets us apart from general contractors and handyman services."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-light"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] bg-navy text-white text-sm font-semibold">
            <div className="px-5 py-4" />
            <div className="px-3 py-4 text-center text-yellow">Us</div>
            <div className="px-3 py-4 text-center text-white/60">Others</div>
          </div>
          {/* Rows */}
          {rows.map((label, i) => (
            <div
              key={label}
              className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] items-center text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-off-white"
              }`}
            >
              <div className="px-5 py-3.5 text-navy font-medium">{label}</div>
              <div className="flex justify-center py-3.5">
                <CheckCircle size={20} className="text-green-600" />
              </div>
              <div className="flex justify-center py-3.5">
                <X size={20} className="text-gray-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
