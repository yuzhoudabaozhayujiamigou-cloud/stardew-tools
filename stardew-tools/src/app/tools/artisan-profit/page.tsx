import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

type ArtisanRow = {
  crop: string;
  rawPrice: number;
  processedItem: string;
  processedPrice: number;
  processingTime: string;
  processingDays: number;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const ARTISAN_ROWS: ArtisanRow[] = [
  {
    crop: "Starfruit",
    rawPrice: 750,
    processedItem: "Wine (Keg)",
    processedPrice: 2250,
    processingTime: "7 days",
    processingDays: 7,
  },
  {
    crop: "Hops",
    rawPrice: 25,
    processedItem: "Pale Ale (Keg)",
    processedPrice: 300,
    processingTime: "1-2 days",
    processingDays: 1.5,
  },
  {
    crop: "Blueberry",
    rawPrice: 50,
    processedItem: "Wine (Keg)",
    processedPrice: 450,
    processingTime: "7 days",
    processingDays: 7,
  },
  {
    crop: "Strawberry",
    rawPrice: 120,
    processedItem: "Jam (Preserve Jar)",
    processedPrice: 290,
    processingTime: "3 days",
    processingDays: 3,
  },
  {
    crop: "Blueberry",
    rawPrice: 50,
    processedItem: "Jam (Preserve Jar)",
    processedPrice: 450,
    processingTime: "3 days",
    processingDays: 3,
  },
  {
    crop: "Sunflower",
    rawPrice: 80,
    processedItem: "Oil (Oil Press)",
    processedPrice: 100,
    processingTime: "1 day",
    processingDays: 1,
  },
];

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/artisan-profit";
const PAGE_TITLE = "Stardew Valley Artisan Profit Calculator (Keg vs Jar vs Oil Press) | StardewProfit";
const PAGE_DESCRIPTION =
  "Compare Stardew Valley artisan profit fast: keg vs preserves jar vs oil press with gold-per-day math, machine routing tips, and FAQ answers.";

const FAQS = [
  {
    question: "How does this Stardew Valley artisan profit calculator work?",
    answer:
      "This calculator compares raw crop value against processed value, then turns that difference into gold per day based on machine time. Use it to decide whether a crop belongs in a keg, preserves jar, or oil press.",
  },
  {
    question: "Is keg or preserves jar better for profit?",
    answer:
      "For top-tier fruit like Starfruit and Ancient Fruit, kegs usually win long-run total value. Preserves jars finish faster and often win when your bottleneck is machine count, not crop quality. Many farms get the best result by running kegs for premium fruit and jars for overflow.",
  },
  {
    question: "What is the best early machine mix?",
    answer:
      "Start with preserves jars if you are short on resources and need faster turnover, then add kegs as your fruit supply becomes stable. A practical transition is jars first for consistency, then kegs for higher-value weekly output.",
  },
  {
    question: "Does the Artisan profession matter for this calculator?",
    answer:
      "Yes. Artisan adds 40% sell value to artisan goods, which usually flips close comparisons in favor of processing over selling raw crops. If artisan goods are your main income, this profession is one of the highest-impact upgrades.",
  },
  {
    question: "Should every crop be processed into artisan goods?",
    answer:
      "Not always. Process your highest-value crops first and sell low-value overflow raw when machines are full. The best strategy is keeping machines continuously busy with your best inputs instead of waiting for perfect batches.",
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

function formatGoldPerDay(value: number): string {
  return `${value.toFixed(2)}g/day`;
}

function calculateGoldPerDay(row: ArtisanRow): number {
  return (row.processedPrice - row.rawPrice) / row.processingDays;
}

function calculateArtisanPrice(processedPrice: number): number {
  return Math.round(processedPrice * 1.4);
}

export default function ArtisanProfitPage() {
  const starfruitWineArtisan = calculateArtisanPrice(2250);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Artisan Profit", href: PAGE_PATH },
          ]}
        />
        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stardewprofit.com" },
                { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.stardewprofit.com/tools" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Artisan Goods Profit Guide",
                  item: "https://www.stardewprofit.com/tools/artisan-profit",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Tools</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Stardew Valley Artisan Profit Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Compare keg vs preserves jar vs oil press with simple gold-per-day math. If you want the fastest answer:
            use kegs for premium fruit, use preserves jars for overflow and faster turnover, and only use oil press for
            specific oil-focused inputs.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Take Artisan profession when artisan goods are a core income source, because the{" "}
            <span className="font-semibold text-[#4a321e]">+40%</span> bonus usually beats raw selling by a large
            margin. For example, Starfruit Wine jumps from {formatGold(2250)} to {formatGold(starfruitWineArtisan)}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/tools/keg-vs-preserves-jar" className={SECONDARY_CTA_CLASS}>
              Keg vs Jar Tool
            </Link>
            <Link href="/guides/best-keg-items" className={SECONDARY_CTA_CLASS}>
              Best Keg Items
            </Link>
            <Link href="/guides/best-preserves-jar-items" className={SECONDARY_CTA_CLASS}>
              Best Preserves Jar Items
            </Link>
          </div>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick answer</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            <li><span className="font-semibold text-[#4a321e]">Kegs win</span> when you have high-value fruit like Starfruit or Ancient Fruit.</li>
            <li><span className="font-semibold text-[#4a321e]">Preserves jars win</span> when machine slots are tight and you need faster turnover.</li>
            <li><span className="font-semibold text-[#4a321e]">Oil press is niche</span> and usually not the default money maker for most farms.</li>
          </ul>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Processing comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Crop</th>
                  <th className="px-2 py-2 font-semibold">Raw Price</th>
                  <th className="px-2 py-2 font-semibold">Processed Item</th>
                  <th className="px-2 py-2 font-semibold">Processed Price</th>
                  <th className="px-2 py-2 font-semibold">Processing Time</th>
                  <th className="px-2 py-2 font-semibold">Gold/Day</th>
                </tr>
              </thead>
              <tbody>
                {ARTISAN_ROWS.map((row, index) => (
                  <tr key={`${row.crop}-${row.processedItem}-${index}`} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2">{row.crop}</td>
                    <td className="px-2 py-2">{formatGold(row.rawPrice)}</td>
                    <td className="px-2 py-2">{row.processedItem}</td>
                    <td className="px-2 py-2">{formatGold(row.processedPrice)}</td>
                    <td className="px-2 py-2">{row.processingTime}</td>
                    <td className="px-2 py-2">{formatGoldPerDay(calculateGoldPerDay(row))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Run your own machine mix</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use the calculator to compare crop routing with your actual keg, jar, and press capacity.
          </p>
          <div className="mt-5">
            <Link href="/calculator" className={PRIMARY_CTA_CLASS}>
              Open Profit Calculator
            </Link>
          </div>
        </section>

        <section id="faq" className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/tools/seed-maker" className={SECONDARY_CTA_CLASS}>
              Seed Maker Calculator
            </Link>
            <Link href="/blog/stardew-valley-keg-jar-artisan-profit-system" className={SECONDARY_CTA_CLASS}>
              Keg vs Jar Profit System
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
