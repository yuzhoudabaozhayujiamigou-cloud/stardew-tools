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
const fromPath = "/blog/stardew-valley-speed-gro-when-to-use";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Stardew Valley Speed-Gro Guide (2026): When Is Fertilizer Worth the Cost?";
const DESCRIPTION = "Complete ROI guide for Speed-Gro and Deluxe Speed-Gro in Stardew Valley. Learn exactly when fertilizer saves enough days to justify the cost, and which crops benefit most.";

const FAQ_ITEMS = [
  {
    question: "Is Speed-Gro worth buying from Pierre?",
    answer: "It depends on the crop and timing. Speed-Gro costs 100g and shaves 10% off growth time. On a high-value crop like Starfruit even saving one day pays back the cost many times over. On cheap crops like Parsnip the math rarely works in your favor.",
  },
  {
    question: "Which crops benefit most from Speed-Gro?",
    answer: "Starfruit, Ancient Fruit, Pumpkin, and Cranberries get the largest benefit. High sell price combined with a tight seasonal window where saving 1-2 days changes how many harvests you fit in is the key combination.",
  },
  {
    question: "Does Speed-Gro stack with the Agriculturist profession?",
    answer: "Yes. Agriculturist adds a flat 10% growth speed bonus on top of any fertilizer. With Deluxe Speed-Gro you reach roughly 33% total reduction. The bonuses stack multiplicatively, each layer shaving days off the already-shortened growth time.",
  },
  {
    question: "When should I use Deluxe Speed-Gro instead of regular Speed-Gro?",
    answer: "Use Deluxe Speed-Gro whenever the extra 15 percentage points push a crop past a critical harvest threshold: enabling a second Starfruit harvest in Summer, or compressing a Day 15 re-plant to finish before Fall 28.",
  },
  {
    question: "Does Speed-Gro help with Ancient Fruit?",
    answer: "Yes, but only for the initial 28-day growth phase. Speed-Gro does not affect the 7-day regrow timer. The payoff is getting the first harvest 2-3 days earlier, unlocking extra regrow cycles before you move the plant to the greenhouse.",
  },
  {
    question: "Can I apply Speed-Gro after planting?",
    answer: "No. Fertilizer must be applied to bare tilled soil before planting. If you try to fertilize after planting nothing happens. Plan your fertilizer budget before you sow, especially for end-of-season re-plants where every day counts.",
  },
];

const FERTILIZER_ROWS = [
  { name: "Speed-Gro", reduction: "-10% growth time", cost: "100g (Pierre/craft)", availability: "Pierre Year 1", bestFor: "Early game, moderate-value crops" },
  { name: "Deluxe Speed-Gro", reduction: "-25% growth time", cost: "80g (Pierre) / ~40g craft", availability: "Pierre after Year 1 / Farming Lv 8", bestFor: "High-value crops, double-harvest setups" },
  { name: "Hyper Speed-Gro", reduction: "-33% growth time", cost: "Qi Gems", availability: "Qi Walnut Room, Ginger Island", bestFor: "Greenhouse min-maxing, Ancient Fruit chains" },
] as const;

const SCENARIO_ROWS = [
  { scenario: "Starfruit - 2 Summer harvests", fertilizer: "Deluxe Speed-Gro", normalDays: "13 days", boostedDays: "10 days", savedDays: "3", verdict: "Excellent - enables 2nd harvest with planting buffer" },
  { scenario: "Ancient Fruit - first harvest", fertilizer: "Speed-Gro", normalDays: "28 days", boostedDays: "26 days", savedDays: "2", verdict: "Good - 1-2 extra regrow cycles per plant" },
  { scenario: "Pumpkin - late Fall re-plant Day 15", fertilizer: "Deluxe Speed-Gro", normalDays: "13 days", boostedDays: "10 days", savedDays: "3", verdict: "Excellent - finishes Day 25, otherwise misses" },
  { scenario: "Cranberries - full Fall run", fertilizer: "Speed-Gro", normalDays: "5d regrow", boostedDays: "No regrow benefit", savedDays: "0 on regrow", verdict: "Skip - regrow timer unaffected" },
  { scenario: "Melon - Summer Day 1 plant", fertilizer: "Speed-Gro", normalDays: "12 days", boostedDays: "11 days", savedDays: "1", verdict: "Marginal - no extra harvest possible" },
] as const;

