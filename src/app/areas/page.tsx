import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { newYorkCities } from "@/lib/cities/new-york";
import { newJerseyCities } from "@/lib/cities/new-jersey";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — IKEA Kitchen Installation in NY & NJ",
  description:
    "Find professional IKEA kitchen installation services near you. We serve over 55 cities across New York and New Jersey. Find your city and get a free quote.",
  path: "/areas",
});

export default function AreasPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                IKEA Kitchen Installation Service Areas
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We provide professional IKEA kitchen cabinet installation across New York and New Jersey. Find your city below for local service details, pricing information, and customer reviews.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* New York */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow/15">
                  <MapPin size={20} className="text-blue" />
                </div>
                <div>
                  <h2 className="font-jakarta text-2xl font-bold text-navy">New York</h2>
                  <p className="text-sm text-muted">{newYorkCities.length} cities served</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {newYorkCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/new-york/${city.slug}`}
                    className="rounded-lg border border-gray-light bg-white px-4 py-3 text-sm font-medium text-navy transition-all hover:border-yellow hover:bg-yellow/5 hover:shadow-sm"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/areas/new-york"
                className="mt-4 inline-block text-sm font-semibold text-blue hover:text-navy transition-colors"
              >
                View New York state page →
              </Link>
            </div>

            {/* New Jersey */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow/15">
                  <MapPin size={20} className="text-blue" />
                </div>
                <div>
                  <h2 className="font-jakarta text-2xl font-bold text-navy">New Jersey</h2>
                  <p className="text-sm text-muted">{newJerseyCities.length} cities served</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {newJerseyCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/new-jersey/${city.slug}`}
                    className="rounded-lg border border-gray-light bg-white px-4 py-3 text-sm font-medium text-navy transition-all hover:border-yellow hover:bg-yellow/5 hover:shadow-sm"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/areas/new-jersey"
                className="mt-4 inline-block text-sm font-semibold text-blue hover:text-navy transition-colors"
              >
                View New Jersey state page →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
