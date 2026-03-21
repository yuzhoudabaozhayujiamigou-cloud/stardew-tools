import type { Metadata } from "next";
import { getAllBlogSlugs, getBlogModule } from "@/lib/blog-registry";

/* -----------------------------------------
 * Dynamic Blog Route
 *
 * This route dynamically loads each existing blog page module at:
 *   src/app/blog/<slug>/page.tsx
 *
 * It preserves:
 * - URL structure: /blog/<slug>
 * - metadata export per page
 * - JSX content per page
 *
 * To keep SSG, we provide generateStaticParams for all known slugs.
 * ----------------------------------------- */

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const mod = await getBlogModule(slug);
  // If a page module exports metadata, reuse it.
  return (mod.metadata as Metadata) || {};
}

export default async function BlogSlugPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const mod = await getBlogModule(slug);
  const Page = mod.default;

  if (!Page) {
    // If the module doesn't export default, throw to show 500 and surface error.
    throw new Error(`Blog module for slug "${slug}" has no default export`);
  }

  return <Page />;
}
