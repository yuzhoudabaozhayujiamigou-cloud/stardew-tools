import { promises as fs } from "node:fs";
import path from "node:path";

const BLOG_ROOT = path.join(process.cwd(), "src", "app", "blog");

function unique(values) {
  return [...new Set(values)];
}

function extractMetadataBlock(source) {
  const match = source.match(/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{([\s\S]*?)\};/);
  return match ? match[1] : "";
}

function hasNonEmptyField(block, fieldName) {
  const pattern = new RegExp(`${fieldName}\\s*:\\s*(["'\\x60])([\\s\\S]*?)\\1`);
  const match = block.match(pattern);
  if (!match) {
    return false;
  }

  return Boolean(match[2]?.trim());
}

function hasCalculatorLink(source) {
  return /href\s*=\s*(?:\{\s*)?["'`]\/calculator[^"'`]*["'`]/.test(source);
}

function extractNextReadSection(source) {
  const nextReadIndex = source.indexOf("Next Read");
  if (nextReadIndex === -1) {
    return "";
  }

  const closeSectionIndex = source.indexOf("</section>", nextReadIndex);
  if (closeSectionIndex === -1) {
    return source.slice(nextReadIndex);
  }

  return source.slice(nextReadIndex, closeSectionIndex + "</section>".length);
}

function extractBlogSlugs(sectionSource) {
  const slugs = [];
  const quotedHrefRegex = /href\s*=\s*["'`]\/blog\/([^"'`#?]+)(?:[^"'`]*)["'`]/g;
  const expressionHrefRegex = /href\s*=\s*\{\s*["'`]\/blog\/([^"'`#?]+)(?:[^"'`]*)["'`]\s*\}/g;

  let match = quotedHrefRegex.exec(sectionSource);
  while (match) {
    slugs.push(match[1]);
    match = quotedHrefRegex.exec(sectionSource);
  }

  match = expressionHrefRegex.exec(sectionSource);
  while (match) {
    slugs.push(match[1]);
    match = expressionHrefRegex.exec(sectionSource);
  }

  return unique(slugs);
}

function formatStatus(pass) {
  return pass ? "✅" : "❌";
}

function padRight(value, length) {
  if (value.length >= length) {
    return value;
  }

  return `${value}${" ".repeat(length - value.length)}`;
}

async function collectBlogPages() {
  const entries = await fs.readdir(BLOG_ROOT, { withFileTypes: true });

  const pages = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const slug = entry.name;
    const pagePath = path.join(BLOG_ROOT, slug, "page.tsx");

    try {
      await fs.access(pagePath);
      pages.push({ slug, pagePath });
    } catch {
      // ignore folders without page.tsx
    }
  }

  return pages.sort((a, b) => a.slug.localeCompare(b.slug));
}

async function run() {
  const pages = await collectBlogPages();

  if (!pages.length) {
    console.error("No blog pages found under src/app/blog.");
    process.exitCode = 1;
    return;
  }

  const knownSlugs = new Set(pages.map((item) => item.slug));

  const results = [];

  for (const page of pages) {
    const source = await fs.readFile(page.pagePath, "utf8");
    const metadataBlock = extractMetadataBlock(source);

    const hasMetadataTitle = hasNonEmptyField(metadataBlock, "title");
    const hasMetadataDescription = hasNonEmptyField(metadataBlock, "description");
    const hasFaqJsonLd = /"@type"\s*:\s*"FAQPage"/.test(source);
    const hasBlogPostingJsonLd = /"@type"\s*:\s*"BlogPosting"/.test(source);
    const hasCtaToCalculator = hasCalculatorLink(source);

    const nextReadSection = extractNextReadSection(source);
    const hasNextReadSection = Boolean(nextReadSection);
    const nextReadSlugs = extractBlogSlugs(nextReadSection);
    const hasInternalLinkInNextRead = nextReadSlugs.length > 0;
    const missingSlugs = nextReadSlugs.filter((slug) => !knownSlugs.has(slug));
    const noBrokenNextReadLink = missingSlugs.length === 0;

    const checks = {
      metadata: hasMetadataTitle && hasMetadataDescription,
      faqPage: hasFaqJsonLd,
      blogPosting: hasBlogPostingJsonLd,
      calculatorCta: hasCtaToCalculator,
      nextRead: hasNextReadSection && hasInternalLinkInNextRead && noBrokenNextReadLink,
    };

    const passed = Object.values(checks).every(Boolean);

    results.push({
      slug: page.slug,
      passed,
      checks,
      missingSlugs,
    });
  }

  const header = [
    padRight("Slug", 56),
    "Meta",
    "FAQ",
    "BlogPosting",
    "CTA",
    "NextRead",
    "Status",
  ].join(" | ");

  console.log("\nSEO Audit Report\n");
  console.log(header);
  console.log("-".repeat(header.length));

  for (const item of results) {
    const line = [
      padRight(item.slug, 56),
      formatStatus(item.checks.metadata),
      formatStatus(item.checks.faqPage),
      formatStatus(item.checks.blogPosting),
      formatStatus(item.checks.calculatorCta),
      formatStatus(item.checks.nextRead),
      item.passed ? "PASS" : "FAIL",
    ].join(" | ");

    console.log(line);

    if (item.missingSlugs.length) {
      console.log(`  -> Missing Next Read targets: ${item.missingSlugs.join(", ")}`);
    }
  }

  const passedCount = results.filter((item) => item.passed).length;
  const failedCount = results.length - passedCount;

  console.log(`\nSummary: ${passedCount}/${results.length} pages pass, ${failedCount} fail.`);

  if (failedCount === 0) {
    console.log("All SEO Checks Passed!");
  }

  if (failedCount > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error("seo-audit failed:", error);
  process.exitCode = 1;
});
