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
  "ancient-fruit-vs-starfruit-quick-answer": "Ancient Fruit vs Starfruit",
  "keg-vs-jar-quick-answer": "Keg vs Jar",
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

