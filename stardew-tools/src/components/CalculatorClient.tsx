"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { InputForm, type InputFormValue, type ProcessingMode } from "@/components/InputForm";
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
import { CALCULATOR_DATA_META } from "@/lib/data-meta";
import {
  getCalculatorText,
  parseCalculatorLang,
  type CalculatorLang,
} from "@/lib/i18n-calculator";
import { getPresetById } from "@/lib/presets";
import { SITE_ORIGIN } from "@/lib/site";

const SHARE_RESET_DELAY_MS = 2200;
const SHARE_RESULTS_RESET_DELAY_MS = 2000;
const RESULTS_COLLAPSED_LIMIT = 5;
const FEEDBACK_ISSUE_BASE = "https://github.com/yuzhoudabaozhayujiamigou-cloud/stardew-tools/issues/new";
const VALID_QUERY_SEASONS = new Set<Season>([
  "spring",
  "summer",
  "fall",
  "winter",
  "greenhouse",
]);
const VALID_QUERY_PROCESSING = new Set<ProcessingMode>(["none", "keg", "jar"]);

function parseQuerySeason(rawSeason: string | null): Season | null {
  if (!rawSeason) {
    return null;
  }

  if (!VALID_QUERY_SEASONS.has(rawSeason as Season)) {
    return null;
  }

  return rawSeason as Season;
}

function parseQueryProfession(rawProfession: string | null): Profession | null {
  if (rawProfession === "artisan" || rawProfession === "none") {
    return rawProfession;
  }

  return null;
}

function parseQueryProcessing(rawProcessing: string | null): ProcessingMode | null {
  if (!rawProcessing) {
    return null;
  }

  if (!VALID_QUERY_PROCESSING.has(rawProcessing as ProcessingMode)) {
    return null;
  }

  return rawProcessing as ProcessingMode;
}

function parseQueryCompare(rawCompare: string | null): [string, string] | null {
  if (!rawCompare) {
    return null;
  }

  const cropIds = rawCompare
    .split(",")
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (cropIds.length < 2 || cropIds[0] === cropIds[1]) {
    return null;
  }

  return [cropIds[0], cropIds[1]];
}

function parseQueryDaysLeft(rawDaysLeft: string | null): number | null {
  if (!rawDaysLeft) {
    return null;
  }

  const parsed = Number.parseInt(rawDaysLeft, 10);
  if (!Number.isFinite(parsed)) {
    return null;
  }

  return clampSeasonDays(parsed);
}

type QueryState = {
  lang: CalculatorLang;
  compareSelection: [string, string] | null;
  form: InputFormValue;
  daysLeft: number;
};

function getDefaultQueryState(initialSeason: Season): QueryState {
  return {
    lang: "en",
    compareSelection: null,
    form: {
      season: initialSeason,
      processing: "none",
      quality: "normal",
      hasTiller: false,
      profession: "none",
    },
    daysLeft: 28,
  };
}

function resolveQueryState(params: URLSearchParams, initialSeason: Season): QueryState {
  const preset = getPresetById(params.get("preset"));
  const nextSeason = parseQuerySeason(params.get("season"));
  const nextProfession = parseQueryProfession(params.get("profession") ?? params.get("skill"));
  const nextProcessing = parseQueryProcessing(params.get("processing"));
  const nextLang = parseCalculatorLang(params.get("lang"));
  const explicitCompare = parseQueryCompare(params.get("compare"));
  const nextCompare = explicitCompare ?? preset?.defaultCompare ?? null;
  const nextDaysLeft = parseQueryDaysLeft(params.get("daysLeft"));
  const resolvedDaysLeft =
    nextDaysLeft ??
    (typeof preset?.defaultDaysLeft === "number" ? clampSeasonDays(preset.defaultDaysLeft) : 28);

  return {
    lang: nextLang,
    compareSelection: nextCompare,
    form: {
      season: nextSeason ?? preset?.defaultSeason ?? initialSeason,
      processing: nextProcessing ?? "none",
      quality: "normal",
      hasTiller: false,
      profession: nextProfession ?? preset?.defaultProfession ?? "none",
    },
    daysLeft: resolvedDaysLeft,
  };
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);
}

