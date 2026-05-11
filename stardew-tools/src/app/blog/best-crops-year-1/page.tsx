import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "What are the best crops in Year 1 of Stardew Valley?",
  "Should I prioritize gold per day or bundles in Year 1?",
  "Are Strawberries worth it in Spring Year 1?",
  "Is Blueberry still the best Summer crop early game?",
  "Should I plant Cranberries or Pumpkins in Fall Year 1?",
  "What can I grow in Winter of Year 1?",
] as const;

const FAQ_ANSWERS = [
  "For most Year 1 farms, start with Parsnip into Potato or Kale in early Spring, buy Strawberries after the Egg Festival, switch to Blueberries in Summer, and plant Cranberries in Fall.",
  "Prioritize bundles if they unlock key tools or the Greenhouse soon, but pure gold per day usually matters more when you need fast cash flow for seeds, upgrades, and sprinklers.",
  "Yes. Strawberries are one of the best Spring Year 1 crops if you can buy them at the Egg Festival and still get multiple harvests before the season ends.",
  "Usually yes. Blueberry is the safest early-game Summer crop because it keeps paying out after the first harvest, while Melon and Hops are better only in more specific setups.",
  "Plant Cranberries if you want the easiest repeat-harvest raw profit. Plant Pumpkins if you want stronger single-harvest value or you plan to process them later.",
  "In Winter Year 1, focus on mines, tool upgrades, and farm setup. If you have Winter Seeds unlocked, they are the main outdoor crop option worth planting.",
] as const;

