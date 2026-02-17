import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getFromSlugCounts,
  getRecentEvents,
  type AnalyticsEventName,
} from "@/lib/eventStore";

type OpsEventsPageProps = {
  searchParams?: Promise<{
    key?: string | string[];
    event?: string | string[];
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ops Events | Stardew Tools",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

function getFirstValue(value: string | string[] | undefined) {
  if (typeof value === "undefined") {
    return "";
  }

  return Array.isArray(value) ? value[0] ?? "" : value;
}

function normalizeEvent(value: string): AnalyticsEventName {
  if (value === "cta_click") {
    return "cta_click";
  }

  return "cta_click";
}

function shortUa(ua: string) {
  if (!ua) {
    return "-";
  }

  if (ua.length <= 56) {
    return ua;
  }

  return `${ua.slice(0, 56).trimEnd()}...`;
}

function formatTime(value: string) {
  const timestamp = Date.parse(value);

  if (!Number.isFinite(timestamp)) {
    return value;
  }

  return new Date(timestamp).toLocaleString("en-US", {
    hour12: false,
  });
}

export default async function OpsEventsPage(props: OpsEventsPageProps) {
  const resolvedSearchParams = props.searchParams ? await props.searchParams : undefined;
  const providedKey = getFirstValue(resolvedSearchParams?.key);
  const expectedKey = process.env.OPS_KEY?.trim();

  if (!expectedKey || providedKey !== expectedKey) {
    notFound();
  }

  const selectedEvent = normalizeEvent(getFirstValue(resolvedSearchParams?.event));
  const fromSlugCounts = getFromSlugCounts(selectedEvent);
  const topFromSlugCounts = fromSlugCounts.slice(0, 10);
  const recentEvents = getRecentEvents(selectedEvent, 50);
  const totalClicks = fromSlugCounts.reduce((sum, item) => sum + item.count, 0);

  return (
    <main className="min-h-screen bg-[#9ed7a4] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl space-y-5">
        <header className="rounded-[24px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_10px_26px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/80">Ops Dashboard</p>
          <h1 className="mt-1 text-2xl font-semibold text-[#4a321e] sm:text-3xl">Blog CTA Events</h1>
          <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
            Aggregated from in-memory event store. This view is guarded by <code>OPS_KEY</code>.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-xl border border-[#9f744c]/35 bg-[#fff8e8]/90 px-3 py-1.5 text-[#4e341f]">
              Event: <strong>{selectedEvent}</strong>
            </span>
            <span className="rounded-xl border border-[#9f744c]/35 bg-[#fff8e8]/90 px-3 py-1.5 text-[#4e341f]">
              Total clicks: <strong>{totalClicks}</strong>
            </span>
            <span className="rounded-xl border border-[#9f744c]/35 bg-[#fff8e8]/90 px-3 py-1.5 text-[#4e341f]">
              Unique slugs: <strong>{fromSlugCounts.length}</strong>
            </span>
          </div>

          <form method="get" className="mt-4 flex flex-wrap items-end gap-3">
            <input type="hidden" name="key" value={providedKey} />
            <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/80">
              Event Filter
              <select
                name="event"
                defaultValue={selectedEvent}
                className="h-10 rounded-xl border border-[#8a5b3a]/35 bg-white px-3 text-sm font-medium text-[#4a321e]"
              >
                <option value="cta_click">cta_click</option>
              </select>
            </label>
            <button
              type="submit"
              className="h-10 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 text-sm font-semibold text-[#5c3d23] transition hover:bg-[#fce8b1]"
            >
              Apply
            </button>
          </form>
        </header>

        <section className="rounded-[24px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_10px_26px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-6">
          <h2 className="text-xl font-semibold text-[#4a321e]">Top From Slugs</h2>
          {topFromSlugCounts.length === 0 ? (
            <p className="mt-3 text-sm text-[#5f4228]/85">No events yet. Trigger a blog CTA click first.</p>
          ) : (
            <ol className="mt-3 space-y-2">
              {topFromSlugCounts.map((item, index) => (
                <li
                  key={item.fromSlug}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-3 py-2"
                >
                  <span className="text-sm font-medium text-[#4e341f]">
                    {index + 1}. /blog/{item.fromSlug}
                  </span>
                  <span className="rounded-lg border border-[#9f744c]/35 bg-white px-2.5 py-1 text-xs font-semibold text-[#5b3f25]">
                    {item.count}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className="rounded-[24px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_10px_26px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-6">
          <h2 className="text-xl font-semibold text-[#4a321e]">Recent 50 Events</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-[#9f744c]/30 bg-[#fff8e8]/85">
            <table className="min-w-[860px] w-full text-left text-sm">
              <thead className="bg-[#f0dfb1] text-xs uppercase tracking-[0.12em] text-[#6f4b2a]/80">
                <tr>
                  <th className="px-3 py-2">Time</th>
                  <th className="px-3 py-2">From</th>
                  <th className="px-3 py-2">To</th>
                  <th className="px-3 py-2">UA</th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.length === 0 ? (
                  <tr>
                    <td className="px-3 py-3 text-[#5f4228]/85" colSpan={4}>
                      No events captured yet.
                    </td>
                  </tr>
                ) : (
                  recentEvents.map((item) => (
                    <tr key={`${item.at}-${item.from}-${item.to}-${item.ctaName}`} className="border-t border-[#9f744c]/20">
                      <td className="px-3 py-2 text-[#5f432a]/85">{formatTime(item.at)}</td>
                      <td className="px-3 py-2 text-[#5f432a]/85">{item.from}</td>
                      <td className="px-3 py-2 text-[#5f432a]/85">
                        <Link className="underline" href={item.to}>
                          {item.to}
                        </Link>
                      </td>
                      <td className="px-3 py-2 text-[#5f432a]/85" title={item.ua}>
                        {shortUa(item.ua)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
