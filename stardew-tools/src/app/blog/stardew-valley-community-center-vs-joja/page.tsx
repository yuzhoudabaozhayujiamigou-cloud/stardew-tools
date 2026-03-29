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
const fromPath = "/blog/stardew-valley-community-center-vs-joja";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Community Center vs Joja Mart in Stardew Valley: Complete Economic Comparison (2026)";
const DESCRIPTION =
  "Should you restore the Community Center or buy a Joja Membership? Complete economic analysis comparing gold cost, time investment, rewards, and profit impact for both routes.";

const FAQ_ITEMS = [
  {
    question: "Is Community Center or Joja better for profit?",
    answer:
      "Community Center is better for long-term profit. Completing all bundles saves approximately 130,000g in infrastructure costs (Bus, Minecart, Greenhouse, Bridge, Glittering Boulder) and unlocks the Greenhouse for free. Joja routes spend real gold for convenience but provide no unique economic advantage that compensates for the 130,000g outlay.",
  },
  {
    question: "How much does Joja Membership cost in total?",
    answer:
      "The Joja Membership itself costs 5,000g to purchase from Pierre's after Morris moves in. After that, each infrastructure upgrade costs additional gold: Bus Repair 40,000g, Minecart Repair 15,000g, Greenhouse 35,000g, Bridge Repair 25,000g, and Glittering Boulder Removal 15,000g. Total investment to complete all Joja upgrades is approximately 135,000g.",
  },
  {
    question: "Can you switch from Community Center to Joja route?",
    answer:
      "Yes, but only in one direction. You can abandon the Community Center path and buy a Joja Membership at any point before completing all bundles. However, once you purchase the Joja Membership, the Community Center route is permanently closed for that save file. You cannot switch from Joja back to Community Center.",
  },
  {
    question: "What is the hardest bundle in the Community Center?",
    answer:
      "The Vault Bundle is widely considered the hardest because it requires a total of 42,500g in pure gold across four tiers: 2,000g, 5,000g, 10,000g, and 25,000g. Unlike other bundles that require items you farm or forage, the Vault Bundle is a direct cash drain. The Bulletin Board bundles are second hardest due to the wide spread of items required across multiple categories.",
  },
  {
    question: "Does Joja route unlock the Greenhouse faster?",
    answer:
      "Yes. If you have sufficient gold, you can purchase the Joja Greenhouse upgrade for 35,000g as early as Year 1 Fall or even Summer, well before the typical Community Center completion in Year 2 Spring. However, each season of early Greenhouse access costs you real gold instead of bundle items.",
  },
  {
    question: "What do you miss if you choose Joja?",
    answer:
      "Choosing the Joja route means the Community Center building remains abandoned and eventually becomes a Joja Warehouse. You miss the full Community Center restoration cutscene, the unique story arc with the Junimos, and the personal sense of restoring the town. You also spend 130,000g+ instead of saving it. The Joja route does not offer any exclusive items or upgrades unavailable through Community Center completion.",
  },
  {
    question: "Is Joja worth it for speedrunning?",
    answer:
      "For certain speedrun categories, yes. Joja Membership allows players with early capital to unlock the Greenhouse and Bus (Skull Cavern access) faster than completing all required bundles. Speedrunners targeting minimum-day goals may find the gold cost acceptable if it saves multiple in-game days. For normal play, the economic cost makes Joja a poor value proposition.",
  },
] as const;

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

const OVERVIEW_ROWS = [
  { dimension: "Unlock method", cc: "Complete 6 Bundle categories", joja: "Purchase Joja Membership (5,000g)" },
  { dimension: "Typical completion", cc: "Year 1-2 (with effort)", joja: "Year 1 (with gold)" },
  { dimension: "Total gold cost", cc: "0g (items from farm/foraging)", joja: "~135,000g" },
  { dimension: "Rewards", cc: "Unique infrastructure + story cutscenes", joja: "Faster infrastructure access" },
  { dimension: "Bus Repair", cc: "Free (Vault Bundle)", joja: "40,000g" },
  { dimension: "Minecart Repair", cc: "Free (Boiler Room Bundle)", joja: "15,000g" },
  { dimension: "Greenhouse", cc: "Free (Pantry Bundle)", joja: "35,000g" },
  { dimension: "Bridge Repair", cc: "Free (Crafts Room Bundle)", joja: "25,000g" },
  { dimension: "Glittering Boulder", cc: "Free (Fish Tank Bundle)", joja: "15,000g" },
] as const;

