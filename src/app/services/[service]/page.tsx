import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { newYorkCities } from "@/lib/cities/new-york";
import { newJerseyCities } from "@/lib/cities/new-jersey";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceDetail from "@/components/service/ServiceDetail";
import ServiceCities from "@/components/service/ServiceCities";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import {
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return servicesData.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const allCities = [...newYorkCities, ...newJerseyCities];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const relatedServices = service.relatedServices
    .map((slug) => servicesData.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqItems)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <ServiceHero service={service} />
      <ServiceDetail service={service} />
      <ServiceCities service={service} cities={allCities} />
      <ServiceFAQ service={service} />

      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
            <h2 className="mb-8 font-jakarta text-2xl font-bold text-navy">
              Related Services
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rs) => (
                <Link
                  key={rs!.slug}
                  href={`/services/${rs!.slug}`}
                  className="rounded-xl border border-gray-light bg-white p-5 transition-all hover:border-yellow hover:shadow-md"
                >
                  <h3 className="font-jakarta font-bold text-navy">{rs!.title}</h3>
                  <p className="mt-1 text-sm text-muted">{rs!.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 text-center">
          <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Get a free quote for {service.title.toLowerCase()} and any other services you need for your IKEA kitchen.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
