"use client";

import { useMemo, useState } from "react";

import {
  getSellPriceMultiplier,
  type CropQuality,
  type ProfitResult,
} from "@/lib/calculateProfit";

type ResultTableProps = {
  results: ProfitResult[];
  quality: CropQuality;
  hasTiller: boolean;
};

type SortKey = "cropName" | "harvestCount" | "totalRevenue" | "totalProfit" | "goldPerDay";
type SortDirection = "asc" | "desc";

type SortConfig = {
  key: SortKey;
  direction: SortDirection;
};

const medalByRank: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const cropEmojiById: Record<string, string> = {
  strawberry: "🍓",
  potato: "🥔",
  cauliflower: "🥦",
  kale: "🥬",
  garlic: "🧄",
  coffee_bean: "☕",
  parsnip: "🥕",
  green_beans: "🫛",
  tulip: "🌷",
  blue_jazz: "🪻",
};

const sortLabelByKey: Record<SortKey, string> = {
  cropName: "Crop",
  harvestCount: "Harvests",
  totalRevenue: "Revenue",
  totalProfit: "Profit",
  goldPerDay: "Gold/Day",
};

function getCropEmoji(cropId: string): string {
  return cropEmojiById[cropId] ?? "🌾";
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);
}

function SortHintIcon(props: { active: boolean; direction: SortDirection }) {
  const upColor =
    props.active && props.direction === "asc" ? "text-[#7a522e]" : "text-[#7a522e]/35";
  const downColor =
    props.active && props.direction === "desc" ? "text-[#7a522e]" : "text-[#7a522e]/35";

  return (
    <span className="inline-flex flex-col items-center leading-none">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={`h-2.5 w-2.5 ${upColor}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 14 5-5 5 5" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={`-mt-0.5 h-2.5 w-2.5 ${downColor}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 10 5 5 5-5" />
      </svg>
    </span>
  );
}

function getComparatorValue(row: ProfitResult, key: SortKey): number | string {
  if (key === "cropName") {
    return row.cropName;
  }

  if (key === "harvestCount") {
    return row.harvestCount;
  }

  if (key === "totalRevenue") {
    return row.totalRevenue;
  }

  if (key === "totalProfit") {
    return row.totalProfit;
  }

  return row.goldPerDay;
}

export function ResultTable(props: ResultTableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "goldPerDay",
    direction: "desc",
  });

  const currentMultiplier = getSellPriceMultiplier(props.quality, props.hasTiller);

  const goldRankByCropId = useMemo(() => {
    const ranked = [...props.results].sort((a, b) => b.goldPerDay - a.goldPerDay);

    return new Map(ranked.map((row, index) => [row.cropId, index + 1]));
  }, [props.results]);

  const rows = useMemo(() => {
    return [...props.results].sort((a, b) => {
      const aValue = getComparatorValue(a, sortConfig.key);
      const bValue = getComparatorValue(b, sortConfig.key);

      if (typeof aValue === "string" && typeof bValue === "string") {
        const textComparison = aValue.localeCompare(bValue);

        if (textComparison !== 0) {
          return sortConfig.direction === "asc" ? textComparison : -textComparison;
        }
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        const numberComparison = aValue - bValue;

        if (numberComparison !== 0) {
          return sortConfig.direction === "asc" ? numberComparison : -numberComparison;
        }
      }

      return b.goldPerDay - a.goldPerDay || b.totalProfit - a.totalProfit || a.cropName.localeCompare(b.cropName);
    });
  }, [props.results, sortConfig.direction, sortConfig.key]);

  const handleSort = (key: SortKey) => {
    // 触觉反馈（仅移动端支持）
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }

    setSortConfig((previous) => {
      if (previous.key === key) {
        return {
          key,
          direction: previous.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        key,
        direction: key === "cropName" ? "asc" : "desc",
      };
    });
  };

  const getAriaSort = (key: SortKey): "none" | "ascending" | "descending" => {
    if (sortConfig.key !== key) {
      return "none";
    }

    return sortConfig.direction === "asc" ? "ascending" : "descending";
  };

  const getIconDirection = (key: SortKey): SortDirection => {
    return sortConfig.key === key ? sortConfig.direction : "desc";
  };

  const getSortAriaLabel = (key: SortKey): string => {
    const currentState =
      sortConfig.key === key
        ? sortConfig.direction === "asc"
          ? "ascending"
          : "descending"
        : "not sorted";

    return `Sort by ${sortLabelByKey[key]}, currently ${currentState}`;
  };

  return (
    <section className="scroll-mt-32 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Results
          </div>
          <div className="mt-1 text-sm text-[#6f4b2a]/85">
            Sorted by {sortConfig.key === "cropName" ? "crop name" : sortConfig.key} ({sortConfig.direction})
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-[#a67a50]/45 bg-[#fff4dc] px-3 py-1 text-xs font-medium text-[#5e3f24] shadow-sm">
            Current Multiplier: x{currentMultiplier.toFixed(2)}
          </span>
          <span className="text-xs text-[#6f4b2a]/70 sm:hidden">mobile cards</span>
        </div>
      </div>

      <div className="mt-4 sm:hidden">
        <div className="mb-3 flex flex-wrap gap-2">
          {(["goldPerDay", "totalProfit", "harvestCount"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleSort(key)}
              aria-label={`Sort by ${sortLabelByKey[key]}`}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                sortConfig.key === key
                  ? "bg-[#5e3f24] text-white shadow-md"
                  : "bg-white/70 text-[#5e3f24] shadow-sm hover:bg-white/90"
              }`}
            >
              {sortLabelByKey[key]}{" "}
              {sortConfig.key === key ? (
                sortConfig.direction === "asc" ? (
                  <span aria-hidden="true">
                    ↑
                  </span>
                ) : (
                  <span aria-hidden="true">
                    ↓
                  </span>
                )
              ) : null}
            </button>
          ))}
        </div>

        <div className="grid gap-3">
          {rows.map((row) => {
          const goldRank = goldRankByCropId.get(row.cropId) ?? Number.POSITIVE_INFINITY;
          const medal = medalByRank[goldRank];
          const isBestGold = goldRank === 1;

          return (
            <article
              key={`mobile-${row.cropId}`}
              className="rounded-2xl border border-[#9f744c]/25 bg-[#fff8e8]/90 p-3 shadow-[0_1px_0_rgba(122,82,46,0.14)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-[#503521]">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#dcb889]/40 text-[1.2rem] leading-none"
                  >
                    {getCropEmoji(row.cropId)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{row.cropName}</div>
                    <div className="text-[11px] text-[#5f432a]/80">{row.harvestCount} harvests</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-sm ${isBestGold ? "font-bold text-[#c38911]" : "font-semibold text-[#4d341f]"}`}>
                    {fmt(row.goldPerDay)}
                    {medal ? (
                      <span aria-hidden="true" className="ml-1 leading-none">
                        {medal}
                      </span>
                    ) : null}
                    {isBestGold ? (
                      <span aria-hidden="true" className="ml-1 animate-pulse leading-none">
                        ✨
                      </span>
                    ) : null}
                  </div>
                  <div className="text-[11px] text-[#5f432a]/80">gold/day</div>
                </div>
              </div>

              <dl className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                <div className="rounded-lg border border-[#a67a50]/25 bg-white/70 px-2 py-1.5">
                  <dt className="uppercase tracking-[0.08em] text-[#6f4b2a]/70">Revenue</dt>
                  <dd className="mt-0.5 font-semibold text-[#5f432a]">{fmt(row.totalRevenue)}</dd>
                </div>
                <div className="rounded-lg border border-[#a67a50]/25 bg-white/70 px-2 py-1.5">
                  <dt className="uppercase tracking-[0.08em] text-[#6f4b2a]/70">Profit</dt>
                  <dd className="mt-0.5 font-semibold text-[#5f432a]">{fmt(row.totalProfit)}</dd>
                </div>
                {row.artisanGoodsProfit && (
                  <>
                    <div className="rounded-lg border border-[#a67a50]/25 bg-white/70 px-2 py-1.5">
                      <dt className="uppercase tracking-[0.08em] text-[#6f4b2a]/70">Kegs</dt>
                      <dd className="mt-0.5 font-semibold text-[#5f432a]">{fmt(row.artisanGoodsProfit.kegs)}</dd>
                    </div>
                    <div className="rounded-lg border border-[#a67a50]/25 bg-white/70 px-2 py-1.5">
                      <dt className="uppercase tracking-[0.08em] text-[#6f4b2a]/70">Jars</dt>
                      <dd className="mt-0.5 font-semibold text-[#5f432a]">{fmt(row.artisanGoodsProfit.preservesJars)}</dd>
                    </div>
                  </>
                )}
              </dl>
            </article>
          );
        })}
        </div>
      </div>

      <div className="relative mt-4 hidden rounded-2xl border border-[#b88b63]/30 bg-[#fff8e8]/75 p-2 sm:block">
        <div className="overflow-x-auto pb-1 pr-2">
          <table className="min-w-[900px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                <th className="px-3 py-2" aria-sort={getAriaSort("cropName")}>
                  <button
                    type="button"
                    onClick={() => handleSort("cropName")}
                    aria-label={getSortAriaLabel("cropName")}
                    className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 transition hover:text-[#4e341f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5d36]/40"
                  >
                    Crop
                    <SortHintIcon
                      active={sortConfig.key === "cropName"}
                      direction={getIconDirection("cropName")}
                    />
                  </button>
                </th>
                <th className="px-3 py-2" aria-sort={getAriaSort("harvestCount")}>
                  <button
                    type="button"
                    onClick={() => handleSort("harvestCount")}
                    aria-label={getSortAriaLabel("harvestCount")}
                    className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 transition hover:text-[#4e341f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5d36]/40"
                  >
                    Harvests
                    <SortHintIcon
                      active={sortConfig.key === "harvestCount"}
                      direction={getIconDirection("harvestCount")}
                    />
                  </button>
                </th>
                <th className="px-3 py-2" aria-sort={getAriaSort("totalRevenue")}>
                  <button
                    type="button"
                    onClick={() => handleSort("totalRevenue")}
                    aria-label={getSortAriaLabel("totalRevenue")}
                    className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 transition hover:text-[#4e341f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5d36]/40"
                  >
                    Revenue
                    <SortHintIcon
                      active={sortConfig.key === "totalRevenue"}
                      direction={getIconDirection("totalRevenue")}
                    />
                  </button>
                </th>
                <th className="px-3 py-2" aria-sort={getAriaSort("totalProfit")}>
                  <button
                    type="button"
                    onClick={() => handleSort("totalProfit")}
                    aria-label={getSortAriaLabel("totalProfit")}
                    className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 transition hover:text-[#4e341f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5d36]/40"
                  >
                    Profit
                    <SortHintIcon
                      active={sortConfig.key === "totalProfit"}
                      direction={getIconDirection("totalProfit")}
                    />
                  </button>
                </th>
                <th className="px-3 py-2" aria-sort={getAriaSort("goldPerDay")}>
                  <button
                    type="button"
                    onClick={() => handleSort("goldPerDay")}
                    aria-label={getSortAriaLabel("goldPerDay")}
                    className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 transition hover:text-[#4e341f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5d36]/40"
                  >
                    Gold/Day
                    <SortHintIcon
                      active={sortConfig.key === "goldPerDay"}
                      direction={getIconDirection("goldPerDay")}
                    />
                  </button>
                </th>
                <th className="py-2 pl-3 pr-8">
                  <span className="inline-flex items-center gap-1.5">
                    Artisan Goods
                    <span className="text-[10px] font-normal text-[#6f4b2a]/60">(Kegs vs Jars)</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const goldRank = goldRankByCropId.get(row.cropId) ?? Number.POSITIVE_INFINITY;
                const medal = medalByRank[goldRank];
                const isBestGold = goldRank === 1;
                const isTopThree = goldRank <= 3;
                const rowBaseColor = index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]";

                return (
                  <tr
                    key={row.cropId}
                    className={`${rowBaseColor} rounded-2xl shadow-[0_1px_0_rgba(122,82,46,0.14)] ring-1 ring-[#9f744c]/20 transition-colors duration-200 hover:bg-[#e5f3cf]`}
                  >
                    <td className="px-3 py-3 font-medium text-[#503521]">
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#dcb889]/40 text-[1.2rem] leading-none"
                        >
                          {getCropEmoji(row.cropId)}
                        </span>
                        <span>{row.cropName}</span>
                      </span>
                    </td>
                    <td className="px-3 py-3 text-[#5f432a]/85">{row.harvestCount}</td>
                    <td className="px-3 py-3 text-[#5f432a]/85">{fmt(row.totalRevenue)}</td>
                    <td className="px-3 py-3 text-[#5f432a]/85">{fmt(row.totalProfit)}</td>
                    <td
                      className={`px-3 py-3 ${
                        isBestGold
                          ? "font-bold text-[#c38911]"
                          : isTopThree
                            ? "font-semibold text-[#b67617]"
                            : "font-semibold text-[#4d341f]"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {fmt(row.goldPerDay)}
                        {medal ? (
                          <span aria-hidden="true" className="leading-none">
                            {medal}
                          </span>
                        ) : null}
                        {isBestGold ? (
                          <span aria-hidden="true" className="animate-pulse leading-none">
                            ✨
                          </span>
                        ) : null}
                        {medal ? <span className="sr-only">Top {goldRank} gold per day crop</span> : null}
                        {isBestGold ? <span className="sr-only">Best performer</span> : null}
                      </span>
                    </td>
                    <td className="py-3 pl-3 pr-8 text-[#5f432a]/85">
                      {row.artisanGoodsProfit ? (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-x-3 gap-y-1">
                            <span className="inline-flex items-center gap-1 text-xs">
                              <span aria-hidden="true">🍷</span>
                              <span className="sr-only">Kegs</span>
                            </span>
                            <span className="font-medium text-[#5f432a]">{fmt(row.artisanGoodsProfit.kegs)}</span>
                          </div>
                          <div className="flex items-center justify-between gap-x-3 gap-y-1">
                            <span className="inline-flex items-center gap-1 text-xs">
                              <span aria-hidden="true">🫙</span>
                              <span className="sr-only">Preserves Jar</span>
                            </span>
                            <span className="font-medium text-[#5f432a]">{fmt(row.artisanGoodsProfit.preservesJars)}</span>
                          </div>
                          <div className="flex items-center justify-between gap-x-3 gap-y-1 pt-0.5">
                            <span className="text-[10px] text-[#6f4b2a]/60">Better</span>
                            <span className="text-xs font-semibold">
                              {row.artisanGoodsProfit.betterOption === "kegs" && (
                                <span className="inline-flex items-center gap-1">
                                  <span aria-hidden="true">🍷</span>
                                  <span className="sr-only">Kegs</span>
                                  <span>by</span>
                                  <span>{fmt(row.artisanGoodsProfit.kegs - row.artisanGoodsProfit.preservesJars)}</span>
                                </span>
                              )}
                              {row.artisanGoodsProfit.betterOption === "preserves_jars" && (
                                <span className="inline-flex items-center gap-1">
                                  <span aria-hidden="true">🫙</span>
                                  <span className="sr-only">Jars</span>
                                  <span>by</span>
                                  <span>{fmt(row.artisanGoodsProfit.preservesJars - row.artisanGoodsProfit.kegs)}</span>
                                </span>
                              )}
                              {row.artisanGoodsProfit.betterOption === "same" && (
                                <span className="text-[#6f4b2a]/70">Same (=)</span>
                              )}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-[#6f4b2a]/50">Enable artisan goods to see</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
