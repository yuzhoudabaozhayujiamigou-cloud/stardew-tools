export type AnalyticsEventName = "cta_click";

export type AnalyticsEventRecord = {
  event: AnalyticsEventName;
  from: string;
  fromSlug: string;
  to: string;
  ctaName: string;
  at: string;
  ua: string;
};

type EventStoreState = {
  countsByFromSlug: Record<string, number>;
  recentEvents: AnalyticsEventRecord[];
};

type GlobalStore = typeof globalThis & {
  __stardewEventStore?: EventStoreState;
};

const MAX_RECENT_EVENTS = 200;

function getStore() {
  const globalStore = globalThis as GlobalStore;

  if (!globalStore.__stardewEventStore) {
    globalStore.__stardewEventStore = {
      countsByFromSlug: {},
      recentEvents: [],
    };
  }

  return globalStore.__stardewEventStore;
}

export function recordAnalyticsEvent(event: AnalyticsEventRecord) {
  const store = getStore();

  store.countsByFromSlug[event.fromSlug] = (store.countsByFromSlug[event.fromSlug] ?? 0) + 1;
  store.recentEvents.unshift(event);

  if (store.recentEvents.length > MAX_RECENT_EVENTS) {
    store.recentEvents.length = MAX_RECENT_EVENTS;
  }
}

export function getFromSlugCounts(eventName: AnalyticsEventName = "cta_click") {
  if (eventName !== "cta_click") {
    return [] as Array<{ fromSlug: string; count: number }>;
  }

  const store = getStore();

  return Object.entries(store.countsByFromSlug)
    .map(([fromSlug, count]) => ({ fromSlug, count }))
    .sort((a, b) => b.count - a.count || a.fromSlug.localeCompare(b.fromSlug));
}

export function getRecentEvents(eventName: AnalyticsEventName = "cta_click", limit = 50) {
  const store = getStore();

  return store.recentEvents
    .filter((item) => item.event === eventName)
    .slice(0, Math.max(1, Math.min(limit, 200)));
}
