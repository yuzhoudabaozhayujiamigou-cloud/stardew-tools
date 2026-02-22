import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

import type { MetadataRoute } from "next";

import { secretNotes } from "@/data/secretNotes";
import { SITE_ORIGIN } from "@/lib/site";

const STATIC_PATHS = ["/", "/calculator", "/secret-notes"] as const;

function getBlogPaths(): string[] {
  const blogDirectory = join(process.cwd(), "src", "app", "blog");

  if (!existsSync(blogDirectory)) {
    return [];
  }

  return readdirSync(blogDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => existsSync(join(blogDirectory, entry.name, "page.tsx")))
    .map((entry) => `/blog/${entry.name}`)
    .sort((left, right) => left.localeCompare(right));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_ORIGIN}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = getBlogPaths().map((path) => ({
    url: `${SITE_ORIGIN}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const secretNoteEntries: MetadataRoute.Sitemap = secretNotes.map((note) => ({
    url: `${SITE_ORIGIN}/secret-notes/${note.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...secretNoteEntries];
}
