"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  icon: string;
};

const NAV_LINKS: NavLink[] = [
  {
    href: "/calculator",
    label: "Crop Calculator",
    icon: "🧮",
  },
  {
    href: "/guides",
    label: "Guides",
    icon: "📘",
  },
  {
    href: "/best-crops",
    label: "Crop Rankings",
    icon: "🌱",
  },
  {
    href: "/tools",
    label: "Tools",
    icon: "🛠️",
  },
  {
    href: "/secret-notes",
    label: "Secret Notes",
    icon: "🗒️",
  },
];

function isActiveLink(pathname: string, href: string): boolean {
  if (href === "/calculator") {
    return pathname === "/calculator";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function shouldHideTopNav(pathname: string, embedQuery: string | null): boolean {
  if (!embedQuery) {
    return false;
  }

  return pathname.startsWith("/secret-notes/");
}

export function TopNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const embedQuery = searchParams.get("embed");

  if (shouldHideTopNav(pathname, embedQuery)) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 shadow-[0_6px_16px_rgba(56,41,23,0.2)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a321e]">
          <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
            🌾
          </span>
          StardewProfit
        </Link>

        <nav aria-label="Global navigation" className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 items-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition ${
                  isActive
                    ? "border-[#7f5731] bg-[#f9e6b0] text-[#4a321e] shadow-inner"
                    : "border-[#a77d57]/45 bg-[#fff6dd] text-[#5f432a] hover:border-[#8e623d]/70 hover:bg-[#f8ebc9]"
                }`}
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  {link.icon}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <nav aria-label="Mobile navigation" className="flex items-center gap-2 lg:hidden">
          <Link
            href="/calculator"
            aria-current={isActiveLink(pathname, "/calculator") ? "page" : undefined}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-[#a77d57]/45 bg-[#fff6dd] px-3 py-2.5 text-xs font-semibold text-[#5f432a]"
          >
            <span aria-hidden="true">🧮</span>
            Calculator
          </Link>
          <details className="group relative">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-xl border border-[#a77d57]/45 bg-[#fff6dd] px-3 py-2.5 text-xs font-semibold text-[#5f432a] marker:content-none">
              <span aria-hidden="true">☰</span>
              Browse
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-52 rounded-lg border-2 border-[#7c4d2e]/70 bg-[#fff8e8] p-2 shadow-[0_12px_28px_rgba(56,41,23,0.28)]">
              {NAV_LINKS.filter((link) => link.href !== "/calculator").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActiveLink(pathname, link.href) ? "page" : undefined}
                  className="flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-[#5f432a] hover:bg-[#f6e8bd]"
                >
                  <span aria-hidden="true">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
