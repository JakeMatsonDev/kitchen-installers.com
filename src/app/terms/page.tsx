// Item #27: Terms of Service page
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — Kitchen Installers",
  description:
    "Terms of Service for Kitchen Installers. Read our terms and conditions for using our website and kitchen installation services.",
  path: "/terms",
});

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-20">
          <Container>
            <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-muted">Last updated: February 2026</p>
          </Container>
        </div>
      </section>

      <section className="py-16">
        <Container>
          <div className="prose mx-auto max-w-3xl text-[15px] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-jakarta [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-jakarta [&_h3]:font-bold [&_h3]:text-navy [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the {SITE_CONFIG.name} website, you agree
              to be bound by these Terms of Service. If you do not agree, please
              do not use our website or services.
            </p>

            <h2>Our Services</h2>
            <p>
              {SITE_CONFIG.name} provides IKEA kitchen cabinet installation
              services in New York and New Jersey. All service details,
              timelines, and pricing are provided in individual quotes and
              service agreements.
            </p>

            <h2>Quotes and Pricing</h2>
            <p>
              All quotes provided are estimates based on the information you
              provide. Final pricing may vary based on actual site conditions.
              Quotes are valid for 30 days from the date of issue unless
              otherwise stated.
            </p>

            <h2>Scheduling and Cancellation</h2>
            <ul>
              <li>
                A deposit is required to confirm your installation date.
              </li>
              <li>
                Cancellations made more than 48 hours before the scheduled
                installation will receive a full refund of the deposit.
              </li>
              <li>
                Cancellations made within 48 hours may forfeit the deposit.
              </li>
              <li>
                We reserve the right to reschedule installations due to
                unforeseen circumstances.
              </li>
            </ul>

            <h2>Warranty</h2>
            <p>
              We offer a 2-year warranty on all installation work. This covers
              workmanship defects including alignment, fitting, and structural
              integrity. This warranty does not cover damage caused by misuse,
              normal wear and tear, or issues with IKEA products themselves
              (which are covered by IKEA&apos;s own warranty).
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {SITE_CONFIG.name} shall
              not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our website or
              services.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and
              design — is the property of {SITE_CONFIG.name} and is protected
              by applicable copyright and trademark laws.
            </p>

            <h2>IKEA Disclaimer</h2>
            <p>
              {SITE_CONFIG.name} is not affiliated with, endorsed by, or
              sponsored by Inter IKEA Systems B.V. or any of its subsidiaries.
              IKEA is a registered trademark of Inter IKEA Systems B.V.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated date.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-blue hover:underline"
              >
                {SITE_CONFIG.email}
              </a>{" "}
              or call {SITE_CONFIG.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
