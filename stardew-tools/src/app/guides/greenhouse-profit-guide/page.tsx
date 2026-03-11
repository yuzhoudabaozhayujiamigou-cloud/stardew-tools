import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SITE_ORIGIN } from "@/lib/site";

const SITE_URL = SITE_ORIGIN;

const publishedTime = "2026-03-08T00:00:00.000Z";
const modifiedTime = "2026-03-08T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Greenhouse Profit Guide (Stardew Valley): Best Crops, Layouts & Daily Gold",
  description:
    "A complete greenhouse profit guide for Stardew Valley: the best crops by seasonless ROI, optimal sprinkler layouts, and artisan strategies to maximize daily gold—plus FAQs and calculators.",
  openGraph: {
    title: "Greenhouse Profit Guide (Stardew Valley): Best Crops, Layouts & Daily Gold",
    description:
      "Plan a high-profit greenhouse with the best crops, proven sprinkler layouts, and artisan processing rules of thumb. Includes FAQs and internal calculators.",
    url: `${SITE_URL}/guides/greenhouse-profit-guide`,
    siteName: "Stardew Profit",
    type: "article",
    publishedTime,
    modifiedTime,
    images: [
      {
        url: `${SITE_URL}/og/greenhouse-profit-guide.png`,
        width: 1200,
        height: 630,
        alt: "Greenhouse Profit Guide for Stardew Valley",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_URL}/guides/greenhouse-profit-guide`,
  },
};

const toc = [
  { id: "why-greenhouse", label: "Why the Greenhouse Is a Profit Engine" },
  { id: "profit-formula", label: "How Greenhouse Profit Works (The Simple Formula)" },
  { id: "best-crops", label: "Best Greenhouse Crops (Shortlist + When to Use Each)" },
  { id: "sprinkler-layouts", label: "Sprinkler Layouts & Space Planning" },
  { id: "artisan-path", label: "Artisan Processing: Kegs vs Jars in a Greenhouse Run" },
  { id: "daily-routine", label: "A Practical Daily Routine (So You Actually Earn the Gold)" },
  { id: "late-game", label: "Late-Game Upgrades: Iridium, Junimo Chests, Fertilizer" },
  { id: "mistakes", label: "Common Mistakes That Cut Greenhouse Profit" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "What is the single best crop for the greenhouse?",
    answer:
      "For most players, Ancient Fruit is the best greenhouse staple because it regrows, has strong base value, and becomes extremely profitable when processed in kegs. Starfruit can beat it in raw value per harvest, but requires replanting and more active management.",
  },
  {
    question: "Is it better to use kegs or preserves jars for greenhouse crops?",
    answer:
      "It depends on your bottleneck. Kegs usually win on total profit for high-value fruits (Ancient Fruit, Starfruit) but take longer. Preserves jars finish faster and can produce more gold per day when you have limited machines or want quick turnover. Many optimal setups use kegs for your top-tier fruit and jars for overflow.",
  },
  {
    question: "Do I need deluxe speed-gro in the greenhouse?",
    answer:
      "Often, no. The greenhouse is seasonless and already efficient. Speed-Gro matters most for crops where an extra harvest over time changes the math, or when you’re racing for early-game cash. If your limiting factor is processing capacity (kegs/jars), fertilizer won’t fix that.",
  },
  {
    question: "Can fruit trees in the greenhouse increase profit?",
    answer:
      "Yes. Fruit trees grow on the greenhouse perimeter and don’t consume tilled crop tiles. They add steady daily fruit once mature, which can be eaten, gifted, or processed (jars are common). They’re a solid passive supplement rather than your main profit driver.",
  },
  {
    question: "How many crop tiles are in the greenhouse?",
    answer:
      "The plantable soil area is 116 tiles. That number matters because it’s the basis for estimating daily gold and planning processing capacity.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f1df] text-slate-900">
      <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Greenhouse Profit Guide", href: "/guides/greenhouse-profit-guide" },
          ]}
        />

        <FaqJsonLd faqs={faqs} />

        <header className="mt-6 rounded-2xl border border-amber-200 bg-white/60 p-6 shadow-sm">
          <p className="text-sm text-slate-600">Updated: {new Date(modifiedTime).toISOString().slice(0, 10)}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Greenhouse Profit Guide (Stardew Valley): Best Crops, Layouts & Daily Gold
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-700">
            The greenhouse is the closest thing Stardew Valley has to a money printer: 116 seasonless crop tiles,
            reliable regrowth cycles, and the ability to run a consistent artisan pipeline. This guide explains how
            greenhouse profit really works, which crops are best (and why), how to plan sprinkler layouts, and how
            to decide between kegs and jars without getting stuck in spreadsheet paralysis.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-900">SEO pillar</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">Profit guide</span>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-900">Greenhouse</span>
          </div>
        </header>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-white/55 p-6">
          <h2 className="text-xl font-semibold">Table of contents</h2>
          <ol className="mt-4 space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a className="text-sky-800 hover:underline" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="why-greenhouse" className="mt-10">
          <h2 className="text-2xl font-semibold">Why the Greenhouse Is a Profit Engine</h2>
          <p className="mt-4 leading-7 text-slate-800">
            In the early game, profit often swings wildly: spring strawberries spike, summer blueberries carry,
            fall cranberries save you—then winter hits and you scramble. The greenhouse removes that instability.
            Once repaired, it gives you:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-800">
            <li>
              <strong>Seasonless farming:</strong> run your best crop all year instead of rotating.
            </li>
            <li>
              <strong>Consistency:</strong> predictable harvest days make artisan processing easier.
            </li>
            <li>
              <strong>Compounding upgrades:</strong> sprinklers, artisan machines, and skill bonuses scale better
              when your crop plan doesn’t reset every season.
            </li>
          </ul>
          <p className="mt-4 leading-7 text-slate-800">
            The trick is that the greenhouse doesn’t magically create profit. It creates <em>capacity</em>. Your job
            is to allocate that capacity to the crop + processing pipeline that matches your current bottleneck.
          </p>
        </section>

        <section id="profit-formula" className="mt-10">
          <h2 className="text-2xl font-semibold">How Greenhouse Profit Works (The Simple Formula)</h2>
          <p className="mt-4 leading-7 text-slate-800">
            You can estimate greenhouse gold without complicated math by using a simple chain:
          </p>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-5">
            <p className="text-slate-800">
              <strong>Daily gold</strong> ≈ (Harvests per day) × (Crops per harvest) × (Net gold per crop)
            </p>
            <p className="mt-3 text-slate-700">
              Where <em>net gold per crop</em> depends on whether you sell raw, jar, or keg—and whether your limiting
              factor is time, machines, or replanting effort.
            </p>
          </div>
          <p className="mt-4 leading-7 text-slate-800">
            If you want precise numbers, use calculators instead of guessing. Start here:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <Link className="text-sky-800 hover:underline" href="/">
                Stardew Profit Calculator (set crop, artisan, professions)
              </Link>
              <span className="text-slate-700"> — fastest way to compare crops with your rules.</span>
            </li>
            <li>
              <Link className="text-sky-800 hover:underline" href="/blog/keg-vs-jar-profit-guide">
                Keg vs Jar guide
              </Link>
              <span className="text-slate-700"> — decide processing based on time and value.</span>
            </li>
            <li>
              <Link className="text-sky-800 hover:underline" href="/blog/best-crops-every-season">
                Best Crops guide
              </Link>
              <span className="text-slate-700"> — broad seasonal context when you’re not greenhouse-ready yet.</span>
            </li>
          </ul>
        </section>

        <section id="best-crops" className="mt-10">
          <h2 className="text-2xl font-semibold">Best Greenhouse Crops (Shortlist + When to Use Each)</h2>
          <p className="mt-4 leading-7 text-slate-800">
            A profitable greenhouse plan isn’t just “pick the best crop.” It’s “pick the best crop for your
            current stage.” Here’s the shortlist that covers nearly every playthrough.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-amber-200 bg-white/65 p-6">
              <h3 className="text-xl font-semibold">Ancient Fruit (the default late-game answer)</h3>
              <p className="mt-3 leading-7 text-slate-800">
                If you can commit to a greenhouse staple, Ancient Fruit is the king of “low effort, high output.”
                It regrows, scales extremely well with kegs, and turns your greenhouse into a steady weekly harvest.
                The only downside: ramp-up time. You need seeds (often via seed maker or artifact luck) and patience.
              </p>
              <p className="mt-3 leading-7 text-slate-800">
                <strong>Best when:</strong> you have a growing keg fleet, want a stable routine, and value long-run ROI.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white/65 p-6">
              <h3 className="text-xl font-semibold">Starfruit (high value, higher maintenance)</h3>
              <p className="mt-3 leading-7 text-slate-800">
                Starfruit is the premium “active” greenhouse crop. It doesn’t regrow, so your profit includes the
                invisible cost of replanting and seed sourcing. But each harvest is massive, and starfruit wine is a
                classic endgame money-maker.
              </p>
              <p className="mt-3 leading-7 text-slate-800">
                <strong>Best when:</strong> you enjoy tight cycles, have easy access to seeds, and can keep kegs running.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white/65 p-6">
              <h3 className="text-xl font-semibold">Cranberries / Blueberries (early greenhouse stability)</h3>
              <p className="mt-3 leading-7 text-slate-800">
                If your greenhouse comes online before you have an artisan empire, multi-harvest berries give you
                consistent raw sales without needing huge machine counts. They’re rarely optimal in the long run,
                but they’re extremely practical.
              </p>
              <p className="mt-3 leading-7 text-slate-800">
                <strong>Best when:</strong> you want low setup, have limited kegs/jars, and need steady cashflow.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white/65 p-6">
              <h3 className="text-xl font-semibold">Coffee (speed + utility, not just profit)</h3>
              <p className="mt-3 leading-7 text-slate-800">
                Coffee is a special case. It can generate good gold, but its real value is quality-of-life: espresso
                speed makes everything else in your day more productive. A small section of the greenhouse dedicated
                to coffee can pay for itself indirectly.
              </p>
              <p className="mt-3 leading-7 text-slate-800">
                <strong>Best when:</strong> you’re optimizing play tempo, mining, or daily route efficiency.
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-slate-800">
            Want a data-driven comparison with your professions and chosen processing? Use the main calculator and
            lock it to “greenhouse” assumptions (seasonless, consistent watering) to compare crops apples-to-apples.
          </p>
        </section>

        <section id="sprinkler-layouts" className="mt-10">
          <h2 className="text-2xl font-semibold">Sprinkler Layouts & Space Planning</h2>
          <p className="mt-4 leading-7 text-slate-800">
            The greenhouse has 116 plantable soil tiles. Your goal is to water all of them automatically while
            keeping your harvest route simple. That’s why most greenhouse layouts converge on a few patterns:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-800">
            <li>
              <strong>Quality Sprinklers:</strong> workable mid-game, but you’ll lose tiles to coverage gaps.
            </li>
            <li>
              <strong>Iridium Sprinklers:</strong> best-in-slot for maximizing tilled tiles and minimizing hassle.
            </li>
            <li>
              <strong>Pressure Nozzles:</strong> niche but powerful; can simplify some patterns if you’re min-maxing.
            </li>
          </ul>
          <p className="mt-4 leading-7 text-slate-800">
            Practical advice: optimize for <em>your route</em>, not theoretical maximum tiles. If a layout saves you
            a few tiles but makes harvesting annoying, you’ll lose more profit by procrastinating harvest days.
          </p>
          <p className="mt-4 leading-7 text-slate-800">
            If you’re unsure, start with a clean iridium-based layout, then adjust once you’ve lived with it for a
            week in-game.
          </p>
        </section>

        <section id="artisan-path" className="mt-10">
          <h2 className="text-2xl font-semibold">Artisan Processing: Kegs vs Jars in a Greenhouse Run</h2>
          <p className="mt-4 leading-7 text-slate-800">
            Most greenhouse guides stop at “plant Ancient Fruit, make wine.” That’s directionally correct—but your
            real decision is a capacity question:
          </p>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-white/70 p-6">
            <h3 className="text-lg font-semibold">Ask these two questions</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-800">
              <li>
                <strong>Are you short on machines?</strong> If yes, prioritize higher-value conversions (often kegs)
                and sell overflow raw or jar it.
              </li>
              <li>
                <strong>Are you short on time?</strong> If you can’t keep up with reload cycles, you want fewer,
                higher-impact reloads (again, often kegs), or simplify your crop plan.
              </li>
            </ol>
          </div>
          <p className="mt-4 leading-7 text-slate-800">
            A good “real life” compromise is a split pipeline:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-800">
            <li>
              Put your <strong>top-tier fruit</strong> (Ancient Fruit / Starfruit) into <strong>kegs</strong>.
            </li>
            <li>
              Put <strong>secondary fruit</strong> (tree fruit, berries overflow) into <strong>preserves jars</strong>.
            </li>
            <li>
              If you’re drowning in harvest, sell a portion raw to keep your schedule sane.
            </li>
          </ul>
          <p className="mt-4 leading-7 text-slate-800">
            To quantify this for your save, use:
            <Link className="ml-1 text-sky-800 hover:underline" href="/blog/keg-vs-jar-profit-guide">
              Keg vs Jar
            </Link>
            <span className="text-slate-800"> and</span>
            <Link className="ml-1 text-sky-800 hover:underline" href="/blog/stardew-valley-artisan-profit-guide">
              Artisan Profit guide
            </Link>
            <span className="text-slate-800"> (if you track profession bonuses).</span>
          </p>
        </section>

        <section id="daily-routine" className="mt-10">
          <h2 className="text-2xl font-semibold">A Practical Daily Routine (So You Actually Earn the Gold)</h2>
          <p className="mt-4 leading-7 text-slate-800">
            The best greenhouse plan is the one you can execute every week without burning out. Here’s a routine
            that works for most players:
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
              <h3 className="font-semibold">1) Pick a harvest day</h3>
              <p className="mt-2 text-slate-800 leading-7">
                For regrow crops like Ancient Fruit, choose a consistent weekly day. Build your keg reload around it.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
              <h3 className="font-semibold">2) Match machines to output</h3>
              <p className="mt-2 text-slate-800 leading-7">
                If your harvest outpaces kegs, you’re not “losing”—you’re just under-built. Expand gradually or sell
                overflow raw.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
              <h3 className="font-semibold">3) Batch tasks</h3>
              <p className="mt-2 text-slate-800 leading-7">
                Do greenhouse harvest + keg reload in one pass. Do jar reload in another. Avoid micro-reloading daily
                unless you enjoy it.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
              <h3 className="font-semibold">4) Keep a buffer chest</h3>
              <p className="mt-2 text-slate-800 leading-7">
                Use a chest (or Junimo Chest later) near processing to store harvest, so you can reload machines fast.
              </p>
            </div>
          </div>
          <p className="mt-6 leading-7 text-slate-800">
            The goal is to prevent a common failure mode: you build an optimal greenhouse on paper, then avoid it
            because it’s annoying to run. Profit is a habit.
          </p>
        </section>

        <section id="late-game" className="mt-10">
          <h2 className="text-2xl font-semibold">Late-Game Upgrades: Iridium, Junimo Chests, Fertilizer</h2>
          <p className="mt-4 leading-7 text-slate-800">
            Once your greenhouse is stable, upgrades should target your bottleneck.
          </p>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-white/65 p-6">
            <h3 className="text-xl font-semibold">If you’re time-limited</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
              <li>Standardize your crop (fewer different harvest rhythms).</li>
              <li>Move machines closer, reduce walking, add storage buffers.</li>
              <li>Use Junimo Chests to teleport your harvest between greenhouse and processing area.</li>
            </ul>
          </div>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-white/65 p-6">
            <h3 className="text-xl font-semibold">If you’re machine-limited</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
              <li>Craft more kegs/jars (oak resin farms pay for themselves).</li>
              <li>Prioritize high-value inputs for kegs first.</li>
              <li>Use the calculator to check whether adding 20 kegs beats replanting Starfruit.</li>
            </ul>
          </div>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-white/65 p-6">
            <h3 className="text-xl font-semibold">If you’re crop-limited</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
              <li>Convert greenhouse to Ancient Fruit over time via seed makers.</li>
              <li>Add perimeter fruit trees for passive daily yield.</li>
              <li>Stop wasting tiles on “testing” once you’ve picked a plan—commit for a month.</li>
            </ul>
          </div>
          <p className="mt-6 leading-7 text-slate-800">
            Related reading:
            <Link className="ml-1 text-sky-800 hover:underline" href="/blog/stardew-valley-artisan-profit-guide">
              Artisan Goods Profit Guide
            </Link>
            <span className="text-slate-800"> (bigger picture beyond just greenhouse crops).</span>
          </p>
        </section>

        <section id="mistakes" className="mt-10">
          <h2 className="text-2xl font-semibold">Common Mistakes That Cut Greenhouse Profit</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-800">
            <li>
              <strong>Over-optimizing tiles:</strong> if a layout annoys you, you’ll skip harvests and lose more gold.
            </li>
            <li>
              <strong>Building crops before machines:</strong> a full Ancient Fruit greenhouse without kegs is a
              warehouse, not a business.
            </li>
            <li>
              <strong>Mixing too many crop rhythms:</strong> daily + weekly + multi-day cycles create constant chores.
            </li>
            <li>
              <strong>Ignoring ramp-up:</strong> Ancient Fruit takes time to scale; plan a transition crop if needed.
            </li>
            <li>
              <strong>Forgetting opportunity cost:</strong> if mining or quests earn more right now, keep the
              greenhouse simple until you have spare time.
            </li>
          </ul>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group rounded-2xl border border-amber-200 bg-white/65 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="group-open:underline">{f.question}</span>
                </summary>
                <p className="mt-3 leading-7 text-slate-800">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white/70 p-6">
          <h2 className="text-xl font-semibold">Next steps</h2>
          <p className="mt-3 leading-7 text-slate-800">
            If you want the fastest path to a high-profit greenhouse, pick a staple crop (Ancient Fruit for most
            saves), build a keg pipeline that matches your weekly harvest volume, and keep the routine simple.
            Use calculators to verify assumptions, not to replace gameplay.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              className="rounded-xl bg-sky-700 px-4 py-2 text-white hover:bg-sky-800"
              href="/"
            >
              Open Profit Calculator
            </Link>
            <Link
              className="rounded-xl border border-sky-700 bg-white/60 px-4 py-2 text-sky-800 hover:bg-white"
              href="/blog/keg-vs-jar-profit-guide"
            >
              Compare Keg vs Jar
            </Link>
          </div>
        </section>

        <footer className="mt-10 text-sm text-slate-600">
          <p>
            Disclosure: This guide focuses on practical, repeatable profit. Exact “best” results vary by profession
            choices, machine counts, and how often you reload artisan equipment.
          </p>
        </footer>
      </article>
    </main>
  );
}
