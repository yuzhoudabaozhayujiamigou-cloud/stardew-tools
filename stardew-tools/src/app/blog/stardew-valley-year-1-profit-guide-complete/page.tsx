import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-07T00:00:00Z";
const modifiedTime = "2026-03-07T00:00:00Z";
const fromPath = "/blog/stardew-valley-year-1-profit-guide-complete";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Complete Year 1 Profit Guide in Stardew Valley: Seasonal Strategy, Milestones, and Mistake-Proof Scaling";
const DESCRIPTION =
  "Complete Stardew Valley Year 1 profit roadmap: Spring-Winter strategy, milestone priorities, greenhouse timing, artisan scaling, and costly mistakes to avoid.";

const FAQ_ITEMS = [
  {
    question: "What is the single best Year 1 money strategy in Stardew Valley?",
    answer:
      "There is no single crop or trick that wins every run. The best Year 1 strategy is a staged system: cash crops in Spring, throughput crops plus infrastructure in Summer, scaling and artisan conversion in Fall, and machine expansion plus planning in Winter.",
  },
  {
    question: "Should I rush the Greenhouse in Year 1?",
    answer:
      "Yes, if you can do it without collapsing your current cash flow. The Greenhouse is one of the highest-value unlocks in the game because it stabilizes crop supply and lets your artisan machines run year-round.",
  },
  {
    question: "How much gold should I have by the end of Spring Year 1?",
    answer:
      "A healthy benchmark is enough cash to comfortably buy Summer seeds, while also funding basic tool upgrades and a first wave of processing machines. The exact number depends on your playtime and mining consistency.",
  },
  {
    question: "Is it better to process crops or sell raw in Year 1?",
    answer:
      "Early Year 1, sell plenty of crops raw to preserve liquidity. As soon as preserves jars and kegs are online, shift high-value items into processing. Keep a cash buffer so your machine strategy does not starve seed purchases.",
  },
  {
    question: "Which season matters most for Year 1 profit?",
    answer:
      "Fall is the strongest scaling season in many runs because your infrastructure is finally mature. But Spring and Summer decisions still determine whether you enter Fall with enough machine capacity to capitalize.",
  },
  {
    question: "How do I avoid planting crops that cannot finish before season end?",
    answer:
      "Always check remaining days before buying seeds. Use the calculator with your exact season and day count, then compare gold/day and total return. This prevents dead plantings and wasted capital.",
  },
  {
    question: "Do animals belong in a Year 1 profit route?",
    answer:
      "Yes, but as a baseline income layer, not your only engine. Animals smooth daily cash flow while crops and artisan goods provide larger scaling spikes.",
  },
  {
    question: "How important is mining for profit if I mainly farm crops?",
    answer:
      "Mining is critical because ore, coal, and bars are bottlenecks for sprinklers, kegs, and jars. Even crop-focused runs stall without machine materials.",
  },
  {
    question: "What is the most common Year 1 mistake that costs players big money?",
    answer:
      "The most expensive pattern is overcommitting to one idea too early, such as planting beyond watering capacity or building machine plans without material supply. Sustainable Year 1 growth is a balancing act between cash flow and infrastructure.",
  },
] as const;

const SEASON_ROWS = [
  {
    season: "Spring",
    mainGoal: "Build cash flow and unlock first infrastructure",
    cropFocus: "Parsnip opener, potato/cauliflower/strawberry windows",
    infrastructure: "Backpack, early sprinklers, furnace line, coop/barn planning",
    target: "Enter Summer with enough seed capital and at least a starter machine plan",
  },
  {
    season: "Summer",
    mainGoal: "Scale throughput and prepare Community Center pushes",
    cropFocus: "Blueberry for consistency, melon for spikes, hops if keg path is ready",
    infrastructure: "Quality sprinklers, tool upgrades, jar/keg expansion",
    target: "Create repeatable weekly harvest cadence and ore supply stability",
  },
  {
    season: "Fall",
    mainGoal: "Convert strong crop volume into processed value",
    cropFocus: "Cranberry rhythm + pumpkin spikes + targeted specialty crops",
    infrastructure: "Large artisan expansion, storage and workflow cleanup",
    target: "Highest Year 1 earnings season with controlled backlog",
  },
  {
    season: "Winter",
    mainGoal: "Use no-outdoor-crop window for long-term setup",
    cropFocus: "Winter seeds where practical; prioritize prep over raw farming",
    infrastructure: "Machine burst, tree tapping, mine runs, layout redesign",
    target: "Start Year 2 with bottlenecks reduced and systems ready",
  },
] as const;

