import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "@/lib/site";

const STATIC_ENTRIES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/secret-notes", changeFrequency: "weekly", priority: 0.8 },
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}>;

function getBlogDirectories(): string[] {
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

  const blogEntries: MetadataRoute.Sitemap = getBlogDirectories().map((slug) => ({
    url: `${SITE_ORIGIN}/blog/${slug}`,
    lastModified: getBlogLastModified(slug, now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const secretNotesEntries: MetadataRoute.Sitemap = Array.from({ length: 25 }, (_, index) => {
    const noteId = index + 1;

    return {
      url: `${SITE_ORIGIN}/secret-notes/${noteId}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    } satisfies MetadataRoute.Sitemap[number];
  });

  return [...staticEntries, ...blogEntries, ...secretNotesEntries];
}
