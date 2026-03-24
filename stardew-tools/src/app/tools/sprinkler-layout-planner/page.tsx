import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/sprinkler-layout-planner";

const PAGE_TITLE = "Sprinkler Layout Planner Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Use this sprinkler layout planner Stardew Valley guide to estimate quality and iridium sprinkler coverage by farm width and height, including leftover tiles.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

type SprinklerType = {
  name: "Quality" | "Iridium";
  coverage: number;
  bestFor: string;
};

const SPRINKLER_TYPES: SprinklerType[] = [
  {
    name: "Quality",
    coverage: 8,
    bestFor: "Early to mid-game field blocks and flexible layouts",
  },
  {
    name: "Iridium",
    coverage: 24,
    bestFor: "Late-game compression and large greenhouse or farm grids",
  },
];

const PLANNER_SCENARIOS = [
  { label: "12x12 quality field", sprinkler: "Quality", width: 12, height: 12 },
  { label: "17x14 quality field", sprinkler: "Quality", width: 17, height: 14 },
  { label: "24x12 iridium field", sprinkler: "Iridium", width: 24, height: 12 },
  { label: "31x19 iridium field", sprinkler: "Iridium", width: 31, height: 19 },
] as const;

const FAQS = [
  {
    question: "How do I use this sprinkler layout planner for Stardew Valley?",
    answer:
      "Pick sprinkler type, multiply farm width by height for total crop tiles, then divide by coverage. The quotient is your full sprinkler count, and the remainder is leftover tiles that need one more sprinkler.",
  },
  {
    question: "What is the coverage for quality and iridium sprinklers?",
    answer:
      "Quality sprinklers water 8 tiles and iridium sprinklers water 24 tiles. Iridium is more space-efficient, while quality sprinklers are usually easier to scale in mid-game.",
  },
  {
    question: "What do leftover tiles mean?",
    answer:
      "Leftover tiles are crop spaces not covered by full sprinkler blocks. If leftover tiles are greater than zero, place one additional sprinkler to cover everything.",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

function getCoverage(sprinkler: "Quality" | "Iridium"): number {
  return sprinkler === "Quality" ? 8 : 24;
}

function planLayout(width: number, height: number, coverage: number) {
  const totalTiles = width * height;
  const fullSprinklers = Math.floor(totalTiles / coverage);
  const leftoverTiles = totalTiles % coverage;

  return {
    totalTiles,
    fullSprinklers,
    leftoverTiles,
    sprinklersToCoverAll: fullSprinklers + (leftoverTiles > 0 ? 1 : 0),
  };
}

export default function SprinklerLayoutPlannerPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Sprinkler Layout Planner", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Sprinkler Layout Planner</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            This sprinkler layout planner Stardew Valley page helps you size quality and iridium sprinkler
            setups quickly. Use simple inputs of sprinkler type, farm width, and farm height to estimate
            sprinkler count and leftover tiles.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Coverage Rules</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Sprinkler Type</th>
                  <th className="px-4 py-3 font-semibold">Tiles Watered</th>
                  <th className="px-4 py-3 font-semibold">Best Use</th>
                </tr>
              </thead>
              <tbody>
                {SPRINKLER_TYPES.map((row) => (
                  <tr key={row.name} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.name}</td>
                    <td className="px-4 py-3">{row.coverage}</td>
                    <td className="px-4 py-3">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/85">
            Formula: total tiles = width x height, full count = floor(total tiles / coverage), leftover
            tiles = total tiles mod coverage.
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Input to Output Examples</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Scenario</th>
                  <th className="px-4 py-3 font-semibold">Input</th>
                  <th className="px-4 py-3 font-semibold">Total Tiles</th>
                  <th className="px-4 py-3 font-semibold">Coverage Count</th>
                  <th className="px-4 py-3 font-semibold">Leftover Tiles</th>
                  <th className="px-4 py-3 font-semibold">Sprinklers to Cover All</th>
                </tr>
              </thead>
              <tbody>
                {PLANNER_SCENARIOS.map((scenario) => {
                  const coverage = getCoverage(scenario.sprinkler);
                  const output = planLayout(scenario.width, scenario.height, coverage);

                  return (
                    <tr key={scenario.label} className="border-t border-[#7c4d2e]/30 align-top">
                      <td className="px-4 py-3 font-semibold">{scenario.label}</td>
                      <td className="px-4 py-3">
                        {scenario.sprinkler}, {scenario.width} x {scenario.height}
                      </td>
                      <td className="px-4 py-3">{output.totalTiles}</td>
                      <td className="px-4 py-3">{output.fullSprinklers}</td>
                      <td className="px-4 py-3">{output.leftoverTiles}</td>
                      <td className="px-4 py-3">{output.sprinklersToCoverAll}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">How to Plan Quality vs Iridium Layouts</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Use quality sprinklers when you are scaling in chunks and still crafting in volume.</li>
            <li>Use iridium sprinklers when tile efficiency matters and walk paths are tighter.</li>
            <li>Check leftover tiles first, then decide whether an extra sprinkler or path tweak is better.</li>
            <li>Re-plan every season if your crop area and machine throughput both increase.</li>
          </ul>
        </section>

        <section id="faq" className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Related Guides and Tools</h2>
          <ul className="mt-4 space-y-2 leading-7 text-[#5f4228]/90">
            <li>
              <Link href="/tools/sprinkler-coverage-calculator" className={LINK_CLASS}>
                Sprinkler Coverage Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>
                Keg vs Preserves Jar Tool
              </Link>
            </li>
            <li>
              <Link href="/guides/quality-sprinklers-guide" className={LINK_CLASS}>
                Quality Sprinklers Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
                Greenhouse Profit Guide
              </Link>
            </li>
          </ul>
          <div className="mt-5 rounded-2xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
            <p className="text-sm leading-6 text-[#5f4228]/90">
              Ready to convert your layout into seasonal gold projections?
            </p>
            <Link href="/calculator" className={`${LINK_CLASS} mt-2 inline-block font-semibold`}>
              Open the Stardew Valley Profit Calculator
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}
