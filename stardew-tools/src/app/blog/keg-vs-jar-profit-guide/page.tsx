import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";

const publishedTime = "2026-02-27T00:00:00Z";
const modifiedTime = "2026-02-27T00:00:00Z";
const url = "https://www.stardewprofit.com/blog/keg-vs-jar-profit-guide";

const TITLE = "Keg vs Preserve Jar (Profit Guide): What to Build First in Stardew Valley";
const DESCRIPTION =
  "A complete keg vs preserve jar profit guide: what earns more, what scales faster, and how to decide based on your crop mix, time, and machine bottlenecks.";

const FAQ = [
  {
    question: "Do kegs always make more profit than preserve jars?",
    answer:
      "Not always. Kegs usually win on profit per item for fruit (wine) and many vegetables (juice), but jars can win when your limiting factor is time (faster cycles), when you are early-game and machine capacity is low, or when the crop's keg output is relatively weak. The real answer is: choose the machine that matches your current bottleneck.",
  },
  {
    question: "Which is better early game: kegs or preserve jars?",
    answer:
      "Preserve jars are often easier to ramp because they process faster and can smooth income while you’re still building infrastructure. Kegs are a bigger long-term multiplier, but you feel their value most when you can keep them fed consistently.",
  },
  {
    question: "What should I put in kegs first?",
    answer:
      "High-value fruit is the classic answer (wine), but the best choice is the item you can supply consistently. If your harvests are irregular, use the jar for quick turnarounds and route your best fruit into kegs as you expand.",
  },
  {
    question: "How many kegs or jars do I need?",
    answer:
      "Enough to match your average daily harvest flow. If you routinely have crops sitting in chests waiting to be processed, you’re under-built. If machines sit idle for days, you’re over-built for your current production. Use our calculators and a weekly check-in to right-size your setup.",
  },
  {
    question: "Is it worth mixing kegs and jars?",
    answer:
      "Yes. Mixing machines is often optimal because it lets you process different crop types efficiently and reduces idle time. A simple approach is: prioritize kegs for fruit and your highest base-value items, then use jars to absorb overflow and handle faster cycles.",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Stardew Profit`,
    description: DESCRIPTION,
    type: "article",
    url,
    images: [{ url: `${url}/opengraph-image` }],
    publishedTime,
    modifiedTime,
  },
};

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";

const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";

const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";

const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

export default function KegVsJarProfitGuidePage() {
  return (
    <div className="relative min-h-screen bg-[#f5e6c8] text-[#5c4033]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(255,255,255,0.35) 0 5%, transparent 6%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.26) 0 4%, transparent 5%), radial-gradient(circle at 18% 84%, rgba(255,255,255,0.22) 0 6%, transparent 7%), repeating-linear-gradient(135deg, rgba(124,77,46,0.10) 0 16px, rgba(124,77,46,0.06) 16px 32px)",
            backgroundColor: "#f5e6c8",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#e8cfa3]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <FaqJsonLd
          faqs={FAQ.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Keg vs Preserve Jar Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Artisan Profit Guide
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published: {publishedTime.slice(0, 10)}
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: {modifiedTime.slice(0, 10)}
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Reading time: ~12–15 min
              </span>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>Table of contents</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a className={TOC_LINK} href="#quick-rule">
                1) What to build first (3-phase plan)
              </a>
              <a className={TOC_LINK} href="#rule-of-thumb">
                2) The quick rule (choose based on your bottleneck)
              </a>
              <a className={TOC_LINK} href="#profit-vs-throughput">
                3) Profit vs throughput: the real keg vs jar question
              </a>
              <a className={TOC_LINK} href="#what-to-process">
                4) What to put in each machine (crop triage)
              </a>
              <a className={TOC_LINK} href="#capacity-planning">
                5) Capacity planning: how many machines do you need?
              </a>
              <a className={TOC_LINK} href="#greenhouse">
                6) Greenhouse + artisan pipeline (stable income)
              </a>
              <a className={TOC_LINK} href="#mistakes">
                7) Common mistakes that kill your profits
              </a>
              <a className={TOC_LINK} href="#faq">
                FAQ
              </a>
            </div>
          </section>

          <section id="quick-rule" className={CARD}>
            <h2 className={H2}>1) What to Build First (The 3-Phase Plan)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you&apos;re here for the decision: here&apos;s the most practical build-first plan that works for almost every
              save.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Early game</p>
                <p className="mt-2 text-sm leading-6">
                  Build <strong>preserves jars</strong> first. Faster cycles mean earlier cashflow for upgrades (bags,
                  tools, sprinklers). Aim for a small line you can keep fed.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Midgame</p>
                <p className="mt-2 text-sm leading-6">
                  Start mixing in <strong>kegs</strong>. Route your best fruit into kegs, keep jars absorbing vegetables
                  and overflow.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Late game</p>
                <p className="mt-2 text-sm leading-6">
                  Go <strong>keg-heavy</strong> once you have stable inputs (greenhouse) and enough machines to avoid
                  backlog.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Want the quick sanity-check? Use the calculator to compare two crops with two machine setups.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className={CTA_CLASS} href="/calculator">
                Open the Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/greenhouse-layout-guide">
                Greenhouse layout guide
              </Link>
            </div>
          </section>

          <section id="rule-of-thumb" className={CARD}>
            <h2 className={H2}>
              2) The quick rule: pick the machine that matches your bottleneck
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Most arguments about <strong>keg vs preserve jar</strong> assume you’re
              optimizing a single number. In real farms, the limiting factor is
              almost always one of these:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Machine-limited</p>
                <p className="mt-2 text-sm leading-6">
                  You harvest more items than you can process. Choose the machine
                  that gives the best value for your best items (often kegs for fruit)
                  and use jars to catch overflow.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Time-limited</p>
                <p className="mt-2 text-sm leading-6">
                  You can only play a few in-game hours/day. Faster cycles (jars)
                  can keep cash moving without complex routing.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Supply-limited</p>
                <p className="mt-2 text-sm leading-6">
                  You simply don’t harvest enough yet. Any machine is good;
                  prioritize what unlocks sooner and build toward your endgame plan.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want a baseline for selling crops directly (before processing),
              start with our{" "}
              <Link href="/calculator" className={LINK}>
                Crop Profit Calculator
              </Link>
              {" "}and build your processing plan around the crops that are already
              winning for your season.
            </p>
          </section>

          <section id="profit-vs-throughput" className={CARD}>
            <h2 className={H2}>
              2) Profit vs throughput: why kegs feel stronger (and jars feel smoother)
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              A keg often produces a larger jump in value per item. That makes it look
              universally better. But kegs also take longer to finish batches, so your
              gold arrives in larger, less frequent spikes. Preserve jars tend to finish
              sooner, so you get a steadier stream of income.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The correct comparison is not just profit per item, but profit per day of
              machine time given your supply. If your kegs are starved, their theoretical
              advantage doesn’t matter.
            </p>
            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff7e6]/70 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">A practical framing</p>
              <p className="mt-2 text-sm leading-6">
                If you have more crops than machine slots, route your best fruit into kegs
                first, then use jars for vegetables and overflow. If you have more machines
                than crops, use whatever you can keep running and keep expanding.
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              For a connected season-by-season plan that includes artisan processing, see{" "}
              <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                Stardew Valley Profit Guide 2026
              </Link>
              .
            </p>
          </section>

          <section id="what-to-process" className={CARD}>
            <h2 className={H2}>3) What to put in each machine (simple crop triage)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              You don’t need perfect spreadsheets to get most of the benefit. Use these
              rules to decide quickly:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Send to kegs first</p>
                <ul className="mt-2 space-y-2 text-sm leading-6">
                  <li>Fruit you can supply consistently (especially greenhouse fruit)</li>
                  <li>Your highest base-value harvest when machine slots are scarce</li>
                  <li>Anything you want as a long-term pipeline (wine aging later)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Use preserve jars for</p>
                <ul className="mt-2 space-y-2 text-sm leading-6">
                  <li>Vegetables and mid-value items where quick cycles matter</li>
                  <li>Overflow when kegs are backed up</li>
                  <li>Early-game scaling when you need money sooner for upgrades</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you’re planning around the greenhouse, you will usually prefer a keg-heavy
              strategy because the greenhouse gives you consistent input. Our{" "}
              <Link href="/blog/greenhouse-layout-guide" className={LINK}>
                Greenhouse Layout Guide
              </Link>
              {" "}helps you set up a layout that supports that pipeline.
            </p>
          </section>

          <section id="capacity-planning" className={CARD}>
            <h2 className={H2}>4) Capacity planning: how many machines do you need?</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The best answer is not a single number; it’s matching your average harvest
              to your machine throughput.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 sm:text-base">
              <li>Choose the crops you actually grow (seasonal fields + greenhouse).</li>
              <li>Estimate weekly harvest volume (rough is fine).</li>
              <li>Track one in-game week: do machines sit idle or do crops pile up?</li>
              <li>Add machines until backlog disappears for your best items.</li>
            </ol>
            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want a dedicated deep dive, start with{" "}
              <Link href="/blog/how-many-kegs-do-i-need-quick-answer" className={LINK}>
                How Many Kegs Do I Need? (Quick Answer)
              </Link>
              .
            </p>
          </section>

          <section id="greenhouse" className={CARD}>
            <h2 className={H2}>5) Greenhouse + artisan pipeline: the most stable way to print gold</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The greenhouse is the moment your artisan strategy stops being seasonal and
              starts being permanent. With repeating crops and fruit trees, you can keep
              machines running year-round.
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 sm:text-base">
              <li>
                <Link href="/blog/best-greenhouse-crops-quick-answer" className={LINK}>
                  Best Greenhouse Crops (Quick Answer)
                </Link>
                {" "}for a fast recommendation.
              </li>
              <li>
                <Link href="/blog/ancient-fruit-wine-vs-starfruit-wine" className={LINK}>
                  Ancient Fruit Wine vs Starfruit Wine
                </Link>
                {" "}for the classic endgame comparison.
              </li>
            </ul>
          </section>

          <section id="mistakes" className={CARD}>
            <h2 className={H2}>6) Common mistakes that quietly kill profits</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Building only one machine type</p>
                <p className="mt-2 text-sm leading-6">
                  Mixed setups reduce idle time and let you process more of what you harvest.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Ignoring your sell-now needs</p>
                <p className="mt-2 text-sm leading-6">
                  Sometimes selling raw crops funds upgrades that increase total output (sprinklers, seeds, buildings).
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Overvaluing perfect math</p>
                <p className="mt-2 text-sm leading-6">
                  Simple routing beats a complicated plan you forget to execute.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Letting machines sit idle</p>
                <p className="mt-2 text-sm leading-6">
                  Idle time is lost money. Better supply or placement usually fixes it.
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 px-4 py-3 open:bg-white/55"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next steps</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want a fully connected profit plan (crops + machines + greenhouse), start here:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]"
              >
                Use the Crop Profit Calculator
              </Link>
              <Link
                href="/blog/stardew-valley-profit-guide-2026"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60"
              >
                Read Profit Guide 2026
              </Link>
            </div>
          </section>

          <footer className="pb-2 pt-1 text-xs text-[#6f4b2a]/80">
            <p>
              Note: This guide focuses on decision-making and routing, not exact per-crop processing spreadsheets. For crop ranking and
              season timing, use the calculator.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
