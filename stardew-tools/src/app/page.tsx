import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StardewProfit – Best Stardew Valley Crop Calculator & Guides",
  description:
    "StardewProfit.com: the fastest Stardew Valley crop profit calculator. Compare gold/day by season, plan your farm, and read expert guides to maximize profit.",
};

import CalculatorPage from "./calculator/page";

// Canonicalization helper:
// The homepage currently reuses the /calculator UI. That can confuse Google into
// selecting / as the canonical for /calculator. Add a prominent internal link
// so the crawler sees /calculator as the primary URL for this content.
function HomepageCanonicalHint() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="text-sm text-zinc-300">
          Looking for the main tool URL? Use the dedicated calculator page.
        </div>
        <Link
          href="/calculator"
          className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-500"
        >
          Open Stardew Crop Profit Calculator
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HomepageCanonicalHint />
      <CalculatorPage />
    </>
  );
}
