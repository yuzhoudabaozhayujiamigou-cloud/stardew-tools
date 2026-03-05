import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import FaqJsonLd from "@/components/FaqJsonLd";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "What is the best flower for honey in Stardew Valley?",
  "Do I need a flower for Bee Houses to work?",
  "How far can a Bee House be from the flower?",
  "Is Fairy Rose honey worth it?",
  "Is it better to sell honey or turn it into mead?",
  "Do Artisan / Tiller professions affect honey?",
] as const;

const FAQ_ZH = [
  "星露谷蜂蜜最好的花是哪一种？",
  "蜂房必须要有花才会产蜂蜜吗？",
  "蜂房离花最远可以多远？",
  "仙子玫瑰蜂蜜值得做吗？",
  "蜂蜜直接卖还是做成蜂蜜酒（mead）更赚？",
  "职业（Artisan / Tiller）会影响蜂蜜吗？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-03-03T00:00:00+08:00",
    modifiedTime: "2026-03-03T00:00:00+08:00",
  },
  title: "Stardew Honey Profit Guide: Best Flowers by Season (With Calculator)",
  description:
    "A practical honey profit guide: best flowers by season, what actually changes honey value, and quick calculator presets for bee house setups.",
};

export default function StardewHoneyProfitGuidePage() {
  const fromPath = "/blog/stardew-honey-profit-guide";
  const readNextPosts = getBlogReadNextPosts("stardew-honey-profit-guide", 3);

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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
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
            { name: "Stardew Honey Profit Guide" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Guide</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Honey Profit Guide: Best Flowers by Season
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              蜂房蜂蜜怎么变值钱？这篇用最短路径给你“每个季节选什么花”和“什么时候值得上蜂蜜酒（mead）”。
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Bee Houses always produce honey, but a nearby flower upgrades it into “flavored” honey (more value).</li>
              <li>The “best” flower is mostly about season availability + how annoying it is to swap.</li>
              <li>If you can keg, mead can be a nice scaling path, but it adds a processing bottleneck.</li>
              <li>Use the calculator presets to estimate daily profit for your bee house count and season.</li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>蜂房不需要花也会产蜂蜜；但有“附近的花”会把蜂蜜升级成更值钱的风味蜂蜜。</li>
              <li>最优花通常不是“单价最高”这么简单，更取决于季节与换花成本。</li>
              <li>能上酒桶的话蜂蜜酒是放大器，但会引入产线瓶颈。</li>
              <li>直接用预设，把你的蜂房数量/季节代入，别靠猜。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Best flowers by season (simple picks)</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              These are “good enough” picks optimized for low friction. If you want max profit, plug your exact setup into the calculator.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#8a5b3a]/40 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Spring</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Blue Jazz (easy), Tulip (easy). If you care about aesthetics, mix colors; your profit depends more on bee house count than micro-optimizing.
                </p>
              </div>

              <div className="rounded-2xl border border-[#8a5b3a]/40 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Summer</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Poppy / Summer Spangle are common choices. Summer is where bee house layouts start to feel “worth it” if you scale.
                </p>
              </div>

              <div className="rounded-2xl border border-[#8a5b3a]/40 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Fall</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Fairy Rose is the classic high-value pick. If you only want to swap once per year, fall is the season to optimize hardest.
                </p>
              </div>

              <div className="rounded-2xl border border-[#8a5b3a]/40 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Greenhouse</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Treat greenhouse honey as “always-on”. If you dislike swapping, pick one flower you can keep permanently and optimize layout instead.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90">
              Note: flower availability and exact honey values can vary by version/mods. Use calculator presets as the single source of truth for your run.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try calculator presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Open a preset, then adjust parameters to match your bee house count and goals.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=honey-spring&season=spring&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="honey_spring_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌸</span>
                Honey in Spring
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=honey-summer&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="honey_summer_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">☀️</span>
                Honey in Summer
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=honey-fall-fairy-rose&season=fall&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="honey_fall_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍁</span>
                Fall: Fairy Rose Honey
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=honey-vs-mead&season=fall&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="honey_vs_mead_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍯</span>
                Honey vs Mead
              </TrackedBlogCtaLink>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90">
              If any preset is missing details in your calculator logic, tell me your assumptions (bee houses, flower, kegs) and I will align the preset to your current model.
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

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-honey-profit-guide" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
