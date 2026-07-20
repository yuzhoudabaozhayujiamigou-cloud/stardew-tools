import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stardew Valley Profit Calculator & Best Crops Planner",
  description:
    "Compare Stardew Valley crop profit, find the best crops by season, and plan greenhouse, keg, or jar decisions from one profit calculator.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Stardew Valley Profit Calculator & Best Crops Planner",
    description:
      "Compare Stardew Valley crop profit, find the best crops by season, and plan greenhouse, keg, or jar decisions from one profit calculator.",
  },
  twitter: {
    card: "summary",
    title: "Stardew Valley Profit Calculator & Best Crops Planner",
    description:
      "Compare Stardew Valley crop profit, find the best crops by season, and plan greenhouse, keg, or jar decisions from one profit calculator.",
  },
};

const ENTRY_LINK_CLASS =
  "group relative overflow-hidden rounded-[26px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 transition hover:-translate-y-0.5 hover:bg-[#f7efda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c8a3e] sm:p-6";

const ENTRY_TITLE_CLASS = "text-lg font-semibold text-[#4a321e] sm:text-xl";

const ENTRY_DESC_CLASS = "mt-2 text-sm leading-6 text-[#5f4228]/90";
const HUB_CARD_CLASS =
  "rounded-[26px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 transition hover:-translate-y-0.5 hover:bg-[#f7efda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c8a3e] sm:p-6";

/** Scenario hub entries — prefer existing high-intent pages, not new slugs. */
const HUB_SCENARIOS = [
  {
    tag: "Calculator",
    title: "Open the Profit Calculator",
    desc: "Compare gold/day by season, days left, quality, and professions before you plant.",
    href: "/calculator",
  },
  {
    tag: "Year 1",
    title: "Best Crops Year 1",
    desc: "Early-game cash flow plan when you need money fast without late-game machines.",
    href: "/blog/best-crops-year-1",
  },
  {
    tag: "By season",
    title: "Best Crops Every Season",
    desc: "Spring, summer, fall, and winter picks when you want a fast ranking.",
    href: "/blog/best-crops-every-season",
  },
  {
    tag: "Days left",
    title: "7 Days Left — What to Plant",
    desc: "Late-season windows punish slow crops. Use this before buying more seeds.",
    href: "/blog/best-crops-7-days-left-before-season-switch",
  },
  {
    tag: "Compare",
    title: "Ancient Fruit vs Starfruit",
    desc: "Quick answer for greenhouse and long-term wine routes.",
    href: "/blog/ancient-fruit-vs-starfruit-quick-answer",
  },
  {
    tag: "Artisan",
    title: "Keg vs Jar Profit Guide",
    desc: "Decide kegs vs preserves jars by crop type and processing capacity.",
    href: "/blog/keg-vs-jar-profit-guide",
  },
  {
    tag: "Tool",
    title: "Keg vs Preserves Jar Tool",
    desc: "Run the artisan comparison tool after you shortlist crops.",
    href: "/tools/keg-vs-preserves-jar",
  },
  {
    tag: "Greenhouse",
    title: "Best Greenhouse Crops",
    desc: "What to lock in once the greenhouse is open and space is limited.",
    href: "/blog/best-greenhouse-crops-stardew-valley",
  },
  {
    tag: "Money plan",
    title: "Money-Making Guide",
    desc: "Bigger picture routes beyond a single season crop pick.",
    href: "/blog/money-making-guide",
  },
  {
    tag: "Scale up",
    title: "Year 2 Farming Strategy",
    desc: "Move from survival cash into a stronger crop and processing system.",
    href: "/blog/stardew-valley-year-2-farming-strategy",
  },
  {
    tag: "2026",
    title: "Profit Guide 2026",
    desc: "Current-year money strategies with calculator follow-through.",
    href: "/blog/stardew-valley-profit-guide-2026",
  },
  {
    tag: "Methods",
    title: "How Profit Is Calculated",
    desc: "Review harvest timing, assumptions, exclusions, and correction practices.",
    href: "/methodology",
  },
] as const;

const HOME_FAQ_ITEMS = [
  {
    question: "What is the fastest way to improve Stardew profit?",
    answer: (
      <>
        Open the calculator, set your season and days left, then pick the crop with the best gold/day that still fits
        your schedule and processing setup. Check our{" "}
        <Link href="/blog/money-making-guide" className="text-[#5c8a3e] underline hover:text-[#4e7a32]">
          money-making guide
        </Link>{" "}
        for detailed strategies.
      </>
    ),
  },
  {
    question: "What does this Stardew Valley profit calculator include?",
    answer:
      "It compares crops using growth time, regrowth, quality assumptions, and profession multipliers so you can rank options by practical profit/day.",
  },
  {
    question: "Is stardew profits strategy different with only 10 days left?",
    answer: (
      <>
        Yes. Late-season windows often punish slow crops. Use day-limited presets first, then validate with our{" "}
        <Link href="/blog/best-crops-every-season" className="text-[#5c8a3e] underline hover:text-[#4e7a32]">
          best crops guide
        </Link>{" "}
        before buying seeds.
      </>
    ),
  },
  {
    question: "How do I calculate profit per day in Stardew Valley?",
    answer:
      "Set your season and days left, then compare crops by gold/day. After you pick a crop, validate the plan against your keg/jar capacity so you don't bottleneck processing.",
  },
  {
    question: "Does this calculator include kegs and preserves jars?",
    answer: (
      <>
        Yes. Use the calculator for crop rankings, then use the artisan tools and{" "}
        <Link href="/blog/keg-vs-jar-profit-guide" className="text-[#5c8a3e] underline hover:text-[#4e7a32]">
          keg vs jar guide
        </Link>{" "}
        to decide whether kegs or jars are the better match for your current throughput.
      </>
    ),
  },
  {
    question: "Where should I start if I am new to Stardew Valley profit planning?",
    answer: (
      <>
        Start with the calculator for your current season, then read our{" "}
        <Link href="/blog/best-crops-year-1" className="text-[#5c8a3e] underline hover:text-[#4e7a32]">
          Year 1 guide
        </Link>{" "}
        to confirm whether your plan should prioritize raw crops, kegs, or jars.
      </>
    ),
  },
] as const;

