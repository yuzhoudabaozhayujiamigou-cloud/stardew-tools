import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BLOG_SLUGS, type BlogSlug } from "@/lib/blog-registry";

/* -------------------------------------------------------------------
 * Dynamic blog route.
 *
 * Each blog post still lives in its own directory as a standalone
 * page component (e.g. app/blog/ancient-fruit-vs-starfruit/page.tsx).
 *
 * This [slug] route acts as a unified entry point:
 *   - generateStaticParams() enumerates every slug from the registry
 *   - generateMetadata()     re-exports the post's `metadata` object
 *   - default export         renders the post's default component
 *
 * While the static directories still exist Next.js will prefer those
 * routes. Once they are removed this dynamic route takes over and all
 * URLs remain identical — no SEO impact.
 * ----------------------------------------------------------------- */

// --------------- static-param helpers --------------------------------

const slugSet: ReadonlySet<string> = new Set<string>(BLOG_SLUGS);

function isValidSlug(value: string): value is BlogSlug {
  return slugSet.has(value);
}

/**
 * Dynamically import the page module for a given slug.
 *
 * The template-literal import lets webpack create a context that covers
 * every sibling blog directory, so all modules are available at build
 * time when `generateStaticParams` lists them.
 */
async function loadBlogModule(slug: string) {
  /* eslint-disable @next/next/no-assign-module-variable */
  switch (slug) {
    case "ancient-fruit-vs-starfruit":
      return import("../ancient-fruit-vs-starfruit/page");
    case "ancient-fruit-vs-starfruit-quick-answer":
      return import("../ancient-fruit-vs-starfruit-quick-answer/page");
    case "ancient-fruit-wine-vs-starfruit-wine":
      return import("../ancient-fruit-wine-vs-starfruit-wine/page");
    case "animal-profit-guide":
      return import("../animal-profit-guide/page");
    case "artisan-goods-empire-beginner-to-master":
      return import("../artisan-goods-empire-beginner-to-master/page");
    case "artisan-vs-tiller-quick-answer":
      return import("../artisan-vs-tiller-quick-answer/page");
    case "auto-petter-worth-it":
      return import("../auto-petter-worth-it/page");
    case "beginner-mistakes-losing-money":
      return import("../beginner-mistakes-losing-money/page");
    case "best-crops-10-days-left-quick-answer":
      return import("../best-crops-10-days-left-quick-answer/page");
    case "best-crops-7-days-left-before-season-switch":
      return import("../best-crops-7-days-left-before-season-switch/page");
    case "best-crops-every-season":
      return import("../best-crops-every-season/page");
    case "best-crops-year-1":
      return import("../best-crops-year-1/page");
    case "best-fall-crops-quick-answer":
      return import("../best-fall-crops-quick-answer/page");
    case "best-greenhouse-crops-quick-answer":
      return import("../best-greenhouse-crops-quick-answer/page");
    case "best-greenhouse-crops-stardew-valley":
      return import("../best-greenhouse-crops-stardew-valley/page");
    case "best-spring-crops-10-days-left":
      return import("../best-spring-crops-10-days-left/page");
    case "best-summer-crops-quick-answer":
      return import("../best-summer-crops-quick-answer/page");
    case "crop-fairy-how-it-works":
      return import("../crop-fairy-how-it-works/page");
    case "farm-profit-pillars":
      return import("../farm-profit-pillars/page");
    case "fish-pond-profit-calculator":
      return import("../fish-pond-profit-calculator/page");
    case "flower-only-farm-profit-guide":
      return import("../flower-only-farm-profit-guide/page");
    case "greenhouse-keg-empire-profit-guide":
      return import("../greenhouse-keg-empire-profit-guide/page");
    case "greenhouse-layout-guide":
      return import("../greenhouse-layout-guide/page");
    case "hops-vs-starfruit-quick-answer":
      return import("../hops-vs-starfruit-quick-answer/page");
    case "how-many-kegs-do-i-need-quick-answer":
      return import("../how-many-kegs-do-i-need-quick-answer/page");
    case "keg-vs-jar-complete-profit-system":
      return import("../keg-vs-jar-complete-profit-system/page");
    case "keg-vs-jar-profit-guide":
      return import("../keg-vs-jar-profit-guide/page");
    case "keg-vs-jar-quick-answer":
      return import("../keg-vs-jar-quick-answer/page");
    case "money-making-guide":
      return import("../money-making-guide/page");
    case "secret-note-22-hidden-tunnel-panel":
      return import("../secret-note-22-hidden-tunnel-panel/page");
    case "skull-cavern-mining-profit-guide":
      return import("../skull-cavern-mining-profit-guide/page");
    case "speed-gro-vs-deluxe-speed-gro":
      return import("../speed-gro-vs-deluxe-speed-gro/page");
    case "spring-day-15-what-to-plant-profit":
      return import("../spring-day-15-what-to-plant-profit/page");
    case "stardew-honey-profit-guide":
      return import("../stardew-honey-profit-guide/page");
    case "stardew-valley-artisan-machines-roi-guide":
      return import("../stardew-valley-artisan-machines-roi-guide/page");
    case "stardew-valley-artisan-profit-guide":
      return import("../stardew-valley-artisan-profit-guide/page");
    case "stardew-valley-fishing-profit-guide":
      return import("../stardew-valley-fishing-profit-guide/page");
    case "stardew-valley-greenhouse-mastery-guide":
      return import("../stardew-valley-greenhouse-mastery-guide/page");
    case "stardew-valley-is-it-too-late-to-plant-on-spring-day-25":
      return import("../stardew-valley-is-it-too-late-to-plant-on-spring-day-25/page");
    case "stardew-valley-is-it-too-late-to-plant-on-summer-day-25":
      return import("../stardew-valley-is-it-too-late-to-plant-on-summer-day-25/page");
    case "stardew-valley-is-it-too-late-to-plant-spring-day-20":
      return import("../stardew-valley-is-it-too-late-to-plant-spring-day-20/page");
    case "stardew-valley-keg-jar-artisan-profit-system":
      return import("../stardew-valley-keg-jar-artisan-profit-system/page");
    case "stardew-valley-profit-guide":
      return import("../stardew-valley-profit-guide/page");
    case "stardew-valley-profit-guide-2026":
      return import("../stardew-valley-profit-guide-2026/page");
    case "stardew-valley-spring-profit-guide-2026":
      return import("../stardew-valley-spring-profit-guide-2026/page");
    case "stardew-valley-summer-day-1-maximum-profit-guide":
      return import("../stardew-valley-summer-day-1-maximum-profit-guide/page");
    case "stardew-valley-summer-day-15-profit-guide":
      return import("../stardew-valley-summer-day-15-profit-guide/page");
    case "stardew-valley-summer-day-20-is-it-too-late":
      return import("../stardew-valley-summer-day-20-is-it-too-late/page");
    case "stardew-valley-summer-day-7-what-to-plant":
      return import("../stardew-valley-summer-day-7-what-to-plant/page");
    case "stardew-valley-year-1-profit-guide-complete":
      return import("../stardew-valley-year-1-profit-guide-complete/page");
    case "starfruit-vs-ancient-fruit-wine-quick-answer":
      return import("../starfruit-vs-ancient-fruit-wine-quick-answer/page");
    case "strawberry-spring-day-13-too-late":
      return import("../strawberry-spring-day-13-too-late/page");
    case "wine-vs-juice-quick-answer":
      return import("../wine-vs-juice-quick-answer/page");
    case "winter-seeds-profit-guide":
      return import("../winter-seeds-profit-guide/page");
    case "wizard-quest-prismatic-jelly-guide":
      return import("../wizard-quest-prismatic-jelly-guide/page");
    case "year-1-spring-crops-profit-guide":
      return import("../year-1-spring-crops-profit-guide/page");
    default:
      return null;
  }
}

// --------------- Next.js route API -----------------------------------

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!isValidSlug(slug)) return {};

  const mod = await loadBlogModule(slug);
  if (!mod) return {};

  return (mod as { metadata?: Metadata }).metadata ?? {};
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isValidSlug(slug)) notFound();

  const mod = await loadBlogModule(slug);
  if (!mod) notFound();

  const Content = mod.default;
  return <Content />;
}
