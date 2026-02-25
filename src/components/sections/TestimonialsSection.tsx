"use client";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          subtitle="Don't just take our word for it — hear from homeowners who love their new IKEA kitchens."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
