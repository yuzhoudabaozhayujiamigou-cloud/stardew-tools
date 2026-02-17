import { NextRequest, NextResponse } from "next/server";

import { recordAnalyticsEvent } from "@/lib/eventStore";

type EventPayload = {
  event?: unknown;
  from?: unknown;
  to?: unknown;
  ctaName?: unknown;
};

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let payload: EventPayload;

  try {
    payload = (await request.json()) as EventPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const event = normalizeText(payload.event, 40);
  const from = normalizeText(payload.from, 160);
  const to = normalizeText(payload.to, 220);
  const ctaName = normalizeText(payload.ctaName, 120);
  const ua = normalizeText(request.headers.get("user-agent"), 180);

  if (event !== "cta_click" || !from.startsWith("/blog/") || !to.startsWith("/calculator")) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const fromSlug = from.replace("/blog/", "");
  const at = new Date().toISOString();

  recordAnalyticsEvent({
    event: "cta_click",
    from,
    fromSlug,
    to,
    ctaName,
    at,
    ua,
  });

  console.log(
    JSON.stringify({
      type: "analytics_event",
      event,
      from,
      fromSlug,
      to,
      ctaName,
      ua,
      at,
    }),
  );

  return NextResponse.json({ ok: true });
}
