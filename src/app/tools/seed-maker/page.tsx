import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";

type SeedMakerCrop = {
  name: string;
  referenceSeedValue: number | null;
  bestUse: boolean;
  reason: string;
};

const AVG_SEED_OUTPUT = 2;

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const CROP_ROWS: SeedMakerCrop[] = [
  { name: "Ancient Fruit", referenceSeedValue: null, bestUse: true, reason: "Rare seed supply is the main constraint." },
  { name: "Starfruit", referenceSeedValue: 400, bestUse: true, reason: "High replacement cost can justify seed production." },
  { name: "Sweet Gem Berry", referenceSeedValue: 1000, bestUse: true, reason: "Rare Seeds are expensive and season-limited." },
  { name: "Pumpkin", referenceSeedValue: 100, bestUse: false, reason: "Compare the sacrificed crop with a direct sale or Keg route." },
  { name: "Blueberry", referenceSeedValue: 80, bestUse: false, reason: "Low seed cost usually weakens the replacement-value case." },
  { name: "Parsnip", referenceSeedValue: 20, bestUse: false, reason: "Cheap seeds are normally easier to buy than reproduce." },
];

const PAGE_PATH = "/tools/seed-maker";

export const metadata: Metadata = {
  title: "Seed Maker Value Guide – Stardew Valley | StardewProfit",
  description:
    "Compare Stardew Valley Seed Maker replacement value, random output, and the crop value you sacrifice before choosing what to process.",
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
                  name: "Seed Maker Value Guide",
                  item: "https://www.stardewprofit.com/tools/seed-maker",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Tools</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Seed Maker Value Guide
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Seed Maker output is randomized, so this page uses two same-crop seeds as a planning average. It compares
            replacement value, not guaranteed profit: every machine cycle also consumes a crop that could have been
            sold raw or processed into an artisan good.
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Seed replacement value by crop</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Crop Name</th>
                  <th className="px-2 py-2 font-semibold">Reference Seed Value</th>
                  <th className="px-2 py-2 font-semibold">Average Replacement Value</th>
                  <th className="px-2 py-2 font-semibold">Best Use</th>
                  <th className="px-2 py-2 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {CROP_ROWS.map((row) => {
                  const outputValue = row.referenceSeedValue === null ? null : row.referenceSeedValue * AVG_SEED_OUTPUT;

                  return (
                    <tr key={row.name} className="border-b border-[#7c4d2e]/20">
                      <td className="px-2 py-2">{row.name}</td>
                      <td className="px-2 py-2">{row.referenceSeedValue === null ? "Not sold normally" : formatGold(row.referenceSeedValue)}</td>
                      <td className="px-2 py-2">{outputValue === null ? "Supply value only" : formatGold(outputValue)}</td>
                      <td className="px-2 py-2 font-semibold">{row.bestUse ? "Yes" : "No"}</td>
                      <td className="px-2 py-2">{row.reason}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/85">
            The table does not subtract the value of the crop placed in the machine. Use it as a seed-supply reference,
            then compare the sacrificed crop against raw and artisan sale options.
          </p>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">A better Seed Maker decision rule</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            <li>Identify whether the seed is difficult, expensive, or impossible to buy in the quantity you need.</li>
            <li>Estimate the replacement value of the average seed output.</li>
            <li>Subtract the value of the crop you give up, including the artisan route you could have used.</li>
            <li>Keep a buffer for randomness; one machine result is not the same as a long-run average.</li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            Ancient Fruit is the clearest supply-driven case because expanding seed stock can matter more than the
            immediate sale. Cheap shop seeds are usually the opposite: buying another packet preserves the crop for
            sale and avoids spending machine time on a low replacement value.
          </p>
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
