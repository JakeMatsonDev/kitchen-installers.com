"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";

const areas = [
  {
    state: "New York",
    href: "/areas/new-york",
    cities: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Yonkers", "Buffalo", "Rochester"],
  },
  {
    state: "New Jersey",
    href: "/areas/new-jersey",
    cities: ["Newark", "Jersey City", "Hoboken", "Paterson", "Elizabeth", "Edison", "Cherry Hill", "Princeton"],
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Service Areas"
          title="Where We Install"
          subtitle="We proudly serve homeowners across New York and New Jersey — over 55 cities and counting."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {areas.map((area, i) => (
            <motion.div
              key={area.state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border-2 border-navy/10 bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow/15">
                  <MapPin size={20} className="text-blue" />
                </div>
                <h3 className="font-jakarta text-xl font-bold text-navy">
                  {area.state}
                </h3>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {area.cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full bg-off-white px-3 py-1 text-sm text-muted"
                  >
                    {city}
                  </span>
                ))}
                <span className="rounded-full bg-yellow/20 px-3 py-1 text-sm font-medium text-navy">
                  + more
                </span>
              </div>
              <Link
                href={area.href}
                className="text-sm font-semibold text-blue transition-colors hover:text-navy"
              >
                View all {area.state} areas →
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