const MILESTONE_ROWS = [
  {
    phase: "Spring 1-7",
    checkpoints:
      "Secure food/energy loop, buy strategic seeds, start ore collection, avoid over-planting.",
    whyItMatters:
      "This week sets your pace. Bad liquidity here forces weak Summer decisions.",
  },
  {
    phase: "Spring 8-16",
    checkpoints:
      "Tool timing, early fertilizer choices, strawberry event optimization, first machine materials.",
    whyItMatters:
      "You establish whether your farm can scale beyond manual watering and random sales.",
  },
  {
    phase: "Spring 17-28",
    checkpoints:
      "Prepare Summer seed budget, queue key upgrades, lock mining routes, clear field layout.",
    whyItMatters:
      "Late Spring discipline prevents Summer day-1 chaos and missed planting windows.",
  },
  {
    phase: "Summer 1-14",
    checkpoints:
      "Execute crop mix by labor capacity, expand sprinklers, keep machine inputs steady.",
    whyItMatters:
      "Summer is where throughput starts to beat pure hustle if systems are built.",
  },
  {
    phase: "Summer 15-28",
    checkpoints:
      "Community Center progress, processing lanes, prep for Fall capital rotation.",
    whyItMatters:
      "You are deciding whether Fall becomes your breakout season or another scramble.",
  },
  {
    phase: "Fall 1-28",
    checkpoints:
      "Maintain high-value cadence, minimize idle machines, keep ore/coal flow active.",
    whyItMatters:
      "This is the strongest compounding window of Year 1 in most efficient runs.",
  },
  {
    phase: "Winter",
    checkpoints:
      "Mass craft, optimize farm lanes, secure resin and bars, plan Greenhouse utilization.",
    whyItMatters:
      "Winter decides your Year 2 ceiling by removing structural bottlenecks early.",
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
    <nav aria-label="Spis treści" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Spis treści
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#how-this-guide-works">
          1) How to use this Year 1 roadmap
        </a>
        <a className={TOC_LINK} href="#foundation-principles">
          2) The core profit principles
        </a>
        <a className={TOC_LINK} href="#spring-roadmap">
          3) Spring strategy in detail
        </a>
        <a className={TOC_LINK} href="#summer-roadmap">
          4) Summer strategy in detail
        </a>
        <a className={TOC_LINK} href="#fall-roadmap">
          5) Fall strategy in detail
        </a>
        <a className={TOC_LINK} href="#winter-roadmap">
          6) Winter strategy in detail
        </a>
        <a className={TOC_LINK} href="#milestones-priorities">
          7) Milestones and priority ladder
        </a>
        <a className={TOC_LINK} href="#common-mistakes">
          8) Common mistakes and fixes
        </a>
        <a className={TOC_LINK} href="#execution-checklists">
          9) Practical checklists and weekly loop
        </a>
        <a className={TOC_LINK} href="#faq">
          10) FAQ
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

