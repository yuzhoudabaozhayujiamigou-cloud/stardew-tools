import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/best-keg-items";

const PAGE_TITLE = "Best Keg Items in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Find the best crops to put in kegs in Stardew Valley, including wine and juice value rules, machine-day tradeoffs, and practical routing tips.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

type KegItem = {
  item: string;
  basePrice: number;
  output: string;
  outputPrice: number;
  processingText: string;
  processingDays: number;
};

const KEG_ITEMS: KegItem[] = [
  {
    item: "Starfruit",
    basePrice: 750,
    output: "Starfruit Wine",
    outputPrice: 2250,
    processingText: "7 days",
    processingDays: 7,
  },
  {
    item: "Ancient Fruit",
    basePrice: 550,
    output: "Ancient Fruit Wine",
    outputPrice: 1650,
    processingText: "7 days",
    processingDays: 7,
  },
  {
    item: "Melon",
    basePrice: 250,
    output: "Melon Wine",
    outputPrice: 750,
    processingText: "7 days",
    processingDays: 7,
  },
  {
    item: "Pumpkin",
    basePrice: 320,
    output: "Pumpkin Juice",
    outputPrice: 720,
    processingText: "7 days",
    processingDays: 7,
  },
  {
    item: "Hops",
    basePrice: 25,
    output: "Pale Ale",
    outputPrice: 300,
    processingText: "1-2 days",
    processingDays: 1.5,
  },
  {
    item: "Wheat",
    basePrice: 25,
    output: "Beer",
    outputPrice: 200,
    processingText: "1-2 days",
    processingDays: 1.25,
  },
];

const FAQS = [
  {
    question: "What formula does the keg use for fruits and vegetables?",
    answer:
      "Kegs turn fruit into wine worth 3x base price and vegetables into juice worth 2.25x base price. This is why high base-value fruit scales so well in keg setups.",
  },
  {
    question: "Is Ancient Fruit or Starfruit better for kegs?",
    answer:
      "Starfruit gives the highest value per processed crop, but Ancient Fruit is easier to automate because it regrows every 7 days without replanting. The better choice depends on labor and seed budget.",
  },
  {
    question: "Should I put low-value crops in kegs?",
    answer:
      "Usually no, unless your kegs would otherwise be idle. Keg slots are limited, so prioritize high-value fruit and high-margin recipes first.",
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

function addedProfit(row: KegItem): number {
  return row.outputPrice - row.basePrice;
}

function addedProfitPerDay(row: KegItem): number {
  return addedProfit(row) / row.processingDays;
}

export default function BestKegItemsPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Keg Items", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Best Keg Items in Stardew Valley</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Kegs are one of the strongest late-game money machines, but slot efficiency matters. This
            page ranks practical keg inputs so you can keep every machine working on high-value crops.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5f4228]/85">
            Quick rule: fruit usually gets first priority because wine scales at 3x base value.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Best Inputs by Keg Value</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Input</th>
                  <th className="px-4 py-3 font-semibold">Base Price</th>
                  <th className="px-4 py-3 font-semibold">Keg Output</th>
                  <th className="px-4 py-3 font-semibold">Output Price</th>
                  <th className="px-4 py-3 font-semibold">Added Profit</th>
                  <th className="px-4 py-3 font-semibold">Added Profit/Day</th>
                </tr>
              </thead>
              <tbody>
                {KEG_ITEMS.map((row) => (
                  <tr key={row.output} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.item}</td>
                    <td className="px-4 py-3">{formatGold(row.basePrice)}</td>
                    <td className="px-4 py-3">{row.output}</td>
                    <td className="px-4 py-3">{formatGold(row.outputPrice)}</td>
                    <td className="px-4 py-3">{formatGold(addedProfit(row))}</td>
                    <td className="px-4 py-3">
                      {`${addedProfitPerDay(row).toFixed(2)}g/day`} ({row.processingText})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">How to Route Crops Into Kegs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Reserve weekly keg cycles for Starfruit and Ancient Fruit first.</li>
            <li>Use quick-cycle recipes like Pale Ale only if machine timing supports frequent reloads.</li>
            <li>If kegs are scarce, sell low-value crops raw or send them to preserve jars.</li>
            <li>As machine count grows, re-check your routing with actual crop output by season.</li>
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
              <Link href="/guides/ancient-fruit-vs-starfruit" className={LINK_CLASS}>
                Ancient Fruit vs Starfruit Guide
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
