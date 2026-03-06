import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const publishedTime = "2026-03-06T00:00:00Z";
const modifiedTime = "2026-03-06T00:00:00Z";
const url = "https://www.stardewprofit.com/blog/farm-profit-pillars";

const TITLE =
  "Stardew Valley Profit Guide: A Complete System (Crops, Greenhouse, Artisan, Animals, Mining)";
const DESCRIPTION =
  "A pillar profit guide for Stardew Valley: choose the right money-maker by game stage, compare crops vs greenhouse vs kegs/jars vs animals vs mining, and build a simple system that scales.";

const FAQ = [
  {
    question: "What is the best way to make money in Stardew Valley?",
    answer:
      "The best method changes by stage. Early game: high-value crops and quest cash flow. Mid game: processing (jars/kegs) plus a stable animal baseline. Late game: greenhouse wine (Ancient Fruit or Starfruit) supported by mining and efficient daily routines. The key is building a repeatable system, not chasing one-off windfalls.",
  },
  {
    question: "Keg vs Jar: which one should I build first?",
    answer:
      "If you can only build one line, jars are usually the best first step because they unlock profit earlier with lower material cost and faster throughput. Kegs eventually dominate for high-value fruit (wine scales hard), but they require more oak resin and iron.",
  },
  {
    question: "What should I grow in the greenhouse for maximum profit?",
    answer:
      "For long-term steady profit, Ancient Fruit is the classic choice because it regrows weekly and keeps kegs busy with minimal replanting. Starfruit can beat it for burst profit if you can keep replanting and your keg capacity is high.",
  },
  {
    question: "Are animals still worth it if I run a wine greenhouse?",
    answer:
      "Yes. Animals provide consistent daily income that smooths cash flow (especially in winter) and they convert your time into profit efficiently once automated (auto-grabbers, heaters, and optional auto-petters). Think of animals as your baseline, and artisan crops as your multiplier.",
  },
  {
    question: "How does mining fit into a profit strategy?",
    answer:
      "Mining is both direct profit (gems, bars, loot) and an enabler. Ore and coal are the bottlenecks for kegs, jars, and upgrades. A good mining loop accelerates every other pillar by unlocking materials faster.",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  alternates: {
    canonical: url,
  },
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
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";

function PillarTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5 text-xs font-semibold text-[#5c4033]/90">
      {children}
    </span>
  );
}

export default function FarmProfitPillarsPage() {
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
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
            { name: "Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Profit System • Pillar Guide
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <PillarTag>Published: {publishedTime.slice(0, 10)}</PillarTag>
              <PillarTag>Updated: {modifiedTime.slice(0, 10)}</PillarTag>
              <PillarTag>Reading time: ~16–22 min</PillarTag>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>Table of contents</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a className={TOC_LINK} href="#what-this-guide-is">
                1) What this guide is (and isn’t)
              </a>
              <a className={TOC_LINK} href="#profit-mindset">
                2) The profit mindset: throughput &amp; bottlenecks
              </a>
              <a className={TOC_LINK} href="#pillar-overview">
                3) The 5 profit pillars overview
              </a>
              <a className={TOC_LINK} href="#pillar-1-crops">
                4) Pillar #1: Seasonal crops
              </a>
              <a className={TOC_LINK} href="#pillar-2-greenhouse">
                5) Pillar #2: Greenhouse farming
              </a>
              <a className={TOC_LINK} href="#pillar-3-artisan">
                6) Pillar #3: Artisan processing (kegs/jars)
              </a>
              <a className={TOC_LINK} href="#pillar-4-animals">
                7) Pillar #4: Animals
              </a>
              <a className={TOC_LINK} href="#pillar-5-mining">
                8) Pillar #5: Mining profits (and materials)
              </a>
              <a className={TOC_LINK} href="#a-simple-roadmap">
                9) A simple roadmap: early → mid → late
              </a>
              <a className={TOC_LINK} href="#common-mistakes">
                10) Common mistakes that cap your income
              </a>
              <a className={TOC_LINK} href="#faq">FAQ</a>
            </div>
          </section>

          <section id="what-this-guide-is" className={CARD}>
            <h2 className={H2}>1) What this guide is (and isn’t)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Stardew Valley profit advice often sounds like “just do X” — plant Ancient Fruit,
              spam kegs, run Skull Cavern. That works… eventually. But it skips the real problem:
              most farms don’t fail because the player picked the “wrong” crop. They fail because
              their <strong>bottleneck</strong> (energy, time, sprinklers, ore, oak resin, or
              processing capacity) can’t support that plan.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              This pillar guide gives you a system to decide what to do next based on what you
              have right now. It also links out to deeper articles and calculators when you’re
              ready to optimize.
            </p>
          </section>

          <section id="profit-mindset" className={CARD}>
            <h2 className={H2}>2) The profit mindset: throughput &amp; bottlenecks</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Throughput</p>
                <p className="mt-2 text-sm leading-6">
                  How much value you can produce per day/week: crops harvested, machines
                  processed, animals tended, floors cleared in the mines.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Bottleneck</p>
                <p className="mt-2 text-sm leading-6">
                  The one resource you’re short on right now. Early game it’s often energy and
                  gold. Mid game it’s ore, coal, and oak resin. Late game it’s processing capacity.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Repeatability</p>
                <p className="mt-2 text-sm leading-6">
                  One-off profits are fun, but stable wealth comes from a loop you can repeat
                  every day. The best farms are boring… in a good way.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want a quick starting point, open the{" "}
              <Link className={LINK} href="/calculator">
                crop profit calculator
              </Link>{" "}
              and compare what’s actually best for your season and days left. Then use this guide
              to decide what to build next so your profit keeps scaling.
            </p>
          </section>

          <section id="pillar-overview" className={CARD}>
            <h2 className={H2}>3) The 5 profit pillars overview</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              You don’t need every pillar immediately. But you do want to know what each pillar is
              good at so you can stack them.
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Pillar #1 — Seasonal crops</p>
                <p className="mt-2 text-sm leading-6">
                  High ROI early because seeds are cheap relative to output. Sprinklers and farming
                  level make this scale fast.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Pillar #2 — Greenhouse farming</p>
                <p className="mt-2 text-sm leading-6">
                  Removes season limits. Best for long-term crops and stable processing lines.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Pillar #3 — Artisan processing</p>
                <p className="mt-2 text-sm leading-6">
                  The multiplier pillar. Kegs/jars turn good crops into great profits. This is where
                  the Artisan profession shines.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Pillar #4 — Animals</p>
                <p className="mt-2 text-sm leading-6">
                  Consistent daily income and great winter stability. Processing (cheese/mayo) turns
                  them into a reliable baseline.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Pillar #5 — Mining</p>
                <p className="mt-2 text-sm leading-6">
                  Direct loot profit plus the materials you need for everything else. If your farm
                  feels stuck, the mines are usually the answer.
                </p>
              </div>
            </div>
          </section>

          <section id="pillar-1-crops" className={CARD}>
            <h2 className={H2}>4) Pillar #1: Seasonal crops (your early cash engine)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Early on, crops are king because you can convert time into profit with very little
              infrastructure. The two biggest mistakes are (1) planting without checking the days
              left, and (2) buying seeds that don’t fit your watering capacity.
            </p>
            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
              <h3 className={H3}>Use the calculator the right way</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                <li>
                  Start with{" "}
                  <Link className={LINK} href="/calculator">
                    Crop Profit Calculator
                  </Link>
                  , set your season and days left.
                </li>
                <li>
                  Compare by <strong>gold/day</strong> when time is the bottleneck, and compare by
                  <strong> total profit</strong> when you’re trying to hit a goal (like a barn upgrade).
                </li>
                <li>
                  If you’re panicking late in a season, read:{" "}
                  <Link className={LINK} href="/blog/best-crops-10-days-left-quick-answer">
                    best crops with 10 days left
                  </Link>
                  .
                </li>
              </ul>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Want a year-1 focused crop plan? Use{" "}
              <Link className={LINK} href="/blog/best-crops-year-1">
                best crops for Year 1
              </Link>{" "}
              as your baseline, then adapt with your actual sprinkler count.
            </p>
          </section>

          <section id="pillar-2-greenhouse" className={CARD}>
            <h2 className={H2}>5) Pillar #2: Greenhouse farming (remove season limits)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The greenhouse is a turning point because it removes the seasonal reset. Once you can
              keep crops growing year-round, you can build stable processing lines and stop gambling
              on “next season will save me.”
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want the short answer:{" "}
              <Link className={LINK} href="/blog/best-greenhouse-crops-quick-answer">
                best greenhouse crops (quick)
              </Link>
              . If you want the full planning view (layout + processing + crop choices):{" "}
              <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">
                best greenhouse crops (full guide)
              </Link>
              .
            </p>
          </section>

          <section id="pillar-3-artisan" className={CARD}>
            <h2 className={H2}>6) Pillar #3: Artisan processing (kegs/jars = multiplier)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Processing is where most “rich farms” actually come from. A raw crop has a ceiling.
              Artisan goods push that ceiling up — but only if you can keep the machines running.
              Your real metric becomes: <strong>inputs per week</strong> and <strong>machine count</strong>.
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className={H3}>Kegs vs Jars: pick by bottleneck</h3>
                <p className="mt-2 text-sm leading-6">
                  If oak resin is your bottleneck, jars let you scale earlier. If your crops are
                  high-value fruit and you can sustain resin and iron, kegs will dominate over time.
                </p>
                <p className="mt-2 text-sm leading-6">
                  Deep dive:{" "}
                  <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">
                    keg vs jar profit guide
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className={H3}>Greenhouse → Keg pipeline</h3>
                <p className="mt-2 text-sm leading-6">
                  If you’re trying to “go full wine,” the greenhouse pipeline matters more than the
                  crop pick. Layout, harvest cadence, and keg count determine your ceiling.
                </p>
                <p className="mt-2 text-sm leading-6">
                  Next step:{" "}
                  <Link className={LINK} href="/blog/greenhouse-keg-empire-profit-guide">
                    greenhouse keg empire guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="pillar-4-animals" className={CARD}>
            <h2 className={H2}>7) Pillar #4: Animals (stable daily profit)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Animals aren’t just “extra income.” They’re stability. They turn a few minutes of
              daily routine into a consistent baseline that smooths your cash flow — especially in
              winter.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want exact animal comparisons and how to process products for the best ROI, use
              our{" "}
              <Link className={LINK} href="/blog/animal-profit-guide">
                animal profit guide
              </Link>
              .
            </p>
          </section>

          <section id="pillar-5-mining" className={CARD}>
            <h2 className={H2}>8) Pillar #5: Mining profits (and the materials to scale)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Even if you don’t love combat, mining is the fastest way to remove crafting
              bottlenecks. Ore and coal are the hidden “tax” on kegs, jars, and upgrades.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you’re aiming for big jumps in income, learn a repeatable mining loop:{" "}
              <Link className={LINK} href="/blog/skull-cavern-mining-profit-guide">
                Skull Cavern mining profit guide
              </Link>
              .
            </p>
          </section>

          <section id="a-simple-roadmap" className={CARD}>
            <h2 className={H2}>9) A simple roadmap: early → mid → late</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Early game</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                  <li>Use the crop calculator to avoid dead plantings.</li>
                  <li>Upgrade watering (sprinklers) ASAP.</li>
                  <li>Mine for ore to unlock machines.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Mid game</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                  <li>Start jars first if resin is tight.</li>
                  <li>Build a small animal baseline.</li>
                  <li>Unlock greenhouse and stabilize production.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Late game</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                  <li>Scale keg capacity to match harvest cadence.</li>
                  <li>Automate animals (grabbers, heaters).</li>
                  <li>Mine to keep materials from stalling you.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="common-mistakes" className={CARD}>
            <h2 className={H2}>10) Common mistakes that cap your income</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>
                <strong>Ignoring processing capacity.</strong> If you harvest more than you can process,
                you’re throwing away the biggest multiplier in the game.
              </li>
              <li>
                <strong>Buying seeds without checking days left.</strong> One wrong planting can wipe
                out a week of progress.
              </li>
              <li>
                <strong>Under-mining.</strong> Ore and coal are your machine budget. No materials = no scaling.
              </li>
              <li>
                <strong>Chasing a single pillar too early.</strong> A wine empire with zero mining and no
                sprinkler base will feel slow and frustrating.
              </li>
              <li>
                <strong>Skipping “boring” automation.</strong> Auto-grabbers, heaters, and clean layouts
                increase profit by reducing daily friction.
              </li>
            </ol>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4"
                >
                  <p className="text-sm font-semibold text-[#4a321e]">{item.question}</p>
                  <p className="mt-2 text-sm leading-6">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Keep reading</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you want to go deeper, start with the pieces that match your bottleneck:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              <li>
                <Link className={LINK} href="/calculator">
                  Crop Profit Calculator
                </Link>{" "}
                (best next decision)
              </li>
              <li>
                <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">
                  Keg vs Jar Profit Guide
                </Link>
              </li>
              <li>
                <Link className={LINK} href="/blog/animal-profit-guide">
                  Animal Profit Guide
                </Link>
              </li>
              <li>
                <Link className={LINK} href="/blog/skull-cavern-mining-profit-guide">
                  Skull Cavern Mining Profit Guide
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
