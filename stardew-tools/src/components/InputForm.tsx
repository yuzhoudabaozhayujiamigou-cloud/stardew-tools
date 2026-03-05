"use client";

import {
  getQualityMultiplier,
  type CropQuality,
  type Profession,
  type Season,
} from "@/lib/calculateProfit";
import { getCalculatorText, type CalculatorLang } from "@/lib/i18n-calculator";

export type InputFormValue = {
  season: Season;
  quality: CropQuality;
  hasTiller: boolean;
  profession: Profession;
};

const qualityOptions: Array<{
  value: CropQuality;
  icon: string;
}> = [
  { value: "normal", icon: "" },
  { value: "silver", icon: "🥈" },
  { value: "gold", icon: "🥇" },
  { value: "iridium", icon: "💜" },
];

const tillerOptions: Array<{
  value: boolean;
  icon: string;
}> = [
  {
    value: false,
    icon: "",
  },
  {
    value: true,
    icon: "👨‍🌾",
  },
];

export function InputForm(props: {
  value: InputFormValue;
  lang: CalculatorLang;
  onChange: (next: InputFormValue) => void;
}) {
  const { value, onChange, lang } = props;
  const text = getCalculatorText(lang);
  const artisanEnabled = value.profession === "artisan";
  const advancedSettingsLabel = lang === "zh" ? "高级设置" : "Advanced Settings";

  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/70">
            {text.inputHeader}
          </div>
          <h2 className="mt-1 text-lg font-semibold text-[#4a321e] sm:text-xl">
            {text.inputTitle}
          </h2>
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8a5b3a]/30 bg-[#f7edd2] shadow-sm">
          <span aria-hidden="true" className="inline-flex items-center text-lg leading-none opacity-80">
            🌾
          </span>
        </span>
      </div>

      <div className="mt-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#5a3d25]">{text.seasonLabel}</span>
          <select
            value={value.season}
            onChange={(event) => onChange({ ...value, season: event.target.value as Season })}
            className="h-11 rounded-2xl border border-[#a87a4d]/50 bg-[#fff8e7] px-4 text-sm text-[#4b331f] shadow-sm focus:border-[#7f5731] focus:outline-none"
          >
            <option value="spring">{text.seasonOptions.spring}</option>
            <option value="summer">{text.seasonOptions.summer}</option>
            <option value="fall">{text.seasonOptions.fall}</option>
            <option value="winter">{text.seasonOptions.winter}</option>
            <option value="greenhouse">{text.seasonOptions.greenhouse}</option>
          </select>
        </label>
      </div>

      <details className="mt-4 rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8]/85 p-3">
        <summary className="cursor-pointer text-sm font-semibold text-[#5a3d25]">{advancedSettingsLabel}</summary>

        <fieldset className="mt-3 grid gap-2">
          <legend className="text-sm font-medium text-[#5a3d25]">{text.qualityLabel}</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {qualityOptions.map((option) => {
              const isActive = value.quality === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange({ ...value, quality: option.value })}
                  aria-pressed={isActive}
                  className={`group rounded-2xl border px-2 py-2 text-left transition ${
                    isActive
                      ? "border-[#9b692f] bg-[#f7e7b9] shadow-inner shadow-[inset_0_0_0_1px_rgba(251,191,36,0.55)]"
                      : "border-[#b88b63]/50 bg-[#fff8e8] hover:border-[#9b692f]/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {option.icon ? (
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#ab7a4f]/40 bg-[#efe0bb] text-[1.2rem] leading-none"
                      >
                        {option.icon}
                      </span>
                    ) : null}
                    <span>
                      <span className="block text-sm font-medium text-[#4d341f]">
                        {text.qualityOptions[option.value]}
                      </span>
                      <span className="block text-xs text-[#4a2f19]/90">
                        x{getQualityMultiplier(option.value).toFixed(2)}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-4 grid gap-2">
          <legend className="text-sm font-medium text-[#5a3d25]">{text.tillerLabel}</legend>
          <div className="grid grid-cols-1 gap-2 sm:max-w-md sm:grid-cols-2">
            {tillerOptions.map((option) => {
              const isActive = value.hasTiller === option.value;
              const optionLabel = option.value ? text.tillerOn : text.tillerOff;
              const optionHelper = option.value ? text.tillerOnHelper : text.tillerOffHelper;

              return (
                <button
                  key={String(option.value)}
                  type="button"
                  onClick={() => onChange({ ...value, hasTiller: option.value })}
                  aria-pressed={isActive}
                  className={`rounded-2xl border px-3 py-2 text-left transition ${
                    isActive
                      ? "border-[#7f9a43] bg-[#dff0bc] shadow-inner shadow-[inset_0_0_0_1px_rgba(132,204,22,0.4)]"
                      : "border-[#b88b63]/50 bg-[#fff8e8] hover:border-[#8e7b53]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {option.icon ? (
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#ab7a4f]/40 bg-[#efe0bb] text-[1.2rem] leading-none"
                      >
                        {option.icon}
                      </span>
                    ) : null}
                    <span>
                      <span className="block text-sm font-medium text-[#4d341f]">
                        {optionLabel}
                      </span>
                      <span className="block text-xs text-[#4a2f19]/90">{optionHelper}</span>
                      {option.value ? (
                        <span className="sr-only">
                          {isActive
                            ? lang === "zh"
                              ? "Tiller 已启用"
                              : "Tiller profession enabled"
                            : lang === "zh"
                              ? "启用 Tiller"
                              : "Enable tiller profession"}
                        </span>
                      ) : null}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-4 grid gap-2">
          <legend className="text-sm font-medium text-[#5a3d25]">{text.artisanProfessionLabel}</legend>
          <label className="inline-flex items-center gap-2 rounded-2xl border border-[#b88b63]/50 bg-[#fff8e8] px-3 py-2 text-sm text-[#4d341f]">
            <input
              type="checkbox"
              checked={artisanEnabled}
              onChange={(event) =>
                onChange({
                  ...value,
                  profession: event.target.checked ? "artisan" : "none",
                })
              }
              className="h-4 w-4 rounded border-[#a87a4d]/60 text-[#7f5731] focus:ring-[#7f5731]/40"
            />
            <span className="font-medium">{text.artisanToggle}</span>
          </label>
          <p className="text-xs text-[#6b4a2c]/80">
            {text.artisanHint}
          </p>
        </fieldset>
      </details>
    </section>
  );
}
