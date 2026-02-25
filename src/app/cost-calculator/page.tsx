// Item #13: Cost calculator page targeting "IKEA kitchen installation cost calculator"
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import CostCalculator from "./Calculator";

export const metadata: Metadata = buildMetadata({
  title:
    "IKEA Kitchen Installation Cost Calculator | Get an Instant Estimate",
  description:
    "Use our free IKEA kitchen installation cost calculator to get an instant estimate for your project in New York or New Jersey. Enter your cabinet count, countertop length, and extras.",
  path: "/cost-calculator",
});

export default function CostCalculatorPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Cost Calculator", url: "/cost-calculator" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cost Calculator" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
                Free Tool
              </span>
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                IKEA Kitchen Installation Cost Calculator
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Get an instant estimate for your IKEA kitchen installation in
                New York or New Jersey. Adjust the sliders below and add any
                extra services you need.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <CostCalculator />

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-jakarta text-2xl font-bold text-navy">
              How Our Pricing Works
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Our IKEA kitchen installation pricing is based on the scope of
                your project. The main factors that determine cost are the
                number of cabinets, countertop length, and any additional
                services you need like old kitchen removal or appliance
                installation.
              </p>
              <p>
                The calculator above provides an estimate based on average
                project costs in the NY/NJ area. Your actual quote may differ
                based on specific site conditions, cabinet complexity (corner
                units, high cabinets), and accessibility.
              </p>
              <p>
                For an exact price, send us your IKEA kitchen plan and we&apos;ll
                provide a detailed, line-by-line quote within 24 hours — free
                and with no obligation.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
