import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-12T00:00:00Z";
const modifiedTime = "2026-03-12T00:00:00Z";
const fromPath = "/blog/stardew-valley-fishing-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Complete Fishing Profit Guide in Stardew Valley (2026): Best Fish, Locations, Gear, and Skill Path";
const DESCRIPTION =
  "Complete Stardew Valley fishing profit guide with seasonal fish rankings, location routes, Fisher vs Trapper decisions, crab pot ROI, gear upgrades, weather analysis, and practical daily plans.";

const FAQ_ITEMS = [
  {
    question: "What is the best fish for pure repeatable profit in Stardew Valley?",
    answer:
      "For repeatable active fishing profit, Catfish (rainy Spring/Fall rivers), Super Cucumber (Summer/Fall ocean nights), and Sturgeon (Mountain Lake) are top targets. Legendary fish are worth more per catch but only once per save.",
  },
  {
    question: "Should I choose Fisher or Trapper at Fishing Level 5?",
    answer:
      "Choose Fisher for most players because the 25% value bonus applies immediately to active fishing and scales into Angler at level 10. Choose Trapper only if you plan to build a large crab pot network and play a passive collection routine.",
  },
  {
    question: "Is crab pot profit better than rod fishing profit?",
    answer:
      "Rod fishing usually wins for total daily income if you actively fish for several hours. Crab pots can win on convenience and profit per minute once scaled with Mariner, but they are typically a passive supplement, not a full replacement.",
  },
  {
    question: "When should I buy Fiberglass Rod and Iridium Rod?",
    answer:
      "Buy Fiberglass Rod immediately at Fishing level 2 for bait access, then buy Iridium Rod around level 6 once your cash flow is stable. This sequence gives the largest step-up in bites per day and catch consistency.",
  },
  {
    question: "How much money can fishing realistically make per day?",
    answer:
      "Early game fishing commonly makes 1,000-2,000g/day, mid game 2,500-5,000g/day with better skill and routes, and late game active sessions can exceed that with strong weather windows and high-value fish targets.",
  },
  {
    question: "Does weather really matter for fishing profit?",
    answer:
      "Yes. Rain unlocks valuable fish like Catfish and Eel while also improving practical catch flow. Sunny windows are critical for fish like Pufferfish. Weather is one of the largest route multipliers in this guide.",
  },
  {
    question: "What tackle is best for profit-focused fishing?",
    answer:
      "Trap Bobber is the most reliable profit tackle because it raises catch consistency on hard fish. Cork Bobber is great while learning. Treasure Hunter can outperform in specific chest-heavy sessions but is less consistent for baseline income.",
  },
  {
    question: "How do I combine fishing with seasonal farming efficiently?",
    answer:
      "Use fishing to secure liquid cash early, then shift to a hybrid schedule: farm setup in the morning and high-value fishing windows in the afternoon/evening. Compare both paths with the calculator and seasonal crop guides before each planting cycle.",
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

const SPRING_ROWS = [
  {
    rank: "1",
    fish: "Catfish",
    location: "River / Secret Woods",
    window: "Rain only, 6:00-24:00",
    base: "200g",
    why: "Highest practical repeatable value in Spring once you can handle the difficulty.",
  },
  {
    rank: "2",
    fish: "Sturgeon",
    location: "Mountain Lake",
    window: "6:00-19:00, any weather",
    base: "200g",
    why: "Reliable daytime target when it is not raining and your route is near the mines.",
  },
  {
    rank: "3",
    fish: "Eel",
    location: "Beach",
    window: "Rain only, 16:00-2:00",
    base: "85g",
    why: "Lower base value than Catfish but useful in late rainy sessions with easy ocean access.",
  },
  {
    rank: "4",
    fish: "Largemouth Bass",
    location: "Mountain Lake",
    window: "6:00-19:00, any weather",
    base: "100g",
    why: "Stable fallback fish that keeps your catch streak and XP flowing.",
  },
  {
    rank: "5",
    fish: "Bullhead",
    location: "Mountain Lake",
    window: "Anytime, any weather",
    base: "75g",
    why: "Easy consistency fish for low-skill days when you still want cash + XP.",
  },
] as const;

const SUMMER_ROWS = [
  {
    rank: "1",
    fish: "Super Cucumber",
    location: "Beach",
    window: "18:00-2:00",
    base: "250g",
    why: "Top repeatable night fish in Summer with very strong value per successful catch.",
  },
  {
    rank: "2",
    fish: "Pufferfish",
    location: "Beach",
    window: "Sunny only, 12:00-16:00",
    base: "200g",
    why: "Great burst profit window at midday if you can fish precisely.",
  },
  {
    rank: "3",
    fish: "Sturgeon",
    location: "Mountain Lake",
    window: "6:00-19:00, any weather",
    base: "200g",
    why: "Safer all-day route than ocean precision windows when you need consistency.",
  },
  {
    rank: "4",
    fish: "Octopus",
    location: "Beach",
    window: "6:00-13:00",
    base: "150g",
    why: "High value but difficult; better as a mastery target than a beginner staple.",
  },
  {
    rank: "5",
    fish: "Dorado",
    location: "River (Forest)",
    window: "6:00-19:00",
    base: "100g",
    why: "Good mid-difficulty river option when you do not want ocean routing.",
  },
] as const;

const FALL_ROWS = [
  {
    rank: "1",
    fish: "Super Cucumber",
    location: "Beach",
    window: "18:00-2:00",
    base: "250g",
    why: "Remains elite in Fall and anchors night fishing profit routes.",
  },
  {
    rank: "2",
    fish: "Catfish",
    location: "River / Secret Woods",
    window: "Rain only, 6:00-24:00",
    base: "200g",
    why: "Rainy Fall days still deliver strong river profit spikes.",
  },
  {
    rank: "3",
    fish: "Tiger Trout",
    location: "River",
    window: "6:00-19:00, any weather",
    base: "150g",
    why: "High daytime value and good leveling fish when weather is clear.",
  },
  {
    rank: "4",
    fish: "Walleye",
    location: "River / Mountain Lake",
    window: "Rain, 12:00-2:00",
    base: "105g",
    why: "Medium value but widely available in rainy afternoon/night windows.",
  },
  {
    rank: "5",
    fish: "Salmon",
    location: "River",
    window: "6:00-19:00, any weather",
    base: "75g",
    why: "Reliable filler fish that keeps your route productive between high-value bites.",
  },
] as const;

const WINTER_ROWS = [
  {
    rank: "1",
    fish: "Sturgeon",
    location: "Mountain Lake",
    window: "6:00-19:00, any weather",
    base: "200g",
    why: "The best repeatable winter daytime money fish for most players.",
  },
  {
    rank: "2",
    fish: "Midnight Carp",
    location: "Mountain Lake / Forest Pond",
    window: "22:00-2:00",
    base: "150g",
    why: "Great late-night value if you are running a long Winter session.",
  },
  {
    rank: "3",
    fish: "Lingcod",
    location: "River / Mountain Lake",
    window: "Anytime, any weather",
    base: "120g",
    why: "Easy all-day target for steady Winter income.",
  },
  {
    rank: "4",
    fish: "Tuna",
    location: "Beach",
    window: "6:00-19:00",
    base: "100g",
    why: "Simple ocean backup option for daytime Winter routing.",
  },
  {
    rank: "5",
    fish: "Squid",
    location: "Beach",
    window: "18:00-2:00",
    base: "80g",
    why: "Lower value but common enough to keep nighttime ocean sessions efficient.",
  },
] as const;

const LOCATION_ROWS = [
  {
    place: "Beach / Ocean",
    fish: "Pufferfish, Super Cucumber, Octopus, Tuna",
    best: "Summer midday + Summer/Fall nights",
    difficulty: "Medium to Hard",
    note: "Highest seasonal burst value, especially when you can route noon and night windows in one day.",
  },
  {
    place: "River (Town + Forest)",
    fish: "Catfish, Tiger Trout, Walleye, Salmon",
    best: "Spring/Fall rain and Fall daytime",
    difficulty: "Easy to Hard",
    note: "Most practical early-game money location because it is close to town and unlocks Catfish spikes.",
  },
  {
    place: "Mountain Lake",
    fish: "Sturgeon, Largemouth Bass, Bullhead, Midnight Carp",
    best: "Spring/Summer/Winter daytime",
    difficulty: "Easy to Hard",
    note: "Best consistency map. Great when you want steady XP + cash with fewer route variables.",
  },
  {
    place: "Mines (Floor 60/100)",
    fish: "Ice Pip, Lava Eel, Stonefish, Ghostfish",
    best: "Any season once unlocked",
    difficulty: "Hard",
    note: "Lava Eel and Ice Pip are all-season premium targets but require late progression and skill.",
  },
  {
    place: "Secret Woods",
    fish: "Catfish (rain), Woodskip",
    best: "Rainy Spring/Fall",
    difficulty: "Medium",
    note: "Excellent quiet Catfish route plus daily hardwood value in the same trip.",
  },
] as const;

const PATH_ROWS = [
  {
    level: "1-2",
    goals: "Stabilize catch rate and unlock bait access fast",
    focus: "Easy fish, short sessions, high catch count",
    decision: "Buy Fiberglass Rod at level 2 immediately",
  },
  {
    level: "3-4",
    goals: "Expand consistency and start route planning",
    focus: "Season/time windows, fishing spots by weather",
    decision: "Treat crab pots as optional support, not core income",
  },
  {
    level: "5",
    goals: "Lock your profession strategy",
    focus: "Profit multiplier vs passive setup",
    decision: "Choose Fisher unless you are committed to large crab pot scaling",
  },
  {
    level: "6-9",
    goals: "Catch hard value fish regularly",
    focus: "Iridium Rod, Trap Bobber, weather windows",
    decision: "Route around Catfish/Sturgeon/Pufferfish/Super Cucumber",
  },
  {
    level: "10",
    goals: "Finalize endgame fishing role",
    focus: "Fisher path: Angler; Trapper path: Mariner/Luremaster",
    decision: "Angler for active income, Mariner for passive crab pot network",
  },
] as const;

const CRAB_POT_ROWS = [
  {
    setup: "20 pots, no Mariner",
    dailyRevenue: "~1,000g",
    dailyCosts: "~100g bait",
    dailyNet: "~900g",
    effort: "8-10 minutes",
    notes: "Good support income but weaker than a focused rod session.",
  },
  {
    setup: "20 pots, Mariner",
    dailyRevenue: "~1,100-1,300g",
    dailyCosts: "0g",
    dailyNet: "~1,100-1,300g",
    effort: "8-10 minutes",
    notes: "Strong convenience play. Perfect for players minimizing minigame time.",
  },
  {
    setup: "50 pots, Mariner",
    dailyRevenue: "~2,500-3,200g",
    dailyCosts: "0g",
    dailyNet: "~2,500-3,200g",
    effort: "12-18 minutes",
    notes: "Excellent passive floor, but still below high-skill active fishing ceilings.",
  },
  {
    setup: "Rod fishing session (4-6h active)",
    dailyRevenue: "~2,500-6,000g",
    dailyCosts: "Bait + tackle wear",
    dailyNet: "~2,300-5,700g",
    effort: "4-6 in-game hours",
    notes: "Best total daily earnings if your mechanical consistency is strong.",
  },
] as const;

const EQUIPMENT_ROWS = [
  {
    stage: "Starter (Day 2-Level 1)",
    loadout: "Bamboo Pole or Training Rod",
    priority: "Learn bar control and build confidence",
    profitImpact: "Low to medium, but critical for smooth level-up speed",
  },
  {
    stage: "Early Profit (Level 2-5)",
    loadout: "Fiberglass Rod + regular Bait",
    priority: "Increase bite frequency and total catches",
    profitImpact: "Huge jump in fish/hour and cash flow reliability",
  },
  {
    stage: "Mid Game Scaling (Level 6+)",
    loadout: "Iridium Rod + Trap Bobber + Bait",
    priority: "Catch hard fish more consistently",
    profitImpact: "Largest practical gain for Catfish, Sturgeon, Pufferfish routes",
  },
  {
    stage: "Alternative Control",
    loadout: "Iridium Rod + Cork Bobber",
    priority: "Bigger bar for players still stabilizing mechanics",
    profitImpact: "Slightly less peak value than Trap Bobber, but safer consistency",
  },
  {
    stage: "Specialized Sessions",
    loadout: "Iridium Rod + Treasure Hunter / Wild Bait",
    priority: "Treasure or burst windows",
    profitImpact: "Can spike value in selected sessions, less stable baseline profit",
  },
] as const;

const WEATHER_ROWS = [
  {
    weather: "Rain",
    opportunities: "Catfish, Eel, Walleye windows + smoother catch rhythm",
    action: "Prioritize river/ocean rain-only fish and extend evening sessions",
  },
  {
    weather: "Sunny / Clear",
    opportunities: "Pufferfish noon window, stable mountain lake routes",
    action: "Use fixed timing blocks and rotate to ocean at 12:00, then night fish later",
  },
  {
    weather: "Stormy Summer",
    opportunities: "Rain fish + high-value Summer ocean chains",
    action: "Treat storm days as premium profit days and minimize non-essential farm chores",
  },
  {
    weather: "Winter neutral",
    opportunities: "Fewer premium fish but predictable Lingcod/Sturgeon routing",
    action: "Blend fishing with mining/greenhouse tasks instead of all-in fishing",
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
        <a className={TOC_LINK} href="#how-fishing-makes-money">
          1) Why fishing prints early liquidity
        </a>
        <a className={TOC_LINK} href="#season-rankings">
          2) Most profitable fish by season
        </a>
        <a className={TOC_LINK} href="#location-recommendations">
          3) Best fishing locations (beach, river, lake, mines, woods)
        </a>
        <a className={TOC_LINK} href="#skill-route">
          4) Fishing skill route + Fisher vs Trapper
        </a>
        <a className={TOC_LINK} href="#crab-pot-vs-rod">
          5) Crab pot vs rod profit comparison
        </a>
        <a className={TOC_LINK} href="#gear-recommendations">
          6) Rod, bait, and tackle recommendations
        </a>
        <a className={TOC_LINK} href="#weather-analysis">
          7) Weather impact analysis
        </a>
        <a className={TOC_LINK} href="#execution-playbook">
          8) Practical execution playbook
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

