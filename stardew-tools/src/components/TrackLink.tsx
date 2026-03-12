"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type TrackLinkProps = ComponentProps<typeof Link> & {
  trackEvent?: string;
};

export function TrackLink({ trackEvent, onClick, ...props }: TrackLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        if (trackEvent) {
          // @ts-expect-error window.va is injected by Vercel Analytics when enabled.
          window.va?.track?.(trackEvent);
        }

        onClick?.(event);
      }}
    />
  );
}