export default function StardewValleyYear1ProfitGuideCompletePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-year-1-profit-guide-complete", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
      "stardew valley year 1 profit guide",
      "stardew valley seasonal crop strategy",
      "stardew valley milestone priorities",
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
            { name: "Complete Year 1 Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Przewodnik Year 1 • Seasonal Profit Route • Milestone Planning
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Opublikowano: <time dateTime={publishedTime}>2026-03-07</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Zaktualizowano: <time dateTime={modifiedTime}>2026-03-07</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Czas czytania: 24-30 min
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Otwórz kalkulator zysków
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/best-crops-year-1">
                Read: Best Crops Year 1
              </Link>
            </div>
          </header>

          <section className={CARD}>
            <figure>
              <Image
                src="/blog/year-1-profit-roadmap.svg"
                alt="Year 1 seasonal profit roadmap with Spring, Summer, Fall, and Winter priorities"
                width={1200}
                height={630}
                className="h-auto w-full rounded-2xl border border-[#7c4d2e]/35 bg-[#fff9ec]"
              />
              <figcaption className="mt-3 text-sm text-[#5c4033]/85">
                Visual checklist: keep cash flow, infrastructure, and machine throughput growing at the
                same time. If one lane stalls, total profit stalls.
              </figcaption>
            </figure>
          </section>

          <Toc />

          <section id="how-this-guide-works" className={CARD}>
            <h2 className={H2}>How to use this Year 1 roadmap</h2>
            <p className={P}>
              Most Stardew Valley Year 1 guides fail for one reason: they tell you what a perfect run
              does, not what your run should do when reality appears. You miss a watering day, forget a
              mine route, run out of coal, or spend too much gold before a key seed window. Then the
              original plan collapses and people assume they ruined the year. In practice, Year 1 profit
              is less about perfect execution and more about consistent decision quality. The right
              roadmap tells you what to do when plans drift, not only when everything goes exactly on
              script.
            </p>
            <p className={P}>
              This guide is built around that practical lens. You will not find impossible assumptions
              like unlimited energy, flawless skull cavern luck, or magically available materials on
              demand. Instead, each season is split into economic objectives, bottlenecks to watch,
              actionable steps, and fallback options. If you can keep those four pieces visible,
              profits continue scaling even in imperfect runs. The point is to turn your farm into a
              resilient system, not a fragile combo.
            </p>
            <p className={P}>
              Keep the <Link className={LINK} href="/calculator">crop profit calculator</Link> open as
              your decision engine whenever you buy seeds. Use this long-form roadmap as your operating
              manual: what to prioritize each week, what to delay safely, and what mistakes are too
              expensive to repeat. For season-specific tuning, pair this page with{" "}
              <Link className={LINK} href="/blog/year-1-spring-crops-profit-guide">
                Year 1 Spring Crops Profit Guide
              </Link>{" "}
              and <Link className={LINK} href="/blog/best-crops-year-1">Best Crops Year 1</Link>. For
              processing decisions, cross-reference{" "}
              <Link className={LINK} href="/blog/stardew-valley-artisan-profit-guide">
                the artisan system guide
              </Link>{" "}
              and <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">keg vs jar analysis</Link>.
            </p>
            <Callout title="Core operating rule">
              Ask this every week: <strong>What is my bottleneck right now?</strong> If the answer is
              water time, buy fewer seeds and prioritize sprinklers. If the answer is machine capacity,
              route output into jars and kegs. If the answer is raw gold, sell more unprocessed crops
              until liquidity recovers.
            </Callout>
          </section>

          <section id="foundation-principles" className={CARD}>
            <h2 className={H2}>The core profit principles for Year 1</h2>
            <h3 className={`${H3} mt-4`}>Principle 1: Liquidity beats theoretical max value</h3>
            <p className={P}>
              New players often chase highest possible per-item value and accidentally go broke between
              harvests. A farm with perfect theoretical ROI but no seed money is still a failing
              business. Year 1 is a cash-flow game first. You need enough gold for seeds, upgrades,
              emergency purchases, and infrastructure materials. This means part of your output should
              be sold raw early, even when processing would increase total value. Liquidity gives you
              optionality, and optionality compounds.
            </p>
            <h3 className={`${H3} mt-6`}>Principle 2: Throughput is the real multiplier</h3>
            <p className={P}>
              Profit scales when your farm can move more value per day with the same effort. Sprinklers,
              clean field lanes, chest placement, and machine routing are throughput tools. People talk
              about "best crop" as if crop selection alone determines wealth, but in mature Year 1 runs,
              execution speed and machine uptime can outperform small crop-choice differences. A 95%
              optimal crop with near-zero downtime beats a "perfect" crop strategy that sits in chests
              waiting for machines.
            </p>
            <h3 className={`${H3} mt-6`}>Principle 3: Treat every season as setup for the next one</h3>
            <p className={P}>
              Spring does not exist to maximize Spring profit alone. It exists to fund Summer expansion.
              Summer does not exist to look efficient in isolation; it exists to enter Fall with enough
              infrastructure to exploit high-value cycles. Winter is not dead time, it is your
              bottleneck-removal window for Year 2. When you plan with this chain in mind, your
              decisions become calmer and much more consistent.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Season</th>
                    <th className="px-3 py-2">Main goal</th>
                    <th className="px-3 py-2">Crop focus</th>
                    <th className="px-3 py-2">Infrastructure focus</th>
                    <th className="px-3 py-2">Exit target</th>
                  </tr>
                </thead>
                <tbody>
                  {SEASON_ROWS.map((row, index) => (
                    <tr
                      key={row.season}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.season}</td>
                      <td className="px-3 py-3">{row.mainGoal}</td>
                      <td className="px-3 py-3">{row.cropFocus}</td>
                      <td className="px-3 py-3">{row.infrastructure}</td>
                      <td className="px-3 py-3">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              If you want a broader systems view, read{" "}
              <Link className={LINK} href="/blog/farm-profit-pillars">
                Farm Profit Pillars
              </Link>{" "}
              after finishing this page. It explains how crops, greenhouse, artisan, animals, and
              mining connect into one compounding loop.
            </p>
          </section>

          <section id="spring-roadmap" className={CARD}>
            <h2 className={H2}>Spring strategy in detail (the launch phase)</h2>
            <p className={P}>
              Spring is where many Year 1 outcomes are quietly decided. The usual mistake is planting
              too much too early, burning all energy and time on watering, and then having nothing left
              for mining, quests, or infrastructure. If you cannot mine and process materials, your farm
              stays manual too long. A strong Spring plan balances three tracks: immediate cash crops,
              tool/material progression, and calendar-aware seed windows.
            </p>
            <p className={P}>
              Start with a modest planting footprint you can reliably water without exhausting your day.
              Reserve time for forage, fishing, and early mine progress because those activities prevent
              liquidity crises before your first meaningful crop cycles complete. As soon as the first
              profits arrive, decide whether your run is aiming for aggressive machine growth or steady
              mixed income. Both are valid, but your choices must stay coherent. Do not buy seeds like a
              machine-run farm while still playing like a hand-watered survival run.
            </p>
            <h3 className={`${H3} mt-6`}>Early Spring (Day 1-7): stabilize and scout</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Plant only what you can water with consistent energy left for progress tasks.</li>
              <li className={LI}>Keep a small emergency gold buffer before buying optional upgrades.</li>
              <li className={LI}>Prioritize chest placement and route clarity to cut walking downtime.</li>
              <li className={LI}>Begin ore collection immediately; machine scaling starts with bars, not wishful thinking.</li>
            </ul>
            <h3 className={`${H3} mt-6`}>Mid Spring (Day 8-16): commit to a direction</h3>
            <p className={P}>
              This is the decision window where many profitable farms separate from stalled farms. If
              you can maintain seed liquidity and material flow, begin preparing for recurring harvest
              rhythm crops and first preserves lines. If your energy economy is still fragile, stay
              conservative and keep cycle reliability high instead of chasing a stretched layout that
              fails two days later. Calculate every late-Spring seed purchase with remaining days logic.
              One avoidable dead planting can erase the advantage of multiple good choices.
            </p>
            <h3 className={`${H3} mt-6`}>Late Spring (Day 17-28): handoff setup for Summer</h3>
            <p className={P}>
              Late Spring profit is important, but transition quality matters more. Your mission is to
              enter Summer with seed cash, clear field organization, and a materials plan. Queue tool
              upgrades around rain windows where possible. Build a simple weekly schedule: harvest days,
              mine days, machine refill days, and shopping days. When Summer day 1 starts, you should be
              executing a prepared sequence, not improvising under pressure.
            </p>
            <Callout title="Action checklist: Spring exit test">
              <ul className="space-y-1">
                <li className={LI}>Can you buy your intended Summer seeds without selling critical reserves?</li>
                <li className={LI}>Do you have enough bars and coal to keep machine expansion alive?</li>
                <li className={LI}>Is your farm layout walkable and sprinkler-ready for fast Summer planting?</li>
                <li className={LI}>Did you validate late-planting choices with the calculator?</li>
              </ul>
            </Callout>
            <p className={P}>
              For precise late-season decision points, use{" "}
              <Link className={LINK} href="/blog/best-spring-crops-10-days-left">
                best spring crops with 10 days left
              </Link>{" "}
              and <Link className={LINK} href="/blog/spring-day-15-what-to-plant-profit">Spring Day 15 crop guide</Link>.
            </p>
          </section>

          <section id="summer-roadmap" className={CARD}>
            <h2 className={H2}>Summer strategy in detail (throughput expansion)</h2>
            <p className={P}>
              Summer is the first true scaling season for most Year 1 farms. Crop options become more
              powerful, but so do mistakes. Players who overload on fields without automation lose their
              mine time, then lose material supply, then lose machine growth, and finally enter Fall with
              impressive harvest screenshots but weak net profit infrastructure. Your Summer objective is
              controlled expansion: increase output while preserving the time needed to feed future growth.
            </p>
            <p className={P}>
              Build around cadence. Recurring crops like blueberry provide predictable income beats that
              can fund machine components and tool progression. High-value burst crops can still be part
              of the plan, but only if they fit your labor capacity and machine pipeline. Every time you
              plant, ask where that harvest goes: raw sale, jar queue, keg queue, or storage buffer. If
              you do not know the destination before planting, you are likely producing backlog instead
              of profit.
            </p>
            <h3 className={`${H3} mt-6`}>Summer execution priorities</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Push quality sprinklers and field geometry that shorten daily chores.</li>
              <li className={LI}>Protect two to three mining sessions per week for ore/coal continuity.</li>
              <li className={LI}>Expand jars first when your machine-time bottleneck is severe, then scale kegs.</li>
              <li className={LI}>Avoid cash starvation by selling some output raw when seed or upgrade windows approach.</li>
              <li className={LI}>Track machine idle time; idle machines are hidden negative ROI.</li>
            </ul>
            <p className={P}>
              If Summer timing questions are causing uncertainty, compare your scenario using{" "}
              <Link className={LINK} href="/blog/stardew-valley-summer-day-1-maximum-profit-guide">
                Summer Day 1 maximum profit guide
              </Link>,{" "}
              <Link className={LINK} href="/blog/stardew-valley-summer-day-15-profit-guide">
                Summer Day 15 profit guide
              </Link>, and{" "}
              <Link className={LINK} href="/blog/stardew-valley-summer-day-20-is-it-too-late">
                Summer Day 20 timing breakdown
              </Link>
              . Use those tactical pages for day-specific calls; use this guide for strategic direction.
            </p>
          </section>

          <section id="fall-roadmap" className={CARD}>
            <h2 className={H2}>Fall strategy in detail (conversion and compounding)</h2>
            <p className={P}>
              Fall is where strong Year 1 farms cash in on previous discipline. By now, the difference
              between farms is less about knowing which crop is good and more about whether your system
              can convert volume into premium outputs without choking. A farm with good crop choices but
              weak machine throughput leaves value on the table daily. A farm with balanced production,
              processing, and logistics can turn Fall into a compounding engine that sets up a dominant
              Year 2.
            </p>
            <p className={P}>
              Your first Fall planning pass should be machine-aware, not only seed-aware. Estimate how
              much fruit and vegetable volume you can actually process each week. Then select crop mix
              that keeps machine queues healthy without overwhelming them. This prevents the common trap
              where players plant for theoretical harvest value but lack the capacity to capture artisan
              multipliers. Remember: unprocessed backlog has opportunity cost, especially when machine
              slots could be producing high-margin items continuously.
            </p>
            <h3 className={`${H3} mt-6`}>Fall decision framework</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Set a weekly processing target before locking seed purchases.</li>
              <li>Reserve budget for machine materials and emergency replanting.</li>
              <li>Use recurring crops for baseline cash and selective spikes for high-value conversion.</li>
              <li>Protect mine time so Fall growth does not consume Winter preparation potential.</li>
              <li>Audit chest backlog every 3-4 days and adjust crop input volume if queues are exploding.</li>
            </ol>
            <p className={P}>
              If you are deciding how much of your output should become artisan goods, read{" "}
              <Link className={LINK} href="/blog/stardew-valley-keg-jar-artisan-profit-system">
                the artisan profit system guide
              </Link>{" "}
              and <Link className={LINK} href="/blog/how-many-kegs-do-i-need-quick-answer">how many kegs do I need</Link>.
              If Fall crop mix itself is unclear, use{" "}
              <Link className={LINK} href="/blog/best-fall-crops-quick-answer">
                best fall crops quick answer
              </Link>{" "}
              for tactical comparison.
            </p>
            <Callout title="High-impact Fall habit">
              Schedule one weekly "pipeline reset" session: empty chests, refill machines, sell delayed
              outputs, and verify next week seed/material budget. This single routine prevents drift
              better than any isolated optimization trick.
            </Callout>
          </section>

          <section id="winter-roadmap" className={CARD}>
            <h2 className={H2}>Winter strategy in detail (infrastructure season, not dead season)</h2>
            <p className={P}>
              Winter scares new players because outdoor crop pressure disappears and income feels slower.
              Advanced players see the opposite: Winter is the cleanest month to repair structure. With
              fewer daily field chores, you can spend long blocks on mining, crafting, layout redesign,
              tree tapping, and Community Center cleanup. The result is a Year 2 start with dramatically
              fewer constraints. If you treat Winter as idle time, Year 2 begins with the same problems
              that limited your Year 1 ceiling.
            </p>
            <p className={P}>
              Focus on bottleneck inventory. Count bars, coal, resin, wood, and stone against your next
              20-30 machine targets. Most players underestimate resin constraints until they attempt mass
              keg scaling. Start this pipeline early and keep it continuous. If your Greenhouse is close
              to unlock, Winter planning should include crop choice and machine pairing from day one.
              Reference <Link className={LINK} href="/blog/greenhouse-layout-guide">greenhouse layout guide</Link>{" "}
              and <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">best greenhouse crops</Link>{" "}
              so your year-round lane starts optimized.
            </p>
            <p className={P}>
              Winter can still generate money through artisan output, animal products, targeted winter
              seeds, and resource conversions, but the strategic value is future throughput. Think of
              Winter profits as helpful, not primary. The primary win is entering Spring Year 2 with a
              machine network, material reserves, and route discipline that compound faster than anything
              you can force during busy crop months.
            </p>
          </section>

          <section id="milestones-priorities" className={CARD}>
            <h2 className={H2}>Milestones and priority ladder</h2>
            <p className={P}>
              Milestones prevent emotional decision-making. Without checkpoints, every new idea feels
              urgent and your farm gets fragmented. With checkpoints, you can evaluate options by whether
              they move the current bottleneck. The table below is a practical ladder you can audit every
              week. You do not need perfect timing for each row, but you need forward motion in each lane.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Phase</th>
                    <th className="px-3 py-2">Milestone checkpoints</th>
                    <th className="px-3 py-2">Why this phase matters</th>
                  </tr>
                </thead>
                <tbody>
                  {MILESTONE_ROWS.map((row, index) => (
                    <tr
                      key={row.phase}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.phase}</td>
                      <td className="px-3 py-3">{row.checkpoints}</td>
                      <td className="px-3 py-3">{row.whyItMatters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className={`${H3} mt-6`}>Priority ladder when everything feels urgent</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Protect next seed cycle liquidity.</li>
              <li>Protect ore/coal/resin flow for machine growth.</li>
              <li>Protect weekly routine consistency (harvest, process, sell, reset).</li>
              <li>Then optimize individual crop choices and advanced micro gains.</li>
            </ol>
            <p className={P}>
              This order looks simple, but following it prevents the majority of Year 1 collapses.
              Tactical optimization is valuable only after strategic stability exists.
            </p>
          </section>

          <section id="common-mistakes" className={CARD}>
            <h2 className={H2}>Common mistakes and how to avoid them</h2>
            <h3 className={`${H3} mt-4`}>Mistake 1: Buying seeds before checking days left</h3>
            <p className={P}>
              This is still the most frequent direct gold leak. Players buy by habit or memory,
              forgetting current calendar state. The fix is easy and non-negotiable: check remaining
              days and run the calculator first. If a planting cannot complete profitably, skip it.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 2: Growing field size faster than labor capacity</h3>
            <p className={P}>
              Over-planting creates hidden costs: missed mine sessions, delayed processing, route chaos,
              and energy burnout. Expand only when sprinklers and workflow can support the extra tiles.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 3: Ignoring machine bottlenecks until Fall</h3>
            <p className={P}>
              Many players treat artisan setup as "later," then discover in Fall that they cannot process
              enough to capture high-value opportunities. Start material pipelines early, especially oak
              resin and bars, even if your first machine count is small.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 4: Chasing one meta strategy without fallback paths</h3>
            <p className={P}>
              A rigid plan breaks when one assumption fails. Build fallback routes for each season: if
              machine materials are delayed, sell more raw. If cash is tight, reduce crop spread and
              stabilize. If mine luck is bad, prioritize guaranteed progression tasks.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 5: Treating Winter as downtime</h3>
            <p className={P}>
              Winter is where advanced farms quietly separate. Use it for infrastructure and system cleanup,
              not passive waiting. Your Spring Year 2 velocity depends on Winter decisions.
            </p>
            <p className={P}>
              For a focused list of beginner errors, see{" "}
              <Link className={LINK} href="/blog/beginner-mistakes-losing-money">
                8 beginner mistakes losing you money
              </Link>
              .
            </p>
          </section>

          <section id="execution-checklists" className={CARD}>
            <h2 className={H2}>Practical checklists and weekly execution loop</h2>
            <p className={P}>
              Strategy only works when translated into routines. The checklist below is intentionally
              operational. Print it, pin it, or copy it to notes. Repeat it weekly and tune numbers as
              your farm evolves.
            </p>
            <h3 className={`${H3} mt-6`}>Weekly checklist (repeat every season)</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Recalculate top crop choices for current season and days left.</li>
              <li className={LI}>Audit seed budget before discretionary purchases.</li>
              <li className={LI}>Refill all jars/kegs and record idle machine count.</li>
              <li className={LI}>Schedule at least two focused material sessions (ore/coal/wood/resin).</li>
              <li className={LI}>Clear chest backlog and convert stranded outputs into sellable goods.</li>
              <li className={LI}>Review Community Center or unlock progress tied to next-season ROI.</li>
              <li className={LI}>Adjust crop footprint if daily chores are cannibalizing growth tasks.</li>
            </ul>
            <h3 className={`${H3} mt-6`}>14-day recovery plan if your run feels behind</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Freeze non-essential spending for three in-game days.</li>
              <li>Sell enough inventory to secure next seed cycle and operating cash.</li>
              <li>Consolidate fields into manageable lanes and remove low-value distractions.</li>
              <li>Run calculator-based crop selection only; no intuition buys.</li>
              <li>Schedule resource sessions to restart machine growth inputs.</li>
              <li>Build or reposition storage near work zones to cut route waste.</li>
              <li>Reintroduce optimization once cash flow and machine cadence stabilize.</li>
            </ol>
            <Callout title="Why this loop works">
              It combines tactical discipline (day-to-day choices) with strategic momentum (season-to-
              season setup). Most profitable Year 1 farms are not flashy; they are predictable and hard
              to derail.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ: Complete Year 1 Profit Guide</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Final action plan</h2>
            <p className={P}>
              Start with one change today: run your current season through the{" "}
              <Link className={LINK} href="/calculator">
                calculator
              </Link>{" "}
              and adjust crop buying to match your real bottleneck. Then schedule one weekly reset
              session. This alone will outperform most "perfect" plans that never survive contact with
              actual gameplay.
            </p>
            <p className={P}>
              When you are ready for deeper specialization, continue with{" "}
              <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>{" "}
              and{" "}
              <Link className={LINK} href="/blog/artisan-goods-empire-beginner-to-master">
                Artisan Goods Empire
              </Link>
              .
            </p>
          </section>

          <BlogReadNext
            posts={readNextPosts}
            currentSlug="stardew-valley-year-1-profit-guide-complete"
          />
        </article>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
