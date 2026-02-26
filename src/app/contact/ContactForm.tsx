// Items #1 (form backend), #6 (spam protection honeypot), #26 (redirect to thank-you)
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Item #6: Honeypot spam protection — if filled, it's a bot
    if (formData.get("website")) {
      // Silently reject
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          serviceArea: formData.get("serviceArea"),
          message: formData.get("message"),
          source: "contact",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      // Item #26: Redirect to thank-you page (enables GA4 conversion tracking)
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-7 shadow-lg border border-gray-light md:p-9"
    >
      {/* Item #6: Honeypot field — hidden from real users, bots fill it */}
      <div className="absolute opacity-0 -z-10" aria-hidden="true">
        <label>
          Do not fill this out
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
          />
        </div>
        <div>
          <label htmlFor="contact-zip" className="mb-1.5 block text-sm font-medium text-navy">
            Zip Code
          </label>
          <input
            id="contact-zip"
            name="serviceArea"
            type="text"
            placeholder="e.g. 10001"
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-navy">
          Project Description
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us about your IKEA kitchen project..."
          className="w-full resize-none rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy">
          Upload IKEA Plan (PDF)
        </label>
        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-light p-6 transition-colors hover:border-blue/40">
          <div className="text-center">
            <p className="text-sm text-muted">
              Drag & drop your PDF here, or{" "}
              <span className="font-medium text-blue cursor-pointer">browse</span>
            </p>
            <p className="mt-1 text-xs text-muted/60">PDF up to 10MB</p>
          </div>
        </div>
      </div>

      {error && (
        <div id="contact-form-error" role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-describedby={error ? "contact-form-error" : undefined}
        className="w-full rounded-full bg-yellow py-3.5 font-semibold text-navy transition-all hover:bg-yellow/90 hover:shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Quote Request"}
      </button>
    </form>
  );
}
