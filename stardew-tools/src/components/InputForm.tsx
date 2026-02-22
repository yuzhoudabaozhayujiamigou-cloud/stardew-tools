"use client";

import {
  getQualityMultiplier,
  type CropQuality,
  type Season,
} from "@/lib/calculateProfit";

export type InputFormValue = {
  season: Season;
  quality: CropQuality;
  hasTiller: boolean;
};

const qualityOptions: Array<{
  value: CropQuality;
  label: string;
  icon: string;
}> = [
  { value: "normal", label: "Normal", icon: "" },
  { value: "silver", label: "Silver", icon: "🥈" },
  { value: "gold", label: "Gold", icon: "🥇" },
  { value: "iridium", label: "Iridium", icon: "💜" },
];

const tillerOptions: Array<{
  value: boolean;
  label: string;
  helper: string;
  icon: string;
}> = [
  {
    value: false,
    label: "Off",
    helper: "Base",
    icon: "",
  },
  {
    value: true,
    label: "On (+10%)",
    helper: "x1.10",
    icon: "👨‍🌾",
  },
];

export function InputForm(props: {
  value: InputFormValue;
  onChange: (next: InputFormValue) => void;
}) {
  const { value, onChange } = props;

  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/70">
            Inputs
          </div>
          <h2 className="mt-1 text-lg font-semibold text-[#4a321e] sm:text-xl">
            Crop Settings
          </h2>
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8a5b3a]/30 bg-[#f7edd2] shadow-sm">
          <span aria-hidden="true" className="inline-flex items-center text-lg leading-none opacity-80">
            🌾
          </span>
        </span>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#5a3d25]">Season</span>
          <select
            value={value.season}
            onChange={(event) => onChange({ ...value, season: event.target.value as Season })}
            className="h-11 rounded-2xl border border-[#a87a4d]/50 bg-[#fff8e7] px-4 text-sm text-[#4b331f] shadow-sm focus:border-[#7f5731] focus:outline-none"
          >
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="greenhouse">Greenhouse</option>
          </select>
        </label>

        <fieldset className="grid gap-2">
          <legend className="text-sm font-medium text-[#5a3d25]">Crop Quality</legend>
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
                        {option.label}
                      </span>
                      <span className="block text-xs text-[#6b4a2c]/75">
                        x{getQualityMultiplier(option.value).toFixed(2)}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <fieldset className="mt-4 grid gap-2">
        <legend className="text-sm font-medium text-[#5a3d25]">Tiller Profession</legend>
        <div className="grid grid-cols-1 gap-2 sm:max-w-md sm:grid-cols-2">
          {tillerOptions.map((option) => {
            const isActive = value.hasTiller === option.value;

            return (
              <button
                key={option.label}
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
                      {option.label}
                    </span>
                    <span className="block text-xs text-[#6b4a2c]/75">{option.helper}</span>
                    {option.value ? (
                      <span className="sr-only">
                        {isActive ? "Tiller profession enabled" : "Enable tiller profession"}
                      </span>
                    ) : null}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}
