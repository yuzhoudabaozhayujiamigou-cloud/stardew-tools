import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { getBlogReadNextPosts } from "@/lib/read-next";

const fromPath = "/blog/stardew-valley-hardwood-guide";

const FAQ_ITEMS = [
  {
    question: "How many hardwood can you get per day in Stardew Valley?",
    answer:
      "On a Forest Farm with a daily Secret Woods run, you get 28 hardwood/day guaranteed (16 forest stumps + 12 Secret Woods). Add Mahogany Trees and Fish Ponds for 30–40+.",
  },
  {
    question: "What axe do you need for hardwood?",
    answer:
      "A Steel Axe is required to break large stumps (the main source) and to enter the Secret Woods. A Gold Axe or higher is needed for large logs.",
  },
  {
    question: "Where are the Secret Woods?",
    answer:
      "Northwest of the Wizard's tower in Cindersap Forest. Break the large log blocking the path with a Steel Axe.",
  },
  {
    question: "Can you farm Mahogany Trees?",
    answer:
      "Yes. Plant Mahogany Seeds like any tree seed. They grow in ~24–30 days (or overnight with Tree Fertilizer) and drop 8–13 hardwood when chopped.",
  },
  {
    question: "What does the Woodskip Fish Pond produce?",
    answer:
      "At population 6+, Woodskip ponds can produce hardwood (up to 5 per day), plus Roe. At population 10, the chance and quantity improve.",
  },
  {
    question: "Is the Forest Farm the best for hardwood?",
    answer:
      "Yes. The Forest Farm has 8 respawning large stumps that give 16 hardwood daily — no other farm type offers this.",
  },
  {
    question: "How much hardwood do you need for a Stable?",
    answer:
      "The Stable costs 100 hardwood, 10,000g, and 5 iron bars. Plan about 8–9 days of Secret Woods runs to gather enough.",
  },
  {
    question: "Do Mahogany Trees regrow after chopping?",
    answer:
      "No. You must replant a Mahogany Seed. However, chopping a mature Mahogany Tree has a chance to drop 1–2 seeds, making it partially self-sustaining.",
  },
  {
    question: "Is buying hardwood from Robin worth it?",
    answer:
      "At 1,000g each, it's expensive. Only worth it when you need a large batch immediately and have plenty of gold — e.g., rushing a building upgrade.",
  },
  {
    question: "Does hardwood respawn in the Secret Woods?",
    answer:
      "Yes. All 6 large stumps respawn every single day, giving 12 hardwood daily without fail.",
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Hardwood Guide (1.6): Sources & Route",
  description:
    "Get 12+ hardwood daily in Stardew Valley 1.6. Secret Woods, Mahogany Trees, Woodskip Fish Pond, and a step-by-step daily farming route explained.",
  openGraph: {
    type: "article",
    publishedTime: "2026-03-21T00:00:00+08:00",
    modifiedTime: "2026-03-21T00:00:00+08:00",
  },
};

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";

const P = "mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base";

const LINK =
  "font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]";

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function StardewValleyHardwoodGuidePage() {
  const pageUrl = `${SITE_ORIGIN}${fromPath}`;
  const readNextPosts = getBlogReadNextPosts("stardew-valley-hardwood-guide", 3);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
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
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_ITEMS.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Hardwood Guide" },
          ]}
        />

        <article className="space-y-6">
          {/* ── Header ── */}
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Resource Guide
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Hardwood Guide (1.6): Fastest Reliable Sources & Daily Route
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Hardwood is one of the most important resources in Stardew Valley — needed for farm buildings,
              upgrades, Kegs, Oil Makers, and late-game recipes. This guide covers every source and a
              step-by-step daily route to keep your supply steady.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_hero"
              >
                Open the Profit Calculator
              </TrackedBlogCtaLink>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/best-greenhouse-crops-stardew-valley">
                Best greenhouse crops guide →
              </Link>
            </div>
          </header>

          {/* ── Quick Answer ── */}
          <section className={CARD}>
            <h2 className={H2}>Quick Answer</h2>
            <div className="mt-3 rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>Need hardwood fast?</strong> Upgrade your axe to at least Steel, then clear the 6 large
                stumps in the <strong>Secret Woods</strong> every day for <strong>12 hardwood</strong>.
                That{"'"}s your baseline. Add <strong>Mahogany Trees</strong> on your farm and a{" "}
                <strong>Woodskip Fish Pond</strong> for passive income, and you{"'"}ll never run short.
              </p>
            </div>
          </section>

          {/* ── Every Hardwood Source ── */}
          <section className={CARD}>
            <h2 className={H2}>Every Hardwood Source in Stardew Valley (1.6)</h2>
            <p className={P}>
              Hardwood is used for farm buildings, upgrades, Kegs, Oil Makers, Cheese Presses, and several
              late-game recipes. Unlike regular wood, it doesn{"'"}t come from ordinary trees — you need
              specific sources.
            </p>

            <div className="mt-5 space-y-5">
              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Secret Woods (6 Large Stumps = 12 Hardwood / Day)</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  The Secret Woods is the single most reliable early-game hardwood source. Located northwest
                  of the Wizard{"'"}s tower, it requires a <strong>Steel Axe</strong> (or better) to break
                  the log blocking the entrance.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li>6 large stumps respawn every day</li>
                  <li>Each stump drops <strong>2 hardwood</strong> = <strong>12/day guaranteed</strong></li>
                  <li>Also contains seasonal forageables and Slimes</li>
                </ul>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  This is non-negotiable in Year 1. Visit every single day if you{"'"}re building anything
                  that needs hardwood.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Large Stumps & Large Logs on Your Farm</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  Your farm spawns large stumps and large logs periodically, especially on the{" "}
                  <strong>Forest Farm</strong> (which spawns 8 renewable stumps in the western area). Other
                  farm types get occasional spawns, but they{"'"}re inconsistent.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li><strong>Forest Farm:</strong> 8 stumps → 16 hardwood/day (best farm type for hardwood)</li>
                  <li><strong>Standard/other farms:</strong> occasional random stumps, unreliable</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Mahogany Trees (Renewable & Plantable)</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  Mahogany Trees are the long-term scalable solution. Plant <strong>Mahogany Seeds</strong>{" "}
                  anywhere you{"'"}d plant a regular tree.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li>Each mature Mahogany Tree drops <strong>8–13 hardwood</strong> when chopped (10 average)</li>
                  <li>Grows in roughly <strong>24–30 days</strong> without fertilizer</li>
                  <li>Use <strong>Tree Fertilizer</strong> to grow one overnight</li>
                  <li>Mahogany Seeds drop from: large stumps/logs, Slimes, Golden Coconuts, and shaking/chopping mature Mahogany Trees</li>
                </ul>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  Plant a grove of 10–20 Mahogany Trees as early as possible. By mid-Year 2, you{"'"}ll have
                  a self-sustaining hardwood forest.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Woodskip Fish Pond (Passive Hardwood)</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  The <strong>Woodskip</strong> (found in the Secret Woods) can be placed in a Fish Pond. At
                  population 6+, it can produce hardwood passively.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li>Population 6+: chance to produce 5 hardwood/day</li>
                  <li>Population 10: increased chance + hardwood in the output</li>
                  <li>Completely passive — no daily player action needed</li>
                </ul>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  This is a great late-game supplement, not a primary source.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Other / Rare Sources</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li><strong>Mines crates/barrels:</strong> small random chance</li>
                  <li><strong>Robin{"'"}s shop:</strong> sells hardwood at 1,000g each after the {"\""}Robin{"'"}s Resource Rush{"\""} special order (1.5+)</li>
                  <li><strong>Ginger Island:</strong> Mahogany Trees grow naturally; harvestable stumps exist</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Hardwood Sources Compared ── */}
          <section className={CARD}>
            <h2 className={H2}>Hardwood Sources Compared</h2>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8]">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-[#7c4d2e]/30">
                    <th className="px-4 py-3 font-semibold text-[#4a321e]">Source</th>
                    <th className="px-4 py-3 font-semibold text-[#4a321e]">Hardwood / Day</th>
                    <th className="px-4 py-3 font-semibold text-[#4a321e]">Axe Required</th>
                    <th className="px-4 py-3 font-semibold text-[#4a321e]">Effort</th>
                    <th className="px-4 py-3 font-semibold text-[#4a321e]">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Secret Woods</td>
                    <td className="px-4 py-3">12 (guaranteed)</td>
                    <td className="px-4 py-3">Steel+</td>
                    <td className="px-4 py-3">Daily visit (2 min)</td>
                    <td className="px-4 py-3">Year 1 (after Steel Axe)</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Forest Farm stumps</td>
                    <td className="px-4 py-3">16 (guaranteed)</td>
                    <td className="px-4 py-3">Copper+</td>
                    <td className="px-4 py-3">Daily visit (1 min)</td>
                    <td className="px-4 py-3">Forest Farm only</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Mahogany Tree (×10)</td>
                    <td className="px-4 py-3">~3–4 avg (rotation)</td>
                    <td className="px-4 py-3">Any</td>
                    <td className="px-4 py-3">Plant & wait</td>
                    <td className="px-4 py-3">Any time (seeds needed)</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Woodskip Fish Pond</td>
                    <td className="px-4 py-3">0–5 (passive)</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">Build & stock once</td>
                    <td className="px-4 py-3">After fishing one Woodskip</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Farm random stumps</td>
                    <td className="px-4 py-3">0–4 (random)</td>
                    <td className="px-4 py-3">Copper+</td>
                    <td className="px-4 py-3">Opportunistic</td>
                    <td className="px-4 py-3">Any farm type</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#4a321e]">Robin{"'"}s shop</td>
                    <td className="px-4 py-3">Unlimited (1,000g ea.)</td>
                    <td className="px-4 py-3">None</td>
                    <td className="px-4 py-3">Gold cost</td>
                    <td className="px-4 py-3">After special order</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Daily Hardwood Route ── */}
          <section className={CARD}>
            <h2 className={H2}>The Daily Hardwood Route (Step-by-Step)</h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Minimum Route (Year 1)</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  This is the baseline for any player who has a Steel Axe:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li><strong>Start your day</strong> — water crops (or let sprinklers handle it)</li>
                  <li><strong>Head west</strong> to the Secret Woods entrance (bring your axe)</li>
                  <li><strong>Clear all 6 stumps</strong> — grab the 12 hardwood and any forageables</li>
                  <li><strong>Check your farm</strong> for any large stumps/logs that spawned overnight</li>
                  <li><strong>Done</strong> — continue your day (mining, fishing, etc.)</li>
                </ol>
                <p className="mt-2 text-xs text-[#6f4b2a]/75">
                  Time cost: ~5 minutes of in-game time. Worth it every day.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Expanded Route (Year 2+)</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  Once you{"'"}ve planted Mahogany Trees and have a Fish Pond:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
                  <li><strong>Check Fish Pond</strong> — collect hardwood output if available</li>
                  <li><strong>Clear Secret Woods</strong> — 12 hardwood</li>
                  <li><strong>Clear Forest Farm stumps</strong> (if applicable) — 16 hardwood</li>
                  <li><strong>Harvest any mature Mahogany Trees</strong> — replant seeds immediately</li>
                  <li><strong>Check farm</strong> for random stumps</li>
                </ol>
                <p className="mt-2 text-xs text-[#6f4b2a]/75">
                  With this route on a Forest Farm, you can pull 30+ hardwood daily when Mahogany Trees are in rotation.
                </p>
              </div>
            </div>
          </section>

          {/* ── Late-Game Hardwood Options ── */}
          <section className={CARD}>
            <h2 className={H2}>Late-Game Hardwood Options</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Mahogany Tree Farm on Ginger Island</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  Ginger Island has open farmable land. Planting 20+ Mahogany Trees there creates a dedicated
                  hardwood farm that doesn{"'"}t eat into your main farm{"'"}s crop space. Use Tree
                  Fertilizer to accelerate growth.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Woodskip Fish Pond Scaling</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  You can build multiple Fish Ponds and stock each with Woodskip. Two ponds at population 10
                  can average <strong>5–10 hardwood/day passively</strong>. Expensive to set up (5,000g + 200
                  stone + 5 seaweed + 5 green algae per pond), but zero daily effort.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Robin{"'"}s Shop & Special Orders</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">
                  Completing <em>Robin{"'"}s Resource Rush</em> (a special order board quest) unlocks hardwood
                  for purchase at Robin{"'"}s shop: <strong>1,000g per piece</strong>. This is a
                  gold-for-convenience trade and only makes sense when you{"'"}re flush with cash and need a
                  large batch fast (e.g., building a Farmhouse upgrade).
                </p>
              </div>
            </div>
          </section>

          {/* ── Common Mistakes ── */}
          <section className={CARD}>
            <h2 className={H2}>Common Mistakes (And How to Avoid Them)</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Skipping the Secret Woods.</strong> The #1 mistake. Players forget to visit daily,
                losing 12 free hardwood every missed day. Make it a habit.
              </li>
              <li>
                <strong>Chopping Mahogany Trees before they{"'"}re mature.</strong> An immature Mahogany gives
                nothing useful. Wait for full growth or you waste the seed.
              </li>
              <li>
                <strong>Not planting Mahogany Seeds immediately.</strong> Seeds sit in chests for seasons. Put
                them in the ground the moment you get them.
              </li>
              <li>
                <strong>Selling Woodskip instead of pond-stocking.</strong> One Woodskip in a pond eventually
                produces more value than selling the fish ever would.
              </li>
              <li>
                <strong>Ignoring Forest Farm advantage.</strong> If you haven{"'"}t chosen a farm type yet and
                know you{"'"}ll need hardwood (for{" "}
                <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>Kegs</Link>, buildings, etc.),
                Forest Farm pays for itself.
              </li>
            </ul>
          </section>

          {/* ── When to Prioritize Hardwood ── */}
          <section className={CARD}>
            <h2 className={H2}>When to Prioritize Hardwood</h2>
            <p className={P}>
              Not every moment calls for a hardwood grind. Here{"'"}s when to focus on it:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Building Stable, Farm buildings, or house upgrades</strong> — these require 100–150
                hardwood. Start stockpiling 1–2 weeks before you plan to build.
              </li>
              <li>
                <strong>Scaling <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>Keg production</Link></strong> — each Keg costs 1 hardwood. If you{"'"}re building 50+ Kegs, you{"'"}ll need a serious supply.
              </li>
              <li>
                <strong>Oil Makers, Cheese Presses, Cork Bobbers</strong> — smaller batches, but they add up.
              </li>
              <li>
                <strong>Fences</strong> — Hardwood Fences last 558 days vs. 120 for Iron. If you hate
                re-fencing, invest early.
              </li>
              <li>
                <strong>Warp Totems & crafting recipes</strong> — late-game totems consume hardwood; plan
                ahead.
              </li>
            </ul>
            <p className={P}>
              <strong>Rule of thumb:</strong> If you{"'"}re in Year 1 and haven{"'"}t built Kegs yet, just
              run the Secret Woods daily. If you{"'"}re Year 2+ and scaling production, plant Mahogany Trees
              and set up a Woodskip pond. Use the{" "}
              <Link href="/calculator" className={LINK}>profit calculator</Link> to figure out which crops to
              pair with your Keg setup.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_end"
              >
                Plan your farm with the calculator
              </TrackedBlogCtaLink>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/best-greenhouse-crops-stardew-valley">
                Read the best greenhouse crops guide →
              </Link>
            </div>
          </section>

          {/* ── Read Next ── */}
          <section className={CARD}>
            <h2 className={H2}>Read Next</h2>
            <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-hardwood-guide" />
          </section>
        </article>

        <SiteFooter />
        <p className="mt-6 text-center text-xs text-[#6f4b2a]/70">URL: {pageUrl}</p>
      </main>
    </div>
  );
}
