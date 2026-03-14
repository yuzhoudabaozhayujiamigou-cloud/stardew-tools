import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-07T00:00:00Z";
const modifiedTime = "2026-03-07T00:00:00Z";
const fromPath = "/blog/stardew-valley-greenhouse-mastery-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Greenhouse Mastery Guide: 116-Tile Layout, Crop Strategy, Automation, and ROI";
const DESCRIPTION =
  "Master the Stardew Valley Greenhouse with the 116-tile layout, Ancient Fruit vs Starfruit strategy, automation workflows, and practical ROI planning today.";

const FAQ_ITEMS = [
  {
    question: "What is the best greenhouse layout in Stardew Valley?",
    answer:
      "For most players, the strongest general layout is 116 crop tiles using Iridium Sprinklers placed to maximize watering coverage while preserving workable movement paths.",
  },
  {
    question: "How do you get 116 crop tiles in the greenhouse?",
    answer:
      "Use six Iridium Sprinklers in optimized positions and fill all remaining tillable spaces except sprinkler tiles. This creates 116 plantable tiles in the greenhouse.",
  },
  {
    question: "Ancient Fruit or Starfruit in the greenhouse: which is better?",
    answer:
      "Ancient Fruit usually wins for low-maintenance consistency and smoother weekly cycles. Starfruit can beat it in high-attention setups with strong replant discipline and enough keg capacity.",
  },
  {
    question: "Should I process all greenhouse crops into wine?",
    answer:
      "Usually yes for top long-term value, but only if machine capacity keeps pace. If kegs are a bottleneck, mix processed and raw sales to avoid liquidity problems.",
  },
  {
    question: "How many kegs do I need for a full 116-tile greenhouse?",
    answer:
      "It depends on crop type and harvest cadence. Ancient Fruit has weekly rhythm, while Starfruit has replant cycles. Use your weekly harvest volume to size keg count and avoid long chest backlogs.",
  },
  {
    question: "Can I use the greenhouse for year-round cash stabilization?",
    answer:
      "Yes. That is one of its biggest advantages. The greenhouse decouples core income from outdoor seasons, helping maintain steady machine input and cash flow.",
  },
  {
    question: "Is Deluxe Speed-Gro worth it in greenhouse Starfruit runs?",
    answer:
      "It can be worth it when your schedule supports frequent replanting and your keg pipeline is ready. Otherwise, the extra management overhead may reduce practical efficiency.",
  },
  {
    question: "When should I switch from mixed crops to a specialized greenhouse?",
    answer:
      "Switch when you know your bottleneck. If machine slots are stable and replant time is tight, Ancient Fruit specialization is often best. If you can handle replanting and maximize conversion cadence, Starfruit-heavy strategies can outperform.",
  },
  {
    question: "What is the biggest greenhouse mistake?",
    answer:
      "Designing only for max tile count without considering workflow. A mathematically dense layout can still underperform if harvest, replanting, and machine refill routes are inefficient.",
  },
] as const;

const CROP_COMPARISON_ROWS = [
  {
    crop: "Ancient Fruit",
    setup: "Higher startup friction (seed multiplication)",
    workload: "Low after initial planting (weekly regrow)",
    machineFit: "Excellent with steady keg lines",
    bestFor: "Players who want consistency and low replant micro",
  },
  {
    crop: "Starfruit",
    setup: "Easy seed acquisition with high recurring cost",
    workload: "High (replant cadence + fertilizer decisions)",
    machineFit: "Strong with high keg capacity and disciplined workflow",
    bestFor: "High-attention optimization and burst profitability",
  },
  {
    crop: "Mixed strategy",
    setup: "Flexible and adaptive",
    workload: "Moderate depending on mix",
    machineFit: "Useful when keg count is still scaling",
    bestFor: "Transition phases and bottleneck testing",
  },
] as const;

