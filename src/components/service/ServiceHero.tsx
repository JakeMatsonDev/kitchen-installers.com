import Container from "../layout/Container";
import Button from "../ui/Button";
import type { ServicePageData } from "@/lib/types";

export default function ServiceHero({ service }: { service: ServicePageData }) {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-white to-yellow/5" />
      <Container className="relative py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            Our Services
          </span>
          <h1 className="font-jakarta text-4xl font-bold leading-[1.1] text-navy md:text-5xl lg:text-[3.5rem]">
            {service.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {service.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/areas" variant="outline" size="lg">
              Service Areas
            </Button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-sm text-muted shadow-sm">
            Typical price range: <span className="font-semibold text-navy">{service.priceRange}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
