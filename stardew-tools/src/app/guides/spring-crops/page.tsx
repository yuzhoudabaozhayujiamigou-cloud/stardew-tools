import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/spring-crops";

const PAGE_TITLE = "Best Spring Crops in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Discover the most profitable Spring crops in Stardew Valley. From Strawberries to Cauliflower, maximize your gold per day this Spring season.";

type CropRow = {
  crop: string;
  seedCost: string;
  sellPrice: string;
  days: string;
  goldPerDay: string;
  notes: string;
};

const SPRING_CROPS: CropRow[] = [
  {
    crop: "Potato",
    seedCost: "20g",
    sellPrice: "80g",
    days: "6",
    goldPerDay: "~10g",
    notes: "Chance of extra potato on harvest",
  },
  {
    crop: "Cauliflower",
    seedCost: "80g",
    sellPrice: "175g",
    days: "12",
    goldPerDay: "~7.9g",
    notes: "Best single-harvest value",
  },
  {
    crop: "Strawberry",
    seedCost: "100g",
    sellPrice: "120g",
    days: "8",
    goldPerDay: "~7.5g",
    notes: "Egg Festival only; multi-harvest every 4 days",
  },
  {
    crop: "Green Bean",
    seedCost: "60g",
    sellPrice: "40g",
    days: "10",
    goldPerDay: "~3g",
    notes: "Multi-harvest every 3 days",
  },
];

