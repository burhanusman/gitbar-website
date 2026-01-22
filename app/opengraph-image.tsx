import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GitBar - Your repos. Your AI projects. One glance.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050507",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Perspective grid background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(to top, rgba(0, 245, 212, 0.1), transparent)",
            display: "flex",
          }}
        />

        {/* Horizontal grid lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: `${10 + i * 8}%`,
              height: "1px",
              background: `rgba(0, 245, 212, ${0.3 - i * 0.03})`,
              display: "flex",
            }}
          />
        ))}

        {/* Glow orb behind icon */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 245, 212, 0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            zIndex: 10,
          }}
        >
          {/* App Icon */}
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "32px",
              background: "linear-gradient(135deg, #664dcc 0%, #3366e6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 0 60px rgba(102, 77, 204, 0.5), 0 0 120px rgba(51, 102, 230, 0.3)",
            }}
          >
            {/* Git branch icon */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 512 512"
              fill="white"
            >
              <rect x="167" y="102" width="24" height="307" rx="12" />
              <circle cx="179" cy="384" r="32" />
              <path
                d="M 179 281 Q 230 256 333 205"
                stroke="white"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="333" cy="205" r="32" />
              <circle cx="179" cy="102" r="32" />
            </svg>
          </div>

          {/* Title with bracket motif */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                color: "#00f5d4",
                fontSize: "48px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              [
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#ffffff",
                letterSpacing: "-2px",
                fontFamily: "system-ui",
              }}
            >
              GITBAR
            </span>
            <span
              style={{
                color: "#00f5d4",
                fontSize: "48px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              ]
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "32px",
              color: "#888888",
              fontFamily: "monospace",
              display: "flex",
              gap: "8px",
            }}
          >
            <span style={{ color: "#00f5d4" }}>$</span>
            <span>Your repos. Your AI projects. One glance.</span>
          </div>

          {/* Feature badges */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "16px",
            }}
          >
            {["Claude Code", "Codex", "macOS"].map((badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 20px",
                  border: "1px solid rgba(0, 245, 212, 0.4)",
                  borderRadius: "4px",
                  color: "#00f5d4",
                  fontSize: "18px",
                  fontFamily: "monospace",
                  background: "rgba(0, 245, 212, 0.05)",
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Scanline overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)",
            pointerEvents: "none",
            display: "flex",
          }}
        />

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #00f5d4, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
