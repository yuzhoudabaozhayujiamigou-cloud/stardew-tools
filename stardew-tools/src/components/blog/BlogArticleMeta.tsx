type BlogArticleMetaProps = {
  published: string;
  updated?: string;
  author?: string;
};

export function BlogArticleMeta({
  published,
  updated = published,
  author = "StardewProfit editorial team",
}: BlogArticleMetaProps) {
  return (
    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">
      By {author} · Published <time dateTime={published}>{published}</time> · Updated{" "}
      <time dateTime={updated}>{updated}</time>
    </p>
  );
}
