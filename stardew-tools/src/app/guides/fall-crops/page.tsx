import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/fall-crops";

const PAGE_TITLE = "Best Fall Crops in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Master Fall crops in Stardew Valley. Cranberries and Pumpkins are top earners this season. Plan your Fall harvest to maximize end-of-year profits.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
  },
};

type CropRow = {
  crop: string;
  seedCost: string;
  sellPrice: string;
  days: string;
  goldPerDay: string;
  notes: string;
};

const FALL_CROPS: CropRow[] = [
  {
    crop: "Pumpkin",
    seedCost: "100g",
    sellPrice: "320g",
    days: "13",
    goldPerDay: "~16g",
    notes: "Can become Giant Crop",
  },
  {
    crop: "Cranberries",
    seedCost: "240g",
    sellPrice: "130g x2",
    days: "7",
    goldPerDay: "~14g",
    notes: "Multi-harvest every 5 days",
  },
  {
    crop: "Bok Choy",
    seedCost: "25g",
    sellPrice: "80g",
    days: "4",
    goldPerDay: "~13g",
    notes: "Fast and cheap, great filler",
  },
  {
    crop: "Grape",
    seedCost: "60g",
    sellPrice: "80g",
    days: "10",
    goldPerDay: "~8g",
    notes: "Wine in keg = 240g",
  },
];

const FAQS = [
  {
    question: "What is the best Fall crop for profit?",
    answer:
      "Pumpkin is the best single-harvest Fall crop at ~16g/day. Cranberries are the best multi-harvest option and can exceed Pumpkin profit over a full season due to repeated harvests.",
  },
  {
    question: "How do Giant Crops work in Stardew Valley?",
    answer:
      "If you plant a 3x3 grid of the same crop with no paths or objects blocking them, there is a small daily chance they merge into a Giant Crop. Giant Crops yield roughly 25 crops when harvested with an axe.",
  },
  {
    question: "What should I do with Grapes in Fall?",
    answer:
      "Put Grapes into a Keg to make Wine, which sells for 240g — triple the raw price. If you have many kegs, Grape Wine is a solid passive income source during Fall.",
  },
];

export default function FallCropsPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Fall Crops", href: PAGE_PATH },
          ]}
        />
        <FaqJsonLd faqs={FAQS} />
        <article>
          <h1 className="mb-3 text-3xl font-bold text-[#3d2b1f] sm:text-4xl">
            Best Fall Crops in Stardew Valley
          </h1>
          <p className="mb-8 text-base text-[#5a3e2b] sm:text-lg">
            Fall is the last outdoor growing season, making it crucial for stockpiling gold before
            Winter. Cranberries and Pumpkins lead the way, but fast crops like Bok Choy can fill
            gaps between harvests.
          </p>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#3d2b1f]">Top Fall Crops for Profit</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🎃 Pumpkin — ~16g/day</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  The best single-harvest Fall crop. Seeds cost 100g and sell for 320g after 13 days.
                  Plant in a 3x3 grid for a chance at a Giant Crop yielding ~25 pumpkins.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🍒 Cranberries — ~14g/day</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  Multi-harvest king of Fall. After the first 7 days, they re-harvest every 5 days
                  producing 2 cranberries each time. Best ROI over a full season.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🥬 Bok Choy — ~13g/day</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  Cheap (25g seed), fast (4 days), and reliable. Perfect for filling empty plots
                  between other harvests or for players early in Year 1.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🍇 Grape — ~8g/day (better in kegs)</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  Low raw value but Grape Wine in a keg sells for 240g. If you have spare keg
                  capacity, Grapes become a solid passive income crop.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#3d2b1f]">Fall Crops Profit Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#3d2b1f] text-white">
                    <th className="px-3 py-2 text-left">Crop</th>
                    <th className="px-3 py-2 text-left">Seed Cost</th>
                    <th className="px-3 py-2 text-left">Sell Price</th>
                    <th className="px-3 py-2 text-left">Days</th>
                    <th className="px-3 py-2 text-left">Gold/Day</th>
                    <th className="px-3 py-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {FALL_CROPS.map((row, i) => (
                    <tr key={row.crop} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf6ec]"}>
                      <td className="px-3 py-2 font-medium text-[#3d2b1f]">{row.crop}</td>
                      <td className="px-3 py-2 text-[#5a3e2b]">{row.seedCost}</td>
                      <td className="px-3 py-2 text-[#5a3e2b]">{row.sellPrice}</td>
                      <td className="px-3 py-2 text-[#5a3e2b]">{row.days}</td>
                      <td className="px-3 py-2 font-semibold text-[#1f6b2e]">{row.goldPerDay}</td>
                      <td className="px-3 py-2 text-[#5a3e2b]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#3d2b1f]">Fall Farming Tips</h2>
            <ul className="space-y-2 text-sm text-[#5a3e2b] sm:text-base">
              <li>🌱 Plant Cranberries as early as possible — more harvests = more profit.</li>
              <li>🎃 For Giant Crops, plant Pumpkins in a 3x3 block with Quality Fertilizer.</li>
              <li>🍇 Use spare Keg slots for Grape Wine during the off-harvest days.</li>
              <li>🥬 Fill empty plots with Bok Choy — cheap, fast, and always profitable.</li>
              <li>❄️ Harvest everything before Day 28 — all crops die at the end of Fall.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-semibold text-[#3d2b1f]">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                  <h3 className="font-semibold text-[#3d2b1f]">{faq.question}</h3>
                  <p className="mt-2 text-sm text-[#5a3e2b]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 rounded-xl bg-[#1f6b2e] p-6 text-center text-white">
            <h2 className="mb-2 text-xl font-bold">Calculate Exact Fall Crop Profits</h2>
            <p className="mb-4 text-sm opacity-90">
              Use our free calculator to compare any Fall crop and find your optimal planting strategy.
            </p>
            <Link
              href="/calculator"
              className="inline-block rounded-lg bg-white px-6 py-2 font-bold text-[#1f6b2e] hover:bg-green-50"
            >
              Open Profit Calculator →
            </Link>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-[#3d2b1f]">Related Guides &amp; Tools</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/guides/best-crops-every-season" className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60">
                  Best Crops Every Season Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/spring-crops" className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60">
                  Best Spring Crops
                </Link>
              </li>
              <li>
                <Link href="/guides/summer-crops" className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60">
                  Best Summer Crops
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60">
                  Stardew Valley Profit Calculator
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
