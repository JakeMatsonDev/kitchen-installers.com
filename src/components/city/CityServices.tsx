import Link from "next/link";
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
import Container from "../layout/Container";
import type { CityData } from "@/lib/types";

const services = [
  { slug: "ikea-cabinet-assembly", icon: Wrench, title: "Cabinet Assembly", desc: "Expert IKEA cabinet frame assembly" },
  { slug: "countertop-installation", icon: Layers, title: "Countertop Installation", desc: "Professional countertop fitting" },
  { slug: "appliance-installation", icon: Refrigerator, title: "Appliance Installation", desc: "Seamless appliance integration" },
  { slug: "kitchen-removal", icon: Trash2, title: "Kitchen Removal", desc: "Old kitchen removal & disposal" },
  { slug: "trade-coordination", icon: Users, title: "Trade Coordination", desc: "Plumber & electrician coordination" },
  { slug: "splashback-installation", icon: PaintBucket, title: "Splashback Installation", desc: "Tile & panel splashbacks" },
  { slug: "bulkhead-construction", icon: Square, title: "Bulkhead Construction", desc: "Custom bulkhead finishing" },
  { slug: "packaging-cleanup", icon: Package, title: "Packaging & Cleanup", desc: "Full post-install cleanup" },
];

export default function CityServices({ city }: { city: CityData }) {
  return (
    <section className="bg-off-white py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            Our Services
          </span>
          <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl">
            IKEA Kitchen Services in {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Complete IKEA kitchen installation services available in {city.name}, {city.stateAbbr}.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                title={`${s.title} in ${city.name}, ${city.stateAbbr}`}
                className="group rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow/15 text-navy transition-colors group-hover:bg-yellow">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-jakarta text-lg font-bold text-navy">
                  {s.title} in {city.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">{s.desc}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