export const metadata: Metadata = {
  title: "Best Year 1 Crops in Stardew Valley — Potato, Blueberry, Cranberry",
  description:
    "Year 1 Stardew crop guide: Potato -> Strawberry for Spring, Blueberry for Summer, Cranberry for Fall. See seed costs, growth days, and beginner-friendly planting plans.",
  alternates: {
    canonical: "/blog/best-crops-year-1",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-02-27T00:00:00+08:00",
    modifiedTime: "2026-05-10T00:00:00+08:00",
    title: "Best Year 1 Crops in Stardew Valley — Potato, Blueberry, Cranberry",
    description:
      "Year 1 Stardew crop guide: Potato -> Strawberry for Spring, Blueberry for Summer, Cranberry for Fall. See seed costs, growth days, and beginner-friendly planting plans.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Year 1 Crops in Stardew Valley — Potato, Blueberry, Cranberry",
    description:
      "Year 1 Stardew crop guide: Potato -> Strawberry for Spring, Blueberry for Summer, Cranberry for Fall. See seed costs, growth days, and beginner-friendly planting plans.",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function BestCropsYear1Page() {
  const fromPath = "/blog/best-crops-year-1";
  const readNextPosts = getBlogReadNextPosts("best-crops-year-1", 3);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_EN.map((question, index) => ({
            question,
            answer: FAQ_ANSWERS[index] ?? "",
          }))}
        />

        
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Best Crops Year 1 in Stardew Valley (By Season)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Quick Answer
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Year 1 Crops in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Quick answer: Potato → Strawberry in Spring, Blueberry in Summer, Cranberry in Fall. See the full season-by-season breakdown with profit data below.
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                For most <strong>Year 1</strong> farms, the best crops are the ones that balance{" "}
                <strong>profit</strong>, <strong>seed cost</strong>, and <strong>how quickly they start paying you back</strong>.
              </p>
              <p>
                A simple default route is <strong>Parsnip → Potato or Kale</strong> in early Spring, then{" "}
                <strong>Strawberry</strong> after the Egg Festival. In Summer, <strong>Blueberry</strong> is the safest
                beginner money crop, and in Fall <strong>Cranberry</strong> is the easiest repeat-harvest winner while{" "}
                <strong>Pumpkin</strong> gets much stronger once you can process it.
              </p>
              <p>
                For Winter Year 1, you generally can’t grow normal crops outdoors. Use Winter for
                <strong> tool upgrades</strong>, <strong>mines</strong>, and (if unlocked) <strong>Winter Seeds</strong>
                for foraging-based farming.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#2f6a3a]/45 bg-[#e6f8d8] p-5 shadow-[0_12px_28px_rgba(47,106,58,0.22)] ring-1 ring-[#2f6a3a]/20 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6b2e]/80">
              Year 1 decision tool
            </p>
            <p className="mt-2 text-sm leading-6 text-[#245631] sm:text-base">
              Year 1 profit is mostly about timing and cash flow. Use the Stardew Valley Crop Profit Calculator to compare what still pays off before you commit seed gold.
            </p>
            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="best_crops_year_1_intro_cash_flow_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#2f6a3a]/45 bg-[#f4ffe9] px-4 py-2 text-sm font-semibold text-[#1f6b2e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6a3a]/70 hover:bg-[#ecffd8]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-90">🧮</span>
                Compare Year 1 crop profits
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Season-by-Season Breakdown</h2>

            <div className="mt-4 space-y-6 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <div>
                <h3 className="text-lg font-semibold text-[#4a321e]">Spring (Year 1)</h3>
                <p className="mt-2">
                  Data highlights: <strong>Parsnip</strong> (4d, 20g seeds / 35g sell), <strong>Potato</strong>
                  (6d, 50g / 80g, ~1.25 yield), <strong>Kale</strong> (6d, 70g / 110g), and <strong>Strawberry</strong>
                  (8d then regrow every 4d, 100g / 120g).
                </p>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Best early cash (Day 1–12):</strong> Parsnip → Potato or Kale. They’re cheap,
                    finish fast, and help you snowball into more seeds.
                  </p>
                  <p>
                    <strong>Best after Egg Festival:</strong> Strawberry. It’s one of the strongest Year 1
                    “compounding” crops because it regrows every 4 days.
                  </p>
                  <p>
                    <strong>Cauliflower</strong> (12d, 80g / 175g) is great if you want fewer watering actions and
                    bundle value, but it’s slower to ramp.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#4a321e]">Summer (Year 1)</h3>
                <p className="mt-2">
                  Data highlights: <strong>Blueberry</strong> (13d then regrow every 4d, 80g / 50g, yields 3),
                  <strong>Melon</strong> (12d, 80g / 250g), and <strong>Hops</strong> (11d then regrow daily, 60g / 25g).
                </p>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Best low-stress money:</strong> Blueberry. It’s forgiving, produces multiple berries per
                    harvest, and keeps cash flowing even if you’re busy mining.
                  </p>
                  <p>
                    <strong>Best “big hits”:</strong> Melon. Great raw sell price and even better later when you can
                    process it. Good if you have limited gold for seeds but decent watering capacity.
                  </p>
                  <p>
                    <strong>Best if you already have kegs:</strong> Hops (for Pale Ale) can be absurdly strong — but in
                    Year 1, most farms are keg-limited, so don’t overplant.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#4a321e]">Fall (Year 1)</h3>
                <p className="mt-2">
                  Data highlights: <strong>Cranberry</strong> (7d then regrow every 5d, 240g / 75g, yields 2),
                  <strong>Pumpkin</strong> (13d, 100g / 320g), and <strong>Grape</strong> (7d then regrow every 3d, 60g / 80g).
                </p>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Best overall “set-and-forget”:</strong> Cranberry. Expensive seeds, but the regrowth and 2x
                    yield make it one of the best Year 1 fall money-makers.
                  </p>
                  <p>
                    <strong>Best single-harvest crop:</strong> Pumpkin. If you’re short on energy/time, fewer plantings
                    can feel better — and Pumpkin becomes top-tier once you start juicing it.
                  </p>
                  <p>
                    <strong>Filler / fast turnarounds:</strong> Bok Choy (4d, 80g / 125g) and Yam (3d, 60g / 160g) are
                    strong for late-season timing or quick cash.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#4a321e]">Winter (Year 1)</h3>
                <p className="mt-2">
                  In Winter you can’t grow standard seasonal crops outdoors. From the crop dataset you’ll see options
                  like <strong>Winter Seed</strong> (7d), <strong>Fiber Seed</strong> (7d), and <strong>Tea Sapling</strong>
                  (20d) listed as winter-friendly, but their value depends heavily on what you’ve unlocked.
                </p>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Best practical play:</strong> treat Winter as your “infrastructure” season: mines, sprinklers,
                    tool upgrades, and building materials.
                  </p>
                  <p>
                    <strong>If you can craft Winter Seeds:</strong> they’re a nice side income and skill XP source, especially
                    if you want to keep the watering routine going.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Budget Tips for Year 1</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>1) Buy seeds that compound.</strong> Regrowing crops like Strawberry, Blueberry, Cranberry,
                and Hops reduce replanting cost and time.
              </p>
              <p>
                <strong>2) Don’t bankrupt yourself on day 1.</strong> In Year 1 you still need money for backpack
                upgrades, tool upgrades, and a few key buildings.
              </p>
              <p>
                <strong>3) Match crops to your bottleneck.</strong> If watering is your bottleneck, prefer fewer,
                higher-value harvests (Cauliflower / Melon / Pumpkin). If gold is your bottleneck, prefer cheap,
                fast cycles (Parsnip / Potato / Kale / Bok Choy / Yam).
              </p>
              <p>
                <strong>4) Process only what you can.</strong> A few kegs can dramatically change “best crop” rankings,
                but only if you actually have enough machines.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Calculator Presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Use these presets to compare profits with your own assumptions (days left, professions, and processing).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=28"
                fromPath={fromPath}
                ctaName="spring_year1_full"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌷</span>
                Compare Spring crop profits
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=28"
                fromPath={fromPath}
                ctaName="summer_year1_full"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">☀️</span>
                Compare Summer crop profits
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28"
                fromPath={fromPath}
                ctaName="fall_year1_full"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍂</span>
                Compare Fall crop profits
              </TrackedBlogCtaLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Optional: if you’re already Artisan in late Year 1, try Fall with Artisan to see how Pumpkin (juice)
              competes with Cranberry.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="fall_year1_artisan"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🏆</span>
                Compare Fall crops with Artisan
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">EN</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_EN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">Answers</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ANSWERS.map((answer) => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="best-crops-year-1" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
