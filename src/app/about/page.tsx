import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { ABOUT_FEATURES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About Us — IKEA Kitchen Installation Experts | Kitchen Installers",
  description:
    "Learn about Kitchen Installers — your trusted IKEA kitchen cabinet installation specialists serving New York and New Jersey. 500+ kitchens installed, 5-year warranty.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
                About Us
              </span>
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                Your Trusted IKEA Kitchen Installation Experts
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We specialize exclusively in IKEA kitchen cabinet installation across New York and New Jersey. With over 500 kitchens installed and a 5-year warranty on all work, we&apos;re the team homeowners trust for their kitchen renovations.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/gallery/img_7877.webp"
                  alt="Completed IKEA kitchen installation with grey cabinets and professional gas range"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-yellow/20" />
            </div>

            <div>
              <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl mb-5">
                Why Choose Kitchen Installers?
              </h2>
              <p className="mb-6 text-[15px] leading-relaxed text-muted">
                We bring years of specialized experience in IKEA kitchen installations, ensuring every cabinet is perfectly assembled and installed. Our team understands the IKEA SEKTION system inside and out, and we handle all the complexities — from plumbing coordination to bulkhead construction.
              </p>
              <ul className="space-y-4">
                {ABOUT_FEATURES.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={22} className="mt-0.5 flex-shrink-0 text-blue" />
                    <span className="text-[15px] text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-jakarta text-4xl font-bold text-blue">500+</p>
              <p className="mt-2 text-muted">Kitchens Installed</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-jakarta text-4xl font-bold text-blue">55+</p>
              <p className="mt-2 text-muted">Cities Served in NY & NJ</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-jakarta text-4xl font-bold text-blue">2 Yr</p>
              <p className="mt-2 text-muted">Warranty on All Work</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl mb-5">
              Our Process
            </h2>
            <p className="text-lg text-muted mb-10">
              We&apos;ve streamlined our process to make your IKEA kitchen installation as smooth as possible.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow font-jakarta text-xl font-bold text-navy">
                1
              </div>
              <h3 className="font-jakarta text-lg font-bold text-navy mb-2">Send Your Plan</h3>
              <p className="text-sm text-muted">Upload your IKEA kitchen plan or share your order details for a free review.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow font-jakarta text-xl font-bold text-navy">
                2
              </div>
              <h3 className="font-jakarta text-lg font-bold text-navy mb-2">Get Your Quote</h3>
              <p className="text-sm text-muted">Receive a detailed, transparent quote with no hidden fees. We break down every cost.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow font-jakarta text-xl font-bold text-navy">
                3
              </div>
              <h3 className="font-jakarta text-lg font-bold text-navy mb-2">Enjoy Your Kitchen</h3>
              <p className="text-sm text-muted">Our expert team installs your kitchen in 1-3 days, leaving it spotless and ready to use.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your Kitchen Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Send us your IKEA kitchen plan and get a free, no-obligation quote within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
