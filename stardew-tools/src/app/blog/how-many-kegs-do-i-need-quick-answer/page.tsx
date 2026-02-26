import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "How many kegs do I need for Starfruit wine?",
  "Do I need the same number of kegs for Ancient Fruit and Hops?",
  "Does Artisan profession change keg planning?",
  "What if I cannot craft enough kegs yet?",
  "Is it better to process everything or sell some crops raw?",
  "How do days left in season affect keg count decisions?",
] as const;

const FAQ_ZH = [
  "杨桃酒大概需要多少酒桶？",
  "古代果实和啤酒花需要同样数量的酒桶吗？",
  "Artisan 会改变酒桶规划吗？",
  "前期酒桶做不够怎么办？",
  "是全加工更好，还是部分直接卖更好？",
  "赛季剩余天数会如何影响酒桶数量决策？",
] as const;

export const metadata: Metadata = {
  title: "How Many Kegs Do I Need? (Quick Answer + Profit Calculator)",
  description:
    "Quick keg-count planning guide for Stardew Valley with direct calculator presets. Compare crop chains and decide small, mid, or heavy processing setups.",
};

export default function HowManyKegsDoINeedQuickAnswerPage() {
  const fromPath = "/blog/how-many-kegs-do-i-need-quick-answer";

    const readNextPosts = getBlogReadNextPosts("how-many-kegs-do-i-need-quick-answer", 3);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">How Many Kegs Do I Need?</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">酒桶要做多少才够？一页看懂：小作坊 / 中等产线 / 重度产线。</p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If you are early game, start with a small keg core and avoid overbuilding.</li>
              <li>As crop volume grows, keg throughput (time plus count) becomes the main bottleneck.</li>
              <li>Use preset scenarios below to compare your setup instantly instead of guessing.</li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>前期先做小规模酒桶核心，不要一次性铺太大。</li>
              <li>中后期核心瓶颈不是种子，而是酒桶吞吐（耗时 + 数量）。</li>
              <li>直接点下面的预设场景对比，比凭感觉靠谱得多。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Why keg count changes your profit</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Throughput mismatch: fast harvest cycles can overwhelm small keg setups.</li>
              <li>Crop mix matters: Starfruit, Ancient Fruit, and Hops stress kegs differently.</li>
              <li>Time horizon matters: with fewer days left, backlog risk increases fast.</li>
            </ol>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>吞吐错配：收获节奏快时，小规模酒桶很容易积压。</li>
              <li>作物结构差异：杨桃、古代果实、啤酒花对酒桶压力并不一样。</li>
              <li>时间窗口影响：剩余天数越短，产线积压风险越高。</li>
            </ol>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 keg planning presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              These presets keep URL params editable, so you can tweak season, days left, and profession while preserving a stable comparison pair.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-count-small-workshop&season=summer&daysLeft=15&profession=artisan"
                fromPath={fromPath}
                ctaName="keg_count_small_workshop"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🛠️
                </span>
                Small Workshop (starter)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-count-mid-farm&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="keg_count_mid_farm"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  ⚙️
                </span>
                Mid Farm (balanced)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-count-heavy-processing&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="keg_count_heavy_processing"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🏭
                </span>
                Heavy Processing (late game)
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">EN</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_EN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="how-many-kegs-do-i-need-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