const ROI_ROWS = [
  {
    stage: "Early greenhouse launch",
    investmentFocus: "Soil prep, sprinkler setup, first machine batch",
    expectedReturn: "Stabilized weekly income and reduced seasonal variance",
    risk: "Underbuilt machine capacity causing delayed conversion",
  },
  {
    stage: "Mid scaling phase",
    investmentFocus: "Keg expansion, resin pipeline, storage routing",
    expectedReturn: "Higher conversion rate and reduced idle crop inventory",
    risk: "Resin bottlenecks and chest backlog masking real constraints",
  },
  {
    stage: "Mature greenhouse system",
    investmentFocus: "Workflow polish, quality optimization, schedule discipline",
    expectedReturn: "Compounding high-margin output with low management waste",
    risk: "Over-optimization that harms practical consistency",
  },
] as const;

const AUTOMATION_ROWS = [
  {
    layer: "Irrigation",
    recommendation: "Iridium sprinklers with path-preserving placement",
    impact: "Removes daily watering cost and protects time for processing loops",
  },
  {
    layer: "Harvest routing",
    recommendation: "Dedicated chest lanes near greenhouse exits",
    impact: "Reduces travel waste and keeps refill sessions tight",
  },
  {
    layer: "Processing",
    recommendation: "Keg clusters by refill cadence",
    impact: "Improves machine uptime and backlog visibility",
  },
  {
    layer: "Material supply",
    recommendation: "Persistent oak resin and bar production pipeline",
    impact: "Prevents expansion stalls during high-opportunity windows",
  },
  {
    layer: "Decision support",
    recommendation: "Weekly calculator checks with days-left and bottleneck notes",
    impact: "Keeps crop selection aligned with current constraints",
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
    <nav aria-label="Spis treści" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Spis treści
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#greenhouse-economics">
          1) Why greenhouse mastery changes your whole economy
        </a>
        <a className={TOC_LINK} href="#unlock-preparation">
          2) Unlock timeline and preparation checklist
        </a>
        <a className={TOC_LINK} href="#layout-116">
          3) 116-tile layout explained step by step
        </a>
        <a className={TOC_LINK} href="#layout-variants">
          4) Layout variants for different playstyles
        </a>
        <a className={TOC_LINK} href="#crop-strategy">
          5) Crop strategy framework
        </a>
        <a className={TOC_LINK} href="#ancient-vs-starfruit">
          6) Ancient Fruit vs Starfruit deep comparison
        </a>
        <a className={TOC_LINK} href="#automation-efficiency">
          7) Automation and efficiency stack
        </a>
        <a className={TOC_LINK} href="#profit-roi">
          8) Profit math and ROI planning
        </a>
        <a className={TOC_LINK} href="#operating-routine">
          9) Weekly operating routine and checklists
        </a>
        <a className={TOC_LINK} href="#scenario-playbooks">
          10) Scenario playbooks by farm style
        </a>
        <a className={TOC_LINK} href="#common-mistakes">
          11) Common greenhouse mistakes
        </a>
        <a className={TOC_LINK} href="#faq">
          12) FAQ
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

export default function StardewValleyGreenhouseMasteryGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-greenhouse-mastery-guide", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
      "stardew valley greenhouse mastery guide",
      "116 greenhouse layout stardew valley",
      "ancient fruit vs starfruit greenhouse",
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
            { name: "Greenhouse Mastery Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Greenhouse Mastery • 116 Tiles • Crop and ROI Strategy
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Opublikowano: <time dateTime={publishedTime}>2026-03-07</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Zaktualizowano: <time dateTime={modifiedTime}>2026-03-07</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Czas czytania: 24-30 min
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Otwórz kalkulator zysków
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/best-greenhouse-crops-stardew-valley">
                Read: Best Greenhouse Crops
              </Link>
            </div>
          </header>

          <section className={CARD}>
            <figure>
              <Image
                src="/blog/greenhouse-116-layout.svg"
                alt="Optimized Stardew Valley greenhouse layout with 116 crop tiles and sprinkler positions"
                width={1200}
                height={630}
                className="h-auto w-full rounded-2xl border border-[#7c4d2e]/35 bg-[#fff9ec]"
              />
              <figcaption className="mt-3 text-sm text-[#5c4033]/85">
                The layout itself is only step one. Real mastery comes from pairing tile density with
                harvest rhythm, machine capacity, and route efficiency.
              </figcaption>
            </figure>
          </section>

          <Toc />

          <section id="greenhouse-economics" className={CARD}>
            <h2 className={H2}>Why greenhouse mastery changes your whole farm economy</h2>
            <p className={P}>
              The greenhouse is not just another farming area. It is a structural change to your economy.
              Outdoor fields are seasonal, weather-exposed, and calendar-constrained. Greenhouse farming
              is controlled, stable, and year-round. Once you understand this difference, your planning
              shifts from seasonal survival to continuous production design. That shift is exactly why
              many high-profit farms feel {"\""}effortless{"\""} after greenhouse setup: income smoothing replaces
              seasonal volatility.
            </p>
            <p className={P}>
              In practical terms, greenhouse mastery does three things at once. First, it creates a
              reliable input stream for artisan machines, which increases conversion consistency and
              reduces idle time. Second, it stabilizes your cash flow between outdoor harvest spikes,
              making upgrades and materials easier to schedule. Third, it simplifies strategic decisions
              because one major production lane is no longer tied to season transitions. You still plan
              around outdoor opportunities, but your core engine keeps running.
            </p>
            <p className={P}>
              This is why greenhouse optimization should not be delayed to {"\""}late game perfection{"\""}. Even a
              partially optimized greenhouse can significantly reduce decision pressure. If your goal is a
              scalable profit system, use this guide alongside the{" "}
              <Link className={LINK} href="/blog/farm-profit-pillars">Farm Profit Pillars guide</Link>{" "}
              and <Link className={LINK} href="/blog/stardew-valley-artisan-profit-guide">Artisan Profit Guide</Link>.
              The greenhouse is where those frameworks connect in daily gameplay.
            </p>
            <Callout title="Mastery mindset">
              Do not optimize for one static screenshot. Optimize for repeatable weekly operations: plant,
              harvest, refill machines, sell, and reset with minimal friction.
            </Callout>
          </section>

          <section id="unlock-preparation" className={CARD}>
            <h2 className={H2}>Unlock timeline and preparation checklist</h2>
            <p className={P}>
              Many players unlock the greenhouse and then underuse it for weeks because setup was not
              preplanned. The right way is to treat unlock day as launch day. Before completion, you
              should already know crop plan, sprinkler placement, chest routing, and first processing
              batch flow. This prework determines whether greenhouse activation feels transformational or
              merely {"\""}nice to have{"\""}.
            </p>
            <h3 className={`${H3} mt-6`}>Pre-unlock preparation priorities</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Store enough seeds to start meaningful density immediately.</li>
              <li className={LI}>Prepare six Iridium Sprinklers (or a transition plan if fewer are ready).</li>
              <li className={LI}>Place nearby chest infrastructure for fast harvest transfer.</li>
              <li className={LI}>Map first conversion lane: which crops are sold raw vs processed.</li>
              <li className={LI}>Secure material pipeline for machine expansion in the same period.</li>
            </ul>
            <p className={P}>
              If you are still deciding the unlock path and milestone order, compare with the{" "}
              <Link className={LINK} href="/blog/stardew-valley-year-1-profit-guide-complete">
                complete Year 1 roadmap
              </Link>
              . The two guides are designed to interlock: Year 1 sets constraints, greenhouse mastery
              converts those constraints into stable output.
            </p>
          </section>

          <section id="layout-116" className={CARD}>
            <h2 className={H2}>116-tile layout explained step by step</h2>
            <p className={P}>
              The 116 layout is popular for good reason: it balances near-maximum crop density with
              practical watering automation using six Iridium Sprinklers. In raw numbers, every tile in
              the greenhouse matters because these crops can feed premium artisan lines year-round.
              However, a dense layout only wins if your movement, harvest routing, and replant flow remain
              clean. Tile count is the start, not the finish.
            </p>
            <h3 className={`${H3} mt-6`}>Step-by-step setup</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Till all available interior crop spaces and identify sprinkler anchors first.</li>
              <li>Place six Iridium Sprinklers in optimized coverage positions.</li>
              <li>Fill all remaining tillable spaces as crop tiles for total 116 plant spots.</li>
              <li>Reserve access routes where your playstyle needs quicker replant loops.</li>
              <li>Set one chest just outside entrance and one near processing area for handoff speed.</li>
            </ol>
            <p className={P}>
              If you need a visual companion and layout alternatives, read{" "}
              <Link className={LINK} href="/blog/greenhouse-layout-guide">
                Greenhouse Layout Guide
              </Link>
              . This page focuses on strategic operations after layout completion.
            </p>
            <Callout title="Density vs usability">
              If a layout causes delayed harvests, missed replant windows, or refill fatigue, it is
              functionally lower profit even when tile count is higher. Treat route quality as a
              first-class profit variable.
            </Callout>
          </section>

          <section id="layout-variants" className={CARD}>
            <h2 className={H2}>Layout variants for different playstyles</h2>
            <p className={P}>
              Not every player should run the same greenhouse geometry. Your schedule, replant tolerance,
              and machine infrastructure all affect what is {"\""}optimal{"\""}. The 116 pattern is a strong
              baseline, but variants can outperform it for specific constraints. For example, players with
              limited weekly play windows often benefit from slightly cleaner lanes that sacrifice a few
              tiles for lower friction. Meanwhile, high-attention optimizers may run strict density plus
              tight machine routines.
            </p>
            <h3 className={`${H3} mt-6`}>Common variant choices</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Full 116 density: strongest for disciplined weekly operators.</li>
              <li className={LI}>114-115 with comfort lanes: easier manual harvesting and replanting.</li>
              <li className={LI}>Transition mix zones: temporary split between recurring and replant crops.</li>
              <li className={LI}>Experiment lanes: small tiles reserved for short-cycle testing.</li>
            </ul>
            <p className={P}>
              The best test is throughput, not aesthetics. Track whether your weekly completion rate
              improves with a variant. If harvest and refill cycles complete faster and backlog drops,
              the variant is economically superior for your run.
            </p>
          </section>

          <section id="crop-strategy" className={CARD}>
            <h2 className={H2}>Crop strategy framework: choose by bottleneck, not hype</h2>
            <p className={P}>
              Greenhouse discussions often reduce to one question: Ancient Fruit or Starfruit? That is
              useful, but incomplete. The real sequence is: identify bottleneck, choose crop behavior,
              then size machine capacity accordingly. If replanting discipline is your bottleneck,
              recurring crops gain value. If machine slots are your bottleneck, high-margin per-batch
              planning becomes critical. If liquidity is tight, partial raw sales may be temporarily
              optimal even when full processing has higher theoretical yield.
            </p>
            <p className={P}>
              Use <Link className={LINK} href="/calculator">the calculator</Link> with your exact
              assumptions and current day context. Then check whether your decision survives workflow
              reality. Many failed greenhouse plans are mathematically correct but operationally fragile.
              Sustainable profit comes from alignment between numbers and execution capacity.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Crop approach</th>
                    <th className="px-3 py-2">Setup profile</th>
                    <th className="px-3 py-2">Workload profile</th>
                    <th className="px-3 py-2">Machine fit</th>
                    <th className="px-3 py-2">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {CROP_COMPARISON_ROWS.map((row, index) => (
                    <tr
                      key={row.crop}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.crop}</td>
                      <td className="px-3 py-3">{row.setup}</td>
                      <td className="px-3 py-3">{row.workload}</td>
                      <td className="px-3 py-3">{row.machineFit}</td>
                      <td className="px-3 py-3">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="ancient-vs-starfruit" className={CARD}>
            <h2 className={H2}>Ancient Fruit vs Starfruit deep comparison</h2>
            <p className={P}>
              This debate is popular because both are legitimately strong. The mistake is treating one as
              universally better. Ancient Fruit tends to win in operational efficiency: once established,
              weekly regrowth supports consistent harvest cadence with low replant overhead. This frees
              time for mining, expansion, and machine management. Starfruit can produce excellent returns,
              but it asks for recurring seed purchases, regular replant cycles, and tighter timing control.
            </p>
            <p className={P}>
              In high-discipline runs, Starfruit can outperform on certain profit metrics, especially when
              keg capacity and replant routines are robust. In practical, mixed-attention runs, Ancient
              Fruit often delivers better realized profit because fewer steps means fewer execution misses.
              Realized profit beats theoretical peaks that depend on perfect maintenance.
            </p>
            <h3 className={`${H3} mt-6`}>When Ancient Fruit usually wins</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>You value stable weekly routines and low micro-management.</li>
              <li className={LI}>You are still scaling keg count and want predictable input flow.</li>
              <li className={LI}>You prefer long-term compounding over high-touch cycle optimization.</li>
            </ul>
            <h3 className={`${H3} mt-6`}>When Starfruit usually wins</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>You can maintain strict replant cadence with minimal delays.</li>
              <li className={LI}>Seed costs are controlled and do not hurt expansion liquidity.</li>
              <li className={LI}>Machine capacity is high enough to prevent conversion backlog.</li>
            </ul>
            <p className={P}>
              For scenario-specific math, continue with{" "}
              <Link className={LINK} href="/blog/ancient-fruit-vs-starfruit">
                Ancient Fruit vs Starfruit full guide
              </Link>{" "}
              and <Link className={LINK} href="/blog/ancient-fruit-wine-vs-starfruit-wine">wine-only comparison</Link>.
              If you are deciding quickly, use{" "}
              <Link className={LINK} href="/blog/ancient-fruit-vs-starfruit-quick-answer">
                the quick answer version
              </Link>
              .
            </p>
          </section>

          <section id="automation-efficiency" className={CARD}>
            <h2 className={H2}>Automation and efficiency stack</h2>
            <p className={P}>
              Greenhouse output is only as strong as the system that handles it. Automation here does not
              mean fully AFK. It means reducing repetitive friction so high-value decisions get more of
              your time. The stack below shows the practical layers that drive reliable conversion and
              sustained growth.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[960px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Automation layer</th>
                    <th className="px-3 py-2">Recommendation</th>
                    <th className="px-3 py-2">Profit impact</th>
                  </tr>
                </thead>
                <tbody>
                  {AUTOMATION_ROWS.map((row, index) => (
                    <tr
                      key={row.layer}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.layer}</td>
                      <td className="px-3 py-3">{row.recommendation}</td>
                      <td className="px-3 py-3">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              The most frequent late-game greenhouse bottleneck is not crop choice, it is resin supply for
              kegs. Plan oak tappers early and keep the cycle uninterrupted. If your keg expansion stops,
              greenhouse value capture stalls. For machine-side scaling details, use{" "}
              <Link className={LINK} href="/blog/how-many-kegs-do-i-need-quick-answer">
                how many kegs do I need
              </Link>{" "}
              and <Link className={LINK} href="/blog/stardew-valley-keg-jar-artisan-profit-system">the full artisan pipeline guide</Link>.
            </p>
          </section>

          <section id="profit-roi" className={CARD}>
            <h2 className={H2}>Profit math and ROI planning</h2>
            <p className={P}>
              ROI in greenhouse setups is easy to misunderstand because returns are continuous and tied to
              multiple dependent systems. Instead of asking only {"\""}Which crop has higher sell price?{"\""} ask
              {"\""}Which full pipeline generates more realized value per week after accounting for labor,
              machine capacity, and bottlenecks?{"\""} This framing prevents misleading optimization.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Scaling stage</th>
                    <th className="px-3 py-2">Main investment</th>
                    <th className="px-3 py-2">Expected return profile</th>
                    <th className="px-3 py-2">Primary risk</th>
                  </tr>
                </thead>
                <tbody>
                  {ROI_ROWS.map((row, index) => (
                    <tr
                      key={row.stage}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.stage}</td>
                      <td className="px-3 py-3">{row.investmentFocus}</td>
                      <td className="px-3 py-3">{row.expectedReturn}</td>
                      <td className="px-3 py-3">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              A simple ROI routine: every week, record harvest volume, machine idle rate, and chest
              backlog. If backlog rises while machines run full, expansion is justified. If machines sit
              idle, crop strategy or cadence needs adjustment. If both backlog and idle time occur, your
              workflow routing is likely broken. Use this diagnosis loop before spending heavily.
            </p>
            <Callout title="Practical ROI question">
              {"\""}If I add 10 kegs this week, do I reduce delayed conversion enough to recover investment
              faster than alternative uses of gold?{"\""} This question is more reliable than headline margin
              comparisons.
            </Callout>
          </section>

          <section id="operating-routine" className={CARD}>
            <h2 className={H2}>Weekly operating routine and checklists</h2>
            <p className={P}>
              The highest-performing greenhouse setups are routine-driven. They do not depend on mood or
              memory. Build a weekly operating loop that protects the essentials: harvest timing, machine
              refill, inventory conversion, and material continuity.
            </p>
            <h3 className={`${H3} mt-6`}>Weekly greenhouse checklist</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Harvest on schedule and replant immediately if running non-regrow crops.</li>
              <li className={LI}>Refill processing machines in the same session to avoid idle drift.</li>
              <li className={LI}>Audit resin and bar inventory versus your next machine expansion target.</li>
              <li className={LI}>Check calculator assumptions if crop mix or profession state changed.</li>
              <li className={LI}>Review chest backlog and clear delayed high-value items first.</li>
              <li className={LI}>Reserve emergency liquidity before discretionary purchases.</li>
            </ul>
            <h3 className={`${H3} mt-6`}>Monthly greenhouse review (high value)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Measure realized output, not only theoretical projections.</li>
              <li>Evaluate whether layout still matches your current crop strategy.</li>
              <li>Recalculate crop mix if machine capacity changed significantly.</li>
              <li>Adjust expansion targets based on true bottlenecks observed.</li>
              <li>Confirm your routine still fits available playtime realistically.</li>
            </ol>
            <p className={P}>
              If your routine is becoming too heavy, simplify first and optimize second. Consistent
              execution beats complex plans that break after one busy week.
            </p>
          </section>


          <section id="scenario-playbooks" className={CARD}>
            <h2 className={H2}>Scenario playbooks by farm style</h2>
            <p className={P}>
              A greenhouse system should match your actual play behavior. Two players with identical tile
              layouts can produce very different outcomes because their weekly attention patterns differ.
              To make this guide practical, here are three common playbooks. Use the one that resembles
              your reality, then adjust based on measured results.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Playbook A: Low-maintenance consistency (limited sessions)</h3>
            <p className={P}>
              If you play in short sessions and prefer stable progress, prioritize Ancient Fruit with a
              strict weekly cadence. Keep layout routes comfortable, protect machine refill sessions, and
              avoid high-frequency replanting strategies that create cognitive overhead. Your win condition
              is predictable completion, not maximum theoretical spikes. In this model, every missed task
              is expensive because fewer sessions mean less recovery capacity.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Use regrow-heavy crop profiles to minimize mandatory touchpoints.</li>
              <li className={LI}>Batch processing in fixed windows instead of frequent micro-refills.</li>
              <li className={LI}>Favor layout comfort if it prevents delayed harvests and refill misses.</li>
              <li className={LI}>Keep one emergency cash reserve to absorb missed cycle disruptions.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Playbook B: High-attention optimization (frequent check-ins)</h3>
            <p className={P}>
              If you enjoy optimization and can maintain regular touchpoints, Starfruit-heavy pipelines
              become more viable. The key is discipline: scheduled replanting, continuous machine loading,
              and strict inventory control. This style can produce excellent results, but only when process
              quality is high. If you often skip cycles, performance drops quickly and may underperform a
              simpler Ancient Fruit routine.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Set fixed replant windows and pre-stage seeds/fertilizer in dedicated chests.</li>
              <li className={LI}>Scale kegs in advance so high-value harvests are not delayed in storage.</li>
              <li className={LI}>Use weekly KPI checks: backlog size, machine idle rate, and cycle completion rate.</li>
              <li className={LI}>Reassess crop ratio monthly to keep operations aligned with real capacity.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Playbook C: Transitional hybrid (scaling from midgame to mature)</h3>
            <p className={P}>
              Many farms are in transition: some machines exist, resin is still constrained, and daily
              routines are improving but not fully stable. In this stage, a hybrid greenhouse is often
              optimal. Run a core recurring lane for consistency while allocating a controlled share to
              higher-touch crops. This gives you upside without destabilizing base operations.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Anchor with recurring crops for baseline machine feed continuity.</li>
              <li className={LI}>Add limited Starfruit blocks only when replant windows are guaranteed.</li>
              <li className={LI}>Route overflow to selective raw sales to protect liquidity during expansion.</li>
              <li className={LI}>Upgrade toward full specialization once bottlenecks become predictable.</li>
            </ul>
            <p className={P}>
              The strategic takeaway is simple: greenhouse mastery is context-sensitive. Choose the plan
              that you can execute repeatedly, then improve it. A perfectly modeled strategy that your
              schedule cannot sustain will always lose to a slightly less efficient system that runs every
              week without fail.
            </p>
            <Callout title="Calibration rule">
              After two in-game weeks, compare predicted and realized output. If realized value is below
              expectation by a wide margin, reduce complexity first, then optimize again.
            </Callout>
          </section>

          <section id="common-mistakes" className={CARD}>
            <h2 className={H2}>Common greenhouse mistakes</h2>
            <h3 className={`${H3} mt-4`}>Mistake 1: Prioritizing tile count over workflow</h3>
            <p className={P}>
              Maximum density is attractive, but if harvest and replant routes become awkward, practical
              performance drops. Evaluate layout by cycle speed, not screenshot symmetry.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 2: Running crop plans without matching machine plans</h3>
            <p className={P}>
              High-volume greenhouse harvests need conversion capacity. Without enough machines, value sits
              in storage and strategic momentum weakens.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 3: Ignoring resin bottlenecks until too late</h3>
            <p className={P}>
              Keg growth is constrained by oak resin. If you start resin planning late, greenhouse
              expansion slows exactly when opportunities are highest.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 4: Overcommitting to Starfruit without schedule capacity</h3>
            <p className={P}>
              Starfruit can be excellent, but replant discipline is mandatory. If your play schedule is
              inconsistent, Ancient Fruit often yields stronger realized results.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 5: Never reevaluating strategy after expansion</h3>
            <p className={P}>
              What worked at small scale may underperform at larger scale. Reassess crop mix and machine
              allocation after every significant capacity jump.
            </p>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ: Greenhouse Mastery</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <article key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next action steps</h2>
            <p className={P}>
              Start by validating your current greenhouse crop plan in the{" "}
              <Link className={LINK} href="/calculator">
                profit calculator
              </Link>
              , then compare your actual machine capacity against weekly harvest volume. If conversion
              bottlenecks are visible, prioritize pipeline scaling before changing crop strategy again.
            </p>
            <p className={P}>
              Continue with{" "}
              <Link className={LINK} href="/blog/artisan-goods-empire-beginner-to-master">
                Artisan Goods Empire
              </Link>{" "}
              for full processing network design.
            </p>
          </section>

          <BlogReadNext
            posts={readNextPosts}
            currentSlug="stardew-valley-greenhouse-mastery-guide"
          />
        </article>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
