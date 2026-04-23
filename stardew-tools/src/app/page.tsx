import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stardew Valley Profit Calculator & Guides (Free, 2026)",
  description:
    "Free Stardew Valley profit calculator + guides for 1.6. Compare crops, kegs, jars, greenhouse layouts. No signup. Get your best crop in 10 seconds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Stardew Valley Profit Guide, Calculator & Best Crops Hub | StardewProfit",
    description:
      "Stardew Valley profit hub: start with the crop calculator, then compare best crops, keg vs jar, greenhouse profit, and money-making guides for 1.6.",
  },
  twitter: {
    card: "summary",
    title: "Stardew Valley Profit Guide, Calculator & Best Crops Hub | StardewProfit",
    description:
      "Stardew Valley profit hub: start with the crop calculator, then compare best crops, keg vs jar, greenhouse profit, and money-making guides for 1.6.",
  },
};

const ENTRY_LINK_CLASS =
  "group relative overflow-hidden rounded-[26px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 transition hover:-translate-y-0.5 hover:bg-[#f7efda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c8a3e] sm:p-6";

const ENTRY_TITLE_CLASS = "text-lg font-semibold text-[#4a321e] sm:text-xl";

const ENTRY_DESC_CLASS = "mt-2 text-sm leading-6 text-[#5f4228]/90";

const HOME_FAQ_ITEMS = [
  {
    question: "What is the fastest way to improve Stardew profit?",
    answer:
      "Open the calculator, set your season and days left, then pick the crop with the best gold/day that still fits your schedule and processing setup.",
  },
  {
    question: "What does this Stardew Valley profit calculator include?",
    answer:
      "It compares crops using growth time, regrowth, quality assumptions, and profession multipliers so you can rank options by practical profit/day.",
  },
  {
    question: "Is stardew profits strategy different with only 10 days left?",
    answer:
      "Yes. Late-season windows often punish slow crops. Use day-limited presets first, then validate with one guide before buying seeds.",
  },
  {
    question: "How do I calculate profit per day in Stardew Valley?",
    answer:
      "Set your season and days left, then compare crops by gold/day. After you pick a crop, validate the plan against your keg/jar capacity so you don't bottleneck processing.",
  },
  {
    question: "Does this calculator include kegs and preserves jars?",
    answer:
      "Yes. Use the calculator for crop rankings, then use the artisan tools and guides to decide whether kegs or jars are the better match for your current throughput.",
  },
  {
    question: "Where should I start if I am new to Stardew Valley profit planning?",
    answer:
      "Start with the calculator for your current season, then read one focused guide to confirm whether your plan should prioritize raw crops, kegs, or jars.",
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
        text: item.answer,
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
            Stardew Valley Profit Hub: Guides, Best Crops & Calculator
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Start here if you want the fastest route to better Stardew Valley profit. This homepage is the hub: use it
            to choose between the crop calculator, best-crop guides, greenhouse strategy, and artisan profit decisions.
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Use the calculator when you want exact numbers. Use the guides when you need a decision framework for Year 1,
            keg vs jar, greenhouse planning, or long-term money making.
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
          <Link href="/blog/best-crops-year-1" className={ENTRY_LINK_CLASS}>
            <div aria-hidden className="absolute right-4 top-4 text-xl opacity-80 transition group-hover:scale-110">
              🌱
            </div>
            <span className="inline-flex rounded-full border border-[#6f8b3c]/55 bg-[#e7f1c8] px-2.5 py-1 text-xs font-semibold text-[#4f6727]">Year 1</span>
            <h2 className={`${ENTRY_TITLE_CLASS} mt-3`}>Year 1 Money Guide</h2>
            <p className={ENTRY_DESC_CLASS}>
              Best crops and strategies for your first year. Start here if you&apos;re new or restarting.
            </p>
          </Link>

          <Link href="/guides/greenhouse-profit-guide" className={ENTRY_LINK_CLASS}>
            <div aria-hidden className="absolute right-4 top-4 text-xl opacity-80 transition group-hover:scale-110">
              🏡
            </div>
            <span className="inline-flex rounded-full border border-[#7c4d2e]/35 bg-white/55 px-2.5 py-1 text-xs font-semibold text-[#5c3d23]">Long-term</span>
            <h2 className={`${ENTRY_TITLE_CLASS} mt-3`}>Greenhouse Strategy</h2>
            <p className={ENTRY_DESC_CLASS}>
              Plan long-term greenhouse output, crop choice, and machine throughput for stable income.
            </p>
          </Link>

          <Link href="/blog/keg-vs-jar-profit-guide" className={ENTRY_LINK_CLASS}>
            <div aria-hidden className="absolute right-4 top-4 text-xl opacity-80 transition group-hover:scale-110">
              ⚗️
            </div>
            <h2 className={`${ENTRY_TITLE_CLASS} mt-8`}>Keg vs Jar Guide</h2>
            <p className={ENTRY_DESC_CLASS}>
              Decide when to use kegs vs preserves jars for the best gold per day return.
            </p>
          </Link>
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
