"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { ABOUT_FEATURES } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/img_6893.webp"
                alt="Completed white IKEA kitchen with shaker cabinets, farmhouse sink, and stainless appliances"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent shape */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-yellow/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionHeading
              label="Why Choose Us"
              title="Your Trusted IKEA Kitchen Installation Experts"
              subtitle="With 600+ IKEA kitchens installed across NY & NJ, our fully insured team delivers precision installation backed by a 5-year warranty."
              align="left"
            />
            <ul className="space-y-4">
              {ABOUT_FEATURES.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="mt-0.5 flex-shrink-0 text-blue"
                  />
                  <span className="text-[15px] text-muted">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
