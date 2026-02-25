// Item #13: Interactive kitchen cost calculator (client component)
"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator as CalcIcon, ArrowRight } from "lucide-react";

interface CalcState {
  cabinetCount: number;
  countertopFt: number;
  serviceArea: string;
  extras: string[];
}

const EXTRAS = [
  { id: "removal", label: "Old Kitchen Removal", cost: 800 },
  { id: "appliances", label: "Appliance Installation", cost: 600 },
  { id: "splashback", label: "Splashback Installation", cost: 500 },
  { id: "bulkhead", label: "Bulkhead Construction", cost: 700 },
  { id: "plumbing", label: "Plumbing Coordination", cost: 400 },
  { id: "electrical", label: "Electrical Coordination", cost: 350 },
];

function calculateEstimate(state: CalcState) {
  // Base: cabinet assembly cost
  const cabinetCost = state.cabinetCount * 85; // $85 per cabinet avg
  // Countertop: per linear foot
  const countertopCost = state.countertopFt * 55; // $55/ft avg
  // Extras
  const extrasCost = EXTRAS.filter((e) => state.extras.includes(e.id)).reduce(
    (sum, e) => sum + e.cost,
    0
  );
  // Area modifier
  const areaMultiplier = state.serviceArea === "New York" ? 1.1 : 1.0;

  const subtotal = (cabinetCost + countertopCost + extrasCost) * areaMultiplier;
  const low = Math.round(subtotal * 0.85);
  const high = Math.round(subtotal * 1.15);

  return { low, high };
}

export default function CostCalculator() {
  const [state, setState] = useState<CalcState>({
    cabinetCount: 12,
    countertopFt: 15,
    serviceArea: "New York",
    extras: [],
  });
  const [showResult, setShowResult] = useState(false);

  const estimate = calculateEstimate(state);

  const toggleExtra = (id: string) => {
    setState((prev) => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter((e) => e !== id)
        : [...prev.extras, id],
    }));
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-gray-light bg-white p-7 shadow-lg md:p-9">
        <div className="space-y-7">
          {/* Cabinet Count */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Number of Cabinets
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={4}
                max={40}
                value={state.cabinetCount}
                onChange={(e) =>
                  setState({ ...state, cabinetCount: Number(e.target.value) })
                }
                className="flex-1 accent-blue"
              />
              <span className="w-12 text-center font-semibold text-navy">
                {state.cabinetCount}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">
              Average kitchen: 10-15 cabinets
            </p>
          </div>

          {/* Countertop */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Countertop Length (linear feet)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={5}
                max={40}
                value={state.countertopFt}
                onChange={(e) =>
                  setState({ ...state, countertopFt: Number(e.target.value) })
                }
                className="flex-1 accent-blue"
              />
              <span className="w-12 text-center font-semibold text-navy">
                {state.countertopFt} ft
              </span>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Service Area
            </label>
            <div className="flex gap-3">
              {["New York", "New Jersey"].map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setState({ ...state, serviceArea: area })}
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-all cursor-pointer ${
                    state.serviceArea === area
                      ? "border-blue bg-blue/5 text-blue"
                      : "border-gray-light text-muted hover:border-blue/30"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Additional Services
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {EXTRAS.map((extra) => (
                <button
                  key={extra.id}
                  type="button"
                  onClick={() => toggleExtra(extra.id)}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-all cursor-pointer ${
                    state.extras.includes(extra.id)
                      ? "border-blue bg-blue/5 text-navy"
                      : "border-gray-light text-muted hover:border-blue/30"
                  }`}
                >
                  <span>{extra.label}</span>
                  <span className="text-xs font-medium">
                    +${extra.cost.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            type="button"
            onClick={() => setShowResult(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow py-3.5 font-semibold text-navy transition-all hover:bg-yellow/90 hover:shadow-md cursor-pointer"
          >
            <CalcIcon size={20} />
            Calculate Estimate
          </button>
        </div>

        {/* Result */}
        {showResult && (
          <div className="mt-8 rounded-xl bg-gradient-to-br from-navy to-navy/90 p-8 text-center">
            <p className="text-sm text-white/60">Estimated Installation Cost</p>
            <p className="mt-2 font-jakarta text-4xl font-bold text-white">
              ${estimate.low.toLocaleString()} – $
              {estimate.high.toLocaleString()}
            </p>
            <p className="mt-3 text-sm text-white/60">
              This is an estimate. Get an exact quote for your specific project.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3 font-semibold text-navy transition-all hover:bg-yellow/90"
            >
              Get Your Exact Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
