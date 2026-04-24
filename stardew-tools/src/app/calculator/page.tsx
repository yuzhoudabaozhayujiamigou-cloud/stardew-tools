import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorClient } from "@/components/CalculatorClientWrapper";
import { FaqGuideCard } from "@/components/calculator/FaqGuideCard";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackLink } from "@/components/TrackLink";
import crops from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";

const QUICK_PRESET_LINKS = [
  {
    href: "/calculator?preset=best-spring-10-days-left#calculator",
    label: "Spring Best",
    icon: "🌸",
    track: "calculator_preset_header_spring_best",
  },
  {
    href: "/calculator?preset=best-summer-10-days-left#calculator",
    label: "Summer Panic",
    icon: "☀️",
    track: "calculator_preset_header_summer_panic",
  },
  {
    href: "/calculator?preset=ancient-vs-starfruit-greenhouse#calculator",
    label: "Greenhouse Strategy",
    icon: "🏡",
    track: "calculator_preset_header_greenhouse_strategy",
  },
] as const;

const QUICK_PRESET_LINK_CLASS =
  "inline-flex min-h-8 items-center gap-1.5 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-xs font-semibold leading-5 text-[#5c3d23] shadow-sm transition-colors duration-150 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1] active:border-[#7c4d2e]/70 active:bg-[#f8df95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c4d2e]/55 focus-visible:shadow-[0_0_0_3px_rgba(124,77,46,0.2)] aria-[current=page]:border-[#7c4d2e]/70 aria-[current=page]:bg-[#fce8b1]";

const QUICK_PRESET_ICON_CLASS = "inline-flex w-4 shrink-0 items-center justify-center leading-none opacity-85";


