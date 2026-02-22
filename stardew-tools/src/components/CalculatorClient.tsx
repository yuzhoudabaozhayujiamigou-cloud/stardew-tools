"use client";

import { useEffect, useMemo, useState } from "react";

import { InputForm, type InputFormValue } from "@/components/InputForm";
import { DaysLeftInput } from "@/components/calculator/DaysLeftInput";
import { ResultTable } from "@/components/calculator/ResultTable";
import {
  calculateSeasonProfit,
  clampSeasonDays,
  type Crop,
  type Profession,
  type ProfitResult,
  type Season,
} from "@/lib/calculateProfit";
import { SITE_ORIGIN } from "@/lib/site";

const SHARE_RESET_DELAY_MS = 2200;
const VALID_QUERY_SEASONS = new Set<Season>([
  "spring",
  "summer",
  "fall",
  "winter",
  "greenhouse",
]);

function parseQuerySeason(rawSeason: string | null): Season | null {
  if (!rawSeason) {
    return null;
  }

  if (!VALID_QUERY_SEASONS.has(rawSeason as Season)) {
    return null;
  }

  return rawSeason as Season;
}

function parseQueryProfession(rawProfession: string | null): Profession {
  if (rawProfession === "artisan") {
    return "artisan";
  }

  return "none";
}

export function CalculatorClient(props: {
  crops: Crop[];
  initialSeason: Season;
  initialResults: ProfitResult[];
}) {
  const [daysLeft, setDaysLeft] = useState<number>(28);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const [shareTextState, setShareTextState] = useState<"idle" | "copied" | "error">("idle");

  const [formValue, setFormValue] = useState<InputFormValue>({
    season: props.initialSeason,
    quality: "normal",
    hasTiller: false,
    profession: "none",
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      const nextSeason = parseQuerySeason(params.get("season"));
      const nextProfession = parseQueryProfession(params.get("profession") ?? params.get("skill"));

      setFormValue((previous) => ({
        ...previous,
        season: nextSeason ?? previous.season,
        profession: nextProfession,
      }));

      const raw = params.get("daysLeft");
      if (!raw) return;
      const parsed = Number.parseInt(raw, 10);
      if (!Number.isFinite(parsed)) return;
      setDaysLeft(clampSeasonDays(parsed));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopyState("idle");
    }, SHARE_RESET_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [copyState]);

  useEffect(() => {
    if (shareTextState === "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShareTextState("idle");
    }, SHARE_RESET_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [shareTextState]);

  const results = useMemo(() => {
    return props.crops
      .filter((c) => formValue.season === "greenhouse" || c.season.includes(formValue.season))
      .map((c) =>
        calculateSeasonProfit({
          crop: c,
          seasonDays: daysLeft,
          quality: formValue.quality,
          hasTiller: formValue.hasTiller,
          profession: formValue.profession,
        }),
      )
      .sort((a, b) => b.goldPerDay - a.goldPerDay);
  }, [daysLeft, formValue.hasTiller, formValue.profession, formValue.quality, formValue.season, props.crops]);

  const shareUrl = useMemo(() => {
    const params = new URLSearchParams({
      season: formValue.season,
      daysLeft: String(daysLeft),
    });

    if (formValue.profession === "artisan") {
      params.set("profession", "artisan");
    }

    return `${SITE_ORIGIN}/calculator?${params.toString()}`;
  }, [daysLeft, formValue.profession, formValue.season]);

  const shareButtonLabel =
    copyState === "copied" ? "Copied!" : copyState === "error" ? "Copy failed" : "Copy result link";

  const topPick = results[0];

  const shareText = useMemo(() => {
    const seasonLabel = formValue.season === "greenhouse" ? "Greenhouse" : formValue.season;
    const greenhouseSuffix = formValue.season === "greenhouse" ? " (Greenhouse mode)" : "";
    const professionSuffix = formValue.profession === "artisan" ? " (Artisan +40% goods)" : "";
    const cropLabel = topPick?.cropName ?? "a crop";

    return `${seasonLabel}, ${daysLeft} days left${greenhouseSuffix}${professionSuffix}: best pick is ${cropLabel}. ${shareUrl}`;
  }, [daysLeft, formValue.profession, formValue.season, shareUrl, topPick]);

  const shareTextButtonLabel =
    shareTextState === "copied" ? "Copied!" : shareTextState === "error" ? "Copy failed" : "Copy share text";

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      try {
        window.prompt("Copy to clipboard:", text);
        return true;
      } catch {
        return false;
      }
    }
  };

  const handleCopyShareLink = async () => {
    const ok = await copyText(shareUrl);
    setCopyState(ok ? "copied" : "error");
  };

  const handleCopyShareText = async () => {
    const ok = await copyText(shareText);
    setShareTextState(ok ? "copied" : "error");
  };

  return (
    <>
      <InputForm value={formValue} onChange={setFormValue} />
      <DaysLeftInput value={daysLeft} onChange={setDaysLeft} />
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] px-4 py-3 text-sm text-[#5f4228]/90 shadow-sm">
        <button
          type="button"
          onClick={handleCopyShareLink}
          className="inline-flex items-center gap-2 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-sm font-semibold text-[#5c3d23] transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
        >
          <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
            🔗
          </span>
          {shareButtonLabel}
        </button>
        <button
          type="button"
          onClick={handleCopyShareText}
          className="inline-flex items-center gap-2 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-sm font-semibold text-[#5c3d23] transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
        >
          <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
            ✍️
          </span>
          {shareTextButtonLabel}
        </button>
        <span className="text-xs text-[#6b4a2c]/80">
          Share preset: {formValue.season} · {daysLeft} days left
          {formValue.profession === "artisan" ? " · artisan" : ""}
        </span>
      </div>
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
      <div className="m-4 p-2">
        <ResultTable
          results={results.length ? results : props.initialResults}
          quality={formValue.quality}
          hasTiller={formValue.hasTiller}
          profession={formValue.profession}
        />
      </div>
    </>
  );
}
