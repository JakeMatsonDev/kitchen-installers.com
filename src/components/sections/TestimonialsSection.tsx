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
          title="Trusted by 200+ Homeowners Across NY & NJ"
          subtitle="See why homeowners rate us 4.9 out of 5 stars for IKEA kitchen installation."
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
