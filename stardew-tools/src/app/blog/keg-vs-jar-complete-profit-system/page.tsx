import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { SiteFooter } from "@/components/SiteFooter";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { getBlogReadNextPosts } from "@/lib/read-next";

const SITE_URL = "https://www.stardewprofit.com";

const publishedTime = "2026-03-09T00:00:00.000Z";
const modifiedTime = "2026-03-09T00:00:00.000Z";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime,
    modifiedTime,
  },
  title:
    "Keg vs Jar (Stardew Valley): The Complete Profit System + Best Use Cases (2026)",
  description:
    "A complete, practical Keg vs Jar guide for Stardew Valley: which makes more gold, when each wins, how to build a processing pipeline, and what to process first—plus calculators and FAQs.",
  keywords: [
    "stardew valley keg vs jar",
    "keg vs preserves jar",
    "keg vs jar profit",
    "best artisan goods stardew valley",
    "stardew valley wine vs juice",
    "stardew valley jelly vs pickles",
    "how many kegs do i need",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/keg-vs-jar-complete-profit-system`,
  },
};

const toc = [
  { id: "decision-fast", label: "Keg vs Jar (Fast Decision Rules)" },
  { id: "what-they-do", label: "What Kegs and Preserves Jars Actually Do" },
  { id: "profit-math", label: "The Profit Math (Simple Formulas You Can Reuse)" },
  { id: "when-keg-wins", label: "When Kegs Win (and Why)" },
  { id: "when-jar-wins", label: "When Jars Win (and Why)" },
  { id: "crop-playbook", label: "Crop Playbook: What to Process First (By Game Stage)" },
  { id: "pipeline", label: "Build an Artisan Pipeline That Never Stalls" },
  { id: "capacity", label: "How Many Kegs/Jars Do You Need? (Capacity Planning)" },
  { id: "mistakes", label: "Common Mistakes That Make You Feel ‘Behind’" },
  { id: "faq", label: "FAQ" },
];

const faqEn = [
  {
    question: "Keg vs Jar: which makes more money in Stardew Valley?",
    answer:
      "In total profit per item, Kegs usually win for high-value fruits (especially Starfruit and Ancient Fruit) because wine scales hard. But Jars often win in early/mid game because they are cheaper to build, finish faster, and keep your pipeline moving when you have limited machines.",
  },
  {
    question: "Should I put vegetables in kegs or jars?",
    answer:
      "Most vegetables belong in preserves jars (pickles) because jar value is a fixed multiplier + bonus, and many vegetables do not become high-value keg outputs. Kegs are typically better reserved for top-tier fruits and a few special cases.",
  },
  {
    question: "Is it ever correct to sell crops raw instead of processing?",
    answer:
      "Yes. If your harvest volume is higher than your machine capacity, selling overflow raw is often optimal. A stalled pipeline (crops sitting in chests for weeks) is effectively lost money compared to raw shipping today.",
  },
  {
    question: "How do I decide what goes into the next available keg?",
    answer:
      "Use a simple priority: highest value fruit first (Starfruit/Ancient Fruit), then other fruits, then anything else. If you’re short on time, prefer fewer high-impact reloads rather than micromanaging every crop.",
  },
  {
    question: "Do Artisan and Tiller professions change the keg vs jar answer?",
    answer:
      "Yes. Artisan (+40% artisan goods) makes both kegs and jars stronger, but it especially amplifies the late-game wine pipeline. If you plan to process heavily, Artisan is usually the best money profession.",
  },
];

const faqZh = [
  {
    question: "啤酒桶和罐头瓶到底哪个更赚？",
    answer:
      "单件商品的总利润上，啤酒桶（酒/果汁）往往更强，尤其是杨桃/远古水果这类高价值水果。但在前中期，罐头瓶更便宜、更快、更容易把产线跑起来——很多玩家的真实瓶颈是“机器数量”和“换料频率”。",
  },
  {
    question: "蔬菜应该进啤酒桶还是罐头瓶？",
    answer:
      "大多数蔬菜更适合进罐头瓶做腌菜，因为罐头瓶的收益结构对中低价值作物更友好；啤酒桶更适合留给高价值水果做酒。",
  },
  {
    question: "不加工直接卖原材料是不是亏？",
    answer:
      "不一定。你的收成如果远大于加工产能，卖掉一部分原材料反而更赚（至少更早变现）。把作物堆在箱子里等机器，等于资金被锁住。",
  },
  {
    question: "怎么决定下一桶酒该放什么？",
    answer:
      "优先级很简单：高价值水果（杨桃/远古水果）＞其他水果＞其他。时间紧就别追求每一个格子最优，追求“产线不断”。",
  },
];

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function Toc() {
  return (
    <nav className="rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff8e8]/90 p-5 shadow-[0_10px_24px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/10 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">
        Table of contents
      </p>
      <ol className="mt-3 space-y-2 text-sm text-[#5f4228]/95 sm:text-base">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-[#1f6b2e] underline decoration-[#1f6b2e]/25 underline-offset-4 hover:decoration-[#1f6b2e]/60"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function InlineCallout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#8a5b3a]/30 bg-[#fff2c8]/70 p-4">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, idx) => (
        <li key={idx} className="text-[#5f4228]/95">
          {item}
        </li>
      ))}
    </ul>
  );
}

function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5"
          >
            <summary className="cursor-pointer list-none font-semibold text-[#4a321e]">
              <span className="group-open:underline">{item.question}</span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function KegVsJarCompleteProfitSystemPage() {
  const fromPath = "/blog/keg-vs-jar-complete-profit-system";
  const readNextPosts = getBlogReadNextPosts(
    "keg-vs-jar-complete-profit-system",
    3,
  );

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 14%, rgba(255,255,255,0.23) 0 4%, transparent 5%), radial-gradient(circle at 86% 22%, rgba(255,255,255,0.18) 0 3%, transparent 4%), radial-gradient(circle at 22% 72%, rgba(255,255,255,0.12) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Keg vs Jar" },
          ]}
        />

        <FaqJsonLd faqs={[...faqEn, ...faqZh]} />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Artisan processing pillar (2026)
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Keg vs Jar (Stardew Valley): The Complete Profit System
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              “Keg vs Preserves Jar” sounds like a single question, but the real problem is a system problem: what to
              process, when to process it, and how to keep your artisan line from stalling. This pillar guide gives you
              decision rules that work in real saves—Year 1, greenhouse era, and late-game wine empires.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="kvj_pillar_cta_keg_vs_jar"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                <span
                  aria-hidden
                  className="inline-flex items-center leading-none opacity-85"
                >
                  🧮
                </span>
                Open Keg vs Jar Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="kvj_pillar_cta_main_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Open Profit Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog/how-many-kegs-do-i-need-quick-answer"
                fromPath={fromPath}
                ctaName="kvj_pillar_cta_kegs_needed"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                How Many Kegs Do I Need?
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog/stardew-valley-artisan-profit-guide"
                fromPath={fromPath}
                ctaName="kvj_pillar_cta_artisan_guide"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Artisan Profit Guide
              </TrackedBlogCtaLink>
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">
                Quick answer (decide in 30 seconds)
              </p>
              <div className="mt-2 grid gap-2 text-sm text-[#5f4228]/90 sm:grid-cols-2">
                <p>
                  <span className="font-semibold text-[#1f6b2e]">
                    If it’s a top fruit:
                  </span>{" "}
                  Keg (wine) first.
                </p>
                <p>
                  <span className="font-semibold text-[#1f6b2e]">
                    If it’s a vegetable:
                  </span>{" "}
                  Jar (pickles) first.
                </p>
                <p>
                  <span className="font-semibold text-[#1f6b2e]">
                    If you’re short on machines:
                  </span>{" "}
                  Don’t hoard—sell overflow raw.
                </p>
                <p>
                  <span className="font-semibold text-[#1f6b2e]">
                    If you’re short on time:
                  </span>{" "}
                  Fewer reloads beats perfect math.
                </p>
              </div>
            </div>
          </header>

          <Toc />

          <Card title="Keg vs Jar (Fast Decision Rules)">
            <div id="decision-fast" className="space-y-4">
              <p>
                Most players get stuck because they treat this as a one-number question. In reality, you’re optimizing a
                pipeline with three constraints: <strong>machine count</strong>, <strong>reload time</strong>, and{" "}
                <strong>crop rhythm</strong>.
              </p>

              <InlineCallout title="Rule #1: Don’t let the line stall">
                <p>
                  If crops are sitting in chests for weeks waiting for machines, you’re not “saving money”—you’re losing
                  money. A smaller, steady pipeline beats a perfect pipeline you can’t keep up with.
                </p>
              </InlineCallout>

              <BulletList
                items={[
                  <>
                    <strong>High-value fruits</strong> (Starfruit, Ancient Fruit): prioritize <strong>Kegs</strong>.
                  </>,
                  <>
                    <strong>Most vegetables</strong>: prioritize <strong>Preserves Jars</strong>.
                  </>,
                  <>
                    <strong>If you have few machines</strong>: process the best items and ship the rest raw.
                  </>,
                  <>
                    <strong>If you have many machines but little time</strong>: prefer longer cycles (kegs) so you reload less
                    often.
                  </>,
                  <>
                    <strong>If you want fast cash</strong>: jars pay out sooner; kegs pay out bigger.
                  </>,
                ]}
              />
            </div>
          </Card>

          <Card title="What Kegs and Preserves Jars Actually Do">
            <div id="what-they-do" className="space-y-4">
              <p>
                Kegs and jars are not just “profit multipliers”—they are time machines. They convert an item today into a
                better item later, and that delay is the cost.
              </p>

              <InlineCallout title="Mental model: you are buying profit with time">
                <p>
                  A keg ties up both the machine and the crop for longer. A jar ties it up for less time. If your farm
                  produces more crops than your machines can handle, the best move is to pick a priority queue and let the
                  rest go.
                </p>
              </InlineCallout>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5">
                  <h3 className="text-base font-semibold text-[#4a321e]">Kegs are best at…</h3>
                  <BulletList
                    items={[
                      <>turning <strong>premium fruit</strong> into <strong>wine</strong> (huge late-game scaling)</>,
                      <>reducing “reload chores” because cycles are longer</>,
                      <>benefiting massively from <strong>Artisan</strong> (+40%)</>,
                    ]}
                  />
                </div>
                <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5">
                  <h3 className="text-base font-semibold text-[#4a321e]">Jars are best at…</h3>
                  <BulletList
                    items={[
                      <>making <strong>good money early</strong> with low craft cost</>,
                      <>processing <strong>vegetables</strong> efficiently</>,
                      <>keeping cashflow steady thanks to shorter turnaround</>,
                    ]}
                  />
                </div>
              </div>

              <p>
                If you want to compare your exact crop, your professions, and your current day/season constraints, open:
              </p>
              <BulletList
                items={[
                  <>
                    <Link className="text-[#1f6b2e] underline" href="/calculator?preset=keg-vs-jar-starfruit">
                      Keg vs Jar preset
                    </Link>{" "}
                    (quick comparisons)
                  </>,
                  <>
                    <Link className="text-[#1f6b2e] underline" href="/calculator">
                      Profit Calculator
                    </Link>{" "}
                    (full crop planning)
                  </>,
                  <>
                    <Link className="text-[#1f6b2e] underline" href="/blog/how-many-kegs-do-i-need-quick-answer">
                      How many kegs do I need?
                    </Link>{" "}
                    (capacity intuition)
                  </>,
                ]}
              />
            </div>
          </Card>

          <Card title="The Profit Math (Simple Formulas You Can Reuse)">
            <div id="profit-math" className="space-y-4">
              <p>
                You don’t need spreadsheets to make good decisions. You need two numbers: <strong>total profit per item</strong>
                and <strong>profit per day of machine time</strong>.
              </p>

              <InlineCallout title="Two numbers that matter">
                <BulletList
                  items={[
                    <>
                      <strong>Total profit per item</strong> answers: “What should I do if I have plenty of machines?”
                    </>,
                    <>
                      <strong>Profit per day</strong> answers: “What should I do if machines are the bottleneck?”
                    </>,
                  ]}
                />
              </InlineCallout>

              <p>
                In practice, players are usually <strong>machine-limited</strong> (not crop-limited). That’s why the “right”
                answer often changes between early game and late game.
              </p>

              <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5">
                <p className="text-sm font-semibold text-[#4a321e]">Shortcut decision (works surprisingly well)</p>
                <BulletList
                  items={[
                    <>If it’s a <strong>high-value fruit</strong>, treat the keg slot as premium real estate.</>,
                    <>If it’s a <strong>vegetable</strong>, jars are usually the “default” processing lane.</>,
                    <>If you’re drowning in crops, sell overflow raw to keep your gold compounding.</>,
                  ]}
                />
              </div>
            </div>
          </Card>

          <Card title="When Kegs Win (and Why)">
            <div id="when-keg-wins" className="space-y-4">
              <p>
                Kegs dominate when the input crop is already valuable and you can support long processing times. They are a
                late-game scaling tool.
              </p>

              <BulletList
                items={[
                  <>
                    <strong>Starfruit</strong>: each harvest is expensive enough that turning it into wine usually beats nearly
                    everything else.
                  </>,
                  <>
                    <strong>Ancient Fruit</strong>: regrowth creates stable weekly batches—perfect for a steady wine pipeline.
                  </>,
                  <>
                    <strong>When you have Artisan</strong>: the +40% bonus makes wine absurd.
                  </>,
                ]}
              />

              <InlineCallout title="Keg strategy that feels ‘easy’">
                <p>
                  Run a “weekly reload day” for wine crops (especially greenhouse Ancient Fruit). If you only want to touch
                  machines once or twice a week, kegs fit your life.
                </p>
              </InlineCallout>

              <p>
                Related guides you can use next:
              </p>
              <BulletList
                items={[
                  <>
                    <Link className="text-[#1f6b2e] underline" href="/blog/ancient-fruit-vs-starfruit">
                      Ancient Fruit vs Starfruit
                    </Link>
                  </>,
                  <>
                    <Link className="text-[#1f6b2e] underline" href="/blog/stardew-valley-greenhouse-mastery-guide">
                      Greenhouse Mastery Guide
                    </Link>
                  </>,
                ]}
              />
            </div>
          </Card>

          <Card title="When Jars Win (and Why)">
            <div id="when-jar-wins" className="space-y-4">
              <p>
                Jars win in the phase of the game where your farm produces lots of “good but not premium” crops and you want
                cashflow now.
              </p>

              <BulletList
                items={[
                  <>
                    <strong>Early and mid game</strong>: preserves jars are cheaper and easier to scale.
                  </>,
                  <>
                    <strong>Vegetable-heavy seasons</strong>: pickles are often the most practical profit upgrade.
                  </>,
                  <>
                    <strong>When you can reload daily</strong>: shorter cycles can generate great gold/day.
                  </>,
                ]}
              />

              <InlineCallout title="Jar strategy that prints money early">
                <p>
                  In Year 1, a “jar wall” that you can reload every morning often beats a small keg setup because you can
                  afford the jars earlier and they complete faster. Upgrade to kegs once your inputs are premium fruits and
                  your schedule prefers fewer reloads.
                </p>
              </InlineCallout>
            </div>
          </Card>

          <Card title="Crop Playbook: What to Process First (By Game Stage)">
            <div id="crop-playbook" className="space-y-4">
              <p>
                Here’s a practical queue that works in most saves. Think of it as a default “priority list” for your next
                free machine slot.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5">
                  <h3 className="text-base font-semibold text-[#4a321e]">Early game</h3>
                  <BulletList
                    items={[
                      <>Jar vegetables (fast cash)</>,
                      <>Jar berries if you have overflow</>,
                      <>Use kegs sparingly (save oak resin)</>,
                    ]}
                  />
                </div>
                <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5">
                  <h3 className="text-base font-semibold text-[#4a321e]">Mid game</h3>
                  <BulletList
                    items={[
                      <>Start “premium fruit → keg” habit</>,
                      <>Jar your vegetable seasons</>,
                      <>Ship raw overflow to avoid backlog</>,
                    ]}
                  />
                </div>
                <div className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5">
                  <h3 className="text-base font-semibold text-[#4a321e]">Late game</h3>
                  <BulletList
                    items={[
                      <>Keg Starfruit/Ancient Fruit first</>,
                      <>Jars handle tree fruit + overflow</>,
                      <>Optimize reload schedule, not tiles</>,
                    ]}
                  />
                </div>
              </div>

              <p>
                If you want a single best “money framework” beyond just kegs/jars, see:{" "}
                <Link className="text-[#1f6b2e] underline" href="/blog/money-making-guide">
                  Money Making Guide
                </Link>
                .
              </p>
            </div>
          </Card>

          <Card title="Build an Artisan Pipeline That Never Stalls">
            <div id="pipeline" className="space-y-4">
              <p>
                Your goal is to avoid the two failure modes:
              </p>
              <BulletList
                items={[
                  <>
                    <strong>Backlog</strong>: harvest piles up, machines can’t catch up.
                  </>,
                  <>
                    <strong>Idle time</strong>: machines sit empty because you forgot to reload.
                  </>,
                ]}
              />

              <InlineCallout title="The easiest sustainable pipeline">
                <BulletList
                  items={[
                    <>Pick a harvest day (weekly for regrow crops)</>,
                    <>Reload all kegs in one pass</>,
                    <>Reload all jars in another pass (daily or every 2–3 days)</>,
                    <>Keep a chest buffer next to machines</>,
                  ]}
                />
              </InlineCallout>

              <p>
                If you’re building around the greenhouse, link this with:{" "}
                <Link className="text-[#1f6b2e] underline" href="/guides/greenhouse-profit-guide">
                  Greenhouse Profit Guide
                </Link>
                .
              </p>
            </div>
          </Card>

          <Card title="How Many Kegs/Jars Do You Need? (Capacity Planning)">
            <div id="capacity" className="space-y-4">
              <p>
                The point of capacity planning is not to hit a perfect number. It’s to stop the feeling of “I’m always
                behind.”
              </p>

              <InlineCallout title="Rule of thumb">
                <p>
                  If your harvest batch fills machines and still leaves a big chest stack, you’re machine-limited. If
                  machines are often empty, you’re crop-limited or schedule-limited.
                </p>
              </InlineCallout>

              <p>
                For a deeper walkthrough, read:{" "}
                <Link className="text-[#1f6b2e] underline" href="/blog/how-many-kegs-do-i-need-quick-answer">
                  How many kegs do I need?
                </Link>
                .
              </p>
            </div>
          </Card>

          <Card title="Common Mistakes That Make You Feel ‘Behind’">
            <div id="mistakes" className="space-y-4">
              <BulletList
                items={[
                  <>
                    <strong>Hoarding everything</strong>: backlog is the hidden tax that kills compounding.
                  </>,
                  <>
                    <strong>Processing low-value items in kegs</strong>: your keg slots should be premium.
                  </>,
                  <>
                    <strong>Mixing too many rhythms</strong>: daily + weekly + random cycles create chores.
                  </>,
                  <>
                    <strong>Optimizing for “max tiles” instead of “max habit”</strong>: if it’s annoying, you’ll skip it.
                  </>,
                ]}
              />

              <p>
                If you want a calm “full plan” that connects early→mid→late, read:{" "}
                <Link className="text-[#1f6b2e] underline" href="/blog/stardew-valley-profit-guide">
                  Stardew Valley Profit Guide
                </Link>
                .
              </p>
            </div>
          </Card>

          <section id="faq" className="scroll-mt-24" />
          <FaqSection title="FAQ" faqs={[...faqEn, ...faqZh]} />

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff8e8]/90 p-5 shadow-[0_10px_24px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/10 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Next steps (recommended)
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              If you want more gold without feeling like you’re doing chores, do this:
            </p>
            <BulletList
              items={[
                <>
                  Use the <Link className="text-[#1f6b2e] underline" href="/calculator">
                    Profit Calculator
                  </Link>{" "}
                  to pick 1–2 main crops.
                </>,
                <>Build enough jars to keep cashflow stable.</>,
                <>Upgrade to kegs once your input becomes premium fruit and you prefer fewer reloads.</>,
                <>Sell overflow raw whenever backlog starts growing.</>,
              ]}
            />

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="kvj_pillar_bottom_cta_kvj"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                Compare Keg vs Jar
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?profession=artisan"
                fromPath={fromPath}
                ctaName="kvj_pillar_bottom_cta_calc"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Open Profit Calculator
              </TrackedBlogCtaLink>
            </div>
          </section>

          <BlogReadNext posts={readNextPosts} currentSlug="keg-vs-jar-complete-profit-system" />
        </article>

        <SiteFooter />
      </main>
    </div>
  );
}
