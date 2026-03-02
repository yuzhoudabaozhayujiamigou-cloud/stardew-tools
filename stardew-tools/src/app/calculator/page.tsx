import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorClient } from "@/components/CalculatorClient";
import { FaqGuideCard } from "@/components/calculator/FaqGuideCard";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import crops from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";
import { getCalculatorReadNextPosts } from "@/lib/read-next";

const QUICK_PRESET_LINKS = [
  {
    href: "/?season=spring&daysLeft=28",
    label: "Spring Best",
    icon: "🌸",
  },
  {
    href: "/?season=summer&daysLeft=10",
    label: "Summer Panic",
    icon: "☀️",
  },
  {
    href: "/?season=greenhouse",
    label: "Greenhouse Strategy",
    icon: "🏡",
  },
] as const;

const QUICK_PRESET_LINK_CLASS =
  "inline-flex min-h-8 items-center gap-1.5 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-xs font-semibold leading-5 text-[#5c3d23] shadow-sm transition-colors duration-150 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1] active:border-[#7c4d2e]/70 active:bg-[#f8df95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c4d2e]/55 focus-visible:shadow-[0_0_0_3px_rgba(124,77,46,0.2)] aria-[current=page]:border-[#7c4d2e]/70 aria-[current=page]:bg-[#fce8b1]";

const QUICK_PRESET_ICON_CLASS = "inline-flex w-4 shrink-0 items-center justify-center leading-none opacity-85";

export const metadata: Metadata = {
  title: "Stardew Valley Crop Profit Calculator – Compare Gold/Day | StardewProfit",
  description:
    "Free Stardew Valley crop profit calculator. Compare gold per day across all seasons, quality levels, and Tiller/Artisan professions. Find your best crop in seconds.",
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    url: "/calculator",
    title: "Stardew Valley Crop Profit Calculator – Compare Gold/Day | StardewProfit",
    description:
      "Free Stardew Valley crop profit calculator. Compare gold per day across all seasons, quality levels, and Tiller/Artisan professions. Find your best crop in seconds.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stardew Valley Crop Profit Calculator – Compare Gold/Day | StardewProfit",
    description:
      "Free Stardew Valley crop profit calculator. Compare gold per day across all seasons, quality levels, and Tiller/Artisan professions. Find your best crop in seconds.",
  },
};

