import { CheckCircle } from "lucide-react";
import Container from "../layout/Container";
import type { ServicePageData } from "@/lib/types";

export default function ServiceDetail({ service }: { service: ServicePageData }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl mb-8">
              About {service.title}
            </h2>
            {service.longDescription.map((para, i) => (
              <p key={i} className="mb-5 text-[15px] leading-relaxed text-muted">
                {para}
              </p>
            ))}

            <h3 className="font-jakarta text-xl font-bold text-navy mt-10 mb-6">
              How It Works
            </h3>
            <div className="space-y-6">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow font-jakarta text-sm font-bold text-navy">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-navy">{step.title}</h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl bg-off-white p-7">
              <h3 className="font-jakarta text-xl font-bold text-navy mb-5">
                Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="mt-0.5 flex-shrink-0 text-blue"
                    />
                    <span className="text-[15px] text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-white p-5">
                <p className="text-sm font-medium text-muted mb-1">Typical Price Range</p>
                <p className="font-jakarta text-2xl font-bold text-navy">
                  {service.priceRange}
                </p>
                <p className="mt-2 text-xs text-muted">
                  Exact pricing depends on kitchen size and complexity. Get a free quote for an accurate estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
