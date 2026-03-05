import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const publishedTime = "2026-02-28T00:00:00Z";
const modifiedTime = "2026-02-28T00:00:00Z";
const url = "https://www.stardewprofit.com/blog/animal-profit-guide";

const TITLE =
  "Stardew Valley Animal Profit Guide: Barn vs Coop, Best Animals & Artisan Strategy";
const DESCRIPTION =
  "A complete guide to animal profits in Stardew Valley. Compare barn vs coop earnings, rank every animal by gold per day, and learn how to maximize income with artisan goods, auto-petters, and optimal barn layouts.";

const FAQ = [
  {
    question: "Which animal is the most profitable in Stardew Valley?",
    answer:
      "Pigs are the highest raw-income animal thanks to truffles, which sell for 625g base (1,250g with Gatherer double + Botanist iridium quality). However, pigs only find truffles outdoors and not in winter, so their effective yearly average drops. For year-round consistency, cows producing large milk into cheese via the Artisan profession are extremely competitive.",
  },
  {
    question: "Is the coop or barn more profitable?",
    answer:
      "Barns are generally more profitable at endgame because pigs and cows outperform most coop animals on a per-slot basis. However, coops are cheaper to build and upgrade, making them better for early-game cash flow. A balanced farm usually has both.",
  },
  {
    question: "Do I need the Artisan profession for animal products?",
    answer:
      "You don't need it, but it increases the value of all processed animal goods (cheese, mayo, cloth, etc.) by 40%. If your farm leans heavily on animal products, Artisan is almost always the better Farming Level 10 choice over Agriculturist.",
  },
  {
    question: "Are auto-petters worth buying for animals?",
    answer:
      "Auto-petters maintain friendship so animals keep producing high-quality items even if you skip petting. They cost 50,000g from JojaMart or drop from Skull Cavern. If you have many animals and limited time, they pay for themselves within a season or two through consistent quality output. See our auto-petter analysis for more detail.",
  },
  {
    question: "How many animals should I keep per barn or coop?",
    answer:
      "A deluxe barn holds 12 animals and a deluxe coop holds 12 as well. For profit optimization, fill every slot — empty slots are wasted building investment. The key is matching your animal count to your processing capacity (cheese presses, mayo machines, looms).",
  },
  {
    question: "Do animals produce anything in winter?",
    answer:
      "Barn animals (cows, goats, sheep) and coop animals (chickens, ducks, rabbits) produce normally in winter as long as they have a heater and are fed. The exception is pigs — they only find truffles while outside, so they produce nothing in winter. This is a major factor in yearly profit calculations.",
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

const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";

const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";

export default function AnimalProfitGuidePage() {
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
            { name: "Animal Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Animal &amp; Artisan Guide
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#5c4033]/90 sm:text-base">
              {DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published: {publishedTime.slice(0, 10)}
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: {modifiedTime.slice(0, 10)}
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Reading time: ~14–18 min
              </span>
            </div>
          </header>

          {/* TABLE OF CONTENTS */}
          <section className={CARD}>
            <h2 className={H2}>Table of contents</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a className={TOC_LINK} href="#why-animals">
                1) Why animals matter for your farm economy
              </a>
              <a className={TOC_LINK} href="#barn-vs-coop">
                2) Barn vs coop: cost, capacity &amp; ROI
              </a>
              <a className={TOC_LINK} href="#animal-rankings">
                3) Every animal ranked by gold per day
              </a>
              <a className={TOC_LINK} href="#artisan-processing">
                4) Artisan processing: turning products into profit
              </a>
              <a className={TOC_LINK} href="#pig-truffle-deep-dive">
                5) Pig &amp; truffle deep dive
              </a>
              <a className={TOC_LINK} href="#optimal-setup">
                6) Optimal barn &amp; coop setup by game stage
              </a>
              <a className={TOC_LINK} href="#mistakes">
                7) Common mistakes that cost you thousands
              </a>
              <a className={TOC_LINK} href="#faq">
                FAQ
              </a>
            </div>
          </section>

          {/* SECTION 3 — ANIMAL RANKINGS */}
          <section id="animal-rankings" className={CARD}>
            <h2 className={H2}>
              3) Every animal ranked by gold per day
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              This ranking uses <strong>effective daily gold</strong> — the average income per animal
              per day across a full year, accounting for winter downtime (pigs), processing into
              artisan goods, and realistic quality distributions at max hearts. All values assume
              the Artisan profession (+40% on processed goods).
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🐷 Pig</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~1,000–1,400g/day*</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Truffles sell for 625g base. With Gatherer (chance to double) and Botanist (always
                  iridium), a single pig averages 1-2 truffles per day outdoors. Truffle oil (via oil
                  maker) sells for 1,491g with Artisan. The catch: zero production in winter and rainy
                  days, so the yearly average drops to roughly 750-1,050g/day effective.
                </p>
                <p className="mt-1 text-xs text-[#6f4b2a]/70">
                  *Spring/Summer/Fall outdoor days only. Yearly effective is lower.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🐄 Cow</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~350–560g/day</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Large milk (at max hearts) into cheese yields 336g base, 470g with Artisan. Gold and
                  iridium quality cheese pushes this higher. Cows produce every day, all year, making
                  them the most reliable barn animal. No seasonal gaps, no weather dependency.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🐐 Goat</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~200–400g/day</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Large goat milk into goat cheese sells for 560g with Artisan at base quality. The
                  problem: goats only produce every other day, cutting effective daily income in half.
                  Still decent, but cows beat them on consistency.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🦆 Duck</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~180–300g/day</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Duck eggs into duck mayo sell for 525g with Artisan. Ducks produce every other day,
                  with occasional duck feathers (1,250g) as a bonus. The feather drops make ducks the
                  best coop animal for raw value, though inconsistent.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🐔 Chicken</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~150–250g/day</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Large eggs into mayo sell for 285g with Artisan. Chickens produce daily and are the
                  cheapest animal to acquire (800g or free from events). They&apos;re the workhorse of
                  early-game animal income — not flashy, but dependable.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🐇 Rabbit</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~120–220g/day</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Wool (every few days) plus occasional rabbit&apos;s foot drops (rare, but valuable
                  at 565g base). Rabbits are more of a utility animal — the rabbit&apos;s foot is
                  needed for a secret bundle and makes a great gift. Profit-wise, they trail chickens
                  and ducks.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-[#4a321e]">🐑 Sheep</p>
                  <p className="text-sm font-semibold text-[#6f4b2a]">~100–200g/day</p>
                </div>
                <p className="mt-2 text-sm leading-6">
                  Wool into cloth (via loom) sells for 658g with Artisan, but sheep only produce wool
                  every 3 days (2 with Shepherd profession). The per-day average is modest. Sheep are
                  better as a supplement than a primary income source.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The takeaway: pigs dominate when they can work, cows are the all-season backbone,
              and chickens are the best early-game value. For crop-focused players looking to add
              animals, start with cows and chickens, then add pigs when you have a deluxe barn.
            </p>
          </section>

          {/* SECTION 1 — WHY ANIMALS MATTER */}
          <section id="why-animals" className={CARD}>
            <h2 className={H2}>
              1) Why animals matter for your farm economy
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Crops get most of the attention in profit discussions, and for good reason — they
              scale fast and pair beautifully with kegs and preserve jars. But animals solve a
              problem crops can&apos;t: <strong>consistent, year-round income that doesn&apos;t
              depend on planting cycles or season transitions</strong>.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Once your barn or coop is upgraded and your animals are at full hearts, they produce
              every single day (with one notable exception we&apos;ll cover). That means gold flowing
              in during winter when your fields are empty, during festival days when you can&apos;t
              harvest, and during those awkward 2-3 day gaps between seasons when nothing is growing.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The real power of animals shows up when you combine them with artisan processing.
              A single cow producing large milk every day, turned into gold-quality cheese, generates
              a quiet but relentless income stream. Multiply that across a full deluxe barn and
              you&apos;re looking at serious passive gold.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              If you&apos;re already optimizing your crop pipeline with our{" "}
              <Link href="/calculator" className={LINK}>
                Crop Profit Calculator
              </Link>
              , animals are the natural next layer. They don&apos;t compete with your fields — they
              complement them.
            </p>
          </section>

          {/* SECTION 2 — BARN VS COOP */}
          <section id="barn-vs-coop" className={CARD}>
            <h2 className={H2}>
              2) Barn vs coop: cost, capacity &amp; return on investment
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              Before buying animals, you need a building. Here&apos;s how the two paths compare
              from an investment perspective.
            </p>

            <div className="mt-4 overflow-x-auto">
              <div className="inline-block min-w-full">
                <div className="grid grid-cols-4 gap-px rounded-2xl border border-[#7c4d2e]/25 bg-[#7c4d2e]/15 text-sm">
                  <div className="bg-[#fff7e6] p-3 font-semibold text-[#4a321e]">Building</div>
                  <div className="bg-[#fff7e6] p-3 font-semibold text-[#4a321e]">Total cost (all upgrades)</div>
                  <div className="bg-[#fff7e6] p-3 font-semibold text-[#4a321e]">Max animals</div>
                  <div className="bg-[#fff7e6] p-3 font-semibold text-[#4a321e]">Best earner</div>
                  <div className="bg-white/60 p-3">Deluxe Barn</div>
                  <div className="bg-white/60 p-3">25,000g + 1,150 wood + 600 stone</div>
                  <div className="bg-white/60 p-3">12</div>
                  <div className="bg-white/60 p-3">Pig (truffles)</div>
                  <div className="bg-white/45 p-3">Deluxe Coop</div>
                  <div className="bg-white/45 p-3">15,000g + 1,100 wood + 500 stone</div>
                  <div className="bg-white/45 p-3">12</div>
                  <div className="bg-white/45 p-3">Duck / Void Chicken</div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              The coop is cheaper and faster to get running. If you&apos;re in Year 1 and need
              income now, a coop with chickens is a solid first step — eggs into mayo machines
              start paying back quickly. But if you&apos;re planning for maximum long-term profit,
              the barn is where the real money lives, especially once you unlock pigs.
            </p>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff7e6]/70 p-4">
              <p className="text-sm font-semibold text-[#4a321e]">ROI rule of thumb</p>
              <p className="mt-2 text-sm leading-6">
                A deluxe coop with 12 chickens producing mayo pays back its building cost in roughly
                25-30 days. A deluxe barn with pigs can pay back faster in spring/summer/fall, but
                the winter gap extends the effective payback. For a balanced approach, build the coop
                first, then add a barn once you have stable crop income.
              </p>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
