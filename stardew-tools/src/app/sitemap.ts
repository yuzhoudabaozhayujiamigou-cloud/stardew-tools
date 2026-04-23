import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import type { MetadataRoute } from "next";

import { secretNotes } from "@/data/secretNotes";
import { SITE_ORIGIN } from "@/lib/site";

const STATIC_ENTRIES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/crops", changeFrequency: "weekly", priority: 0.8 },
  { path: "/presets", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/secret-notes", changeFrequency: "weekly", priority: 0.8 },
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
      if (section === "tools" && (entry.name === "quota-calculator" || entry.name === "lethal-company")) {
        return false;
      }
      return true;
    })
    .filter((entry) => existsSync(join(sectionDirectory, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

function getBlogLastModified(blogSlug: string, fallback: Date): Date {
  // Best-effort; used for stable ordering and freshness hints in sitemap.
  const pagePath = join(process.cwd(), "src", "app", "blog", blogSlug, "page.tsx");

  if (!existsSync(pagePath)) {
    return fallback;
  }

  const file = readFileSync(pagePath, "utf8");

  const match = file.match(
    /openGraph\s*:\s*\{[\s\S]*?modifiedTime\s*:\s*["'`]([^"'`]+)["'`]/m,
  );

  if (!match?.[1]) {
    return fallback;
  }

  const parsed = new Date(match[1]);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ENTRIES.map((entry) => ({
    url: `${SITE_ORIGIN}${entry.path === "/" ? "" : entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getRouteDirectories("blog").map((slug) => ({
    url: `${SITE_ORIGIN}/blog/${slug}`,
    lastModified: getBlogLastModified(slug, now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guideEntries: MetadataRoute.Sitemap = getRouteDirectories("guides").map((slug) => ({
    url: `${SITE_ORIGIN}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const toolEntries: MetadataRoute.Sitemap = getRouteDirectories("tools").map((slug) => ({
    url: `${SITE_ORIGIN}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const secretNotesEntries: MetadataRoute.Sitemap = secretNotes.map((note) => ({
    url: `${SITE_ORIGIN}/secret-notes/${note.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: note.id === 19 || note.id === 22 ? 0.7 : 0.5,
  } satisfies MetadataRoute.Sitemap[number]));

  return [...staticEntries, ...blogEntries, ...guideEntries, ...toolEntries, ...secretNotesEntries].filter(
    (entry) => !hasDynamicRoutePlaceholder(entry.url),
  );
}
