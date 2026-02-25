import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { newYorkCities } from "@/lib/cities/new-york";

export const metadata: Metadata = buildMetadata({
  title: "IKEA Kitchen Installation in New York | Kitchen Installers",
  description:
    "Professional IKEA kitchen installation across New York state. Serving Manhattan, Brooklyn, Queens, Bronx, and 26 more cities. Get a free quote today.",
  path: "/areas/new-york",
});

export default function NewYorkPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas" },
    { name: "New York", url: "/areas/new-york" },
  ];

  const majorCities = newYorkCities.filter((c) => c.tier === "major");
  const midCities = newYorkCities.filter((c) => c.tier === "mid");
  const smallCities = newYorkCities.filter((c) => c.tier === "small");

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: "New York" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
                {newYorkCities.length} Cities Served
              </span>
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                IKEA Kitchen Installation in New York
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                From the five boroughs of New York City to upstate communities, our team delivers expert IKEA kitchen cabinet installation throughout New York state. We know the unique challenges of New York homes — from pre-war apartments in Manhattan to suburban houses in Westchester.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          {majorCities.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 font-jakarta text-2xl font-bold text-navy">
                New York City Boroughs
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {majorCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/new-york/${city.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-gray-light bg-white p-5 transition-all hover:border-yellow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow/15 transition-colors group-hover:bg-yellow">
                      <MapPin size={22} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-jakarta font-bold text-navy">{city.name}</h3>
                      <p className="text-sm text-muted">{city.county} County</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {midCities.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 font-jakarta text-2xl font-bold text-navy">
                Major Cities
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {midCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/new-york/${city.slug}`}
                    className="rounded-lg border border-gray-light bg-white px-4 py-3 text-sm font-medium text-navy transition-all hover:border-yellow hover:bg-yellow/5"
                  >
                    {city.name} — {city.county} County
                  </Link>
                ))}
              </div>
            </div>
          )}

          {smallCities.length > 0 && (
            <div>
              <h2 className="mb-6 font-jakarta text-2xl font-bold text-navy">
                All New York Service Areas
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {smallCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/new-york/${city.slug}`}
                    className="rounded-lg border border-gray-light bg-white px-4 py-3 text-sm font-medium text-navy transition-all hover:border-yellow hover:bg-yellow/5"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
              Don&apos;t See Your City?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              We may still be able to serve your area. Contact us to check availability for your New York location.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
