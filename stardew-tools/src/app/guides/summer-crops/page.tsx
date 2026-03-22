import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/summer-crops";

const PAGE_TITLE = "Best Summer Crops in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Find the most profitable Summer crops in Stardew Valley. Blueberries, Starfruit, and Hops dominate Summer profits. See which crop fits your farm.";

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

const SUMMER_CROPS: CropRow[] = [
  { crop: "Starfruit", seedCost: "400g", sellPrice: "750g", days: "13", goldPerDay: "~26g", notes: "Best with kegs (2250g wine)" },
  { crop: "Blueberry", seedCost: "80g", sellPrice: "150g x3", days: "13", goldPerDay: "~20g", notes: "Multi-harvest every 4 days" },
  { crop: "Melon", seedCost: "80g", sellPrice: "250g", days: "12", goldPerDay: "~14g", notes: "Can become Giant Crop" },
  { crop: "Hops", seedCost: "60g", sellPrice: "25g", days: "11", goldPerDay: "low raw", notes: "Pale Ale in keg = 300g" },
];

const FAQS = [
  {
    question: "What is the most profitable Summer crop?",
    answer: "Starfruit is the most profitable Summer crop if you have kegs — Starfruit Wine sells for 2250g. Without kegs, Blueberry is the better choice due to its multi-harvest nature and lower seed cost.",
  },
  {
    question: "How many harvests does Blueberry give?",
    answer: "Blueberry takes 13 days for the first harvest, then produces 3 blueberries every 4 days after that. Over a full Summer season you can get 4-5 harvests from one plant.",
  },
  {
    question: "Is Hops worth growing without a keg?",
    answer: "No. Raw Hops sell for only 25g each. Hops are only profitable when processed into Pale Ale in a Keg (300g). Without kegs, grow Blueberries instead.",
  },
];

export default function SummerCropsPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Summer Crops", href: PAGE_PATH },
          ]}
        />
        <FaqJsonLd faqs={FAQS} />
        <article>
          <h1 className="mb-3 text-3xl font-bold text-[#3d2b1f] sm:text-4xl">
            Best Summer Crops in Stardew Valley
          </h1>
          <p className="mb-8 text-base text-[#5a3e2b] sm:text-lg">
            Summer is when profits really take off. Multi-harvest crops like Blueberries and
            processed crops like Starfruit Wine make Summer the most profitable season in Stardew Valley.
          </p>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#3d2b1f]">Top Summer Crops for Profit</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">⭐ Starfruit — ~26g/day</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  The highest value Summer crop. Seeds cost 400g from the Oasis and sell for 750g.
                  With a Keg, Starfruit Wine sells for 2250g — the best processed crop in the game.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🫐 Blueberry — ~20g/day</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  The best Summer crop without kegs. Multi-harvest: produces 3 blueberries every
                  4 days after the first harvest. Low seed cost (80g) makes it great for beginners.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🍈 Melon — ~14g/day</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  A solid mid-tier Summer crop. Can become a Giant Crop if planted in a 3x3 grid.
                  Good for players who want a reliable single-harvest option.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8d5b0] bg-white p-4">
                <h3 className="font-semibold text-[#3d2b1f]">🍺 Hops — best with kegs</h3>
                <p className="mt-1 text-sm text-[#5a3e2b]">
                  Hops harvest daily after the first 11 days. Raw value is low (25g) but Pale Ale
                  in a Keg sells for 300g. Only grow Hops if you have plenty of Kegs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-[#3d2b1f]">Summer Crops Profit Table</h2>
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
                  {SUMMER_CROPS.map((row, i) => (
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
            <h2 className="mb-4 text-2xl font-semibold text-[#3d2b1f]">Summer Farming Strategy</h2>
            <ul className="space-y-2 text-sm text-[#5a3e2b] sm:text-base">
              <li>🫐 No kegs? Go full Blueberry — low risk, good returns all Summer.</li>
              <li>⭐ Have kegs? Prioritize Starfruit for maximum Wine income.</li>
              <li>🍺 Hops fill Kegs daily — great if you have 50+ Kegs set up.</li>
              <li>🌱 Plant on Day 1 for maximum harvests before Fall.</li>
              <li>💡 Save Starfruit Seeds with the Seed Maker to reduce Year 2 costs.</li>
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
            <h2 className="mb-2 text-xl font-bold">Calculate Exact Summer Crop Profits</h2>
            <p className="mb-4 text-sm opacity-90">
              Use our free calculator to compare any Summer crop and maximize your gold per day.
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
                <Link href="/guides/fall-crops" className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60">
                  Best Fall Crops
                </Link>
              </li>
              <li>
                <Link href="/tools/keg-vs-preserves-jar" className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60">
                  Keg vs Preserves Jar Tool
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
