import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-07T00:00:00Z";
const modifiedTime = "2026-03-07T00:00:00Z";
const fromPath = "/blog/stardew-valley-artisan-machines-roi-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Artisan Machines ROI Guide: Keg vs Jar, Payback Time, and What to Build Next";
const DESCRIPTION =
  "A practical ROI framework for Stardew Valley artisan machines: when kegs beat jars, how to measure payback time, and how many machines you actually need.";

const FAQ_ITEMS = [
  {
    question: "Are kegs always better than preserves jars?",
    answer:
      "Not always. Kegs usually win for high-value fruit (wine scales hard), but jars can be better early game when materials are scarce, when you need faster throughput, or when your best crops don’t match long keg cycles.",
  },
  {
    question: "How do I calculate payback time for a keg or jar?",
    answer:
      "Payback time is: (machine cost in gold-equivalent materials) ÷ (extra profit per day the machine creates). Use your crop’s processing value, cycle time (days), and your profession bonus to estimate the extra profit per day.",
  },
  {
    question: "What is the biggest bottleneck for an artisan setup?",
    answer:
      "Usually inputs and refill time. Players fixate on max profit per item, but the real limiter is how many crops you can feed into machines on schedule (and how fast you can harvest, refill, and collect).",
  },
  {
    question: "How many kegs do I need?",
    answer:
      "Start with your weekly or biweekly harvest volume. If you harvest X items per week and your keg cycle is 7 days, you need about X kegs to keep up. If you harvest faster than your keg cycle, backlog grows and payback slows.",
  },
  {
    question: "Is it worth selling some crops raw instead of processing everything?",
    answer:
      "Yes. When machines are the bottleneck, selling some raw crops can improve cash flow and keep your farm progressing. The best play is often a hybrid: process the highest-value items and sell the rest raw until machine capacity catches up.",
  },
  {
    question: "Does Artisan profession change the ROI decision?",
    answer:
      "Absolutely. Artisan magnifies processed goods and usually pushes you toward more processing earlier. But it can also increase the opportunity cost of having too few machines—your backlog becomes more expensive.",
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

const PAGE_BG = "relative min-h-screen bg-[#f5e6c8] text-[#5c4033]";
const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "text-sm leading-6 text-[#5c4033]/90 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/70">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-[#4a321e]">{value}</div>
    </div>
  );
}

export default function ArtisanMachinesRoiGuidePage() {
  return (
    <div className={PAGE_BG}>
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
          faqs={FAQ_ITEMS.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Artisan Machines ROI" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Profit System • ROI Framework
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={`mt-4 ${P}`}>{DESCRIPTION}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <StatPill label="Goal" value="Build the right next machine" />
              <StatPill label="Metric" value="Profit per day + payback time" />
              <StatPill label="Reality" value="Capacity beats theory" />
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>Table of contents</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a className={TOC_LINK} href="#roi-basics">
                1) ROI basics: profit per day vs per item
              </a>
              <a className={TOC_LINK} href="#your-bottleneck">
                2) Find your bottleneck (inputs, machines, time)
              </a>
              <a className={TOC_LINK} href="#keg-vs-jar-framework">
                3) Keg vs Jar framework (when each wins)
              </a>
              <a className={TOC_LINK} href="#payback-time">
                4) Payback time: a simple calculation you can reuse
              </a>
              <a className={TOC_LINK} href="#how-many-machines">
                5) How many machines you need (sizing rules)
              </a>
              <a className={TOC_LINK} href="#example-plans">
                6) Example build plans by game stage
              </a>
              <a className={TOC_LINK} href="#mistakes">
                7) Common mistakes that kill ROI
              </a>
              <a className={TOC_LINK} href="#next-steps">
                8) Next steps: connect machines to your profit system
              </a>
            </div>
          </section>

          <section id="roi-basics" className={CARD}>
            <h2 className={H2}>1) ROI basics: profit per day beats profit per item</h2>
            <p className={`mt-3 ${P}`}>
              Stardew advice often compares <em>wine vs pickles</em> as if you’re choosing one item. But
              your farm is a pipeline. Machines occupy space, time, and refill attention. The right
              question is: <strong>how much extra profit does this machine create per day</strong> given
              your real inputs?
            </p>
            <p className={`mt-3 ${P}`}>
              That’s why a preserve jar can be a fantastic early-game machine even when a keg produces
              a larger number per item. If the jar finishes faster and you can keep it filled, it can
              produce more daily value while you scale materials.
            </p>
            <div className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">Quick mental model</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                <li>
                  <strong>Per item</strong> tells you “what’s the best output”.
                </li>
                <li>
                  <strong>Per day</strong> tells you “what’s the best machine usage”.
                </li>
                <li>
                  <strong>Payback time</strong> tells you “what should I build next”.
                </li>
              </ul>
            </div>
          </section>

          <section id="your-bottleneck" className={CARD}>
            <h2 className={H2}>2) Find your bottleneck (inputs, machines, or time)</h2>
            <p className={`mt-3 ${P}`}>
              Every artisan setup fails for one of three reasons. Identify yours before you build 40
              more machines.
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Input-limited</h3>
                <p className={`mt-2 ${P}`}>
                  You don’t harvest enough high-value crops to keep machines busy. Solution: fix crop
                  plan first.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Machine-limited</h3>
                <p className={`mt-2 ${P}`}>
                  You have piles of crops and not enough kegs/jars. Solution: expand capacity using
                  ROI and payback.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Time-limited</h3>
                <p className={`mt-2 ${P}`}>
                  You could profit more but can’t handle refill/harvest routes daily. Solution:
                  simplify cycles and automate.
                </p>
              </div>
            </div>
            <p className={`mt-5 ${P}`}>
              If you’re not sure which you are, check your chests. If you keep a backlog of crops,
              you’re machine-limited. If your machines sit empty, you’re input-limited.
            </p>
          </section>

          <section id="keg-vs-jar-framework" className={CARD}>
            <h2 className={H2}>3) Keg vs Jar framework (when each wins)</h2>
            <p className={`mt-3 ${P}`}>
              The “right” machine depends on crop type, cycle time, and what you’re trying to unlock
              next.
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Kegs win when…</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                  <li>You have high-value fruit (starfruit, ancient fruit, pineapple).</li>
                  <li>Your refill workflow can handle longer cycles.</li>
                  <li>You already have a stable crop engine (greenhouse or big fields).</li>
                  <li>You care about long-term scaling and endgame income.</li>
                </ul>
                <p className={`mt-4 ${P}`}>
                  If you’re deciding purely on “maximum final gold”, kegs tend to dominate. But
                  maximum final gold is not always maximum progress speed.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Jars win when…</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                  <li>You’re early/mid game and materials are tight.</li>
                  <li>You want faster turnarounds to fund upgrades.</li>
                  <li>You process vegetables and mid-value crops heavily.</li>
                  <li>You want to reduce backlog and keep cash flowing.</li>
                </ul>
                <p className={`mt-4 ${P}`}>
                  Jars are often the first “real” multiplier line because they ramp quickly and don’t
                  require oak resin.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
              <p className="text-sm font-semibold text-[#4a321e]">Use the calculators for real numbers</p>
              <p className={`mt-2 ${P}`}>
                If you want a quick comparison with your professions and days left, start here and
                adjust:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                <li>
                  <Link className={LINK} href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan">
                    Keg vs Jar (Starfruit preset)
                  </Link>
                </li>
                <li>
                  <Link className={LINK} href="/calculator?preset=keg-vs-jar-pumpkin&profession=artisan">
                    Keg vs Jar (Pumpkin preset)
                  </Link>
                </li>
                <li>
                  <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">
                    Deeper guide: Keg vs Jar profit guide
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section id="payback-time" className={CARD}>
            <h2 className={H2}>4) Payback time: a simple calculation you can reuse</h2>
            <p className={`mt-3 ${P}`}>
              If you build machines randomly, you’ll feel “busy” but progress slowly. Payback time
              makes your next build decision obvious.
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Step A: estimate machine cost</h3>
                <p className={`mt-2 ${P}`}>
                  You can treat materials as gold-equivalent using shop prices (or your internal
                  “what it takes me to farm this” value). Early game, wood, coal, and bars are scarce,
                  so their real cost is higher than their shop price.
                </p>
                <p className={`mt-3 ${P}`}>
                  If you’re mining for materials anyway, the best question becomes: “what else could I
                  have built with these bars?” That is opportunity cost.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Step B: estimate extra profit per day</h3>
                <p className={`mt-2 ${P}`}>
                  Extra profit per day ≈ (processed sale price − raw sale price) ÷ processing days.
                  Repeat for the crop you’ll actually feed into the machine.
                </p>
                <p className={`mt-3 ${P}`}>
                  If your machine sits idle sometimes, multiply the result by your real utilization
                  rate. A perfect theoretical keg that’s filled only half the time has half the ROI.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
              <p className="text-sm font-semibold text-[#4a321e]">ROI decision rule</p>
              <p className={`mt-2 ${P}`}>
                Build the machine that gives the shortest payback time <em>for your current bottleneck</em>.
                If you’re cash-starved, prioritize faster cycles and liquidity. If you’re endgame
                scaling, prioritize high-value conversion.
              </p>
            </div>
          </section>

          <section id="how-many-machines" className={CARD}>
            <h2 className={H2}>5) How many machines you need (sizing rules)</h2>
            <p className={`mt-3 ${P}`}>
              Most farms either underbuild machines (backlog forever) or overbuild (machines sit idle
              and materials were wasted). Use sizing rules.
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Rule 1: match harvest cadence</h3>
                <p className={`mt-2 ${P}`}>
                  Weekly harvest (Ancient Fruit) pairs naturally with 7-day processing. If your crop is
                  daily (Hops), long cycles require many more kegs to avoid backlog.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Rule 2: size for your “refill time budget”</h3>
                <p className={`mt-2 ${P}`}>
                  If you can only spend a few in-game minutes refilling machines, build around fewer,
                  higher-value inputs instead of raw volume.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Rule 3: keep one buffer chest, not five</h3>
                <p className={`mt-2 ${P}`}>
                  A small buffer smooths timing. Huge buffer chests are a red flag: you’re machine-limited
                  or time-limited.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
              <p className="text-sm font-semibold text-[#4a321e]">Quick sizing helper</p>
              <p className={`mt-2 ${P}`}>
                Use this calculator guide to avoid guessing:
                <span className="ml-2">
                  <Link
                    className={LINK}
                    href="/blog/how-many-kegs-do-i-need-quick-answer"
                  >
                    How many kegs do I need? (quick answer)
                  </Link>
                </span>
                .
              </p>
            </div>
          </section>

          <section id="example-plans" className={CARD}>
            <h2 className={H2}>6) Example build plans by game stage</h2>
            <p className={`mt-3 ${P}`}>
              These are not “one true builds”. They’re templates you adapt based on what you’ve
              unlocked.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Early game (Spring–Summer Year 1)</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                  <li>Focus on crop ROI first (buy seeds that pay back fast).</li>
                  <li>Build a small jar line when you can spare coal and stone.</li>
                  <li>Use profits to upgrade tools, backpacks, and sprinklers.</li>
                </ul>
                <p className={`mt-3 ${P}`}>
                  If you want a full stage-by-stage plan, pair this guide with:
                  <span className="ml-2">
                    <Link className={LINK} href="/blog/stardew-valley-year-1-profit-guide-complete">
                      Year 1 profit guide
                    </Link>
                  </span>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Mid game (Greenhouse unlock → first stable artisan line)</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                  <li>Choose a greenhouse strategy (Ancient Fruit or Starfruit).</li>
                  <li>Scale kegs to match your weekly harvest volume.</li>
                  <li>Automate basics: sprinklers, paths, chest placement.</li>
                </ul>
                <p className={`mt-3 ${P}`}>
                  Greenhouse and artisan systems interlock. If you haven’t seen it:
                  <span className="ml-2">
                    <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                      Greenhouse Mastery Guide
                    </Link>
                  </span>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Late game (Scale, stabilize, and remove friction)</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                  <li>Specialize high-value inputs (greenhouse + island + sheds).</li>
                  <li>Ensure mining loop supports ongoing machine expansion.</li>
                  <li>Protect your time: simplify harvest and refill cadence.</li>
                </ul>
                <p className={`mt-3 ${P}`}>
                  If you like system thinking, connect this to:
                  <span className="ml-2">
                    <Link className={LINK} href="/blog/farm-profit-pillars">
                      Farm Profit Pillars
                    </Link>
                  </span>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="mistakes" className={CARD}>
            <h2 className={H2}>7) Common mistakes that kill ROI</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Chasing one metric</h3>
                <p className={`mt-2 ${P}`}>
                  “Wine is best” is incomplete. The pipeline matters. If your farm can’t keep kegs fed
                  on schedule, your ROI collapses.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Ignoring opportunity cost</h3>
                <p className={`mt-2 ${P}`}>
                  If 5 kegs delay your first iridium sprinklers or tool upgrade, the “best long-term”
                  move may be the wrong short-term move.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Overbuilding before automation</h3>
                <p className={`mt-2 ${P}`}>
                  If refilling machines is stressful, build fewer machines but feed them higher-value
                  crops while you automate.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>Not planning coal and resin</h3>
                <p className={`mt-2 ${P}`}>
                  Coal and oak resin are the hidden throttle on artisan growth. A mining loop and a
                  tapper plan are part of ROI.
                </p>
              </div>
            </div>
          </section>

          <section id="next-steps" className={CARD}>
            <h2 className={H2}>8) Next steps: connect machines to your profit system</h2>
            <p className={`mt-3 ${P}`}>
              Artisan machines don’t exist in isolation. They multiply the profit pillar you already
              have. If you want a single “what should I do next” framework, use:
              <span className="ml-2">
                <Link className={LINK} href="/blog/farm-profit-pillars">
                  Farm Profit Pillars
                </Link>
              </span>
              .
            </p>

            <div className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
              <h3 className={H3}>Suggested internal links (for your next clicks)</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#5c4033]/90">
                <li>
                  <Link className={LINK} href="/calculator?preset=ancient-fruit-wine-greenhouse-28d&season=greenhouse&daysLeft=28&profession=artisan">
                    Greenhouse wine preset (Ancient Fruit)
                  </Link>
                </li>
                <li>
                  <Link className={LINK} href="/calculator?preset=starfruit-wine-summer-28d&season=summer&daysLeft=28&profession=artisan">
                    Starfruit wine preset (Summer)
                  </Link>
                </li>
                <li>
                  <Link className={LINK} href="/blog/greenhouse-keg-empire-profit-guide">
                    Greenhouse keg empire profit guide
                  </Link>
                </li>
                <li>
                  <Link className={LINK} href="/blog/stardew-valley-keg-jar-artisan-profit-system">
                    Keg + jar artisan profit system
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <p className={`mt-3 ${P}`}>
              Quick answers to the most common ROI questions. (These are also embedded in structured
              FAQ schema for search.)
            </p>
            <div className="mt-5 space-y-4">
              {FAQ_ITEMS.slice(0, 4).map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5"
                >
                  <h3 className={H3}>{item.question}</h3>
                  <p className={`mt-2 ${P}`}>{item.answer}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>{FAQ_ITEMS[4].question}</h3>
                <p className={`mt-2 ${P}`}>{FAQ_ITEMS[4].answer}</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-5">
                <h3 className={H3}>{FAQ_ITEMS[5].question}</h3>
                <p className={`mt-2 ${P}`}>{FAQ_ITEMS[5].answer}</p>
              </div>
            </div>
          </section>
        </article>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
