"use client";

import { useMemo, useState } from "react";

import { InputForm, type InputFormValue } from "@/components/InputForm";
import { ResultTable } from "@/components/calculator/ResultTable";
import { calculateSeasonProfit, type Crop, type ProfitResult, type Season } from "@/lib/calculateProfit";

export function CalculatorClient(props: {
  crops: Crop[];
  initialSeason: Season;
  initialResults: ProfitResult[];
}) {
  const [formValue, setFormValue] = useState<InputFormValue>({
    season: props.initialSeason,
    quality: "normal",
    hasTiller: false,
  });

  const results = useMemo(() => {
    return props.crops
      .filter((c) => c.season.includes(formValue.season))
      .map((c) =>
        calculateSeasonProfit({
          crop: c,
          quality: formValue.quality,
          hasTiller: formValue.hasTiller,
        }),
      )
      .sort((a, b) => b.goldPerDay - a.goldPerDay);
  }, [formValue.hasTiller, formValue.quality, formValue.season, props.crops]);

  return (
    <>
      <InputForm value={formValue} onChange={setFormValue} />
      <details className="mt-5 cursor-pointer rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] p-4 text-sm text-[#5f4228]/90 shadow-sm">
        <summary className="font-semibold text-[#4a321e]">
          Calculation Assumptions (How it works)
        </summary>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-6">
          <li>
            <strong>Planting:</strong> Assumes you plant today (Day 0).
          </li>
          <li>
            <strong>Season Constraint:</strong> Calculations are capped by the 28-day season limit or your custom <code>daysLeft</code>.
          </li>
          <li>
            <strong>Profit:</strong> <code>(Total Harvests * Sell Price) - Seed Cost</code>.
          </li>
          <li>
            <strong>Gold/Day:</strong> Total Profit divided by <code>daysLeft</code>.
          </li>
        </ul>
      </details>
      <ResultTable
        results={results.length ? results : props.initialResults}
        quality={formValue.quality}
        hasTiller={formValue.hasTiller}
      />
    </>
  );
}
