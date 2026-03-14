import type { Metadata } from "next";
import Link from "next/link";

function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-amber-900/80">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.name}-${idx}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-amber-950 font-medium">{item.name}</span>
              )}
              {!isLast && <span className="text-amber-900/50">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function FaqJsonLd({
  url,
  questions,
}: {
  url: string;
  questions: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      data-url={url}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const SITE_NAME = "StardewProfit";
const SITE_URL = "https://stardewprofit.com";
const PUBLISHED_ISO = "2026-03-14T00:00:00.000Z"; // UTC 0:00 today

export const metadata: Metadata = {
  title:
    "Greenhouse Crops Profit Guide (Stardew Valley): Best Picks by Strategy & Processing",
  description:
    "A complete Stardew Valley greenhouse profit guide: best crops to grow, when to switch, keg vs jar planning, and a practical decision framework to maximize gold per day.",
  openGraph: {
    title:
      "Greenhouse Crops Profit Guide (Stardew Valley): Best Picks by Strategy & Processing",
    description:
      "Pick the right greenhouse crops, match them to your keg/jar capacity, and maximize gold per day with less busywork. Includes FAQs and planning rules of thumb.",
    type: "article",
    url: `${SITE_URL}/guides/greenhouse-crops-profit-guide`,
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: `${SITE_URL}/guides/greenhouse-crops-profit-guide`,
  },
};

export default function Page() {
  const faq = [
    {
      question: "What is the single best greenhouse crop for profit?",
      answer:
        "For most saves, Ancient Fruit is the best long-term greenhouse crop because it regrows weekly and converts extremely well into wine. But the true ‘best’ depends on your processing capacity: if you don’t have enough kegs, a plan that includes more raw-sale or jar-friendly crops can outperform until you scale up.",
    },
    {
      question: "Should I plant Starfruit in the greenhouse?",
      answer:
        "Starfruit is amazing profit per harvest but it doesn’t regrow, so it requires replanting. In the greenhouse it’s strongest as a ‘burst’ option when you can afford seeds and you have enough kegs to turn most harvests into wine. For low-maintenance steady income, Ancient Fruit is usually better.",
    },
    {
      question: "Is it better to use kegs or preserves jars for greenhouse crops?",
      answer:
        "Kegs typically produce the highest value per crop (especially wine), but they take longer per item. Preserves jars finish faster and can be better if you’re short on time or want quicker cash flow. The best setup matches your crop plan to the number of machines you can keep running consistently.",
    },
    {
      question: "How many kegs do I need for a full greenhouse of Ancient Fruit?",
      answer:
        "A standard greenhouse has 116 crop tiles. Ancient Fruit regrows every 7 days, while a keg takes 6.25 days to turn fruit into wine. That means you need roughly 116 kegs (about one per plant) to process everything without stockpiling.",
    },
    {
      question: "Do sprinklers and fertilizer work in the greenhouse?",
      answer:
        "Yes. Sprinklers work normally and are the standard way to automate watering. Fertilizer also works, but because greenhouse crops are often regrowers, processing choice (wine/jelly) usually matters more than quality. Speed fertilizer can still be useful for non-regrowers like Starfruit.",
    },
  ];

  const toc = [
    { id: "tldr", label: "TL;DR greenhouse picks" },
    { id: "how-profit-works", label: "How greenhouse profit really works" },
    { id: "best-crops", label: "Best greenhouse crops (ranked by strategy)" },
    { id: "kegs-jars", label: "Kegs & jars: capacity-based planning" },
    { id: "layout", label: "Greenhouse layout notes (116 tiles)" },
    { id: "roadmap", label: "Early vs mid vs late game greenhouse roadmap" },
    { id: "mistakes", label: "Common mistakes that quietly kill profit" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f0dc] text-amber-950">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Greenhouse Crops Profit Guide" },
          ]}
        />

        <header className="mb-10">
          <p className="text-xs uppercase tracking-widest text-amber-900/70">
            Stardew Valley Profit Guide
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">
            Greenhouse Crops Profit Guide: Best Picks by Strategy & Processing
          </h1>
          <p className="mt-4 text-lg text-amber-950/80">
            The greenhouse is the one place where season stops mattering. That’s
            why the best greenhouse crop isn’t a single crop—it’s the crop plan
            that matches your <strong>processing capacity</strong> and your
            willingness to replant.
          </p>

          <div className="mt-6 rounded-xl border border-amber-900/15 bg-white/40 p-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-amber-950/80">
              <span>
                <strong>Published:</strong> {new Date(PUBLISHED_ISO).toUTCString()}
              </span>
              <span>
                <strong>Updated:</strong> {new Date(PUBLISHED_ISO).toUTCString()}
              </span>
              <span>
                <strong>Goal:</strong> maximize gold/day with realistic machine
                limits
              </span>
            </div>
          </div>
        </header>

        <section className="mb-10 rounded-2xl border border-amber-900/15 bg-white/35 p-6">
          <h2 className="text-xl font-bold">Table of contents</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-amber-900 hover:text-amber-950 hover:underline underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="tldr" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">TL;DR greenhouse picks</h2>
          <div className="mt-4 grid gap-4">
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="text-lg font-semibold">
                If you want the best long-term, low-maintenance profit
              </h3>
              <p className="mt-2 text-amber-950/85">
                Plant <strong>Ancient Fruit</strong> everywhere and process into
                <strong> wine</strong> when you have enough kegs.
              </p>
            </div>
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="text-lg font-semibold">
                If you’re still building kegs (capacity-limited)
              </h3>
              <p className="mt-2 text-amber-950/85">
                Mix in crops that are strong <em>without</em> processing (or that
                work well in jars). Your aim is to avoid stockpiling hundreds of
                crops that you can’t convert.
              </p>
            </div>
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="text-lg font-semibold">
                If you want burst profit and don’t mind replanting
              </h3>
              <p className="mt-2 text-amber-950/85">
                Run <strong>Starfruit cycles</strong> and keg into wine—but only
                if you can keep the pipeline moving.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-900/15 bg-amber-50/40 p-6">
            <p className="text-amber-950/85">
              Want hard numbers for your save? Use the calculators:
            </p>
            <ul className="mt-3 list-disc pl-5 text-amber-950/85">
              <li>
                <Link className="underline underline-offset-4" href="/">
                  Stardew Profit Calculator
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-4"
                  href="/crops"
                >
                  Crop Profit Calculator
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-4"
                  href="/artisan"
                >
                  Artisan Goods Profit (keg vs jar)
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-4"
                  href="/greenhouse"
                >
                  Greenhouse Planner / Profits
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-4"
                  href="/animals"
                >
                  Animal Profits Calculator
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="how-profit-works" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">How greenhouse profit really works</h2>
          <p className="mt-4 text-amber-950/85">
            The greenhouse feels like a simple question—“what crop makes the most
            money?”—but it’s actually a system with three bottlenecks:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-amber-950/85">
            <li>
              <strong>Crop cycle time:</strong> how often you harvest (regrowers
              vs replant crops).
            </li>
            <li>
              <strong>Processing time:</strong> kegs and jars convert one item at
              a time over days.
            </li>
            <li>
              <strong>Your routine:</strong> if you only check machines twice a
              week, “perfect” throughput math doesn’t matter.
            </li>
          </ol>

          <div className="mt-6 rounded-xl border border-amber-900/15 bg-white/40 p-5">
            <h3 className="text-lg font-semibold">The key idea: match crops to machines</h3>
            <p className="mt-2 text-amber-950/85">
              A full greenhouse is <strong>116 crop tiles</strong> in the default
              layout. If you plant 116 Ancient Fruit, you’ll harvest ~116 fruit
              every 7 days. If you only have 25 kegs, then 91 fruit will sit in a
              chest each week waiting for processing. That’s not “wrong,” but it
              means your real profit is capped by 25 kegs—not by crop choice.
            </p>
          </div>

          <p className="mt-6 text-amber-950/85">
            This guide is built around one practical question:
          </p>
          <p className="mt-2 rounded-xl bg-white/35 p-4 text-amber-950/90">
            <strong>
              “What greenhouse crop plan produces the most gold per day for the
              number of kegs/jars I actually have?”
            </strong>
          </p>
        </section>

        <section id="best-crops" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">Best greenhouse crops (ranked by strategy)</h2>

          <div className="mt-6 space-y-6">
            <article className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">1) Ancient Fruit (the default best)</h3>
              <p className="mt-3 text-amber-950/85">
                Ancient Fruit is the cleanest greenhouse strategy because it’s a
                regrower (weekly harvest) with excellent keg conversion. Once it’s
                planted, your greenhouse becomes a steady production line: harvest
                once a week, load kegs, repeat.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-950/85">
                <li>
                  <strong>Pros:</strong> low maintenance, strong wine value,
                  predictable weekly routine.
                </li>
                <li>
                  <strong>Cons:</strong> takes time to scale (seed/ancient seed
                  acquisition), wants lots of kegs.
                </li>
              </ul>
              <p className="mt-4 text-amber-950/85">
                If you want to sanity-check your pipeline, run your numbers in the
                <Link className="underline underline-offset-4" href="/artisan">
                  {" "}
                  Artisan calculator
                </Link>
                {" "}
                and compare wine throughput vs weekly harvest volume.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">2) Starfruit (high profit, higher effort)</h3>
              <p className="mt-3 text-amber-950/85">
                Starfruit greenhouse cycles shine when you can reliably replant and
                you have keg capacity. The big upside is raw value per harvest, but
                you pay in seed cost and replant time.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-950/85">
                <li>
                  <strong>Pros:</strong> fantastic wine value, huge bursts of cash.
                </li>
                <li>
                  <strong>Cons:</strong> replanting overhead, seed cost, pipeline
                  can clog without enough kegs.
                </li>
              </ul>
              <p className="mt-4 text-amber-950/85">
                Use this when you’re actively optimizing and don’t mind “factory
                management.” If you want lower effort for nearly the same long-run
                returns, Ancient Fruit is usually the better lifestyle choice.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">3) Pineapple (solid, flexible midgame)</h3>
              <p className="mt-3 text-amber-950/85">
                Pineapple is a great midgame greenhouse crop because it’s a
                regrower and has strong raw sale value. It plays nicely with both
                jars and kegs, and you can slot it in while you’re still expanding
                your processing infrastructure.
              </p>
              <p className="mt-4 text-amber-950/85">
                If you’re unsure, compare your planned greenhouse crops in the
                <Link className="underline underline-offset-4" href="/greenhouse">
                  {" "}
                  Greenhouse tool
                </Link>
                {" "}
                to estimate weekly output.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">4) Coffee (speed + utility, not just gold)</h3>
              <p className="mt-3 text-amber-950/85">
                Coffee is rarely “top gold per tile,” but it’s a powerhouse for
                quality-of-life: it produces frequently and turns into Triple Shot
                Espresso for movement speed. If your goal is faster Skull Cavern or
                faster daily chores, coffee has a hidden profit: it helps you do
                more per day.
              </p>
              <p className="mt-4 text-amber-950/85">
                If you measure your save in “progress per hour,” not purely gold,
                coffee can be the correct greenhouse choice for a long stretch.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">5) Strawberries / Blueberries (early bridge)</h3>
              <p className="mt-3 text-amber-950/85">
                Early greenhouse unlocks often happen before you have Ancient Fruit
                fully ready. In that window, classic regrowers like strawberries
                and blueberries can be a simple bridge: plant once, harvest
                repeatedly, and funnel what you can into jars.
              </p>
              <p className="mt-4 text-amber-950/85">
                Want a fast comparison of your early options? Use the
                <Link className="underline underline-offset-4" href="/crops">
                  {" "}
                  Crop calculator
                </Link>
                {" "}
                and sort by gold/day.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-900/15 bg-amber-50/40 p-6">
            <h3 className="text-lg font-semibold">A simple ranking you can actually use</h3>
            <p className="mt-2 text-amber-950/85">
              If you only remember one thing:
            </p>
            <ul className="mt-3 list-disc pl-5 text-amber-950/85">
              <li>
                <strong>Late game:</strong> Ancient Fruit → wine (steady best)
              </li>
              <li>
                <strong>Active optimization:</strong> Starfruit cycles → wine
              </li>
              <li>
                <strong>Midgame flexible:</strong> Pineapple / mixed regrowers
              </li>
              <li>
                <strong>Utility:</strong> Coffee if speed is your bottleneck
              </li>
            </ul>
          </div>
        </section>

        <section id="kegs-jars" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">Kegs & jars: capacity-based planning</h2>
          <p className="mt-4 text-amber-950/85">
            Most greenhouse guides stop at “this crop is best.” The real game is
            turning crops into artisan goods efficiently.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-lg font-semibold">Rule of thumb for Ancient Fruit</h3>
              <p className="mt-2 text-amber-950/85">
                Ancient Fruit regrows every 7 days. Kegs take 6.25 days for wine.
                So:
              </p>
              <p className="mt-3 rounded-xl bg-white/35 p-4 text-amber-950/90">
                <strong>1 plant ≈ 1 keg</strong> to avoid stockpiling.
              </p>
              <p className="mt-3 text-amber-950/85">
                For a full greenhouse (116 tiles), aim for roughly
                <strong> 116 kegs</strong> if you want every fruit to become wine.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-lg font-semibold">Rule of thumb for Starfruit</h3>
              <p className="mt-2 text-amber-950/85">
                Starfruit doesn’t regrow, so your average daily harvest depends on
                how often you replant. The practical question becomes:
              </p>
              <p className="mt-3 rounded-xl bg-white/35 p-4 text-amber-950/90">
                <strong>
                  “Can my kegs keep up with the harvest rhythm I’m willing to do?”
                </strong>
              </p>
              <p className="mt-3 text-amber-950/85">
                If not, you’ll end up with a chest full of starfruit and the same
                number of kegs running—meaning you paid seed costs without gaining
                throughput.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-900/15 bg-white/40 p-6">
            <h3 className="text-lg font-semibold">When jars beat kegs (in practice)</h3>
            <p className="mt-2 text-amber-950/85">
                Kegs usually win in value, but jars often win in
                <strong> cadence</strong>. If you play in short sessions or you
                dislike long machine cycles, jars can increase your effective
                throughput because you actually empty them on time.
            </p>
            <p className="mt-4 text-amber-950/85">
              If you’re deciding “keg vs jar” for your specific crop mix, the
              fastest way is to plug the inputs into the
              <Link className="underline underline-offset-4" href="/artisan">
                {" "}
                Artisan calculator
              </Link>
              {" "}
              and compare gold/day using your machine counts.
            </p>
          </div>
        </section>

        <section id="layout" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">Greenhouse layout notes (116 tiles)</h2>
          <p className="mt-4 text-amber-950/85">
            Most players use the standard “sprinkler + path” layout that leaves
            116 plantable tiles. The exact geometry matters less than two
            priorities:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-950/85">
            <li>
              <strong>Consistency:</strong> a layout you won’t break while
              harvesting.
            </li>
            <li>
              <strong>Fast loops:</strong> you want to harvest and replant (if
              needed) without getting stuck.
            </li>
          </ul>
          <p className="mt-6 text-amber-950/85">
            If you’re doing a mixed strategy (for example, 80 Ancient Fruit and 36
            Starfruit cycles), keep blocks together so you don’t forget to
            replant.
          </p>
        </section>

        <section id="roadmap" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">Early vs mid vs late game greenhouse roadmap</h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">Early greenhouse (first unlock)</h3>
              <p className="mt-3 text-amber-950/85">
                Your first greenhouse profit spike usually comes from two things:
                regrowers and a small jar/keg set.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-950/85">
                <li>
                  Plant simple regrowers (strawberry/blueberry/cranberry) if you
                  don’t have Ancient Fruit yet.
                </li>
                <li>
                  Prioritize adding machines gradually—don’t chase a “perfect”
                  crop before you can process it.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">Midgame greenhouse (scaling machines)</h3>
              <p className="mt-3 text-amber-950/85">
                Midgame is where most players lose profit without noticing: they
                overproduce crops and underproduce processing capacity.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-950/85">
                <li>
                  Start transitioning tiles into Ancient Fruit as you obtain seeds.
                </li>
                <li>
                  Use pineapple or mixed regrowers as a stable filler while you
                  build kegs.
                </li>
                <li>
                  Treat your greenhouse like a factory: add kegs in batches and
                  adjust the crop plan to match.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-900/15 bg-white/40 p-6">
              <h3 className="text-xl font-semibold">Late game greenhouse (optimization)</h3>
              <p className="mt-3 text-amber-950/85">
                Late game, the greenhouse becomes a low-attention income stream.
                Most min-max paths converge on Ancient Fruit wine, because it’s
                easy to keep stable and it synergizes with large keg sheds.
              </p>
              <p className="mt-4 text-amber-950/85">
                If you want to push beyond “already rich,” the next lever isn’t
                greenhouse crop choice—it’s expanding the rest of your economy
                (animals, truffles, mining runs, and more). For example, the
                <Link className="underline underline-offset-4" href="/animals">
                  {" "}
                  Animal profits
                </Link>
                {" "}
                tool helps you compare passive barn/coop income vs greenhouse time.
              </p>
            </div>
          </div>
        </section>

        <section id="mistakes" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">Common mistakes that quietly kill profit</h2>
          <div className="mt-6 space-y-4 text-amber-950/85">
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="font-semibold">Mistake #1: Picking a crop without counting machines</h3>
              <p className="mt-2">
                If your plan requires 100+ kegs but you own 20, you’re not running
                a plan—you’re running a backlog. Either commit to scaling machines
                fast or pick a crop mix that sells well without processing.
              </p>
            </div>
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="font-semibold">Mistake #2: Ignoring your play cadence</h3>
              <p className="mt-2">
                A 6.25-day keg cycle is perfect if you collect on time. If you only
                remember every 10 days, your effective throughput drops hard. In
                that case, jars (or raw selling) can win.
              </p>
            </div>
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="font-semibold">Mistake #3: Replant-heavy strategies you don’t enjoy</h3>
              <p className="mt-2">
                Starfruit cycles look amazing on spreadsheets. But if you hate
                replanting, you’ll skip cycles, miss days, and lose profit. The
                best strategy is the one you keep doing.
              </p>
            </div>
            <div className="rounded-xl border border-amber-900/15 bg-white/40 p-5">
              <h3 className="font-semibold">Mistake #4: Not using the greenhouse space for what it’s good at</h3>
              <p className="mt-2">
                The greenhouse is about stability. If you’re constantly swapping
                crops randomly, you lose the main advantage: a predictable routine
                that fits your machines.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-amber-900/15 bg-white/40 p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {item.question}
                </summary>
                <p className="mt-3 text-amber-950/85">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-amber-900/15 pt-8 text-sm text-amber-950/70">
          <p>
            Want to go deeper? Use the calculators to tailor this guide to your
            farm’s constraints:
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              Crop profits: <span className="text-amber-950">/crops</span>
            </li>
            <li>
              Keg vs jar: <span className="text-amber-950">/artisan</span>
            </li>
            <li>
              Greenhouse planning: <span className="text-amber-950">/greenhouse</span>
            </li>
          </ul>
          <p className="mt-4">
            Article timestamps use UTC midnight: {new Date(PUBLISHED_ISO).toUTCString()}.
          </p>
        </footer>

        <FaqJsonLd
          url={`${SITE_URL}/guides/greenhouse-crops-profit-guide`}
          questions={faq}
        />

        {/* Optional Article JSON-LD (lightweight) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: metadata.title,
              description: metadata.description,
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage: `${SITE_URL}/guides/greenhouse-crops-profit-guide`,
              author: { "@type": "Organization", name: SITE_NAME },
              publisher: { "@type": "Organization", name: SITE_NAME },
            }),
          }}
        />
      </div>
    </main>
  );
}
