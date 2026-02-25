// Item #26: Post-submission thank-you page (enables GA4 conversion tracking)
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Phone, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Thank You — Kitchen Installers",
  description:
    "Thank you for contacting Kitchen Installers. We'll review your request and get back to you within 24 hours.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="pt-[72px]">
      <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
              Thank You!
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Your request has been received. Our team will review your project
              details and get back to you within 24 hours with a detailed quote.
            </p>
          </div>
        </Container>
      </div>

      <div className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-jakarta text-2xl font-bold text-navy">
              What Happens Next?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-light bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow/20">
                  <Clock size={24} className="text-navy" />
                </div>
                <h3 className="mb-2 font-jakarta font-bold text-navy">
                  Within 24 Hours
                </h3>
                <p className="text-sm text-muted">
                  We&apos;ll review your IKEA kitchen plan and prepare a detailed
                  quote with a full cost breakdown.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-light bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow/20">
                  <Phone size={24} className="text-navy" />
                </div>
                <h3 className="mb-2 font-jakarta font-bold text-navy">
                  Consultation Call
                </h3>
                <p className="text-sm text-muted">
                  A team member will call to discuss your project, answer
                  questions, and confirm the timeline.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-light bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow/20">
                  <CheckCircle size={24} className="text-navy" />
                </div>
                <h3 className="mb-2 font-jakarta font-bold text-navy">
                  Schedule Install
                </h3>
                <p className="text-sm text-muted">
                  Once you approve the quote, we&apos;ll schedule your installation
                  at a date that works for you.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-navy p-8 text-center">
              <p className="text-lg text-white/80">
                Need to speak with us sooner? Call us directly:
              </p>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="mt-3 inline-block text-2xl font-bold text-yellow transition-colors hover:text-yellow/80"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-sm text-muted">
                While you wait, explore our resources:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-light px-5 py-2.5 text-sm font-medium text-navy transition-all hover:border-yellow hover:shadow-md"
                >
                  Read Our Blog
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-light px-5 py-2.5 text-sm font-medium text-navy transition-all hover:border-yellow hover:shadow-md"
                >
                  View All Services
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/cost-calculator"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-light px-5 py-2.5 text-sm font-medium text-navy transition-all hover:border-yellow hover:shadow-md"
                >
                  Cost Calculator
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
