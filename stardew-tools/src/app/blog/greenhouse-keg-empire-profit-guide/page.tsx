import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { getBlogReadNextPosts } from "@/lib/read-next";

const publishedTime = "2026-03-04T00:00:00Z";
const modifiedTime = "2026-03-04T00:00:00Z";
const fromPath = "/blog/greenhouse-keg-empire-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Greenhouse Keg Empire Profit Guide (Stardew Valley): The Best Year-Round Money Plan";

const DESCRIPTION =
  "A complete greenhouse profit guide for Stardew Valley: what to plant, when to switch to kegs, how many machines you need, and a simple weekly routine to scale into a year-round wine empire.";

const FAQ = [
  {
    question: "What is the most profitable greenhouse crop in Stardew Valley?",
    answer:
      "For many players, Ancient Fruit becomes the best long-term greenhouse crop because it keeps producing and makes strong wine in kegs. Starfruit can be higher per harvest, but it needs replanting. The true best choice depends on your goals: convenience and consistency (Ancient Fruit) versus batch spikes (Starfruit).",
  },
  {
    question: "Should I grow Ancient Fruit or Starfruit in the greenhouse?",
    answer:
      "If you want a stable, low-maintenance setup, Ancient Fruit usually wins because you plant once and harvest forever. If you prefer active farming with bigger harvest spikes (and you can afford seeds), Starfruit is great. Many farms use both: Ancient Fruit as the baseline, with Starfruit batches when you have spare tiles or want a cash surge.",
  },
  {
    question: "How many kegs do I need for a greenhouse?",
    answer:
      "A practical goal is to build enough kegs that your weekly harvest turns into a weekly keg cycle without a growing backlog. If fruit piles up in chests for weeks, you need more kegs. If kegs sit empty, you have more machines than crop supply.",
  },
  {
    question: "Are preserves jars ever better than kegs in a greenhouse?",
    answer:
      "They can be, depending on your bottleneck. Jars finish faster, which helps when you have limited crops but plenty of jars, or when you need quicker cash flow. Kegs often win on profit per item for fruit (wine), especially with the Artisan profession, but jars are a strong bridge while you scale.",
  },
  {
    question: "When should I switch to the Artisan profession for greenhouse profits?",
    answer:
      "Switch when a meaningful share of your income comes from processed goods (wine, jelly, cheese, mayo). Artisan is a huge multiplier for a greenhouse-focused economy. If most of your income is still raw crops, Tiller can be fine until your processing pipeline grows.",
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
        <a className={TOC_LINK} href="#quick-plan">
          1) The quick plan (what to do first)
        </a>
        <a className={TOC_LINK} href="#greenhouse-goal">
          2) The greenhouse goal: a stable pipeline
        </a>
        <a className={TOC_LINK} href="#what-to-plant">
          3) What to plant (Ancient Fruit vs Starfruit)
        </a>
        <a className={TOC_LINK} href="#kegs-and-bottlenecks">
          4) Kegs, jars, and the bottleneck framework
        </a>
        <a className={TOC_LINK} href="#how-many-kegs">
          5) How many kegs you actually need
        </a>
        <a className={TOC_LINK} href="#weekly-routine">
          6) A simple weekly routine
        </a>
        <a className={TOC_LINK} href="#common-mistakes">
          7) Common greenhouse profit mistakes
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

export default function GreenhouseKegEmpireProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts(
    "greenhouse-keg-empire-profit-guide",
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
            { name: "Greenhouse Keg Empire Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Greenhouse • Profit Planning • Artisan Scaling
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-04</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Best for: stable year-round gold
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Includes: planting plan + keg math + routine
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

          <section id="quick-plan" className={CARD}>
            <h2 className={H2}>The quick plan (what to do first)</h2>
            <p className={P}>
              If you want the shortest path from “I finally fixed the greenhouse” to
              “my farm prints money,” use this sequence. It is intentionally boring.
              Boring is reliable.
            </p>

            <ol className="mt-4 space-y-3">
              <li className={LI}>
                Pick one core greenhouse crop (Ancient Fruit for consistency, Starfruit
                for batches).
              </li>
              <li className={LI}>
                Build a processing pipeline that matches your bottleneck: kegs if you
                have steady harvests, jars if you need faster turnover.
              </li>
              <li className={LI}>
                Aim for a stable weekly loop: harvest → reload machines → ship on a
                consistent day.
              </li>
              <li className={LI}>
                Upgrade with the Artisan profession once processing becomes your main
                income multiplier.
              </li>
              <li className={LI}>
                Use the
                {" "}
                <Link
                  href="/calculator?season=all&daysLeft=28&profession=artisan"
                  className={LINK}
                >
                  calculator preset with Artisan
                </Link>
                {" "}
                to sanity-check choices before you commit to 150+ kegs.
              </li>
            </ol>

            <Callout title="If you only remember one rule">
              Your greenhouse profit is mostly determined by machine uptime. A slightly
              worse crop that keeps machines running can beat the “best” crop that sits
              in a chest for two seasons.
            </Callout>
          </section>

          <section id="greenhouse-goal" className={CARD}>
            <h2 className={H2}>The greenhouse goal: a stable pipeline</h2>
            <p className={P}>
              The greenhouse is powerful for one reason: it converts farming from a
              seasonal puzzle into a year-round production line. That changes what
              “profit” means.
            </p>
            <p className={P}>
              In a seasonal field, your limiting factor is often the calendar. In the
              greenhouse, your limiting factor becomes how well you can keep a pipeline
              running: harvest timing → machine timing → inventory timing.
            </p>

            <h3 className={`${H3} mt-6`}>Think like a factory (not a garden)</h3>
            <p className={P}>
              A good greenhouse setup has three features:
            </p>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Predictable harvest days.</li>
              <li className={LI}>A machine loop that matches those harvests.</li>
              <li className={LI}>A “ship day” habit that keeps cash flow clean.</li>
            </ul>

            <p className={P}>
              If you have not built a greenhouse layout you like, start here:
              {" "}
              <Link href="/blog/greenhouse-layout-guide" className={LINK}>
                Greenhouse Layout Guide
              </Link>
              . Layout decisions don’t only affect convenience — they affect how fast
              you harvest, which affects machine uptime.
            </p>
          </section>

          <section id="what-to-plant" className={CARD}>
            <h2 className={H2}>What to plant (Ancient Fruit vs Starfruit)</h2>
            <p className={P}>
              Most greenhouse debates are framed as a simple question: “Which crop makes
              more?” That is a trap. The better question is: “Which crop lets my whole
              pipeline run smoothly with the machines and time I actually have?”
            </p>

            <h3 className={`${H3} mt-6`}>Ancient Fruit: the consistency king</h3>
            <p className={P}>
              Ancient Fruit is the default recommendation for a reason. You plant once,
              then you harvest forever. That simplicity is an economic advantage:
            </p>
            <ul className="mt-3 space-y-2">
              <li className={LI}>No replanting time.</li>
              <li className={LI}>No seed shopping routine.</li>
              <li className={LI}>A steady harvest rhythm that feeds kegs cleanly.</li>
            </ul>

            <p className={P}>
              If you want a deeper comparison (including wine outcomes), read:
              {" "}
              <Link href="/blog/ancient-fruit-vs-starfruit" className={LINK}>
                Ancient Fruit vs Starfruit
              </Link>
              .
            </p>

            <h3 className={`${H3} mt-6`}>Starfruit: the batch profit spike</h3>
            <p className={P}>
              Starfruit is more active. You buy seeds and replant, which costs time and
              attention. In exchange, you get strong batch harvests that can create big
              wine shipments.
            </p>
            <p className={P}>
              Starfruit shines if you enjoy “batch economics”: plant a lot, process a
              lot, ship a lot. That playstyle can be extremely profitable — but it can
              also create massive processing backlogs if your keg count is low.
            </p>

            <Callout title="A hybrid approach that works well">
              Use Ancient Fruit as your always-on baseline, then run Starfruit batches
              when you have spare tiles or want a cash spike (for obelisks, return
              scepter, etc.). The hybrid plan is often easier than going all-in on
              Starfruit.
            </Callout>

            <p className={P}>
              For a quick “wine math” perspective, this is helpful:
              {" "}
              <Link href="/blog/ancient-fruit-wine-vs-starfruit-wine" className={LINK}>
                Ancient Fruit Wine vs Starfruit Wine
              </Link>
              .
            </p>
          </section>

          <section id="kegs-and-bottlenecks" className={CARD}>
            <h2 className={H2}>Kegs, jars, and the bottleneck framework</h2>
            <p className={P}>
              When players argue “kegs are best” or “jars are underrated,” they are
              usually talking past each other. Both can be correct — because each machine
              is better under different bottlenecks.
            </p>

            <h3 className={`${H3} mt-6`}>Step 1: Identify your bottleneck</h3>
            <p className={P}>
              Most farms are limited by one of these:
            </p>
            <ul className="mt-3 space-y-2">
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Crop supply</span>: you
                don’t harvest enough to keep machines full.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Machine count</span>:
                you harvest more than you can process.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Time / routine</span>:
                you forget to reload machines, or you reload late.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>Step 2: Pick the machine that reduces your pain</h3>
            <p className={P}>
              Kegs tend to win on “profit per input” for fruit (wine). Preserves jars
              tend to win on “profit per day per machine” early on because they finish
              faster.
            </p>
            <p className={P}>
              If you want the full decision tree (including edge cases), use:
              {" "}
              <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>
                Keg vs Preserve Jar Profit Guide
              </Link>
              .
            </p>

            <Callout title="A simple rule of thumb">
              If fruit is waiting in chests for weeks, build more kegs. If you can’t
              keep kegs fed, add jars (or reduce crop variety) to keep the pipeline
              moving.
            </Callout>

            <p className={P}>
              Want a “numbers-first” check? Plug your crop choice into
              {" "}
              <Link href="/calculator" className={LINK}>
                the calculator
              </Link>
              {" "}
              and compare raw vs processed. Then repeat with different “days left”
              values to see how time pressure changes the answer.
            </p>
          </section>

          <section id="how-many-kegs" className={CARD}>
            <h2 className={H2}>How many kegs you actually need</h2>
            <p className={P}>
              “How many kegs should I build?” is really two questions:
            </p>
            <ul className="mt-3 space-y-2">
              <li className={LI}>How much fruit do you harvest per cycle?</li>
              <li className={LI}>How often do you want to reload kegs?</li>
            </ul>

            <h3 className={`${H3} mt-6`}>The backlog test (the only test that matters)</h3>
            <p className={P}>
              Track your fruit pile for two in-game weeks.
            </p>
            <ul className="mt-3 space-y-2">
              <li className={LI}>
                If the pile grows: you are under-built (add kegs or add jars as a
                buffer).
              </li>
              <li className={LI}>
                If the pile shrinks to near-zero: you are close to balanced.
              </li>
              <li className={LI}>
                If machines sit empty for days: you are over-built for current supply.
              </li>
            </ul>

            <p className={P}>
              If you want a quicker “keg count intuition” and common pitfalls, read:
              {" "}
              <Link href="/blog/how-many-kegs-do-i-need-quick-answer" className={LINK}>
                How Many Kegs Do I Need?
              </Link>
              .
            </p>

            <Callout title="Why this beats spreadsheet perfection">
              In real gameplay, your harvest timing, travel time, and routine consistency
              create more variance than small price differences. The backlog test captures
              the real system behavior with almost zero effort.
            </Callout>
          </section>

          <section id="weekly-routine" className={CARD}>
            <h2 className={H2}>A simple weekly routine</h2>
            <p className={P}>
              The most profitable greenhouse setups are usually the simplest. You want a
              routine that you can follow even when you’re busy mining, decorating, or
              chasing perfection goals.
            </p>

            <h3 className={`${H3} mt-6`}>The “one day to harvest, one day to ship” loop</h3>
            <p className={P}>
              Pick a consistent day (or two) to do greenhouse operations. Then do the
              same steps every time:
            </p>
            <ol className="mt-4 space-y-3">
              <li className={LI}>Harvest greenhouse crops.</li>
              <li className={LI}>Reload kegs/jars immediately.</li>
              <li className={LI}>Move finished goods to a shipping chest.</li>
              <li className={LI}>Ship on a consistent day for clean comparisons.</li>
            </ol>

            <p className={P}>
              If you want to compare “greenhouse-first” strategy against broader farm
              income, this guide is a good pairing:
              {" "}
              <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                Stardew Valley Profit Guide
              </Link>
              .
            </p>

            <h3 className={`${H3} mt-6`}>Cash flow: when jars help</h3>
            <p className={P}>
              Sometimes you don’t need maximum profit per item — you need gold now (tool
              upgrades, buildings, bus, skull cavern runs). In those windows, preserves
              jars can function like a “cash-flow accelerator,” even if wine wins long
              term.
            </p>
            <p className={P}>
              A practical tactic: keep a small bank of jars for “fast turn” goods while
              you scale kegs for your main fruit pipeline.
            </p>
          </section>

          <section id="common-mistakes" className={CARD}>
            <h2 className={H2}>Common greenhouse profit mistakes</h2>
            <p className={P}>
              These mistakes show up on almost every farm that struggles to turn the
              greenhouse into a reliable income engine.
            </p>

            <h3 className={`${H3} mt-6`}>Mistake #1: Mixing too many crop types</h3>
            <p className={P}>
              Variety is fun — but variety makes your processing pipeline harder. If you
              grow many crop types, your machine reload rhythm becomes irregular, and
              idle time increases.
            </p>

            <h3 className={`${H3} mt-6`}>Mistake #2: Building machines before stabilizing supply</h3>
            <p className={P}>
              Players sometimes craft 60 kegs, then realize they don’t have a stable crop
              loop yet. Build in phases: stabilize harvest rhythm first, then expand
              processing.
            </p>

            <h3 className={`${H3} mt-6`}>Mistake #3: “Perfect math” that ignores routine</h3>
            <p className={P}>
              A plan that requires you to reload kegs at the exact hour every time is
              not a plan — it’s a fantasy. The best plan is the one you will actually
              follow.
            </p>

            <Callout title="Fix your routine first">
              If you’re not sure what to do next, simplify. One crop. One machine
              priority. One weekly loop. Then scale.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-5 space-y-5">
              {FAQ.map((item) => (
                <div key={item.question} className="rounded-2xl bg-white/35 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">
                    {item.question}
                  </h3>
                  <p className={P}>{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Compare greenhouse options
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/best-greenhouse-crops-stardew-valley">
                Read: Best Greenhouse Crops
              </Link>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Read next</h2>
            <BlogReadNext posts={readNextPosts} currentSlug="greenhouse-keg-empire-profit-guide" />
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
