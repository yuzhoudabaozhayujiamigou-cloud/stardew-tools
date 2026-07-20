import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stardew Valley Guides & Quick Answers | Stardew Tools",
  description:
    "Browse all Stardew Valley crop profit guides, quick answers, and farming strategy articles. Find the best crops, compare kegs vs jars, and plan your farm.",
  alternates: {
    canonical: `${SITE_ORIGIN}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_ORIGIN}/blog`,
    title: "Stardew Valley Guides & Quick Answers | Stardew Tools",
    description:
      "Browse Stardew Valley crop profit guides, quick answers, and farming strategy articles organized by the decision you need to make.",
  },
};

import fs from "node:fs";
import path from "node:path";

const HIDDEN_BLOG_SLUGS = new Set([
  "best-summer-crops-quick-answer",
  "greenhouse-keg-empire-profit-guide",
  "keg-vs-jar-complete-profit-system",
  "stardew-1-7-update",
]);

function getAllBlogPosts() {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");

  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (entry: { isDirectory: () => boolean; name: string }) =>
        entry.isDirectory() &&
        entry.name !== "[slug]" &&
        !HIDDEN_BLOG_SLUGS.has(entry.name) &&
        fs.existsSync(path.join(blogDir, entry.name, "page.tsx"))
    )
    .map((entry: { name: string }) => entry.name)
    .sort((a: string, b: string) => a.localeCompare(b));
}

const LABEL_OVERRIDES: Record<string, string> = {
  "how-many-kegs-do-i-need-quick-answer": "How Many Kegs Do I Need?",
  "best-greenhouse-crops-quick-answer": "Best Greenhouse Crops (Quick Answer)",
  "best-greenhouse-crops-stardew-valley": "Best Greenhouse Crops (Pillar Guide)",
  "ancient-fruit-vs-starfruit": "Ancient Fruit vs Starfruit (Full Guide)",
  "ancient-fruit-vs-starfruit-quick-answer": "Ancient Fruit vs Starfruit",
  "keg-vs-jar-quick-answer": "Keg vs Jar",
  "artisan-vs-tiller-quick-answer": "Artisan vs Tiller",
  "wine-vs-juice-quick-answer": "Wine vs Juice",
  "hops-vs-starfruit-quick-answer": "Hops vs Starfruit",
  "starfruit-vs-ancient-fruit-wine-quick-answer": "Starfruit vs Ancient Fruit Wine",
  "best-crops-10-days-left-quick-answer": "Best Crops with 10 Days Left",
  "best-crops-7-days-left-before-season-switch": "Best Crops with 7 Days Left",
  "best-fall-crops-quick-answer": "Best Fall Crops",
  "best-spring-crops-10-days-left": "Best Spring Crops with 10 Days Left",
  "beginner-mistakes-losing-money": "8 Beginner Mistakes Losing You Money",
  "auto-petter-worth-it": "Is the Auto-Petter Worth It?",
  "money-making-guide": "Money Making Guide – From Broke to Rich",
  "best-crops-every-season": "Best Crops for Every Season",
  "year-1-spring-crops-profit-guide": "Year 1 Spring Crops Profit Guide",
  "stardew-valley-year-1-profit-guide-complete": "Complete Year 1 Profit Guide",
  "stardew-valley-greenhouse-mastery-guide": "Greenhouse Mastery Guide",
  "artisan-goods-empire-beginner-to-master": "Artisan Goods Empire",
};

function humanizeSlug(slug: string): string {
  const withoutSuffix = slug.replace(/-quick-answer$/u, "");
  return withoutSuffix
    .split("-")
    .map((s) => (s.length <= 3 ? s.toUpperCase() : s[0].toUpperCase() + s.slice(1)))
    .join(" ");
}

const LINK_CLASS =
  "block rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-5 py-3 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

const FEATURED_POSTS = [
  {
    slug: "stardew-valley-profit-guide-2026",
    label: "Profit Guide 2026",
    description: "Best crops by season + keg vs jar + top wine picks.",
  },
  {
    slug: "year-1-spring-crops-profit-guide",
    label: "Year 1 Spring Profit Guide",
    description: "Gold/day presets for a realistic early-game Spring plan.",
  },
  {
    slug: "best-greenhouse-crops-stardew-valley",
    label: "Best Greenhouse Crops",
    description: "Pick crops based on kegs/jars throughput and your play schedule.",
  },
  {
    slug: "stardew-valley-artisan-profit-guide",
    label: "Artisan Profit Guide",
    description: "A bottleneck-based guide to kegs vs jars, best chains, and build order.",
  },
  {
    slug: "keg-vs-jar-quick-answer",
    label: "Keg vs Jar (Quick Answer)",
    description: "Fast rule-of-thumb decisions for Artisan profit.",
  },
] as const;

