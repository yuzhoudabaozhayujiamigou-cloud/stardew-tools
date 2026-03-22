import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const pagePath = "/guides/best-crops-every-season";

export const metadata: Metadata = {
  title: "Best Crops Every Season in Stardew Valley | StardewProfit",
  description:
    "Find the best crops for Spring, Summer, Fall, and Winter in Stardew Valley. Maximize your gold per day with our season-by-season crop profit guide.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Best Crops Every Season in Stardew Valley | StardewProfit",
    description:
      "Find the best crops for Spring, Summer, Fall, and Winter in Stardew Valley. Maximize your gold per day with our season-by-season crop profit guide.",
    url: pagePath,
    type: "article",
  },
};

type CropRow = {
  crop: string;
  seedCost: string;
  sellPrice: string;
  days: string;
  goldPerDay: string;
};

const springRows: CropRow[] = [
  {
    crop: "Strawberry",
    seedCost: "100g",
    sellPrice: "120g",
    days: "8 days",
    goldPerDay: "~7.5g/day",
  },
  {
    crop: "Cauliflower",
    seedCost: "80g",
    sellPrice: "175g",
    days: "12 days",
    goldPerDay: "~7.9g/day",
  },
  {
    crop: "Potato",
    seedCost: "20g",
    sellPrice: "80g",
    days: "6 days",
    goldPerDay: "~10g/day",
  },
  {
    crop: "Green Bean",
    seedCost: "60g",
    sellPrice: "40g",
    days: "10 days (+harvest)",
    goldPerDay: "~6g/day",
  },
];

const summerRows: CropRow[] = [
  {
    crop: "Blueberry",
    seedCost: "80g",
    sellPrice: "150g (x3)",
    days: "13 days",
    goldPerDay: "~20g/day",
  },
  {
    crop: "Starfruit",
    seedCost: "400g",
    sellPrice: "750g",
    days: "13 days",
    goldPerDay: "~26g/day",
  },
  {
    crop: "Hops",
    seedCost: "60g",
    sellPrice: "25g",
    days: "11 days",
    goldPerDay: "~best with keg",
  },
  {
    crop: "Melon",
    seedCost: "80g",
    sellPrice: "250g",
    days: "12 days",
    goldPerDay: "~14g/day",
  },
];

const fallRows: CropRow[] = [
  {
    crop: "Cranberries",
    seedCost: "240g",
    sellPrice: "130g (x2)",
    days: "7 days",
    goldPerDay: "~14g/day",
  },
  {
    crop: "Pumpkin",
    seedCost: "100g",
    sellPrice: "320g",
    days: "13 days",
    goldPerDay: "~16g/day",
  },
  {
    crop: "Grape",
    seedCost: "60g",
    sellPrice: "80g",
    days: "10 days",
    goldPerDay: "~8g/day",
  },
  {
    crop: "Bok Choy",
    seedCost: "25g",
    sellPrice: "80g",
    days: "4 days",
    goldPerDay: "~13g/day",
  },
];

const faqs = [
  {
    question: "What is the most profitable crop in Stardew Valley?",
    answer:
      "Starfruit is usually the top single-harvest value crop, while Ancient Fruit is often best for stable long-term profits, especially with a greenhouse and kegs.",
  },
  {
    question: "What are the best Spring crops for beginners?",
    answer:
      "Potato and Cauliflower are strong beginner picks in Spring because they are easy to buy, reliable, and offer good value before large processing setups.",
  },
  {
    question: "Can you grow crops in Winter?",
    answer:
      "Regular field crops cannot grow in Winter. Use the Greenhouse for year-round crop production.",
  },
  {
    question: "What crops work best with kegs?",
    answer:
      "Starfruit, Hops, Grape, and Ancient Fruit are all excellent keg crops and can significantly increase your total profit per harvest.",
  },
] as const;

const cardClass =
  "mt-8 rounded-2xl border border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_28px_rgba(56,41,23,0.2)]";

function CropTable({ rows }: { rows: CropRow[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/70 bg-[#f8ecc8]">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-[#eedaa0] text-[#4a321e]">
          <tr>
            <th className="px-4 py-3 font-semibold">Crop</th>
            <th className="px-4 py-3 font-semibold">Seed Cost</th>
            <th className="px-4 py-3 font-semibold">Sell Price</th>
            <th className="px-4 py-3 font-semibold">Days</th>
            <th className="px-4 py-3 font-semibold">Gold/Day</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.crop} className="border-t border-[#7c4d2e]/30 align-top">
              <td className="px-4 py-3 font-semibold">{row.crop}</td>
              <td className="px-4 py-3">{row.seedCost}</td>
              <td className="px-4 py-3">{row.sellPrice}</td>
              <td className="px-4 py-3">{row.days}</td>
              <td className="px-4 py-3">{row.goldPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BestCropsEverySeasonGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Crops Every Season", href: pagePath },
          ]}
        />

        <FaqJsonLd faqs={faqs.map((item) => ({ ...item }))} />

        <header className={`${cardClass} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Best Crops Every Season in Stardew Valley
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Choosing the right Stardew Valley crops each season is the fastest
            way to maximize gold in Stardew Valley. This guide breaks down the
            top crops for Spring, Summer, Fall, and their profit per day.
          </p>
        </header>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold">Spring Best Crops</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Strawberry (buy at Egg Festival): highest ROI if replanted</li>
            <li>Cauliflower: best single-harvest crop</li>
            <li>Potato: reliable, cheap seeds</li>
          </ul>
          <CropTable rows={springRows} />
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold">Summer Best Crops</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Blueberry: multi-harvest king (3 berries per harvest)</li>
            <li>Starfruit: highest single value</li>
            <li>Hops: best for kegs (advanced)</li>
          </ul>
          <CropTable rows={summerRows} />
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold">Fall Best Crops</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Cranberries: multi-harvest, high value</li>
            <li>Pumpkin: best single harvest</li>
            <li>Grape: good with kegs</li>
          </ul>
          <CropTable rows={fallRows} />
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold">Year-Round Tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Ancient Fruit in greenhouse: 550g every 7 days year-round</li>
            <li>Starfruit → Keg = 2250g wine (highest value)</li>
            <li>Use Seed Maker to reduce seed costs</li>
          </ul>
          <p className="mt-4 leading-7 text-[#5f4228]/90">
            For deeper strategy breakdowns, read more on{" "}
            <Link
              href="/blog"
              className="font-semibold underline decoration-[#7c4d2e]/45 underline-offset-4 transition hover:text-[#2f6a3a]"
            >
              the StardewProfit blog
            </Link>
            .
          </p>
        </section>

        <section id="faq" className={cardClass}>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="text-2xl font-semibold">Use Our Calculator</h2>
          <p className="mt-3 leading-7 text-[#5f4228]/90">
            Compare every crop setup by season, profession, and processing chain
            to find the true best crops Stardew Valley route for your farm.
          </p>
          <Link
            href="/calculator"
            className="mt-4 inline-flex items-center rounded-xl border border-[#7c4d2e]/70 bg-[#fff2c8] px-4 py-2 font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fce8b1]"
          >
            Calculate exact profit for any crop →
          </Link>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}