const BUNDLE_ROWS = [
  {
    bundle: "Vault Bundle",
    room: "Vault",
    difficulty: "Hard",
    note: "Requires 42,500g in direct gold payments across four tiers. Pure cash drain — no farming shortcut.",
  },
  {
    bundle: "Bulletin Board Bundle",
    room: "Bulletin Board",
    difficulty: "Hard",
    note: "Broad spread of items across categories. Some items (Maple Syrup, Cloth, Frozen Geode) require specific production chains.",
  },
  {
    bundle: "Artisan Bundle",
    room: "Pantry",
    difficulty: "Medium-Hard",
    note: "Requires 12 different artisan goods including Truffle Oil and Wine. Needs Pig, Keg, and Oil Maker infrastructure.",
  },
  {
    bundle: "Fish Tank Bundle",
    room: "Fish Tank",
    difficulty: "Medium",
    note: "Pufferfish (sunny Summer ocean) and Ghostfish (mines) are the trickiest catches. Requires active fishing dedication.",
  },
  {
    bundle: "Boiler Room Bundle",
    room: "Boiler Room",
    difficulty: "Medium",
    note: "Gold Bar, Iron Bar, Quartz — straightforward for mine runners but slow for players avoiding the mines.",
  },
  {
    bundle: "Pantry Bundle",
    room: "Pantry",
    difficulty: "Easy-Medium",
    note: "Mostly common crops. The Artisan Bundle within Pantry is the hard sub-bundle. Basic crop bundles are Year 1 completable.",
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

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Table of Contents</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#overview">
          1) Route overview and cost comparison
        </a>
        <a className={TOC_LINK} href="#economic-analysis">
          2) Full economic analysis
        </a>
        <a className={TOC_LINK} href="#timeline">
          3) Timeline comparison
        </a>
        <a className={TOC_LINK} href="#greenhouse-value">
          4) Greenhouse early unlock value
        </a>
        <a className={TOC_LINK} href="#bundle-difficulty">
          5) Bundle difficulty breakdown
        </a>
        <a className={TOC_LINK} href="#when-joja">
          6) When to choose Joja
        </a>
        <a className={TOC_LINK} href="#when-cc">
          7) When to choose Community Center
        </a>
        <a className={TOC_LINK} href="#calculator">
          8) Use the calculator
        </a>
        <a className={TOC_LINK} href="#faq">
          9) FAQ
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
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-7 text-[#5c4033]/95">{children}</div>
    </aside>
  );
}

