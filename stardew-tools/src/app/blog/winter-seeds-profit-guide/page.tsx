import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "Are Winter Seeds profitable in Stardew Valley?",
  "Do Winter Seeds grow on the Farm in winter?",
  "What’s the best use of Winter Seeds: sell, craft, or forage bundles?",
  "How many harvests can I get from Winter Seeds in one winter?",
  "Is Fiber Seed worth planting in winter?",
  "Do I need the Greenhouse for winter farming?",
] as const;

const FAQ_ZH = [
  "冬季种子（Winter Seeds）赚钱吗？",
  "冬天在农场能种 Winter Seeds 吗？",
  "Winter Seeds 最好的用途：卖、做种子、还是留做献祭/任务？",
  "一个冬季 Winter Seeds 大概能收几茬？",
  "冬天种 Fiber Seed 值得吗？",
  "冬季务农一定要温室吗？",
] as const;

export const metadata: Metadata = {
  title: "Winter Seeds Profit Guide (Stardew Valley, 2026)",
  description:
    "Stardew Valley winter seeds profit guide: what Winter Seeds really earn, how winter farming works, crafting steps, and calculator presets for quick comparisons.",
  openGraph: {
    type: "article",
    publishedTime: "2026-02-27T00:00:00+08:00",
    modifiedTime: "2026-02-27T00:00:00+08:00",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

type ProfitRow = {
  item: string;
  growth: string;
  seedCost: string;
  baseSell: string;
  notes: string;
};

const profitRows: ProfitRow[] = [
  {
    item: "Winter Seeds",
    growth: "7d",
    seedCost: "60g",
    baseSell: "0g",
    notes:
      "The seed packet itself doesn’t sell. Profit comes from the forage you harvest (Winter Root / Crystal Fruit / Snow Yam / Crocus).",
  },
  {
    item: "Fiber Seeds",
    growth: "7d",
    seedCost: "10g",
    baseSell: "0g",
    notes:
      "Great utility crop (fiber), not a gold-maker. Still useful for crafting, building, and late-game projects.",
  },
  {
    item: "Tea Sapling",
    growth: "20d",
    seedCost: "1500g",
    baseSell: "0g",
    notes:
      "Not a field crop for winter profit. Mentioned because it’s listed as winter-capable in this site’s crop data.",
  },
  {
    item: "Ancient Fruit (Greenhouse)",
    growth: "28d + regrow 7d",
    seedCost: "0g",
    baseSell: "550g",
    notes:
      "If you mean ‘winter farming’ as ‘what makes money during winter’, greenhouse Ancient Fruit is the default gold engine.",
  },
];

export default function WinterSeedsProfitGuidePage() {
  const fromPath = "/blog/winter-seeds-profit-guide";
  const readNextPosts = getBlogReadNextPosts("winter-seeds-profit-guide", 3);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 14% 18%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
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
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Winter Seeds Profit Guide in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              星露谷冬季种子赚钱指南：winter farming 怎么做更赚？
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>Winter Seeds are profitable only if you treat them as a “forage multiplier,” not a crop you sell.</strong>
                The seed packet itself has <strong>0g</strong> sell price, but it grows winter forage that you can sell,
                process, or recycle into more seeds.
              </p>
              <p>
                For pure gold, most players’ best winter strategy is still <strong>Greenhouse farming</strong> (e.g.
                Ancient Fruit) — but if you want <strong>winter farming on the main Farm</strong>, Winter Seeds are the
                simplest legal option.
              </p>
              <p>
                Rule of thumb: <strong>plant Winter Seeds early</strong>, harvest forage, then decide whether to
                <strong> sell</strong> (cash now) or <strong>craft more seeds</strong> (bigger output later).
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Winter Crops Overview</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                In this site’s crop dataset, the “winter-capable” items are mostly special cases — winter is not a
                normal crop season.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8]">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead className="bg-[#fce8b1] text-[#4a321e]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Item</th>
                      <th className="px-4 py-3 font-semibold">Growth</th>
                      <th className="px-4 py-3 font-semibold">Seed Cost</th>
                      <th className="px-4 py-3 font-semibold">Base Sell</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5f4228]/90">
                    {profitRows.map((row) => (
                      <tr key={row.item} className="border-t border-[#7c4d2e]/20">
                        <td className="px-4 py-3 font-semibold text-[#4a321e]">{row.item}</td>
                        <td className="px-4 py-3">{row.growth}</td>
                        <td className="px-4 py-3">{row.seedCost}</td>
                        <td className="px-4 py-3">{row.baseSell}</td>
                        <td className="px-4 py-3">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                The important takeaway: <strong>Winter Seeds are the winter field crop</strong>. Fiber Seeds are utility.
                Tea Saplings and Greenhouse crops are “winter-capable” in different ways.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Profit Breakdown</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Winter Seeds cost <strong>60g</strong> and take <strong>7 days</strong> to grow. Since the seed itself sells for
                <strong> 0g</strong>, your “profit” comes from the forage you pick up at harvest.
              </p>
              <p>
                That means Winter Seeds are best evaluated in two modes:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Cash-out mode:</strong> plant → harvest forage → sell forage. Simple, low planning.
                </li>
                <li>
                  <strong>Scale mode:</strong> plant → harvest forage → craft more Winter Seeds → repeat. Higher ceiling,
                  but you’re converting time + forage into future planting volume.
                </li>
              </ul>
              <p>
                If you’re trying to maximize winter farming gold, compare Winter Seeds against
                <strong> greenhouse output</strong> (Ancient Fruit, Starfruit cycles) or even
                <strong> animal products</strong>. Winter Seeds are usually a “use empty tiles” play rather than the #1 gold
                strategy.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">How to Craft Winter Seeds</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                You unlock the <strong>Winter Seeds</strong> crafting recipe by completing the
                <strong> Winter Foraging Bundle</strong> (Community Center). After that, crafting is straightforward:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  Gather winter forage: <strong>Winter Root</strong>, <strong>Crystal Fruit</strong>, <strong>Snow Yam</strong>, and
                  <strong> Crocus</strong>.
                </li>
                <li>
                  Craft <strong>10 Winter Seeds</strong> per set (1 of each forage). This is your “scale mode” loop.
                </li>
                <li>
                  Plant on tilled soil in winter (farm tiles, or any outdoor tile that accepts seeds). Use sprinklers
                  like any other crop.
                </li>
                <li>
                  Harvest after <strong>7 days</strong>, then decide: sell forage now or craft another batch.
                </li>
              </ol>
              <p>
                Tip: If you’re short on a specific forage type, your bottleneck is usually
                <strong> Snow Yam / Winter Root</strong> depending on your foraging routes.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Calculator Presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Use these presets to compare Winter Seeds against other winter-capable options.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=winter&daysLeft=28"
                fromPath={fromPath}
                ctaName="winter_full_season"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">❄️</span>
                Winter (28 days)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=winter&daysLeft=14"
                fromPath={fromPath}
                ctaName="winter_mid_season"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏰</span>
                Winter (14 days left)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=winter&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="winter_artisan"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🏆</span>
                Winter + Artisan (Greenhouse compare)
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

        <BlogReadNext posts={readNextPosts} currentSlug="winter-seeds-profit-guide" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}
