import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StardewProfit – Best Stardew Valley Crop Calculator & Guides",
  description:
    "StardewProfit.com: the fastest Stardew Valley crop profit calculator. Compare gold/day by season, plan your farm, and read expert guides to maximize profit.",
  alternates: {
    canonical: "/",
  },
};

const ENTRY_LINK_CLASS =
  "group relative overflow-hidden rounded-[26px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 transition hover:-translate-y-0.5 hover:bg-[#f7efda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c8a3e] sm:p-6";

const ENTRY_TITLE_CLASS = "text-lg font-semibold text-[#4a321e] sm:text-xl";

const ENTRY_DESC_CLASS = "mt-2 text-sm leading-6 text-[#5f4228]/90";

const FEATURED_GUIDES = [
  {
    slug: "stardew-valley-profit-guide-2026",
    label: "Stardew Valley Profit Guide (2026)",
    blurb: "Best crops by season + keg vs jar + top wine picks.",
  },
  {
    slug: "best-crops-every-season",
    label: "Best Crops for Every Season",
    blurb: "A season-by-season shortlist you can use immediately.",
  },
  {
    slug: "keg-vs-jar-quick-answer",
    label: "Keg vs Jar (Quick Answer)",
    blurb: "Fast rules of thumb for artisan goods decisions.",
  },
  {
    slug: "best-greenhouse-crops-quick-answer",
    label: "Best Greenhouse Crops",
    blurb: "What to grow when seasons stop mattering.",
  },
  {
    slug: "year-1-spring-crops-profit-guide",
    label: "Year 1 Spring Crops Profit Guide",
    blurb: "Early-game plan that balances gold/day and realism.",
  },
  {
    slug: "money-making-guide",
    label: "Money Making Guide",
    blurb: "From broke to rich: the levers that actually move profit.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#9ed7a4]">
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            StardewProfit.com
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Make smarter farm profit decisions
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Use the fast crop profit calculator, then follow short guides that explain the "why" behind the best
            picks.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/calculator"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-[#5c8a3e] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c8a3e]"
            >
              Open the Crop Profit Calculator
            </Link>
            <Link
              href="/blog"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-white/60 px-5 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:bg-white/75"
            >
              Browse Guides
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link href="/calculator" className={ENTRY_LINK_CLASS}>
            <div aria-hidden className="absolute right-4 top-4 text-xl opacity-80 transition group-hover:scale-110">
              🧮
            </div>
            <h2 className={ENTRY_TITLE_CLASS}>Calculator</h2>
            <p className={ENTRY_DESC_CLASS}>
              Compare crops by gold/day, season, and growth time. Find the best picks for your current day.
            </p>
          </Link>

          <Link href="/blog" className={ENTRY_LINK_CLASS}>
            <div aria-hidden className="absolute right-4 top-4 text-xl opacity-80 transition group-hover:scale-110">
              📘
            </div>
            <h2 className={ENTRY_TITLE_CLASS}>Guides</h2>
            <p className={ENTRY_DESC_CLASS}>
              Quick answers and deeper strategy posts. Each one points back to calculator-friendly presets.
            </p>
          </Link>

          <Link href="/secret-notes" className={ENTRY_LINK_CLASS}>
            <div aria-hidden className="absolute right-4 top-4 text-xl opacity-80 transition group-hover:scale-110">
              🗒️
            </div>
            <h2 className={ENTRY_TITLE_CLASS}>Secret Notes</h2>
            <p className={ENTRY_DESC_CLASS}>
              Search and decode Secret Notes, track progress, and jump straight to popular notes.
            </p>
          </Link>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">
            Featured guides
          </p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Start here</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
            Six high-signal reads that answer the most common profit questions.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_GUIDES.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border-2 border-[#7c4d2e]/60 bg-white/55 px-4 py-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/80 hover:bg-white/70"
              >
                {post.label}
                <div className="mt-1 text-xs font-semibold text-[#5f4228]/80">{post.blurb}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">FAQ</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick questions</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4">
              <div className="text-sm font-semibold text-[#4a321e]">Is this calculator accurate?</div>
              <div className="mt-2 text-sm leading-6 text-[#5f4228]/85">
                It uses the in-game base prices and simple gold/day math. Your farm bonuses (skills, fertilizer,
                artisan processing) can change the best answer.
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4">
              <div className="text-sm font-semibold text-[#4a321e]">What should I plant mid-season?</div>
              <div className="mt-2 text-sm leading-6 text-[#5f4228]/85">
                Use the calculator with "days left" presets to avoid crops that won’t finish. Many guides focus on
                exact days like day 7, 15, or 20.
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4">
              <div className="text-sm font-semibold text-[#4a321e]">Where do I start?</div>
              <div className="mt-2 text-sm leading-6 text-[#5f4228]/85">
                Start with the calculator for your season, then read one featured guide to confirm whether kegs,
                jars, or raw crops make the most sense.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
