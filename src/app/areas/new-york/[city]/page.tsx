import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newYorkCities } from "@/lib/cities/new-york";
import { newJerseyCities } from "@/lib/cities/new-jersey";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import CityAbout from "@/components/city/CityAbout";
import CityTestimonials from "@/components/city/CityTestimonials";
import CityFAQ from "@/components/city/CityFAQ";
import CityNearby from "@/components/city/CityNearby";
import CityCTA from "@/components/city/CityCTA";
import {
  cityServiceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  reviewJsonLd,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return newYorkCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = newYorkCities.find((c) => c.slug === slug);
  if (!city) return {};

  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/areas/new-york/${city.slug}`,
  });
}

export default async function NewYorkCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = newYorkCities.find((c) => c.slug === slug);
  if (!city) notFound();

  const allCities = [...newYorkCities, ...newJerseyCities];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas" },
    { name: "New York", url: "/areas/new-york" },
    { name: city.name, url: `/areas/new-york/${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={cityServiceJsonLd(city)} />
      <JsonLd data={faqJsonLd(city.faqItems)} />
      {city.testimonials.length > 0 && (
        <JsonLd data={reviewJsonLd(city) as unknown as Record<string, unknown>[]} />
      )}

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: "New York", href: "/areas/new-york" },
          { label: city.name },
        ]}
      />

      <CityHero city={city} />
      <CityServices city={city} />
      <CityAbout city={city} />
      <CityTestimonials city={city} />
      <CityFAQ city={city} />
      <CityNearby city={city} allCities={allCities} />
      <CityCTA city={city} />
    </>
  );
}
