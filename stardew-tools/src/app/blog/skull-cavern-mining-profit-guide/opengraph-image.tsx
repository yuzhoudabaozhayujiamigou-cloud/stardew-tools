import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Skull Cavern Mining Profit Guide - Stardew Valley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #23160f 0%, #5c4033 55%, #8a5b3a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          color: "#f7edd2",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.14,
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(255,255,255,.18) 28px, rgba(255,255,255,.18) 56px)",
          }}
        />

        <div
          style={{
            background: "rgba(35, 22, 15, 0.78)",
            borderRadius: "32px",
            border: "6px solid rgba(247, 237, 210, 0.35)",
            padding: "56px 74px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "1020px",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "rgba(247, 237, 210, 0.78)",
              marginBottom: "18px",
            }}
          >
            Skull Cavern Guide
          </div>

          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#fff7e8",
              marginBottom: "24px",
            }}
          >
            Skull Cavern Mining Profit Guide
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(247, 237, 210, 0.92)",
              marginBottom: "34px",
            }}
          >
            Iridium • Bomb Routes • Gold per Day
          </div>

          <div
            style={{
              display: "flex",
              gap: "34px",
              fontSize: 22,
              color: "#ffd88a",
              fontWeight: 700,
            }}
          >
            <div>💣 Fast bomb routes</div>
            <div>⛏️ More iridium</div>
            <div>💰 Better gold/day</div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 38,
            fontSize: 26,
            fontWeight: 700,
            color: "rgba(255, 247, 232, 0.88)",
          }}
        >
          StardewProfit.com
        </div>
      </div>
    ),
    { ...size }
  );
}
