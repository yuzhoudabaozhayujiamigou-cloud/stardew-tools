"use client";

import { useEffect, useMemo, useState } from "react";

function clampInt(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function parseIntSafe(value: string) {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

export function DaysLeftInput(props: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
}) {
  const min = props.min ?? 1;
  const max = props.max ?? 28;

  const [text, setText] = useState<string>(String(props.value));

  useEffect(() => {
    setText(String(props.value));
  }, [props.value]);

  const helper = useMemo(() => {
    return `Clamp ${min}–${max}. Assumes you can plant today.`;
  }, [max, min]);

  return (
    <div className="rounded-3xl border border-[#8a5b3a]/35 bg-[#fff8e8] p-4 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/70">
            Days Left
          </div>
          <div className="mt-1 text-sm font-semibold text-[#4a321e]">
            Days left in the season
          </div>
          <div className="mt-1 text-xs leading-5 text-[#5f4228]/75">{helper}</div>
        </div>

        <label className="grid gap-1 text-xs font-semibold text-[#6f4b2a]/80">
          <span className="sr-only">Days left in the season</span>
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            className="h-10 w-24 rounded-2xl border border-[#8a5b3a]/35 bg-white px-3 text-sm font-semibold text-[#4a321e] shadow-sm focus:border-[#7c4d2e]/70 focus:outline-none"
            value={text}
            onChange={(e) => {
              const nextText = e.target.value;
              setText(nextText);
              const parsed = parseIntSafe(nextText);
              if (parsed === null) return;
              props.onChange(clampInt(parsed, min, max));
            }}
            onBlur={() => {
              const parsed = parseIntSafe(text);
              const next = clampInt(parsed ?? props.value, min, max);
              setText(String(next));
              props.onChange(next);
            }}
            aria-label="Days left in the season"
          />
          <span className="text-[11px] font-medium text-[#6f4b2a]/65">{props.value} days</span>
        </label>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={min}
          max={max}
          value={props.value}
          onChange={(e) => {
            const parsed = parseIntSafe(e.target.value);
            if (parsed === null) return;
            props.onChange(clampInt(parsed, min, max));
          }}
          className="w-full accent-[#6ea84f]"
          aria-label="Days left slider"
        />
        <div className="mt-2 flex justify-between text-[11px] font-medium text-[#6f4b2a]/65">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}