export const metadata: Metadata = {
  title: "Stardew Profit Calculator (Free) - Best Crops by Season 1.6",
  description:
    "Calculate best crops for every season in Stardew Valley 1.6. Instant ROI, gold/day rankings. Free tool, no signup, updated 2026.",
  // NOTE: keep marketing copy lint-safe for JSX contexts
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    url: "/calculator",
    title: "Stardew Valley Crop Profit Calculator 1.6 | Compare Best Crops & ROI",
    description:
      "Use the Stardew Valley crop profit calculator to compare exact crop ROI, gold per day, and season timing for your current farm.",
    type: "website",
    images: [
      {
        url: "/api/og?title=Crop+Profit+Calculator&subtitle=Compare+Gold+per+Day&type=calculator",
        width: 1200,
        height: 630,
        alt: "Stardew Valley Crop Profit Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stardew Valley Crop Profit Calculator 1.6 | Compare Best Crops & ROI",
    description:
      "Use the Stardew Valley crop profit calculator to compare exact crop ROI, gold per day, and season timing for your current farm.",
    images: ["/api/og?title=Crop+Profit+Calculator&subtitle=Compare+Gold+per+Day&type=calculator"],
  },
};

export default function CalculatorPage() {
  // Quick promise: answer fast, reduce bounce.
  const heroValueProp =
    "Get exact Stardew crop ROI fast: compare crops by season timing and gold per day with real numbers.";
  const heroSteps = [
    "Choose Season and Days Left",
    "Set Quality and Profession",
    "See Profit per Day + ROI instantly",
  ] as const;

  const initialSeason: Season = "spring";
  const initialResults = (crops as Crop[])
    .filter((crop) => crop.season.includes(initialSeason))
    .map((crop) => calculateSeasonProfit({ crop, quality: "normal", hasTiller: false }))
    .sort((a, b) => b.goldPerDay - a.goldPerDay);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the most profitable crops in Stardew Valley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starfruit and Ancient Fruit often lead long-term profit once processed, but the best raw crop changes with season length, regrow timing, and your machine capacity. Enter your current season and days left to get the most reliable ranking for your save.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use kegs or jars for my crops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use kegs when you can wait for higher value per unit, and use jars when faster turnaround helps cash flow. The right choice depends on machine-day value, processing speed, and how many machines you can keep running.",
        },
      },
      {
        "@type": "Question",
        name: "How do I maximize greenhouse profits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prioritize repeat-harvest crops and match harvest output to your keg or jar throughput. Test longer windows, such as 28 to 56 days, to find the setup that gives stable weekly profit for your machine count.",
        },
      },
      {
        "@type": "Question",
        name: "What's the best crop for each season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal winner because seed budget, days left, professions, and processing setup all change the ranking. Compare crops by season first, then lock in the option that fits your current farm constraints.",
        },
      },
      {
        "@type": "Question",
        name: "What inputs should I set in this Stardew crop calculator first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with season and days left, then adjust quality and profession assumptions. That gives the most realistic ranking before you optimize finer details.",
        },
      },
      {
        "@type": "Question",
        name: "What factors does this Stardew Valley profit calculator consider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This calculator considers season, days left, crop quality, and professions. It focuses on raw crop selling value to help you make fast planting decisions.",
        },
      },
      {
        "@type": "Question",
        name: "Does this Stardew Valley profit calculator work for version 1.6?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this page is maintained as a 1.6 crop profit calculator. Re-check major updates after game patches and adjust assumptions to match your save.",
        },
      },
      {
        "@type": "Question",
        name: "Should I start from the homepage or jump straight to the calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you already know your season and days left, start directly in the calculator. If your strategy is still unclear, review a quick overview first, then return and run your scenario with concrete inputs.",
        },
      },
    ],
  };

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Stardew Valley Crop Profit Calculator",
    url: "https://www.stardewprofit.com/calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ contain: "layout size style" }}>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
        <div
          className="absolute inset-x-0 bottom-0 h-24 opacity-90 sm:h-32"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(105,66,37,0.9) 0 14%, rgba(145,95,53,0.9) 14% 32%, transparent 32%), repeating-linear-gradient(to right, rgba(116,73,41,0.92) 0 10px, rgba(151,102,58,0.92) 10px 22px, transparent 22px 52px)",
            backgroundSize: "100% 100%, 100% 100%",
            backgroundPosition: "bottom center, bottom center",
          }}
        />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 subpixel-antialiased sm:px-12 sm:py-10">
        <PwaRegisterScript />

        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Stardew Valley Tool
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Stardew Crop Calculator and Profit Calculator
          </h1>
          <p className="mt-1 text-lg font-medium text-[#5c3d23]/90 sm:text-xl">
            Compare crops by gold/day and ROI — in seconds
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            This Stardew crop calculator is built for players searching “stardew valley crop calculator” or
            “stardew valley profit calculator” and needing a practical answer fast. Enter your season, days left, and
            setup to see the best crops ranked by gold/day and payback speed across all seasons.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            {heroValueProp}
          </p>

          <ol className="mt-3 grid max-w-3xl gap-2 text-sm text-[#5f4228]/90 sm:grid-cols-3">
            {heroSteps.map((step) => (
              <li key={step} className="rounded-xl border border-[#8a5b3a]/30 bg-white/35 px-3 py-2 shadow-sm">
                {step}
              </li>
            ))}
          </ol>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Start with your current season and days left, then use presets only if you want a fast benchmark.
          </p>
          <ul className="mt-4 grid max-w-3xl gap-2 text-sm text-[#5f4228]/90 sm:grid-cols-2">
            <li>• Gold per day (profit/day)</li>
            <li>• ROI / break-even days</li>
            <li>• Best crop by season</li>
            <li>• Tiller vs Artisan impact</li>
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href="#calculator"
              className="inline-flex min-h-8 items-center gap-1.5 rounded-xl border-2 border-[#5b3a22]/75 bg-[#3f6f28] px-4 py-2 text-sm font-bold leading-5 text-white shadow-sm transition-colors duration-150 hover:bg-[#365f22] active:bg-[#2e511c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f6f28]"
            >
              ▶ Start Calculating
            </a>
            {QUICK_PRESET_LINKS.map((preset) => (
              <TrackLink key={preset.href} href={preset.href} className={QUICK_PRESET_LINK_CLASS} trackEvent={preset.track}>
                <span aria-hidden="true" className={QUICK_PRESET_ICON_CLASS}>
                  {preset.icon}
                </span>
                {preset.label}
              </TrackLink>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
            <p className="text-sm font-semibold text-[#4a321e]">Related guides</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <Link href="/blog/best-crops-year-1" className={QUICK_PRESET_LINK_CLASS}>
                Year 1 Guide
              </Link>
              <Link href="/guides/greenhouse-profit-guide" className={QUICK_PRESET_LINK_CLASS}>
                Greenhouse Guide
              </Link>
            </div>
          </div>
        </header>


        <section id="calculator" className="mt-8 grid gap-6 scroll-mt-4">
          <CalculatorClient
            crops={crops as Crop[]}
            initialSeason={initialSeason}
            initialResults={initialResults}
          />

          <FaqGuideCard />

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Frequently Asked Questions</h2>
            <div className="mt-4 grid gap-3">
              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">
                  What are the most profitable crops in Stardew Valley?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Starfruit and Ancient Fruit usually dominate once you process into wine, but the best raw crop shifts
                  with days left and regrow windows. Use this crop calculator for your current season, then follow{' '}
                  <Link
                    href="/blog/farm-profit-pillars"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Farm Profit Pillars
                  </Link>
                  {' '}and the{' '}
                  <Link
                    href="/blog/stardew-valley-artisan-profit-guide"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Artisan Profit Guide
                  </Link>
                  {' '}to map your long-term stardew profits.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">Should I use kegs or jars for my crops?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Kegs are usually stronger for top fruit when you can afford longer processing time, while jars often
                  pay back faster in early and mid game. The real answer depends on value per machine-day and how many
                  machines you can keep fed. Use the{' '}
                  <Link
                    href="/blog/stardew-valley-keg-jar-artisan-profit-system"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Keg/Jar/Artisan Profit System
                  </Link>
                  {' '}for a direct decision rule.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">How do I maximize greenhouse profits?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Greenhouse profit is mostly a throughput problem: pick repeat-harvest crops, then match harvest cadence
                  to your keg/jar capacity. Ancient Fruit pipelines are a common baseline, but your best setup depends on
                  machine count and weekly time budget. Start with{' '}
                  <Link
                    href="/blog/farm-profit-pillars"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Farm Profit Pillars
                  </Link>
                  {' '}and optimize processing via the{' '}
                  <Link
                    href="/blog/stardew-valley-artisan-profit-guide"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Artisan Profit Guide
                  </Link>
                  .
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">What&apos;s the best crop for each season?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  There is no single best crop for every save because seed budget, unlocked professions, and days
                  remaining all shift the ranking. Use the calculator with season presets first, then use{' '}
                  <Link
                    href="/blog/farm-profit-pillars"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Farm Profit Pillars
                  </Link>
                  {' '}for season-by-season recommendations you can actually execute.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">What should I input first in this calculator?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Always set season and days left first, because that changes which crops can realistically finish.
                  Then adjust quality and profession assumptions for a more accurate ranking.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">Should I use homepage guidance before this tool?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  If you are unsure which route to optimize, start with the{' '}
                  <Link
                    href="/"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    homepage quick answer
                  </Link>
                  {' '}then come back here with a clear season goal.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">How do I avoid overplanting for machine capacity?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Use calculator output as the shortlist, then compare processing constraints with the{' '}
                  <Link
                    href="/blog/stardew-valley-keg-jar-artisan-profit-system"
                    className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
                  >
                    Keg/Jar/Artisan Profit System
                  </Link>
                  {' '}to keep kegs and jars fed without backlog.
                </p>
              </article>
            </div>
          </section>
        </section>

        <SiteFooter className="mt-10" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
    </div>
  );
}