const FAQS = [
  {
    question: "What is the best Spring crop for beginners?",
    answer:
      "Potato is the best Spring crop for beginners. At only 20g per seed and a 6-day grow time, it offers the highest raw gold-per-day of any Spring crop and occasionally yields a bonus potato on harvest.",
  },
  {
    question: "Can you get Strawberries without the Egg Festival?",
    answer:
      "No. Strawberry seeds are sold exclusively by Pierre at the Egg Festival on Spring 13. After Year 1 you can occasionally find them at the Traveling Cart, or use a Seed Maker on harvested Strawberries to produce more seeds.",
  },
  {
    question: "Should I use fertilizer in Spring?",
    answer:
      "Yes. Basic Fertilizer (2g each) increases the chance of quality crops, which sell for significantly more gold. Speed-Gro fertilizer can also help fit an extra Cauliflower or Strawberry harvest before the season ends.",
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

export default function SpringCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 75% 65%, rgba(255,255,255,0.18) 0 3%, transparent 4%)",
          }}
        />
      </div>

      <FaqJsonLd faqs={FAQS as unknown as { question: string; answer: string }[]} />

      <main className="relative mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Spring Crops" },
          ]}
        />

        <article className="space-y-6">
          {/* Hero */}
          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h1 className="text-2xl font-bold text-[#4a321e] sm:text-3xl">
              Best Spring Crops in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Spring is the first season and sets the tone for your whole year.
              Choosing the right crops early maximizes your gold before Summer.
              Whether you&apos;re a first-year farmer or optimizing for late-game
              artisan goods, picking the right seeds on Day 1 makes a huge
              difference.
            </p>
          </section>

          {/* Top Crops */}
          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Top Spring Crops for Profit
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-4">
                <h3 className="font-bold text-[#4a321e]">🥔 Potato — ~10g/day</h3>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Seed:</strong> 20g &nbsp;|&nbsp; <strong>Sell:</strong> 80g &nbsp;|&nbsp; <strong>Days:</strong> 6
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  The best crop for beginners. Cheap seeds, fast grow time, and a random chance
                  to yield an extra potato on harvest push the effective gold-per-day above every
                  other Spring crop.
                </p>
              </div>

              <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-4">
                <h3 className="font-bold text-[#4a321e]">🥦 Cauliflower — ~7.9g/day</h3>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Seed:</strong> 80g &nbsp;|&nbsp; <strong>Sell:</strong> 175g &nbsp;|&nbsp; <strong>Days:</strong> 12
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  The best single-harvest Spring crop. Plant on Day 1 to guarantee a harvest
                  before the season ends. Can become a Giant Crop in a 3×3 patch.
                </p>
              </div>

              <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-4">
                <h3 className="font-bold text-[#4a321e]">🍓 Strawberry — ~7.5g/day</h3>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Seed:</strong> 100g (Egg Festival) &nbsp;|&nbsp; <strong>Sell:</strong> 120g &nbsp;|&nbsp; <strong>Days:</strong> 8
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  Bought exclusively at the Egg Festival on Spring 13. Only yields one harvest
                  in Year 1, but re-harvests every 4 days. Save seeds with a Seed Maker for a
                  massive Year 2 profit boost.
                </p>
              </div>

              <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-4">
                <h3 className="font-bold text-[#4a321e]">🫘 Green Bean — ~3g/day</h3>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Seed:</strong> 60g &nbsp;|&nbsp; <strong>Sell:</strong> 40g &nbsp;|&nbsp; <strong>Days:</strong> 10
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  Low raw profit, but useful for completing the Spring Crops Bundle in the
                  Community Center. Re-harvests every 3 days after first harvest.
                </p>
              </div>
            </div>
          </section>

          {/* Profit Table */}
          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Spring Crops Profit Table
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#8a5b3a]/40 text-left text-[#4a321e]">
                    <th className="pb-2 pr-3 font-semibold">Crop</th>
                    <th className="pb-2 pr-3 font-semibold">Seed Cost</th>
                    <th className="pb-2 pr-3 font-semibold">Sell Price</th>
                    <th className="pb-2 pr-3 font-semibold">Days</th>
                    <th className="pb-2 font-semibold">Gold/Day</th>
                  </tr>
                </thead>
                <tbody className="text-[#5f4228]/90">
                  {SPRING_CROPS.map((row) => (
                    <tr
                      key={row.crop}
                      className="border-b border-[#8a5b3a]/15 last:border-0"
                    >
                      <td className="py-2 pr-3 font-medium">{row.crop}</td>
                      <td className="py-2 pr-3">{row.seedCost}</td>
                      <td className="py-2 pr-3">{row.sellPrice}</td>
                      <td className="py-2 pr-3">{row.days}</td>
                      <td className="py-2 font-semibold text-[#1f6b2e]">{row.goldPerDay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#5f4228]/70">
              * Gold/Day is approximate and assumes base quality, no fertilizer, and selling
              directly. Artisan profession and quality fertilizer significantly increase profits.
            </p>
          </section>

          {/* Farming Tips */}
          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Spring Farming Tips
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-[#1f6b2e]">✓</span>
                <span>
                  <strong>Plant Potatoes and Cauliflower on Day 1.</strong> Both need 6–12 days
                  to grow, so planting early ensures multiple harvests within the season.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-[#1f6b2e]">✓</span>
                <span>
                  <strong>Buy Strawberry seeds at the Egg Festival (Spring 13).</strong> You
                  can only get them here in Year 1. Purchase as many as you can afford — they
                  re-harvest every 4 days before the season ends.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-[#1f6b2e]">✓</span>
                <span>
                  <strong>Save Strawberry seeds with a Seed Maker for Year 2.</strong> Running
                  harvested Strawberries through a Seed Maker produces more seeds, letting you
                  fill your farm with Strawberries from Day 1 of Spring Year 2.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-[#1f6b2e]">✓</span>
                <span>
                  <strong>Use Basic Fertilizer to increase quality.</strong> Higher-quality crops
                  sell for 20–50% more gold. Even cheap fertilizer pays for itself quickly on
                  Cauliflower and Strawberries.
                </span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
            <div className="mt-4 space-y-3">
              {FAQS.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-[#4a321e]">
                    <span className="group-open:underline">{item.question}</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Related Tools &amp; Guides
            </h2>
            <ul className="mt-4 space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/calculator"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Stardew Valley Profit Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/best-crops-every-season"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Best Crops Every Season Guide
                </Link>
              </li>
            </ul>
          </section>
        </article>

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