function RankingTable({
  rows,
}: {
  rows: ReadonlyArray<{
    rank: string;
    fish: string;
    location: string;
    window: string;
    base: string;
    why: string;
  }>;
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Rank</th>
            <th className="px-3 py-2">Fish</th>
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Best window</th>
            <th className="px-3 py-2">Base value</th>
            <th className="px-3 py-2">Why it prints gold</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row.rank}-${row.fish}`}
              className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.rank}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.fish}</td>
              <td className="px-3 py-3">{row.location}</td>
              <td className="px-3 py-3">{row.window}</td>
              <td className="px-3 py-3">{row.base}</td>
              <td className="px-3 py-3">{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StardewValleyFishingProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-fishing-profit-guide", 3);

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
      "stardew valley fishing profit",
      "best fish by season",
      "fisher vs trapper",
      "crab pot profit",
      "fishing weather strategy",
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
            { name: "Complete Fishing Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide • Fishing Economy • Seasonal Routing
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              Fishing is the fastest way to turn time into liquid gold when your farm is still fragile.
              You do not need expensive seeds, sprinkler infrastructure, or multi-day harvest cycles to
              print cash. You need route discipline, weather awareness, and smart progression choices.
              This guide is built to answer one practical question: how do you make fishing produce
              reliable profit from Spring Year 1 through late-game hybrid play, without wasting days on
              low-value water?
            </p>
            <p className={P}>
              You will get ranked seasonal targets, concrete location plans for beach, river, lake,
              mines, and Secret Woods, and a real comparison between active rod income and passive crab
              pot income. You will also see where gear upgrades matter most, how weather changes target
              priority, and how to connect fishing with your broader money system. Keep
              the <Link className={LINK} href="/calculator"> calculator</Link> open while reading so
              you can compare fishing cash flow against crops in your current season.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published: <time dateTime={publishedTime}>2026-03-12</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-12</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">Reading time: 24-30 min</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/best-crops-every-season">
                Seasonal Crop Guide (Compare)
              </Link>
            </div>
          </header>

          <Toc />

          <section id="how-fishing-makes-money" className={CARD}>
            <h2 className={H2}>1) Why fishing prints early liquidity when farming cannot</h2>
            <p className={P}>
              Most players evaluate profit by looking at final seasonal totals. That is useful, but it
              hides the biggest Year 1 pressure: liquidity. In early Spring, you do not lose because
              your long-term model is wrong. You lose because you run out of gold between seed windows,
              backpack upgrades, tool upgrades, and emergency spending. Fishing solves that exact
              problem. You catch, you sell, and your money is immediately available for the next
              decision. No planting delay, no growth timer, no harvest anxiety.
            </p>
            <p className={P}>
              The second reason fishing matters is opportunity cost. If your farm is still hand-watered,
              the number of crops you can run is capped by stamina and time. But the number of fish you
              can catch scales with practice and rod upgrades, not field size. That means your income
              can increase before your infrastructure does. In practical terms, fishing is often your
              bridge from {"\""}survival mode{"\""} to {"\""}system mode{"\""} where sprinklers, tool upgrades, and better
              route planning take over.
            </p>
            <p className={P}>
              The third reason is risk control. Farming profits are front-loaded by purchases and exposed
              to timing mistakes. Fishing profits are mostly front-loaded by attention. If you make a
              mistake in fishing, you lose a few in-game hours. If you make a mistake with late crops,
              you can lose an entire seasonal investment. For players still learning calendars, fishing
              is the safer cash engine.
            </p>
            <p className={P}>
              That does not mean fishing replaces farming forever. It means fishing gives you the cash
              and stability to choose better farming decisions. Use this guide together with
              seasonal planning pages for <Link className={LINK} href="/blog/stardew-valley-spring-profit-guide-2026">Spring</Link>,{" "}
              <Link className={LINK} href="/blog/best-summer-crops-quick-answer">Summer</Link>,{" "}
              <Link className={LINK} href="/blog/best-fall-crops-quick-answer">Fall</Link>, and{" "}
              <Link className={LINK} href="/blog/winter-seeds-profit-guide">Winter</Link> so fishing
              and crops reinforce each other instead of competing for attention.
            </p>
            <Callout title="Operating principle">
              Treat fishing as your cashflow engine and farming as your scaling engine. If cash is tight,
              fish more. If systems are ready, invest that cash into production capacity.
            </Callout>
          </section>

          <section id="season-rankings" className={CARD}>
            <h2 className={H2}>2) Most profitable fish by season (Spring, Summer, Fall, Winter)</h2>
            <p className={P}>
              The rankings below are practical profit rankings for repeatable fishing, not one-time
              novelty catches. Legendary fish are important spikes, but they are single-catch per save.
              Your real economy is built on what you can catch repeatedly with good routing and
              consistency. Values are base prices; actual sale value increases with quality and
              profession bonuses.
            </p>

            <h3 className={`${H3} mt-6`}>Spring ranking</h3>
            <RankingTable rows={SPRING_ROWS} />
            <p className={P}>
              Spring is defined by one thing: rain. Rainy days turn rivers into Catfish territory, and
              Catfish is one of the first truly meaningful money fish. On clear days, Mountain Lake keeps
              income stable through Sturgeon and easier fallback fish. Your practical objective is to
              alternate based on weather, not force one location every day. If you push hard in Spring,
              fishing alone can fund key upgrades before your crop engine is ready.
            </p>

            <h3 className={`${H3} mt-8`}>Summer ranking</h3>
            <RankingTable rows={SUMMER_ROWS} />
            <p className={P}>
              Summer is where ocean routing becomes explosive. Noon Pufferfish windows and night Super
              Cucumber windows create high-value time blocks that can outperform many mid-game tasks.
              The trap in Summer is trying to fish everything. Focus on windows: midday at ocean for
              Pufferfish, then either stay ocean through evening for Super Cucumber or rotate to Lake if
              your mechanics favor consistency over difficulty spikes.
            </p>

            <h3 className={`${H3} mt-8`}>Fall ranking</h3>
            <RankingTable rows={FALL_ROWS} />
            <p className={P}>
              Fall fishing is a flexibility season. Ocean nights stay strong with Super Cucumber, while
              river routes gain value during rain through Catfish and Walleye. If your farm workload is
              heavy in Fall, use shorter targeted sessions rather than full-day fishing. One focused
              rain window can still produce meaningful liquidity without breaking your harvest schedule.
            </p>

            <h3 className={`${H3} mt-8`}>Winter ranking</h3>
            <RankingTable rows={WINTER_ROWS} />
            <p className={P}>
              Winter has fewer top-tier options, so route predictability matters more than peak value.
              Sturgeon and Lingcod provide the stable core, while late sessions can pivot into Midnight
              Carp or Squid depending on location preference. Winter fishing should usually be a hybrid
              layer alongside mining and greenhouse prep, not your only economic pillar.
            </p>

            <Callout title="All-season premium note (Mines)">
              Once unlocked, mine fishing (especially Lava Eel and Ice Pip) can beat many seasonal
              targets. It is mechanically harder and progression-gated, but if mastered, it becomes a
              high-value all-season option that smooths seasonal volatility.
            </Callout>
          </section>

          <section id="location-recommendations" className={CARD}>
            <h2 className={H2}>3) Fishing location recommendations (Beach, River, Lake, Mines, Secret Woods)</h2>
            <p className={P}>
              Location choice is a strategy layer, not just a map preference. You are optimizing travel
              time, fish pool quality, weather interaction, and your own catch consistency. The best
              location is not always the one with the highest theoretical fish price. It is the one that
              gives your run the best value per in-game day with the fewest route disruptions.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Location</th>
                    <th className="px-3 py-2">Key fish</th>
                    <th className="px-3 py-2">Best timing</th>
                    <th className="px-3 py-2">Difficulty</th>
                    <th className="px-3 py-2">Profit logic</th>
                  </tr>
                </thead>
                <tbody>
                  {LOCATION_ROWS.map((row, index) => (
                    <tr
                      key={row.place}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.place}</td>
                      <td className="px-3 py-3">{row.fish}</td>
                      <td className="px-3 py-3">{row.best}</td>
                      <td className="px-3 py-3">{row.difficulty}</td>
                      <td className="px-3 py-3">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Beach</h3>
            <p className={P}>
              The beach is your highest burst zone from Summer onward. If you route correctly, you can
              fish a high-value noon block and a high-value night block in the same day. The main risk
              is mechanical difficulty and timing precision. If you miss the Pufferfish window, your
              daily average can drop sharply. Use beach days when your focus is high and you want raw
              active income.
            </p>

            <h3 className={`${H3} mt-6`}>River</h3>
            <p className={P}>
              River routes are the best practical money path for many players, especially in Spring/Fall
              rain. Catfish alone can anchor whole sessions, and the route is easy to fit around town
              errands. If your game day includes shopping, upgrades, or social visits, river fishing is
              often the lowest-friction way to maintain profit while staying schedule-flexible.
            </p>

            <h3 className={`${H3} mt-6`}>Mountain Lake</h3>
            <p className={P}>
              Mountain Lake is the consistency map. You may not always hit the highest single-fish value
              compared with perfect ocean windows, but your average session quality is stable. This map
              is excellent while learning tackle control or when you need dependable XP + cash in mixed
              task days that include mine visits.
            </p>

            <h3 className={`${H3} mt-6`}>Mines</h3>
            <p className={P}>
              Mine fishing is an advanced route. The value ceiling is excellent, but access and
              difficulty are both high. If you are still missing too many fish at standard locations,
              mine routes will feel punishing. Once your mechanics are stable and gear is upgraded,
              mine fish can become one of the strongest all-season options in the entire game.
            </p>

            <h3 className={`${H3} mt-6`}>Secret Woods</h3>
            <p className={P}>
              Secret Woods is an efficiency blend location. On rainy days, you can target Catfish and
              collect hardwood in one trip. That dual-output pattern is extremely efficient for players
              who value long-term building materials while still wanting immediate fishing income.
            </p>
          </section>

          <section id="skill-route" className={CARD}>
            <h2 className={H2}>4) Fishing skill upgrade route and Fisher vs Trapper decision</h2>
            <p className={P}>
              Fishing skill progression is not just about making the minigame easier. It changes your
              economy. Higher skill widens the bar, increases practical catch success on high-value fish,
              and raises average fish quality. Profession choices then decide whether you scale active
              fish sales or passive trap income.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Level band</th>
                    <th className="px-3 py-2">Primary goal</th>
                    <th className="px-3 py-2">Focus actions</th>
                    <th className="px-3 py-2">Decision checkpoint</th>
                  </tr>
                </thead>
                <tbody>
                  {PATH_ROWS.map((row, index) => (
                    <tr
                      key={row.level}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.level}</td>
                      <td className="px-3 py-3">{row.goals}</td>
                      <td className="px-3 py-3">{row.focus}</td>
                      <td className="px-3 py-3">{row.decision}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Fisher path (most players)</h3>
            <p className={P}>
              Fisher is the default profit route because it boosts fish value immediately and scales your
              active play. At level 10, Angler multiplies that advantage further. If your routine
              includes regular rod sessions, Fisher into Angler usually outperforms other paths in raw
              daily income and keeps your progression simple: fish better fish, sell for more gold.
            </p>

            <h3 className={`${H3} mt-6`}>Trapper path (specialized passive route)</h3>
            <p className={P}>
              Trapper is viable, but it is a system commitment, not a casual choice. You need enough
              crafted pots, strong daily collection discipline, and a map layout that supports fast
              pickup loops. The late-game Mariner branch improves consistency by removing trash outcomes,
              but your total income still depends on scale. If you only plan a handful of pots, Trapper
              rarely beats Fisher.
            </p>

            <h3 className={`${H3} mt-6`}>Decision framework</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Choose <strong>Fisher</strong> if you actively fish 3+ hours on most profit days.</li>
              <li className={LI}>Choose <strong>Trapper</strong> only if you are building a daily passive pot network.</li>
              <li className={LI}>Choose <strong>Angler</strong> at level 10 for pure fish-sale profit scaling.</li>
              <li className={LI}>Choose <strong>Mariner</strong> only when your crab pot loop is already central.</li>
            </ul>

            <Callout title="Common regret to avoid">
              Picking Trapper because it looks easier, then never building enough pots to make it pay.
              If you are uncertain, Fisher is almost always the safer economic decision.
            </Callout>
          </section>

          <section id="crab-pot-vs-rod" className={CARD}>
            <h2 className={H2}>5) Crab pot vs fishing rod profit comparison</h2>
            <p className={P}>
              This comparison is where many guides oversimplify. Rod fishing and crab pots are not direct
              substitutes; they solve different economic needs. Rod fishing is an active income spike.
              Crab pots are a passive income floor. The right question is not {"\""}which is always better{"\""}
              but {"\""}which layer does my current farm need more right now{"\""}.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[1000px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Setup</th>
                    <th className="px-3 py-2">Daily revenue</th>
                    <th className="px-3 py-2">Daily costs</th>
                    <th className="px-3 py-2">Daily net</th>
                    <th className="px-3 py-2">Player effort</th>
                    <th className="px-3 py-2">Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {CRAB_POT_ROWS.map((row, index) => (
                    <tr
                      key={row.setup}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.setup}</td>
                      <td className="px-3 py-3">{row.dailyRevenue}</td>
                      <td className="px-3 py-3">{row.dailyCosts}</td>
                      <td className="px-3 py-3">{row.dailyNet}</td>
                      <td className="px-3 py-3">{row.effort}</td>
                      <td className="px-3 py-3">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={P}>
              In short: rod fishing wins in absolute daily earnings when you put in active time and route
              high-value fish windows. Crab pots win in consistency and scheduling freedom once scaled,
              especially with Mariner. This means the two methods are strongest together in hybrid
              systems: run passive pots every day, then fish actively only on premium weather/timing
              windows.
            </p>
            <p className={P}>
              If you are in early Year 1 and need immediate cash, rod fishing is almost always the right
              answer. If your farm is busier later and you want baseline income without minigame focus,
              crab pots become more attractive. Re-evaluate every season instead of locking one method
              forever.
            </p>
            <Callout title="Practical hybrid setup">
              Build a moderate crab pot line for guaranteed baseline gold, then reserve active rod time
              for rainy Catfish days or Summer ocean windows where return per hour is highest.
            </Callout>
          </section>

          <section id="gear-recommendations" className={CARD}>
            <h2 className={H2}>6) Fishing equipment recommendations (rod, bait, and tackle)</h2>
            <p className={P}>
              Gear upgrades should follow profit bottlenecks, not impulse buying. If your issue is low
              bite frequency, bait access matters first. If your issue is losing expensive fish, tackle
              control matters more. Spend gold where it directly improves your current failure point.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Stage</th>
                    <th className="px-3 py-2">Recommended loadout</th>
                    <th className="px-3 py-2">Main priority</th>
                    <th className="px-3 py-2">Profit impact</th>
                  </tr>
                </thead>
                <tbody>
                  {EQUIPMENT_ROWS.map((row, index) => (
                    <tr
                      key={row.stage}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.stage}</td>
                      <td className="px-3 py-3">{row.loadout}</td>
                      <td className="px-3 py-3">{row.priority}</td>
                      <td className="px-3 py-3">{row.profitImpact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Rod upgrade order</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}><strong>Fiberglass Rod</strong> at level 2 is the first mandatory upgrade for profit sessions.</li>
              <li className={LI}><strong>Iridium Rod</strong> at level 6 is your main consistency upgrade for hard fish value routes.</li>
              <li className={LI}>Training Rod is temporary; use it only if minigame frustration is blocking progression.</li>
            </ul>

            <h3 className={`${H3} mt-6`}>Bait priorities</h3>
            <p className={P}>
              Regular bait is enough for most profitable routes and should be treated as standard
              operating cost. Wild Bait can boost output in high-focus sessions and is great once you
              can craft it comfortably, but it is not required to make fishing highly profitable.
            </p>

            <h3 className={`${H3} mt-6`}>Tackle priorities</h3>
            <p className={P}>
              Trap Bobber is the most practical tackle for stable profits because it directly reduces lost
              high-value catches. Cork Bobber is excellent while learning and can outperform in your
              personal results if control consistency is your bottleneck. Treasure Hunter is situational;
              use it for chest-focused runs rather than core income days.
            </p>

            <p className={P}>
              The hidden gear principle is consistency over theoretical max. One expensive fish lost is
              often more costly than a smaller per-catch bonus from a niche setup. If your catch rate
              drops, simplify your build and rebuild confidence first.
            </p>
          </section>

          <section id="weather-analysis" className={CARD}>
            <h2 className={H2}>7) Weather impact analysis: how rain and clear skies change profit</h2>
            <p className={P}>
              Weather is one of the strongest fishing multipliers because it changes both fish pools and
              practical route quality. A profitable fishing day starts before you cast: check weather,
              choose route, and define your time windows. Random fishing without weather alignment leaves
              too much value on the table.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Weather state</th>
                    <th className="px-3 py-2">Profit opportunities</th>
                    <th className="px-3 py-2">Recommended action</th>
                  </tr>
                </thead>
                <tbody>
                  {WEATHER_ROWS.map((row, index) => (
                    <tr
                      key={row.weather}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.weather}</td>
                      <td className="px-3 py-3">{row.opportunities}</td>
                      <td className="px-3 py-3">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={`${H3} mt-6`}>Rain day playbook</h3>
            <p className={P}>
              Rain is a premium event for fishing. Catfish routes in Spring/Fall and Eel windows near the
              ocean are the clearest examples of weather-driven value spikes. On rain days, reduce
              low-value chores and prioritize fishing blocks unless you have a critical farm emergency.
              These are your highest leverage days for cash recovery and profession-level progression.
            </p>

            <h3 className={`${H3} mt-6`}>Clear weather playbook</h3>
            <p className={P}>
              Clear weather days reward precision routing more than reactive play. In Summer, noon
              Pufferfish windows are a clear-weather profit anchor. Outside those windows, Mountain Lake
              routes often outperform scattered map hopping because they preserve catch rhythm and reduce
              travel waste.
            </p>

            <h3 className={`${H3} mt-6`}>Winter weather reality</h3>
            <p className={P}>
              Winter weather is less about special fish unlocks and more about predictability. Use that
              predictability to schedule hybrid days: mine in the morning, fish profitable windows later,
              then process outputs. Winter is where disciplined mixed schedules beat all-in extremes.
            </p>
          </section>

          <section id="execution-playbook" className={CARD}>
            <h2 className={H2}>8) Execution playbook: daily and seasonal fishing profit routine</h2>
            <p className={P}>
              Information only matters if it changes what you do tomorrow morning in-game. This execution
              playbook turns the guide into repeatable steps you can run in any season. The goal is to
              reduce decision fatigue while keeping routes adaptive to weather and cash needs.
            </p>

            <h3 className={`${H3} mt-6`}>Daily routine template</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Check weather and decide your primary location before leaving the farm.</li>
              <li>Confirm target fish windows (for example: Catfish rain block or Pufferfish noon block).</li>
              <li>Pack bait/tackle first so you do not burn time on mid-session inventory trips.</li>
              <li>Run one focused route, not three weak routes. Minimize travel and maximize casts.</li>
              <li>Sell for liquidity when needed; hold only if quality timing or bundles justify it.</li>
              <li>Log what worked: location, weather, earnings. Repeat high-performing patterns.</li>
            </ol>

            <h3 className={`${H3} mt-6`}>Seasonal transition routine</h3>
            <p className={P}>
              At each season end, review whether fishing should be your primary, secondary, or backup
              income source next season. Compare expected fishing day value to crop investment using
              the <Link className={LINK} href="/calculator">calculator</Link>. If your planned crops
              are capital-hungry, increase fishing early in the next season to protect liquidity. If your
              farm is already highly automated, reduce fishing to premium windows and let crops/artisan
              systems carry baseline income.
            </p>

            <h3 className={`${H3} mt-6`}>When to pivot away from full-time fishing</h3>
            <p className={P}>
              Full-time fishing is strongest when you still need cash and your farm lacks scale. Pivot
              when your infrastructure starts earning passively at a high level, especially with strong
              crop processing lines. At that point, use fishing as a tactical tool: rain-day cash spikes,
              specific bundle targets, or short sessions to fill budget gaps.
            </p>

            <Callout title="Final strategy summary">
              Fishing is not just a beginner activity. It is a flexible cashflow layer that can carry
              early progression, reinforce mid-game transitions, and remain useful in late-game hybrid
              economies when used with intention.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>9) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95 sm:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              If you want the highest total yearly profit, treat this fishing guide as one component of a
              seasonal money stack. Use fishing for liquidity and high-value windows, then convert that
              cash into stronger crop and artisan systems.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Compare fishing income against crop plans in the <Link className={LINK} href="/calculator">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                Tune each season with <Link className={LINK} href="/blog/stardew-valley-spring-profit-guide-2026">Spring</Link>,{" "}
                <Link className={LINK} href="/blog/best-summer-crops-quick-answer">Summer</Link>,{" "}
                <Link className={LINK} href="/blog/best-fall-crops-quick-answer">Fall</Link>, and{" "}
                <Link className={LINK} href="/blog/winter-seeds-profit-guide">Winter</Link> guides.
              </li>
              <li className={LI}>
                For long-term scaling, pair this page with <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">Keg vs Jar</Link> and{" "}
                <Link className={LINK} href="/blog/ancient-fruit-vs-starfruit">Ancient Fruit vs Starfruit</Link>.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-fishing-profit-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}
