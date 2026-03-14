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
const fromPath = "/blog/artisan-goods-empire-beginner-to-master";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Artisan Goods Empire in Stardew Valley: From Beginner to Master (Keg vs Jar, Resin Bottlenecks, and Scale)";
const DESCRIPTION =
  "Build a Stardew Valley artisan goods empire with deep Keg vs Jar analysis, production-line planning, oak resin bottleneck fixes, and scalable profit strategy.";

const FAQ_ITEMS = [
  {
    question: "What is the fastest way to start an artisan goods empire in Stardew Valley?",
    answer:
      "Start with preserves jars for early throughput and transition into keg-heavy processing as your resin and bar supply stabilizes. Keep a cash buffer so expansion does not block seed cycles.",
  },
  {
    question: "Are kegs better than jars for profit?",
    answer:
      "Kegs often win on high-value fruit conversion, but jars can outperform on early throughput and machine-day flexibility. The best choice depends on your bottleneck, not a universal rule.",
  },
  {
    question: "Why is oak resin always a bottleneck for artisan scaling?",
    answer:
      "Keg expansion consumes resin faster than most players prepare for. Without a dedicated oak tapper pipeline and planned harvest cadence, machine growth stalls during key opportunities.",
  },
  {
    question: "How many kegs and jars should I target first?",
    answer:
      "Build enough to prevent long crop backlogs. Early on, balanced mixed lines are safer. As crop input stabilizes, move toward a machine ratio aligned with your harvest cadence and crop profile.",
  },
  {
    question: "Should I process everything or sell some items raw?",
    answer:
      "Process high-value inputs when capacity exists, but sell part of output raw when liquidity is at risk. Sustainable scaling requires cash flow discipline.",
  },
  {
    question: "What profession is best for an artisan empire?",
    answer:
      "Artisan is typically the key profession for processed goods economies because it significantly boosts sell prices for many artisan outputs.",
  },
  {
    question: "Can an artisan empire work before greenhouse unlock?",
    answer:
      "Yes, but it requires stronger seasonal input planning. The greenhouse makes artisan pipelines smoother by providing year-round stable crop flow.",
  },
  {
    question: "How do I scale artisan production without burnout?",
    answer:
      "Design around repeatable weekly routines, lane-based chest routing, and machine clusters by refill cadence. Complexity should increase only when your routine remains stable.",
  },
  {
    question: "What is the biggest mistake when scaling artisan goods?",
    answer:
      "Overbuilding machines without securing raw input and resin continuity. Idle machines and missing inputs destroy ROI and slow momentum.",
  },
] as const;

const MACHINE_COMPARISON_ROWS = [
  {
    metric: "Build timing",
    keg: "Typically later due to resin and material requirements",
    jar: "Earlier access for many farms",
    strategicTake: "Jars are often the bridge that funds keg expansion",
  },
  {
    metric: "Processing speed",
    keg: "Longer cycles for many products",
    jar: "Faster cycles, frequent turnover",
    strategicTake: "Jars can dominate when machine-time bottleneck is severe",
  },
  {
    metric: "Per-item upside",
    keg: "Strong for high-value fruit/wine chains",
    jar: "Reliable margins on wide crop set",
    strategicTake: "Kegs win premium lanes, jars stabilize broader pipelines",
  },
  {
    metric: "Resource bottleneck",
    keg: "Oak resin and bars are common constraints",
    jar: "Materials still matter but often less resin-sensitive",
    strategicTake: "Resin planning determines keg scale velocity",
  },
  {
    metric: "Workflow sensitivity",
    keg: "Punishes inconsistent refill routines less often, but delays can stack",
    jar: "Requires frequent touchpoints for max uptime",
    strategicTake: "Choose based on your session rhythm and attention availability",
  },
] as const;

const STAGE_ROWS = [
  {
    stage: "Beginner artisan layer",
    objective: "Create first repeatable conversion loop",
    machineMix: "Jar-first with selective early kegs",
    controlMetric: "Backlog age and seed liquidity",
  },
  {
    stage: "Intermediate scaling",
    objective: "Expand machine network without breaking routine",
    machineMix: "Balanced jars/kegs tuned by crop profile",
    controlMetric: "Machine idle rate vs chest backlog trend",
  },
  {
    stage: "Advanced empire",
    objective: "High-throughput conversion with low friction",
    machineMix: "Keg-heavy premium lanes + support jars",
    controlMetric: "Weekly realized value and bottleneck lead indicators",
  },
] as const;

