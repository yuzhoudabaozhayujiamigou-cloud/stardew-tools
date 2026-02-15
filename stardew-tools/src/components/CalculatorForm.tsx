"use client";

import type { Season } from "@/lib/calculateProfit";

export type CalculatorFormValue = {
  season: Season;
};

export function CalculatorForm(props: {
  value: CalculatorFormValue;
  onChange: (next: CalculatorFormValue) => void;
}) {
  const { value, onChange } = props;

  return (
    <div className="rounded-3xl border border-emerald-900/10 bg-white/70 p-5 backdrop-blur sm:p-7">
      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-950/70">
        Inputs
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-emerald-950">Season</span>
          <select
            value={value.season}
            onChange={(e) => onChange({ ...value, season: e.target.value as Season })}
            className="h-11 rounded-2xl border border-emerald-900/15 bg-white px-4 text-sm text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none"
          >
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>
        </label>

        <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50 px-4 py-3 text-sm text-emerald-950/70">
          MVP assumes 28 days/season and base crop sell prices.
        </div>
      </div>
    </div>
  );
}
