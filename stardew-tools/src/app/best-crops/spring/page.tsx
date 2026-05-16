import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackLink } from "@/components/TrackLink";
import cropsData from "@/data/crops.json";

type CropRecord = {
  id: string;
  name: string;
  season: string[];
  seedCost: number;
  sellPrice: number;
  growthDays: number;
};

type RankedCrop = {
  name: string;
  sellPrice: number;
  growthDays: number;
  goldPerDay: number;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const SPRING_TOP_CROPS: RankedCrop[] = (cropsData as CropRecord[])
  .filter((crop) => crop.season.includes("spring"))
  .map((crop) => ({
    name: crop.name,
    sellPrice: crop.sellPrice,
    growthDays: crop.growthDays,
    goldPerDay: (crop.sellPrice - crop.seedCost) / crop.growthDays,
  }))
  .sort((left, right) => right.goldPerDay - left.goldPerDay)
  .slice(0, 8);

const SPRING_RELATED_POSTS = [
  { label: "Best Spring Crops (10 Days Left)", href: "/blog/best-spring-crops-10-days-left" },
  { label: "Year 1 Spring Crops Profit Guide", href: "/blog/year-1-spring-crops-profit-guide" },
  { label: "Spring Profit Guide 2026", href: "/blog/stardew-valley-spring-profit-guide-2026" },
  { label: "Strawberry Day 13 Timing", href: "/blog/strawberry-spring-day-13-too-late" },
];

const FAQ_ITEMS = [
  {
    question: "What is the most profitable crop in Spring in Stardew Valley?",
    answer:
      "This page ranks Spring crops with the baseline formula (sellPrice - seedCost) / growthDays. That gives a clean default answer, but your true best crop should be confirmed in the calculator with your actual days left, quality, and profession settings.",
  },
  {
    question: "Is Strawberry always the most profitable Spring crop?",
    answer:
      "Not always. Strawberry is strong once it becomes available, but festival timing and your remaining days can make other crops a better practical choice in a specific run.",
  },
  {
    question: "How do I pick the best Spring crop if I only have 14 or 7 days left?",
    answer:
      "Use a day-limited calculator preset first. Set Spring and your exact days left, then remove any crop that cannot finish at least one harvest before Summer.",
  },
  {
    question: "Should I optimize for gold/day or total profit in Spring?",
    answer:
      "Start with gold/day to compare crop efficiency, then validate total profit against your seed budget and processing capacity so the plan is actually executable.",
  },
] as const;

const PAGE_PATH = "/best-crops/spring";

export const metadata: Metadata = {
  title: "Best Spring Crops in Stardew Valley | Gold per Day & Profit Calculator",
  description: "Compare the most profitable Spring crops by gold per day in Stardew Valley. See sell price, growth time, and ranking, then run the calculator with your real days left.",
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function BestSpringCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <FaqJsonLd
        faqs={FAQ_ITEMS.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Best Crops", href: "/best-crops" },
            { name: "Spring", href: PAGE_PATH },
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best Crops",
                  item: "https://www.stardewprofit.com/best-crops",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Best Spring Crops in Stardew Valley",
                  item: "https://www.stardewprofit.com/best-crops/spring",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Spring Ranking</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Spring Crops in Stardew Valley
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Spring is your first major profit window, so crop speed and margin matter immediately. This ranking uses
            crop data from our calculator dataset and compares each crop with a simple gold/day estimate so you can
            answer the core question fast: which Spring crop is most profitable for this season window?
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Formula used: <span className="font-semibold text-[#4a321e]">(sellPrice - seedCost) / growthDays</span>.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <TrackLink href="/calculator" className={PRIMARY_CTA_CLASS} trackEvent="best_spring_open_calculator_hero">
              Open Profit Calculator
            </TrackLink>
            <TrackLink
              href="/calculator?season=spring&daysLeft=28"
              className={SECONDARY_CTA_CLASS}
              trackEvent="best_spring_open_28_day_preset_hero"
            >
              Run Spring 28-Day Preset
            </TrackLink>
            <Link href="/blog/best-crops-every-season" className={SECONDARY_CTA_CLASS}>
              Best Crops Every Season
            </Link>
          </div>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top Spring crops by gold/day estimate</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Rank</th>
                  <th className="px-2 py-2 font-semibold">Crop Name</th>
                  <th className="px-2 py-2 font-semibold">Sell Price</th>
                  <th className="px-2 py-2 font-semibold">Growth Days</th>
                  <th className="px-2 py-2 font-semibold">Gold/Day estimate</th>
                </tr>
              </thead>
              <tbody>
                {SPRING_TOP_CROPS.map((crop, index) => (
                  <tr key={crop.name} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{index + 1}</td>
                    <td className="px-2 py-2">{crop.name}</td>
                    <td className="px-2 py-2">{crop.sellPrice}g</td>
                    <td className="px-2 py-2">{crop.growthDays} days</td>
                    <td className="px-2 py-2">{crop.goldPerDay.toFixed(2)}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Most profitable Spring crop by timing</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            The table above is a full-window baseline. Use these quick calculator jumps to match your exact day count
            before buying seeds.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#8a5b3a]/30 bg-[#fff8e8]/90 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">Start of Spring</p>
              <p className="mt-1 text-xs leading-5 text-[#5f4228]/80">Use full-season assumptions and compare top gold/day options.</p>
              <TrackLink
                href="/calculator?season=spring&daysLeft=28"
                className="mt-3 inline-flex text-sm font-semibold text-[#1f6b2e] underline underline-offset-4"
                trackEvent="best_spring_open_28_day_preset_mid"
              >
                Open 28-day preset
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-[#8a5b3a]/30 bg-[#fff8e8]/90 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">Mid Spring</p>
              <p className="mt-1 text-xs leading-5 text-[#5f4228]/80">Check what can still complete a harvest with 14 days left.</p>
              <TrackLink
                href="/calculator?season=spring&daysLeft=14"
                className="mt-3 inline-flex text-sm font-semibold text-[#1f6b2e] underline underline-offset-4"
                trackEvent="best_spring_open_14_day_preset_mid"
              >
                Open 14-day preset
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-[#8a5b3a]/30 bg-[#fff8e8]/90 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">Late Spring</p>
              <p className="mt-1 text-xs leading-5 text-[#5f4228]/80">Use a short window to avoid dead seeds before Summer switch.</p>
              <TrackLink
                href="/calculator?season=spring&daysLeft=7"
                className="mt-3 inline-flex text-sm font-semibold text-[#1f6b2e] underline underline-offset-4"
                trackEvent="best_spring_open_7_day_preset_mid"
              >
                Open 7-day preset
              </TrackLink>
            </div>
          </div>
        </section>

        <section id="faq" className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Build your Spring plan before you leave</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
            Move from generic ranking to a real decision: run your current day count in the calculator, then lock the
            crop plan that still finishes before Summer.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <TrackLink
              href="/calculator?season=spring&daysLeft=28"
              className={PRIMARY_CTA_CLASS}
              trackEvent="best_spring_open_calculator_end"
            >
              Open Spring Calculator
            </TrackLink>
            <TrackLink
              href="/calculator?preset=best-spring-10-days-left"
              className={SECONDARY_CTA_CLASS}
              trackEvent="best_spring_open_10_day_preset_end"
            >
              Compare 10-Day Spring Preset
            </TrackLink>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Spring guides</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {SPRING_RELATED_POSTS.map((post) => (
              <Link key={post.href} href={post.href} className={SECONDARY_CTA_CLASS}>
                {post.label}
              </Link>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <TrackLink
              href="/calculator?season=spring&daysLeft=28"
              className={SECONDARY_CTA_CLASS}
              trackEvent="best_spring_open_calculator_related_pages"
            >
              Profit Calculator
            </TrackLink>
            <Link href="/best-crops/summer" className={SECONDARY_CTA_CLASS}>
              Best Summer Crops
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
