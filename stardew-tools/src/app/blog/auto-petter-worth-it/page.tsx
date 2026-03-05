import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-28T00:00:00+08:00",
    modifiedTime: "2026-02-28T00:00:00+08:00",
  },
  title: "Is the Auto-Petter Worth It in Stardew Valley? (Profit Analysis) | Stardew Profit",
  description:
    "Auto-petter Stardew Valley: is the Auto-Petter worth it? A practical profit analysis vs petting animals by hand, with ROI and when to buy one.",
  alternates: {
    canonical: "https://www.stardewprofit.com/blog/auto-petter-worth-it",
  },
  keywords: [
    "auto-petter stardew valley",
    "is auto-petter worth it",
    "auto-petter vs petting animals",
    "animal friendship",
    "barn coop profit",
  ],
};

const faqEn = [
  {
    question: "Is the Auto-Petter worth it in Stardew Valley?",
    answer:
      "Usually yes for mid/late game barns and coops (12+ animals) when time is the real bottleneck. If you only have a few animals or you want max hearts ASAP, manual petting is better.",
  },
  {
    question: "Does the Auto-Petter replace petting animals by hand?",
    answer:
      "Not completely. It provides automatic daily friendship, but manual petting is still faster for reaching full hearts. Think of the Auto-Petter as time insurance, not a strict upgrade.",
  },
  {
    question: "How do you get the Auto-Petter?",
    answer:
      "If you go the JojaMart route, you can buy it for 50,000g. If you complete the Community Center, you typically get it as a rare drop from Skull Cavern treasure rooms.",
  },
  {
    question: "Does higher friendship increase profit?",
    answer:
      "Yes. Higher friendship improves product quality (more large eggs/milk and higher quality items), which increases sell price. The gain is real, but the big question is whether the time you save creates more gold elsewhere.",
  },
];

const faqZh = [
  {
    question: "自动抚摸机（Auto-Petter）到底值不值得买？",
    answer:
      "一般来说：中后期、动物数量多（12+）时更值得，因为你省下的是时间；如果只有少量动物或想最快满心，手动抚摸更划算。",
  },
  {
    question: "Auto-Petter 能完全替代手动抚摸吗？",
    answer:
      "不能完全替代。它能自动提供每日友好度，但手动抚摸提升更快。可以把它理解为“省时间的保险”。",
  },
  {
    question: "Auto-Petter 怎么获得？",
    answer:
      "走 Joja 路线可直接花 50,000g 购买；走社区中心路线通常只能在骷髅洞穴（Skull Cavern）的宝箱房间稀有掉落。",
  },
  {
    question: "动物友好度提升真的会让你更赚钱吗？",
    answer:
      "会。友好度越高，产物质量和大件产出（大蛋/大奶等）更稳定，售价更高。但关键在于：省下的时间能否去做更高回报的事。",
  },
];

