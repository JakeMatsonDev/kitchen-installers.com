// Item #27: Privacy Policy page
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — Kitchen Installers",
  description:
    "Privacy Policy for Kitchen Installers. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-20">
          <Container>
            <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-muted">Last updated: February 2026</p>
          </Container>
        </div>
      </section>

      <section className="py-16">
        <Container>
          <div className="prose mx-auto max-w-3xl text-[15px] leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-jakarta [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-jakarta [&_h3]:font-bold [&_h3]:text-navy [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1">
            <h2>Introduction</h2>
            <p>
              {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information You Provide</h3>
            <p>
              When you fill out a contact form, request a quote, or communicate
              with us, we may collect:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service area / location</li>
              <li>Project details and IKEA kitchen plans</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain
              information including your IP address, browser type, operating
              system, referring URLs, pages visited, and timestamps. We use
              Google Analytics to collect and analyze this data.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and perform kitchen installation services</li>
              <li>Improve our website and services</li>
              <li>Send follow-up communications about your project</li>
              <li>Analyze website traffic and user behavior</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our business (e.g., email providers,
              analytics services), but only to the extent necessary for them to
              provide their services.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies to
              improve your experience and analyze site traffic. You can control
              cookie preferences through your browser settings.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access,
              update, or delete your personal information. To exercise these
              rights, contact us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-blue hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              with an updated date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-blue hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>Phone: {SITE_CONFIG.phone}</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
