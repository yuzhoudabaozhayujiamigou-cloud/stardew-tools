import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { getBlogReadNextPosts } from "@/lib/read-next";

const publishedTime = "2026-03-02T00:00:00Z";
const modifiedTime = "2026-03-02T00:00:00Z";
const fromPath = "/blog/stardew-valley-artisan-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Artisan Profit Guide: Kegs, Jars, and the Best Money Makers";
const DESCRIPTION =
  "A complete Stardew Valley artisan profit guide. Learn what to process, which machines scale best, how to plan by days-left, and when kegs vs jars (and other artisan tools) actually win.";

const FAQ = [
  {
    question: "Are kegs always better than preserves jars?",
    answer:
      "Not always. Kegs usually win on profit per item for fruit (wine) and many vegetables (juice), but preserves jars can win when your bottleneck is time, when you need faster cash flow, or when you are early-game and can’t keep kegs fed. The best choice is the machine that matches your current bottleneck: crop supply, machine count, or time.",
  },
  {
    question: "What is the most profitable artisan product in Stardew Valley?",
    answer:
      "For many farms, high-value wine (especially Starfruit wine) is the top single artisan product. However, your true best product depends on what you can supply consistently and how many processing machines you can keep running. A slightly lower-value chain that runs every day can beat a higher-value chain that sits idle.",
  },
  {
    question: "How many kegs or jars should I build?",
    answer:
      "Build enough to match your average harvest flow. If crops routinely sit in chests waiting to be processed, you’re under-built. If machines sit empty for days, you’re over-built for your current production. The easiest way is to estimate daily inputs, then scale machines until the backlog disappears.",
  },
  {
    question: "Does the Artisan profession matter for profit?",
    answer:
      "Yes. Artisan increases the sell price of artisan goods by 40%, which is huge for wine, cheese, mayo, and more. If a large portion of your income comes from processed goods, Artisan is one of the strongest money multipliers in the game.",
  },
  {
    question: "Should I sell raw crops or always process everything?",
    answer:
      "Process your highest-value items first, then sell overflow raw if machines would be idle or the processing window is too long. The goal is not ‘process everything,’ it’s ‘maximize gold per day with your limited time and machines.’",
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

const H3 = "text-lg font-semibold text-[#4a321e]";

const P = "mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base";

const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";

const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Table of contents
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#what-is-artisan-profit">
          1) What “artisan profit” really means
        </a>
        <a className={TOC_LINK} href="#keg-vs-jar-framework">
          2) Keg vs Jar: the bottleneck framework
        </a>
        <a className={TOC_LINK} href="#top-artisan-chains">
          3) The top artisan chains (and why)
        </a>
        <a className={TOC_LINK} href="#plan-by-days-left">
          4) Plan by days-left (not by vibes)
        </a>
        <a className={TOC_LINK} href="#machine-priority">
          5) Machine priority: what to build first
        </a>
        <a className={TOC_LINK} href="#common-mistakes">
          6) Common mistakes that kill profit
        </a>
        <a className={TOC_LINK} href="#faq">
          7) FAQ
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
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-6 text-[#5c4033]/90">{children}</div>
    </aside>
  );
}

