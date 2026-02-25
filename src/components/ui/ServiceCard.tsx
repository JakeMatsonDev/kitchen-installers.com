"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Layers,
  Refrigerator,
  Trash2,
  Users,
  PaintBucket,
  Square,
  Package,
} from "lucide-react";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Wrench,
  Layers,
  Refrigerator,
  Trash2,
  Users,
  PaintBucket,
  Square,
  Package,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow/15 text-navy transition-colors group-hover:bg-yellow">
        {Icon && <Icon size={28} aria-hidden="true" />}
      </div>
      <h3 className="mb-2 font-jakarta text-lg font-bold text-navy">
        {service.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-muted">
        {service.description}
      </p>
    </motion.div>
  );
}
