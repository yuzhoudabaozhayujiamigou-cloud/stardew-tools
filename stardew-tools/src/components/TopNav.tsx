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
    label: "Calculator",
    icon: "🧮",
  },
  {
    href: "/secret-notes",
    label: "Secret Notes",
    icon: "🗒️",
  },
];

function isActiveLink(pathname: string, href: string): boolean {
  if (href === "/calculator") {
    return pathname === "/" || pathname === "/calculator";
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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link href="/calculator" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a321e]">
          <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
            🌾
          </span>
          Stardew Tools
        </Link>

        <nav aria-label="Global navigation" className="flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
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
      </div>
    </header>
  );
}
