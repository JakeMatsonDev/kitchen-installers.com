import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import type { CityData } from "@/lib/types";

export default function CityNearby({
  city,
  allCities,
}: {
  city: CityData;
  allCities: CityData[];
}) {
  const nearbyCities = city.nearbyCities
    .map((slug) => allCities.find((c) => c.slug === slug))
    .filter(Boolean) as CityData[];

  if (nearbyCities.length === 0) return null;

  return (
    <section className="bg-off-white py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            Nearby Areas
          </span>
          <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl">
            Also Serving Near {city.name}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyCities.map((nc) => (
            <Link
              key={nc.slug}
              href={`/areas/${nc.stateSlug}/${nc.slug}`}
              className="group flex items-center justify-between rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow/15 text-navy transition-colors group-hover:bg-yellow">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-jakarta font-bold text-navy">
                    {nc.name}
                  </p>
                  <p className="text-sm text-muted">
                    {nc.county} County, {nc.stateAbbr}
                  </p>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-muted transition-colors group-hover:text-blue"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