export default function CommunitycenterVsJojaPage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-community-center-vs-joja", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    publisher: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    image: [`${url}/opengraph-image`],
    about: [
      "community center vs joja",
      "stardew valley joja membership cost",
      "community center bundles guide",
      "stardew valley greenhouse unlock",
      "stardew valley economic comparison",
    ],
  };

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
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_ITEMS.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Community Center vs Joja" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide • Game Economy • Route Decision
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              The moment you first enter the ruined Community Center, Stardew Valley presents its most
              consequential fork in the road. Restore the building through bundles and earn the gratitude
              of the Junimos, or buy a Joja Membership, tear the place down, and get your infrastructure
              upgrades the corporate way. The choice shapes your entire economic trajectory — which
              facilities you unlock, when you unlock them, and how much gold remains in your pocket
              afterward. This guide breaks down both routes with hard numbers so you can decide with
              your eyes open.
            </p>
            <p className={P}>
              We cover the full cost comparison, timeline differences, Greenhouse early-unlock math,
              bundle difficulty rankings, and clear recommendations for different play styles. Use the{" "}
              <Link className={LINK} href="/calculator">Profit Calculator</Link> alongside this guide
              to model how each route affects your crop and artisan income.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published: <time dateTime={publishedTime}>2026-03-29</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-29</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">Reading time: 15-20 min</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>
            </div>
          </header>

          <Toc />

          {/* Section 1: Overview */}
          <section id="overview" className={CARD}>
            <h2 className={H2}>1) Route Overview and Cost Comparison</h2>
            <p className={P}>
              At its core, the Community Center vs Joja decision is a question of gold versus time.
              The Community Center asks you to collect items — crops, fish, minerals, artisan goods —
              spread across six bundle rooms. The Joja route asks you to pay gold directly for each
              infrastructure upgrade. Neither path locks you out of core gameplay, but the financial
              difference is enormous.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[700px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Dimension</th>
                    <th className="px-3 py-2">Community Center</th>
                    <th className="px-3 py-2">Joja Membership</th>
                  </tr>
                </thead>
                <tbody>
                  {OVERVIEW_ROWS.map((row, index) => (
                    <tr
                      key={row.dimension}
                      className={`${
                        index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
                      } rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.dimension}</td>
                      <td className="px-3 py-3 text-green-800 font-medium">{row.cc}</td>
                      <td className="px-3 py-3 text-[#7c4d2e]">{row.joja}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout title="Bottom line">
              Community Center saves approximately 130,000g in infrastructure. Joja costs 135,000g
              (including the 5,000g membership) to unlock the same facilities. The only thing Joja
              buys you is speed — and only if you have the gold when you need it.
            </Callout>
          </section>

          {/* Section 2: Economic Analysis */}
          <section id="economic-analysis" className={CARD}>
            <h2 className={H2}>2) Full Economic Analysis</h2>
            <p className={P}>
              The 130,000g gap is not just a lump sum — it compounds. Every gold piece saved on
              infrastructure is gold available for seeds, kegs, barns, coops, and processing chains.
              A player who completes the Community Center and invests the saved 130,000g into Ancient
              Fruit wine production can generate a substantial ongoing return compared to a Joja
              player who spent that gold on upgrades.
            </p>

            <h3 className={`${H3} mt-6`}>Community Center economic path</h3>
            <p className={P}>
              The Community Center route has no direct gold cost for infrastructure. The Greenhouse,
              Bus, Minecart, Bridge, and Glittering Boulder removal are all unlocked through bundle
              completion. The only meaningful gold drain is the Vault Bundle, which requires 42,500g
              in cash payments. Everything else is covered by items you produce anyway: crops, fish,
              minerals, and artisan goods.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Total direct gold cost: ~42,500g (Vault Bundle only)</li>
              <li className={LI}>Infrastructure unlocked at zero additional gold</li>
              <li className={LI}>Greenhouse, Bus, Minecart all free once bundles complete</li>
              <li className={LI}>Remaining capital stays available for farm investment</li>
            </ul>

            <h3 className={`${H3} mt-6`}>Joja economic path</h3>
            <p className={P}>
              The Joja route front-loads gold expenditure. After the 5,000g membership, you pay
              for each upgrade individually. Most players unlock Greenhouse (35,000g) and Bus (40,000g)
              first for Skull Cavern access and Calico Desert. This is a minimum 80,000g commitment
              before you start recovering value from those facilities.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Joja Membership: 5,000g (permanent, non-refundable)</li>
              <li className={LI}>Bus Repair: 40,000g</li>
              <li className={LI}>Minecart Repair: 15,000g</li>
              <li className={LI}>Greenhouse: 35,000g</li>
              <li className={LI}>Bridge Repair: 25,000g</li>
              <li className={LI}>Glittering Boulder Removal: 15,000g</li>
              <li className={LI}>Total to complete all upgrades: ~135,000g</li>
            </ul>

            <Callout title="Key insight">
              Vault Bundle gold (42,500g) is unavoidable on the Community Center route, but every
              other gold expenditure on the Joja route (92,500g) is eliminated. Net savings from
              choosing Community Center over Joja: approximately 92,500g after accounting for the
              Vault Bundle cost.
            </Callout>
          </section>

          {/* Section 3: Timeline */}
          <section id="timeline" className={CARD}>
            <h2 className={H2}>3) Timeline Comparison</h2>
            <p className={P}>
              Speed is Joja&apos;s main selling point. If you can accumulate gold quickly in Year 1,
              you can unlock Greenhouse and other facilities months before a typical Community Center
              run finishes. Whether that speed advantage is worth the gold cost depends entirely on
              how you plan to use those facilities.
            </p>

            <h3 className={`${H3} mt-6`}>Community Center timeline</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}><strong>Year 1 Spring–Summer:</strong> Complete Spring Crops Bundle, Foraging Bundle, early Fish Tank bundles</li>
              <li className={LI}><strong>Year 1 Fall:</strong> Complete Fall Crops Bundle, begin Vault Bundle gold saving</li>
              <li className={LI}><strong>Year 1 Winter:</strong> Complete Construction Bundle, Winter Foraging, push Vault Bundle</li>
              <li className={LI}><strong>Year 2 Spring:</strong> Typical full completion window for dedicated players</li>
              <li className={LI}><strong>Year 2 Summer–Fall:</strong> Completion window for casual/mixed-focus players</li>
            </ul>

            <h3 className={`${H3} mt-6`}>Joja timeline</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}><strong>Year 1 Spring:</strong> Buy Joja Membership (5,000g) — route locked in</li>
              <li className={LI}><strong>Year 1 Summer:</strong> Unlock Minecart (15,000g) if cash allows</li>
              <li className={LI}><strong>Year 1 Fall:</strong> Unlock Greenhouse (35,000g) with strong crop income</li>
              <li className={LI}><strong>Year 1 Fall–Winter:</strong> Unlock Bus (40,000g) for Skull Cavern access</li>
              <li className={LI}><strong>Year 2:</strong> Complete Bridge and Glittering Boulder at leisure</li>
            </ul>

            <Callout title="Timeline verdict">
              Joja can unlock the Greenhouse roughly half a year earlier than a typical
              Community Center run. That early access has real profit value — but only if you
              plant the right crops immediately. If you unlock the Greenhouse in Year 1 Fall and
              immediately plant Ancient Fruit starters, you gain roughly one full growing cycle
              advantage. Whether that advantage outweighs the 35,000g cost is the central
              calculation of this comparison.
            </Callout>
          </section>

          {/* Section 4: Greenhouse Value */}
          <section id="greenhouse-value" className={CARD}>
            <h2 className={H2}>4) Greenhouse Early Unlock Value</h2>
            <p className={P}>
              The Greenhouse is the most economically significant upgrade in the game. Once unlocked,
              it allows year-round crop growth regardless of season. The most profitable use is
              Ancient Fruit wine: Ancient Fruit takes 28 days to mature, then produces every 7 days.
              Each fruit sells for 550g base, and when processed into wine via Keg it sells for
              1,650g base (2,310g with Artisan profession).
            </p>

            <h3 className={`${H3} mt-6`}>Half-season Greenhouse advantage calculation</h3>
            <p className={P}>
              Assume a Greenhouse with 18 Ancient Fruit plants (conservative fill):
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Each plant produces ~1 fruit per 7 days after initial maturity</li>
              <li className={LI}>18 plants × 1 fruit × 1,650g wine = 29,700g per 7-day harvest cycle</li>
              <li className={LI}>One full season (28 days) = roughly 4 harvest cycles = ~118,800g</li>
              <li className={LI}>Half a season early = approximately 59,400g additional income</li>
            </ul>
            <p className={P}>
              At full Greenhouse capacity (up to 116 tiles, though realistically 60–80 plants with
              pathing), the advantage scales proportionally. A Greenhouse unlocked one full season
              early can generate 300,000g+ in additional Ancient Fruit wine income by end of Year 2.
            </p>

            <Callout title="The Greenhouse math verdict">
              If you unlock the Greenhouse in Year 1 Fall (Joja) versus Year 2 Spring (Community Center),
              and immediately plant Ancient Fruit sourced from the Traveling Merchant or seeds, the
              Joja Greenhouse upgrade (35,000g) pays for itself in roughly 9 in-game days of full
              Greenhouse harvests. The complication: most players cannot fill the Greenhouse with
              Ancient Fruit immediately. The realistic break-even is closer to mid-Year 2, at which
              point a thorough Community Center player has already completed their bundles for free.
            </Callout>

            <p className={P}>
              Use the{" "}
              <Link className={LINK} href="/calculator">Profit Calculator</Link> to model your specific
              Greenhouse setup. Also see our{" "}
              <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">Greenhouse Mastery Guide</Link>{" "}
              and{" "}
              <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">Best Greenhouse Crops</Link>{" "}
              for crop selection strategy.
            </p>
          </section>

          {/* Section 5: Bundle Difficulty */}
          <section id="bundle-difficulty" className={CARD}>
            <h2 className={H2}>5) Bundle Difficulty Breakdown</h2>
            <p className={P}>
              Not all bundles are created equal. Some complete naturally as you farm through the
              seasons; others require dedicated planning, specific equipment, or large gold reserves.
              Understanding which bundles block your completion helps you plan the Community Center
              route efficiently.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[700px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Bundle</th>
                    <th className="px-3 py-2">Room</th>
                    <th className="px-3 py-2">Difficulty</th>
                    <th className="px-3 py-2">Key challenge</th>
                  </tr>
                </thead>
                <tbody>
                  {BUNDLE_ROWS.map((row, index) => (
                    <tr
                      key={row.bundle}
                      className={`${
                        index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
                      } rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.bundle}</td>
                      <td className="px-3 py-3">{row.room}</td>
                      <td className="px-3 py-3 font-medium">{row.difficulty}</td>
                      <td className="px-3 py-3">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Vault Bundle strategy</h3>
            <p className={P}>
              The Vault Bundle is the most consistent bottleneck for Community Center completion.
              It requires four payments: 2,000g, 5,000g, 10,000g, and 25,000g. Plan to complete
              the smaller tiers in Year 1 Summer and Fall, then save the 25,000g final tier for
              Year 1 Winter or early Year 2. Treating the Vault Bundle as a savings goal rather
              than an afterthought prevents Year 2 delays.
            </p>
          </section>

          {/* Section 6: When Joja */}
          <section id="when-joja" className={CARD}>
            <h2 className={H2}>6) When to Choose Joja</h2>
            <p className={P}>
              The Joja route is not the "wrong" choice — it is the right choice for specific
              situations. Here are the cases where buying the Joja Membership makes genuine sense.
            </p>

            <h3 className={`${H3} mt-6`}>Speedrunning specific categories</h3>
            <p className={P}>
              Speedrun categories targeting minimum in-game days or specific Year 1 milestones
              benefit from Joja&apos;s gold-based unlock system. If you have the income to buy
              Greenhouse access in Year 1 Summer and the run strategy requires it, Joja is the
              correct mechanical choice. Bundle completion routes are slower by design.
            </p>

            <h3 className={`${H3} mt-6`}>New players who find bundle-hunting overwhelming</h3>
            <p className={P}>
              First-time players who do not yet know which seasons certain fish or crops appear in
              may find the Community Center stressful. The Joja route removes the checklist pressure
              and lets new players focus on learning core systems. The gold cost is less meaningful
              when you are not yet optimizing income.
            </p>

            <h3 className={`${H3} mt-6`}>Completing the Joja Co. achievement</h3>
            <p className={P}>
              Some players want to experience both routes for completionist reasons or to unlock
              achievements tied to the Joja path. A second save file specifically for the Joja
              route is the cleanest way to achieve this without sacrificing your main playthrough.
            </p>

            <h3 className={`${H3} mt-6`}>Co-op runs with gold surplus</h3>
            <p className={P}>
              In multiplayer runs where multiple players farm simultaneously, income scales faster
              than bundle completion difficulty. A co-op group that generates 200,000g+ in Year 1
              may find the Joja route convenient simply because the gold cost is a small fraction
              of total income, while bundle hunting requires coordinating item collection across players.
            </p>
          </section>

          {/* Section 7: When Community Center */}
          <section id="when-cc" className={CARD}>
            <h2 className={H2}>7) When to Choose Community Center</h2>
            <p className={P}>
              For the majority of players in the majority of playthroughs, the Community Center
              is the economically and experientially superior choice. Here is why.
            </p>

            <h3 className={`${H3} mt-6`}>Long-term profit maximization</h3>
            <p className={P}>
              Saving 92,500g net (compared to full Joja completion after accounting for the Vault
              Bundle) and reinvesting it into farm infrastructure generates compounding returns.
              That capital funds additional Kegs, Preserves Jars, animal buildings, or crop
              expansion that keeps producing every season. Joja spends that capital on one-time
              infrastructure purchases.
            </p>

            <h3 className={`${H3} mt-6`}>Story and world experience</h3>
            <p className={P}>
              The Community Center restoration triggers unique cutscenes, Junimo story beats, and
              changes the physical appearance of the valley. Players who value narrative and world
              building get substantially more from the Community Center route. The Joja route
              replaces the restored Community Center with a Joja Warehouse and offers no story content.
            </p>

            <h3 className={`${H3} mt-6`}>Natural farming integration</h3>
            <p className={P}>
              Most Community Center bundles are satisfied by items you produce anyway. Spring crops,
              foraged goods, fish, and minerals all appear in your normal gameplay loop. Treating
              bundle progress as a secondary objective alongside regular farming means many players
              finish the Community Center without specifically grinding for it — the gold savings
              arrive almost passively.
            </p>

            <h3 className={`${H3} mt-6`}>Experienced players who can plan around bundle requirements</h3>
            <p className={P}>
              Players who know Stardew Valley&apos;s seasonal items can plan bundle completion from
              Day 1. Targeting specific fish on rain days, saving artisan goods, and front-loading
              Vault Bundle saving makes Community Center completion achievable by Year 1 Winter
              or Year 2 Spring with no wasted effort.
            </p>
          </section>

          {/* Section 8: Calculator CTA */}
          <section id="calculator" className={CARD}>
            <h2 className={H2}>8) Calculate Your Greenhouse Unlock Value</h2>
            <p className={P}>
              The single most useful thing you can do before committing to either route is model
              your Greenhouse income. The value of unlocking the Greenhouse early depends entirely
              on what you plant, how quickly you source plants or seeds, and how many Kegs you
              can run. A Greenhouse half-empty with slow crops generates far less value than the
              theoretical maximum.
            </p>
            <p className={P}>
              Use the Stardew Profit Calculator to compare Ancient Fruit wine income against your
              current crop plan. Enter your Greenhouse tile count, crop choice, and processing
              method to see your projected daily and seasonal income. Then factor in whether the
              35,000g Joja Greenhouse cost or the bundle time investment gets you there faster
              under your specific conditions.
            </p>
            <p className={P}>
              Also see our detailed crop guides for Greenhouse-specific recommendations:
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">Greenhouse Mastery Guide</Link>
                {" — "} full setup, layout, and crop rotation strategy
              </li>
              <li className={LI}>
                <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">Best Greenhouse Crops</Link>
                {" — "} ranked crop list with profit-per-day analysis
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>
            </div>
          </section>

          {/* Section 9: FAQ */}
          <section id="faq" className={CARD}>
            <h2 className={H2}>9) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-white/40 px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Whichever route you choose, the Greenhouse is the most important long-term asset in
              Stardew Valley. Get it unlocked as early as your route allows and fill it with
              high-value crops immediately.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Model your Greenhouse income with the{" "}
                <Link className={LINK} href="/calculator">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                Plan your Greenhouse crop selection with the{" "}
                <Link className={LINK} href="/blog/best-greenhouse-crops-stardew-valley">Best Greenhouse Crops</Link> guide.
              </li>
              <li className={LI}>
                Master Greenhouse layout and seasonal rotation in the{" "}
                <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">Greenhouse Mastery Guide</Link>.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-community-center-vs-joja" />
      </main>

      <SiteFooter />
    </div>
  );
}
