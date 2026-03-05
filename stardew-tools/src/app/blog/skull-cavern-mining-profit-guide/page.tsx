import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import Link from "next/link";

const PUBLISHED_TIME = "2026-03-01T00:00:00Z";
const MODIFIED_TIME = "2026-03-01T00:00:00Z";
const URL = "https://www.stardewprofit.com/blog/skull-cavern-mining-profit-guide";

const FAQ = [
  {
    question: "What is the most profitable thing to do in Skull Cavern?",
    answer:
      "For most players, the most profitable Skull Cavern loop is: maximize depth, bomb aggressively, prioritize Iridium Ore and high-value drops (Prismatic Shards, Diamonds), and convert ore into bars for crafting (especially kegs) rather than selling raw ore. The exact best target depends on whether you need cash now or long-term production capacity.",
  },
  {
    question: "How deep should I go in Skull Cavern for profit?",
    answer:
      "Deeper is almost always better because Iridium node density and monster loot improve with depth. If your goal is pure gold, a practical target is 50+ floors; if you have enough staircases and speed, 100+ floors can dramatically raise Iridium/hour. But do not sacrifice an entire run to " +
      "perfect depth if it makes you play too cautiously.",
  },
  {
    question: "Is it better to use bombs or a pickaxe?",
    answer:
      "Bombs are the profit tool. They convert time into ore. Use a pickaxe for clean-up (single nodes, ladders, or when bombs are unsafe). If you are trying to maximize gold/day from mining, treat bombs as your primary " +
      "resource and buy/craft enough for a full run.",
  },
  {
    question: "Should I sell Iridium Bars or use them for crafting?",
    answer:
      "If you need immediate money, selling bars is fine. But long-term profit usually comes from using Iridium to craft endgame tools, sprinklers, and especially from converting Skull Cavern gains into more kegs/jars so your farm " +
      "prints money every day. Think of Skull Cavern as a capital investment run.",
  },
  {
    question: "What is the best food for Skull Cavern runs?",
    answer:
      "Bring two layers: a high-heal, no-buff food (Cheese is popular) and a buff food for speed/luck (Spicy Eel for speed + luck, or Lucky Lunch for luck). Add coffee/espresso for speed stacking. " +
      "The best food is the one you will actually use proactively.",
  },
] as const;

export const metadata: Metadata = {
  title: "Skull Cavern Mining Profit Guide (2026): Iridium, Bombs, and Gold/Day",
  description:
    "A complete Skull Cavern profit guide for Stardew Valley: best mining loadout, bombs vs pickaxe, luck & speed buffs, staircases strategy, and what to do with Iridium for long-term money-making.",
  openGraph: {
    title: "Skull Cavern Mining Profit Guide (2026): Iridium, Bombs, and Gold/Day",
    description:
      "Maximize mining profits: deeper floors, bomb strategy, luck buffs, and how to turn Iridium into real gold/day.",
    type: "article",
    url: URL,
    images: [
      {
        url: "https://www.stardewprofit.com/blog/skull-cavern-mining-profit-guide/opengraph-image",
      },
    ],
    publishedTime: PUBLISHED_TIME,
    modifiedTime: MODIFIED_TIME,
  },
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/90 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";

const LINK_CLASS =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4d2e]/40";

