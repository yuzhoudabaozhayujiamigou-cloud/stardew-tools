import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const BRAND = "stardewprofit.com";

function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => {
      if (!part) return part;
      if (part.length <= 3) return part.toUpperCase();
      return part[0].toUpperCase() + part.slice(1);
    })
    .join(" ");
}

export default async function opengraphImage(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const match = pathname.match(/\/blog\/([^/]+)\/?$/u);
  const slug = match?.[1] ?? "";

  const title = slug ? humanizeSlug(slug) : "Stardew Valley Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          backgroundColor: "#f5e6c8",
          backgroundImage:
            "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.55) 0 12%, transparent 13%), radial-gradient(circle at 80% 22%, rgba(255,255,255,0.45) 0 10%, transparent 11%), repeating-linear-gradient(135deg, rgba(111,75,42,0.06) 0 14px, rgba(111,75,42,0.03) 14px 28px)",
          color: "#4a321e",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              border: "3px solid rgba(124,77,46,0.55)",
              background: "rgba(255,248,232,0.85)",
              fontSize: 34,
              lineHeight: 1,
            }}
          >
            🌾
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(111,75,42,0.8)",
              }}
            >
              Stardew Valley
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "rgba(74,50,30,0.92)",
              }}
            >
              Guides & Quick Answers
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            paddingTop: 10,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>

          <div
            style={{
              width: "100%",
              height: 6,
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(124,77,46,0.75), rgba(124,77,46,0))",
            }}
          />

          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "rgba(95,66,40,0.9)",
            }}
          >
            Blog post
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 700,
            color: "rgba(74,50,30,0.86)",
          }}
        >
          <div>{BRAND}</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: "rgba(111,75,42,0.75)" }}>
            {slug ? `/blog/${slug}` : "/blog"}
          </div>
        </div>
      </div>
    ),
    size
  );
}
