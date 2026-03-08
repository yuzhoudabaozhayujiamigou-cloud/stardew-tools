import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

export type ReadNextPost = {
  slug: string;
  href: string;
  label: string;
};

const FEATURED_PRIORITY = [
  "how-many-kegs-do-i-need-quick-answer",
  "best-greenhouse-crops-quick-answer",
  "ancient-fruit-vs-starfruit-quick-answer",
  "keg-vs-jar-quick-answer",
] as const;

const LABEL_OVERRIDES: Record<string, string> = {
  "how-many-kegs-do-i-need-quick-answer": "How Many Kegs Do I Need?",
  "best-greenhouse-crops-quick-answer": "Best Greenhouse Crops",
  "stardew-valley-year-1-profit-guide-complete": "Complete Year 1 Profit Guide",
  "stardew-valley-greenhouse-mastery-guide": "Greenhouse Mastery Guide",
  "artisan-goods-empire-beginner-to-master": "Artisan Goods Empire",
  "flower-only-farm-profit-guide": "Flower-Only Farm Profit Guide",
  "ancient-fruit-vs-starfruit": "Ancient Fruit vs Starfruit (Full Guide)",
  "ancient-fruit-vs-starfruit-quick-answer": "Ancient Fruit vs Starfruit",
  "ancient-fruit-wine-vs-starfruit-wine": "Ancient Fruit Wine vs Starfruit Wine",
  "keg-vs-jar-quick-answer": "Keg vs Jar",
  "beginner-mistakes-losing-money": "8 Beginner Mistakes Losing You Money",
  "auto-petter-worth-it": "Is the Auto-Petter Worth It?",
  "money-making-guide": "Money Making Guide – From Broke to Rich",
  "best-crops-every-season": "Best Crops for Every Season",
};