const RESIN_PLAN_ROWS = [
  {
    phase: "Foundation",
    action: "Plant and protect oak tapper zones early",
    target: "Stable baseline resin inflow before major keg push",
    failureMode: "Late setup creates hard cap on midgame expansion",
  },
  {
    phase: "Acceleration",
    action: "Scale tapper count in batches tied to keg targets",
    target: "Predictable resin throughput for scheduled crafting",
    failureMode: "Unplanned bursts lead to partial builds and idle intent",
  },
  {
    phase: "Maturity",
    action: "Maintain tapper uptime and route harvest into craft cadence",
    target: "No-resin-delay machine growth during opportunity windows",
    failureMode: "Maintenance neglect silently slows empire growth",
  },
] as const;

const PIPELINE_ROWS = [
  {
    layer: "Input planning",
    implementation: "Seasonal crop map + greenhouse feed schedule",
    effect: "Ensures machines have consistent raw material flow",
  },
  {
    layer: "Machine architecture",
    implementation: "Cluster by cycle duration and refill frequency",
    effect: "Cuts route waste and improves operational visibility",
  },
  {
    layer: "Storage routing",
    implementation: "Lane-specific chests near each processing zone",
    effect: "Faster handoffs and fewer conversion delays",
  },
  {
    layer: "Material supply",
    implementation: "Parallel ore/coal/resin lines with weekly audits",
    effect: "Prevents expansion deadlocks",
  },
  {
    layer: "Decision loop",
    implementation: "Weekly KPI check and calculator recalibration",
    effect: "Keeps expansion aligned with real bottlenecks",
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
        <a className={TOC_LINK} href="#empire-mindset">
          1) The artisan empire mindset
        </a>
        <a className={TOC_LINK} href="#system-map">
          2) Full artisan system map
        </a>
        <a className={TOC_LINK} href="#keg-vs-jar">
          3) Keg vs Jar deep analysis
        </a>
        <a className={TOC_LINK} href="#pipeline-design">
          4) Production line architecture
        </a>
        <a className={TOC_LINK} href="#oak-resin-bottleneck">
          5) Solving oak resin bottlenecks
        </a>
        <a className={TOC_LINK} href="#scaling-stages">
          6) Beginner to master scaling stages
        </a>
        <a className={TOC_LINK} href="#roi-machine-day">
          7) Machine-day ROI framework
        </a>
        <a className={TOC_LINK} href="#weekly-operations">
          8) Weekly operations and checklist
        </a>
        <a className={TOC_LINK} href="#mega-scale-strategy">
          9) Mega-scale strategy without chaos
        </a>
        <a className={TOC_LINK} href="#expansion-case-studies">
          10) Expansion case studies and playbooks
        </a>
        <a className={TOC_LINK} href="#implementation-blueprint">
          11) 90-day implementation blueprint
        </a>
        <a className={TOC_LINK} href="#mistakes">
          12) Common empire-killing mistakes
        </a>
        <a className={TOC_LINK} href="#faq">
          13) FAQ
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

