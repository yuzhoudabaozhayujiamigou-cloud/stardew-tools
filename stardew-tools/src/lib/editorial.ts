import { SITE_ORIGIN } from "@/lib/site";

export const EDITORIAL_AUTHOR_NAME = "StardewProfit Editorial Team";
export const EDITORIAL_AUTHOR_PATH = "/about#editorial-team";
export const EDITORIAL_AUTHOR_URL = `${SITE_ORIGIN}${EDITORIAL_AUTHOR_PATH}`;
export const VERIFIED_REVIEW_DATE = "2026-07-20";
export const VERIFIED_REVIEW_DATE_LABEL = "July 20, 2026";

type ArticleJsonLdInput = {
  headline: string;
  description: string;
  path: string;
  imagePath?: string;
  datePublished?: string;
  dateModified?: string;
};

export function buildArticleJsonLd(input: ArticleJsonLdInput) {
  const dateModified = input.dateModified ?? VERIFIED_REVIEW_DATE;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${SITE_ORIGIN}${input.path}`,
    mainEntityOfPage: `${SITE_ORIGIN}${input.path}`,
    image: input.imagePath ? [`${SITE_ORIGIN}${input.imagePath}`] : undefined,
    author: {
      "@type": "Organization",
      name: EDITORIAL_AUTHOR_NAME,
      url: EDITORIAL_AUTHOR_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "StardewProfit",
      url: SITE_ORIGIN,
    },
    datePublished: input.datePublished,
    dateModified,
  };
}