export default function HomePage() {
  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StardewProfit",
    url: "https://www.stardewprofit.com/",
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StardewProfit",
    url: "https://www.stardewprofit.com/",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === 'string' ? item.answer : item.question,
      },
    })),
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            StardewProfit.com
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Stardew Valley Profit Calculator and Best Crops Planner
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Compare Stardew Valley crop profit by season, find the best crop for the days you have left, and turn that answer into a greenhouse, keg, or jar plan.
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Start with the profit calculator for the fastest answer. Use the guides when you want Year 1 crop routes, greenhouse strategy, or artisan processing follow-through.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/calculator"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-[#5c8a3e] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c8a3e]"
            >
              Open the Profit Calculator
            </Link>
            <Link
              href="/blog"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-white/60 px-5 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:bg-white/75"
            >
              See Best Crop Guides
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Link href="/calculator" className={HUB_CARD_CLASS}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Profit Calculator</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#4a321e] sm:text-3xl">Compare the best crops before you plant</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
                  Jump straight into the calculator when you want exact gold per day, ROI, break-even timing, and a practical answer for your current season.
                </p>
              </div>
              <div aria-hidden className="text-3xl sm:text-4xl">🧮</div>
            </div>
            <div className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-[#5c8a3e] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]">
              Find the best crop now
            </div>
          </Link>

          <section className="rounded-[26px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Top Guides</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#4a321e]">Pick your next read</h2>
            <div className="mt-4 grid gap-3">
              <Link href="/blog/best-crops-every-season" className={ENTRY_LINK_CLASS}>
                <span className="inline-flex rounded-full border border-[#6f8b3c]/55 bg-[#e7f1c8] px-2.5 py-1 text-xs font-semibold text-[#4f6727]">Most useful</span>
                <h3 className={`${ENTRY_TITLE_CLASS} mt-3`}>Best Crops Every Season</h3>
                <p className={ENTRY_DESC_CLASS}>The fastest answer if you want the best crop by season without overthinking the math.</p>
              </Link>
              <Link href="/blog/best-crops-year-1" className={ENTRY_LINK_CLASS}>
                <span className="inline-flex rounded-full border border-[#6f8b3c]/55 bg-[#e7f1c8] px-2.5 py-1 text-xs font-semibold text-[#4f6727]">Beginner</span>
                <h3 className={`${ENTRY_TITLE_CLASS} mt-3`}>Best Crops Year 1</h3>
                <p className={ENTRY_DESC_CLASS}>A simple Year 1 money plan for players who need early-game crop decisions and cash flow.</p>
              </Link>
              <Link href="/blog/stardew-valley-year-2-farming-strategy" className={ENTRY_LINK_CLASS}>
                <span className="inline-flex rounded-full border border-[#7c4d2e]/35 bg-white/55 px-2.5 py-1 text-xs font-semibold text-[#5c3d23]">Scale up</span>
                <h3 className={`${ENTRY_TITLE_CLASS} mt-3`}>Year 2 Farming Strategy</h3>
                <p className={ENTRY_DESC_CLASS}>Move from survival mode into a bigger profit system with stronger crop and farm planning.</p>
              </Link>
            </div>
          </section>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Start by scenario</p>
              <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Choose your profit path</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/85">
                Use the calculator for an exact ranking, then jump into the guide that matches your season, greenhouse, or artisan setup.
              </p>
            </div>
            <Link
              href="/calculator"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-[#5c8a3e] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c8a3e]"
            >
              Open Calculator Again
            </Link>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HUB_SCENARIOS.map((item) => (
              <Link key={item.href + item.title} href={item.href} className={ENTRY_LINK_CLASS}>
                <span className="inline-flex rounded-full border border-[#6f8b3c]/55 bg-[#e7f1c8] px-2.5 py-1 text-xs font-semibold text-[#4f6727]">
                  {item.tag}
                </span>
                <h3 className={`${ENTRY_TITLE_CLASS} mt-3`}>{item.title}</h3>
                <p className={ENTRY_DESC_CLASS}>{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/crops"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-white/60 px-5 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:bg-white/75"
            >
              Browse All Crops
            </Link>
            <Link
              href="/blog"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-white/60 px-5 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:bg-white/75"
            >
              All Guides
            </Link>
            <Link
              href="/calculator"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-[#5c8a3e] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]"
            >
              Back to Calculator
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">FAQ</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick questions</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_FAQ_ITEMS.map((item) => (
              <article key={item.question} className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4">
                <h3 className="text-sm font-semibold text-[#4a321e]">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
