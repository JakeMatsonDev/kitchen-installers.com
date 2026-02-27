// Item #2: Updated contact page with centralized config
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/site-config";
import ContactForm from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Get a Free IKEA Kitchen Installation Quote",
  description:
    "Request a free quote for IKEA kitchen installation in New York or New Jersey. Send us your IKEA plan and get a detailed estimate within 3 hours.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                Get a Free Quote
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Send us your IKEA kitchen plan and we&apos;ll provide a detailed, no-obligation quote within <strong className="text-navy">3 hours</strong>. Fully insured team serving all of New York and New Jersey.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact info — Item #2: using centralized config */}
            <div>
              <h2 className="mb-6 font-jakarta text-2xl font-bold text-navy">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow/15">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p className="font-medium text-navy group-hover:text-blue transition-colors">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow/15">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-medium text-navy group-hover:text-blue transition-colors">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow/15">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Service Area</p>
                    <p className="font-medium text-navy">New York & New Jersey</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-off-white p-6">
                <h3 className="mb-3 font-jakarta font-bold text-navy">
                  Why get a quote?
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                    100% free, no obligation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                    Detailed breakdown of costs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                    Response within 3 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                    Expert advice on your IKEA plan
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