export default function AutoPetterWorthItPage() {
  const fromPath = "/blog/auto-petter-worth-it";
  const readNextPosts = getBlogReadNextPosts("auto-petter-worth-it", 3);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 18%, rgba(255,255,255,0.22) 0 4%, transparent 5%), radial-gradient(circle at 82% 22%, rgba(255,255,255,0.18) 0 3%, transparent 4%), radial-gradient(circle at 45% 80%, rgba(255,255,255,0.16) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
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
            { name: "Auto-Petter" },
          ]}
        />

        <FaqJsonLd faqs={[...faqEn, ...faqZh]} />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Ranching + Time Efficiency
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Is the Auto-Petter Worth It in Stardew Valley?
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              The Auto-Petter is worth it <strong>when your limiting resource is time</strong>—usually
              mid/late game, with big barns/coops, and a daily schedule packed with Skull Cavern,
              Ginger Island, or processing chains.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              But it&apos;s not always a slam dunk. If you&apos;re early game and gold is tight, or you only
              keep a few animals, the 50,000g price tag (or the grind to find one) can delay more
              profitable upgrades.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="calculator_header"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  9ee
                </span>
                Open the Stardew Profit Calculator
              </TrackedBlogCtaLink>

              <Link
                href="/blog/artisan-vs-tiller-quick-answer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Artisan vs Tiller (quick answer)
              </Link>

              <Link
                href="/blog/beginner-mistakes-losing-money"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Beginner mistakes losing you money
              </Link>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">What the Auto-Petter does (and what it doesn&apos;t)</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              In plain terms, the Auto-Petter gives your barn or coop a background “daily petting”
              effect. It increases animal friendship automatically, so you don&apos;t have to run around
              clicking every animal every morning.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">It helps with</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5f4228]/90">
                  <li>Passive daily friendship gain (even if you skip manual petting).</li>
                  <li>Consistency when you&apos;re busy: mines, skull cavern, island, festivals.</li>
                  <li>Scaling ranching: the bigger your animal count, the more minutes you save.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">It does NOT do</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#5f4228]/90">
                  <li>It doesn&apos;t instantly max hearts; manual petting reaches full hearts faster.</li>
                  <li>It doesn&apos;t replace feeding or letting animals eat grass.</li>
                  <li>It doesn&apos;t turn ranching into the best money maker by itself.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                <span className="font-semibold text-[#8a2b1f]">How to get it:</span> JojaMart route
                lets you buy the Auto-Petter for <strong>50,000g</strong>. Community Center route:
                it&apos;s typically a rare drop from <strong>Skull Cavern treasure rooms</strong>.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Profit analysis: Auto-Petter vs petting animals by hand</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              The key question isn&apos;t “does it increase friendship?” (it does). The real question is:
              <strong> is buying time worth 50,000g</strong>?
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Cost (gold)</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Joja purchase price: <strong>50,000g</strong>. If you find it in Skull Cavern, the gold
                  cost is “free” but the opportunity cost is your time/runs.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Cost (time)</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Manual petting scales with animal count. Petting <strong>12 animals</strong> can easily
                  take 450 seconds depending on building layout and pathing.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Return</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Higher friendship means better product quality and more large products. That&apos;s
                  extra gold per day, which shortens payback.
                </p>
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">1) Time cost: how many minutes are you buying back?</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              A practical way to think about the Auto-Petter is minutes saved per day. If you have
              one barn and one coop, manual petting can be manageable. If you have multiple deluxe
              buildings, it becomes a daily tax.
            </p>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                <span className="font-semibold text-[#1f6b2e]">Rule of thumb:</span> If manual petting
                takes you <strong>60+ in-game minutes</strong> per day, the Auto-Petter is no longer a
                luxury—it&apos;s a productivity upgrade.
              </p>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">2) Friendship quality = more profit</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Friendship affects product quality. Better quality items sell for more, and animals at
              higher hearts are more likely to produce large milk/eggs, which then process into more
              valuable artisan goods.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              That said, ranching profit is often capped by your processing capacity (cheese presses,
              mayo machines) and your daily schedule. If you have spare time, manual petting can be
              both free and faster.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="calculator_profit_analysis_1"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Compare farming profit (what you could do with that time)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="calculator_profit_analysis_2"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Greenhouse optimizer (time-to-gold benchmark)
              </TrackedBlogCtaLink>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">3) Friendship speed: Auto-Petter is slower than manual</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              If you care about “how fast can I get full hearts?”, manual petting wins. The Auto-Petter
              is designed for players who want consistency on days when they don&apos;t want to manage
              animals.
            </p>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                <span className="font-semibold text-[#8a2b1f]">Takeaway:</span> Auto-Petter improves
                your average friendship over time, but the fastest heart-building path is still:
                <strong> pet daily + keep animals fed + let them eat grass</strong>.
              </p>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">4) ROI (payback) math you can actually use</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              The Auto-Petter pays back in two ways:
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-[#5f4228]/90">
              <li>
                <strong>Direct gold:</strong> slightly higher average product quality / large products.
              </li>
              <li>
                <strong>Indirect gold:</strong> time saved that you convert into higher-return actions.
              </li>
            </ol>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                <span className="font-semibold text-[#1f6b2e]">Simple payback formula:</span>
                <span className="ml-1">
                  Payback days = 50,000g / (extra gold per day from better animal products + value of time saved).
                </span>
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                If you save 60 in-game minutes daily and that time yields even 2,000g/day in extra progress (cavern runs, farming optimization, artisan processing),
                the payback can be under a season.
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              If you&apos;re unsure what “your time is worth,” use the calculator to benchmark your
              farm plans. It makes the decision less emotional and more math.
            </p>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="calculator_profit_analysis_3"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Use the calculator to value your time
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">When the Auto-Petter is worth it</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">You run 12+ animals</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  One full deluxe building already pushes petting into real time. Multiple buildings
                  makes it a daily chore.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Your schedule is packed</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  If you regularly skip petting because you&apos;re busy, the Auto-Petter prevents your
                  animals from falling behind.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">You got it “free”</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Finding one in Skull Cavern treasure rooms is one of the best quality-of-life wins
                  in the game.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">When it&apos;s NOT worth it</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Early game (gold is tight)</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  50,000g might be better spent on seeds, tool upgrades, sprinklers, or processing
                  machines.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Small ranch (&lt;6 animals)</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Petting a few animals is fast, and manual petting keeps hearts climbing quickly.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">You want max hearts ASAP</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Manual petting (plus grass + consistent feeding) is still the fastest route to full
                  hearts.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Pro tips (practical)</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Tip 1: Use grass to keep hearts climbing</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Even with an Auto-Petter, animals that eat grass tend to stay happier. Plant grass
                  starters in protected spots and keep silos filled.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Tip 2: Buy it only after your core upgrades</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  If 50,000g delays sprinklers or artisan processing, you might lose far more than you
                  gain. Lock in your profit engine first.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Tip 3: Put it where you always forget</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  If you have multiple buildings, prioritize the one you skip most often (usually the
                  coop, because it feels lower value).
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Tip 4: If you found it in Skull Cavern, treat it as a win</p>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Free Auto-Petter means you get the time benefit without the gold drain. In that
                  case, the only question is placement.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                Want to compare ranching returns against crops? Use the calculator to see how fast
                your current plan prints gold, then decide whether your mornings should be spent
                on animals or on expanding your highest-profit chain.
              </p>
              <div className="mt-3">
                <TrackedBlogCtaLink
                  href="/calculator"
                  fromPath={fromPath}
                  ctaName="calculator_pro_tips"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
                >
                  Run your numbers in the calculator
                </TrackedBlogCtaLink>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ (EN)</h2>
            <div className="mt-3 space-y-4">
              {faqEn.map((item) => (
                <div key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <p className="text-sm font-semibold text-[#4a321e]">{item.question}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">常见问题（中文）</h2>
            <div className="mt-3 space-y-4">
              {faqZh.map((item) => (
                <div key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <p className="text-sm font-semibold text-[#4a321e]">{item.question}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Read next</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              If you&apos;re optimizing your farm for profit, these two posts pair well with the
              Auto-Petter decision:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/blog/keg-vs-jar-profit-guide"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Keg vs Jar (profit guide)
              </Link>
              <Link
                href="/blog/artisan-vs-tiller-quick-answer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Artisan vs Tiller (quick answer)
              </Link>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="auto-petter-worth-it" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
