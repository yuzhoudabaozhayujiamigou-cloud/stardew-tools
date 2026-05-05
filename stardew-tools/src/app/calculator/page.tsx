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
  title: "Stardew Valley Crop Profit Calculator | Compare Crops by Season",
  description:
    "Calculate Stardew Valley crop profits by season, seed cost, growth time, regrowth, and harvests. Compare crops before you plant.",
  // NOTE: keep marketing copy lint-safe for JSX contexts
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    url: "/calculator",
    title: "Stardew Valley Crop Profit Calculator | Compare Crops by Season",
    description:
      "Calculate Stardew Valley crop profits by season, seed cost, growth time, regrowth, and harvests. Compare crops before you plant.",
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
    title: "Stardew Valley Crop Profit Calculator | Compare Crops by Season",
    description:
      "Calculate Stardew Valley crop profits by season, seed cost, growth time, regrowth, and harvests. Compare crops before you plant.",
    images: ["/api/og?title=Crop+Profit+Calculator&subtitle=Compare+Gold+per+Day&type=calculator"],
  },
};

export default function CalculatorPage() {
  // Quick promise: answer fast, reduce bounce.
  const heroValueProp =
    "See exact gold per day, total profit, and ROI for the crops that still fit your remaining season.";
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
        name: "What does this Stardew crop calculator optimize?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It ranks raw crop choices by season, days left, gold per day, total profit, and ROI. It is designed for quick planting decisions, not full artisan processing planning.",
        },
      },
      {
        "@type": "Question",
        name: "Why does the best crop change when I change days left?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some crops need more days before the first harvest, while regrow crops need enough time to pay off. Changing days left can make a slower high-profit crop worse than a faster crop.",
        },
      },
      {
        "@type": "Question",
        name: "Should I turn Tiller on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turn Tiller on only if your farmer already has the Tiller profession. Leave it off for early-game or neutral comparisons.",
        },
      },
      {
        "@type": "Question",
        name: "What does ROI mean here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ROI compares profit against seed cost. A high ROI crop pays back its seed cost efficiently, while gold per day shows how much value it creates over the remaining season.",
        },
      },
      {
        "@type": "Question",
        name: "Does this include kegs, jars, or wine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This calculator focuses on direct crop selling value. Use it first to choose a strong crop, then evaluate processing separately if you want an artisan route.",
        },
      },
      {
        "@type": "Question",
        name: "What should I enter first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with season and days left. Those two inputs decide which crops can still finish before the season ends.",
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
            Stardew Valley Crop Profit Calculator
          </h1>
          <p className="mt-1 text-lg font-medium text-[#5c3d23]/90 sm:text-xl">
            Compare crop profit by season, seed cost, growth time, and regrowth.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Calculate Stardew Valley crop profits by season, seed cost, growth time, regrowth, and expected harvests.
            Enter your days left to compare crops before you plant.
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
            <li>• Tiller bonus impact</li>
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

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Related Guides</p>
            <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Maximize Your Profit</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
              Finished comparing crops? Use one of these guides as the next step so you can turn a single calculation into a stronger full-season plan.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link href="/blog/best-crops-every-season" className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/75">
                <h3 className="text-base font-semibold text-[#4a321e]">Best Crops Every Season</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">See the fastest season-by-season crop picks after you check your exact numbers.</p>
              </Link>
              <Link href="/guides/greenhouse-profit-guide" className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/75">
                <h3 className="text-base font-semibold text-[#4a321e]">Greenhouse Profit Guide</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Turn crop results into a longer-term greenhouse strategy when you want steady profit.</p>
              </Link>
              <Link href="/blog/best-crops-year-1" className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/75">
                <h3 className="text-base font-semibold text-[#4a321e]">Best Crops Year 1</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Use this if you want a simple early-game planting plan after checking the calculator.</p>
              </Link>
            </div>
          </section>

          <FaqGuideCard />

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Frequently Asked Questions</h2>
            <div className="mt-4 grid gap-3">
              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">What does this Stardew crop calculator optimize?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  It ranks raw crop choices by season, days left, gold per day, total profit, and ROI. It is designed for quick planting decisions, not full artisan processing planning.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">Why does the best crop change when I change days left?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Some crops need more days before the first harvest, while regrow crops need enough time to pay off. Changing days left can make a slower high-profit crop worse than a faster crop.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">Should I turn Tiller on?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Turn Tiller on only if your farmer already has the Tiller profession. Leave it off for early-game or neutral comparisons.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">What does ROI mean here?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  ROI compares profit against seed cost. A high ROI crop pays back its seed cost efficiently, while gold per day shows how much value it creates over the remaining season.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">Does this include kegs, jars, or wine?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  No. This calculator focuses on direct crop selling value. Use it first to choose a strong crop, then evaluate processing separately if you want an artisan route.
                </p>
              </article>

              <article className="rounded-2xl border border-[#8a5b3a]/35 bg-white/35 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-[#4a321e]">What should I enter first?</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Start with season and days left. Those two inputs decide which crops can still finish before the season ends.
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
