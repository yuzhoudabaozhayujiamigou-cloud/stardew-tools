import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-29T00:00:00Z";
const modifiedTime = "2026-03-29T00:00:00Z";
const fromPath = "/blog/stardew-valley-year-2-farming-strategy";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Year 2 Farming Strategy (2026): Maximum Profit Guide";
const DESCRIPTION =
  "Complete Year 2 farming strategy for Stardew Valley — crop selection, Greenhouse Ancient Fruit pipeline, artisan scaling, gold targets, and how to hit 100,000g+ per season.";

const FAQ_ITEMS = [
  {
    question: "How much money should I have at the start of Year 2?",
    answer:
      "A well-optimised Year 1 run typically ends with 30,000g–80,000g in the bank. Aim for at least 20,000g before Spring Year 2 begins so you can buy Strawberry Seeds at the Egg Festival on Day 13 and still afford early Greenhouse infrastructure investments.",
  },
  {
    question: "What is the best crop for Year 2 Spring?",
    answer:
      "Strawberries are the highest-return outdoor Spring crop when planted on Day 1 from stockpiled seeds (bought at the Year 1 Egg Festival). They harvest twice before season end and deliver roughly 1,120g per tile under the Tiller profession. Combine them with a fully planted Greenhouse to maximise total Spring income.",
  },
  {
    question: "When should I plant Ancient Fruit in the Greenhouse?",
    answer:
      "Plant Ancient Fruit seeds in the Greenhouse as soon as you obtain them — ideally in Winter Year 1 or Spring Year 2. The crop takes 28 days to mature and then produces every 7 days indefinitely. A full 116-tile Greenhouse running Ancient Fruit Wine generates roughly 261,000g per harvest cycle.",
  },
  {
    question: "How many Kegs do I need in Year 2?",
    answer:
      "Start Year 2 Spring with at least 24 Kegs, scale to 60 by Summer, and push past 100 by Fall. Each Keg costs 30 Wood, 1 Copper Bar, 1 Iron Bar, and 1 Oak Resin. At 100 Kegs processing Starfruit Wine you can convert a single Summer harvest into over 400,000g of artisan goods.",
  },
  {
    question: "What is a realistic gold target for Year 2?",
    answer:
      "With Greenhouse Ancient Fruit, outdoor artisan crops, and a growing Keg network, most players can hit 100,000g by end of Spring, 200,000g–300,000g by end of Summer, and 500,000g–700,000g total by end of Year 2. These figures assume the Artisan profession and at least 60 Kegs operating continuously.",
  },
  {
    question: "Should I choose Artisan or Agriculturist at Farming Level 10 for Year 2?",
    answer:
      "Artisan is almost always the correct choice. The 40% bonus to all artisan goods (Wine, Juice, Pickles, Cheese) compounds with every Keg you add. Agriculturist speeds up crop growth by 10%, which has diminishing value once you have Greenhouse crops running year-round and full sprinkler coverage outdoors.",
  },
] as const;

const MILESTONE_ROWS = [
  {
    season: "Spring Y2 Start",
    target: "20,000g–80,000g",
    priority: "Strawberry Seeds + Greenhouse planting",
    note: "Cash from Y1 harvest + winter foraging funds Day 1 seeds.",
  },
  {
    season: "Spring Y2 End",
    target: "100,000g+",
    priority: "First Greenhouse Ancient Fruit harvest + Strawberry Wine",
    note: "Greenhouse wine starts arriving; outdoor Strawberry double-harvest shipped.",
  },
  {
    season: "Summer Y2 End",
    target: "200,000g–350,000g",
    priority: "Starfruit Wine full pipeline + Hops Pale Ale",
    note: "60+ Kegs processing Starfruit Wine is the primary wealth driver.",
  },
  {
    season: "Fall Y2 End",
    target: "400,000g–600,000g",
    priority: "Cranberry Wine + Sweet Gem Berry stockpile",
    note: "Pile wine into storage; Sweet Gem Berry sells raw at 3,000g each.",
  },
  {
    season: "Winter Y2",
    target: "500,000g–700,000g total",
    priority: "Process stockpiled wine, build to 100+ Kegs",
    note: "No outdoor crops — focus entirely on artisan goods pipeline and Keg construction.",
  },
] as const;