export default function ArtisanGoodsEmpireBeginnerToMasterPage() {
  const readNextPosts = getBlogReadNextPosts("artisan-goods-empire-beginner-to-master", 3);

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
      "stardew valley artisan goods empire",
      "keg vs jar deep analysis",
      "oak resin bottleneck strategy",
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
            { name: "Artisan Goods Empire" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Artisan Empire • Keg vs Jar • Scalable Production Systems
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
                Czas czytania: 28-34 min
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Otwórz kalkulator zysków
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-keg-jar-artisan-profit-system">
                Read: Keg vs Jar System Guide
              </Link>
            </div>
          </header>

          <section className={CARD}>
            <figure>
              <Image
                src="/blog/artisan-empire-pipeline.svg"
                alt="Artisan goods empire pipeline diagram showing crops, kegs, jars, storage, and sales flow"
                width={1200}
                height={630}
                className="h-auto w-full rounded-2xl border border-[#7c4d2e]/35 bg-[#fff9ec]"
              />
              <figcaption className="mt-3 text-sm text-[#5c4033]/85">
                Empire growth is a pipeline problem: secure input, convert reliably, prevent bottlenecks,
                and reinvest with discipline.
              </figcaption>
            </figure>
          </section>

          <Toc />

          <section id="empire-mindset" className={CARD}>
            <h2 className={H2}>The artisan empire mindset: systems over one-off profits</h2>
            <p className={P}>
              Becoming rich from artisan goods is not about one good batch of wine. It is about designing
              a system that converts farm output into high-value products repeatedly with minimal drift.
              Many players experience temporary spikes from lucky harvests, then wonder why income drops
              the next week. The missing layer is process design: input planning, machine capacity,
              material continuity, routing, and weekly review loops.
            </p>
            <p className={P}>
              An artisan empire behaves like a production business. You have upstream inputs (crops,
              animal products, forage), midstream conversion (kegs, jars, other machines), and downstream
              monetization (timed sales, liquidity buffers, reinvestment). If any segment is unmanaged,
              growth stalls. This is why players with smaller farms but cleaner systems often outperform
              larger farms running chaotic pipelines.
            </p>
            <p className={P}>
              Use this guide as your blueprint from first machines to mature scale. For seasonal crop
              planning that feeds artisan lanes, pair this page with the{" "}
              <Link className={LINK} href="/blog/stardew-valley-year-1-profit-guide-complete">
                Complete Year 1 Profit Guide
              </Link>{" "}
              and <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">Greenhouse Mastery Guide</Link>.
              For tactical machine decisions, cross-check with{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">Keg vs Jar Profit Guide</Link>
              .
            </p>
            <Callout title="Empire rule #1">
              Optimize for <strong>realized weekly value</strong>, not isolated per-item highs. If a plan
              cannot be repeated reliably, it is not an empire strategy.
            </Callout>
          </section>

          <section id="system-map" className={CARD}>
            <h2 className={H2}>Full artisan system map: what actually needs to work</h2>
            <p className={P}>
              Most artisan advice focuses narrowly on machine choice. In reality, machine choice is only
              one node in a larger network. To scale profit, every node needs baseline health.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">System layer</th>
                    <th className="px-3 py-2">Implementation</th>
                    <th className="px-3 py-2">Profit effect</th>
                  </tr>
                </thead>
                <tbody>
                  {PIPELINE_ROWS.map((row, index) => (
                    <tr
                      key={row.layer}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.layer}</td>
                      <td className="px-3 py-3">{row.implementation}</td>
                      <td className="px-3 py-3">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              The practical lesson: you cannot patch weak system design with one extra machine type.
              Expansion works when all five layers improve together. If one layer lags, it becomes your
              visible bottleneck in two to three in-game weeks.
            </p>
          </section>

          <section id="keg-vs-jar" className={CARD}>
            <h2 className={H2}>Keg vs Jar deep analysis: choose by bottleneck logic</h2>
            <p className={P}>
              The keg-versus-jar debate creates confusion because players compare metrics from different
              contexts. One player is short on machines, another is short on input crops, another is short
              on resin. The {"\""}best{"\""} machine changes with bottleneck type. To avoid wrong conclusions,
              classify your situation first.
            </p>
            <h3 className={`${H3} mt-6`}>Bottleneck diagnostic before choosing machines</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>If crops pile up faster than machines process, machine-time value dominates.</li>
              <li className={LI}>If machines sit idle, input supply and route design are your true issues.</li>
              <li className={LI}>If keg plans stall despite demand, resin pipeline is the limiting factor.</li>
              <li className={LI}>If cash is unstable, faster turnover options may beat delayed high-margin plays.</li>
            </ul>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Decision metric</th>
                    <th className="px-3 py-2">Keg tendency</th>
                    <th className="px-3 py-2">Jar tendency</th>
                    <th className="px-3 py-2">Strategic interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {MACHINE_COMPARISON_ROWS.map((row, index) => (
                    <tr
                      key={row.metric}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.metric}</td>
                      <td className="px-3 py-3">{row.keg}</td>
                      <td className="px-3 py-3">{row.jar}</td>
                      <td className="px-3 py-3">{row.strategicTake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              In many successful farms, jars are the early cash-flow stabilizer and kegs become the long
              compounding core once resin and material lines are mature. This staged approach avoids both
              extremes: overcommitting to slow keg rollouts too early, or staying jar-only after premium
              conversion opportunities are unlocked.
            </p>
            <p className={P}>
              For deeper tactical examples, review{" "}
              <Link className={LINK} href="/blog/stardew-valley-keg-jar-artisan-profit-system">
                Keg vs Jar Artisan Profit System
              </Link>{" "}
              and <Link className={LINK} href="/blog/keg-vs-jar-quick-answer">the quick-answer version</Link>.
            </p>
          </section>

          <section id="pipeline-design" className={CARD}>
            <h2 className={H2}>Production line architecture: design for flow, not clutter</h2>
            <p className={P}>
              Many players hit a productivity ceiling not because they need more machines, but because
              their machine layout and storage flow create friction. Good architecture shortens cycle time
              between harvest, loading, and sale. Bad architecture hides delay in walking, chest searching,
              and inconsistent refill patterns.
            </p>
            <h3 className={`${H3} mt-6`}>Core architecture principles</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Separate machine clusters by refill cadence to avoid context switching overhead.</li>
              <li>Keep dedicated input and output chests per cluster to prevent mixed-inventory confusion.</li>
              <li>Place high-frequency clusters on shortest travel routes from core farm paths.</li>
              <li>Run weekly cleanup: empty completed output first, then refill in fixed order.</li>
              <li>Expand clusters in modules so each addition preserves route clarity.</li>
            </ol>
            <p className={P}>
              If your empire feels busy but not productive, architecture is usually the problem. One hour
              of route redesign can outperform dozens of extra machines operating in a chaotic layout.
            </p>
            <Callout title="Design heuristic">
              If you cannot explain your refill order in one sentence, your pipeline is already too
              complicated for reliable scaling.
            </Callout>
          </section>

          <section id="oak-resin-bottleneck" className={CARD}>
            <h2 className={H2}>Solving oak resin bottlenecks (the real keg gate)</h2>
            <p className={P}>
              Oak resin is the hidden governor of most artisan empires. Players often do the visible work
              correctly: growing crops, mining ore, collecting wood, planning machine zones. Then expansion
              freezes because resin inflow cannot support projected keg growth. The fix is not {"\""}wait and
              hope{"\""}; it is deliberate resin operations.
            </p>
            <p className={P}>
              Treat resin like strategic inventory, not incidental loot. Plan tapper count against machine
              targets with explicit deadlines. Example: if your next growth wave needs a fixed number of
              kegs, back-calculate required resin cycles and ensure oak network capacity exists before the
              target window. This transforms resin from random constraint into scheduled throughput.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Resin stage</th>
                    <th className="px-3 py-2">Action plan</th>
                    <th className="px-3 py-2">Success target</th>
                    <th className="px-3 py-2">Risk if ignored</th>
                  </tr>
                </thead>
                <tbody>
                  {RESIN_PLAN_ROWS.map((row, index) => (
                    <tr
                      key={row.phase}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.phase}</td>
                      <td className="px-3 py-3">{row.action}</td>
                      <td className="px-3 py-3">{row.target}</td>
                      <td className="px-3 py-3">{row.failureMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className={`${H3} mt-6`}>Practical resin playbook</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Build tapper zones in protected, low-interference farm areas.</li>
              <li className={LI}>Harvest resin on schedule and route it immediately to expansion chest.</li>
              <li className={LI}>Tie each keg wave to confirmed resin stock, not optimistic forecasts.</li>
              <li className={LI}>Maintain tree replacement cadence so future resin throughput is stable.</li>
            </ul>
            <p className={P}>
              Resin control is where many players transition from {"\""}good artisan setup{"\""} to true empire
              execution.
            </p>
          </section>

          <section id="scaling-stages" className={CARD}>
            <h2 className={H2}>Beginner to master scaling stages</h2>
            <p className={P}>
              Scale should be staged. Jumping directly to advanced architecture with beginner inputs usually
              produces brittle systems. The table below outlines a proven maturity path.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Stage</th>
                    <th className="px-3 py-2">Primary objective</th>
                    <th className="px-3 py-2">Machine mix</th>
                    <th className="px-3 py-2">Control metric</th>
                  </tr>
                </thead>
                <tbody>
                  {STAGE_ROWS.map((row, index) => (
                    <tr
                      key={row.stage}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.stage}</td>
                      <td className="px-3 py-3">{row.objective}</td>
                      <td className="px-3 py-3">{row.machineMix}</td>
                      <td className="px-3 py-3">{row.controlMetric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className={`${H3} mt-6`}>Stage transition signals</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Transition to intermediate when machine uptime is stable and seed cycles are safe.</li>
              <li className={LI}>Transition to advanced when resin and bar pipelines are no longer reactive.</li>
              <li className={LI}>Delay transition if backlog volatility remains high for multiple weeks.</li>
            </ul>
            <p className={P}>
              Scaling at the right moment protects both ROI and sanity.
            </p>
          </section>

          <section id="roi-machine-day" className={CARD}>
            <h2 className={H2}>Machine-day ROI framework (the empire math that matters)</h2>
            <p className={P}>
              Empire decisions should be compared by machine-day value and cycle reliability, not isolated
              sell-price headlines. A product with higher per-item margin can still underperform if it
              causes slower conversion and larger backlogs. Likewise, faster-turnover lines can create
              superior realized value when they keep capacity active and liquidity healthy.
            </p>
            <p className={P}>
              Use this three-step evaluation:
            </p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Measure weekly input volume per crop category.</li>
              <li>Estimate required machine-days for each conversion option.</li>
              <li>Compare realized weekly gold under your actual refill reliability.</li>
            </ol>
            <p className={P}>
              If your refill reliability is less than perfect, adjust expected output downward. This is
              critical. Theoretical models assume perfect timing; empires are built on realistic timing.
            </p>
            <Callout title="ROI trigger">
              Add capacity when backlog age rises across two consecutive cycles and machine uptime remains
              high. If backlog is stable and machines are idle, improve input routing first.
            </Callout>
          </section>

          <section id="weekly-operations" className={CARD}>
            <h2 className={H2}>Weekly operations and empire checklist</h2>
            <p className={P}>
              Strategy is only durable when it becomes routine. The checklist below keeps growth deliberate
              and prevents quiet drift.
            </p>
            <h3 className={`${H3} mt-6`}>Weekly artisan checklist</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Harvest and route all artisan inputs by lane before machine refill.</li>
              <li className={LI}>Refill machines in fixed order (high value first, then support lanes).</li>
              <li className={LI}>Audit resin/ore/coal status against next expansion wave.</li>
              <li className={LI}>Clear completed outputs immediately to keep visibility clean.</li>
              <li className={LI}>Review cash buffer before committing to major purchases.</li>
              <li className={LI}>Recheck crop plan in the calculator if season/day context changed.</li>
            </ul>
            <h3 className={`${H3} mt-6`}>Monthly empire review</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Compare forecasted vs realized artisan output value.</li>
              <li>Identify where delays occurred: input, machine, routing, or material supply.</li>
              <li>Promote one bottleneck to top priority for the next month.</li>
              <li>Adjust machine ratio only after diagnosing root cause clearly.</li>
            </ol>
            <p className={P}>
              This rhythm creates compounding control. Small weekly corrections prevent large seasonal
              failures.
            </p>
          </section>

          <section id="mega-scale-strategy" className={CARD}>
            <h2 className={H2}>Mega-scale strategy without chaos</h2>
            <p className={P}>
              At large scale, the challenge shifts from choosing good machines to managing complexity.
              Every expansion wave increases coordination cost. If structure does not evolve, the empire
              eventually collapses under its own logistics.
            </p>
            <h3 className={`${H3} mt-6`}>How advanced players avoid complexity failure</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Expand in modules with clear ownership and refill routines.</li>
              <li className={LI}>Standardize chest naming/color coding per pipeline lane.</li>
              <li className={LI}>Use mirrored layouts for repetitive zones to reduce cognitive load.</li>
              <li className={LI}>Separate strategic planning sessions from execution sessions.</li>
              <li className={LI}>Document bottlenecks and decisions in simple notes for continuity.</li>
            </ul>
            <p className={P}>
              Mega-scale success is operational clarity, not maximum object count. When your system is
              understandable, growth remains smooth.
            </p>
            <p className={P}>
              If your empire includes greenhouse specialization, align this section with{" "}
              <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>
              . If seasonal crop lanes are still unstable, revisit{" "}
              <Link className={LINK} href="/blog/best-crops-year-1">Best Crops Year 1</Link>{" "}
              and <Link className={LINK} href="/blog/best-crops-every-season">Best Crops Every Season</Link>.
            </p>
          </section>


          <section id="expansion-case-studies" className={CARD}>
            <h2 className={H2}>Expansion case studies and playbooks</h2>
            <p className={P}>
              Theory is useful, but execution improves fastest when you see complete scenarios. The three
              playbooks below represent common artisan empire situations. Each playbook includes goals,
              sequencing logic, and failure-prevention checks. Use the closest match as your baseline,
              then adapt by bottleneck.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Case A: Early-to-mid farm with unstable cash flow</h3>
            <p className={P}>
              In this scenario, the farm has enough crop volume to justify processing, but seed liquidity
              is fragile. Players often over-invest in slow conversion lines and run short on operating
              cash. The better approach is mixed pacing: maintain a jar-heavy lane for faster turnover,
              introduce selective keg lanes for high-value inputs, and protect a strict seed reserve.
              Expansion speed is secondary to financial stability.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Primary objective: survive every planting window without emergency sell-offs.</li>
              <li className={LI}>Machine mix: 60-70% fast-turnover lanes, 30-40% premium conversion lanes.</li>
              <li className={LI}>Control metric: minimum cash reserve that always covers next seed cycle.</li>
              <li className={LI}>Common failure: converting too much inventory and freezing working capital.</li>
            </ul>
            <p className={P}>
              Practical sequence for this case: first stabilize cash buffer, then optimize routing, then
              add capacity in small waves. If weekly cash stress remains high, hold expansion and improve
              cycle reliability. This may feel slower, but it avoids repeated resets and usually compounds
              faster over a full season.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Case B: Midgame farm with strong crops but severe resin constraints</h3>
            <p className={P}>
              Here, input supply is healthy and players want to transition toward keg-heavy value capture,
              but resin bottlenecks delay every machine plan. The worst response is random keg crafting as
              resin appears. That pattern fragments architecture and creates uneven lanes. Instead, adopt
              wave planning: define keg wave size, secure required resin inventory, craft in batch, then
              integrate the wave into a prepared cluster.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Primary objective: remove unpredictability from keg expansion.</li>
              <li className={LI}>Machine mix: preserve jar support while resin pipeline matures.</li>
              <li className={LI}>Control metric: resin lead time relative to planned expansion waves.</li>
              <li className={LI}>Common failure: scaling crop volume before conversion capacity is real.</li>
            </ul>
            <p className={P}>
              Strong implementation pattern: run a fixed weekly resin audit, project two wave targets
              ahead, and lock tree/tapper maintenance into routine operations. When resin becomes
              predictable, keg growth stops feeling bottlenecked and starts feeling strategic.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Case C: Late-style farm with high capacity but rising complexity debt</h3>
            <p className={P}>
              At higher scale, most output issues come from complexity rather than raw capacity. Machines
              exist, inputs exist, and profits are high, but the system is fragile: missed refills,
              forgotten outputs, confused storage, and difficult troubleshooting. The solution is
              standardization. Convert ad-hoc growth into modular architecture, enforce naming conventions,
              and separate strategic planning from operational execution windows.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Primary objective: improve reliability while maintaining high throughput.</li>
              <li className={LI}>Machine mix: keep core premium lanes, simplify edge-case side pipelines.</li>
              <li className={LI}>Control metric: cycle completion consistency across multiple weeks.</li>
              <li className={LI}>Common failure: adding novelty lanes faster than team-of-one operations can handle.</li>
            </ul>
            <p className={P}>
              A practical late-scale correction: freeze expansion for one cycle, document pipeline states,
              remove non-essential complexity, and re-launch with standardized modules. This reset often
              increases realized value even without adding a single new machine.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Cross-case optimization checklist</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5c4033]/95 sm:text-base">
              <li>Define the current bottleneck using measurable signals, not intuition.</li>
              <li>Choose one-week interventions that directly target that bottleneck.</li>
              <li>Measure realized outcome and decide: scale, hold, or redesign.</li>
              <li>Only then introduce additional machine complexity.</li>
            </ol>
            <p className={P}>
              This iterative discipline keeps empire growth resilient through changing seasons, new
              unlocks, and evolving farm layouts. It is also the fastest way to build decision confidence,
              because each cycle teaches you which assumptions were valid.
            </p>
            <Callout title="Case-study rule">
              Never copy another farm{String.fromCharCode(39)}s final layout without copying its process discipline. Layouts are
              artifacts; routines are the real engine.
            </Callout>
          </section>


          <section id="implementation-blueprint" className={CARD}>
            <h2 className={H2}>90-day implementation blueprint (from stable to dominant)</h2>
            <p className={P}>
              Players often ask how to turn these concepts into a concrete timeline. The 90-day blueprint
              below is built for progression, not perfection. It assumes you will hit disruptions and
              therefore emphasizes checkpoints, buffers, and fallback options instead of rigid scripts.
              Use it as a rolling operating plan.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Days 1-30: stabilization and architecture baseline</h3>
            <p className={P}>
              Focus first on predictable operations. Build a clear lane for input collection, conversion,
              and sale. Do not chase max capacity yet. Instead, remove friction points: unclear chest
              routing, inconsistent refill order, and missing material awareness. During this phase, your
              top KPI is routine completion quality. If your weekly loop is unreliable, extra capacity will
              magnify errors rather than profits.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Set one default refill sequence and keep it unchanged for two weeks.</li>
              <li className={LI}>Create explicit seed and expansion cash buffers.</li>
              <li className={LI}>Start resin forecasting even if keg plans are still small.</li>
              <li className={LI}>Measure backlog age; treat rapidly aging inventory as a warning signal.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Days 31-60: controlled expansion waves</h3>
            <p className={P}>
              Once baseline execution is stable, begin modular growth. Add capacity in waves tied to
              confirmed material supply and proven workflow readiness. Each wave should have a pre-check
              and post-check. Pre-check: do you have resin, bars, and route capacity? Post-check: did
              realized weekly output increase without destabilizing operations? If not, diagnose before
              adding another wave.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Expand machines in planned increments, not random bursts.</li>
              <li className={LI}>Keep jar support lines active while keg-heavy lanes mature.</li>
              <li className={LI}>Review crop input plan weekly to avoid overfeeding weak conversion zones.</li>
              <li className={LI}>Update calculator assumptions whenever crop mix or profession context shifts.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e] sm:text-xl">Days 61-90: optimization and resilience hardening</h3>
            <p className={P}>
              Final phase is about resilience. At this point, the empire should generate strong value, but
              sustainability depends on your ability to handle variance: missed sessions, uneven harvests,
              or temporary material shocks. Build protective mechanisms now. Standardize module templates,
              keep emergency liquidity, and document key operating decisions so recovery is fast when plans
              drift.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Introduce mirrored cluster layouts to reduce mental switching cost.</li>
              <li className={LI}>Set explicit triggers for pausing expansion when stability drops.</li>
              <li className={LI}>Audit complexity monthly and remove low-yield side pipelines.</li>
              <li className={LI}>Benchmark realized value growth against previous 30-day windows.</li>
            </ul>
            <p className={P}>
              A 90-day plan works because it sequences effort: stabilize first, scale second, optimize
              third. Reversing this order is the reason many artisan projects feel powerful for one season
              and chaotic the next.
            </p>
            <Callout title="Blueprint success criterion">
              Success is not owning the most machines. Success is maintaining high realized output through
              routine reliability, controlled expansion, and rapid bottleneck response.
            </Callout>
          </section>

          <section id="mistakes" className={CARD}>
            <h2 className={H2}>Common empire-killing mistakes</h2>
            <h3 className={`${H3} mt-4`}>Mistake 1: Building machines without input guarantees</h3>
            <p className={P}>
              Idle machines are expensive illusions of progress. Always pair machine expansion with input
              reliability and workflow readiness.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 2: Ignoring resin forecast before keg waves</h3>
            <p className={P}>
              Partial keg expansions caused by resin shortages waste planning effort and delay ROI.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 3: Over-optimizing per-item value while cash flow breaks</h3>
            <p className={P}>
              High margins are irrelevant if you cannot fund seed cycles or critical upgrades.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 4: Expanding complexity faster than routine maturity</h3>
            <p className={P}>
              If your team is one player, process complexity has a hard limit. Scale only what you can run
              repeatedly without errors.
            </p>
            <h3 className={`${H3} mt-6`}>Mistake 5: Skipping weekly reviews</h3>
            <p className={P}>
              Drift compounds silently. Weekly review is the cheapest insurance against strategic decay.
            </p>
            <p className={P}>
              For a focused beginner error list, see{" "}
              <Link className={LINK} href="/blog/beginner-mistakes-losing-money">
                beginner mistakes losing money
              </Link>
              .
            </p>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ: Artisan Goods Empire</h2>
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
            <h2 className={H2}>Execution starting point</h2>
            <p className={P}>
              Run your current farm through the <Link className={LINK} href="/calculator">calculator</Link>,
              identify your top bottleneck, then implement one pipeline improvement this week: resin,
              routing, or machine ratio. Compounding starts with consistent execution, not perfect planning.
            </p>
          </section>

          <BlogReadNext
            posts={readNextPosts}
            currentSlug="artisan-goods-empire-beginner-to-master"
          />
        </article>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
