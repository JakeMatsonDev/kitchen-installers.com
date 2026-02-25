"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../layout/Container";
import type { CityData } from "@/lib/types";

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-light">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-blue cursor-pointer"
        aria-expanded={open}
      >
        <span className="pr-4 font-jakarta text-lg font-semibold text-navy">
          {question}
        </span>
        <ChevronDown
          size={22}
          className={`flex-shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-[15px] leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CityFAQ({ city }: { city: CityData }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-sm font-semibold text-navy">
            FAQ
          </span>
          <h2 className="font-jakarta text-3xl font-bold text-navy md:text-4xl">
            Frequently Asked Questions — {city.name}
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          {city.faqItems.map((item, i) => (
            <AccordionItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