const FEATURED_LINK_CLASS =
  "block rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-5 py-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#4e7a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c8a3e]";

const FEATURED_DESC_CLASS = "mt-1 text-xs font-semibold text-white/90";

export default function BlogIndexPage() {
  const slugs = getAllBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stardew Valley Guides & Quick Answers",
    description: "All crop profit guides, comparison articles, and farming strategy quick answers.",
    numberOfItems: slugs.length,
    itemListElement: slugs.map((slug: string, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      name: LABEL_OVERRIDES[slug] ?? humanizeSlug(slug),
      url: `${SITE_ORIGIN}/blog/${slug}`,
    })),
  };

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Stardew Valley
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Guides & Quick Answers
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            All crop profit guides, comparison articles, and farming strategy quick answers in one place.
            Each guide links back to the calculator with ready-made presets.
          </p>
        </header>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div>
              <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">A decision library, not a keyword list</h2>
              <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                Stardew profit questions are usually time-sensitive: what to plant with 10 days left, whether to spend
                a rare seed, or which machine should receive a limited harvest. The articles below explain the tradeoff
                behind the answer, show the assumptions, and link back to a calculator preset so you can test the same
                idea against your own farm.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                Start with a quick answer when you need a decision now. Choose a full guide when you are changing your
                farm plan, comparing professions, or building a greenhouse and artisan room that will run for many
                seasons.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[#7c4d2e]/50 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Our guide format</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90">
                <li>Direct answer first, followed by the assumptions that can change it.</li>
                <li>Tables or worked examples for crop, machine, and day-limit comparisons.</li>
                <li>Links to the calculator, seasonal pages, and the next decision in the same plan.</li>
                <li>Separate early-game, greenhouse, and processing advice instead of one universal ranking.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Featured</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Start here</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
            These are the fastest paths to profit decisions and calculator-friendly strategy.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {FEATURED_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={FEATURED_LINK_CLASS}>
                <span aria-hidden="true" className="mr-2 opacity-95">
                  ⭐
                </span>
                {post.label}
                <div className={FEATURED_DESC_CLASS}>{post.description}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-2">
          {slugs.filter((slug: string) => !FEATURED_POSTS.some((post) => post.slug === slug)).map((slug: string) => (
            <Link key={slug} href={`/blog/${slug}`} className={LINK_CLASS}>
              <span aria-hidden="true" className="mr-2 opacity-85">📘</span>
              {LABEL_OVERRIDES[slug] ?? humanizeSlug(slug)}
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Choose a guide by farm situation</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">New save</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Use the <Link className="underline" href="/blog/best-crops-year-1">Year 1 crop guide</Link> to balance seed cost, watering time, and the first tool upgrades.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Season is ending</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Read the day-limit answers for <Link className="underline" href="/blog/best-crops-7-days-left-before-season-switch">7 days left</Link> or <Link className="underline" href="/blog/best-crops-10-days-left-quick-answer">10 days left</Link>.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Greenhouse open</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Compare <Link className="underline" href="/blog/best-greenhouse-crops-stardew-valley">greenhouse crops</Link> with your available Kegs before filling every tile.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Machines are full</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Use the <Link className="underline" href="/blog/keg-vs-jar-profit-guide">Keg vs Jar guide</Link> to route premium fruit and overflow without wasting cycles.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-sm leading-6 text-[#5f4228]/90">
            Playing co-op? Check the platform matrix in our{" "}
            <Link
              href="/guides/multiplayer-crossplay"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              multiplayer crossplay guide
            </Link>
            .
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/guides/multiplayer-crossplay" className={LINK_CLASS}>
              <span aria-hidden="true" className="mr-2 opacity-85">🎮</span>
              Multiplayer & Crossplay Setup Matrix
            </Link>
            <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
              <span aria-hidden="true" className="mr-2 opacity-85">🌱</span>
              Greenhouse Profit Guide
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <p className="text-sm leading-6 text-[#5f4228]/90">
            Want to compare crops directly?{" "}
            <Link
              href="/calculator"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Open the Crop Profit Calculator →
            </Link>
          </p>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
