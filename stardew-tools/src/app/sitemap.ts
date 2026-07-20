import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import type { MetadataRoute } from "next";

import { secretNotes } from "@/data/secretNotes";
import { SITE_ORIGIN } from "@/lib/site";

const EXCLUDED_BLOG_SLUGS = new Set([
  "best-summer-crops-quick-answer",
  "greenhouse-keg-empire-profit-guide",
  "keg-vs-jar-complete-profit-system",
  "stardew-1-7-update",
]);

const VERIFIED_LAST_MODIFIED = new Map<string, string>([
  ["/about", "2026-07-20"],
  ["/best-crops", "2026-07-20"],
  ["/best-crops/fall", "2026-07-20"],
  ["/best-crops/greenhouse", "2026-07-20"],
  ["/best-crops/summer", "2026-07-20"],
  ["/best-crops/winter", "2026-07-20"],
  ["/blog", "2026-07-20"],
  ["/crops", "2026-07-20"],
  ["/guides", "2026-07-20"],
  ["/guides/multiplayer-crossplay", "2026-07-20"],
  ["/methodology", "2026-07-20"],
  ["/secret-notes", "2026-07-20"],
  ["/secret-notes/19", "2026-07-20"],
  ["/secret-notes/22", "2026-07-20"],
  ["/tools", "2026-07-20"],
  ["/tools/fishing-profit", "2026-07-20"],
  ["/tools/keg-vs-preserves-jar", "2026-07-20"],
  ["/tools/professions", "2026-07-20"],
  ["/tools/seed-maker", "2026-07-20"],
]);

const STATIC_ENTRIES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/crops", changeFrequency: "weekly", priority: 0.8 },
  { path: "/best-crops", changeFrequency: "weekly", priority: 0.8 },
  { path: "/best-crops/spring", changeFrequency: "monthly", priority: 0.7 },
  { path: "/best-crops/summer", changeFrequency: "monthly", priority: 0.7 },
  { path: "/best-crops/fall", changeFrequency: "monthly", priority: 0.7 },
  { path: "/best-crops/winter", changeFrequency: "monthly", priority: 0.7 },
  { path: "/best-crops/greenhouse", changeFrequency: "monthly", priority: 0.7 },
  { path: "/presets", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools", changeFrequency: "weekly", priority: 0.8 },
  { path: "/secret-notes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/methodology", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}>;

function hasDynamicRoutePlaceholder(value: string): boolean {
  return value.includes("[") || value.includes("]");
}

function getRouteDirectories(section: "blog" | "guides" | "tools"): string[] {
  const sectionDirectory = join(process.cwd(), "src", "app", section);

  if (!existsSync(sectionDirectory)) {
    return [];
  }

  return readdirSync(sectionDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => !hasDynamicRoutePlaceholder(entry.name))
    .filter((entry) => {
      if (section === "guides" && entry.name === "lethal-company") {
        return false;
      }
      if (section === "blog" && EXCLUDED_BLOG_SLUGS.has(entry.name)) {
        return false;
      }
      if (section === "tools" && (entry.name === "quota-calculator" || entry.name === "lethal-company")) {
        return false;
      }
      return true;
    })
    .filter((entry) => existsSync(join(sectionDirectory, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

function getBlogLastModified(blogSlug: string): Date | undefined {
  const pagePath = join(process.cwd(), "src", "app", "blog", blogSlug, "page.tsx");

  if (!existsSync(pagePath)) {
    return undefined;
  }

  const file = readFileSync(pagePath, "utf8");

  const match = file.match(
    /openGraph\s*:\s*\{[\s\S]*?modifiedTime\s*:\s*["'`]([^"'`]+)["'`]/m,
  );

  if (!match?.[1]) {
    return undefined;
  }

  const parsed = new Date(match[1]);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function getVerifiedLastModified(path: string): Date | undefined {
  const value = VERIFIED_LAST_MODIFIED.get(path);
  return value ? new Date(`${value}T00:00:00.000Z`) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ENTRIES.map((entry) => ({
    url: `${SITE_ORIGIN}${entry.path === "/" ? "" : entry.path}`,
    lastModified: getVerifiedLastModified(entry.path),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getRouteDirectories("blog").map((slug) => {
    const path = `/blog/${slug}`;
    return {
      url: `${SITE_ORIGIN}${path}`,
      lastModified: getBlogLastModified(slug) ?? getVerifiedLastModified(path),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  const guideEntries: MetadataRoute.Sitemap = getRouteDirectories("guides").map((slug) => {
    const path = `/guides/${slug}`;
    return {
      url: `${SITE_ORIGIN}${path}`,
      lastModified: getVerifiedLastModified(path),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const toolEntries: MetadataRoute.Sitemap = getRouteDirectories("tools").map((slug) => {
    const path = `/tools/${slug}`;
    return {
      url: `${SITE_ORIGIN}${path}`,
      lastModified: getVerifiedLastModified(path),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  const secretNotesEntries: MetadataRoute.Sitemap = secretNotes
    .filter((note) => note.id === 19 || note.id === 22)
    .map((note) => ({
      url: `${SITE_ORIGIN}/secret-notes/${note.id}`,
      lastModified: getVerifiedLastModified(`/secret-notes/${note.id}`),
      changeFrequency: "monthly",
      priority: 0.7,
    } satisfies MetadataRoute.Sitemap[number]));

  return [...staticEntries, ...blogEntries, ...guideEntries, ...toolEntries, ...secretNotesEntries].filter(
    (entry) => !hasDynamicRoutePlaceholder(entry.url),
  );
}
