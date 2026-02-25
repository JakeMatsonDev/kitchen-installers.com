"use client";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import FAQItem from "../ui/FAQItem";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers. Here are the most common things people ask about our IKEA kitchen installation service."
        />
        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
