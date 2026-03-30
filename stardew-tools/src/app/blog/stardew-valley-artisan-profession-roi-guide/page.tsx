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
const fromPath = "/blog/stardew-valley-artisan-profession-roi-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Artisan Profession ROI Guide (2026): Is the 40% Bonus Worth It?";
const DESCRIPTION =
  "Deep-dive ROI analysis of the Artisan profession in Stardew Valley. Compare Artisan vs Tiller vs Agriculturist, calculate exact gold/day gains, and learn when to choose each profession.";

const FAQ_ITEMS = [
  {
    question: "Is Artisan the best Farming Level 10 profession in Stardew Valley?",
    answer:
      "For most mid-to-late-game farms with a Keg or Preserves Jar operation, yes. The 40% value bonus to all Artisan goods scales directly with your processing throughput and delivers the highest gold-per-day of any Farming profession in the vast majority of playstyles.",
  },
  {
    question: "Does the Artisan bonus stack with quality (Silver/Gold/Iridium)?",
    answer:
      "Yes. The 40% Artisan multiplier is applied after base item quality is calculated. A Gold-quality Starfruit Wine that would normally sell for 2,250g sells for 3,150g with Artisan. Higher quality input crops result in higher quality Artisan goods and a proportionally larger gold bonus.",
  },
  {
    question: "Can you switch from Artisan to Agriculturist later?",
    answer:
      "Yes. You can visit the Statue of Uncertainty in the Sewers (unlocked after donating 60 items to the Museum) and pay 10,000g to change your Level 10 profession. This means your choice is not permanent, but each switch costs gold, so plan carefully.",
  },
  {
    question: "Does Artisan affect Honey, Coffee, and Oil?",
    answer:
      "Yes. Honey sold from Bee Houses, Truffle Oil from Oil Makers, and Coffee from Kegs all count as Artisan goods and receive the 40% bonus. Fairy Rose Honey jumps from 680g to 952g per jar, making Bee Houses a surprisingly strong Artisan income source.",
  },
  {
    question: "How many Kegs do I need for Artisan to be worth it?",
    answer:
      "Even 12 Kegs running Pale Ale adds roughly 1,440g per 2-day cycle over selling raw Hops. At 24 Kegs with Starfruit Wine, the annual income difference between Artisan and no-Artisan exceeds 400,000g. The break-even on the Statue switch fee is typically less than one full processing cycle.",
  },
  {
    question: "Should I pick Tiller or Rancher at Farming Level 5?",
    answer:
      "Almost always Tiller. The Tiller path unlocks Artisan at Level 10, which is the strongest long-term multiplier. Rancher leads to Coopmaster or Shepherd at Level 10, both of which are weaker for pure gold output. Only pick Rancher if your farm is entirely animal-product focused and you plan to stay that way.",
  },
];

const PROFESSION_ROWS = [
  {
    level: "Lv 5 – Tiller",
    bonus: "+10% crop sell price",
    unlocks: "Artisan or Agriculturist at Lv 10",
    bestFor: "Any crop-heavy or processing farm",
  },
  {
    level: "Lv 5 – Rancher",
    bonus: "+20% animal product sell price",
    unlocks: "Coopmaster or Shepherd at Lv 10",
    bestFor: "Dedicated animal product farms",
  },
  {
    level: "Lv 10 – Artisan",
    bonus: "+40% Artisan good sell price",
    unlocks: "(requires Tiller)",
    bestFor: "Keg / Jar / Bee House / Oil Maker setups",
  },
  {
    level: "Lv 10 – Agriculturist",
    bonus: "+10% crop growth speed",
    unlocks: "(requires Tiller)",
    bestFor: "Speed-run or crop-only playstyles",
  },
] as const;

