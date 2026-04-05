"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { CalculatorClient as CalculatorClientType } from "./CalculatorClient";

export const CalculatorClient = dynamic<ComponentProps<typeof CalculatorClientType>>(
  () => import("./CalculatorClient").then((mod) => ({ default: mod.CalculatorClient })),
  { ssr: false }
);
