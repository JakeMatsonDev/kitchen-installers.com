"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator as CalcIcon, ArrowRight } from "lucide-react";

interface CalcState {
  cabinetCount: number;
  includeCountertop: boolean;
  countertopFt: number;
}

const PER_CABINET_LOW = 190;
const PER_CABINET_HIGH = 260;
const COUNTERTOP_PER_FT = 55;

function calculateEstimate(state: CalcState) {
  const cabinetLow = state.cabinetCount * PER_CABINET_LOW;
  const cabinetHigh = state.cabinetCount * PER_CABINET_HIGH;

  let countertopCost = 0;
  if (state.includeCountertop) {
    countertopCost = state.countertopFt * COUNTERTOP_PER_FT;
  }

  return {
    low: cabinetLow + countertopCost,
    high: cabinetHigh + countertopCost,
  };
}

export default function CostCalculator() {
  const [state, setState] = useState<CalcState>({
    cabinetCount: 12,
    includeCountertop: true,
    countertopFt: 15,
  });
  const [showResult, setShowResult] = useState(false);

  const estimate = calculateEstimate(state);

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
              Average kitchen: 10–15 cabinets
            </p>
          </div>

          {/* Countertop Toggle */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Countertop Installation
            </label>
            <div className="flex gap-3">
              {[
                { value: true, label: "Yes, include countertop" },
                { value: false, label: "No countertop needed" },
              ].map((option) => (
                <button
                  key={String(option.value)}
                  type="button"
                  onClick={() =>
                    setState({ ...state, includeCountertop: option.value })
                  }
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-all cursor-pointer ${
                    state.includeCountertop === option.value
                      ? "border-blue bg-blue/5 text-blue"
                      : "border-gray-light text-muted hover:border-blue/30"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Countertop Length — only shown when included */}
          {state.includeCountertop && (
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
              <p className="mt-1 text-xs text-muted">
                ${COUNTERTOP_PER_FT} per linear foot
              </p>
            </div>
          )}

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
