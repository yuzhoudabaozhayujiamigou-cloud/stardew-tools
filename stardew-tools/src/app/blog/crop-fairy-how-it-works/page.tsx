import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "What does the Crop Fairy do in Stardew Valley?",
  "How often does the Crop Fairy event happen?",
  "Which crops benefit the most from the Crop Fairy?",
  "Does the Crop Fairy affect regrowing crops?",
  "Can the Crop Fairy hit my greenhouse?",
  "Can I force or predict the Crop Fairy?",
] as const;

const FAQ_ZH = [
  "作物仙子（Crop Fairy）事件到底会做什么？",
  "作物仙子出现频率/概率大概是多少？",
  "哪些作物最吃作物仙子的加速收益？",
  "作物仙子对可重复收获作物有用吗？",
  "作物仙子会不会影响温室？",
  "能不能强制/预测作物仙子出现？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-03-04T00:00:00+08:00",
    modifiedTime: "2026-03-04T00:00:00+08:00",
  },
  title: "Stardew Valley Crop Fairy: How It Works, Chances, Best Crops",
  description:
    "Crop Fairy (作物仙子) explained: what it does, rough chances, and which crops benefit most. Includes quick calculator links to compare profit impact.",
};

export default function CropFairyHowItWorksPage() {
  const fromPath = "/blog/crop-fairy-how-it-works";
  const readNextPosts = getBlogReadNextPosts("crop-fairy-how-it-works", 3);

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

        <FaqJsonLd
          faqs={FAQ_EN.map((question, index) => ({
            question,
            answer: FAQ_ZH[index] ?? "",
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Crop Fairy: How It Works" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Event Mechanics</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Crop Fairy: How It Works, Chances, Best Crops
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              作物仙子（Crop Fairy）机制速查：她到底做什么、概率大概多少、哪些作物最赚。
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                The Crop Fairy instantly advances the growth stage of a small patch of your crops overnight.
              </li>
              <li>
                You cannot reliably force it. Treat it as a bonus, not a plan.
              </li>
              <li>
                It is most valuable when it makes an extra harvest possible before the season ends.
              </li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>作物仙子会在一夜之间“加速一小片作物的生长进度”。</li>
              <li>基本无法稳定触发/预测：当成惊喜，不要当成策略核心。</li>
              <li>最赚的场景：让你在季末前“多收一茬”。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">What the Crop Fairy does</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              In plain terms: the Crop Fairy chooses a small cluster of crops on your farm and advances their growth
              stage overnight. Most players experience it as “a random patch became almost-ready (or ready) the next
              morning.”
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              中文一句话：她会随机挑一小块作物，把它们的生长阶段往前推（有时直接推到可收获）。
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Chances (rough guidance)</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Exact numbers vary by game version/mods and are not something you should optimize around. The practical
              takeaway: it is rare enough that you should not build your plan on it.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              概率的“正确用法”：不用背数字——只要知道它不常来，所以别指望靠它翻盘。
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Best crops to benefit</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              The Crop Fairy is most valuable when the growth boost turns into <strong>one extra harvest</strong>.
              That usually means crops with:
            </p>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>High value per harvest (so one extra harvest matters).</li>
              <li>Timing sensitivity (you are close to missing the last harvest of the season).</li>
              <li>Regrowth cycles where an earlier first harvest can create an extra regrowth harvest.</li>
            </ol>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              中文看法：最赚的不是“她让作物更快成熟”本身，而是“让你多收一次”。所以季末窗口、或可重复收获作物的首收提前，价值更大。
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Quick calculator links</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Use these links as a starting point, then adjust season/days-left/profession to match your save.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=10"
                fromPath={fromPath}
                ctaName="crop_fairy_spring_10_days_left"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🌸
                </span>
                Compare with 10 Days Left (Spring)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=10"
                fromPath={fromPath}
                ctaName="crop_fairy_summer_10_days_left"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  ☀️
                </span>
                Compare with 10 Days Left (Summer)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=10"
                fromPath={fromPath}
                ctaName="crop_fairy_fall_10_days_left"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🍂
                </span>
                Compare with 10 Days Left (Fall)
              </TrackedBlogCtaLink>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              CTA 建议：算完“你当前季节、剩余天数”，再决定要不要补种/用加速肥。
            </p>
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

        <BlogReadNext posts={readNextPosts} currentSlug="crop-fairy-how-it-works" />
        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
