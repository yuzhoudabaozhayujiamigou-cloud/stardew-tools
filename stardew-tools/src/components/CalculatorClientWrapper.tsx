"use client";

import dynamic from "next/dynamic";

const CalculatorClient = dynamic(
  () => import("./CalculatorClient").then((mod) => ({ default: mod.CalculatorClient })),
  { ssr: false }
);

export { CalculatorClient };