const ARTISAN_GOODS_ROWS = [
  { item: "Starfruit Wine", machine: "Keg", base: "2,250g", artisan: "3,150g", bonus: "+900g", cycle: "7 days" },
  { item: "Ancient Fruit Wine", machine: "Keg", base: "2,310g", artisan: "3,234g", bonus: "+924g", cycle: "7 days" },
  { item: "Melon Wine", machine: "Keg", base: "750g", artisan: "1,050g", bonus: "+300g", cycle: "7 days" },
  { item: "Pale Ale", machine: "Keg", base: "300g", artisan: "420g", bonus: "+120g", cycle: "2 days" },
  { item: "Mead", machine: "Keg", base: "200g", artisan: "280g", bonus: "+80g", cycle: "2 days" },
  { item: "Ancient Fruit Jelly", machine: "Preserves Jar", base: "1,550g", artisan: "2,170g", bonus: "+620g", cycle: "4 days" },
  { item: "Cranberry Jelly", machine: "Preserves Jar", base: "200g", artisan: "280g", bonus: "+80g", cycle: "4 days" },
  { item: "Blueberry Jelly", machine: "Preserves Jar", base: "150g", artisan: "210g", bonus: "+60g", cycle: "4 days" },
  { item: "Truffle Oil", machine: "Oil Maker", base: "1,065g", artisan: "1,491g", bonus: "+426g", cycle: "6h in-game" },
  { item: "Goat Cheese", machine: "Cheese Press", base: "400g", artisan: "560g", bonus: "+160g", cycle: "3.3h in-game" },
  { item: "Fairy Rose Honey", machine: "Bee House", base: "680g", artisan: "952g", bonus: "+272g", cycle: "4 days" },
] as const;

const ANNUAL_ROWS = [
  { scenario: "24 Kegs – Pale Ale (year-round)", without: "~1,314,000g", with: "~1,839,600g", gain: "+525,600g" },
  { scenario: "24 Kegs – Starfruit Wine (Summer, ~4 batches)", without: "~216,000g", with: "~302,400g", gain: "+86,400g" },
  { scenario: "24 Kegs – Ancient Fruit Wine (Greenhouse)", without: "~1,347,120g", with: "~1,885,968g", gain: "+538,848g" },
  { scenario: "60 Bee Houses – Fairy Rose Honey (Summer+Fall)", without: "~244,800g", with: "~342,720g", gain: "+97,920g" },
] as const;