function getBlogSlugs(): string[] {
  const blogDirectory = join(process.cwd(), "src", "app", "blog");

  if (!existsSync(blogDirectory)) {
    return [];
  }

  return readdirSync(blogDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => existsSync(join(blogDirectory, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

function humanizeSlug(slug: string): string {
  const withoutSuffix = slug.replace(/-quick-answer$/u, "");
  return withoutSuffix
    .split("-")
    .map((segment) => {
      if (segment.length <= 3) {
        return segment.toUpperCase();
      }

      return segment[0].toUpperCase() + segment.slice(1);
    })
    .join(" ");
}

const BLOG_SLUGS = getBlogSlugs();

// Topic clusters for related post matching
const TOPIC_TAGS: Record<string, string[]> = {
  "ancient-fruit-vs-starfruit": ["wine", "greenhouse", "starfruit", "ancient-fruit", "deep-dive"],
  "ancient-fruit-vs-starfruit-quick-answer": ["wine", "greenhouse", "starfruit", "ancient-fruit"],
  "ancient-fruit-wine-vs-starfruit-wine": ["wine", "greenhouse", "starfruit", "ancient-fruit", "deep-dive"],
  "starfruit-vs-ancient-fruit-wine-quick-answer": ["wine", "greenhouse", "starfruit", "ancient-fruit"],
  "artisan-vs-tiller-quick-answer": ["profession", "artisan", "tiller", "wine"],
  "keg-vs-jar-quick-answer": ["keg", "jar", "artisan", "wine"],
  "how-many-kegs-do-i-need-quick-answer": ["keg", "wine", "artisan"],
  "wine-vs-juice-quick-answer": ["keg", "wine", "artisan"],
  "hops-vs-starfruit-quick-answer": ["starfruit", "hops", "summer", "keg"],
  "stardew-honey-profit-guide": ["honey", "beehouse", "flower", "artisan", "profit"],
  "flower-only-farm-profit-guide": ["flower", "honey", "beehouse", "layout", "artisan", "fairy-rose", "year-1", "profit"],
  "best-greenhouse-crops-quick-answer": ["greenhouse", "ancient-fruit", "starfruit"],
  "stardew-valley-artisan-profit-guide": ["artisan", "honey", "keg", "jar", "profit"],
  "greenhouse-layout-guide": ["greenhouse", "layout", "sprinkler", "ancient-fruit", "starfruit"],
  "best-fall-crops-quick-answer": ["fall", "timing", "cranberry", "pumpkin"],
  "best-crops-year-1": ["year-1", "beginner", "spring", "summer", "fall", "winter", "profit", "guide"],
  "stardew-valley-year-1-profit-guide-complete": [
    "year-1",
    "beginner",
    "spring",
    "summer",
    "fall",
    "winter",
    "profit",
    "guide",
    "milestones",
    "roadmap",
  ],
  "stardew-valley-greenhouse-mastery-guide": [
    "greenhouse",
    "layout",
    "ancient-fruit",
    "starfruit",
    "wine",
    "automation",
    "roi",
    "profit",
  ],
  "artisan-goods-empire-beginner-to-master": [
    "artisan",
    "keg",
    "jar",
    "wine",
    "resin",
    "scaling",
    "production",
    "profit",
  ],
  "winter-seeds-profit-guide": ["winter", "winter-farming", "winter-seeds", "profit"],
  "best-summer-crops-quick-answer": ["summer", "profit", "blueberry", "starfruit", "melon", "hops"],
  "best-crops-10-days-left-quick-answer": ["timing", "late-season"],
  "best-crops-7-days-left-before-season-switch": ["timing", "late-season"],
  "best-spring-crops-10-days-left": ["timing", "spring", "late-season"],
  "spring-day-15-what-to-plant-profit": ["timing", "spring"],
  "strawberry-spring-day-13-too-late": ["timing", "spring", "strawberry"],
  "stardew-valley-is-it-too-late-to-plant-spring-day-20": ["timing", "spring", "late-season"],
  "stardew-valley-is-it-too-late-to-plant-on-spring-day-25": ["timing", "spring", "late-season"],
  "stardew-valley-spring-profit-guide-2026": ["spring", "profit"],
  "stardew-valley-summer-day-1-maximum-profit-guide": ["summer", "profit"],
  "stardew-valley-summer-day-7-what-to-plant": ["timing", "summer"],
  "stardew-valley-summer-day-15-profit-guide": ["timing", "summer"],
  "stardew-valley-summer-day-20-is-it-too-late": ["timing", "summer", "late-season"],
  "stardew-valley-is-it-too-late-to-plant-on-summer-day-25": ["timing", "summer", "late-season"],
  "speed-gro-vs-deluxe-speed-gro": ["fertilizer", "speed-gro", "deluxe-speed-gro", "timing", "growth-speed"],
  "fish-pond-profit-calculator": ["fish-pond", "roe", "aged-roe", "profit", "artisan", "money-making"],
};

export function getBlogReadNextPosts(currentSlug: string, limit = 3): ReadNextPost[] {
  const currentTags = TOPIC_TAGS[currentSlug] ?? [];
  const candidates = BLOG_SLUGS.filter((s) => s !== currentSlug);

  // Score by shared tags, then featured priority, then alphabetical
  const scored = candidates.map((slug) => {
    const tags = TOPIC_TAGS[slug] ?? [];
    const shared = currentTags.filter((t) => tags.includes(t)).length;
    const featured = FEATURED_PRIORITY.indexOf(slug as (typeof FEATURED_PRIORITY)[number]);
    return { slug, shared, featured: featured >= 0 ? featured : 999 };
  });

  scored.sort((a, b) => b.shared - a.shared || a.featured - b.featured || a.slug.localeCompare(b.slug));

  return scored.slice(0, limit).map(({ slug }) => ({
    slug,
    href: `/blog/${slug}`,
    label: LABEL_OVERRIDES[slug] ?? humanizeSlug(slug),
  }));
}

export function getCalculatorReadNextPosts(limit = 4): ReadNextPost[] {
  const available = new Set(BLOG_SLUGS);
  const ordered: string[] = [];

  for (const slug of FEATURED_PRIORITY) {
    if (available.has(slug)) {
      ordered.push(slug);
    }
  }

  for (const slug of BLOG_SLUGS) {
    if (!ordered.includes(slug)) {
      ordered.push(slug);
    }
  }

  return ordered.slice(0, limit).map((slug) => ({
    slug,
    href: `/blog/${slug}`,
    label: LABEL_OVERRIDES[slug] ?? humanizeSlug(slug),
  }));
}
