import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorClient } from "@/components/CalculatorClient";
import { FaqGuideCard } from "@/components/calculator/FaqGuideCard";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackLink } from "@/components/TrackLink";
import crops from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";

const QUICK_PRESET_LINKS = [
  {
    href: "/calculator?preset=best-spring-10-days-left",
    label: "Spring Best",
    icon: "🌸",
    track: "calculator_preset_header_spring_best",
  },
  {
    href: "/calculator?preset=best-summer-10-days-left",
    label: "Summer Panic",
    icon: "☀️",
    track: "calculator_preset_header_summer_panic",
  },
  {
    href: "/calculator?preset=ancient-vs-starfruit-greenhouse",
    label: "Greenhouse Strategy",
    icon: "🏡",
    track: "calculator_preset_header_greenhouse_strategy",
  },
] as const;

const QUICK_PRESET_LINK_CLASS =
  "inline-flex min-h-8 items-center gap-1.5 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-xs font-semibold leading-5 text-[#5c3d23] shadow-sm transition-colors duration-150 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1] active:border-[#7c4d2e]/70 active:bg-[#f8df95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c4d2e]/55 focus-visible:shadow-[0_0_0_3px_rgba(124,77,46,0.2)] aria-[current=page]:border-[#7c4d2e]/70 aria-[current=page]:bg-[#fce8b1]";

const QUICK_PRESET_ICON_CLASS = "inline-flex w-4 shrink-0 items-center justify-center leading-none opacity-85";

const START_HERE_ARTICLES = [
  {
    href: "/blog/stardew-valley-keg-jar-artisan-profit-system",
    title: "Keg, Jar, and Artisan Profit System",
    description:
      "Understand the full processing system: when kegs beat jars, when jars are the faster payback choice, and how artisan multipliers reshape your profit stack.",
  },
  {
    href: "/blog/farm-profit-pillars",
    title: "Farm Profit Pillars",
    description:
      "Build a complete farm economy with seasonal crops, greenhouse planning, artisan throughput, and daily decision rules that hold up from Year 1 to endgame.",
  },
  {
    href: "/blog/stardew-valley-artisan-profit-guide",
    title: "Stardew Valley Artisan Profit Guide",
    description:
      "Use machine-day logic to choose what to process first, scale your keg/jar setup, and convert raw crops into consistent high-margin stardew profits.",
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Profit Calculator (1.6) – Best Crops, Gold/Day & ROI | StardewProfit",
  description:
    "Free Stardew Valley profit calculator (1.6). Compare crops by gold/day and ROI across seasons, quality, fertilizer, and Tiller/Artisan. Find the best crop in seconds.",
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    url: "/calculator",
    title: "Stardew Valley Profit Calculator (1.6) – Best Crops, Gold/Day & ROI | StardewProfit",
    description:
      "Free Stardew Valley profit calculator (1.6). Compare crops by gold/day and ROI across seasons, quality, fertilizer, and Tiller/Artisan. Find the best crop in seconds.",
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
    title: "Stardew Valley Profit Calculator (1.6) – Best Crops, Gold/Day & ROI | StardewProfit",
    description:
      "Free Stardew Valley profit calculator (1.6). Compare crops by gold/day and ROI across seasons, quality, fertilizer, and Tiller/Artisan. Find the best crop in seconds.",
    images: ["/api/og?title=Crop+Profit+Calculator&subtitle=Compare+Gold+per+Day&type=calculator"],
  },
};

