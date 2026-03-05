import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { getBlogReadNextPosts } from "@/lib/read-next";

const publishedTime = "2026-03-05T00:00:00Z";
const modifiedTime = "2026-03-05T00:00:00Z";
const fromPath = "/blog/stardew-valley-keg-jar-artisan-profit-system";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Keg vs Jar: The Artisan Profit System (A Complete, Scalable Guide)";

const DESCRIPTION =
  "A complete Stardew Valley processing profit guide: how to choose between kegs and preserves jars, build a scalable artisan pipeline, and avoid the most common bottlenecks using simple machine-day math.";

const FAQ = [
  {
    question: "Are kegs always more profitable than preserves jars?",
    answer:
      "Not always. Kegs often win on profit per item for many fruits (wine), but they also take much longer. If your limiting factor is machine time (not crop supply), preserves jars can beat kegs on profit per machine-day for some crops and situations. The best answer depends on your bottleneck and your harvest schedule.",
  },
  {
    question: "What is the best way to decide between kegs and jars?",
    answer:
      "Use a simple bottleneck check: if you have more crops than machines, you should compare options by profit per machine-day (how much gold each machine can generate over time). If you have plenty of machines and not enough crops, compare by profit per item. This one switch prevents most processing mistakes.",
  },
  {
    question: "When should I switch to Artisan for processing profits?",
    answer:
      "Switch when a meaningful share of your income comes from processed goods like wine, jelly, cheese, and mayonnaise. Artisan is a large multiplier, so the earlier your farm is processing-heavy, the more value you gain. If most income is still raw crops, you can delay until your pipeline is stable.",
  },
  {
    question: "How many kegs or jars do I need?",
    answer:
      "Enough that you are not building a permanent backlog. If crops sit in chests for weeks, you need more machines (or a faster option like jars). If machines sit empty, you have more capacity than supply. The correct number is the one that matches your harvest cadence.",
  },
  {
    question: "Do I need the Greenhouse for an artisan profit system?",
    answer:
      "No, but it helps. A greenhouse makes your input supply stable year-round, which makes a processing pipeline easier to balance. Without it, you can still run a strong artisan system by rotating seasonal crops and keeping machines fed with a weekly routine.",
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

const LI = "ml-5 list-disc text-sm leading-6 text-[#5c4033]/90 sm:text-base";

const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";

const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";

const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Table of contents
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#quick-answer">
          1) Quick answer (keg vs jar)
        </a>
        <a className={TOC_LINK} href="#bottleneck-framework">
          2) The bottleneck framework (the only rule)
        </a>
        <a className={TOC_LINK} href="#machine-day-math">
          3) Machine-day math (simple examples)
        </a>
        <a className={TOC_LINK} href="#crop-archetypes">
          4) Crop archetypes and what to do
        </a>
        <a className={TOC_LINK} href="#build-order">
          5) Build order: scaling your pipeline
        </a>
        <a className={TOC_LINK} href="#weekly-routine">
          6) Weekly routine (30 minutes of discipline)
        </a>
        <a className={TOC_LINK} href="#common-mistakes">
          7) Common mistakes (and fixes)
        </a>
        <a className={TOC_LINK} href="#faq">
          8) FAQ
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

