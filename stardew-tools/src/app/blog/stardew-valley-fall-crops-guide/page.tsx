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
const fromPath = "/blog/stardew-valley-fall-crops-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Best Fall Crops in Stardew Valley (2026): Complete Profit Guide with Calculator";
const DESCRIPTION =
  "Complete guide to fall crops in Stardew Valley with profit-per-day rankings, Cranberries vs Sweet Gem Berry vs Pumpkin comparison, processing vs raw selling analysis, and planting timeline calculator.";

const FAQ_ITEMS = [
  {
    question: "What is the best all-around Fall crop for most players?",
    answer:
      "Cranberries are usually the best all-around Fall choice because they combine strong per-tile seasonal income, repeat harvests, and easy scaling. Sweet Gem Berry can beat everything on paper for one-tile value, but it has high seed cost, no quality tiers, and no Artisan processing output.",
  },
  {
    question: "Are Sweet Gem Berries worth buying in Year 1 Fall?",
    answer:
      "They are worth it if you can plant on Day 1 and still protect enough liquidity for your normal farm loop. If buying Rare Seeds empties your cash and prevents core planting, the opportunity cost can outweigh the upside. Treat Sweet Gem Berry as a premium capital slot, not your entire field plan.",
  },
  {
    question: "Should I sell Cranberries raw or process them into jelly?",
    answer:
      "If you have jar capacity, Cranberry Jelly usually wins because Preserves Jar value is based on the formula 2x base crop value + 50g. With a 75g Cranberry base value, jelly becomes 200g before profession bonuses. Raw selling is still correct when your jars are the bottleneck and you need immediate cash.",
  },
  {
    question: "How late can I plant crops in Fall without losing harvests?",
    answer:
      "For high-value repeaters, every day matters. Cranberries planted on Day 1 deliver many more total harvests than Day 7 or Day 14. Sweet Gem Berry effectively requires Day 1 for a normal Fall outdoor harvest window. Pumpkin remains viable much later, but late planting still reduces your capital turnover speed.",
  },
  {
    question: "Does Iridium quality apply to every Fall crop?",
    answer:
      "Most standard Fall crops can roll quality and get large sale boosts at Gold or Iridium stars. Sweet Gem Berry is the key exception: it always sells as a fixed quality item and does not gain quality multipliers. That quality behavior is one reason Cranberries and Pumpkin remain attractive in quality-focused setups.",
  },
  {
    question: "When should I prioritize Fall crops versus greenhouse planning?",
    answer:
      "Use Fall to maximize end-of-year liquidity, then pivot that money into winter infrastructure and greenhouse scaling. If your long-term plan includes Ancient Fruit or Starfruit processing, compare Fall tile usage against your greenhouse roadmap and preserve machine capacity before locking your seed purchases.",
  },
] as const;

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
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

