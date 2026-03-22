import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stardew Valley Crop Profit Calculator | StardewProfit.com",
  description:
    "Your hub for stardew profit guides, crop comparisons, secret note solutions, and quick answers. Find the best crops by season and maximize your farm gold.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Stardew Valley Crop Profit Calculator | StardewProfit.com",
    description:
      "Your hub for stardew profit guides, crop comparisons, secret note solutions, and quick answers. Find the best crops by season and maximize your farm gold.",
  },
  twitter: {
    card: "summary",
    title: "Stardew Valley Crop Profit Calculator | StardewProfit.com",
    description:
      "Your hub for stardew profit guides, crop comparisons, secret note solutions, and quick answers. Find the best crops by season and maximize your farm gold.",
  },
};

const ENTRY_LINK_CLASS =
  "group relative overflow-hidden rounded-[26px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 transition hover:-translate-y-0.5 hover:bg-[#f7efda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c8a3e] sm:p-6";

const ENTRY_TITLE_CLASS = "text-lg font-semibold text-[#4a321e] sm:text-xl";

const ENTRY_DESC_CLASS = "mt-2 text-sm leading-6 text-[#5f4228]/90";

const POPULAR_GUIDES = [
  {
    href: "/blog/best-crops-every-season",
    title: "Best Crops Every Season",
    description: "A simple season-by-season crop plan you can apply immediately.",
  },
  {
    href: "/blog/keg-vs-jar-profit-guide",
    title: "Keg vs Jar Guide",
    description: "See when to process with kegs vs jars for the best gold per day.",
  },
  {
    href: "/blog/year-1-spring-crops-profit-guide",
    title: "Year 1 Spring",
    description: "An early-game planting strategy built for realistic cash flow.",
  },
  {
    href: "/blog/greenhouse-layout-guide",
    title: "Greenhouse Layout",
    description: "Layout ideas that maximize regrowth crops and machine throughput.",
  },
  {
    href: "/blog/ancient-fruit-vs-starfruit",
    title: "Ancient Fruit vs Starfruit",
    description: "Compare long-term wine profit, effort, and seasonal flexibility.",
  },
  {
    href: "/blog/stardew-valley-artisan-profit-guide",
    title: "Artisan Guide",
    description: "Build a full artisan pipeline that scales from early to late game.",
  },
] as const;

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
    question: "Should I check Secret Note 22 for profit planning?",
    answer:
      "Secret Note 22 unlocks a key quest path, so many players reference it alongside farm planning. Use the quick answer page to avoid tunnel-panel mistakes.",
  },
  {
    question: "How is Secret Note 19 related to progression?",
    answer:
      "Secret Note 19 gives the Solid Gold Lewis statue path solution and helps clear a common progression blocker while you optimize the rest of your farm route.",
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
            Stardew Valley Profit Guide and Calculator
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Looking for better stardew profit, stardew profits routes, or a fast stardew valley profit answer? Start
            here. This homepage combines quick answers, route-specific note pages, and the crop calculator so you can
            decide what to plant in under a minute.
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Check the calculator first, then use one guide to confirm machine throughput and season timing before you
            spend seeds or artisan capacity.
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
            <a
              href="#popular-guides"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#7c4d2e]/65 bg-white/40 px-5 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:bg-white/60"
            >
              ↓ Popular Guides
            </a>
          </div>
        </header>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Quick Answer</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">
            Best first move for Stardew Valley profit
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
            Short answer: run your current season in the
            {" "}
            <Link
              href="/calculator"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              crop profit calculator
            </Link>
            , pick the best gold/day crop that still finishes on time, then confirm edge cases with one focused guide.
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#5f4228]/90 sm:grid-cols-2">
            <li>• Use days-left presets to avoid crops that cannot finish this season.</li>
            <li>• Validate high-value routes with keg/jar throughput before scaling.</li>
            <li>• Keep one quick reference for secret-note detours that affect route efficiency.</li>
            <li>• Re-check crop rankings whenever your profession or machine count changes.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
            >
              Open calculator
            </Link>
            <Link
              href="/secret-notes/22"
              className="inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8]/90 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#f6ebcf]"
            >
              Secret Note 22 answer
            </Link>
            <Link
              href="/secret-notes/19"
              className="inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8]/90 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#f6ebcf]"
            >
              Secret Note 19 answer
            </Link>
          </div>
        </section>

        <section id="popular-guides" className="mt-8 rounded-[28px] border-4 border-[#6f8b3c]/80 bg-[#e7f1c8]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5b6f2f]/80">Popular Guides</p>
          <h2 className="mt-1 text-xl font-semibold text-[#3f2d1b] sm:text-2xl">Read these first</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4d3c28]/90">
            Six high-signal blog guides for better crop choices, artisan processing, and greenhouse profit.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-2xl border-2 border-[#7c4d2e]/60 bg-[#fff8e8]/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#6f8b3c]/80 hover:bg-[#fffef4]"
              >
                <h3 className="text-base font-semibold text-[#4a321e]">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{guide.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-[#3f6f2c] transition group-hover:translate-x-0.5">
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

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
