import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";

type SeedMakerCrop = {
  name: string;
  buyPrice: number;
  bestUse: boolean;
};

const AVG_SEED_OUTPUT = 2;

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const CROP_ROWS: SeedMakerCrop[] = [
  { name: "Ancient Fruit", buyPrice: 200, bestUse: true },
  { name: "Starfruit", buyPrice: 400, bestUse: true },
  { name: "Sweet Gem Berry", buyPrice: 1000, bestUse: true },
  { name: "Pumpkin", buyPrice: 100, bestUse: false },
  { name: "Blueberry", buyPrice: 80, bestUse: false },
  { name: "Parsnip", buyPrice: 20, bestUse: false },
];

const PAGE_PATH = "/tools/seed-maker";

export const metadata: Metadata = {
  title: "Seed Maker Profit Calculator – Stardew Valley | StardewProfit",
  description:
    "Find the most profitable crops to put through the Seed Maker in Stardew Valley. Compare seed cost savings and net profit per crop.",
  alternates: {
    canonical: PAGE_PATH,
  },
};

function formatGold(value: number): string {
  return `${value.toLocaleString()}g`;
}

export default function SeedMakerProfitPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Seed Maker", href: PAGE_PATH },
          ]}
        />
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
                  name: "Seed Maker Profit Calculator",
                  item: "https://www.stardewprofit.com/tools/seed-maker",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Tools</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Seed Maker Profit Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Seed Maker output is randomized between 1 and 3 seeds, so average planning uses 2 seeds per crop. Value
            scales hardest on expensive seeds, especially Ancient Fruit (200g), Starfruit (400g), and Sweet Gem Berry
            (1,000g).
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Seed Maker value by crop</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Crop Name</th>
                  <th className="px-2 py-2 font-semibold">Buy Price</th>
                  <th className="px-2 py-2 font-semibold">Seed Maker Output Value</th>
                  <th className="px-2 py-2 font-semibold">Net Savings per seed</th>
                  <th className="px-2 py-2 font-semibold">Best Use</th>
                </tr>
              </thead>
              <tbody>
                {CROP_ROWS.map((row) => {
                  const outputValue = row.buyPrice * AVG_SEED_OUTPUT;
                  const netSavingsPerSeed = outputValue - row.buyPrice;

                  return (
                    <tr key={row.name} className="border-b border-[#7c4d2e]/20">
                      <td className="px-2 py-2">{row.name}</td>
                      <td className="px-2 py-2">{formatGold(row.buyPrice)}</td>
                      <td className="px-2 py-2">{formatGold(outputValue)}</td>
                      <td className="px-2 py-2">{formatGold(netSavingsPerSeed)}</td>
                      <td className="px-2 py-2 font-semibold">{row.bestUse ? "Yes" : "No"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Plan your full season profit</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use the crop calculator to test seed-maker-heavy routes against direct crop sales and artisan processing.
          </p>
          <div className="mt-5">
            <Link href="/calculator" className={PRIMARY_CTA_CLASS}>
              Open Profit Calculator
            </Link>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/tools/artisan-profit" className={SECONDARY_CTA_CLASS}>
              Artisan Profit Guide
            </Link>
            <Link href="/best-crops/greenhouse" className={SECONDARY_CTA_CLASS}>
              Best Greenhouse Crops
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
