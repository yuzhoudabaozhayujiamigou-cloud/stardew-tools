"use client";

import { useMemo, useState } from "react";

import { InputForm, type InputFormValue } from "@/components/InputForm";
import { ResultTable } from "@/components/calculator/ResultTable";
import { calculateSeasonProfit, type Crop, type ProfitResult, type Season } from "@/lib/calculateProfit";

export function CalculatorClient(props: {
  crops: Crop[];
  initialSeason: Season;
  initialResults: ProfitResult[];
}) {
  const [formValue, setFormValue] = useState<InputFormValue>({
    season: props.initialSeason,
    quality: "normal",
    hasTiller: false,
  });

  const results = useMemo(() => {
    return props.crops
      .filter((c) => c.season.includes(formValue.season))
      .map((c) =>
        calculateSeasonProfit({
          crop: c,
          quality: formValue.quality,
          hasTiller: formValue.hasTiller,
        }),
      )
      .sort((a, b) => b.goldPerDay - a.goldPerDay);
  }, [formValue.hasTiller, formValue.quality, formValue.season, props.crops]);

  return (
    <>
      <InputForm value={formValue} onChange={setFormValue} />
      <ResultTable
        results={results.length ? results : props.initialResults}
        quality={formValue.quality}
        hasTiller={formValue.hasTiller}
      />
    </>
  );
}
