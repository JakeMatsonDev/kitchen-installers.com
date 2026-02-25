import Link from "next/link";
import { MapPin } from "lucide-react";
import Container from "../layout/Container";
import type { CityData, ServicePageData } from "@/lib/types";

export default function ServiceCities({
  service,
  cities,
}: {
  service: ServicePageData;
  cities: CityData[];
}) {
  const nyCities = cities.filter((c) => c.state === "New York");
  const njCities = cities.filter((c) => c.state === "New Jersey");

  return (
    <section className="bg-off-white py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            Service Areas
          </span>
          <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl">
            {service.title} Available In
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            We offer professional {service.title.toLowerCase()} across New York and New Jersey.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-jakarta text-xl font-bold text-navy flex items-center gap-2">
              <MapPin size={20} className="text-blue" aria-hidden="true" /> New York
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {nyCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/new-york/${city.slug}`}
                  title={`${service.title} in ${city.name}, NY`}
                  className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-navy transition-all hover:bg-yellow/10 hover:text-blue"
                >
                  IKEA Kitchen Installation in {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-jakarta text-xl font-bold text-navy flex items-center gap-2">
              <MapPin size={20} className="text-blue" aria-hidden="true" /> New Jersey
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {njCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/new-jersey/${city.slug}`}
                  title={`${service.title} in ${city.name}, NJ`}
                  className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-navy transition-all hover:bg-yellow/10 hover:text-blue"
                >
                  IKEA Kitchen Installation in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
