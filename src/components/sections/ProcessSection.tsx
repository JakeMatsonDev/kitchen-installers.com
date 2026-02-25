"use client";

import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Upload,
  FileText,
  CheckCircle,
};

export default function ProcessSection() {
  return (
    <section id="process" className="bg-off-white py-20 md:py-28">
      <Container>
        <SectionHeading
          label="How It Works"
          title="3 Simple Steps to Your Dream Kitchen"
          subtitle="Our streamlined process makes IKEA kitchen installation easy and stress-free."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-10 left-[calc(50%+40px)] hidden h-[2px] w-[calc(100%-80px)] bg-yellow/40 md:block" aria-hidden="true" />
                )}

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow/15">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow font-jakarta text-xl font-bold text-navy">
                    {Icon ? <Icon size={28} aria-hidden="true" /> : step.step}
                  </div>
                </div>
                <h3 className="mb-2 font-jakarta text-xl font-bold text-navy">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
