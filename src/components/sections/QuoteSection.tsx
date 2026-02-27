// Items #1 (form backend), #2 (centralized contact), #6 (spam protection)
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import FileUpload from "../ui/FileUpload";
import { SITE_CONFIG } from "@/lib/site-config";

export default function QuoteSection() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam check
    if (formData.get("company")) {
      setSubmitting(false);
      return;
    }

    try {
      const payload = new FormData();
      payload.append("email", formData.get("email") as string);
      payload.append("serviceArea", formData.get("serviceArea") as string);
      payload.append("message", formData.get("message") as string);
      payload.append("source", "quote");
      if (file) payload.append("attachment", file);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        const text = await res.text();
        let errorMsg = "Something went wrong";
        try {
          const data = JSON.parse(text);
          errorMsg = data.error || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" className="overflow-hidden bg-navy py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Get Started"
          title="Request a Free Quote"
          subtitle="Upload your IKEA plan — free quote within 3 hours."
          light
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact info — Item #2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 font-jakarta text-2xl font-bold text-white">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-yellow/20">
                  <Phone size={20} className="text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Phone</p>
                  <p className="font-medium text-white group-hover:text-yellow transition-colors">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-yellow/20">
                  <Mail size={20} className="text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="font-medium text-white group-hover:text-yellow transition-colors">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                  <MapPin size={20} className="text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Service Area</p>
                  <p className="font-medium text-white">
                    New York & New Jersey
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-white/5 p-6">
              <h4 className="mb-3 font-jakarta font-bold text-white">
                Why get a quote?
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow" aria-hidden="true" />
                  100% free, no obligation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow" aria-hidden="true" />
                  Detailed cost breakdown — no surprises
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow" aria-hidden="true" />
                  Response within 3 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow" aria-hidden="true" />
                  Fully insured — your home is protected
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow" aria-hidden="true" />
                  No pressure — we never do hard sells
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form — Items #1, #6 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl bg-white p-7 shadow-xl md:p-9"
            >
              {/* Honeypot */}
              <div className="absolute opacity-0 -z-10" aria-hidden="true">
                <label>
                  Do not fill this out
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-email" className="mb-1.5 block text-sm font-medium text-navy">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="quote-zip" className="mb-1.5 block text-sm font-medium text-navy">
                    Zip Code
                  </label>
                  <input
                    id="quote-zip"
                    name="serviceArea"
                    type="text"
                    placeholder="e.g. 10001"
                    className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quote-message" className="mb-1.5 block text-sm font-medium text-navy">
                  Project Description
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={4}
                  placeholder="How many cabinets? Kitchen layout (L-shape, U-shape, galley)? Any countertop or appliance work needed?"
                  className="w-full resize-none rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  Upload IKEA Plan or Photos
                </label>
                <FileUpload file={file} onFileChange={setFile} />
              </div>

              {error && (
                <div id="quote-form-error" role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                aria-describedby={error ? "quote-form-error" : undefined}
                className="w-full rounded-full bg-yellow py-3.5 font-semibold text-navy transition-all hover:bg-yellow/90 hover:shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Get My Free Quote"}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
