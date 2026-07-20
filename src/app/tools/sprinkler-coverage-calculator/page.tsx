import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/sprinkler-coverage-calculator";

const PAGE_TITLE = "Sprinkler Coverage Calculator | StardewProfit";
const PAGE_DESCRIPTION =
  "Plan Stardew Valley sprinkler layouts fast. Compare basic, quality, and iridium coverage needs for common field sizes and expansion stages.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

type SprinklerType = {
  name: string;
  coverage: number;
};

const SPRINKLERS: SprinklerType[] = [
  { name: "Basic", coverage: 4 },
  { name: "Quality", coverage: 8 },
  { name: "Iridium", coverage: 24 },
];

const FIELD_SCENARIOS = [
  { label: "Starter patch", tiles: 48 },
  { label: "Medium field", tiles: 96 },
  { label: "Large seasonal field", tiles: 192 },
  { label: "Expansion field", tiles: 240 },
  { label: "Late-game block", tiles: 360 },
] as const;

const FAQS = [
  {
    question: "How many tiles does each sprinkler type cover?",
    answer:
      "Basic sprinklers cover 4 tiles, quality sprinklers cover 8 tiles, and iridium sprinklers cover 24 tiles.",
  },
  {
    question: "How do I calculate sprinkler count for my farm?",
    answer:
      "Divide total crop tiles by sprinkler coverage and round up. For example, 96 tiles need 12 quality sprinklers because 96 divided by 8 equals 12.",
  },
  {
    question: "Should I replace quality sprinklers immediately with iridium sprinklers?",
    answer:
      "Not always. Replace them gradually where layout compression matters most. Quality sprinklers remain very efficient for many mid-game fields.",
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

function countNeeded(tiles: number, coverage: number): number {
  return Math.ceil(tiles / coverage);
}

export default function SprinklerCoverageCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Sprinkler Coverage Calculator", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Sprinkler Coverage Calculator</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Use this quick planner to estimate sprinkler counts by field size. It is designed for fast
            expansion decisions when you are scaling crops each season.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Coverage Reference</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Sprinkler Type</th>
                  <th className="px-4 py-3 font-semibold">Tiles Watered</th>
                </tr>
              </thead>
              <tbody>
                {SPRINKLERS.map((row) => (
                  <tr key={row.name} className="border-t border-[#7c4d2e]/30">
                    <td className="px-4 py-3 font-semibold">{row.name}</td>
                    <td className="px-4 py-3">{row.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Field Size Calculator Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Field</th>
                  <th className="px-4 py-3 font-semibold">Crop Tiles</th>
                  <th className="px-4 py-3 font-semibold">Basic Needed</th>
                  <th className="px-4 py-3 font-semibold">Quality Needed</th>
                  <th className="px-4 py-3 font-semibold">Iridium Needed</th>
                </tr>
              </thead>
              <tbody>
                {FIELD_SCENARIOS.map((row) => (
                  <tr key={row.label} className="border-t border-[#7c4d2e]/30">
                    <td className="px-4 py-3 font-semibold">{row.label}</td>
                    <td className="px-4 py-3">{row.tiles}</td>
                    <td className="px-4 py-3">{countNeeded(row.tiles, 4)}</td>
                    <td className="px-4 py-3">{countNeeded(row.tiles, 8)}</td>
                    <td className="px-4 py-3">{countNeeded(row.tiles, 24)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/85">
            Formula: sprinkler count = ceiling(total crop tiles / coverage).
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Coverage is not the same as a finished layout</h2>
          <p className="mt-3 leading-7 text-[#5f4228]/90">
            The count table assumes every watered tile can be used. Real fields lose space at edges, around scarecrows,
            beside paths, and where sprinkler patterns do not divide cleanly into the field dimensions. Use the result
            as a minimum coverage count, then add the layout shape before crafting the final batch.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4">
              <h3 className="font-semibold">Worked example: 100 crop tiles</h3>
              <p className="mt-2 text-sm leading-7 text-[#5f4228]/85">
                The simple result is 13 Quality Sprinklers because 100 / 8 rounds up. A rectangular layout may still
                need 14 if the last sprinkler cannot use all eight positions.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4">
              <h3 className="font-semibold">Worked example: gradual upgrade</h3>
              <p className="mt-2 text-sm leading-7 text-[#5f4228]/85">
                Replacing every Quality Sprinkler at once is not required. Move Iridium Sprinklers into the most crowded
                blocks first, then reuse Quality Sprinklers on a secondary field.
              </p>
            </div>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Plan the field in this order</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Choose the number of crop tiles you can afford, water, and harvest.</li>
            <li>Pick a sprinkler tier based on current crafting materials rather than an ideal late-game setup.</li>
            <li>Calculate the minimum sprinkler count, then sketch the actual width and height of each block.</li>
            <li>Reserve path, scarecrow, Junimo Hut, and access tiles before buying seeds.</li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-[#5f4228]/85">
            After the field size is realistic, use the <Link href="/calculator" className={LINK_CLASS}>profit calculator</Link>
            to test whether the larger planting pays back the sprinkler and seed investment inside the season.
          </p>
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
              <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>
                Keg vs Preserves Jar Tool
              </Link>
            </li>
            <li>
              <Link href="/tools/artisan-profit" className={LINK_CLASS}>
                Artisan Profit Tool
              </Link>
            </li>
            <li>
              <Link href="/tools/seed-maker" className={LINK_CLASS}>
                Seed Maker Tool
              </Link>
            </li>
            <li>
              <Link href="/guides/quality-sprinklers-guide" className={LINK_CLASS}>
                Quality Sprinklers Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/fertilizer-profit-guide" className={LINK_CLASS}>
                Fertilizer Profit Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
                Greenhouse Profit Guide
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}
