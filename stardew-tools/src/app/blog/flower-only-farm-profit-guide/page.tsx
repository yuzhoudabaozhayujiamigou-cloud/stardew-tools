import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-06T00:00:00Z";
const modifiedTime = "2026-03-06T00:00:00Z";
const fromPath = "/blog/flower-only-farm-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Flower-Only Farm Guide: Best Flowers, Honey & Layouts for Profit in Stardew Valley";
const DESCRIPTION =
  "Complete guide to running a profitable flower-only farm in Stardew Valley. Best flowers by season, optimal beehouse layouts, honey economics, and a practical Year 1 roadmap.";

const FAQ_ITEMS = [
  {
    question: "What is the most profitable flower in Stardew Valley for honey?",
    answer:
      "Fairy Rose is the top honey flower in vanilla Stardew Valley. Fairy Rose Honey sells for 680g base and 952g with the Artisan profession, which is far above other flower honey values.",
  },
  {
    question: "How many beehouses do I need for a flower-only farm to feel profitable?",
    answer:
      "A practical starting target is 10-20 beehouses in Spring Year 1, then 40-60 by Summer/Fall. At that scale, flower honey starts to feel like a real income engine instead of side money.",
  },
  {
    question: "Can I make good money from flowers without beehouses?",
    answer:
      "Not really. Selling flowers directly is usually modest profit. In a flower-only strategy, beehouses are the multiplier that turns flowers into strong gold/day.",
  },
  {
    question: "Do I need Artisan profession for flower farms?",
    answer:
      "Yes, if profit is your goal. Artisan gives +40% to honey sell price and is the single highest-impact profession for a honey-focused farm.",
  },
  {
    question: "What should I do in winter on a flower-only farm?",
    answer:
      "Use winter for infrastructure: craft beehouses, prep materials, and improve layouts. For income, rely on stored products, artisan processing, and Ginger Island setups if unlocked.",
  },
  {
    question: "How does beehouse range work with flowers?",
    answer:
      "A beehouse checks a 5-tile radius in each direction from the house. If multiple flowers are in range, the nearest flower determines honey type. If no flower is in range, you get Wild Honey.",
  },
  {
    question: "Should I turn Fairy Rose Honey into mead?",
    answer:
      "No. Fairy Rose Honey is worth much more sold directly than converted to mead. Mead is usually better for Wild Honey or low-value honey when you have spare keg capacity.",
  },
  {
    question: "Can I produce honey inside the greenhouse in vanilla 1.6?",
    answer:
      "No. In vanilla Stardew Valley, beehouses placed indoors (including the greenhouse) do not produce honey. For year-round flower honey in vanilla, use outdoor year-round zones like Ginger Island.",
  },
] as const;

const HONEY_ROWS = [
  { flower: "Wild Honey", season: "Any", base: 100, artisan: 140, perDay: 25 },
  { flower: "Tulip", season: "Spring", base: 160, artisan: 224, perDay: 40 },
  { flower: "Blue Jazz", season: "Spring", base: 200, artisan: 280, perDay: 50 },
  { flower: "Sunflower", season: "Summer/Fall", base: 260, artisan: 364, perDay: 65 },
  { flower: "Summer Spangle", season: "Summer", base: 280, artisan: 392, perDay: 70 },
  { flower: "Poppy", season: "Summer", base: 380, artisan: 532, perDay: 95 },
  { flower: "Fairy Rose", season: "Fall", base: 680, artisan: 952, perDay: 170 },
] as const;

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e]";
const P = "mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-6 text-[#5c4033]/90 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

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

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Table of contents
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#can-you-profit">
          1) Can you profit from a flower-only farm?
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#best-flowers-by-season">
          2) Best flowers by season (profit analysis)
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#honey-economics">
          3) Honey economics: why beehouses matter
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#optimal-layouts">
          4) Optimal beehouse layouts
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#year-1-roadmap">
          5) Year 1 flower farm roadmap
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#mistakes">
          6) Common mistakes to avoid
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#flower-vs-mixed">
          7) Flower-only vs mixed farm
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#advanced-tips">
          8) Advanced tips
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55 sm:col-span-2" href="#faq">
          9) FAQ
        </a>
      </div>
    </nav>
  );
}

