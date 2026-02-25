import { Star } from "lucide-react";
import Container from "../layout/Container";
import type { CityData } from "@/lib/types";

export default function CityTestimonials({ city }: { city: CityData }) {
  return (
    <section className="bg-off-white py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            Testimonials
          </span>
          <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl">
            What {city.name} Customers Say
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {city.testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="fill-yellow text-yellow"
                  />
                ))}
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-muted italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-jakarta font-bold text-navy">{t.name}</p>
                <p className="text-sm text-muted">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
