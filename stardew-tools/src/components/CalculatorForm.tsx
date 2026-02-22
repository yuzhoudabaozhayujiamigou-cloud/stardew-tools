"use client";

import type { Season, CropQuality, Profession } from "@/lib/calculateProfit";

export type CalculatorFormValue = {
  season: Season;
  quality?: CropQuality;
  hasTiller?: boolean;
  profession?: Profession;
  useArtisanGoods?: boolean;
};

export type CalculatorPreset = "year1-newbie" | "endgame-artisan" | "custom";

function reportPresetSwitch(payload: {
  event: "preset_switch";
  from: CalculatorPreset;
  to: CalculatorPreset;
}) {
  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    const blob = new Blob([body], { type: "application/json" });
    const accepted = navigator.sendBeacon("/api/event", blob);
    if (accepted) {
      return;
    }
  }

  void fetch("/api/event", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
    keepalive: true,
  }).catch(() => {
    // best effort only
  });
}

export function CalculatorForm(props: {
  value: CalculatorFormValue;
  onChange: (next: CalculatorFormValue) => void;
}) {
  const { value, onChange } = props;

  const applyPreset = (preset: CalculatorPreset) => {
    const previousPreset = getCurrentPreset();

    // 触觉反馈（仅移动端支持）
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }

    switch (preset) {
      case "year1-newbie":
        onChange({
          season: value.season,
          quality: "normal",
          hasTiller: false,
          profession: "none",
          useArtisanGoods: false,
        });
        break;
      case "endgame-artisan":
        onChange({
          season: value.season,
          quality: "gold",
          hasTiller: true,
          profession: "artisan",
          useArtisanGoods: true,
        });
        break;
      case "custom":
        // 不做任何操作，保持当前状态
        break;
    }

    // 上报预设切换事件
    if (previousPreset !== preset) {
      reportPresetSwitch({
        event: "preset_switch",
        from: previousPreset,
        to: preset,
      });
    }
  };

  const getCurrentPreset = (): CalculatorPreset => {
    if (value.profession === "artisan" && value.hasTiller && value.useArtisanGoods) {
      return "endgame-artisan";
    }
    if (!value.profession || value.profession === "none") {
      return "year1-newbie";
    }
    return "custom";
  };

  const currentPreset = getCurrentPreset();

  return (
    <div className="rounded-3xl border border-emerald-900/10 bg-white/70 p-5 backdrop-blur sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-950/70">
          Inputs
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => applyPreset("year1-newbie")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              currentPreset === "year1-newbie"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-emerald-50 text-emerald-700 shadow-sm hover:bg-emerald-100"
            }`}
          >
            Year 1
          </button>
          <button
            type="button"
            onClick={() => applyPreset("endgame-artisan")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              currentPreset === "endgame-artisan"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-emerald-50 text-emerald-700 shadow-sm hover:bg-emerald-100"
            }`}
          >
            Endgame
          </button>
        </div>
      </div>

      {currentPreset === "custom" && (
        <p className="mt-2 text-xs text-emerald-700">
          💡 Custom settings active. Click a preset button to quick-switch.
        </p>
      )}

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

        <label className="grid gap-2">
          <span className="text-sm font-medium text-emerald-950">Quality</span>
          <select
            value={value.quality ?? "normal"}
            onChange={(e) => onChange({ ...value, quality: e.target.value as CropQuality })}
            className="h-11 rounded-2xl border border-emerald-900/15 bg-white px-4 text-sm text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none"
          >
            <option value="normal">Normal</option>
            <option value="silver">Silver (+25%)</option>
            <option value="gold">Gold (+50%)</option>
            <option value="iridium">Iridium (+100%)</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-emerald-950">Tiller (Level 5)</span>
          <div className="flex items-center gap-3 h-11">
            <label className="flex items-center gap-2 text-sm text-emerald-950">
              <input
                type="checkbox"
                checked={value.hasTiller ?? false}
                onChange={(e) => onChange({ ...value, hasTiller: e.target.checked })}
                className="h-5 w-5 rounded border-emerald-900/20 text-emerald-600 focus:ring-emerald-600"
              />
              <span>+10% crop sell price</span>
            </label>
          </div>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-emerald-950">Profession (Level 10)</span>
          <select
            value={value.profession ?? "none"}
            onChange={(e) => onChange({ ...value, profession: e.target.value as Profession })}
            className="h-11 rounded-2xl border border-emerald-900/15 bg-white px-4 text-sm text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none"
          >
            <option value="none">None</option>
            <option value="artisan">Artisan (+40% artisan goods)</option>
            <option value="agriculturist">Agriculturist (-10% growth time)</option>
          </select>
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-emerald-950">Advanced Options</span>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-emerald-950">
              <input
                type="checkbox"
                checked={value.useArtisanGoods ?? false}
                onChange={(e) => onChange({ ...value, useArtisanGoods: e.target.checked })}
                disabled={!value.profession || value.profession === "agriculturist"}
                className="h-5 w-5 rounded border-emerald-900/20 text-emerald-600 focus:ring-emerald-600 disabled:opacity-50"
              />
              <span>Calculate artisan goods (Kegs/Jars) profit</span>
            </label>
          </div>
          {value.useArtisanGoods && value.profession !== "artisan" && (
            <p className="mt-1 text-xs text-amber-600">⚠️ Artisan goods work best with Artisan profession!</p>
          )}
        </label>
      </div>
    </div>
  );
}
