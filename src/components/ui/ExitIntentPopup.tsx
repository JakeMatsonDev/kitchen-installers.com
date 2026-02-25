// Item #18: Exit-intent popup with lead magnet (desktop only, once per session)
"use client";

import { useState, useEffect, FormEvent } from "react";
import { X, Download } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Only on desktop (no hover on mobile)
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    // Only show once per session
    if (sessionStorage.getItem("exit-popup-shown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit-popup-shown", "1");
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    // Delay before activating to avoid triggering on page load
    const timeout = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // In production, send to your email provider API
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Lead Magnet Download",
          email,
          source: "contact",
          message: "Requested IKEA Kitchen Planning Checklist PDF",
        }),
      });
    } catch {
      // Still show success — email was captured
    }

    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 p-1 text-muted transition-colors hover:text-navy cursor-pointer"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Download size={28} className="text-green-600" />
            </div>
            <h3 className="font-jakarta text-xl font-bold text-navy">
              Check Your Email!
            </h3>
            <p className="mt-2 text-sm text-muted">
              We&apos;ve sent the IKEA Kitchen Planning Checklist to your inbox.
            </p>
            <button
              onClick={() => setShow(false)}
              className="mt-6 w-full rounded-full bg-yellow py-3 font-semibold text-navy transition-all hover:bg-yellow/90 cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow/20">
                <Download size={28} className="text-navy" />
              </div>
              <h3 className="font-jakarta text-xl font-bold text-navy">
                Wait! Before You Go...
              </h3>
              <p className="mt-2 text-sm text-muted">
                Download our free <strong className="text-navy">IKEA Kitchen Planning Checklist</strong> — everything
                you need to prepare for a stress-free installation.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-required="true"
                className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue transition-colors focus:border-blue"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-yellow py-3 font-semibold text-navy transition-all hover:bg-yellow/90 cursor-pointer"
              >
                Download Free Checklist
              </button>
              <p className="text-center text-xs text-muted">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