export default function StardewValleyKegJarArtisanProfitSystemPage() {
  const readNextPosts = getBlogReadNextPosts(
    "stardew-valley-keg-jar-artisan-profit-system",
    3,
  );

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
            { name: "Stardew Valley Keg vs Jar: The Artisan Profit System" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Artisan • Processing • Keg vs Jar
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published: <time dateTime={publishedTime}>2026-03-05</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-05</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Best for: scaling stable weekly income
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Open the Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/keg-vs-jar-profit-guide">
                Read: Keg vs Jar Profit Guide
              </Link>
            </div>
          </header>

          <Toc />

          <section id="quick-answer" className={CARD}>
            <h2 className={H2}>Quick answer: keg vs jar (what most players should do)</h2>
            <p className={P}>
              If you want the answer without the math: start with preserves jars for
              fast cash, then transition to kegs as your long-term engine. But the
              moment you treat that as a universal rule, you will either waste
              machine time or drown in backlog.
            </p>
            <p className={P}>
              The real rule is simple: choose the option that matches your current
              bottleneck. Most farms are bottlenecked by machine time, not crops.
              That is why “profit per machine-day” usually matters more than “profit
              per item.”
            </p>

            <Callout title="If you only remember one thing">
              When you have <strong>more crops than machines</strong>, compare keg vs
              jar by <strong>gold per machine-day</strong>. When you have
              <strong> more machines than crops</strong>, compare by
              <strong> gold per item</strong>.
            </Callout>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-4 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Pick preserves jars when…
                </p>
                <ul className="mt-3 space-y-2">
                  <li className={LI}>You need faster cash flow.</li>
                  <li className={LI}>
                    Your harvest is frequent (berries, regrow crops).
                  </li>
                  <li className={LI}>
                    You are early/mid game and building capacity.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-4 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Pick kegs when…
                </p>
                <ul className="mt-3 space-y-2">
                  <li className={LI}>
                    You have stable input (greenhouse or big fields).
                  </li>
                  <li className={LI}>You can keep kegs running constantly.</li>
                  <li className={LI}>
                    You are optimizing long-term profit and have Artisan.
                  </li>
                </ul>
              </div>
            </div>

            <p className={P}>
              If you want crop-by-crop comparisons, use the site’s calculator for
              raw crop value and then read the focused processing guides for the
              deeper assumptions.
            </p>
            <p className={P}>
              Internal reads you might want next: the dedicated
              <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">
                {" "}
                keg vs jar profit guide
              </Link>
              , the short
              <Link className={LINK} href="/blog/wine-vs-juice-quick-answer">
                {" "}
                wine vs juice quick answer
              </Link>
              , and the broader
              <Link className={LINK} href="/blog/stardew-valley-artisan-profit-guide">
                {" "}
                artisan profit guide
              </Link>
              .
            </p>
          </section>

          <section id="bottleneck-framework" className={CARD}>
            <h2 className={H2}>The bottleneck framework (the only rule you need)</h2>
            <p className={P}>
              Most guides fail because they talk as if you have infinite machines.
              You do not. A keg takes a long time; a jar takes less. If you build a
              plan around “profit per item” while your machines are scarce, you will
              accidentally choose the option that looks rich but produces less gold
              over real time.
            </p>
            <p className={P}>
              Here is the framework that stays correct no matter what stage your
              farm is in:
            </p>
            <ol className="mt-4 space-y-3">
              <li className={LI}>
                Identify your limiting factor this week: crops, machines, or time.
              </li>
              <li className={LI}>
                If machines are limiting, compare options by gold per machine-day.
              </li>
              <li className={LI}>
                If crops are limiting (machines are idle), compare by gold per
                item.
              </li>
              <li className={LI}>
                If player time is limiting, choose the more convenient option even
                if it is slightly lower profit.
              </li>
            </ol>

            <Callout title="A practical bottleneck test">
              Open a chest where you store processing inputs.
              <ul className="mt-2 space-y-2">
                <li className={LI}>
                  If it is always overflowing, machines are limiting.
                </li>
                <li className={LI}>
                  If it is often empty and you wait for crops, crops are limiting.
                </li>
                <li className={LI}>
                  If both happen, your farm is in transition and you should scale
                  machines while improving crop consistency.
                </li>
              </ul>
            </Callout>

            <p className={P}>
              This is also why the greenhouse is such a big deal. It turns your
              processing system into something you can balance permanently instead
              of re-balancing every season.
            </p>
            <p className={P}>
              If you are still building your greenhouse plan, these posts help:
              <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">
                {" "}
                best greenhouse crops
              </Link>
              ,
              <Link className={LINK} href="/blog/greenhouse-layout-guide">
                {" "}
                greenhouse layout guide
              </Link>
              , and
              <Link className={LINK} href="/blog/greenhouse-keg-empire-profit-guide">
                {" "}
                greenhouse keg empire
              </Link>
              .
            </p>
          </section>

          <section id="machine-day-math" className={CARD}>
            <h2 className={H2}>Machine-day math (simple examples you can reuse)</h2>
            <p className={P}>
              You do not need exact spreadsheets to make good decisions. You just
              need to think in units of “machine-days.” A machine that runs for
              longer must pay you more to be worth the time.
            </p>

            <h3 className={`mt-5 ${H3}`}>Step 1: Define the two metrics</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>
                <strong>Profit per item</strong>: extra gold you earn by processing
                one crop instead of selling it raw.
              </li>
              <li className={LI}>
                <strong>Profit per machine-day</strong>: profit per item divided by
                how long the machine is busy.
              </li>
            </ul>

            <h3 className={`mt-6 ${H3}`}>Step 2: Ask the right question</h3>
            <p className={P}>
              If your goal is “I have 20 kegs and 300 fruit,” the question is not
              “which is best?” It is “which option yields more gold per day for the
              machines I actually own?”
            </p>

            <Callout title="Rule of thumb for early farms">
              Early game, jars often feel better because they shorten the cash-flow
              cycle. That faster cycle can be worth more than a slightly higher per
              item profit, because it funds more seeds, more barns, and more
              machines.
            </Callout>

            <p className={P}>
              When you want to double-check seasonal crops quickly, use the
              <Link className={LINK} href="/calculator">
                {" "}
                Stardew Profit Calculator
              </Link>
              . It’s the fastest way to sanity-check raw value before you decide
              whether processing time is worth it.
            </p>
          </section>

          <section id="crop-archetypes" className={CARD}>
            <h2 className={H2}>Crop archetypes (and what to do with each)</h2>
            <p className={P}>
              Instead of memorizing dozens of individual crop comparisons, group
              crops into a few archetypes. Then you can make a correct decision even
              when you forget the numbers.
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  1) High-value fruit (wine candidates)
                </p>
                <p className={P}>
                  Think Ancient Fruit, Starfruit, and other expensive fruit.
                  Typically strong in kegs long-term, especially with Artisan.
                </p>
                <p className={P}>
                  If you are choosing between two popular greenhouse fruits, read
                  <Link className={LINK} href="/blog/ancient-fruit-vs-starfruit">
                    {" "}
                    Ancient Fruit vs Starfruit
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  2) Frequent-harvest crops (backlog traps)
                </p>
                <p className={P}>
                  Berries, regrow crops, and “lots of small harvests” can flood your
                  processing system. If you process everything, you stop playing the
                  game and start sorting chests.
                </p>
                <p className={P}>
                  Strategy: process the best portion, sell the rest raw, or use jars
                  as a faster conversion.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  3) Cheap crops you grow for volume
                </p>
                <p className={P}>
                  These crops are often not worth long processing time unless you
                  have surplus machine capacity. If you are machine-limited, give
                  your machines high-value inputs and let cheap crops be raw cash.
                </p>
                <p className={P}>
                  If you want an all-season, non-processor comparison, use
                  <Link className={LINK} href="/blog/best-crops-every-season">
                    {" "}
                    best crops every season
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="build-order" className={CARD}>
            <h2 className={H2}>Build order: how to scale a real artisan pipeline</h2>
            <p className={P}>
              A “processing system” is not a single choice between kegs and jars.
              It is a pipeline: input crops → machines → storage → shipping. The
              best farms build in stages.
            </p>

            <h3 className={`mt-5 ${H3}`}>Stage A: Create stable inputs</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Pick one reliable cash crop per season.</li>
              <li className={LI}>
                If you have the greenhouse, commit to a baseline crop you can
                harvest weekly.
              </li>
            </ul>

            <h3 className={`mt-6 ${H3}`}>Stage B: Build fast conversion first</h3>
            <p className={P}>
              Preserves jars are often the best early “stabilizer.” They turn random
              harvests into predictable gold and reduce the chaos of chest overflow.
            </p>

            <h3 className={`mt-6 ${H3}`}>Stage C: Add long-cycle machines</h3>
            <p className={P}>
              Kegs become your long-term engine once you can keep them busy.
              Whether you process fruit into wine or vegetables into juice, the
              principle is the same: avoid idle time.
            </p>

            <Callout title="A sanity-check question">
              If you built 20 more kegs today, do you already have the crop supply
              to keep them running? If not, build fewer kegs and put the resources
              into your input supply.
            </Callout>

            <p className={P}>
              If you want a dedicated plan for scaling greenhouse processing, the
              most detailed version is
              <Link className={LINK} href="/blog/greenhouse-keg-empire-profit-guide">
                {" "}
                Greenhouse Keg Empire Profit Guide
              </Link>
              .
            </p>
          </section>

          <section id="weekly-routine" className={CARD}>
            <h2 className={H2}>Weekly routine (30 minutes of discipline)</h2>
            <p className={P}>
              The fastest way to make processing profitable is to give it a
              schedule. If you treat it like “whenever I remember,” machines sit
              idle and you lose the whole advantage.
            </p>

            <ol className="mt-4 space-y-3">
              <li className={LI}>
                Pick one “processing day” per week (e.g. Sunday).
              </li>
              <li className={LI}>
                Harvest your stable inputs first (greenhouse, regrow crops).
              </li>
              <li className={LI}>
                Refill all kegs and jars from one dedicated chest.
              </li>
              <li className={LI}>
                If you cannot fill everything, that is data: your bottleneck is
                crops, not machines.
              </li>
              <li className={LI}>
                If you always have leftovers, scale machines or choose faster
                conversions.
              </li>
            </ol>

            <p className={P}>
              This routine also makes it easier to answer “how many machines do I
              need?” You do not need perfect math; you just need a consistent
              cadence.
            </p>
          </section>

          <section id="common-mistakes" className={CARD}>
            <h2 className={H2}>Common mistakes (and how to fix them)</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Mistake: Processing everything
                </p>
                <p className={P}>
                  Fix: Process the best inputs, sell the rest raw. Your goal is
                  continuous machine uptime, not perfect conversion of every item.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Mistake: Choosing by profit per item when machines are scarce
                </p>
                <p className={P}>
                  Fix: Switch your comparison to profit per machine-day.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Mistake: Building a keg empire without stable inputs
                </p>
                <p className={P}>
                  Fix: Secure a weekly harvest source first (greenhouse or a
                  consistent seasonal crop). A processing system is only as stable
                  as its inputs.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Mistake: Forgetting opportunity cost
                </p>
                <p className={P}>
                  Fix: Sometimes the best “processing decision” is to spend the day
                  in Skull Cavern, upgrade tools, or unlock the greenhouse faster.
                  If you want a mining-focused gold plan, read
                  <Link className={LINK} href="/blog/skull-cavern-mining-profit-guide">
                    {" "}
                    Skull Cavern mining profit guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10"
                >
                  <h3 className={H3}>{item.question}</h3>
                  <p className={P}>{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-5 ring-1 ring-yellow-900/10">
              <p className="text-sm font-semibold text-[#4a321e]">
                Want a crop plan to feed your machines?
              </p>
              <p className={P}>
                Start with
                <Link className={LINK} href="/blog/best-crops-year-1">
                  {" "}
                  best crops for Year 1
                </Link>
                , then use the
                <Link className={LINK} href="/calculator">
                  {" "}
                  calculator
                </Link>
                {" "}
                to compare candidates for your current season.
              </p>
            </div>
          </section>

          <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-keg-jar-artisan-profit-system" />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
