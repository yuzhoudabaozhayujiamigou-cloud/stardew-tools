import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { getBlogReadNextPosts } from "@/lib/read-next";

export const metadata: Metadata = {
  title: "Keg vs Jar: Quick Profit Answer | Stardew Profit",
  description:
    "Fast answer for Keg vs Preserves Jar with a direct calculator preset link for real numbers by days left and profession.",
};

export default function KegVsJarQuickAnswerPage() {
  const fromPath = "/blog/keg-vs-jar-quick-answer";

    const readNextPosts = getBlogReadNextPosts("keg-vs-jar-quick-answer", 3);

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
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Keg vs Jar: Which is better?</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              In most high-value crop chains, <strong>Keg</strong> wins total profit, while <strong>Preserves Jar</strong> can still be efficient for lower-value crops or
              tight processing windows.
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Use your real setup, not generic advice</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Your answer depends on season timing, days left, and profession bonuses. Open the calculator preset below to compare artisan columns with live filters.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan&lang=zh"
                fromPath={fromPath}
                ctaName="keg_vs_jar_starfruit_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🧮
                </span>
                Starfruit Wine Preset
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-pumpkin&profession=artisan&lang=zh"
                fromPath={fromPath}
                ctaName="keg_vs_jar_pumpkin_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  📊
                </span>
                Pumpkin Pickles Preset
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-hops&profession=artisan&lang=zh"
                fromPath={fromPath}
                ctaName="keg_vs_jar_hops_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🍺
                </span>
                Hops Pale Ale Preset
              </TrackedBlogCtaLink>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="keg-vs-jar-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
