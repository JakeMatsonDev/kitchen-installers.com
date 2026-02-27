// Item #2: Updated to use centralized contact config
import Link from "next/link";
import Container from "../layout/Container";
import type { CityData } from "@/lib/types";
import { SITE_CONFIG } from "@/lib/site-config";

export default function CityCTA({ city }: { city: CityData }) {
  return (
    <section className="bg-navy py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your {city.name} Kitchen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Get a free, no-obligation quote for your IKEA kitchen installation in{" "}
            {city.name}, {city.stateAbbr}. Our team is ready to help bring your
            new kitchen to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90 shadow-sm hover:shadow-md"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-9 py-4 text-lg font-semibold transition-all hover:bg-white hover:text-navy"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
