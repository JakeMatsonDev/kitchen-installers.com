"use client";

import Link from "next/link";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-off-white py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Our Services"
          title="Everything You Need for Your IKEA Kitchen"
          subtitle="From cabinet assembly to final cleanup, we provide comprehensive IKEA kitchen installation services."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Link key={service.title} href={`/services/${service.slug}`}>
              <ServiceCard service={service} index={i} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