function Toc() {
  const items = [
    { id: "why-skull-cavern", label: "Why Skull Cavern Is a Profit Engine" },
    { id: "profit-metric", label: "Profit Metrics: Gold Now vs Gold Later" },
    { id: "loadout", label: "Best Skull Cavern Loadout (Checklist)" },
    { id: "luck-speed", label: "Luck and Speed: The Two Multipliers" },
    { id: "bombing", label: "Bomb Strategy: How to Turn Time Into Ore" },
    { id: "staircases", label: "Staircases: When to Skip Floors" },
    { id: "targets", label: "What to Pick Up (and What to Ignore)" },
    { id: "after-run", label: "After the Run: Convert Loot Into Daily Profit" },
    { id: "mistakes", label: "Common Mistakes That Kill Mining Profit" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav aria-label="Table of contents" className="mt-4">
      <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
        <p className="text-sm font-semibold text-[#4a321e]">On this page</p>
        <ol className="mt-3 grid gap-2 text-sm text-[#5c4033]/90 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.id}>
              <a className={LINK_CLASS} href={`#${it.id}`}>
                {it.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default function SkullCavernMiningProfitGuidePage() {
  return (
    <div className="relative min-h-screen bg-[#f5e6c8] text-[#5c4033]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 14% 16%, rgba(255,255,255,0.34) 0 5%, transparent 6%), radial-gradient(circle at 78% 18%, rgba(255,255,255,0.26) 0 4%, transparent 5%), radial-gradient(circle at 24% 82%, rgba(255,255,255,0.22) 0 6%, transparent 7%), repeating-linear-gradient(135deg, rgba(124,77,46,0.10) 0 16px, rgba(124,77,46,0.06) 16px 32px)",
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
            { name: "Skull Cavern Mining Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Stardew Valley Mining Profit
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Skull Cavern Mining Profit Guide (2026)
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you care about money, Skull Cavern is not just a dungeon — it&apos;s your fastest path to &quot;I have enough&quot;.
              Not because you sell a pile of ore once, but because a good run turns into more machines, more sprinklers,
              more upgrades, and therefore more <strong>gold per day</strong> on your farm.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              This guide focuses on the parts that actually move profit: depth, speed, bombs, staircases, and what to do
              with Iridium after you leave.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className={CTA_CLASS} href="/calculator">
                Open the Profit Calculator
              </Link>
              <p className="text-sm leading-6 text-[#5c4033]/85">
                Mining fuels your farm. Use the calculator to compare which crops are worth turning into wine/jelly once
                you expand your keg/jar capacity.
              </p>
            </div>

            <Toc />
          </header>

          <section id="why-skull-cavern" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Why Skull Cavern Is a Profit Engine
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              The mountain mines are great for progression, but Skull Cavern is where profit accelerates. The main reason
              is simple: <strong>Iridium</strong>. Iridium unlocks high-end sprinklers, tool upgrades, and the crafting
              chain that lets you scale artisan production.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              A &quot;good&quot; Skull Cavern run is not defined by how heroic it felt. It&apos;s defined by how many meaningful
              decisions it enabled afterward: more kegs, a tighter greenhouse plan, faster harvesting, and fewer
              bottlenecks.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you want the farm-side anchor that turns mining into steady income, pair this guide with our
              <Link className={`ml-1 ${LINK_CLASS}`} href="/blog/greenhouse-layout-guide">
                greenhouse layout guide
              </Link>
              , and keep the big picture in mind with the
              <Link className={`ml-1 ${LINK_CLASS}`} href="/blog/stardew-valley-profit-guide-2026">
                Profit Guide 2026
              </Link>
              .
            </p>
          </section>

          <section id="profit-metric" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Profit Metrics: Gold Now vs Gold Later
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              Most mining debates get stuck on the wrong question: &quot;How much gold did you make today?&quot; That matters, but
              the best Skull Cavern strategy depends on your phase of the game.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Gold now (cashflow)</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Sell gems/bars to fund seeds, tool upgrades, and immediate purchases.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Gold later (capacity)</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  Use ore to craft sprinklers and build more kegs/jars so your farm earns money every day.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you want one mental model: Skull Cavern is a <strong>capital run</strong>. Farm profit comes from systems
              that repeat (greenhouse harvest cycles + machines). Mining profit comes from bursts that increase those
              systems.
            </p>
          </section>

          <section id="loadout" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Best Skull Cavern Loadout (Checklist)
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              A profitable Skull Cavern run starts before you enter the desert. Your goal is to remove downtime: healing
              panic, inventory clutter, and slow clearing.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Must-have</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                  <li>Bombs (or Mega Bombs) for clearing rooms fast</li>
                  <li>Staircases for bad floors (spirals, infested, no rocks)</li>
                  <li>High-heal food (Cheese is the classic)</li>
                  <li>Buff food (luck/speed) + coffee/espresso</li>
                  <li>A few farm warp totems (optional) for late exits</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Nice-to-have</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                  <li>Slime Charmer Ring (safer, fewer heals)</li>
                  <li>Iridium Band / Magnet ring (less pickup friction)</li>
                  <li>Explosive ammo (if you like slingshot clearing)</li>
                  <li>Desert warp totem (start earlier)</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you are still ramping your economy, pair your mining plan with a stable seasonal crop plan. Our
              <Link className={`ml-1 ${LINK_CLASS}`} href="/blog/best-crops-every-season">
                best crops every season
              </Link>
              guide gives you a baseline money engine so you can afford bombs consistently.
            </p>
          </section>

          <section id="luck-speed" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Luck and Speed: The Two Multipliers
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              Profit in Skull Cavern is a throughput problem. You want more floors per hour and more rocks cleared per
              floor. Two stats reliably increase throughput:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Luck</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  More ladders/shafts, better drops, and fewer dead-end floors. Luck does not guarantee Iridium, but it
                  reduces the time you waste.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Speed</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c4033]/90">
                  You move between clusters faster and you recover from mistakes faster. Speed is the &quot;I got 20% more
                  mining done&quot; stat.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              A practical food plan is: one speed/luck buff food + coffee/espresso, plus a stack of high-heal food you
              eat whenever you drop below a safe HP threshold.
            </p>
          </section>

          <section id="bombing" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Bomb Strategy: How to Turn Time Into Ore
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              The pickaxe is accurate, but it is slow. Bombs are inaccurate, but they are fast. Profit runs reward speed.
            </p>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
              <h3 className="text-base font-semibold text-[#4a321e]">A simple bombing loop</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                <li>Enter floor and scan for dense rock clusters</li>
                <li>Place bomb in the densest cluster (not near you)</li>
                <li>While it ticks, reposition and plan your exit route</li>
                <li>Collect ore/gems quickly, then immediately look for ladder/shaft</li>
                <li>If the floor is bad: staircase out</li>
              </ol>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              The best players don&apos;t bomb every rock. They bomb the rocks that buy them ladders/shafts faster.
              Think: &quot;clear enough to find the exit&quot; not &quot;clear the whole floor&quot;.
            </p>
          </section>

          <section id="staircases" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Staircases: When to Skip Floors
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              Staircases are not cheating; they are a profit tool. You use them to avoid floors that burn time without
              paying you back.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Use a staircase when…</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                  <li>The floor is a long spiral</li>
                  <li>Infested floors slow you down</li>
                  <li>You spawned far from rocks</li>
                  <li>You are behind your depth target</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Save your staircases when…</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                  <li>You land in a dense rock cluster</li>
                  <li>There are visible Iridium nodes</li>
                  <li>You can bomb-clear quickly</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you are optimizing for iridium and you can afford it, staircases effectively &quot;buy&quot; you higher node density.
              That makes them one of the cleanest profit investments in the game.
            </p>
          </section>

          <section id="targets" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              What to Pick Up (and What to Ignore)
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              Inventory space is time. Profit runs are not completionist runs. Your goal is to keep your bag focused on
              items that convert into either immediate gold or long-term profit capacity.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">High priority</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                  <li>Iridium Ore + Iridium Bars</li>
                  <li>Prismatic Shards</li>
                  <li>Diamonds and high-value gems</li>
                  <li>Battery Packs (when they drop)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Often ignore</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                  <li>Low-value monster loot (unless you need it for crafting)</li>
                  <li>Stone (unless you are staircase crafting mid-run)</li>
                  <li>Random forage you do not need</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you feel bad leaving things behind, remember: the best profit guide is a bottleneck guide. If ore becomes
              kegs, and kegs become wine, you can &quot;trade&quot; almost any minor loot for that throughput.
              The keg/jar choice matters too:
              <Link className={`ml-1 ${LINK_CLASS}`} href="/blog/keg-vs-jar-profit-guide">
                Keg vs Jar Profit Guide
              </Link>
              .
            </p>
          </section>

          <section id="after-run" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              After the Run: Convert Loot Into Daily Profit
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              The run is only half the value. The other half is what you do at home.
            </p>
            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
              <h3 className="text-base font-semibold text-[#4a321e]">A simple conversion plan</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-[#5c4033]/90">
                <li>Smelt bars (do not sit on raw ore)</li>
                <li>Craft sprinklers to expand farm tiles without increasing watering time</li>
                <li>Spend the rest of the material budget on kegs/jars</li>
                <li>Use greenhouse + high-value crops to keep machines full</li>
              </ol>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              Not sure which crops to keep feeding your new machines? Start with our season hub:
              <Link className={`ml-1 ${LINK_CLASS}`} href="/blog/best-crops-every-season">
                Best Crops Every Season
              </Link>
              . Then run your exact situation in the calculator.
            </p>
          </section>

          <section id="mistakes" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Common Mistakes That Kill Mining Profit
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Over-fighting</h3>
                <p className="mt-1">
                  If you want profit, you are allowed to run away. Fighting is only good when it clears your path or
                  prevents you from dying.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Saving bombs &quot;for later&quot;</h3>
                <p className="mt-1">
                  Later is the next floor. Bombs exist to turn your limited day into more ore.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Not healing proactively</h3>
                <p className="mt-1">
                  Dying is the single worst ROI event. Eat earlier than you think you need to.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Selling the future</h3>
                <p className="mt-1">
                  Selling bars can feel good, but crafting machines feels better. Your farm makes money while you sleep.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              If you are early in your money-making journey, it helps to see the whole system (crops + machines +
              greenhouse). Our
              <Link className={`ml-1 ${LINK_CLASS}`} href="/blog/money-making-guide">
                money-making guide
              </Link>
              is the broader overview.
            </p>
          </section>

          <section id="faq" className={CARD_CLASS}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
            <div className="mt-3 space-y-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="rounded-[24px] border border-[#7c4d2e]/25 bg-white/55 p-5">
            <p className="text-sm leading-6 text-[#5c4033]/90">
              If you found this helpful, bookmark it as your mining-day checklist. The best Skull Cavern runs are the ones
              you can repeat comfortably.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
