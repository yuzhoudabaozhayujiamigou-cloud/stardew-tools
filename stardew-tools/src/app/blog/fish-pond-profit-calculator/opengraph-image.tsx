import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fish Pond Profit Calculator - Stardew Valley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #9ed7a4 0%, #7cb88f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.3) 35px, rgba(255,255,255,.3) 70px)",
          }}
        />

        {/* Content card */}
        <div
          style={{
            background: "rgba(243, 229, 191, 0.95)",
            borderRadius: "32px",
            border: "6px solid rgba(124, 77, 46, 0.8)",
            padding: "60px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "1000px",
            boxShadow: "0 20px 60px rgba(56, 41, 23, 0.4)",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "rgba(111, 75, 42, 0.75)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "20px",
            }}
          >
            Fish Pond Guide
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#4a321e",
              lineHeight: 1.1,
              marginBottom: "30px",
            }}
          >
            Fish Pond Profit Calculator
          </div>

          <div
            style={{
              fontSize: 32,
              color: "rgba(95, 66, 40, 0.9)",
              lineHeight: 1.4,
              marginBottom: "40px",
            }}
          >
            Best Fish to Raise • Roe Value • Bonus Items
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: 24,
              color: "#2f6a3a",
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              🐟 Lava Eel: 213g/day
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              🐟 Sturgeon: 175g/day
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              🐟 Blobfish: 196g/day
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          StardewProfit.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