export default function CalculatorPage() {
  const initialSeason: Season = "spring";
  const readNextPosts = getCalculatorReadNextPosts(4);

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
        name: "How is this calculator ranking crops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ranking compares seasonal total profit and gold per day with regrow logic, quality multipliers, and optional Tiller bonus.",
        },
      },
      {
        "@type": "Question",
        name: "Does this include artisan processing profit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not directly. This page focuses on direct crop selling value for faster in-season planning. For processing decisions, use the linked guides below (keg vs jar, wine vs juice, greenhouse strategy).",
        },
      },
      {
        "@type": "Question",
        name: "Should I always plant the #1 crop on the list?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. The best crop depends on days left in the season, how often you can water/harvest, whether it regrows, and if you plan to process it later. Use the presets + the ‘read next’ guides to pick a plan you can actually run.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this for Year 1 planning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For early-game baselines, use Normal quality and Tiller Off. Then switch presets to test ‘Summer panic’ or ‘Greenhouse strategy’ once you unlock sprinklers/greenhouse.",
        },
      },
      {
        "@type": "Question",
        name: "Why does a regrow crop sometimes rank above a higher-value crop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold per day rewards repeat harvests. Regrowing crops can generate more total sell value over the same time window, especially when days remaining are limited.",
        },
      },
      {
        "@type": "Question",
        name: "What should I set for days remaining?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For outdoor seasons, set the exact number of days left on the calendar. For greenhouse comparisons, use a longer window like 28 or 56 days so multiple regrow cycles appear.",
        },
      },
      {
        "@type": "Question",
        name: "Does this account for fertilizer, Speed-Gro, or other growth bonuses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This tool focuses on baseline crop economics with core regrow logic and quality/profession multipliers. Fertilizer and growth-speed bonuses can change rankings, so treat results as a shortlist and adjust for your setup.",
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 subpixel-antialiased sm:px-12 sm:py-10">
        <PwaRegisterScript />

        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Stardew Valley Tool
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Crop Profit Calculator
          </h1>
          <p className="mt-1 text-lg font-medium text-[#5c3d23]/90 sm:text-xl">
            Find the most profitable crop in seconds
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Pick your season, set days remaining, and instantly see which crops earn the most gold per day.
            Supports quality levels, Tiller &amp; Artisan professions, and regrowing crops — no wiki digging needed.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href="#calculator"
              className="inline-flex min-h-8 items-center gap-1.5 rounded-xl border-2 border-[#5b3a22]/75 bg-[#3f6f28] px-4 py-2 text-sm font-bold leading-5 text-white shadow-sm transition-colors duration-150 hover:bg-[#365f22] active:bg-[#2e511c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f6f28]"
            >
              ▶ Start Calculating
            </a>
            {QUICK_PRESET_LINKS.map((preset) => (
              <Link
                key={preset.href}
                href={preset.href}
                className={QUICK_PRESET_LINK_CLASS}
              >
                <span aria-hidden="true" className={QUICK_PRESET_ICON_CLASS}>
                  {preset.icon}
                </span>
                {preset.label}
              </Link>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#5f4228]/90">
            📘{" "}
            <Link
              href="/blog"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Browse all guides & quick answers
            </Link>
            {" "}— crop comparisons, keg math, and seasonal strategies.
          </p>

          <section className="mt-5 rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
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
        </header>

        <section id="calculator" className="mt-8 grid gap-6 scroll-mt-4">
          <CalculatorClient
            crops={crops as Crop[]}
            initialSeason={initialSeason}
            initialResults={initialResults}
          />
          <FaqGuideCard />

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
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

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">FAQ</h3>
            <div className="mt-3 grid gap-3">
              {[
                {
                  q: "Why does a regrow crop rank higher than a crop with a bigger single harvest?",
                  a: "Gold/day rewards repeat harvests. A crop that regrows every few days can out-earn a slow crop over the same window, especially when you have limited days left.",
                },
                {
                  q: "What should I set for days remaining?",
                  a: "For outdoor seasons, set the exact days left on the calendar. For greenhouse comparisons, use a longer window like 28 or 56 days so regrow cycles show up clearly.",
                },
                {
                  q: "Does this account for fertilizer, Speed-Gro, or multi-harvest perks?",
                  a: "This page focuses on baseline crop economics and core regrow logic. Fertilizer and growth speed effects can change rankings; treat the output as a shortlist and adjust based on your actual setup.",
                },
                {
                  q: "Why is Artisan here if this is a crop selling calculator?",
                  a: "It is included so you can sanity-check how much profession multipliers matter in your plan. For true processing optimization, use a keg/jar guide and compare value per machine-day.",
                },
                {
                  q: "Should I always pick the #1 gold/day crop?",
                  a: "Not necessarily. Consider how often you can harvest, whether you can replant quickly, and whether your processing capacity is the bottleneck.",
                },
                {
                  q: "What is the fastest way to decide between two close options?",
                  a: "Check whether both options fit your harvest schedule and whether you will sell raw or process. If you process, compare their downstream value using a keg vs jar reference.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-[#4a321e]">{item.q}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

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
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Read next</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Continue with high-intent quick answers and jump back here with presets after reading.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {readNextPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={post.href}
                  className={`inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1] ${
                    index === 0 ? "bg-[#fff2c8]" : "bg-[#fff8e8]"
                  }`}
                >
                  <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                    📘
                  </span>
                  {post.label}
                </Link>
              ))}
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
