"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type TrackedBlogCtaLinkProps = {
  href: string;
  fromPath: string;
  ctaName: string;
  className?: string;
  children: ReactNode;
};

function reportCtaClick(payload: {
  event: "cta_click";
  from: string;
  to: string;
  ctaName: string;
}) {
  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    const blob = new Blob([body], { type: "application/json" });
    const accepted = navigator.sendBeacon("/api/event", blob);
    if (accepted) {
      return;
    }
  }

  void fetch("/api/event", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
    keepalive: true,
  }).catch(() => {
    // best effort only
  });
}

export function TrackedBlogCtaLink(props: TrackedBlogCtaLinkProps) {
  return (
    <Link
      href={props.href}
      className={props.className}
      onClick={() => {
        reportCtaClick({
          event: "cta_click",
          from: props.fromPath,
          to: props.href,
          ctaName: props.ctaName,
        });
      }}
    >
      {props.children}
    </Link>
  );
}
