// Item #17: Dedicated FAQ page aggregating top questions
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import FAQItem from "@/components/ui/FAQItem";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";
import { FAQ_ITEMS } from "@/lib/constants";
import { servicesData } from "@/lib/services-data";
import Link from "next/link";
import type { FAQItem as FAQItemType } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — IKEA Kitchen Installation Questions Answered",
  description:
    "Find answers to the most frequently asked questions about IKEA kitchen installation in New York and New Jersey. Costs, timelines, process, warranty, and more.",
  path: "/faq",
});

// Aggregate FAQs from all sources
function getAllFAQs(): { category: string; items: FAQItemType[] }[] {
  const serviceFAQs: FAQItemType[] = [];
  for (const service of servicesData) {
    for (const faq of service.faqItems.slice(0, 2)) {
      if (!serviceFAQs.some((f) => f.question === faq.question)) {
        serviceFAQs.push(faq);
      }
    }
  }

  return [
    {
      category: "General Questions",
      items: FAQ_ITEMS,
    },
    {
      category: "Service-Specific Questions",
      items: serviceFAQs.slice(0, 10),
    },
    {
      category: "Pricing & Payment",
      items: [
        {
          question: "Do you offer free quotes?",
          answer:
            "Yes! We provide free, no-obligation quotes for all IKEA kitchen installation projects. Simply send us your IKEA kitchen plan and we'll provide a detailed cost breakdown within 24 hours.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, bank transfers, and checks. A deposit is required to secure your installation date, with the balance due upon completion.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "Absolutely not. Our quotes are fully transparent and include all labor, materials, and cleanup costs. If any additional work is needed, we'll discuss it with you before proceeding.",
        },
        {
          question: "Do you offer financing options?",
          answer:
            "We can discuss flexible payment arrangements for larger projects. Contact us to learn more about available options for your kitchen installation.",
        },
      ],
    },
    {
      category: "Scheduling & Process",
      items: [
        {
          question: "How far in advance should I book?",
          answer:
            "We recommend booking 2-4 weeks in advance, especially during peak renovation season (spring and fall). However, we can sometimes accommodate shorter timelines depending on availability.",
        },
        {
          question: "What should I do to prepare for installation day?",
          answer:
            "Clear the kitchen area of personal items, ensure the IKEA delivery is complete and unpacked, and provide clear access to the kitchen. We'll send you a detailed preparation checklist when you book.",
        },
        {
          question: "Can I stay in my home during the installation?",
          answer:
            "Yes, you can stay in your home. We contain our work area and clean up at the end of each day. You'll have limited kitchen access during the installation, so plan meals accordingly.",
        },
      ],
    },
  ];
}

export default function FAQPage() {
  const allFAQs = getAllFAQs();
  const allItems = allFAQs.flatMap((section) => section.items);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(allItems)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="pt-[72px]">
        <div className="bg-gradient-to-br from-off-white via-white to-yellow/5 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
                FAQ
              </span>
              <h1 className="font-jakarta text-4xl font-bold text-navy md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Everything you need to know about IKEA kitchen installation in
                New York and New Jersey. Can&apos;t find your answer?{" "}
                <Link href="/contact" className="text-blue hover:underline">
                  Contact us directly
                </Link>
                .
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {allFAQs.map((section) => (
              <div key={section.category} className="mb-12 last:mb-0">
                <h2 className="mb-6 font-jakarta text-2xl font-bold text-navy">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <FAQItem
                      key={i}
                      item={item}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Our team is here to help. Get in touch and we&apos;ll answer any
              questions about your IKEA kitchen project.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-9 py-4 text-lg font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
