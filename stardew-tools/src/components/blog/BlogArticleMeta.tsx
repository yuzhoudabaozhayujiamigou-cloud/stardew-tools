import Link from "next/link";

import { EDITORIAL_AUTHOR_NAME, EDITORIAL_AUTHOR_PATH } from "@/lib/editorial";

type BlogArticleMetaProps = {
  published: string;
  updated?: string;
  author?: string;
};

export function BlogArticleMeta({
  published,
  updated = published,
  author = EDITORIAL_AUTHOR_NAME,
}: BlogArticleMetaProps) {
  return (
    <p className="mt-3 text-xs font-semibold text-[#6f4b2a]/75">
      By{" "}
      {author === EDITORIAL_AUTHOR_NAME ? (
        <Link href={EDITORIAL_AUTHOR_PATH} className="underline decoration-[#8a5b3a]/45 underline-offset-4">
          {author}
        </Link>
      ) : (
        author
      )}{" "}
      · Published <time dateTime={published}>{published}</time> · Updated{" "}
      <time dateTime={updated}>{updated}</time>
    </p>
  );
}
