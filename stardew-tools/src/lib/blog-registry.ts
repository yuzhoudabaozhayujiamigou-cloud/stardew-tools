/**
 * Central registry of all blog post slugs.
 *
 * When adding a new blog post, add its slug to this array.
 * The dynamic route at app/blog/[slug]/page.tsx and infrastructure
 * files (sitemap, read-next, blog index) all read from this list.
 */
export const BLOG_SLUGS = [
  "ancient-fruit-vs-starfruit",
  "ancient-fruit-vs-starfruit-quick-answer",
  "ancient-fruit-wine-vs-starfruit-wine",
  "animal-profit-guide",
  "artisan-goods-empire-beginner-to-master",
  "artisan-vs-tiller-quick-answer",
  "auto-petter-worth-it",
  "beginner-mistakes-losing-money",
  "best-crops-10-days-left-quick-answer",
  "best-crops-7-days-left-before-season-switch",
  "best-crops-every-season",
  "best-crops-year-1",
  "best-fall-crops-quick-answer",
  "best-greenhouse-crops-quick-answer",
  "best-greenhouse-crops-stardew-valley",
  "best-spring-crops-10-days-left",
  "best-summer-crops-quick-answer",
  "crop-fairy-how-it-works",
  "farm-profit-pillars",
  "fish-pond-profit-calculator",
  "flower-only-farm-profit-guide",
  "greenhouse-keg-empire-profit-guide",
  "greenhouse-layout-guide",
  "hops-vs-starfruit-quick-answer",
  "how-many-kegs-do-i-need-quick-answer",
  "keg-vs-jar-complete-profit-system",
  "keg-vs-jar-profit-guide",
  "keg-vs-jar-quick-answer",
  "money-making-guide",
  "secret-note-22-hidden-tunnel-panel",
  "skull-cavern-mining-profit-guide",
  "speed-gro-vs-deluxe-speed-gro",
  "spring-day-15-what-to-plant-profit",
  "stardew-honey-profit-guide",
  "stardew-valley-artisan-machines-roi-guide",
  "stardew-valley-artisan-profit-guide",
  "stardew-valley-fishing-profit-guide",
  "stardew-valley-greenhouse-mastery-guide",
  "stardew-valley-is-it-too-late-to-plant-on-spring-day-25",
  "stardew-valley-is-it-too-late-to-plant-on-summer-day-25",
  "stardew-valley-is-it-too-late-to-plant-spring-day-20",
  "stardew-valley-keg-jar-artisan-profit-system",
  "stardew-valley-profit-guide",
  "stardew-valley-profit-guide-2026",
  "stardew-valley-spring-profit-guide-2026",
  "stardew-valley-summer-day-1-maximum-profit-guide",
  "stardew-valley-summer-day-15-profit-guide",
  "stardew-valley-summer-day-20-is-it-too-late",
  "stardew-valley-summer-day-7-what-to-plant",
  "stardew-valley-year-1-profit-guide-complete",
  "starfruit-vs-ancient-fruit-wine-quick-answer",
  "strawberry-spring-day-13-too-late",
  "wine-vs-juice-quick-answer",
  "winter-seeds-profit-guide",
  "wizard-quest-prismatic-jelly-guide",
  "year-1-spring-crops-profit-guide",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

/** Returns a sorted copy of all registered blog slugs. */
export function getAllSlugs(): string[] {
  return [...BLOG_SLUGS];
}
