"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import cropsData from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";

const SEASONS = [
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "fall", label: "Fall" },
  { value: "winter", label: "Winter" },
] as const satisfies ReadonlyArray<{ value: Season; label: string }>;

const crops = cropsData as Crop[];

function formatGold(value: number): string {
  return `${Math.round(value).toLocaleString()}g`;
}

export function HomeQuickCalculator() {
  const [season, setSeason] = useState<Season>("spring");
  const [daysLeft, setDaysLeft] = useState(28);
  const [hasTiller, setHasTiller] = useState(false);

  const rankings = useMemo(
    () =>
      crops
        .filter((crop) => crop.season.includes(season))
        .map((crop) =>
          calculateSeasonProfit({
            crop,
            seasonDays: daysLeft,
            quality: "normal",
            hasTiller,
            profession: "none",
            environment: "outdoor",
          }),
        )
        .filter((result) => result.harvestCount > 0 && result.totalProfit > 0)
        .sort((left, right) => right.goldPerDay - left.goldPerDay)
        .slice(0, 3),
    [daysLeft, hasTiller, season],
  );

  const bestGoldPerDay = rankings[0]?.goldPerDay ?? 0;
  const fullCalculatorHref = `/calculator?season=${season}&daysLeft=${daysLeft}`;

  return (
    <section
      aria-labelledby="quick-calculator-heading"
      className="rounded-lg border-2 border-[#284d41] bg-white p-4 shadow-[0_12px_30px_rgba(28,57,48,0.16)] sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#b14f3a]">Quick ranking</p>
          <h2 id="quick-calculator-heading" className="mt-1 text-2xl font-semibold text-[#203b33]">
            Best crops for your remaining days
          </h2>
        </div>
        <span className="rounded-md bg-[#e5f0eb] px-3 py-1 text-sm font-semibold text-[#284d41]">
          {daysLeft} days
        </span>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-[#384b44]">Season</legend>
        <div className="mt-2 grid grid-cols-4 gap-2" role="group" aria-label="Season">
          {SEASONS.map((option) => {
            const isActive = season === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSeason(option.value)}
                className={`min-h-10 rounded-md border px-2 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#284d41] bg-[#284d41] text-white"
                    : "border-[#b8c8c1] bg-[#f7faf8] text-[#384b44] hover:border-[#6d8b7f]"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <label className="block text-sm font-semibold text-[#384b44]">
          <span className="flex items-center justify-between gap-3">
            Days left
            <input
              type="number"
              min="1"
              max="28"
              value={daysLeft}
              onChange={(event) => setDaysLeft(Math.max(1, Math.min(28, Number(event.target.value) || 1)))}
              className="h-9 w-20 rounded-md border border-[#b8c8c1] bg-white px-2 text-right font-semibold text-[#b14f3a]"
              aria-label="Days left in season"
            />
          </span>
          <input
            type="range"
            min="1"
            max="28"
            value={daysLeft}
            onChange={(event) => setDaysLeft(Number(event.target.value))}
            className="mt-2 block h-2 w-full cursor-pointer accent-[#b14f3a]"
          />
        </label>
        <label className="flex min-h-10 items-center gap-2 rounded-md border border-[#b8c8c1] bg-[#f7faf8] px-3 py-2 text-sm font-semibold text-[#384b44]">
          <input
            type="checkbox"
            checked={hasTiller}
            onChange={(event) => setHasTiller(event.target.checked)}
            className="h-4 w-4 accent-[#284d41]"
          />
          Tiller +10%
        </label>
      </div>

      <div className="mt-6 min-h-[248px]" aria-live="polite">
        {rankings.length > 0 ? (
          <ol className="space-y-3">
            {rankings.map((result, index) => {
              const barWidth = bestGoldPerDay > 0 ? Math.max(18, (result.goldPerDay / bestGoldPerDay) * 100) : 18;
              return (
                <li key={result.cropId} className="rounded-lg border border-[#d2ddd8] bg-[#fbfcfb] p-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="min-w-0">
                      <span className="mr-2 text-sm font-semibold text-[#b14f3a]">#{index + 1}</span>
                      <span className="font-semibold text-[#203b33]">{result.cropName}</span>
                    </div>
                    <strong className="shrink-0 text-[#284d41]">{result.goldPerDay.toFixed(1)}g/day</strong>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-sm bg-[#e2e8e5]">
                    <div className="h-full rounded-sm bg-[#d9a441]" style={{ width: `${barWidth}%` }} />
                  </div>
                  <p className="mt-2 text-sm text-[#5b6863]">
                    {formatGold(result.totalProfit)} profit per tile · {result.harvestCount}{" "}
                    {result.harvestCount === 1 ? "harvest" : "harvests"}
                  </p>
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="flex min-h-[220px] items-center rounded-lg border border-[#e2c4bb] bg-[#fff7f4] p-5">
            <p className="text-sm leading-6 text-[#6b4339]">
              No profitable crop can mature in this window under the selected assumptions. Increase the days left or
              open the full calculator for fertilizer and growth-speed options.
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#d2ddd8] pt-4">
        <Link
          href={fullCalculatorHref}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#b14f3a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#963f30]"
        >
          Continue in full calculator
        </Link>
        <p className="text-xs leading-5 text-[#64716c]">Normal quality, direct sales, one outdoor tile.</p>
      </div>
    </section>
  );
}
