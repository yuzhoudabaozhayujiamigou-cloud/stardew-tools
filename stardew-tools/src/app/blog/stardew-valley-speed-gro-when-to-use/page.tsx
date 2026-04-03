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
const fromPath = "/blog/stardew-valley-speed-gro-when-to-use";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Stardew Valley Speed-Gro Guide (2026): When Is Fertilizer Worth the Cost?";
const DESCRIPTION = "Complete ROI guide for Speed-Gro and Deluxe Speed-Gro in Stardew Valley. Learn exactly when fertilizer saves enough days to justify the cost, and which crops benefit most.";

const FAQ_ITEMS = [
  { question: "Is Speed-Gro worth buying in Stardew Valley?", answer: "Speed-Gro is worth buying only for high-value crops where saved days generate more gold than the fertilizer costs. For Starfruit, Ancient Fruit, and Cranberries, Deluxe Speed-Gro pays back many times its cost. For low-value crops like Parsnip, it almost never pays back." },
  { question: "Which crops benefit most from Speed-Gro?", answer: "Crops with the highest gold/day benefit most: Starfruit, Ancient Fruit, and any crop you are trying to fit an extra harvest into before a season ends. The formula is: days saved times gold/day must exceed fertilizer cost." },
  { question: "Does Speed-Gro stack with the Agriculturist profession?", answer: "Yes. Deluxe Speed-Gro (-25%) and Agriculturist (-10%) stack multiplicatively, giving roughly -33% total growth time. This is particularly powerful for Ancient Fruit in the Greenhouse." },
  { question: "When should I use Deluxe Speed-Gro?", answer: "Use Deluxe Speed-Gro when planting a high-value crop late in a season needing one extra harvest, or when you want Ancient Fruit to start its regrow cycle sooner, or planting Starfruit on Summer Day 1 to get a second harvest before Fall." },
  { question: "Does Speed-Gro help with Ancient Fruit?", answer: "Yes. Ancient Fruit takes 28 days for its first harvest. Deluxe Speed-Gro cuts this to about 21 days, unlocking the regrow cycle 7 days earlier. In the Greenhouse this compounds into significant extra harvests over a full playthrough." },
  { question: "Does fertilizer affect regrow crops after the first harvest?", answer: "No. Speed-Gro only affects the initial growth period. Once a regrow crop has produced its first harvest, the regrow timer is fixed and fertilizer has no effect." },
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: url },
  openGraph: { 
    title: TITLE, 
    description: DESCRIPTION, 
    url, 
    type: "article", 
    publishedTime, 
    modifiedTime 
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const CARD = "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LINK = "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK = "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";
const CTA_CLASS = "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS = "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

export default async function SpeedGroWhenToUsePage() {
  const readNext = await getBlogReadNextPosts(fromPath);
  return (
    <>
      <PwaRegisterScript />
      <FaqJsonLd faqs={FAQ_ITEMS} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Speed-Gro Guide" }]} />
        <h1 className="mt-6 text-2xl font-bold leading-snug text-[#3f2a22] sm:text-3xl">{TITLE}</h1>
        <p className={P}>Speed-Gro fertilizer is often used on every crop or ignored entirely. The correct question is whether the days you save are worth more than the fertilizer costs. This guide gives you the formula and the scenarios where each tier pays back.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className={CTA_CLASS}>Calculate Crop Profits</Link>
          <Link href="/blog/speed-gro-vs-deluxe-speed-gro" className={SUB_CTA_CLASS}>Speed-Gro vs Deluxe</Link>
        </div>
        <nav className="mt-8 rounded-2xl border border-[#7c4d2e]/20 bg-white/40 p-4">
          <p className="mb-3 text-sm font-semibold text-[#4a321e]">Table of Contents</p>
          <ul className="space-y-1">
            {[["#comparison","Fertilizer Comparison"],["#roi","The ROI Formula"],["#best","Best Scenarios"],["#skip","When to Skip"],["#agriculturist","Agriculturist Stacking"],["#faq","FAQ"]].map(([href,label])=>(
              <li key={href}><a href={href} className={TOC_LINK}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <section id="comparison" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Fertilizer Comparison</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/20">
              <table className="w-full text-sm">
                <thead className="bg-[#7c4d2e]/10"><tr>
                  <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Fertilizer</th>
                  <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Speed</th>
                  <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Cost</th>
                  <th className="hidden px-3 py-2 text-left font-semibold text-[#4a321e] sm:table-cell">Source</th>
                </tr></thead>
                <tbody>
                  {[{n:"Speed-Gro",b:"-10%",c:"100g",s:"Craft Lv1 / Pierre Yr1"},{n:"Deluxe Speed-Gro",b:"-25%",c:"40g craft",s:"Craft Lv8 / Pierre Yr2+"},{n:"Hyper Speed-Gro",b:"-33%",c:"10 Qi Gems",s:"Qi Gem Shop"}].map(r=>(
                    <tr key={r.n} className="border-t border-[#7c4d2e]/10 even:bg-white/30">
                      <td className="px-3 py-2 font-medium text-[#4a321e]">{r.n}</td>
                      <td className="px-3 py-2 text-right font-semibold text-green-700">{r.b}</td>
                      <td className="px-3 py-2 text-right text-[#5c4033]">{r.c}</td>
                      <td className="hidden px-3 py-2 text-[#5c4033]/80 sm:table-cell">{r.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="roi" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>The ROI Formula</h2>
            <p className={P}>The core question: does the value of saved days exceed the fertilizer cost?</p>
            <div className="mt-4 rounded-xl border border-[#7c4d2e]/20 bg-white/30 p-4 font-mono text-sm">
              <p className="text-[#4a321e]">Days saved = grow days x boost %</p>
              <p className="mt-1 text-[#4a321e]">Value saved = days saved x crop gold/day</p>
              <p className="mt-2 font-bold text-green-700">Worth it if: value saved &gt; fertilizer cost</p>
            </div>
            <h3 className={`mt-5 ${H3}`}>Example: Starfruit + Deluxe Speed-Gro</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Starfruit: 13-day grow, ~26g/day raw</li>
              <li className={LI}>Deluxe saves 3.25 days = ~85g value</li>
              <li className={LI}>Cost: 40g craft — <strong>Worth it</strong></li>
            </ul>
            <h3 className={`mt-5 ${H3}`}>Example: Parsnip + Speed-Gro</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Parsnip: 4-day grow, ~11g/day</li>
              <li className={LI}>Saves 0.4 days = ~4g value, costs 100g — <strong>Not worth it</strong></li>
            </ul>
          </div>
        </section>
        <section id="best" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Best Scenarios for Speed-Gro</h2>
            <div className="mt-4 space-y-3">
              {[
                {t:"Season-end replanting", d:"Plant single-harvest crops on Day 14-18 with Deluxe Speed-Gro to fit one harvest before season end."},
                {t:"Starfruit double harvest", d:"Deluxe Speed-Gro on Starfruit planted Summer Day 1 reduces growth to ~10 days, enabling a second harvest before Fall."},
                {t:"Ancient Fruit first harvest", d:"Cuts 28-day growth to ~21 days, unlocking the regrow cycle 7 days earlier. Especially valuable in the Greenhouse."},
                {t:"High gold/day crops only", d:"Stick to Starfruit, Ancient Fruit, Cranberries, and Hops. Low-value crops never justify the cost."},
              ].map(s=>(
                <div key={s.t} className="rounded-xl border border-[#7c4d2e]/15 bg-white/35 p-4">
                  <p className="font-semibold text-[#4a321e]">{s.t}</p>
                  <p className="mt-1 text-sm text-[#5c4033]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skip" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>When to Skip Fertilizer</h2>
            <ul className="mt-4 space-y-1">
              <li className={LI}><strong>Regrow crops mid-season:</strong> Fertilizer only affects initial growth, not the regrow timer.</li>
              <li className={LI}><strong>Low-value crops:</strong> Parsnip, Bok Choy, Radish — saved days worth less than cost.</li>
              <li className={LI}><strong>Crops with plenty of time:</strong> A 4-day crop planted Day 1 does not need acceleration.</li>
              <li className={LI}><strong>Year 1 cash-strapped phase:</strong> Save 100g fertilizer cost for seeds instead.</li>
            </ul>
          </div>
        </section>
        <section id="agriculturist" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Stacking with Agriculturist Profession</h2>
            <p className={P}>Agriculturist (Farming Lv10) adds +10% growth speed and stacks with fertilizer:</p>
            <ul className="mt-4 space-y-1">
              <li className={LI}>Deluxe Speed-Gro alone: -25% growth time</li>
              <li className={LI}>Agriculturist alone: -10% growth time</li>
              <li className={LI}>Both together: approximately -32% growth time</li>
            </ul>
            <p className={P}>Note: Artisan (+40% artisan goods value) almost always generates more total gold than Agriculturist. Only choose Agriculturist for raw-crop focused strategies.</p>
            <div className="mt-4">
              <Link href="/blog/stardew-valley-artisan-profession-roi-guide" className={LINK}>
                Artisan vs Agriculturist: Full ROI Comparison
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="rounded-[28px] border-4 border-[#b77841]/50 bg-gradient-to-br from-[#fff8e7] to-[#fce8b1] p-6 text-center shadow-lg">
            <p className="text-lg font-bold text-[#4a321e]">Calculate If Speed-Gro Is Worth It</p>
            <p className="mt-2 text-sm text-[#5c4033]">Enter your crop and planting date to see exact gold/day figures.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/" className={CTA_CLASS}>Open Profit Calculator</Link>
              <Link href="/blog/stardew-valley-greenhouse-mastery-guide" className={SUB_CTA_CLASS}>Greenhouse Guide</Link>
            </div>
          </div>
        </section>
        <section id="faq" className="mt-10">
          <h2 className={H2}>Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {FAQ_ITEMS.map(item=>(
              <div key={item.question} className={CARD}>
                <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                <p className={P}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <BlogReadNext posts={readNext} currentSlug="stardew-valley-speed-gro-when-to-use" />
      </main>
      <SiteFooter />
    </>
  );
}