const CARD = "rounded-2xl border border-[#c8a97e]/40 bg-[#fdf6e3]/80 p-5 shadow-sm sm:p-7";
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

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  alternates: { canonical: url },
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

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Table of Contents</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#what-is-artisan">1) What Artisan actually does</a>
        <a className={TOC_LINK} href="#profession-comparison">2) Farming profession comparison</a>
        <a className={TOC_LINK} href="#exact-bonuses">3) Exact gold bonuses per Artisan good</a>
        <a className={TOC_LINK} href="#artisan-vs-agriculturist">4) Artisan vs Agriculturist decision</a>
        <a className={TOC_LINK} href="#annual-income">5) Annual income comparison (24 Kegs)</a>
        <a className={TOC_LINK} href="#unlock-timeline">6) When to reach Farming Level 10</a>
        <a className={TOC_LINK} href="#greenhouse-combo">7) Greenhouse + Iridium Sprinkler synergy</a>
        <a className={TOC_LINK} href="#faq">8) FAQ</a>
      </div>
    </nav>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-[#b77841]/35 bg-[#fff8e7] px-5 py-4">
      <p className="text-sm font-semibold text-[#7c4d2e]">{title}</p>
      <div className="mt-1 text-sm leading-7 text-[#5c4033]/90">{children}</div>
    </div>
  );
}
export default async function ArtisanProfessionROIPage() {
  const readNextPosts = await getBlogReadNextPosts("stardew-valley-artisan-profession-roi-guide");

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <PwaRegisterScript />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Artisan Profession ROI Guide" },
          ]}
        />

        <header className="mt-6">
          <h1 className="text-2xl font-bold leading-snug text-[#3f2a22] sm:text-3xl">
            {TITLE}
          </h1>
          <p className="mt-3 text-sm text-[#7c4d2e]/80">
            Published{" "}
            <time dateTime={publishedTime}>March 29, 2026</time>
            {" "}· 12 min read
          </p>
        </header>

        <article className="mt-8 space-y-8">
          <Toc />

          {/* Section 1 */}
          <section id="what-is-artisan" className={CARD}>
            <h2 className={H2}>1) What Artisan Actually Does</h2>
            <p className={P}>
              The Artisan profession is unlocked at Farming Level 10 after choosing Tiller at Level 5.
              Its effect is deceptively simple: every item classified as an &quot;Artisan good&quot; sells
              for 40% more gold. Wine, Jelly, Pickles, Cheese, Oil, Mead, Pale Ale, Honey — all of it.
            </p>
            <p className={P}>
              Most players know Artisan is good. Far fewer know exactly how good. This guide puts
              concrete numbers on the profession so you can decide with certainty, not guesswork.
              Spoiler: for any farm that processes crops through Kegs or Preserves Jars, Artisan is
              almost always the single highest-value profession choice in the entire game.
            </p>
            <Callout title="The core mechanic">
              Artisan multiplies the sell price of processed goods, not raw crops. A Starfruit sells for
              750g. Turn it into Wine and it sells for 2,250g base — or 3,150g with Artisan. That 900g
              difference per bottle is pure profit from a single profession choice.
            </Callout>
            <p className={P}>
              The 40% bonus applies at the point of sale. It does not affect processing time, machine
              cost, or crop purchase price. Every gold invested in seeds, Kegs, and Jars returns 40%
              more on the Artisan goods side.
            </p>
          </section>

          {/* Section 2 */}
          <section id="profession-comparison" className={CARD}>
            <h2 className={H2}>2) Farming Profession Comparison Table</h2>
            <p className={P}>
              At Farming Level 5 you choose between Tiller and Rancher. That choice gates your Level 10
              options. Here is how all four relevant professions stack up:
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#c8a97e]/50 text-left text-xs font-semibold uppercase tracking-wide text-[#7c4d2e]">
                    <th className="pb-2 pr-4">Profession</th>
                    <th className="pb-2 pr-4">Bonus</th>
                    <th className="pb-2 pr-4">Unlocks</th>
                    <th className="pb-2">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8a97e]/25">
                  {PROFESSION_ROWS.map((row) => (
                    <tr key={row.level}>
                      <td className="py-2 pr-4 font-semibold text-[#4a321e]">{row.level}</td>
                      <td className="py-2 pr-4 text-[#5c4033]/90">{row.bonus}</td>
                      <td className="py-2 pr-4 text-[#5c4033]/80">{row.unlocks}</td>
                      <td className="py-2 text-[#5c4033]/80">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              The key insight: Tiller&apos;s +10% at Level 5 is modest, but it is the door to Artisan
              at Level 10. Never choose Rancher unless you have a specific animal-product farm plan,
              because Coopmaster and Shepherd are significantly weaker for gold generation than Artisan.
            </p>
          </section>

          {/* Section 3 */}
          <section id="exact-bonuses" className={CARD}>
            <h2 className={H2}>3) Exact Gold Bonuses Per Artisan Good</h2>
            <p className={P}>
              The table below shows base sell prices (no profession, normal quality) versus Artisan
              prices. All figures assume standard quality output unless noted.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#c8a97e]/50 text-left text-xs font-semibold uppercase tracking-wide text-[#7c4d2e]">
                    <th className="pb-2 pr-3">Item</th>
                    <th className="pb-2 pr-3">Machine</th>
                    <th className="pb-2 pr-3">Base</th>
                    <th className="pb-2 pr-3">Artisan</th>
                    <th className="pb-2 pr-3">Bonus</th>
                    <th className="pb-2">Cycle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8a97e]/25">
                  {ARTISAN_GOODS_ROWS.map((row) => (
                    <tr key={row.item}>
                      <td className="py-2 pr-3 font-semibold text-[#4a321e]">{row.item}</td>
                      <td className="py-2 pr-3 text-[#5c4033]/80">{row.machine}</td>
                      <td className="py-2 pr-3 text-[#5c4033]/90">{row.base}</td>
                      <td className="py-2 pr-3 font-semibold text-[#7c4d2e]">{row.artisan}</td>
                      <td className="py-2 pr-3 font-semibold text-green-700">{row.bonus}</td>
                      <td className="py-2 text-[#5c4033]/75">{row.cycle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              A few highlights worth calling out directly. Ancient Fruit Wine delivers +924g per bottle
              — the highest absolute bonus of any single item. Pale Ale is lower per unit (+120g) but
              its 2-day cycle makes it one of the best throughput plays for year-round income. Truffle
              Oil at +426g per press rewards players who scale their pig operations into the Artisan
              ecosystem rather than selling Truffles raw.
            </p>
            <Callout title="Quality multiplies the Artisan bonus further">
              Gold-quality crops produce Gold-quality processed goods. Gold Starfruit Wine has a base
              of 3,375g. With Artisan that becomes 4,725g — a +1,575g bonus per bottle versus the
              standard-quality comparison. Iridium-quality Ancient Fruit Wine with Artisan reaches
              6,468g per bottle, making it one of the most valuable items in the game.
            </Callout>
          </section>

          {/* Section 4 */}
          <section id="artisan-vs-agriculturist" className={CARD}>
            <h2 className={H2}>4) Artisan vs Agriculturist: The Decision Guide</h2>
            <p className={P}>
              Agriculturist gives +10% crop growth speed. On paper that sounds useful — crops finish a
              day or two earlier. In practice, the math rarely justifies it over Artisan.
            </p>
            <h3 className={`${H3} mt-5`}>When Artisan wins (almost always)</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>You have any number of Kegs, Preserves Jars, or other Artisan machines.</li>
              <li className={LI}>You grow Ancient Fruit, Starfruit, or any high-value crop for processing.</li>
              <li className={LI}>You have a Greenhouse with continuous Ancient Fruit or Starfruit cycles.</li>
              <li className={LI}>You run Bee Houses anywhere on your farm.</li>
              <li className={LI}>You produce Cheese, Goat Cheese, or Truffle Oil from animals.</li>
            </ul>
            <h3 className={`${H3} mt-5`}>When Agriculturist might be worth considering</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                You are doing a strict speed-run and selling crops raw to maximize early-season
                cash flow before any processing infrastructure exists.
              </li>
              <li className={LI}>
                You grow crops with very tight harvest windows (e.g., Blueberry or Cranberry in Fall)
                and an extra harvest cycle has outsized value for your specific strategy.
              </li>
              <li className={LI}>
                You have already switched away from Artisan using the Statue of Uncertainty and want
                a temporary crop-speed boost before switching back.
              </li>
            </ul>
            <Callout title="The honest verdict">
              In a standard playthrough that reaches Year 2 or beyond, Artisan beats Agriculturist by
              a factor of 3–10x in annual gold generated. Agriculturist&apos;s growth-speed bonus is
              valuable in the abstract but does not compound the way a 40% sell-price multiplier does
              across hundreds of Artisan good transactions per year.
            </Callout>
            <p className={P}>
              For a deeper look at which machines produce the best returns, see our{" "}
              <Link className={LINK} href="/blog/stardew-valley-artisan-machines-roi-guide">
                Artisan Machines ROI Guide
              </Link>{" "}
              and the{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                complete Keg vs Jar profit system breakdown
              </Link>.
            </p>
          </section>

          {/* Section 5 */}
          <section id="annual-income" className={CARD}>
            <h2 className={H2}>5) Annual Income Comparison (24 Kegs)</h2>
            <p className={P}>
              To make the ROI concrete, here are modeled annual income figures for common 24-Keg
              setups, with and without the Artisan profession. Figures assume consistent harvesting,
              standard quality crops, and selling all processed output at base NPC prices.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#c8a97e]/50 text-left text-xs font-semibold uppercase tracking-wide text-[#7c4d2e]">
                    <th className="pb-2 pr-4">Scenario</th>
                    <th className="pb-2 pr-4">Without Artisan</th>
                    <th className="pb-2 pr-4">With Artisan</th>
                    <th className="pb-2">Annual Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8a97e]/25">
                  {ANNUAL_ROWS.map((row) => (
                    <tr key={row.scenario}>
                      <td className="py-2 pr-4 text-[#4a321e]">{row.scenario}</td>
                      <td className="py-2 pr-4 text-[#5c4033]/90">{row.without}</td>
                      <td className="py-2 pr-4 font-semibold text-[#7c4d2e]">{row.with}</td>
                      <td className="py-2 font-bold text-green-700">{row.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              The Ancient Fruit Wine Greenhouse scenario is the benchmark most late-game players aim
              for. With 24 Kegs running year-round, the difference between having Artisan and not
              having it is over half a million gold annually — more than enough to complete the
              Community Center, upgrade every building, and still have surplus capital.
            </p>
            <p className={P}>
              The Pale Ale scenario is instructive because Hops grow fast (2 days) and can fill Kegs
              continuously through Summer and Fall. Running 24 Kegs of Pale Ale year-round with
              Artisan generates roughly 1.84 million gold — a mid-game benchmark most players can
              reach by the end of Year 2.
            </p>
            <Callout title="Use the calculator for your exact setup">
              The scenarios above use standard assumptions. Your actual numbers depend on crop quality,
              seed costs, and how many machines you run. Use the{" "}
              <Link className={LINK} href="/">Stardew Profit Calculator</Link>{" "}
              to model your specific farm layout.
            </Callout>
          </section>

          {/* Section 6 */}
          <section id="unlock-timeline" className={CARD}>
            <h2 className={H2}>6) When to Reach Farming Level 10</h2>
            <p className={P}>
              Farming XP comes from harvesting crops, petting animals, and using the Hoe and Watering
              Can. Here is a realistic timeline for most playthroughs:
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Spring Year 1:</strong> Plant Parsnips and Cauliflower aggressively. Aim for
                Farming Level 3–4 by end of Spring.
              </li>
              <li className={LI}>
                <strong>Summer Year 1:</strong> Scale into Blueberries (multiple harvests) and
                Melons. Reach Level 5 and choose Tiller. Target Level 6–7 by end of Summer.
              </li>
              <li className={LI}>
                <strong>Fall Year 1:</strong> Cranberries and Pumpkins for XP and gold. Reach
                Level 8–9 by end of Fall.
              </li>
              <li className={LI}>
                <strong>Winter Year 1 / Spring Year 2:</strong> With sustained effort, Level 10 is
                achievable by mid-Winter Year 1 or early Spring Year 2. Choose Artisan.
              </li>
            </ul>
            <p className={P}>
              The fastest path to Level 10 is maximizing planted tiles and harvesting multi-yield crops
              like Blueberry and Cranberry. Each individual harvest (not just plant) contributes XP,
              so multi-harvest crops dramatically accelerate progression. Ancient Seeds in the
              Greenhouse from Year 2 onward will also contribute passively.
            </p>
            <Callout title="Spring Year 2 is the realistic target">
              Most players who focus on farming reach Level 10 between Winter Year 1 and Spring Year 2.
              If you hit it earlier, great. If you hit it later, the ROI of Artisan is unchanged —
              every day you process goods with the profession active pays off.
            </Callout>
          </section>

          {/* Section 7 */}
          <section id="greenhouse-combo" className={CARD}>
            <h2 className={H2}>7) Greenhouse + Iridium Sprinkler Synergy</h2>
            <p className={P}>
              The Greenhouse is unlocked by completing the Pantry bundle in the Community Center (or
              purchasing it for 35,000g in Joja Route). It enables year-round crop growth regardless
              of season — and combined with Artisan, it becomes the most powerful passive income
              system in the game.
            </p>
            <h3 className={`${H3} mt-5`}>The optimal Greenhouse setup</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Crop:</strong> Ancient Fruit (18-day initial growth, 7-day repeat harvest).
                Can also run Starfruit in Summer if you want burst income windows.
              </li>
              <li className={LI}>
                <strong>Sprinklers:</strong> 6 Iridium Sprinklers cover the entire 10×12 planting
                area. No daily watering needed.
              </li>
              <li className={LI}>
                <strong>Kegs:</strong> Build a dedicated Keg barn or shed alongside the Greenhouse.
                24–48 Kegs running Ancient Fruit Wine is the standard late-game benchmark.
              </li>
              <li className={LI}>
                <strong>Artisan:</strong> Every bottle of Ancient Fruit Wine sells for 3,234g instead
                of 2,310g. With 48 Kegs outputting weekly, that is +44,352g per 7-day cycle versus
                the no-Artisan baseline.
              </li>
            </ul>
            <p className={P}>
              The Greenhouse + Iridium Sprinklers + Artisan + Kegs combination is so effective that
              most experienced players consider it the &quot;endgame economy&quot; of Stardew Valley.
              Once running, it requires minimal daily effort: refill Kegs on harvest day, collect and
              sell Wine, repeat. The Artisan profession is the multiplier that makes this system
              produce life-changing in-game wealth.
            </p>
            <Callout title="Add Bee Houses for passive bonus income">
              Plant Fairy Rose flowers near your Greenhouse exterior. Each of your Bee Houses will
              produce Fairy Rose Honey at 952g per jar (with Artisan) instead of 680g. 30 Bee Houses
              near Fairy Roses generates ~28,560g per 4-day harvest — entirely passive, no watering
              or machine management required.
            </Callout>
            <p className={P}>
              For a complete breakdown of which machines to prioritize building first, see our{" "}
              <Link className={LINK} href="/blog/stardew-valley-artisan-machines-roi-guide">
                Artisan Machines ROI Guide
              </Link>.
              For the Keg vs Jar decision specifically, the{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                Keg vs Jar Complete Profit System
              </Link>{" "}
              guide covers every edge case.
            </p>
          </section>

          {/* CTA */}
          <section className={CARD}>
            <h2 className={H2}>Calculate Your Artisan Income</h2>
            <p className={P}>
              Ready to see exactly what Artisan will earn on your specific farm? Enter your crop,
              machine count, and season into the calculator and compare with and without the profession
              bonus in real time.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-artisan-machines-roi-guide">
                Artisan Machines ROI Guide
              </Link>
            </div>
          </section>

          {/* Section 8 – FAQ */}
          <section id="faq" className={CARD}>
            <h2 className={H2}>8) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-[#c8a97e]/35 bg-white/50 px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/90">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Artisan is the foundation of late-game wealth in Stardew Valley, but it works best as
              part of a layered economy. Pair it with the right machines, crops, and farm layout for
              maximum returns.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Model your Keg and Jar output with the{" "}
                <Link className={LINK} href="/">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                Compare processing machine options in the{" "}
                <Link className={LINK} href="/blog/keg-vs-jar-complete-profit-system">
                  Keg vs Jar Complete Profit System
                </Link>.
              </li>
              <li className={LI}>
                Find the highest-ROI machines for your stage of the game in the{" "}
                <Link className={LINK} href="/blog/stardew-valley-artisan-machines-roi-guide">
                  Artisan Machines ROI Guide
                </Link>.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-artisan-profession-roi-guide" />
      </main>

      <FaqJsonLd faqs={FAQ_ITEMS} />
      <SiteFooter />
    </div>
  );
}
