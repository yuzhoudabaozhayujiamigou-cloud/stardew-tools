import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");

/**
 * Blog Registry
 *
 * Goal: avoid hardcoding 50+ blog routes in App Router by enumerating and
 * dynamically importing each existing blog module.
 *
 * NOTE: This implementation assumes each blog lives at:
 *   src/app/blog/<slug>/page.tsx
 * and exports:
 *   - default React component
 *   - export const metadata: Metadata
 */

export function getAllBlogSlugs(): string[] {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => {
      // exclude special folders
      if (name.startsWith("[")) return false;
      if (name.startsWith("_")) return false;
      return true;
    })
    .sort();
}

/**
 * Dynamically import an existing blog module by slug.
 * This keeps all page content + metadata exactly as-is.
 */
export async function getBlogModule(slug: string): Promise<{
  default: unknown;
  metadata?: unknown;
}> {
  return await import(`@/app/blog/${slug}/page`);
}