const FALL_CROP_ROWS = [
  {
    tier: "S",
    crop: "Sweet Gem Berry",
    seed: "1000g (Rare Seed)",
    pattern: "Single harvest (24 days)",
    sell: "3000g",
    goldPerDay: "~138g/day (Day 1 planting)",
    access: "Traveling Cart, then plant in Fall",
    note: "Highest single-tile value if planted early; no quality stars; no keg/jar processing.",
  },
  {
    tier: "S",
    crop: "Cranberries",
    seed: "2g seed (guide assumption)",
    pattern: "7 days + regrow every 5 days",
    sell: "75g/crop",
    goldPerDay: "~47g/day",
    access: "Fall Year 1+",
    note: "Best practical scaling crop for most farms; repeat harvests reduce replant labor.",
  },
  {
    tier: "A",
    crop: "Yam",
    seed: "60g",
    pattern: "Single harvest (10 days)",
    sell: "160g",
    goldPerDay: "~20g/day",
    access: "Fall Year 1+",
    note: "Simple, solid margin and easier cashflow than expensive premium seeds.",
  },
  {
    tier: "A",
    crop: "Amaranth",
    seed: "70g",
    pattern: "Single harvest (7 days)",
    sell: "150g",
    goldPerDay: "~19g/day",
    access: "Fall Year 1+",
    note: "Good short cycle crop when you need fast turnover or staggered planting blocks.",
  },
  {
    tier: "A",
    crop: "Pumpkin",
    seed: "100g",
    pattern: "Single harvest (13 days)",
    sell: "320g",
    goldPerDay: "~18g/day",
    access: "Fall Year 1+",
    note: "Great quality scaling and strong unit sale value; slower cycle than fast crops.",
  },
  {
    tier: "B",
    crop: "Artichoke",
    seed: "30g",
    pattern: "Single harvest (8 days)",
    sell: "160g",
    goldPerDay: "~16g/day",
    access: "Fall Year 2+ only",
    note: "Efficient but locked behind Year 2 progression, so not a Year 1 anchor.",
  },
  {
    tier: "B",
    crop: "Grape",
    seed: "60g",
    pattern: "10 days + regrow every 3 days",
    sell: "80g",
    goldPerDay: "~16g/day",
    access: "Fall Year 1+",
    note: "Steady repeater with low stress, but lower ceiling than top Fall money crops.",
  },
  {
    tier: "C",
    crop: "Bok Choy",
    seed: "50g",
    pattern: "Single harvest (4 days)",
    sell: "80g",
    goldPerDay: "~11g/day",
    access: "Fall Year 1+",
    note: "Useful for quick calendar fills and bundles; weak pure-profit endpoint.",
  },
  {
    tier: "C",
    crop: "Eggplant",
    seed: "20g",
    pattern: "5 days + regrow every 5 days",
    sell: "60g",
    goldPerDay: "~7g/day",
    access: "Fall Year 1+",
    note: "Cheap and easy, but low tile efficiency once better options are affordable.",
  },
  {
    tier: "C",
    crop: "Corn",
    seed: "150g",
    pattern: "14 days + regrow every 4 days",
    sell: "50g",
    goldPerDay: "~5-7g/day in Fall",
    access: "Summer/Fall shared crop",
    note: "Great only if carried from Summer; fresh Fall Corn planting has weak ROI.",
  },
] as const;

const TIMELINE_ROWS = [
  {
    plantDay: "Day 1",
    cranberries: "5 harvests, strongest full-season scaling",
    sweetGem: "Harvests in Fall, full ~138g/day scenario",
    pumpkin: "2 full cycles possible with tight calendar",
    summary: "Best day for every premium strategy because you maximize both count and flexibility.",
  },
  {
    plantDay: "Day 7",
    cranberries: "3 harvests, large drop versus Day 1",
    sweetGem: "Misses normal Fall harvest window unless speed modifiers apply",
    pumpkin: "1 reliable cycle, optional filler crop afterward",
    summary: "Still workable for repeaters, but single huge crops lose their edge quickly.",
  },
  {
    plantDay: "Day 14",
    cranberries: "2 harvests, roughly half of Day 1 volume",
    sweetGem: "No outdoor Fall harvest in normal conditions",
    pumpkin: "1 late cycle only, low capital turnover",
    summary: "Late planting should prioritize low-risk cash conversion, not long-payback bets.",
  },
] as const;

const QUALITY_ROWS = [
  {
    quality: "Normal",
    multiplier: "1.00x",
    pumpkinExample: "320g",
    cranberryExample: "75g/crop",
    comment: "Baseline value and minimum expectation for any raw-sale plan.",
  },
  {
    quality: "Silver",
    multiplier: "1.25x",
    pumpkinExample: "400g",
    cranberryExample: "~94g/crop",
    comment: "Meaningful bump once farming level and fertilizer reliability improve.",
  },
  {
    quality: "Gold",
    multiplier: "1.50x",
    pumpkinExample: "480g",
    cranberryExample: "~113g/crop",
    comment: "Gold stars dramatically raise raw-selling viability when processing capacity is capped.",
  },
  {
    quality: "Iridium",
    multiplier: "2.00x",
    pumpkinExample: "640g",
    cranberryExample: "150g/crop",
    comment: "High-end quality turns strong crops into elite cash spikes per harvest day.",
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

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Table of Contents</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#why-fall-matters">
          1) Why Fall is the decision season
        </a>
        <a className={TOC_LINK} href="#all-fall-crops-ranked">
          2) Full Fall crop profit ranking table
        </a>
        <a className={TOC_LINK} href="#cranberries-vs-sweet-gem">
          3) Cranberries vs Sweet Gem Berry
        </a>
        <a className={TOC_LINK} href="#processing-cranberry-jelly">
          4) Processing route: Cranberry Jelly vs raw
        </a>
        <a className={TOC_LINK} href="#planting-timeline">
          5) Day 1 / Day 7 / Day 14 timeline impact
        </a>
        <a className={TOC_LINK} href="#iridium-quality">
          6) Iridium quality bonus explained
        </a>
        <a className={TOC_LINK} href="#calculator-cta">
          7) Profit calculator workflow
        </a>
        <a className={TOC_LINK} href="#execution-framework">
          8) Practical execution framework
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

function CropRankingTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[1160px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Tier</th>
            <th className="px-3 py-2">Crop</th>
            <th className="px-3 py-2">Seed cost</th>
            <th className="px-3 py-2">Harvest pattern</th>
            <th className="px-3 py-2">Sell value</th>
            <th className="px-3 py-2">Approx gold/day</th>
            <th className="px-3 py-2">Availability</th>
            <th className="px-3 py-2">Why it ranks here</th>
          </tr>
        </thead>
        <tbody>
          {FALL_CROP_ROWS.map((row, index) => (
            <tr
              key={row.crop}
              className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.tier}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.crop}</td>
              <td className="px-3 py-3">{row.seed}</td>
              <td className="px-3 py-3">{row.pattern}</td>
              <td className="px-3 py-3">{row.sell}</td>
              <td className="px-3 py-3">{row.goldPerDay}</td>
              <td className="px-3 py-3">{row.access}</td>
              <td className="px-3 py-3">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StardewValleyFallCropsGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-fall-crops-guide", 3);

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
      "stardew valley fall crops",
      "cranberries vs sweet gem berry",
      "pumpkin profit",
      "stardew preserves jar formula",
      "fall planting timeline",
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
            { name: "Best Fall Crops in Stardew Valley" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide • Fall Farming • Profit System
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">{TITLE}</h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              Fall is the final full farming season before Winter removes outdoor crop production. That
              single calendar fact changes the entire money conversation. In Spring and Summer, you can
              recover from weak planning because more planting windows are still ahead. In Fall, your
              crop choices decide how much cash, machine throughput, and strategic flexibility you carry
              into the end of Year 1 or into late-year scaling in future years. A good Fall schedule does
              not just increase this season&apos;s sales. It sets up your kegs, jars, tool upgrades, and
              winter progression at the exact point where many saves stall.
            </p>
            <p className={P}>
              This page is designed as a practical decision tool, not just a crop list. You will get a
              full tiered ranking table, a direct Cranberries vs Sweet Gem Berry decision framework,
              processing math for Cranberry Jelly, late-planting timeline penalties, and quality scaling
              implications for raw selling. The objective is simple: choose crops that match your current
              constraints in capital, labor, and machine slots. If your farm is still hand-watered, the
              optimal answer is different from a sprinkler-heavy field with spare preserve capacity.
            </p>
            <p className={P}>
              Keep one workflow in mind while reading. First, use this guide to choose your crop mix.
              Second, test that mix in the <Link className={LINK} href="/">stardewprofit.com calculator</Link>.
              Third, connect Fall output to your long-range systems such as{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                Keg vs Jar complete profit planning
              </Link>{" "}
              and your{" "}
              <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">
                best greenhouse crop roadmap
              </Link>
              . That full chain is where end-of-year money spikes come from.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published: <time dateTime={publishedTime}>2026-03-29</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-29</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">Reading time: 26-32 min</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/">
                Open stardewprofit.com Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-year-1-profit-guide-complete">
                Year 1 Profit System
              </Link>
            </div>
          </header>

          <Toc />

          <section id="why-fall-matters" className={CARD}>
            <h2 className={H2}>1) Why Fall is the decision season for your entire year-end economy</h2>
            <p className={P}>
              Fall is where short-term farming and long-term strategy overlap. Most players understand
              that Fall crops can be profitable, but the deeper issue is timing pressure. Winter is not
              another standard crop season. Outdoor fields pause, which means every tile and every day in
              Fall has amplified importance. If you leave gold on the table now, there is no immediate
              outdoor replant cycle to recover it next month. That is why high-performing Fall plans
              usually prioritize predictability, repeat harvest behavior, and machine compatibility rather
              than chasing one flashy number.
            </p>
            <p className={P}>
              The economic role of Fall can be summarized in three jobs. Job one: convert land and labor
              into liquid gold before Winter. Job two: convert that gold into infrastructure that keeps
              earning when outdoor fields shut down. Job three: protect optionality so you can pivot based
              on what you unlock next, such as greenhouse scale, artisan processing, or skill profession
              bonuses. If a crop plan looks good in isolation but breaks one of those jobs, it is usually
              weaker than it appears. For example, a high-value single harvest crop may underperform in a
              real farm if it blocks your ability to fund processing machines or seed transitions.
            </p>
            <p className={P}>
              Another common mistake is evaluating only total seasonal revenue and ignoring cashflow
              timing. A crop that pays once at the end can look strong on paper, while a repeater pays
              several times and supports compounding decisions during the same season. That difference is
              why Cranberries remain a dominant practical answer for many players even when premium crops
              advertise bigger top-line sale values. Repeater cashflow keeps your farm operational: buying
              fertilizer in time, replacing seeds after mistakes, and funding tools before key weather
              windows. You are not just maximizing sale number per harvest. You are maximizing decision
              power per week.
            </p>
            <p className={P}>
              Finally, Fall decisions should be connected to processing capacity. If your jars and kegs
              are already overloaded, you may prefer crops with stronger raw-sale behavior or cleaner
              quality scaling. If you have spare jar slots, lower raw-value crops can become stronger via
              conversion formulas. That is why this guide keeps comparing raw and processed paths instead
              of pretending one universal answer exists for every save state.
            </p>
            <Callout title="Working rule for Fall">
              Build a crop mix that earns quickly, scales safely, and still leaves budget room for winter
              upgrades. Profit is not just final sale value. Profit is sale value plus strategic freedom.
            </Callout>
          </section>

          <section id="all-fall-crops-ranked" className={CARD}>
            <h2 className={H2}>2) Full Fall crop profit rankings (S/A/B/C tiers, sorted by gold/day)</h2>
            <p className={P}>
              The table below ranks all key Fall crops by practical gold/day with the assumptions
              requested for this guide. Values are simplified comparison numbers meant for planning speed,
              not frame-perfect simulator math. The tier system reflects not only raw gold/day but also
              real-world factors like entry cost, calendar risk, and machine synergy.
            </p>

            <CropRankingTable />

            <h3 className={`${H3} mt-6`}>How to read tiers correctly</h3>
            <p className={P}>
              S tier includes crops that can carry a season and remain strong under imperfect execution.
              Sweet Gem Berry has elite single-tile output if planted on Day 1 with enough capital, while
              Cranberries dominate repeatable field economics for most normal farms. A tier is the
              reliable workhorse group: Yam, Amaranth, and Pumpkin all deliver strong returns with lower
              strategic fragility. B tier is typically situational or progression-limited value, where
              Artichoke and Grape can contribute but rarely define your entire field plan. C tier crops
              can still be useful for bundles, filler windows, or low-budget starts, yet they usually lose
              pure-profit races once stronger options are available.
            </p>
            <p className={P}>
              Notice the critical Corn caveat: it performs very differently depending on whether it was
              planted in Summer and carried into Fall. Carried Corn can be acceptable passive value. Fresh
              Fall Corn planting is usually weak because the first harvest arrives late relative to seed
              cost. This is the core lesson of timeline-aware farming. A crop can be decent in one
              calendar context and bad in another, even with the same final sale price.
            </p>
            <p className={P}>
              If you are uncertain which tier to trust for your own farm, start with this filter order:
              first remove crops you cannot afford at meaningful scale, then remove crops that miss your
              calendar window, then compare the remaining candidates against your machine bottlenecks. The
              best crop is the one that survives all three filters.
            </p>
            <Callout title="Ranking interpretation">
              Gold/day is your starting signal. Final decisions should also include seed affordability,
              time-to-cash, and whether your jar/keg line can absorb harvest volume.
            </Callout>
          </section>

          <section id="cranberries-vs-sweet-gem" className={CARD}>
            <h2 className={H2}>3) Cranberries vs Sweet Gem Berry: which one is actually better?</h2>
            <p className={P}>
              This is the most important Fall decision because both crops look like winners for different
              reasons. Sweet Gem Berry offers huge unit sale value and excellent day-one gold/day if you
              can execute perfectly. Cranberries offer repeat harvest cadence, lower strategic risk, and
              superior scale behavior in messy real farms. The right answer depends on what constraint is
              binding you: capital, calendar precision, labor, or machine capacity.
            </p>
            <h3 className={`${H3} mt-6`}>Case for Sweet Gem Berry</h3>
            <p className={P}>
              Sweet Gem Berry excels when you can commit early capital and protect the full 24-day growth
              window. In this scenario, each planted tile has exceptional gross return relative to many
              alternatives. It is also simple operationally: plant, wait, harvest once. That simplicity is
              attractive for players who want low daily interaction per tile. However, that simplicity
              hides a risk: one missed timing window destroys the whole plan. Planting late, running short
              on seeds, or sacrificing liquidity can turn this premium option into a trap.
            </p>
            <h3 className={`${H3} mt-6`}>Case for Cranberries</h3>
            <p className={P}>
              Cranberries win by consistency. Once planted, they keep paying every five days after the
              first maturity. That pattern creates multiple cash checkpoints inside one season, which helps
              you recover from mistakes and keep reinvesting. Cranberries also pair naturally with
              preserve-oriented farms because steady incoming harvests are easier to feed into machines
              than giant one-day dumps from large single-harvest fields. In practical terms, Cranberries
              often produce a better management experience and a better risk-adjusted economic result,
              especially for players still scaling infrastructure.
            </p>
            <h3 className={`${H3} mt-6`}>Decision framework</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Choose Sweet Gem Berry for premium capital slots planted on Day 1 only.</li>
              <li className={LI}>Choose Cranberries as the default core of your large Fall field.</li>
              <li className={LI}>Use Pumpkin as a stability layer when you want quality scaling and cleaner harvest blocks.</li>
              <li className={LI}>Avoid all-in single-crop plans unless your cashflow and calendar are fully controlled.</li>
            </ul>
            <p className={P}>
              The strongest real-world plan is often a split strategy: reserve a controlled number of
              premium tiles for Sweet Gem Berry, then let Cranberries carry most acreage. That approach
              captures upside without exposing the entire season to one timing risk.
            </p>
            <Callout title="Bottom line">
              Pure ceiling favors Sweet Gem Berry. Practical season-long reliability favors Cranberries.
              Most farms should optimize for reliability first, then add premium berries with spare cash.
            </Callout>
          </section>

          <section id="processing-cranberry-jelly" className={CARD}>
            <h2 className={H2}>4) Processing analysis: Cranberry Jelly vs raw selling</h2>
            <p className={P}>
              Processing decisions are where many Fall strategies gain or lose hidden value. The standard
              Preserves Jar formula is straightforward: output value equals 2x base crop value + 50g. For
              Cranberries with a 75g base crop value, that means Cranberry Jelly sells for 200g before
              profession multipliers. Raw selling stays at the crop&apos;s direct market value. This creates a
              clear value uplift per unit if your jar capacity is available.
            </p>
            <p className={P}>
              The immediate reaction is often, process everything. That is not always correct. Jars consume
              time and machine slots, and your farm may generate more harvest volume than your jars can
              absorb. In those situations, you need a throughput-aware policy: process the highest leverage
              portion and sell the overflow raw. Trying to force every item through jars can create
              bottlenecks that delay cashflow and reduce your ability to react to seed windows or upgrade
              timing.
            </p>
            <p className={P}>
              A practical model is to separate harvests into three streams. Stream one: immediate cash
              needs sold raw on harvest day. Stream two: guaranteed jar allocation for crops with strong
              conversion gain like Cranberries. Stream three: reserve stock for future machine windows when
              your farm is less busy. This mixed approach often beats rigid all-raw or all-processed rules
              because it preserves both liquidity and conversion upside.
            </p>
            <p className={P}>
              If you are building long-term processing architecture, compare this section with the complete{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                Keg vs Jar profit system
              </Link>{" "}
              guide. Fall output should feed the machine line you plan to scale through Winter and into
              greenhouse cycles, not operate as a disconnected one-season spike.
            </p>
            <Callout title="Quick equation">
              Cranberry Jelly value = 2 x 75g + 50g = 200g. If jars are idle, processing is typically the
              higher-value path. If jars are capped and cash is urgent, selective raw selling is rational.
            </Callout>
          </section>

          <section id="planting-timeline" className={CARD}>
            <h2 className={H2}>5) Planting timeline calculator logic (Day 1 vs Day 7 vs Day 14)</h2>
            <p className={P}>
              In Fall, planting date is not a small optimization. It is usually the main determinant of
              total seasonal return. Every delayed planting day cuts either harvest count, flexibility, or
              both. The table below shows the strategic consequence of planting on Day 1, Day 7, and Day
              14 for the three crops that most players compare: Cranberries, Sweet Gem Berry, and Pumpkin.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[1080px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Planting date</th>
                    <th className="px-3 py-2">Cranberries</th>
                    <th className="px-3 py-2">Sweet Gem Berry</th>
                    <th className="px-3 py-2">Pumpkin</th>
                    <th className="px-3 py-2">Practical takeaway</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMELINE_ROWS.map((row, index) => (
                    <tr
                      key={row.plantDay}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.plantDay}</td>
                      <td className="px-3 py-3">{row.cranberries}</td>
                      <td className="px-3 py-3">{row.sweetGem}</td>
                      <td className="px-3 py-3">{row.pumpkin}</td>
                      <td className="px-3 py-3">{row.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Why Day 1 is disproportionately powerful</h3>
            <p className={P}>
              Day 1 planting maximizes optionality. You keep every path open: repeater chains, late
              season filler cycles, and premium long-growth crops. If conditions change, you still have
              room to pivot. A late start removes those options and forces conservative decisions. This is
              exactly why strong players prepare Fall seeds before season rollover whenever possible.
            </p>
            <h3 className={`${H3} mt-6`}>What Day 7 means in practice</h3>
            <p className={P}>
              Day 7 is the first major penalty point. Cranberries lose substantial total harvest count,
              and Sweet Gem Berry becomes risky or impossible without growth-speed support. At this point,
              your strategy should shift from maximum theoretical return to stable guaranteed conversion.
              Pumpkin, Yam, and other medium-cycle crops become more attractive because they still close
              cleanly within the remaining calendar.
            </p>
            <h3 className={`${H3} mt-6`}>What Day 14 means in practice</h3>
            <p className={P}>
              Day 14 is generally a capital-protection phase. You prioritize crops with clear finish lines
              and minimal timing dependency. Repeater strategies are no longer at full strength, and
              premium slow growers are often off the table. If you reach Day 14 with major unplanted area,
              the right move is usually to maximize certainty, then preserve cash for winter upgrades and
              upcoming greenhouse acceleration.
            </p>
          </section>

          <section id="iridium-quality" className={CARD}>
            <h2 className={H2}>6) Iridium quality bonus: how star quality changes Fall crop value</h2>
            <p className={P}>
              Quality scaling is one of the least understood profit levers in seasonal farming. Raw selling
              value is not fixed if your crop can roll quality. As farming level rises and fertilizer
              choices improve, your share of Silver, Gold, and Iridium harvests increases. This means
              quality-aware crops such as Pumpkin and Cranberries can outperform conservative baseline
              estimates, especially when processing capacity is limited and more produce must be sold raw.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Quality tier</th>
                    <th className="px-3 py-2">Price multiplier</th>
                    <th className="px-3 py-2">Pumpkin example</th>
                    <th className="px-3 py-2">Cranberry example</th>
                    <th className="px-3 py-2">Profit interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {QUALITY_ROWS.map((row, index) => (
                    <tr
                      key={row.quality}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.quality}</td>
                      <td className="px-3 py-3">{row.multiplier}</td>
                      <td className="px-3 py-3">{row.pumpkinExample}</td>
                      <td className="px-3 py-3">{row.cranberryExample}</td>
                      <td className="px-3 py-3">{row.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={P}>
              The strategic implication is straightforward: if your farm already has strong quality rates,
              raw selling becomes more competitive and sometimes preferable for the overflow share of your
              harvest. If your quality rates are low and machine capacity is available, processing tends to
              create the bigger uplift. This is why quality and machine planning must be evaluated together.
            </p>
            <p className={P}>
              One special exception matters for this guide: Sweet Gem Berry does not benefit from normal
              quality star rolls. That fixed behavior reduces its flexibility compared with quality-scaling
              crops. It can still be elite value in the right setup, but it does not get the same upside
              from quality optimization strategies that can improve Cranberries or Pumpkin.
            </p>
            <Callout title="Quality decision rule">
              High quality + low machine capacity often favors more raw selling. Lower quality + spare jars
              often favors conversion. Build policy around your real bottleneck, not a static rule.
            </Callout>
          </section>

          <section id="calculator-cta" className={CARD}>
            <h2 className={H2}>7) Use the calculator to choose your exact Fall mix</h2>
            <p className={P}>
              Generic rankings are useful, but your farm has unique constraints: available gold, sprinkler
              coverage, skill levels, machine count, and how many in-game days you can actively manage
              harvests. That is why the final step should always be scenario testing. Open the
              calculator, enter your current assumptions, and compare at least three plans before locking
              your purchases.
            </p>
            <p className={P}>
              Start with a baseline Cranberry-heavy layout. Then test a mixed plan that includes a limited
              Sweet Gem Berry block. Finally, test a conservative Pumpkin/Yam plan for stability. Compare
              not only final season gold, but also day-by-day cash arrivals and machine pressure. The best
              outcome is often the plan with slightly lower peak but much lower execution risk.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/">
                Open stardewprofit.com (Calculator)
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-artisan-machines-roi-guide">
                Artisan Machine ROI Guide
              </Link>
            </div>
            <Callout title="Minimum calculator checklist">
              Compare Day 1 and Day 7 planting scenarios, include at least one processed-output test, and
              reserve enough gold for Winter upgrades before spending all cash on premium seeds.
            </Callout>
          </section>

          <section id="execution-framework" className={CARD}>
            <h2 className={H2}>8) Practical execution framework for Fall crop decisions</h2>
            <p className={P}>
              To convert this guide into results, run a fixed weekly decision loop. On each harvest wave,
              ask four questions in order. One: do I need immediate liquidity or can I hold output for
              processing? Two: are my jars or kegs the limiting factor this week? Three: does my remaining
              calendar still support repeat-harvest efficiency? Four: am I preserving enough gold for
              winter and greenhouse scaling? If you answer these consistently, your Fall economy becomes
              stable even when weather, events, or mistakes disrupt individual days.
            </p>
            <p className={P}>
              Keep crop roles clear. Cranberries are your default seasonal engine. Sweet Gem Berry is your
              premium capital deployment tool. Pumpkin is your quality-sensitive stability crop. Yam and
              Amaranth are flexible cycle fillers when your planting window shrinks. Corn is a carry-over
              play, not a fresh Fall anchor. Artichoke is efficient once unlocked, but because it is Year
              2+ it should not distort Year 1 planning. This role-based model prevents emotional
              over-commitment to one crop and gives you a robust fallback if market assumptions change.
            </p>
            <p className={P}>
              End-of-season transition matters just as much as in-season crop choice. In the last week of
              Fall, shift from maximizing raw harvest quantity to maximizing liquidity and machine queue
              quality. Selling some produce raw to fund strategic buys can outperform waiting for maximum
              processed value if those buys unlock winter productivity. Fall should end with cash, clear
              machine priorities, and a concrete greenhouse plan, not with large unsorted inventory piles.
            </p>
            <p className={P}>
              For integrated planning, pair this guide with the{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                complete keg vs jar system
              </Link>{" "}
              and then map the outcome to the{" "}
              <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">
                best greenhouse crops
              </Link>{" "}
              path you want to run after Fall. The goal is not just one strong season. The goal is a
              compounding profit engine across seasons.
            </p>
            <Callout title="Execution summary">
              Prioritize Day 1 planting, scale Cranberries as core, add Sweet Gem Berry selectively, and
              let machine capacity plus quality rates decide your raw-versus-processed split.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>9) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95 sm:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Fall crop optimization works best when it is connected to your whole farm economy. Use this
              page to lock your field mix, then use supporting guides to optimize machine throughput and
              post-Fall scaling.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Build your scenario in the <Link className={LINK} href="/">stardewprofit.com calculator</Link>.
              </li>
              <li className={LI}>
                Compare machine strategy with{" "}
                <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                  Keg vs Jar Complete Profit System
                </Link>
                .
              </li>
              <li className={LI}>
                Plan winter and long-term scaling with{" "}
                <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">
                  Best Greenhouse Crops in Stardew Valley
                </Link>
                .
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-fall-crops-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}
