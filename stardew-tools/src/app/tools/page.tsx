import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { EditorialReview } from "@/components/EditorialReview";
import { SiteFooter } from "@/components/SiteFooter";
import { EDITORIAL_AUTHOR_NAME } from "@/lib/editorial";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_PATH = "/tools";
const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";
const TOOLS = [
  ["Crop Profit Calculator", "/calculator", "Rank crops with days left, quality, professions, and seed cost."],
  ["Artisan Profit", "/tools/artisan-profit", "Compare processing routes and machine capacity."],
  ["Keg vs Preserves Jar", "/tools/keg-vs-preserves-jar", "Route each crop to the better machine for your bottleneck."],
  ["Seed Maker Value", "/tools/seed-maker", "Estimate average seed replacement value without treating random output as guaranteed."],
  ["Sprinkler Coverage", "/tools/sprinkler-coverage-calculator", "Count watered tiles and compare upgrade breakpoints."],
  ["Sprinkler Layout Planner", "/tools/sprinkler-layout-planner", "Plan a stable field layout before crafting equipment."],
  ["Fishing Profit", "/tools/fishing-profit", "Compare repeatable fish values and profession effects."],
  ["Profession Guide", "/tools/professions", "Choose profit-focused skill paths and understand their tradeoffs."],
  ["Perfection Tracker", "/tools/perfection-tracker", "Track the major requirements on the road to 100% perfection."],
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Calculators and Planning Tools | StardewProfit",
  description:
    "Open Stardew Valley crop, artisan, seed, sprinkler, fishing, profession, and perfection planning tools from one hub.",
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: "/about#editorial-team" }],
  alternates: { canonical: `${SITE_ORIGIN}${PAGE_PATH}` },
};

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-[#9ed7a4]">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Tools", href: PAGE_PATH }]} />
        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Planning Toolkit</p>
          <h1 className="mt-1 text-3xl font-semibold text-[#4a321e] sm:text-5xl">Stardew Valley calculators and tools</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            Choose a tool based on the constraint you are solving. Crop tools handle planting windows, artisan tools
            handle machine queues, and layout tools handle the tiles and equipment you can maintain.
          </p>
          <EditorialReview gameVersion="1.6" />
        </header>
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map(([title, href, description]) => (
            <Link key={href} href={href} className="rounded-lg border-2 border-[#8a5b3a]/55 bg-[#fff8e8] p-5 shadow-sm transition hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]">
              <h2 className="font-semibold text-[#4a321e]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{description}</p>
            </Link>
          ))}
        </section>
        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e]">How to get a useful result</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90">
            <li>Start with the days, tiles, gold, and machines you actually have.</li>
            <li>Read the assumptions beside the result before comparing two strategies.</li>
            <li>Use the linked guide when labor, unlock timing, or randomness changes the mathematical answer.</li>
          </ol>
        </section>
        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
