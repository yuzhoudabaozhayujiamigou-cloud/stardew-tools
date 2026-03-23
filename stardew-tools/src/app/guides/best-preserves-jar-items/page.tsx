import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/best-preserves-jar-items";

const PAGE_TITLE = "Best Preserves Jar Items in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Learn which crops are best for preserves jars in Stardew Valley with the jelly and pickle value formula, machine-day comparisons, and routing tips.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const PROCESSING_DAYS = 3;

type JarItem = {
  item: string;
  basePrice: number;
  output: string;
};

const JAR_ITEMS: JarItem[] = [
  { item: "Starfruit", basePrice: 750, output: "Jelly" },
  { item: "Ancient Fruit", basePrice: 550, output: "Jelly" },
  { item: "Pumpkin", basePrice: 320, output: "Pickles" },
  { item: "Red Cabbage", basePrice: 260, output: "Pickles" },
  { item: "Melon", basePrice: 250, output: "Jelly" },
  { item: "Blueberry", basePrice: 50, output: "Jelly" },
];

const FAQS = [
  {
    question: "What formula does the preserves jar use?",
    answer:
      "Preserves jars use the same value formula for both fruit and vegetables: output price = 2 x base crop price + 50. Fruit becomes jelly and vegetables become pickles.",
  },
  {
    question: "When is a preserves jar better than a keg?",
    answer:
      "Preserves jars usually win on turnaround speed, which makes them strong when your machine count is low and harvest volume is high. Kegs often win on top-end value per item.",
  },
  {
    question: "Should I put low-value crops in preserve jars?",
    answer:
      "Low-value crops still gain value in jars, but prioritize higher base-value crops first because the formula scales with base price. If jars are full, route lower-value crops elsewhere.",
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

function formatGold(value: number): string {
  return `${value.toLocaleString()}g`;
}

function jarOutputPrice(basePrice: number): number {
  return basePrice * 2 + 50;
}

function addedProfit(basePrice: number): number {
  return jarOutputPrice(basePrice) - basePrice;
}

function addedProfitPerDay(basePrice: number): number {
  return addedProfit(basePrice) / PROCESSING_DAYS;
}

export default function BestPreservesJarItemsPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Preserves Jar Items", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Best Preserves Jar Items in Stardew Valley
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Preserves jars are excellent for fast, steady artisan throughput. The core formula is simple:
            output value equals 2 times base crop price plus 50g. This guide ranks common inputs and shows
            which crops deserve your limited jar slots.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Top Preserves Jar Candidates</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Input</th>
                  <th className="px-4 py-3 font-semibold">Base Price</th>
                  <th className="px-4 py-3 font-semibold">Jar Output</th>
                  <th className="px-4 py-3 font-semibold">Output Price</th>
                  <th className="px-4 py-3 font-semibold">Added Profit</th>
                  <th className="px-4 py-3 font-semibold">Added Profit/Day</th>
                </tr>
              </thead>
              <tbody>
                {JAR_ITEMS.map((row) => {
                  const outputPrice = jarOutputPrice(row.basePrice);
                  return (
                    <tr key={`${row.item}-${row.output}`} className="border-t border-[#7c4d2e]/30 align-top">
                      <td className="px-4 py-3 font-semibold">{row.item}</td>
                      <td className="px-4 py-3">{formatGold(row.basePrice)}</td>
                      <td className="px-4 py-3">{row.item} {row.output}</td>
                      <td className="px-4 py-3">{formatGold(outputPrice)}</td>
                      <td className="px-4 py-3">{formatGold(addedProfit(row.basePrice))}</td>
                      <td className="px-4 py-3">{`${addedProfitPerDay(row.basePrice).toFixed(2)}g/day`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-[#5f4228]/75">
            Added profit/day above uses an easy planning assumption of roughly 3 days per jar cycle.
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Routing Rules That Keep Jars Busy</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Feed jars from your highest-volume harvests so no machine sits idle.</li>
            <li>Use jars to smooth cash flow while long keg batches are still processing.</li>
            <li>Check machine bottlenecks weekly and swap crops if overflow piles up.</li>
            <li>For premium fruit, compare jar throughput vs keg final value before deciding.</li>
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
              <Link href="/guides/best-keg-items" className={LINK_CLASS}>
                Best Keg Items Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
                Greenhouse Profit Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/best-crops-every-season" className={LINK_CLASS}>
                Best Crops Every Season
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}
