import type { Metadata } from "next";
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
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { servicesData } from "@/lib/services-data";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Wrench, Layers, Refrigerator, Trash2, Users, PaintBucket, Square, Package,
};

export const metadata: Metadata = buildMetadata({
  title: "IKEA Kitchen Installation Services | Kitchen Installers",
  description:
    "Complete IKEA kitchen installation services: cabinet assembly, countertops, appliances, removal, and more. Serving New York and New Jersey. Get a free quote.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                Our IKEA Kitchen Installation Services
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                From start to finish, we handle every aspect of your IKEA kitchen installation. Our comprehensive services cover everything from cabinet assembly to final cleanup, all backed by our 2-year warranty.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesData.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl bg-white p-7 shadow-sm border border-gray-light transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-yellow"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow/15 text-navy transition-colors group-hover:bg-yellow">
                    {Icon && <Icon size={28} />}
                  </div>
                  <h2 className="mb-2 font-jakarta text-lg font-bold text-navy">
                    {service.title}
                  </h2>
                  <p className="mb-4 text-[15px] leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="text-sm font-semibold text-blue">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
              Need a Complete Kitchen Installation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Most customers choose our full installation package. Send us your IKEA kitchen plan and get a quote for exactly the services you need.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
