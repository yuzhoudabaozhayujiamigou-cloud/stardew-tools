import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
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

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  try {
    const mod = await getBlogModule(slug);
    return (mod.metadata as Metadata) || {};
  } catch {
    notFound();
  }
}

export default async function BlogSlugPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const mod = await getBlogModule(slug);
    const Page = mod.default as ComponentType;

    if (!Page) {
      throw new Error(`Blog module for slug "${slug}" has no default export`);
    }

    return <Page />;
  } catch {
    notFound();
  }
}
