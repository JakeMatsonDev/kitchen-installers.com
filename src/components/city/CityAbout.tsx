import Link from "next/link";
import Container from "../layout/Container";
import type { CityData } from "@/lib/types";

export default function CityAbout({ city }: { city: CityData }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
              About Our {city.name} Service
            </span>
            <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl">
              IKEA Kitchen Experts Serving {city.name}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {city.introContent}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Whether you&apos;re searching for IKEA kitchen installers near me in {city.name} or
              comparing options, we&apos;re the local experts you can trust. Not sure if IKEA is
              right for you? Read our{" "}
              <Link href="/blog/ikea-kitchen-vs-custom-kitchen" className="font-medium text-blue hover:underline">
                IKEA Kitchen vs Custom Kitchen comparison
              </Link>{" "}
              to help you decide.
            </p>
          </div>
          <div>
            <h3 className="font-jakarta text-xl font-bold text-navy mb-4">
              Why {city.name} Residents Choose Us
            </h3>
            <p className="text-[15px] leading-relaxed text-muted mb-6">
              {city.whyChooseContent}
            </p>
            <div className="rounded-xl bg-off-white p-6">
              <h4 className="font-jakarta font-bold text-navy mb-3">
                Local Coverage
              </h4>
              <p className="text-sm leading-relaxed text-muted">
                {city.localDetails}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
