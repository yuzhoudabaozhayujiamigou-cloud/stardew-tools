"use client";

import { useMemo, useState } from "react";

const DAY_1_RATE = 0.5;
const DAY_2_RATE = 0.8;

const PANEL_CLASS = "rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4 shadow-sm";
const LABEL_CLASS = "text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75";
const INPUT_CLASS =
  "mt-1 min-h-11 w-full rounded-xl border border-[#8a5b3a]/45 bg-[#fff8e8]/90 px-3 py-2 text-base font-semibold text-[#4a321e] outline-none transition focus:border-[#6f8b3c]/75 focus:ring-2 focus:ring-[#6f8b3c]/20 sm:text-sm";

type StrategyRow = {
  label: string;
  target: number;
  day1Needed: number;
  day2Needed: number;
  day2Advantage: number;
};

function readSafeNumber(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function ceilCredits(value: number): number {
  return Math.max(0, Math.ceil(value));
}

function formatCredits(value: number): string {
  return `${new Intl.NumberFormat("en-US").format(Math.max(0, Math.round(value)))} credits`;
}

export function QuotaCalculatorClient() {
  const [quotaInput, setQuotaInput] = useState("130");
  const [currentFundsInput, setCurrentFundsInput] = useState("0");
  const [daysLeftInput, setDaysLeftInput] = useState("2");

  const quota = Math.max(0, readSafeNumber(quotaInput));
  const currentFunds = Math.max(0, readSafeNumber(currentFundsInput));
  const daysLeftRaw = Math.floor(readSafeNumber(daysLeftInput));
  const hasValidDaysLeft = daysLeftRaw >= 1;
  const daysLeft = hasValidDaysLeft ? daysLeftRaw : 1;

  const minimumTarget = Math.max(quota - currentFunds, 0);
  const dailyRequired = ceilCredits(minimumTarget / daysLeft);
  const essentialGearBudget =
    minimumTarget > 0 ? ceilCredits(Math.min(dailyRequired, minimumTarget * 0.3)) : 0;
  const targetWithBudget = minimumTarget + essentialGearBudget;

  const strategyRows = useMemo<StrategyRow[]>(() => {
    const rows = [
      {
        label: "Sell just enough to clear quota",
        target: minimumTarget,
      },
      {
        label: "Sell to clear quota + essential gear budget",
        target: targetWithBudget,
      },
    ];

    return rows.map((row) => {
      const day1Needed = ceilCredits(row.target / DAY_1_RATE);
      const day2Needed = ceilCredits(row.target / DAY_2_RATE);

      return {
        label: row.label,
        target: row.target,
        day1Needed,
        day2Needed,
        day2Advantage: Math.max(0, day1Needed - day2Needed),
      };
    });
  }, [minimumTarget, targetWithBudget]);

  const recommendation = useMemo(() => {
    if (!hasValidDaysLeft) {
      return "Set Days Left to at least 1 to get a valid quota plan.";
    }

    if (minimumTarget <= 0) {
      return "Quota is already cleared. Do not sell extra unless you need immediate purchase cash.";
    }

    if (daysLeft === 1) {
      return "Only one day remains. Sell today, and keep sales close to exact target unless essential gear is mandatory.";
    }

    return "Default plan: hold main inventory for Day 2, and on Day 1 only sell enough for exact target or must-buy gear.";
  }, [daysLeft, hasValidDaysLeft, minimumTarget]);

  return (
    <div className="mt-5 space-y-4">
      <section className={PANEL_CLASS}>
        <h3 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Inputs</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className={LABEL_CLASS}>Current Quota</span>
            <input
              type="number"
              min={0}
              step={1}
              value={quotaInput}
              onChange={(event) => setQuotaInput(event.target.value)}
              className={INPUT_CLASS}
              placeholder="130"
              inputMode="numeric"
            />
          </label>

          <label className="block">
            <span className={LABEL_CLASS}>Current Funds</span>
            <input
              type="number"
              min={0}
              step={1}
              value={currentFundsInput}
              onChange={(event) => setCurrentFundsInput(event.target.value)}
              className={INPUT_CLASS}
              placeholder="0"
              inputMode="numeric"
            />
          </label>

          <label className="block">
            <span className={LABEL_CLASS}>Days Left</span>
            <input
              type="number"
              min={1}
              step={1}
              value={daysLeftInput}
              onChange={(event) => setDaysLeftInput(event.target.value)}
              className={INPUT_CLASS}
              placeholder="2"
              inputMode="numeric"
            />
          </label>
        </div>
        <p className="mt-3 text-xs leading-5 text-[#5f4228]/85">
          Day comparison assumption used by this tool: Day 1 payout = 50%, Day 2 payout = 80%.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <article className={PANEL_CLASS}>
          <p className={LABEL_CLASS}>Minimum Target Amount</p>
          <p className="mt-2 text-xl font-semibold text-[#4a321e]">{formatCredits(minimumTarget)}</p>
          <p className="mt-1 text-xs text-[#5f4228]/80">`max(quota - currentFunds, 0)`</p>
        </article>

        <article className={PANEL_CLASS}>
          <p className={LABEL_CLASS}>Essential Gear Budget</p>
          <p className="mt-2 text-xl font-semibold text-[#4a321e]">{formatCredits(essentialGearBudget)}</p>
          <p className="mt-1 text-xs text-[#5f4228]/80">Heuristic cap = 30% of minimum target.</p>
        </article>

        <article className={PANEL_CLASS}>
          <p className={LABEL_CLASS}>Target With Budget</p>
          <p className="mt-2 text-xl font-semibold text-[#4a321e]">{formatCredits(targetWithBudget)}</p>
          <p className="mt-1 text-xs text-[#5f4228]/80">{`Daily pace target: ${formatCredits(dailyRequired)}`}</p>
        </article>
      </section>

      <section className={PANEL_CLASS}>
        <h3 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Day 1 vs Day 2 Revenue Delta</h3>
        <div className="mt-3 space-y-3 sm:hidden">
          {strategyRows.map((row) => (
            <article
              key={`mobile-${row.label}`}
              className="rounded-xl border border-[#7c4d2e]/35 bg-[#fff8e8]/75 p-3 text-sm text-[#4a321e]"
            >
              <p className="font-semibold">{row.label}</p>
              <dl className="mt-2 space-y-1 text-xs leading-5 text-[#5f4228]/95">
                <div className="flex items-start justify-between gap-3">
                  <dt className="font-semibold">Target Credits</dt>
                  <dd className="text-right">{formatCredits(row.target)}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="font-semibold">Raw Value on Day 1</dt>
                  <dd className="text-right">{formatCredits(row.day1Needed)}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="font-semibold">Raw Value on Day 2</dt>
                  <dd className="text-right">{formatCredits(row.day2Needed)}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="font-semibold">Day 2 Advantage</dt>
                  <dd className="text-right font-semibold text-[#1f6b2e]">{formatCredits(row.day2Advantage)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-3 hidden overflow-x-auto rounded-xl border border-[#7c4d2e]/35 bg-[#fff8e8]/75 sm:block">
          <table className="min-w-[700px] w-full border-collapse text-left text-sm text-[#4a321e]">
            <thead>
              <tr className="border-b border-[#7c4d2e]/30 bg-[#f2dfad]/70">
                <th className="px-3 py-2 font-semibold">Strategy</th>
                <th className="px-3 py-2 font-semibold">Target Credits</th>
                <th className="px-3 py-2 font-semibold">Raw Value Needed on Day 1</th>
                <th className="px-3 py-2 font-semibold">Raw Value Needed on Day 2</th>
                <th className="px-3 py-2 font-semibold">Day 2 Advantage</th>
              </tr>
            </thead>
            <tbody>
              {strategyRows.map((row) => (
                <tr key={row.label} className="border-b border-[#7c4d2e]/20 align-top">
                  <td className="px-3 py-2 font-semibold">{row.label}</td>
                  <td className="px-3 py-2">{formatCredits(row.target)}</td>
                  <td className="px-3 py-2">{formatCredits(row.day1Needed)}</td>
                  <td className="px-3 py-2">{formatCredits(row.day2Needed)}</td>
                  <td className="px-3 py-2 font-semibold text-[#1f6b2e]">{formatCredits(row.day2Advantage)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={PANEL_CLASS}>
        <p className={LABEL_CLASS}>Recommendation</p>
        <p className="mt-2 text-sm leading-6 text-[#5f4228]/95">{recommendation}</p>
      </section>
    </div>
  );
}
