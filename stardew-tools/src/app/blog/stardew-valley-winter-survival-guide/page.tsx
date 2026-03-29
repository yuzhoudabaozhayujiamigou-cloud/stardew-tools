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
const fromPath = "/blog/stardew-valley-winter-survival-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Winter Survival Guide (2026): Make Money, Stay Busy, and Prepare for Year 2";
const DESCRIPTION =
  "Complete Stardew Valley winter guide covering money-making strategies without crops, fishing income, mining runs, artisan processing, relationship building, and Year 2 preparation checklist.";

const FAQ_ITEMS = [
  {
    question: "How do you make money in winter in Stardew Valley?",
    answer:
      "The best winter income sources are: (1) processing fall crops you stockpiled into Wine and Pickles via Kegs and Preserves Jars, (2) deep Skull Cavern runs for Iridium Ore, (3) fishing for high-value winter fish like Squid and Midnight Carp, and (4) foraging Crystal Fruit and Nautilus Shells. Artisan processing usually delivers the highest total gold.",
  },
  {
    question: "Can you grow crops in winter in Stardew Valley?",
    answer:
      "Almost nothing grows outdoors in winter. Winter Seeds produce forageable items (Crystal Fruit, Holly, etc.) and are the only plantable option in the open field. The Greenhouse is the exception — any crop grows there year-round. Unlocking the Greenhouse before or during Year 1 Winter is one of the highest-priority goals.",
  },
  {
    question: "Is fishing good in winter Stardew Valley?",
    answer:
      "Yes. Winter offers exclusive fish like Squid (ocean, 65g), Midnight Carp (mountain/river at night, 150g), and the legendary Glacierfish (river south of Arrowhead Island). Active fishing can realistically earn 2,000–5,000g per day depending on skill level, making it a reliable winter income floor.",
  },
  {
    question: "Should I go to Skull Cavern in winter?",
    answer:
      "Absolutely. Winter is the ideal time for Skull Cavern runs because you have no planting or harvesting obligations. Focus on reaching floor 100+ for consistent Iridium Ore. Bring Spicy Eel or Triple Shot Espresso for speed, stack Bomb crafting materials, and aim for 5–10 Iridium Ore per run minimum.",
  },
  {
    question: "What should I do to prepare for Year 2 in winter?",
    answer:
      "Key Year 2 prep goals: (1) save at least 50,000g for Spring seeds, (2) unlock the Greenhouse if not done, (3) upgrade tools to Gold or Iridium, (4) build and stock a full Keg array for artisan processing, (5) complete remaining Community Center bundles, and (6) plant Ancient Seeds in the Greenhouse if you have them.",
  },
  {
    question: "Are Winter Seeds worth planting?",
    answer:
      "Winter Seeds are worth planting mainly for the foraging XP and Botanist profession synergy. Raw sell value is modest (30–150g per item), but Iridium quality forageable items with Botanist are worth 1.5x and can be processed into Wine/Jelly. If you have spare energy and field space, plant them — but don&apos;t prioritize them over mining or processing.",
  },
  {
    question: "How do I use winter to catch up on Community Center bundles?",
    answer:
      "Winter is perfect for completing Fish Tank bundles (Squid, Midnight Carp, Glacierfish), Bulletin Board bundles (Maple Syrup, Oak Resin from tapping), and the Vault bundles by accumulating gold. Check your remaining bundle requirements and plan your winter activities around the hardest-to-find items.",
  },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url,
      type: "article",
      publishedTime,
      modifiedTime,
    },
  };
}

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";
const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

const INCOME_SOURCES = [
  { rank: 1, source: "Artisan Processing (Kegs + Jars)", goldPerDay: "3,000–8,000g", notes: "Depends on stockpile size; highest ceiling" },
  { rank: 2, source: "Skull Cavern Mining", goldPerDay: "1,500–4,000g", notes: "Iridium Ore + Gems; scales with depth" },
  { rank: 3, source: "Fishing", goldPerDay: "1,500–3,500g", notes: "Consistent; exclusive winter fish available" },
  { rank: 4, source: "Foraging", goldPerDay: "200–800g", notes: "Crystal Fruit, Nautilus Shell; Botanist boosts" },
  { rank: 5, source: "Winter Seeds", goldPerDay: "100–400g", notes: "Low ROI; mainly for foraging XP" },
] as const;

