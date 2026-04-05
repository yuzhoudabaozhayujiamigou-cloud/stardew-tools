import Link from "next/link";
import type { ReactNode } from "react";

const NEXT_GUIDES = [
  {
    href: "/blog/best-crops-every-season",
    title: "Best Crops Every Season",
    description: "Pick the best target crop after you compare ROI in the calculator.",
  },
  {
    href: "/blog/stardew-valley-profit-guide",
    title: "Stardew Valley Profit Guide",
    description: "Use this when you want a full farm profit plan after the calculator result.",
  },
  {
    href: "/guides/greenhouse-profit-guide",
    title: "Greenhouse Profit Guide",
    description: "Turn calculator winners into stable year-round greenhouse income.",
  },
  {
    href: "/blog/keg-vs-jar-profit-guide",
    title: "Keg vs Jar Profit Guide",
    description: "Decide the best processing path for the crop you just selected.",
  },
];

type CalculatorLayoutProps = {
  children: ReactNode;
};

export default function CalculatorLayout({ children }: CalculatorLayoutProps) {
  return (
    <div className="space-y-5">
      <section className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-300/50 bg-gradient-to-br from-emerald-50 via-lime-50/50 to-white p-4 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Start Here
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Get your best crop answer fast, then move to the right profit guide.
          </h2>
          <p className="mt-2 text-sm text-slate-700 sm:text-base">
            Use the calculator first. Then continue with the exact guide that matches
            your next decision.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="#profit-calculator"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Jump to Calculator
            </a>
            <Link
              href="/blog/stardew-valley-profit-guide"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Read Profit Guide
            </Link>
          </div>
          <nav
            aria-label="Next step guides"
            className="mt-4 grid gap-2 sm:grid-cols-2"
          >
            {NEXT_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-xl border border-slate-200 bg-white/90 p-3 transition hover:border-emerald-300 hover:bg-white"
              >
                <p className="text-sm font-semibold text-slate-900">{guide.title}</p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  {guide.description}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <div id="profit-calculator">{children}</div>
    </div>
  );
}
