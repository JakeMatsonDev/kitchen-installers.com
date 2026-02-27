import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AreasSection from "@/components/sections/AreasSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FAQSection from "@/components/sections/FAQSection";
import QuoteSection from "@/components/sections/QuoteSection";
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection";
import PhotoShowcaseSection from "@/components/sections/PhotoShowcaseSection";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kitchen Installers — Professional IKEA Kitchen Installation in NY & NJ",
  description:
    "Expert IKEA kitchen cabinet installation services in New York and New Jersey. Professional assembly, countertops, appliances, and full coordination. Get a free quote today.",
  alternates: {
    canonical: "https://www.kitchen-installers.com",
  },
  openGraph: {
    title: "Kitchen Installers — Professional IKEA Kitchen Installation in NY & NJ",
    description:
      "Expert IKEA kitchen cabinet installation services in New York and New Jersey. Get a free quote today.",
    url: "https://www.kitchen-installers.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PhotoShowcaseSection />
      <VideoShowcaseSection />
      <ProcessSection />
      <AreasSection />
      <TestimonialsSection />
      <WhyUsSection />
      <FAQSection />
      <QuoteSection />
    </>
  );
}