const AGRICULTURIST_ROWS = [
  { combo: "No fertilizer, no profession", reduction: "0%", star: "13", ancient: "28" },
  { combo: "Agriculturist only", reduction: "-10%", star: "12", ancient: "26" },
  { combo: "Speed-Gro only", reduction: "-10%", star: "12", ancient: "26" },
  { combo: "Speed-Gro + Agriculturist", reduction: "-19%", star: "11", ancient: "23" },
  { combo: "Deluxe Speed-Gro + Agriculturist", reduction: "-33%", star: "9", ancient: "19" },
  { combo: "Hyper Speed-Gro + Agriculturist", reduction: "-40%", star: "8", ancient: "17" },
] as const;

const CARD = "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LINK = "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK = "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";
const CTA_CLASS = "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS = "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: { title: TITLE, description: DESCRIPTION, url, type: "article", publishedTime, modifiedTime },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  };
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-7 text-[#5c4033]/95">{children}</div>
    </aside>
  );
}

function FertilizerTable({ rows }: { rows: ReadonlyArray<{ name: string; reduction: string; cost: string; availability: string; bestFor: string }> }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[720px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Fertilizer</th>
            <th className="px-3 py-2">Growth Reduction</th>
            <th className="px-3 py-2">Cost</th>
            <th className="px-3 py-2">Availability</th>
            <th className="px-3 py-2">Best For</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.name} className={`${i % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.name}</td>
              <td className="px-3 py-3 font-semibold text-green-700">{row.reduction}</td>
              <td className="px-3 py-3">{row.cost}</td>
              <td className="px-3 py-3">{row.availability}</td>
              <td className="px-3 py-3">{row.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScenarioTable({ rows }: { rows: ReadonlyArray<{ scenario: string; fertilizer: string; normalDays: string; boostedDays: string; savedDays: string; verdict: string }> }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[900px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Scenario</th>
            <th className="px-3 py-2">Fertilizer</th>
            <th className="px-3 py-2">Normal</th>
            <th className="px-3 py-2">Boosted</th>
            <th className="px-3 py-2">Saved</th>
            <th className="px-3 py-2">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.scenario} className={`${i % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.scenario}</td>
              <td className="px-3 py-3">{row.fertilizer}</td>
              <td className="px-3 py-3">{row.normalDays}</td>
              <td className="px-3 py-3">{row.boostedDays}</td>
              <td className="px-3 py-3 font-semibold">{row.savedDays}</td>
              <td className="px-3 py-3">{row.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AgriculturistTable({ rows }: { rows: ReadonlyArray<{ combo: string; reduction: string; star: string; ancient: string }> }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[560px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Combination</th>
            <th className="px-3 py-2">Total Reduction</th>
            <th className="px-3 py-2">Starfruit Days</th>
            <th className="px-3 py-2">Ancient Fruit Days</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.combo} className={`${i % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.combo}</td>
              <td className="px-3 py-3 font-semibold text-green-700">{row.reduction}</td>
              <td className="px-3 py-3">{row.star} days</td>
              <td className="px-3 py-3">{row.ancient} days</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SpeedGroWhenToUsePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-speed-gro-when-to-use", 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf3dc] to-[#f7e8c8]">
      <PwaRegisterScript />
      <FaqJsonLd
        url={url}
        items={FAQ_ITEMS}
        datePublished={publishedTime}
        dateModified={modifiedTime}
        headline={TITLE}
        description={DESCRIPTION}
      />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Speed-Gro Guide", href: fromPath },
          ]}
        />
        <article className="mt-6 space-y-8">

          {/* Hero */}
          <header className={CARD}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9f744c]">
              Farming Strategy &middot; Fertilizers
            </p>
            <h1 className="mt-2 text-2xl font-bold text-[#3f2a22] sm:text-3xl lg:text-4xl">
              {TITLE}
            </h1>
            <p className={P}>
              Speed-Gro fertilizer gets thrown on every crop by beginners and ignored entirely
              by players who assume it is overpriced. Both approaches cost you gold. The correct
              question is not whether to use Speed-Gro, but whether the days you save are worth
              more than what the fertilizer costs. When you frame it that way, the answer becomes
              a straightforward calculation with clear winners and clear losers.
            </p>
            <p className={P}>
              This guide covers all three fertilizer tiers, the ROI formula, the specific
              scenarios where Speed-Gro pays back many times its cost, and the common situations
              where farmers waste gold on crops that simply do not need it.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">Open Profit Calculator &rarr;</Link>
              <Link className={SUB_CTA_CLASS} href="/blog/speed-gro-vs-deluxe-speed-gro">Speed-Gro vs Deluxe</Link>
            </div>
          </header>

          {/* TOC */}
          <nav className={CARD} aria-label="Table of contents">
            <h2 className={H2}>Table of Contents</h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              <li><a className={TOC_LINK} href="#fertilizer-comparison">1. Fertilizer Comparison</a></li>
              <li><a className={TOC_LINK} href="#roi-math">2. The ROI Calculation</a></li>
              <li><a className={TOC_LINK} href="#best-scenarios">3. Best Scenarios</a></li>
              <li><a className={TOC_LINK} href="#skip-it">4. When to Skip Fertilizer</a></li>
              <li><a className={TOC_LINK} href="#agriculturist">5. Agriculturist Stacking</a></li>
              <li><a className={TOC_LINK} href="#faq">6. FAQ</a></li>
            </ol>
          </nav>

        {/* Fertilizer Comparison */}
        <section id="fertilizer-comparison" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Fertilizer Comparison</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/20">
              <table className="w-full text-sm">
                <thead className="bg-[#7c4d2e]/10">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Fertilizer</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Speed Boost</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Cost</th>
                    <th className="hidden px-3 py-2 text-left font-semibold text-[#4a321e] sm:table-cell">How to Get</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Speed-Gro", boost: "-10%", cost: "100g", how: "Craft (Lv1) or Pierre Year 1" },
                    { name: "Deluxe Speed-Gro", boost: "-25%", cost: "40g craft / 80g Pierre", how: "Craft (Lv8) or Pierre Year 2+" },
                    { name: "Hyper Speed-Gro", boost: "-33%", cost: "10 Qi Gems", how: "Qi Gem Shop (late game)" },
                  ].map((r) => (
                    <tr key={r.name} className="border-t border-[#7c4d2e]/10 even:bg-white/30">
                      <td className="px-3 py-2 font-medium text-[#4a321e]">{r.name}</td>
                      <td className="px-3 py-2 text-right font-semibold text-green-700">{r.boost}</td>
                      <td className="px-3 py-2 text-right text-[#5c4033]">{r.cost}</td>
                      <td className="hidden px-3 py-2 text-[#5c4033]/80 sm:table-cell">{r.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ROI Math */}
        <section id="roi-math" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>The ROI Calculation</h2>
            <p className={P}>
              The core question is simple: <strong>does the value of saved days exceed the fertilizer cost?</strong>
            </p>
            <div className="mt-4 rounded-xl border border-[#7c4d2e]/20 bg-white/30 p-4 font-mono text-sm">
              <p className="text-[#4a321e]">Days saved = grow days × boost %</p>
              <p className="mt-1 text-[#4a321e]">Value of days saved = days saved × crop gold/day</p>
              <p className="mt-1 font-bold text-green-700">Worth it if: value saved &gt; fertilizer cost</p>
            </div>
            <h3 className={`mt-5 ${H3}`}>Example: Starfruit + Deluxe Speed-Gro</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Starfruit grows in 13 days, raw gold/day ~26g</li>
              <li className={LI}>Deluxe Speed-Gro saves 25% = 3.25 days</li>
              <li className={LI}>Value of 3.25 saved days = 3.25 × 26g = <strong>~85g</strong></li>
              <li className={LI}>Fertilizer cost: 40g (craft) or 80g (Pierre)</li>
              <li className={LI}><strong>Verdict: Worth it</strong> — saves more than it costs, and enables a 2nd harvest if planted Day 1</li>
            </ul>
            <h3 className={`mt-5 ${H3}`}>Example: Parsnip + Speed-Gro</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Parsnip grows in 4 days, gold/day ~11g</li>
              <li className={LI}>Speed-Gro saves 10% = 0.4 days</li>
              <li className={LI}>Value of 0.4 saved days = 0.4 × 11g = <strong>~4g</strong></li>
              <li className={LI}>Fertilizer cost: 100g</li>
              <li className={LI}><strong>Verdict: Not worth it</strong> — costs 25x the value it saves</li>
            </ul>
          </div>
        </section>

        {/* Best Scenarios */}
        <section id="best-scenarios" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Best Scenarios for Speed-Gro</h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  title: "Season-end replanting",
                  desc: "Plant single-harvest crops on Day 14–18 with Deluxe Speed-Gro to squeeze in one harvest before season end. Without fertilizer it would miss the cutoff.",
                },
                {
                  title: "Starfruit double harvest",
                  desc: "Deluxe Speed-Gro on Starfruit planted Summer Day 1 reduces growth from 13 to ~10 days, leaving enough time for a second planting and harvest before Fall.",
                },
                {
                  title: "Ancient Fruit first harvest",
                  desc: "Ancient Fruit takes 28 days for the first harvest. Deluxe Speed-Gro cuts this to ~21 days, unlocking the regrow cycle 7 days earlier — especially valuable in the Greenhouse.",
                },
                {
                  title: "High gold/day crops only",
                  desc: "The higher a crop's gold/day, the more each saved day is worth. Stick to Starfruit, Ancient Fruit, Cranberries, and Hops for meaningful ROI.",
                },
              ].map((s) => (
                <div key={s.title} className="rounded-xl border border-[#7c4d2e]/15 bg-white/35 p-4">
                  <p className="font-semibold text-[#4a321e]">{s.title}</p>
                  <p className="mt-1 text-sm text-[#5c4033]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skip It */}
        <section id="skip-it" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>When to Skip Fertilizer</h2>
            <ul className="mt-4 space-y-1">
              <li className={LI}><strong>Regrow crops mid-season:</strong> Once planted, regrow crops don&apos;t benefit — fertilizer only affects the initial growth.</li>
              <li className={LI}><strong>Low-value crops:</strong> Parsnip, Bok Choy, Radish — the saved days are worth less than the fertilizer cost.</li>
              <li className={LI}><strong>Crops with plenty of time:</strong> If a 4-day crop is planted Day 1, you don&apos;t need to speed it up — it already fits multiple harvests.</li>
              <li className={LI}><strong>Year 1 cash-strapped phase:</strong> Early game, 100g for Speed-Gro on cheap crops is a bad trade. Save it for high-value crops or craft Deluxe later.</li>
            </ul>
          </div>
        </section>

        {/* Agriculturist */}
        <section id="agriculturist" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Stacking with Agriculturist Profession</h2>
            <p className={P}>
              The Agriculturist profession (Farming Lv10) gives an additional <strong>+10% growth speed</strong>.
              It stacks multiplicatively with fertilizer:
            </p>
            <ul className="mt-4 space-y-1">
              <li className={LI}>Deluxe Speed-Gro alone: -25% growth time</li>
              <li className={LI}>Agriculturist alone: -10% growth time</li>
              <li className={LI}>Both together: approximately -32% growth time</li>
            </ul>
            <p className={P}>
              Note: Agriculturist is rarely the best Lv10 choice — <strong>Artisan (+40% artisan goods value)</strong> almost always
              generates more total gold. Only choose Agriculturist if you specifically play a no-processing raw-crop strategy.
            </p>
            <div className="mt-4">
              <Link href="/blog/stardew-valley-artisan-profession-roi-guide" className={LINK}>
                → Artisan vs Agriculturist: Full ROI Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-[28px] border-4 border-[#b77841]/50 bg-gradient-to-br from-[#fff8e7] to-[#fce8b1] p-6 text-center shadow-lg">
            <p className="text-lg font-bold text-[#4a321e]">Calculate If Speed-Gro Is Worth It For Your Crop</p>
            <p className="mt-2 text-sm text-[#5c4033]">
              Enter your crop, planting date, and see exact gold/day figures to make the call.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/" className={CTA_CLASS}>
                Open Profit Calculator →
              </Link>
              <Link href="/blog/speed-gro-vs-deluxe-speed-gro" className={SUB_CTA_CLASS}>
                Speed-Gro vs Deluxe Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <h2 className={H2}>Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className={CARD}>
                <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                <p className={`${P}`}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <BlogReadNext posts={readNext} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