const WINTER_FISH = [
  { fish: "Glacierfish", location: "Cindersnap River (south tip)", sell: "1,000g", notes: "Legendary; one per save" },
  { fish: "Midnight Carp", location: "Mountain Lake / River (night)", sell: "150g", notes: "Common; high value" },
  { fish: "Squid", location: "Ocean (6pm–2am)", sell: "65–100g", notes: "Winter only" },
  { fish: "Woodskip", location: "Secret Woods", sell: "75g", notes: "Any season; rare" },
  { fish: "Eel", location: "Ocean (rain, 4pm–2am)", sell: "85g", notes: "Rain only" },
  { fish: "Albacore", location: "Ocean (morning/evening)", sell: "75g", notes: "Fall + Winter" },
] as const;

const YEAR2_CHECKLIST = [
  { item: "Gold savings", target: "50,000g+", why: "Cover Spring Year 2 seeds (Strawberry + Rhubarb)" },
  { item: "Greenhouse", target: "Unlocked", why: "Ancient Fruit wine pipeline = highest per-item value" },
  { item: "Tool upgrades", target: "Gold Hoe + Watering Can", why: "Cover large fields efficiently" },
  { item: "Keg array", target: "24+ Kegs", why: "Process all Spring/Summer crops into wine" },
  { item: "Barn/Coop", target: "Big Barn + Big Coop", why: "Animal products add passive daily income" },
  { item: "Community Center", target: "Fish Tank complete", why: "Unlock Greenhouse if not done via bundles" },
  { item: "Ancient Seeds", target: "Greenhouse planted", why: "Year-round Ancient Fruit wine = ~2250g/bottle" },
] as const;