export default function FlowerOnlyFarmProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("flower-only-farm-profit-guide", 3);

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
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_ITEMS.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Flower-Only Farm Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Flower-Only Farm • Honey Profit • Beehouse Layouts
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-06</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Focus keywords: flower only farm stardew valley, best flowers stardew profit
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Open the Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-honey-profit-guide">
                Read the Honey Deep Dive
              </Link>
            </div>
          </header>

          <Toc />

          <section id="can-you-profit" className={CARD}>
            <h2 className={H2}>Can You Actually Profit from a Flower-Only Farm?</h2>
            <p className={P}>
              Yes. A flower-only farm can be profitable in Stardew Valley, but only if you
              treat flowers as a <strong>honey engine</strong>, not as raw crops. Most flowers
              are just okay when sold directly. The big money starts when beehouses convert
              those flowers into high-value honey cycles every four days.
            </p>
            <p className={P}>
              The short version is simple: flower-only is a niche playstyle that works when
              you optimize three levers at the same time. First, scale your beehouse count,
              because beehouses determine your production capacity. Second, select flowers by
              season based on honey value, not seed aesthetics. Third, harvest on rhythm and
              avoid dead tiles where houses sit outside flower range.
            </p>
            <p className={P}>
              If you skip any one of those, your income falls fast. A pretty flower field with
              ten scattered beehouses feels weak. A deliberate layout with 60 houses around the
              right flowers can fund upgrades, animals, and tool progression consistently. That
              is why many players who try this style once think it is underpowered, then revisit
              it later and realize the setup logic matters more than the crop itself.
            </p>
            <ul className="mt-4 space-y-2">
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Low stress:</span> fewer replanting events than heavy crop rotation farms.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Predictable rhythm:</span> most value comes on clear 4-day honey cycles.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Strong fall spike:</span> Fairy Rose season can carry annual profit.
              </li>
            </ul>
            <p className={P}>
              If you want to model your exact field, use the
              {" "}
              <Link href="/calculator" className={LINK}>
                Stardew profit calculator
              </Link>
              {" "}
              before you commit resources. A one-minute simulation prevents expensive layout
              mistakes.
            </p>
          </section>

          <section id="best-flowers-by-season" className={CARD}>
            <h2 className={H2}>Best Flowers by Season (Profit Analysis)</h2>
            <p className={P}>
              For <strong>best flowers stardew profit</strong> decisions, compare honey output
              instead of raw flower sale price. The table below uses standard honey values with
              and without Artisan. Per-day value is normalized from one honey cycle every four days.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#7c4d2e]/30 bg-white/40">
              <table className="min-w-full text-left text-sm text-[#5c4033]/90">
                <thead className="bg-[#f6e7c6] text-xs uppercase tracking-[0.08em] text-[#6f4b2a]/85">
                  <tr>
                    <th className="px-4 py-3">Flower</th>
                    <th className="px-4 py-3">Season</th>
                    <th className="px-4 py-3">Honey (Base)</th>
                    <th className="px-4 py-3">Honey (Artisan)</th>
                    <th className="px-4 py-3">Base g/day/house</th>
                  </tr>
                </thead>
                <tbody>
                  {HONEY_ROWS.map((row) => (
                    <tr key={row.flower} className="border-t border-[#7c4d2e]/15">
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">{row.flower}</td>
                      <td className="px-4 py-3">{row.season}</td>
                      <td className="px-4 py-3">{row.base}g</td>
                      <td className="px-4 py-3">{row.artisan}g</td>
                      <td className="px-4 py-3">{row.perDay}g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Spring: Blue Jazz first, Tulip as backup</h3>
            <p className={P}>
              Blue Jazz is usually the best spring honey flower in pure value terms. Tulip is
              still usable when cash is tight or you want a cheaper start, but Blue Jazz gives a
              better honey floor per house. In Year 1, the winning spring plan is not perfect
              optimization; it is building momentum: get enough flowers down, then craft your first
              10-20 beehouses as fast as possible.
            </p>
            <p className={P}>
              If your materials are limited, prioritize coverage over symmetry. One healthy flower
              zone with compact houses beats two half-finished areas where some houses produce only
              Wild Honey.
            </p>

            <h3 className={`${H3} mt-6`}>Summer: Poppy for peak value, Sunflower for convenience</h3>
            <p className={P}>
              Summer is where flower farms start to scale. Poppy gives the strongest summer honey
              value and is the standard pick if your goal is pure gold. Summer Spangle is solid,
              while Sunflower is the convenience option: lower honey value but easier season bridge
              into Fall because it can continue growing there.
            </p>
            <p className={P}>
              Practical rule: if you can replant and maintain clean zones, run Poppy. If you play
              fewer in-game days per week and want less maintenance, run Sunflower lanes with heavy
              beehouse density.
            </p>

            <h3 className={`${H3} mt-6`}>Fall: Fairy Rose is the profit season</h3>
            <p className={P}>
              Fall is where a flower-only farm justifies itself. Fairy Rose Honey at 680g base (952g
              with Artisan) is far ahead of other options. For example, replacing Poppy Honey with
              Fairy Rose Honey adds 300g per house per cycle before professions. With 60 houses and
              5 cycles, that is 90,000g extra base profit in a single season.
            </p>
            <p className={P}>
              This is why many experienced players design the entire year around Fall prep: enough
              maple syrup, coal, and iron for more beehouses, plus field organization so Fairy Rose
              coverage is immediate and clean.
            </p>

            <h3 className={`${H3} mt-6`}>Winter: no outdoor flowers, so plan your transition</h3>
            <p className={P}>
              In vanilla, there are no outdoor flower crops in Winter, and beehouses are inactive
              indoors (including greenhouse). That means Winter is mostly an infrastructure and
              transition month for flower farms: craft materials, redesign paths, and prepare for
              Spring Day 1. If you have Ginger Island unlocked, outdoor year-round flower honey can
              smooth this gap.
            </p>
          </section>

          <section id="honey-economics" className={CARD}>
            <h2 className={H2}>Honey Economics: Why Beehouses Matter</h2>
            <p className={P}>
              The core economics of <strong>honey profit stardew valley</strong> are straightforward:
              one beehouse outputs one honey every four days. Base Wild Honey is 100g. A nearby flower
              upgrades that same cycle into flavored honey with a higher value. This means flower-only
              success is mostly a multiplication problem.
            </p>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/30 bg-white/45 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">Quick formulas</p>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-[#5c4033]/90">
                <li>Season revenue = beehouse count × honey value × number of harvest cycles</li>
                <li>Cycle time = 4 days (outdoors, non-winter)</li>
                <li>Artisan revenue = honey value × 1.4</li>
              </ul>
            </div>

            <p className={P}>
              Example: 50 houses in Fall at Fairy Rose value with Artisan and 5 full cycles:
              50 × 952g × 5 = 238,000g. The same setup with Wild Honey would be 50 × 140g × 5 = 35,000g.
              The flower choice difference alone is 203,000g in one season. That is why beehouse + flower
              pairing beats flower selling by a wide margin.
            </p>
            <p className={P}>
              Beehouse range is also critical. Each house checks a five-tile radius, and the nearest
              flower decides honey type. If a house sits outside range, it downgrades to Wild Honey and
              drags your average output down. Layout precision is not cosmetic; it is direct income.
            </p>
            <p className={P}>
              One more economic trap: do not auto-keg premium honey. Mead sells at a flat value, so
              converting high-tier honey (especially Fairy Rose) usually destroys value. Keg Wild Honey
              only when you have spare processing capacity and no better inputs.
            </p>
          </section>

          <section id="optimal-layouts" className={CARD}>
            <h2 className={H2}>Optimal Beehouse Layouts</h2>
            <p className={P}>
              The best layout depends on your playstyle: max density, easy harvesting, or year-round
              expansion planning. Use one layout style consistently per zone so pathing and replanting
              stay predictable.
            </p>

            <div className="mt-5 space-y-5">
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-white/45 p-4">
                <h3 className={H3}>Layout 1: Dense Grid (Max Coverage)</h3>
                <p className={P}>
                  One central flower with tightly packed houses around it. Best when your priority is
                  maximum houses per tile.
                </p>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-[#7c4d2e]/25 bg-[#fff9ea] p-3 text-xs leading-5 text-[#5c4033]/90">
{`B B B B B
B B B B B
B B F B B
B B B B B
B B B B B

B = Beehouse
F = Flower (center anchor)`}
                </pre>
                <p className="mt-3 text-sm leading-6 text-[#5c4033]/90">
                  <strong>Pros:</strong> highest output density.
                  {" "}
                  <strong>Cons:</strong> harder movement and slower manual collection if you do not
                  use clear lanes.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-white/45 p-4">
                <h3 className={H3}>Layout 2: Row Layout (Easy Access)</h3>
                <p className={P}>
                  Alternate honey rows and walking rows. Slightly less efficient tile use, much easier
                  collection and maintenance in long sessions.
                </p>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-[#7c4d2e]/25 bg-[#fff9ea] p-3 text-xs leading-5 text-[#5c4033]/90">
{`B B B B B . B B B B B
. . . . . F . . . . .
B B B B B . B B B B B
. . . . . F . . . . .
B B B B B . B B B B B

. = walkway lane`}
                </pre>
                <p className="mt-3 text-sm leading-6 text-[#5c4033]/90">
                  <strong>Pros:</strong> low friction harvesting, clean visual zones.
                  {" "}
                  <strong>Cons:</strong> a bit less dense than full packing.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-white/45 p-4">
                <h3 className={H3}>Layout 3: Greenhouse Hybrid (Year-Round Variant)</h3>
                <p className={P}>
                  Use greenhouse as flower staging plus nearby outdoor honey zones in year-round regions.
                  In vanilla 1.6, indoor greenhouse beehouses do not produce, so true year-round Fairy Rose
                  honey comes from outdoor year-round maps (like Ginger Island) or modded greenhouse rules.
                </p>
                <p className={P}>
                  <strong>Pros:</strong> stable winter income path once year-round outdoor area is unlocked.
                  {" "}
                  <strong>Cons:</strong> requires late-game unlocks or custom rules.
                </p>
              </div>
            </div>

            <p className={P}>
              If you are still tuning pathing and spacing, this pairs well with
              {" "}
              <Link href="/blog/greenhouse-layout-guide" className={LINK}>
                Greenhouse Layout Guide
              </Link>
              {" "}
              for tile discipline and movement planning.
            </p>
          </section>

          <section id="year-1-roadmap" className={CARD}>
            <h2 className={H2}>Year 1 Flower Farm Roadmap</h2>
            <p className={P}>
              Year 1 is about proving the model, not maxing theoretical gold. Your mission is to build
              enough beehouses early, survive the Winter gap, and hit Fall with a layout ready for Fairy Rose.
            </p>

            <h3 className={`${H3} mt-6`}>Spring Year 1</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Plant Blue Jazz as the default flower zone and keep it compact.</li>
              <li className={LI}>Craft your first 10-20 beehouses. Even 12-15 changes your cash flow.</li>
              <li className={LI}>Prioritize maple syrup taps early so beehouse crafting does not stall.</li>
              <li className={LI}>Sell honey consistently; avoid hoarding unless you need fixed cash timing.</li>
            </ul>

            <h3 className={`${H3} mt-6`}>Summer Year 1</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Transition to Poppy zones for value, or Sunflower for lower maintenance.</li>
              <li className={LI}>Expand to 40-60 beehouses as resources allow.</li>
              <li className={LI}>Reserve field lanes now so Fall flower swap is quick and clean.</li>
              <li className={LI}>Start collecting extra coal and iron to avoid Fall crafting bottlenecks.</li>
            </ul>

            <h3 className={`${H3} mt-6`}>Fall Year 1</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Plant Fairy Roses immediately and treat this as your profit season.</li>
              <li className={LI}>Use Speed-Gro/Deluxe Speed-Gro if it helps secure one extra honey cycle.</li>
              <li className={LI}>Harvest honey on schedule; this season can finance most Year 2 expansion.</li>
              <li className={LI}>Do not keg Fairy Rose Honey unless you intentionally accept lower value.</li>
            </ul>

            <h3 className={`${H3} mt-6`}>Winter Year 1</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Process spare low-value honey only if you have idle kegs.</li>
              <li className={LI}>Rebuild and optimize layout geometry for Spring Day 1 deployment.</li>
              <li className={LI}>Craft missing houses and pre-stage flower seed budget.</li>
              <li className={LI}>If unlocked, move part of operations to year-round outdoor areas.</li>
            </ul>

            <p className={P}>
              For players who want a more general early-game crop baseline before specializing, read
              {" "}
              <Link href="/blog/year-1-spring-crops-profit-guide" className={LINK}>
                Year 1 Spring Crops Profit Guide
              </Link>
              .
            </p>
          </section>

          <section id="mistakes" className={CARD}>
            <h2 className={H2}>Common Mistakes to Avoid</h2>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              <li className="ml-5 list-decimal">
                <span className="font-semibold text-[#4a321e]">Planting flowers without enough beehouses.</span>
                {" "}
                Flowers alone are weak profit. If beehouse count is low, the strategy cannot scale.
              </li>
              <li className="ml-5 list-decimal">
                <span className="font-semibold text-[#4a321e]">Ignoring Fairy Rose in Fall.</span>
                {" "}
                This is the biggest annual value spike. Skipping it removes the strongest edge of flower-only farming.
              </li>
              <li className="ml-5 list-decimal">
                <span className="font-semibold text-[#4a321e]">Bad placement that leaves houses out of range.</span>
                {" "}
                A single tile mistake can downgrade a house to Wild Honey. Check every zone after planting.
              </li>
              <li className="ml-5 list-decimal">
                <span className="font-semibold text-[#4a321e]">No winter plan.</span>
                {" "}
                Flower farms have a seasonal income gap. You need a stockpile, processing plan, or year-round area.
              </li>
              <li className="ml-5 list-decimal">
                <span className="font-semibold text-[#4a321e]">Auto-converting premium honey to mead.</span>
                {" "}
                Mead has fixed value and can be a downgrade versus high-tier flower honey.
              </li>
              <li className="ml-5 list-decimal">
                <span className="font-semibold text-[#4a321e]">Skipping Artisan profession.</span>
                {" "}
                A 40% multiplier on honey is too large to ignore in a honey-centric economy.
              </li>
            </ol>
          </section>

          <section id="flower-vs-mixed" className={CARD}>
            <h2 className={H2}>Flower-Only vs Mixed Farm: Profit Comparison</h2>
            <p className={P}>
              Flower-only and mixed farms are both valid. The tradeoff is usually ceiling vs simplicity.
              Flower-only gives steady, low-stress cycles. Mixed farms can earn more, but demand more
              replanting, processing logistics, and daily decision overhead.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#7c4d2e]/30 bg-white/40">
              <table className="min-w-full text-left text-sm text-[#5c4033]/90">
                <thead className="bg-[#f6e7c6] text-xs uppercase tracking-[0.08em] text-[#6f4b2a]/85">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Flower-Only Farm</th>
                    <th className="px-4 py-3">Mixed Farm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#7c4d2e]/15">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Profit ceiling</td>
                    <td className="px-4 py-3">Medium to high (strong in Fall)</td>
                    <td className="px-4 py-3">Highest overall with full optimization</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/15">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Daily management</td>
                    <td className="px-4 py-3">Low to medium</td>
                    <td className="px-4 py-3">Medium to high</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/15">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Seasonal volatility</td>
                    <td className="px-4 py-3">High dependence on Fall + planning</td>
                    <td className="px-4 py-3">More diversified income streams</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/15">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Best fit</td>
                    <td className="px-4 py-3">Casual and low-stress play</td>
                    <td className="px-4 py-3">Min-max and high attention runs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={P}>
              A realistic benchmark: a well-built flower-only setup with 60+ houses and good Fall execution
              can fund core upgrades and leave extra capital for side systems. A mixed farm usually overtakes
              total annual gold when you add optimized kegs, animals, and high-value crop chains, but it asks
              for more active management.
            </p>
            <p className={P}>
              If you are unsure which direction fits your schedule, compare both with the
              {" "}
              <Link href="/calculator" className={LINK}>
                calculator
              </Link>
              {" "}
              and pair this with
              {" "}
              <Link href="/blog/stardew-valley-artisan-profit-guide" className={LINK}>
                Artisan Profit Guide
              </Link>
              {" "}
              for processing bottleneck logic.
            </p>
          </section>

          <section id="advanced-tips" className={CARD}>
            <h2 className={H2}>Advanced Tips</h2>
            <ul className="mt-4 space-y-3">
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Artisan is critical:</span>
                {" "}
                +40% honey value is the biggest single upgrade for this playstyle.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Speed-Gro on Fairy Rose:</span>
                {" "}
                if growth acceleration gives one extra Fall cycle, the return can be massive across many houses.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Harvest timing trick:</span>
                {" "}
                honey type is decided when collected, so avoid careless early pickups right before flower bloom changes.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">One flower type per zone:</span>
                {" "}
                mixed flower clusters can cause nearest-flower inconsistencies and lower average value.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Multiplayer specialization:</span>
                {" "}
                one player handles planting and zone resets, another handles harvest/processing/logistics.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Use links as an ops stack:</span>
                {" "}
                combine this guide with
                {" "}
                <Link href="/blog/stardew-honey-profit-guide" className={LINK}>
                  Stardew Honey Profit Guide
                </Link>
                {" "}
                and
                {" "}
                <Link href="/blog/greenhouse-layout-guide" className={LINK}>
                  Greenhouse Layout Guide
                </Link>
                {" "}
                to keep decisions consistent.
              </li>
            </ul>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c4033]/90 sm:text-base">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next Step: Run Your Own Numbers</h2>
            <p className={P}>
              Flower-only farming works best when your beehouse count, flower choice, and season timing match
              your actual schedule. Use the calculator to test 20, 40, and 60 house scenarios, then pick the
              one you can execute consistently.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/calculator" className={CTA_CLASS}>
                Compare Flower Setups in Calculator
              </Link>
              <Link href="/blog/stardew-valley-artisan-profit-guide" className={SUB_CTA_CLASS}>
                Review Artisan Multipliers
              </Link>
              <Link href="/blog" className={SUB_CTA_CLASS}>
                Browse More Guides
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-8">
          <BlogReadNext posts={readNextPosts} currentSlug="flower-only-farm-profit-guide" />
        </div>

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
