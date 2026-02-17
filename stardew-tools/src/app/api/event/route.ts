import { NextRequest, NextResponse } from "next/server";

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

  if (event !== "cta_click" || !from.startsWith("/blog/") || !to.startsWith("/calculator")) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const fromSlug = from.replace("/blog/", "");

  console.log(
    JSON.stringify({
      type: "analytics_event",
      event,
      from,
      fromSlug,
      to,
      ctaName,
      at: new Date().toISOString(),
    }),
  );

  return NextResponse.json({ ok: true });
}
