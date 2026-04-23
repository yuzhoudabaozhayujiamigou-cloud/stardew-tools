import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const GONE_PATHS = new Set([
  "/guides/lethal-company",
  "/guides/lethal-company/day-1-vs-day-2-sell",
  "/guides/lethal-company/deadline-day-3-sell",
  "/guides/lethal-company/fastest-money-route-2026",
  "/guides/lethal-company/moons-command-guide",
  "/guides/lethal-company/quota-formula-explained",
  "/guides/lethal-company/quota-growth-spikes",
  "/guides/lethal-company/scan-command-guide",
  "/guides/lethal-company/store-command-guide",
  "/guides/lethal-company/terminal-commands-list",
  "/guides/lethal-company/view-monitor-and-bestiary",
  "/tools/lethal-company/patch-notes/v45",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/tools/quota-calculator") {
    return NextResponse.redirect(new URL("/calculator", request.url), 301);
  }

  if (GONE_PATHS.has(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "X-Robots-Tag": "noindex, nofollow, noarchive",
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/tools/quota-calculator",
    "/guides/lethal-company",
    "/guides/lethal-company/:path*",
    "/tools/lethal-company/:path*",
  ],
};