const KEG_ROWS = [
  {
    phase: "Spring Y2 (Day 1)",
    kegs: "24",
    input: "Ancient Fruit Wine + Strawberry Wine",
    cycleValue: "~54,000g per batch",
    notes: "Minimum viable operation. Prioritise Greenhouse wine first.",
  },
  {
    phase: "Summer Y2 (Day 1)",
    kegs: "60",
    input: "Starfruit Wine",
    cycleValue: "~345,000g per batch",
    notes: "Scale aggressively. Each Starfruit Wine = 6,300g with Artisan.",
  },
  {
    phase: "Fall Y2 (Day 1)",
    kegs: "100",
    input: "Cranberry Wine + Ancient Fruit Wine",
    cycleValue: "~500,000g+ per batch",
    notes: "100 Kegs is the Year 2 endgame floor for serious wealth scaling.",
  },
  {
    phase: "Winter Y2",
    kegs: "100+",
    input: "Stockpiled Fall crops + continuous Greenhouse harvest",
    cycleValue: "Passive processing",
    notes: "Build more Kegs with stockpiled Oak Resin and metal bars. Aim for 150+ entering Year 3.",
  },
] as const;

// ─── CSS constants (mirror fishing guide exactly) ───────────────────────────
const CARD =
  "rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 shadow-sm ring-1 ring-yellow-900/10";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";
const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

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

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Table of Contents</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#year2-turning-point">
          1) Year 2: the wealth turning point
        </a>
        <a className={TOC_LINK} href="#year1-vs-year2">
          2) Year 1 vs Year 2 comparison
        </a>
        <a className={TOC_LINK} href="#spring-strategy">
          3) Spring Year 2 strategy
        </a>
        <a className={TOC_LINK} href="#summer-strategy">
          4) Summer Year 2 strategy
        </a>
        <a className={TOC_LINK} href="#fall-strategy">
          5) Fall Year 2 strategy
        </a>
        <a className={TOC_LINK} href="#greenhouse-operations">
          6) Greenhouse full-year operations
        </a>
        <a className={TOC_LINK} href="#keg-expansion">
          7) Keg expansion plan
        </a>
        <a className={TOC_LINK} href="#gold-milestones">
          8) Gold milestones by season
        </a>
        <a className={TOC_LINK} href="#faq">
          9) FAQ
        </a>
      </div>
    </nav>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-7 text-[#5c4033]/95">{children}</div>
    </aside>
  );
}

function MilestoneTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[860px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Season</th>
            <th className="px-3 py-2">Gold Target</th>
            <th className="px-3 py-2">Priority Action</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {MILESTONE_ROWS.map((row, index) => (
            <tr
              key={row.season}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.season}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.target}</td>
              <td className="px-3 py-3">{row.priority}</td>
              <td className="px-3 py-3">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KegTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[860px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Phase</th>
            <th className="px-3 py-2">Kegs</th>
            <th className="px-3 py-2">Input Crop</th>
            <th className="px-3 py-2">Batch Value (Artisan)</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {KEG_ROWS.map((row, index) => (
            <tr
              key={row.phase}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.phase}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.kegs}</td>
              <td className="px-3 py-3">{row.input}</td>
              <td className="px-3 py-3">{row.cycleValue}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StardewValleyYear2FarmingStrategyPage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-year-2-farming-strategy", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    publisher: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    image: [`${url}/opengraph-image`],
    about: [
      "stardew valley year 2 farming",
      "ancient fruit greenhouse",
      "starfruit wine profit",
      "keg expansion strategy",
      "artisan goods scaling",
    ],
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Year 2 Farming Strategy" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border border-[#7c4d2e]/20 bg-white/35 px-6 py-8 shadow-sm ring-1 ring-yellow-900/10 sm:px-10 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Year 2 Strategy • Artisan Scaling • Greenhouse Pipeline
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              Year 2 is the single biggest inflection point in a Stardew Valley playthrough. In Year 1
              you were reacting — scrambling for seeds, upgrading tools, figuring out what to ship.
              In Year 2 you finally have the infrastructure, the Greenhouse, and the artisan pipeline
              to shift from survival mode to systematic wealth accumulation. This guide gives you
              a concrete season-by-season execution plan: what to plant, when to process, how many
              Kegs to build, and exactly what gold targets to aim for each quarter.
            </p>
            <p className={P}>
              Use the{" "}
              <Link className={LINK} href="/">Profit Calculator</Link>{" "}
              alongside this guide to model your specific crop mix and verify wine revenue before
              committing seeds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>
            </div>
          </header>

          <Toc />

          {/* ── Section 1: Year 2 Turning Point ── */}
          <section id="year2-turning-point" className={CARD}>
            <h2 className={H2}>Year 2: The Wealth Turning Point</h2>
            <p className={P}>
              Most players finish Year 1 with some combination of a few upgraded tools, a barn or
              coop, and a bank balance anywhere from 15,000g to 80,000g depending on how aggressively
              they farmed. That is enough to survive. It is not enough to scale.
            </p>
            <p className={P}>
              The real transformation in Year 2 comes from three converging factors: the Greenhouse
              becomes a 24/7 money machine running Ancient Fruit Wine, your Keg count is large enough
              to process entire harvests into artisan goods, and your outdoor fields shift from
              subsistence crops to high-margin artisan inputs. The result is that each season of
              Year 2 produces more gold than all of Year 1 combined — provided you execute the
              pipeline correctly.
            </p>
            <p className={P}>
              The key mindset shift: stop thinking about raw crop value and start thinking about
              throughput. A Starfruit sells for 750g. The same Starfruit processed into Wine with
              the Artisan profession sells for 6,300g. Your job in Year 2 is to maximise the number
              of crops that pass through a Keg before they reach Pierre&apos;s shipping box.
            </p>
            <Callout title="Year 2 Core Rule">
              Every crop that can be turned into Wine or Juice should be. Raw crop sales are only
              justified when you need immediate cash flow and cannot afford to wait out a Keg cycle.
            </Callout>
          </section>

          {/* ── Section 2: Year 1 vs Year 2 ── */}
          <section id="year1-vs-year2" className={CARD}>
            <h2 className={H2}>Year 1 vs Year 2: What Actually Changes</h2>
            <p className={P}>
              Understanding the gap between your Year 1 position and your Year 2 capability is
              essential for planning. Here is what the comparison looks like across the most
              important dimensions:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff9ea] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Year 1 Situation</p>
                <ul className="mt-2 space-y-1">
                  <li className={LI}>Bank: 15,000g–80,000g</li>
                  <li className={LI}>Tools: Copper or Steel tier</li>
                  <li className={LI}>Kegs: 0–24 (if you prioritised them)</li>
                  <li className={LI}>Greenhouse: Locked or just unlocked</li>
                  <li className={LI}>Sprinklers: Basic or Quality</li>
                  <li className={LI}>Crops: Single-season, raw-sell strategy</li>
                  <li className={LI}>Annual income: 30,000g–120,000g</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#f9efd8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Year 2 Position</p>
                <ul className="mt-2 space-y-1">
                  <li className={LI}>Bank: 50,000g+ entering Spring</li>
                  <li className={LI}>Tools: Steel to Iridium tier</li>
                  <li className={LI}>Kegs: 24 → 100+ through the year</li>
                  <li className={LI}>Greenhouse: Operational with 116 tiles</li>
                  <li className={LI}>Sprinklers: Iridium (full farm coverage)</li>
                  <li className={LI}>Crops: Artisan inputs + Wine pipeline</li>
                  <li className={LI}>Annual income: 300,000g–700,000g+</li>
                </ul>
              </div>
            </div>
            <p className={P}>
              The biggest practical difference is the Greenhouse. In Year 1 it either does not exist
              or is just coming online. In Year 2 it runs Ancient Fruit every 7 days for the entire
              year, generating a baseline income stream that completely decouples you from seasonal
              crop dependency.
            </p>
          </section>

          {/* ── Section 3: Spring Strategy ── */}
          <section id="spring-strategy" className={CARD}>
            <h2 className={H2}>Year 2 Spring Strategy</h2>
            <p className={P}>
              Spring Year 2 has one non-negotiable rule: plant Strawberries on Day 1. Every day
              of delay costs you a harvest. If you bought Strawberry Seeds at the Year 1 Egg Festival
              (Day 13 of Spring Y1) and stockpiled them, you have everything you need. If you did not,
              this is the single most important habit to build before Year 2 starts.
            </p>

            <h3 className={`mt-5 ${H3}`}>Outdoor Field: Strawberries + Rhubarb</h3>
            <p className={P}>
              Fill your main field with Strawberries. They take 8 days to first harvest, then
              re-harvest every 4 days, giving you two more harvests before season end (Days 8, 12,
              16, 20, 24). With Iridium Sprinklers and the Tiller profession, a 60-tile Strawberry
              field generates roughly 67,200g in raw crop value — and significantly more if you
              process them into Wine.
            </p>
            <p className={P}>
              Rhubarb fills any remaining tiles. It is a single-harvest crop (13-day grow time)
              that sells for 220g raw or 660g as Juice with Artisan. Less efficient than Strawberries
              per tile but a solid filler when you run out of Strawberry Seeds.
            </p>

            <h3 className={`mt-5 ${H3}`}>Greenhouse: Ancient Fruit Pipeline</h3>
            <p className={P}>
              If your Greenhouse is planted with Ancient Fruit from Winter Year 1, Spring Year 2 will
              see your first harvests landing around Day 7 (assuming seeds were planted in Winter).
              Each Ancient Fruit produces every 7 days indefinitely, meaning a full 116-tile
              Greenhouse delivers roughly 116 Ancient Fruits per week. Processed into Wine at
              2,250g per bottle (base) or 3,150g with Artisan, that is 261,000g to 365,400g
              per harvest cycle — on a 7-day loop.
            </p>
            <Callout title="Spring Y2 Gold Target: 100,000g by Day 28">
              With Greenhouse Ancient Fruit Wine coming in and two Strawberry harvests shipped, hitting
              100,000g by season end is achievable with 24+ Kegs. If you are below this, audit your
              Keg count first — raw crop sales are the likely bottleneck.
            </Callout>
          </section>

          {/* ── Section 4: Summer Strategy ── */}
          <section id="summer-strategy" className={CARD}>
            <h2 className={H2}>Year 2 Summer Strategy</h2>
            <p className={P}>
              Summer is when the Year 2 wealth machine goes full throttle. Two crops define this
              season: Starfruit and Hops. Each serves a different role in your artisan pipeline.
            </p>

            <h3 className={`mt-5 ${H3}`}>Starfruit Wine Pipeline</h3>
            <p className={P}>
              Starfruit is the highest-value single-harvest Summer crop. It costs 400g per seed
              from Sandy&apos;s Oasis shop and takes 13 days to mature, giving you two harvests in
              a full Summer season if planted on Day 1. Each Starfruit sells for 750g raw. In a Keg,
              it becomes Wine worth 4,500g base, or 6,300g with Artisan. On a field of 60 tiles
              with two harvests (120 Starfruit total), that is 756,000g of Wine value from a single
              season — before you even count Greenhouse output.
            </p>
            <p className={P}>
              The critical constraint is Keg count. Each Keg takes 7 days to ferment Wine. To
              process 120 Starfruit in a single 7-day window you need 120 Kegs. Realistically,
              aim for 60 Kegs by Summer Day 1 and stagger your two harvests across them.
            </p>

            <h3 className={`mt-5 ${H3}`}>Hops + Pale Ale: Daily Cash Flow</h3>
            <p className={P}>
              Hops matures in 11 days then produces every single day for the rest of the season.
              Raw Hops sells for just 25g, but processed into Pale Ale it yields 300g base or
              420g with Artisan. With 30 Hops tiles and 30 dedicated Kegs, you generate roughly
              12,600g per day in Pale Ale — a reliable cash flow bridge while Starfruit Wine ferments.
            </p>
            <Callout title="Summer Y2 Gold Target: 200,000g–350,000g by Day 28">
              Starfruit Wine is the primary driver. Hops Pale Ale provides daily liquidity.
              Greenhouse Ancient Fruit continues its 7-day cycle in the background.
              With 60 Kegs and full Artisan bonuses, this target is conservative.
            </Callout>
          </section>

          {/* Section 5: Fall Strategy */}
          <section id="fall-strategy" className={CARD}>
            <h2 className={H2}>Year 2 Fall Strategy</h2>
            <p className={P}>
              Fall Year 2 has two stars: Cranberries and Sweet Gem Berry. They serve different
              functions in your wealth system and both deserve dedicated tile allocation.
            </p>

            <h3 className={`mt-5 ${H3}`}>Cranberries: Volume Artisan Income</h3>
            <p className={P}>
              Cranberries produce every 5 days after an initial 7-day growth period, yielding
              2 Cranberries per plant per harvest. Raw value is 75g each, but Cranberry Wine
              sells for 1,125g base or 1,575g with Artisan. Over a full Fall season with
              4 harvests per tile, a 60-tile Cranberry field produces roughly 480 Cranberries
              worth 756,000g as Artisan Wine.
            </p>

            <h3 className={`mt-5 ${H3}`}>Sweet Gem Berry: Luxury Raw Sell</h3>
            <p className={P}>
              Sweet Gem Berry sells for 3,000g raw (4,500g gold quality) and cannot be
              processed into Wine or Juice. Plant Rare Seeds (1,000g each from the Travelling
              Cart) across 10 to 20 tiles. A 20-tile patch yields 60,000g to 90,000g in a
              single harvest with no processing overhead.
            </p>
            <Callout title="Fall Y2 Gold Target: 400,000g to 600,000g cumulative">
              Cranberry Wine pipeline plus Greenhouse Ancient Fruit plus Sweet Gem Berry raw
              sales push cumulative Year 2 wealth into the 400,000g to 600,000g range by
              Fall end. Winter Keg processing of stockpiled crops pushes it higher.
            </Callout>
          </section>

          {/* Section 6: Greenhouse Operations */}
          <section id="greenhouse-operations" className={CARD}>
            <h2 className={H2}>Greenhouse Full-Year Operations</h2>
            <p className={P}>
              The Greenhouse produces year-round, ignores seasons, and when filled with Ancient
              Fruit generates a 7-day compounding revenue cycle that never stops. Here is the
              planting timeline:
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Winter Y1 (ideal):</strong> Plant on Winter Day 1. Mature by Winter Day
                28 or Spring Y2 Day 1. First harvest arrives right as Year 2 begins.
              </li>
              <li className={LI}>
                <strong>Spring Y2 (fallback):</strong> Plant on Spring Day 1. First harvest
                arrives around Spring Day 28. You lose one cycle but reach full speed by Summer.
              </li>
              <li className={LI}>
                <strong>Full 116 tiles:</strong> The Greenhouse has 116 plantable tiles.
                Fill every tile. Do not leave empty space.
              </li>
              <li className={LI}>
                <strong>Seed Maker:</strong> Use one on your first Ancient Fruit harvest to
                propagate seeds and fill remaining tiles instead of buying at 2,000g each.
              </li>
            </ul>
            <p className={P}>
              For layout optimisation and advanced strategies, see the{" "}
              <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>.
            </p>
          </section>

          {/* Section 7: Keg Expansion */}
          <section id="keg-expansion" className={CARD}>
            <h2 className={H2}>Keg Expansion Plan: 24 to 60 to 100+</h2>
            <p className={P}>
              Your Keg count is the single most important infrastructure metric in Year 2.
              More Kegs means more crops converted into artisan goods per week.
            </p>
            <KegTable />
            <h3 className={`mt-5 ${H3}`}>Keg Crafting Recipe</h3>
            <p className={P}>
              Each Keg requires: 30 Wood, 1 Copper Bar, 1 Iron Bar, 1 Oak Resin.
              Oak Resin is the main bottleneck. Tap 20 to 30 Oak Trees through Winter Y1
              to stockpile enough resin for aggressive Year 2 Keg construction.
              Store Kegs in a Big Shed which holds 137 Kegs with a navigable layout.
            </p>
            <p className={P}>
              For the complete Keg vs Jar decision framework, see{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                Keg vs Jar: Complete Profit System
              </Link>.
            </p>
          </section>

          {/* Section 8: Gold Milestones */}
          <section id="gold-milestones" className={CARD}>
            <h2 className={H2}>Gold Milestones by Season</h2>
            <p className={P}>
              Use this table as a progress check. If you are significantly below a target,
              the most likely cause is insufficient Keg count or raw-selling crops that
              should be going into Wine.
            </p>
            <MilestoneTable />
            <p className={P}>
              These figures assume: Artisan profession, Iridium Sprinklers, full Greenhouse
              operation, and at least 60 Kegs by Summer. Players without Artisan should
              reduce targets by roughly 30%.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Check My Crop Profits
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className={CARD}>
            <h2 className={H2}>Frequently Asked Questions</h2>
            <dl className="mt-4 space-y-5">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question}>
                  <dt className="text-sm font-semibold text-[#4a321e]">{item.question}</dt>
                  <dd className={P}>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Next Steps */}
          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Year 2 is where the economy opens up completely. Players who hit 500,000g+ by
              Year 2 end are not doing anything exotic: they run the Greenhouse pipeline,
              scale Kegs, and route every artisan-eligible crop through processing.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Model your exact crop mix with the{" "}
                <Link className={LINK} href="/">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                Deep-dive Greenhouse layout in the{" "}
                <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                  Greenhouse Mastery Guide
                </Link>.
              </li>
              <li className={LI}>
                Compare Keg vs Jar returns in the{" "}
                <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                  Keg vs Jar: Complete Profit System
                </Link>.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-year-2-farming-strategy" />
      </main>

      <SiteFooter />
    </div>
  );
}