export function CalculatorClient(props: {
  crops: Crop[];
  initialSeason: Season;
  initialResults: ProfitResult[];
}) {
  const searchParams = useSearchParams();
  const initialQuery = (() => {
    try {
      if (typeof window !== "undefined") {
        return resolveQueryState(new URLSearchParams(window.location.search), props.initialSeason);
      }
    } catch {
      return getDefaultQueryState(props.initialSeason);
    }

    return getDefaultQueryState(props.initialSeason);
  })();

  const [daysLeft, setDaysLeft] = useState<number>(initialQuery.daysLeft);
  const [lang, setLang] = useState<CalculatorLang>(initialQuery.lang);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const [shareTextState, setShareTextState] = useState<"idle" | "copied" | "error">("idle");
  const [compareCopyState, setCompareCopyState] = useState<"idle" | "copied" | "error">("idle");
  const [compareSelection, setCompareSelection] = useState<[string, string] | null>(initialQuery.compareSelection);

  const [formValue, setFormValue] = useState<InputFormValue>(initialQuery.form);
  const [showAllResults, setShowAllResults] = useState(false);
  const [resultsLinkCopied, setResultsLinkCopied] = useState(false);
  const searchParamsKey = searchParams.toString();
  const queryState = useMemo(() => {
    try {
      return resolveQueryState(new URLSearchParams(searchParamsKey), props.initialSeason);
    } catch {
      return getDefaultQueryState(props.initialSeason);
    }
  }, [props.initialSeason, searchParamsKey]);

  useEffect(() => {
    setLang(queryState.lang);
    setCompareSelection(queryState.compareSelection);
    setFormValue(queryState.form);
    setDaysLeft(queryState.daysLeft);
  }, [queryState]);

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

  useEffect(() => {
    if (compareCopyState === "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCompareCopyState("idle");
    }, SHARE_RESET_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [compareCopyState]);

  useEffect(() => {
    if (!resultsLinkCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setResultsLinkCopied(false);
    }, SHARE_RESULTS_RESET_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [resultsLinkCopied]);

  const inputsKey = `${daysLeft}-${formValue.hasTiller}-${formValue.profession}-${formValue.quality}-${formValue.season}-${formValue.processing}`;


  const text = useMemo(() => getCalculatorText(lang), [lang]);

  const results = useMemo(() => {
    return props.crops
      .filter((crop) => formValue.season === "greenhouse" || crop.season.includes(formValue.season))
      .map((crop) =>
        calculateSeasonProfit({
          crop,
          seasonDays: daysLeft,
          quality: formValue.quality,
          hasTiller: formValue.hasTiller,
          profession: formValue.profession,
        }),
      )
      .map((result) => {
        if (formValue.processing === "none" || !result.artisanGoodsProfit) {
          return result;
        }

        const totalSeedCost = result.totalRevenue - result.totalProfit;
        const processedProfit =
          formValue.processing === "keg"
            ? result.artisanGoodsProfit.kegs
            : result.artisanGoodsProfit.preservesJars;

        return {
          ...result,
          totalRevenue: totalSeedCost + processedProfit,
          totalProfit: processedProfit,
          goldPerDay: processedProfit / daysLeft,
        };
      })
      .sort((a, b) => b.goldPerDay - a.goldPerDay);
  }, [
    daysLeft,
    formValue.hasTiller,
    formValue.processing,
    formValue.profession,
    formValue.quality,
    formValue.season,
    props.crops,
  ]);

  const resultsById = useMemo(() => {
    const lookup = new Map<string, ProfitResult>();
    for (const result of results) {
      lookup.set(result.cropId, result);
    }
    return lookup;
  }, [results]);

  const comparePair = useMemo(() => {
    if (compareSelection) {
      const first = resultsById.get(compareSelection[0]);
      const second = resultsById.get(compareSelection[1]);
      if (first && second && first.cropId !== second.cropId) {
        return [first, second] as const;
      }
    }

    if (results.length >= 2) {
      return [results[0], results[1]] as const;
    }

    return null;
  }, [compareSelection, results, resultsById]);

  const tableSourceResults = results.length ? results : props.initialResults;
  const shouldShowResultToggle = tableSourceResults.length > RESULTS_COLLAPSED_LIMIT;

  // Ensure the expanded state does not apply across different input combinations.
  // We intentionally avoid setState-in-effect due to react-hooks v7 rule behavior.
  const currentInputsKey = inputsKey;
  const [expandedInputsKey, setExpandedInputsKey] = useState(currentInputsKey);

  if (expandedInputsKey !== currentInputsKey) {
    // When inputs change, collapse results back to default without using effects.
    // Safe: guarded, runs at most twice per input change.
    setExpandedInputsKey(currentInputsKey);
    setShowAllResults(false);
  }

  const effectiveShowAllResults = showAllResults;
  const visibleResults = effectiveShowAllResults
    ? tableSourceResults
    : tableSourceResults.slice(0, RESULTS_COLLAPSED_LIMIT);

  const topPick = results[0];
  const compareTop = comparePair?.[0];
  const compareRunnerUp = comparePair?.[1];

  const shareUrl = useMemo(() => {
    const params = new URLSearchParams({
      season: formValue.season,
      daysLeft: String(daysLeft),
    });

    if (formValue.profession === "artisan") {
      params.set("profession", "artisan");
    }

    if (lang === "zh") {
      params.set("lang", "zh");
    }

    return `${SITE_ORIGIN}/calculator?${params.toString()}`;
  }, [daysLeft, formValue.profession, formValue.season, lang]);

  const compareUrl = useMemo(() => {
    const params = new URLSearchParams({
      season: formValue.season,
      daysLeft: String(daysLeft),
    });

    if (formValue.profession === "artisan") {
      params.set("profession", "artisan");
    }

    if (lang === "zh") {
      params.set("lang", "zh");
    }

    if (compareTop && compareRunnerUp) {
      params.set("compare", `${compareTop.cropId},${compareRunnerUp.cropId}`);
    }

    return `${SITE_ORIGIN}/calculator?${params.toString()}`;
  }, [compareRunnerUp, compareTop, daysLeft, formValue.profession, formValue.season, lang]);

  const issueUrl = useMemo(() => {
    const issueTitle =
      lang === "zh"
        ? `[数据反馈] ${formValue.season} ${daysLeft}天 ${topPick?.cropName ?? "unknown"}`
        : `[Data Feedback] ${formValue.season} ${daysLeft} days ${topPick?.cropName ?? "unknown"}`;

    const issueBody = [
      `Preset URL: ${shareUrl}`,
      `Data Version: ${CALCULATOR_DATA_META.version}`,
      "",
      lang === "zh" ? "问题描述：" : "What looks wrong:",
      lang === "zh" ? "- [ ] 作物价格不对" : "- [ ] Crop price",
      lang === "zh" ? "- [ ] 配方/加工收益不对" : "- [ ] Artisan chain result",
      lang === "zh" ? "- [ ] 天数/收获次数不对" : "- [ ] Days/harvest count",
      "",
      lang === "zh" ? "补充信息：" : "Extra context:",
    ].join("\n");

    const params = new URLSearchParams({
      title: issueTitle,
      body: issueBody,
      labels: "calculator-data",
    });

    return `${FEEDBACK_ISSUE_BASE}?${params.toString()}`;
  }, [daysLeft, formValue.season, lang, shareUrl, topPick?.cropName]);

  const shareText = useMemo(() => {
    const seasonLabel = formValue.season === "greenhouse" ? text.seasonOptions.greenhouse : text.seasonOptions[formValue.season];
    const professionSuffix = formValue.profession === "artisan" ? ` · ${text.artisanBoostBadge}` : "";
    const cropLabel = topPick?.cropName ?? (lang === "zh" ? "某作物" : "a crop");

    return lang === "zh"
      ? `${seasonLabel}，剩余 ${daysLeft} 天${professionSuffix}：当前最优是 ${cropLabel}。${shareUrl}`
      : `${seasonLabel}, ${daysLeft} days left${professionSuffix}: best pick is ${cropLabel}. ${shareUrl}`;
  }, [daysLeft, formValue.profession, formValue.season, lang, shareUrl, text, topPick?.cropName]);

  const compareText = useMemo(() => {
    if (!compareTop || !compareRunnerUp) {
      return compareUrl;
    }

    return lang === "zh"
      ? `方案对比：${compareTop.cropName} vs ${compareRunnerUp.cropName}，利润差 ${fmt(compareTop.totalProfit - compareRunnerUp.totalProfit)}。${compareUrl}`
      : `Plan comparison: ${compareTop.cropName} vs ${compareRunnerUp.cropName}, profit gap ${fmt(compareTop.totalProfit - compareRunnerUp.totalProfit)}. ${compareUrl}`;
  }, [compareRunnerUp, compareTop, compareUrl, lang]);

  const shareButtonLabel =
    copyState === "copied" ? text.copied : copyState === "error" ? text.copyFailed : text.shareButton;

  const shareTextButtonLabel =
    shareTextState === "copied" ? text.copied : shareTextState === "error" ? text.copyFailed : text.shareTextButton;

  const compareButtonLabel =
    compareCopyState === "copied"
      ? text.copied
      : compareCopyState === "error"
        ? text.copyFailed
        : text.compareLinkButton;

  const resultToggleLabel = showAllResults
    ? lang === "zh"
      ? `显示前 ${RESULTS_COLLAPSED_LIMIT}`
      : `Show Top ${RESULTS_COLLAPSED_LIMIT}`
    : lang === "zh"
      ? `显示全部（${tableSourceResults.length}）`
      : `Show All (${tableSourceResults.length})`;

  const collapsedResultHint = lang === "zh"
    ? `默认仅展示前 ${RESULTS_COLLAPSED_LIMIT} 项（共 ${tableSourceResults.length} 项）`
    : `Showing top ${RESULTS_COLLAPSED_LIMIT} of ${tableSourceResults.length}`;

  const copyText = async (nextText: string) => {
    try {
      await navigator.clipboard.writeText(nextText);
      return true;
    } catch {
      try {
        window.prompt(lang === "zh" ? "请复制内容：" : "Copy to clipboard:", nextText);
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

  const handleCopyCompareLink = async () => {
    const ok = await copyText(compareText);
    setCompareCopyState(ok ? "copied" : "error");
  };

  const handleShareResults = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setResultsLinkCopied(true);
    } catch {
      setResultsLinkCopied(false);
    }
  };

  const handleLangChange = (nextLang: CalculatorLang) => {
    setLang(nextLang);

    try {
      const params = new URLSearchParams(window.location.search);
      if (nextLang === "zh") {
        params.set("lang", "zh");
      } else {
        params.delete("lang");
      }

      const nextQuery = params.toString();
      const nextUrl = nextQuery ? `${window.location.pathname}?${nextQuery}` : window.location.pathname;
      window.history.replaceState(null, "", nextUrl);
    } catch {
      // ignore browser history failures
    }
  };

  const topPickRevenuePerHarvest = topPick && topPick.harvestCount > 0 ? topPick.totalRevenue / topPick.harvestCount : 0;
  const topPickSeedCost = topPick ? topPick.totalRevenue - topPick.totalProfit : 0;
  const whyThisCropWins = useMemo(() => {
    if (!topPick) return null;

    if (topPick.harvestCount > 1) {
      return "This crop wins because there is enough time left for its regrowth cycle to pay off.";
    }

    if (daysLeft <= 10) {
      return "This crop wins because faster harvest timing matters more when there are only a few days left.";
    }

    const roi = topPickSeedCost > 0 ? topPick.totalProfit / topPickSeedCost : 0;
    if (roi >= 2) {
      return "This crop is efficient because it returns strong profit relative to seed cost.";
    }

    return "This crop wins because it can finish before the season ends and produces strong gold per day in your remaining window.";
  }, [daysLeft, topPick, topPickSeedCost]);

  const topArtisanBest = compareTop?.artisanGoodsProfit
    ? Math.max(compareTop.artisanGoodsProfit.kegs, compareTop.artisanGoodsProfit.preservesJars)
    : 0;
  const runnerArtisanBest = compareRunnerUp?.artisanGoodsProfit
    ? Math.max(compareRunnerUp.artisanGoodsProfit.kegs, compareRunnerUp.artisanGoodsProfit.preservesJars)
    : 0;

  return (
    <>
      <div className="rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] p-3 text-xs text-[#5f4228]/90 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-[#4a321e]">{text.languageLabel}:</span>
          <button
            type="button"
            onClick={() => handleLangChange("en")}
            className={`rounded-lg border px-2 py-1 font-medium transition ${
              lang === "en"
                ? "border-[#8a5b3a]/65 bg-[#fff2c8] text-[#5c3d23]"
                : "border-[#b88b63]/50 bg-white/80 text-[#6b4a2c] hover:bg-[#fff2c8]"
            }`}
          >
            {text.languageEn}
          </button>
          <button
            type="button"
            onClick={() => handleLangChange("zh")}
            className={`rounded-lg border px-2 py-1 font-medium transition ${
              lang === "zh"
                ? "border-[#8a5b3a]/65 bg-[#fff2c8] text-[#5c3d23]"
                : "border-[#b88b63]/50 bg-white/80 text-[#6b4a2c] hover:bg-[#fff2c8]"
            }`}
          >
            {text.languageZh}
          </button>
        </div>
      </div>

      <InputForm value={formValue} lang={lang} onChange={setFormValue} />

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

        <button
          type="button"
          onClick={handleCopyCompareLink}
          className="inline-flex items-center gap-2 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-sm font-semibold text-[#5c3d23] transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
        >
          <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
            ⚖️
          </span>
          {compareButtonLabel}
        </button>

        <span className="text-xs text-[#6b4a2c]/80">
          {text.sharePreset}: {formValue.season} · {daysLeft}
          {lang === "zh" ? "天" : " days left"}
          {formValue.profession === "artisan" ? " · artisan" : ""}
        </span>
      </div>

      <details className="mt-5 cursor-pointer rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] p-4 text-sm text-[#5f4228]/90 shadow-sm">
        <summary className="font-semibold text-[#4a321e]">
          {text.assumptionsTitle}
        </summary>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-6">
          <li>
            <strong>{text.assumptionPlantingLabel}:</strong> {text.assumptionPlantingText}
          </li>
          <li>
            <strong>{text.assumptionSeasonLabel}:</strong> {text.assumptionSeasonText}
          </li>
          <li>
            <strong>{text.assumptionProfitLabel}:</strong> <code>{text.assumptionProfitText}</code>
          </li>
          <li>
            <strong>{text.assumptionGoldPerDayLabel}:</strong> {text.assumptionGoldPerDayText}
          </li>
        </ul>
      </details>

      <div className="mt-5 grid content-start gap-5 transition-opacity duration-200 motion-reduce:transition-none">
        {topPick ? (
          <section className="rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] p-4 text-sm text-[#5f4228]/90 shadow-sm">
            <h3 className="text-base font-semibold text-[#4a321e]">Why this crop wins</h3>
            <p className="mt-2 leading-6">{whyThisCropWins}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-6">
              <li>
                <strong>{text.explainFormula}:</strong> {fmt(topPick.totalRevenue)} - {fmt(topPickSeedCost)} = {fmt(topPick.totalProfit)}
              </li>
              <li>
                <strong>{text.explainRevenuePerHarvest}:</strong> {fmt(topPickRevenuePerHarvest)}
              </li>
              <li>
                <strong>{text.explainSeedCost}:</strong> {fmt(topPickSeedCost)}
              </li>
            </ul>
          </section>
        ) : null}

        {compareTop && compareRunnerUp ? (
          <section className="rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] p-4 text-sm text-[#5f4228]/90 shadow-sm">
            <h3 className="text-base font-semibold text-[#4a321e]">{text.compareTitle}</h3>
            <p className="mt-1 text-xs text-[#6b4a2c]/80">{text.compareSubtitle}</p>

            <div className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
              <div className="rounded-xl border border-[#b88b63]/40 bg-[#fff2c8] px-3 py-2">
                <span className="font-semibold text-[#4a321e]">{text.compareTopPlan}</span>: {compareTop.cropName}
              </div>
              <div className="rounded-xl border border-[#b88b63]/40 bg-[#fff2c8] px-3 py-2">
                <span className="font-semibold text-[#4a321e]">{text.compareRunnerUp}</span>: {compareRunnerUp.cropName}
              </div>
              <div className="rounded-xl border border-[#b88b63]/35 bg-white/80 px-3 py-2">
                <span className="font-semibold text-[#4a321e]">{text.compareProfitGap}</span>: {fmt(compareTop.totalProfit - compareRunnerUp.totalProfit)}
              </div>
              <div className="rounded-xl border border-[#b88b63]/35 bg-white/80 px-3 py-2">
                <span className="font-semibold text-[#4a321e]">{text.compareGoldPerDayGap}</span>: {fmt(compareTop.goldPerDay - compareRunnerUp.goldPerDay)}
              </div>
              <div className="rounded-xl border border-[#b88b63]/35 bg-white/80 px-3 py-2 sm:col-span-2">
                <span className="font-semibold text-[#4a321e]">{text.compareArtisanGap}</span>: {fmt(topArtisanBest - runnerArtisanBest)}
              </div>
            </div>
          </section>
        ) : null}

        <section className="rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] p-4 text-sm text-[#5f4228]/90 shadow-sm">
          <h3 className="text-base font-semibold text-[#4a321e]">{text.dataTitle}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-6">
            <li>
              <strong>{text.dataVersion}:</strong> {CALCULATOR_DATA_META.version}
            </li>
            <li>
              <strong>{text.dataUpdated}:</strong> {CALCULATOR_DATA_META.updatedAt}
            </li>
            <li>
              <strong>{text.dataSources}:</strong>{" "}
              {CALCULATOR_DATA_META.sources.map((source, index) => (
                <span key={source.href}>
                  {index > 0 ? " · " : ""}
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline"
                  >
                    {source.label}
                  </a>
                </span>
              ))}
            </li>
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={CALCULATOR_DATA_META.changelogUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-sm font-semibold text-[#5c3d23] transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
            >
              📚 {text.dataChangelog}
            </a>

            <a
              href={issueUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-sm font-semibold text-[#5c3d23] transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
            >
              🐞 {text.reportIssue}
            </a>
          </div>
          <p className="mt-2 text-xs text-[#6b4a2c]/80">{text.reportHint}</p>
        </section>

        <div className="p-2">
          <div className="mb-2 flex flex-wrap items-center gap-2 px-1 text-xs text-[#6b4a2c]/80">
            {shouldShowResultToggle ? (
              <>
                <span>{collapsedResultHint}</span>
                <button
                  type="button"
                  onClick={() => setShowAllResults((previous) => !previous)}
                  className="rounded-lg border border-[#8a5b3a]/45 bg-[#fff2c8] px-2 py-1 font-semibold text-[#5c3d23] transition hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
                >
                  {resultToggleLabel}
                </button>
              </>
            ) : null}
            <div className="ml-auto inline-flex items-center gap-2">
              <button
                type="button"
                onClick={handleShareResults}
                className="inline-flex items-center gap-2 rounded-lg border border-[#8a5b3a]/45 bg-[#fff2c8] px-2.5 py-1.5 text-xs font-semibold text-[#5c3d23] transition hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                📋 Share Results
              </button>
              {resultsLinkCopied ? (
                <span className="font-semibold text-[#4a321e]">✓ Link copied!</span>
              ) : null}
            </div>
          </div>
          <ResultTable
            results={visibleResults}
            quality={formValue.quality}
            hasTiller={formValue.hasTiller}
            profession={formValue.profession}
            lang={lang}
          />
        </div>
      </div>
    </>
  );
}