export default function CalculatorPage() {
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
          text: "Starfruit and Ancient Fruit usually lead once you process into wine, but your best raw crop depends on season length and regrow timing. Run your current scenario in this crop calculator, then use https://www.stardewprofit.com/blog/farm-profit-pillars and https://www.stardewprofit.com/blog/stardew-valley-artisan-profit-guide to lock in a full profit plan.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use kegs or jars for my crops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kegs usually win on top-tier fruit if you can wait, while jars often return gold faster in early and mid game. Choose based on machine-day value and throughput limits, then follow https://www.stardewprofit.com/blog/stardew-valley-keg-jar-artisan-profit-system for exact decision rules.",
        },
      },
      {
        "@type": "Question",
        name: "How do I maximize greenhouse profits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keep greenhouse slots on repeat-harvest crops that fit your harvesting cadence and processing capacity. Pair crop choice with your keg/jar pipeline using https://www.stardewprofit.com/blog/farm-profit-pillars and https://www.stardewprofit.com/blog/stardew-valley-artisan-profit-guide.",
        },
      },
      {
        "@type": "Question",
        name: "What's the best crop for each season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single best crop for every account state because budget, days left, and processing setup all matter. Use this calculator for season-specific comparisons, then use https://www.stardewprofit.com/blog/farm-profit-pillars for a full season-by-season framework.",
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
            Stardew Valley Profit Calculator
          </h1>
          <p className="mt-1 text-lg font-medium text-[#5c3d23]/90 sm:text-xl">
            Compare crops by gold/day and ROI — in seconds
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Pick your season, days remaining, and setup to instantly see the best crops by profit/day and payback time.
            Includes quality, fertilizer, regrowth timing, and Tiller/Artisan professions — no wiki digging needed.
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

          <details className="mt-5 rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
            <summary className="cursor-pointer select-none text-sm font-semibold text-[#4a321e]">
              📘 Guides &amp; next steps (optional)
              <span className="ml-2 text-xs font-normal text-[#5f4228]/75">
                (expand for popular guides and topic hubs)
              </span>
            </summary>

            <p className="mt-3 text-sm text-[#5f4228]/90">
              <Link
                href="/blog"
                className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
              >
                Browse all guides &amp; quick answers
              </Link>
              {" "}— crop comparisons, keg math, and seasonal strategies.
            </p>

            <section className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/70">
                Next steps (most clicked)
              </p>
              <div className="mt-2 flex flex-wrap gap-2.5">
                <Link href="/blog/keg-vs-jar-profit-guide" className={QUICK_PRESET_LINK_CLASS}>
                  Keg vs Jar (Decision Guide)
                </Link>
                <Link href="/blog/wine-vs-juice-quick-answer" className={QUICK_PRESET_LINK_CLASS}>
                  Wine vs Juice (Quick Answer)
                </Link>
                <Link href="/blog/best-greenhouse-crops-quick-answer" className={QUICK_PRESET_LINK_CLASS}>
                  Best Greenhouse Crops
                </Link>
              </div>
              <p className="mt-2 text-xs text-[#5f4228]/85">
                Read one, then come back here and use the presets to lock in a plan.
              </p>
            </section>

            <section className="mt-4 rounded-2xl border-2 border-[#6f8b3c]/60 bg-[#e7f1c8]/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5b6f2f]/80">
                Popular Topics
              </p>
              <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
                <Link
                  href="/blog/year-1-spring-crops-profit-guide"
                  className="group rounded-xl border-2 border-[#7c4d2e]/50 bg-white/70 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6f8b3c]/70 hover:bg-white"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      🌱
                    </span>
                    <span className="text-sm font-semibold text-[#4a321e]">Year 1 Guide</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-[#5f4228]/85">
                    Spring crops, upgrade order, and early game money strategy
                  </p>
                </Link>
                <Link
                  href="/blog/best-greenhouse-crops-stardew-valley"
                  className="group rounded-xl border-2 border-[#7c4d2e]/50 bg-white/70 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6f8b3c]/70 hover:bg-white"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      🏡
                    </span>
                    <span className="text-sm font-semibold text-[#4a321e]">Greenhouse Strategy</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-[#5f4228]/85">
                    Ancient Fruit vs Starfruit, layout tips, and profit optimization
                  </p>
                </Link>
                <Link
                  href="/blog/stardew-valley-keg-jar-artisan-profit-system"
                  className="group rounded-xl border-2 border-[#7c4d2e]/50 bg-white/70 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6f8b3c]/70 hover:bg-white"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      🍷
                    </span>
                    <span className="text-sm font-semibold text-[#4a321e]">Keg vs Jar System</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-[#5f4228]/85">
                    Processing decisions, payback time, and artisan profit guide
                  </p>
                </Link>
              </div>
            </section>
          </details>
        </header>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Presets</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Need a fast starting point?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
            Open a ready-made scenario, then tune values to match your farm. Start with these three and see all 10+
            presets in the hub.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <TrackLink
              href="/calculator?preset=best-spring-10-days-left"
              className={QUICK_PRESET_LINK_CLASS}
              trackEvent="calculator_preset_section_spring_10_days"
            >
              🌸 Spring (10 days left)
            </TrackLink>
            <TrackLink
              href="/calculator?preset=best-summer-10-days-left"
              className={QUICK_PRESET_LINK_CLASS}
              trackEvent="calculator_preset_section_summer_panic"
            >
              ☀️ Summer panic
            </TrackLink>
            <TrackLink
              href="/calculator?preset=ancient-vs-starfruit-greenhouse"
              className={QUICK_PRESET_LINK_CLASS}
              trackEvent="calculator_preset_section_greenhouse_benchmark"
            >
              🏡 Greenhouse benchmark
            </TrackLink>
            <TrackLink
              href="/presets"
              className="inline-flex min-h-8 items-center rounded-xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-3 py-1.5 text-xs font-bold leading-5 text-white shadow-sm transition-colors duration-150 hover:bg-[#4e7a32]"
              trackEvent="calculator_view_all_presets"
            >
              View All Presets
            </TrackLink>
          </div>
        </section>

        <section id="calculator" className="mt-8 grid gap-6 scroll-mt-4">
          <CalculatorClient
            crops={crops as Crop[]}
            initialSeason={initialSeason}
            initialResults={initialResults}
          />
          <FaqGuideCard />

          <details className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            {/* NOTE: keep this details block well-formed; do not leave stray closing tags. */}
            <summary className="cursor-pointer select-none text-base font-semibold text-[#4a321e] sm:text-lg">
              How the Crop Profit Calculator Works (optional)
              <span className="ml-2 text-xs font-normal text-[#5f4228]/75">
                (expand for the full explanation)
              </span>
            </summary>

            <h2 className="mt-4 text-xl font-semibold text-[#4a321e] sm:text-2xl">
              How the Crop Profit Calculator Works (And How to Use It Well)
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              This page is designed for fast, practical crop planning. You pick a season (or greenhouse), choose how
              many days you have left, and the calculator ranks crops by the metric that matters most for decision
              making: gold per day. Instead of scanning wiki tables and doing the regrow math by hand, you get a clean
              comparison you can tweak in seconds.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-[#4a321e]">What it does</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              The calculator estimates two things for each crop: total profit over the time window you select, and the
              average profit per day over that same window. That second number is why the ranking feels useful: it helps
              you compare a long-grow crop with huge payouts against a fast crop you can harvest multiple times. It also
              handles common Stardew edge cases like regrowing crops and quality multipliers, so your shortlist matches
              what you actually experience in game.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-[#4a321e]">How the math works (gold/day)</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              At a high level, gold/day is computed as: <span className="font-semibold">(total sell value − total seed cost) ÷ days</span>.
              The “total sell value” part is where the game logic lives. For single-harvest crops, you get one harvest if
              the growth time fits inside your selected window. For regrowing crops, you get an initial harvest after the
              first growth period, then additional harvests every regrow interval as long as there are days remaining.
              This means a regrow crop with a slightly lower sell price can beat a slow crop when the season is short.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Quality and professions are applied as multipliers on the sale price. If you toggle Tiller, the base crop
              sale value increases accordingly. (Artisan is included as an option on this page for convenience, but keep
              in mind that Artisan is most meaningful when you are processing crops into artisan goods.)
            </p>

            <h3 className="mt-5 text-lg font-semibold text-[#4a321e]">Inputs explained</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold">Season</span> filters the crop list to what you can plant right now.
              <span className="font-semibold"> Days remaining</span> controls how many harvest cycles fit. Set it to the
              number of days left in the season if you are planning outdoors, or use a longer window for greenhouse
              planning.
              <span className="font-semibold"> Quality</span> estimates the average sale value per harvest at that
              quality tier.
              <span className="font-semibold"> Tiller</span> boosts raw crop sales, while <span className="font-semibold">Artisan</span>
              matters when you process.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-[#4a321e]">Common pitfalls</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              The most common mistake is optimizing the spreadsheet instead of the farm. Gold/day assumes you can water
              and harvest on time. If you miss harvest days, regrow crops look better on paper than they feel in play.
              Another pitfall is ignoring startup time: crops with a long initial growth can look amazing for a full
              season, but become terrible when only 9–12 days remain.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Also, remember that this calculator focuses on raw crop selling. If your real plan is to turn everything
              into wine, juice, jelly, or pickles, your ranking can change. When processing is the goal, use the
              calculator to pick candidates, then sanity-check the decision with a processing guide.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-[#4a321e]">When to use keg/jar assumptions</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              If you have more crops than machines, the limiting factor is not the crop; it is your keg or preserves jar
              capacity. In that case, a “best crop” list based on raw gold/day is only a starting point. Your best choice
              becomes the crop that produces the most value per machine-day given your processing pipeline. The
              <Link
                href="/blog/keg-vs-jar-profit-guide"
                className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
              >
                keg vs jar profit guide
              </Link>
              breaks that tradeoff down clearly, including when wine beats juice and when jars are the better early-game
              bet.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              For greenhouse planning, “days remaining” is less meaningful than repeatable weekly throughput. A good
              approach is to test a longer window (like 28 or 56 days), then compare your top picks against the
              <Link
                href="/blog/best-greenhouse-crops-stardew-valley"
                className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
              >
                best greenhouse crops guide
              </Link>
              to confirm the assumptions match your sprinkler layout, harvesting cadence, and processing plan.
            </p>


          </details>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Start Here · Featured Guide</p>
                <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Profit Guide 2026</h2>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  The fastest way to stop guessing: best crops by season + keg vs jar + greenhouse strategy — in one
                  bookmarkable guide.
                </p>
              </div>

              <Link
                href="/blog/stardew-valley-profit-guide-2026"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#4e7a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c8a3e]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-90">
                  📘
                </span>
                Open Profit Guide 2026
              </Link>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Start Here</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Read these three pillar guides next, then come back to this crop calculator to apply the strategy to your
              farm state.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {START_HERE_ARTICLES.map((article) => (
                <article
                  key={article.href}
                  className="rounded-2xl border border-[#8a5b3a]/40 bg-white/45 p-4 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-[#4a321e]">
                    <Link
                      href={article.href}
                      className="underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#5b2d0f]"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{article.description}</p>
                </article>
              ))}
            </div>
          </section>

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
            </div>
          </section>
        </section>

        <SiteFooter className="mt-10" />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
        />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
    </div>
  );
}