export default function StardewValleyArtisanProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-artisan-profit-guide", 3);

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
            { name: "Artisan Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Money-Making • Artisan Strategy
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-02</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Best for: mid-game → endgame scaling
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Includes: kegs, jars, animals, and planning
              </span>
            </div>
          </header>

          <Toc />

          <section id="what-is-artisan-profit" className={CARD}>
            <h2 className={H2}>What “artisan profit” really means</h2>
            <p className={P}>
              In Stardew Valley, “artisan profit” is not just a list of the
              highest sell prices. It is the art of turning your farm into a
              reliable gold-per-day engine. Artisan goods work because they
              convert a pile of harvests into a smaller pile of higher-value
              items, and that conversion happens on a timer.
            </p>
            <p className={P}>
              That timer is the whole game. A chain that looks incredible on a
              wiki can be mediocre on your farm if you cannot keep machines fed,
              or if the processing time makes your inventory sit around.
            </p>

            <Callout title="The core idea">
              Your best artisan strategy is whichever one keeps your machines
              running as close to 100% as possible while prioritizing the items
              with the biggest per-input upgrade.
            </Callout>

            <p className={P}>
              If you want a quick baseline of seasonal decisions, pair this
              guide with the broader
              {" "}
              <Link href="/calculator" className={LINK}>
                Stardew Profit Calculator
              </Link>
              {" "}
              to compare raw vs processed outcomes with your days-left and
              profession.
            </p>
          </section>

          <section id="keg-vs-jar-framework" className={CARD}>
            <h2 className={H2}>Keg vs Jar: the bottleneck framework</h2>
            <p className={P}>
              Most “keg vs jar” debates miss the practical question: what is
              limiting you today? Profit comes from throughput, so you should
              choose the machine that removes your current bottleneck.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Bottleneck: crop supply
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  If you harvest occasionally (large spikes), you need flexible
                  capacity. Jars help absorb overflow quickly.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Bottleneck: machine count
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  If chests overflow with “to be processed,” build the machine
                  with the better upgrade per input for your current crops.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Bottleneck: time (days-left)
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  If the season is ending or you need cash now, faster cycles
                  can win even if per-item profit is lower.
                </p>
              </div>
            </div>

            <Callout title="Practical rule of thumb">
              If you are mid-game and can keep them fed, kegs are usually your
              long-term profit engine. If you are early-game or need fast
              turnover, jars are your stability tool.
            </Callout>

            <p className={P}>
              For a dedicated comparison, see our
              {" "}
              <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>
                Keg vs Preserve Jar profit guide
              </Link>
              {" "}
              and use the
              {" "}
              <Link href="/blog/keg-vs-jar-quick-answer" className={LINK}>
                quick-answer version
              </Link>
              {" "}
              when you want an immediate choice.
            </p>
          </section>

          <section id="top-artisan-chains" className={CARD}>
            <h2 className={H2}>The top artisan chains (and why)</h2>
            <p className={P}>
              “Best artisan product” depends on your farm stage and your
              constraints. Here are the most common high-performing chains, and
              the reason they win.
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>1) Starfruit → Wine (keg)</h3>
                <p className={P}>
                  This is the classic “big number” chain. It wins when you can
                  sustain crop supply (greenhouse or consistent summer farming)
                  and you have enough kegs to avoid week-long backlogs.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>2) Ancient Fruit → Wine (keg)</h3>
                <p className={P}>
                  This is the consistency chain. Ancient Fruit is slower to
                  ramp, but its repeat-harvest pattern fits processing
                  schedules. It shines in a greenhouse where your supply never
                  freezes.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>3) Hops → Pale Ale (keg)</h3>
                <p className={P}>
                  Hops can be insane gold per day because harvest frequency is
                  high. The catch: it creates a massive daily input stream, so
                  you need a lot of kegs and an efficient pickup/refill routine.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>4) Pumpkin → Pickles (jar) and Juice (keg)</h3>
                <p className={P}>
                  Pumpkin is a flexible “mid-game power crop.” If you are keg
                  limited, pickles provide reliable income. When you expand
                  kegs, juice becomes a natural upgrade.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>5) Milk → Cheese (cheese press)</h3>
                <p className={P}>
                  Animals are your “always-on” baseline. Cheese is fast, stacks
                  well, and pairs perfectly with the Artisan profession.
                  Endgame farms often use animals to smooth income between big
                  harvest spikes.
                </p>
                <p className={P}>
                  If you want the full barn vs coop breakdown, read
                  {" "}
                  <Link href="/blog/animal-profit-guide" className={LINK}>
                    Animal Profit Guide
                  </Link>
                  .
                </p>
              </div>
            </div>

            <Callout title="A hidden winner: reliability">
              A chain you can run every day with minimal effort often beats a
              “top spreadsheet” chain you only manage once per week.
            </Callout>
          </section>

          <section id="plan-by-days-left" className={CARD}>
            <h2 className={H2}>Plan by days-left (not by vibes)</h2>
            <p className={P}>
              The most common profit mistake is forgetting the calendar. If you
              plant or process without respecting days-left, you turn time into
              waste.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  When you have 20+ days left
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Commit to long-cycle value: wine, slow crops, and scaling
                  kegs. This is where big multipliers are worth it.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  When you have 7-14 days left
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Mix approaches. Process your highest-value items, but don’t
                  start chains that cannot finish.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  When you have 1-6 days left
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Prioritize fast turnarounds (jars) and clean inventory. If a
                  keg cycle won’t finish, sell raw or choose faster processing.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Greenhouse exception
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Greenhouse ignores seasons, so you can focus on steady-state
                  supply and machine utilization instead of deadlines.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  For targeted greenhouse decisions, see
                  {" "}
                  <Link href="/blog/greenhouse-layout-guide" className={LINK}>
                    Greenhouse layout guide
                  </Link>
                  {" "}
                  and
                  {" "}
                  <Link
                    href="/blog/best-greenhouse-crops-stardew-valley"
                    className={LINK}
                  >
                    best greenhouse crops
                  </Link>
                  .
                </p>
              </div>
            </div>

            <p className={P}>
              If you want a fast helper for this, our blog has a seasonal “days
              left” series. Example:
              {" "}
              <Link
                href="/blog/best-crops-7-days-left-before-season-switch"
                className={LINK}
              >
                best crops with 7 days left
              </Link>
              .
            </p>
          </section>

          <section id="machine-priority" className={CARD}>
            <h2 className={H2}>Machine priority: what to build first</h2>
            <p className={P}>
              If you are asking “what should I build next,” you likely have a
              backlog bottleneck. Here is a practical build order that works on
              most farms.
            </p>

            <ol className="mt-5 space-y-4">
              <li className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  1) One processing lane you can keep fed
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Start with a small set (10-20) and keep them running. The
                  habit is more important than the count.
                </p>
              </li>
              <li className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  2) Expand the machine that matches your best crop
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  If your farm is fruit-heavy, expand kegs. If your farm is
                  vegetable-heavy early game, jars can carry you while you ramp.
                </p>
              </li>
              <li className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  3) Add “always-on” income (animals)
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Animals provide daily items that fit nicely into short-cycle
                  processing and stabilize your cash flow.
                </p>
              </li>
              <li className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">
                  4) Quality-of-life upgrades that prevent downtime
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Sprinklers, sheds, and layout improvements increase your
                  effective processing capacity by reducing daily friction.
                </p>
              </li>
            </ol>

            <p className={P}>
              If you want a quick planning shortcut, use our
              {" "}
              <Link href="/blog/how-many-kegs-do-i-need-quick-answer" className={LINK}>
                keg count guide
              </Link>
              {" "}
              and then decide what you can realistically feed.
            </p>
          </section>

          <section id="common-mistakes" className={CARD}>
            <h2 className={H2}>Common mistakes that kill profit</h2>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>Mistake 1: building too many machines too early</h3>
                <p className={P}>
                  A hundred idle kegs do not make you rich. Ten kegs that are
                  always running do. Expand when you can consistently supply.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>Mistake 2: ignoring processing time</h3>
                <p className={P}>
                  A “high profit per item” chain can lose to a lower chain if it
                  is too slow for your schedule or for the season deadline.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>Mistake 3: not committing to a profession plan</h3>
                <p className={P}>
                  If you build your whole farm around processing, Artisan is a
                  massive multiplier. If you are mostly selling raw crops, it
                  matters less.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5">
                <h3 className={H3}>Mistake 4: letting inventory become a backlog</h3>
                <p className={P}>
                  A chest full of “I’ll process this later” is lost money.
                  Either expand capacity, simplify your crop mix, or sell raw.
                </p>
              </div>
            </div>

            <Callout title="The simplest win">
              Pick one main chain (for example, fruit → wine), then use jars and
              animal processing as your “overflow + stability” system.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[#7c4d2e]/25 bg-white/35 p-5"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-[#4a321e]">
                    {item.question}
                    <span className="float-right text-[#6f4b2a]/80 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <p className={P}>
              Want the fastest next step? Open the
              {" "}
              <Link href="/calculator" className={LINK}>
                calculator
              </Link>
              {" "}
              with your profession and days-left, then compare “raw” vs “keg” vs
              “jar” outputs for your current crop mix.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Related Guides (Recommended Next)</h2>
            <p className={P}>
              Use these links to jump from the strategy to the exact numbers (machine count, days-left, and profit per day).
            </p>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href="/calculator" className={LINK}>
                  Profit Calculator (compare chains)
                </Link>
              </li>
              <li>
                <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>
                  Keg vs Jar (full profit guide)
                </Link>
              </li>
              <li>
                <Link href="/blog/how-many-kegs-do-i-need-quick-answer" className={LINK}>
                  How Many Kegs Do I Need? (capacity planning)
                </Link>
              </li>
              <li>
                <Link href="/blog/wine-vs-juice-quick-answer" className={LINK}>
                  Wine vs Juice (keg bottlenecks)
                </Link>
              </li>
              <li>
                <Link href="/blog/best-greenhouse-crops-stardew-valley" className={LINK}>
                  Best Greenhouse Crops (throughput guide)
                </Link>
              </li>
              <li>
                <Link href="/blog/ancient-fruit-vs-starfruit-quick-answer" className={LINK}>
                  Ancient Fruit vs Starfruit
                </Link>
              </li>
              <li>
                <Link href="/blog/animal-profit-guide" className={LINK}>
                  Animal profit guide (stable daily income)
                </Link>
              </li>
              <li>
                <Link href="/blog/best-crops-every-season" className={LINK}>
                  Best crops for every season
                </Link>
              </li>
              <li>
                <Link href="/blog/speed-gro-vs-deluxe-speed-gro" className={LINK}>
                  Speed-Gro vs Deluxe Speed-Gro
                </Link>
              </li>
              <li>
                <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                  Profit guide 2026 (roadmap)
                </Link>
              </li>
            </ul>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Read Next</h2>
            <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-artisan-profit-guide" />
          </section>
        </article>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
