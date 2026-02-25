import Container from "../layout/Container";
import Button from "../ui/Button";
import type { CityData } from "@/lib/types";

export default function CityHero({ city }: { city: CityData }) {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-white to-yellow/5" />
      <Container className="relative py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            Serving {city.name}, {city.stateAbbr}
          </span>
          <h1 className="font-jakarta text-4xl font-bold leading-[1.1] text-navy md:text-5xl lg:text-[3.5rem]">
            {city.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Looking for IKEA kitchen installation near you in {city.name}?{" "}
            {city.introContent.slice(0, 200)}...
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Our Services
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
              500+ Kitchens Installed
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
              2-Year Warranty
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
              Nearest IKEA: {city.nearbyIKEA}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
