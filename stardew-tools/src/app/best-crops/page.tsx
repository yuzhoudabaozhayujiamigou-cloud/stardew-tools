import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_PATH = "/best-crops";
const SEASONS = [
  ["Spring", "/best-crops/spring", "Balance early cash flow, festival seed access, and the first tool upgrades."],
  ["Summer", "/best-crops/summer", "Compare full-season harvest cycles and fast reinvestment options."],
  ["Fall", "/best-crops/fall", "Plan the final outdoor season without missing the Winter deadline."],
  ["Winter", "/best-crops/winter", "Separate Powdermelon and Winter Seeds from non-crop income choices."],
  ["Greenhouse", "/best-crops/greenhouse", "Use a longer horizon and account for replanting and machine throughput."],
] as const;

export const metadata: Metadata = {
  title: "Best Stardew Valley Crops by Season | StardewProfit",
  description:
    "Choose a Stardew Valley crop ranking for Spring, Summer, Fall, Winter, or the Greenhouse and see the assumptions behind each result.",
  alternates: { canonical: `${SITE_ORIGIN}${PAGE_PATH}` },
};

export default function BestCropsHubPage() {
  return (
    <div className="min-h-screen bg-[#9ed7a4]">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Best Crops", href: PAGE_PATH }]} />
        <header className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_28px_rgba(56,41,23,0.28)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Season Rankings</p>
          <h1 className="mt-1 text-3xl font-semibold text-[#4a321e] sm:text-5xl">Best Stardew Valley crops by season</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            These rankings are starting points, not universal answers. Pick the relevant season, then adjust for your
            planting day, seed budget, crop quality, profession, and processing capacity in the calculator.
          </p>
        </header>
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SEASONS.map(([label, href, description]) => (
            <Link key={href} href={href} className="rounded-lg border-2 border-[#8a5b3a]/55 bg-[#fff8e8] p-5 shadow-sm transition hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]">
              <h2 className="text-lg font-semibold text-[#4a321e]">{label}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{description}</p>
            </Link>
          ))}
        </section>
        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_28px_rgba(56,41,23,0.28)]">
          <h2 className="text-xl font-semibold text-[#4a321e]">Ranking assumptions</h2>
          <p className="mt-3 text-sm leading-7 text-[#5f4228]/90">
            Seasonal pages default to normal-quality direct sales without Tiller and simulate every harvest that fits
            in the stated window. Artisan goods are a separate machine-capacity decision. Open the calculator for a
            late planting date or a profession-specific comparison.
          </p>
          <Link className="mt-4 inline-flex rounded-lg bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white" href="/calculator">
            Run a Custom Ranking
          </Link>
        </section>
        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