export default async function WinterSurvivalGuidePage() {
  const readNext = await getBlogReadNextPosts(fromPath);

  return (
    <>
      <PwaRegisterScript />
      <FaqJsonLd items={FAQ_ITEMS} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Winter Survival Guide" },
          ]}
        />

        <h1 className="mt-6 text-2xl font-bold leading-snug text-[#3f2a22] sm:text-3xl">
          Stardew Valley Winter Survival Guide (2026): Make Money, Stay Busy, and Prepare for Year 2
        </h1>
        <p className={P}>
          Winter in Stardew Valley feels like a roadblock — no crops, shorter days, and a farm that
          suddenly looks empty. But experienced players know that Winter is actually a gift: no
          planting obligations means maximum time for mining, fishing, artisan production, and
          Year 2 preparation. This guide tells you exactly how to make Winter your most productive
          season.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className={CTA_CLASS}>
            📊 Calculate Artisan Processing Profits
          </Link>
          <Link href="/blog/stardew-valley-artisan-machines-roi-guide" className={SUB_CTA_CLASS}>
            Artisan Machines ROI Guide →
          </Link>
        </div>

        {/* TOC */}
        <nav className="mt-8 rounded-2xl border border-[#7c4d2e]/20 bg-white/40 p-4">
          <p className="mb-3 text-sm font-semibold text-[#4a321e]">Table of Contents</p>
          <ul className="space-y-1">
            {[
              ["#income-sources", "Winter Income Sources Ranked"],
              ["#artisan", "Artisan Processing: The #1 Winter Strategy"],
              ["#mining", "Skull Cavern Mining"],
              ["#fishing", "Fishing in Winter"],
              ["#foraging", "Foraging & Winter Seeds"],
              ["#daily-schedule", "Optimal Daily Schedule"],
              ["#year2-prep", "Year 2 Preparation Checklist"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className={TOC_LINK}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Income Sources */}
        <section id="income-sources" className="mt-10">
          <h2 className={H2}>Winter Income Sources Ranked</h2>
          <p className={P}>
            Without crops, winter income comes from five main sources. Here they are ranked by
            realistic daily gold potential:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#7c4d2e]/20">
            <table className="w-full text-sm">
              <thead className="bg-[#7c4d2e]/10">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">#</th>
                  <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Income Source</th>
                  <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Gold/Day</th>
                  <th className="hidden px-3 py-2 text-left font-semibold text-[#4a321e] sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {INCOME_SOURCES.map((row) => (
                  <tr key={row.source} className="border-t border-[#7c4d2e]/10 even:bg-white/30">
                    <td className="px-3 py-2 font-bold text-[#4a321e]">{row.rank}</td>
                    <td className="px-3 py-2 font-medium text-[#4a321e]">{row.source}</td>
                    <td className="px-3 py-2 text-right font-semibold text-[#4a321e]">{row.goldPerDay}</td>
                    <td className="hidden px-3 py-2 text-[#5c4033]/80 sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Artisan */}
        <section id="artisan" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Artisan Processing: The #1 Winter Strategy</h2>
            <p className={P}>
              If you spent Fall stockpiling Cranberries, Pumpkins, and Sweet Gem Berries, Winter is
              when you cash in. Kegs and Preserves Jars run 24/7 while you do other things — the
              passive income compounds quickly.
            </p>
            <h3 className={`mt-5 ${H3}`}>Top Processing Targets</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}><strong>Cranberry Wine</strong>: 2g seed crop → 400g wine (Keg, 7 days)</li>
              <li className={LI}><strong>Pumpkin Juice</strong>: 320g raw → 960g juice (Keg)</li>
              <li className={LI}><strong>Sweet Gem Berry Wine</strong>: 3000g raw → 9000g wine (Artisan: 12,600g)</li>
              <li className={LI}><strong>Cranberry Jelly</strong>: 75g raw → 200g jelly (Preserves Jar, faster than Keg)</li>
            </ul>
            <p className={P}>
              With 24 Kegs running full cycles, a moderate Fall stockpile can generate
              <strong> 30,000–80,000g</strong> over a single Winter season passively.
            </p>
            <div className="mt-4">
              <Link href="/blog/stardew-valley-artisan-machines-roi-guide" className={LINK}>
                → Full Artisan Machines ROI Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Mining */}
        <section id="mining" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Skull Cavern Mining</h2>
            <p className={P}>
              Winter removes farm chores, making it the perfect time for deep Skull Cavern dives.
              Your goal: reach floor 100+ consistently for Iridium Ore, Prismatic Shards, and
              high-value gems.
            </p>
            <h3 className={`mt-5 ${H3}`}>Daily Mining Setup</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Eat Triple Shot Espresso or Spicy Eel before entering for speed boost</li>
              <li className={LI}>Bring 15–20 Mega Bombs for fast floor clearing</li>
              <li className={LI}>Stack food with +Mining and +Defense buffs</li>
              <li className={LI}>Target floors with Iridium nodes (purple rocks)</li>
            </ul>
            <p className={P}>
              A solid Skull Cavern run yields <strong>5–15 Iridium Ore</strong> (100g each raw,
              1,000g per bar) plus gems. Budget runs average 1,500–2,500g; optimized runs 3,000–6,000g.
            </p>
          </div>
        </section>

        {/* Fishing */}
        <section id="fishing" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Fishing in Winter</h2>
            <p className={P}>
              Winter fishing offers exclusive fish unavailable in other seasons, plus the legendary
              Glacierfish. It&apos;s the most reliable active income source for players without a
              large Keg array.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/20">
              <table className="w-full text-sm">
                <thead className="bg-[#7c4d2e]/10">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Fish</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Location</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Sell</th>
                    <th className="hidden px-3 py-2 text-left font-semibold text-[#4a321e] sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {WINTER_FISH.map((row) => (
                    <tr key={row.fish} className="border-t border-[#7c4d2e]/10 even:bg-white/30">
                      <td className="px-3 py-2 font-medium text-[#4a321e]">{row.fish}</td>
                      <td className="px-3 py-2 text-[#5c4033]">{row.location}</td>
                      <td className="px-3 py-2 text-right font-semibold text-[#4a321e]">{row.sell}</td>
                      <td className="hidden px-3 py-2 text-[#5c4033]/80 sm:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href="/blog/stardew-valley-fishing-profit-guide" className={LINK}>
                → Complete Fishing Profit Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Foraging */}
        <section id="foraging" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Foraging &amp; Winter Seeds</h2>
            <p className={P}>
              Winter forageables are sparse but some carry decent value. Crystal Fruit (150g),
              Nautilus Shell (120g), and Holly (80g) are the main targets. With the Botanist
              profession, all foraged items become Iridium quality, boosting values by 50%.
            </p>
            <h3 className={`mt-5 ${H3}`}>Winter Seeds: Worth It?</h3>
            <p className={P}>
              Winter Seeds grow in 7 days and produce one random forageable. Raw profit is low
              (100–225g per tile), but they grant Foraging XP toward Botanist. Plant them if you
              have spare field space — just don&apos;t expect significant income from them alone.
            </p>
          </div>
        </section>

        {/* Daily Schedule */}
        <section id="daily-schedule" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Optimal Daily Winter Schedule</h2>
            <div className="mt-4 space-y-3">
              {[
                { time: "6am–9am", activity: "Check + restock Kegs and Preserves Jars", priority: "High" },
                { time: "9am–12pm", activity: "Skull Cavern run (enter Mines before 10am)", priority: "High" },
                { time: "12pm–4pm", activity: "Continue mining OR switch to fishing", priority: "Medium" },
                { time: "4pm–6pm", activity: "Forage beach/forest for winter items", priority: "Low" },
                { time: "6pm–10pm", activity: "Night fishing (Squid, Midnight Carp)", priority: "Medium" },
                { time: "10pm–2am", activity: "Socialize / complete bundles / organize inventory", priority: "Low" },
              ].map((r) => (
                <div key={r.time} className="flex gap-4 rounded-xl border border-[#7c4d2e]/15 bg-white/35 p-3">
                  <span className="min-w-[90px] font-bold text-[#4a321e] text-sm">{r.time}</span>
                  <div>
                    <p className="text-sm font-medium text-[#4a321e]">{r.activity}</p>
                    <p className="text-xs text-[#5c4033]/70">Priority: {r.priority}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Year 2 Prep */}
        <section id="year2-prep" className="mt-10">
          <h2 className={H2}>Year 2 Preparation Checklist</h2>
          <p className={P}>
            Winter is your last chance to set up Year 2 properly. Work through this checklist:
          </p>
          <div className="mt-4 space-y-3">
            {YEAR2_CHECKLIST.map((item) => (
              <div key={item.item} className="flex gap-4 rounded-xl border border-[#7c4d2e]/15 bg-white/35 p-3">
                <span className="mt-0.5 text-lg">☐</span>
                <div>
                  <p className="text-sm font-semibold text-[#4a321e]">{item.item} — <span className="text-[#b77841]">{item.target}</span></p>
                  <p className="text-xs text-[#5c4033]/80">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-[28px] border-4 border-[#b77841]/50 bg-gradient-to-br from-[#fff8e7] to-[#fce8b1] p-6 text-center shadow-lg">
            <p className="text-lg font-bold text-[#4a321e]">Calculate Your Artisan Processing Income</p>
            <p className="mt-2 text-sm text-[#5c4033]">
              Use the calculator to estimate how much gold your Keg and Jar stockpile will generate
              this Winter.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/" className={CTA_CLASS}>
                Open Profit Calculator →
              </Link>
              <Link href="/blog/stardew-valley-profit-guide" className={SUB_CTA_CLASS}>
                Complete Profit Guide
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
                <p className={P}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <BlogReadNext posts={readNext} />
      </main>
      <SiteFooter />
    </>
  );
}
