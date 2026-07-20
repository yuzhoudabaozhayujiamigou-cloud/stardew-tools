import Link from "next/link";

import {
  EDITORIAL_AUTHOR_NAME,
  EDITORIAL_AUTHOR_PATH,
  VERIFIED_REVIEW_DATE,
  VERIFIED_REVIEW_DATE_LABEL,
} from "@/lib/editorial";

type EditorialReviewProps = {
  gameVersion?: string;
  className?: string;
};

export function EditorialReview({ gameVersion, className = "" }: EditorialReviewProps) {
  return (
    <p className={`mt-4 text-sm leading-6 text-[#5f4228]/85 ${className}`.trim()}>
      By{" "}
      <Link className="font-semibold underline decoration-[#8a5b3a]/45 underline-offset-4" href={EDITORIAL_AUTHOR_PATH}>
        {EDITORIAL_AUTHOR_NAME}
      </Link>{" "}
      <span aria-hidden="true">·</span> Reviewed{" "}
      <time dateTime={VERIFIED_REVIEW_DATE}>{VERIFIED_REVIEW_DATE_LABEL}</time>
      {gameVersion ? <> <span aria-hidden="true">·</span> Game version {gameVersion}</> : null}
    </p>
  );
}
