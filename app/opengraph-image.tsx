import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Balu — Your daily video check-in";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#0d1e38",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blue ambient glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            backgroundColor: "rgba(74,159,212,0.13)",
            display: "flex",
          }}
        />

        {/* Warm ambient glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: 40,
            width: 420,
            height: 420,
            borderRadius: "50%",
            backgroundColor: "rgba(200,125,94,0.10)",
            display: "flex",
          }}
        />

        {/* Subtle mid glow */}
        <div
          style={{
            position: "absolute",
            top: 200,
            left: 500,
            width: 300,
            height: 300,
            borderRadius: "50%",
            backgroundColor: "rgba(74,159,212,0.05)",
            display: "flex",
          }}
        />

        {/* ── Left column ──────────────────────── */}

        {/* "EARLY ACCESS" badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1.5px solid rgba(74,159,212,0.35)",
            borderRadius: 999,
            padding: "10px 26px",
            marginBottom: 40,
            color: "#7ec2e8",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          EARLY ACCESS
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 118,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: 28,
            letterSpacing: "0.015em",
          }}
        >
          Balu
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#6b8bab",
            lineHeight: 1.5,
            maxWidth: 620,
            fontWeight: 400,
          }}
        >
          Reflect, reset, and stay intentional every day.
        </div>

        {/* Accent lines — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 76,
            left: 100,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 56,
              height: 4,
              borderRadius: 999,
              backgroundColor: "#4a9fd4",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 28,
              height: 4,
              borderRadius: 999,
              backgroundColor: "#c87d5e",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 14,
              height: 4,
              borderRadius: 999,
              backgroundColor: "rgba(74,159,212,0.28)",
              display: "flex",
            }}
          />
        </div>

        {/* ── Right column — decorative card stack ── */}
        {/* Total height: 128 + 96 + 84 + 16 + 16 = 340px; top = (630-340)/2 = 145 */}
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 145,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Card 1 — prompt card */}
          <div
            style={{
              width: 296,
              height: 128,
              borderRadius: 22,
              backgroundColor: "rgba(74,159,212,0.07)",
              border: "1px solid rgba(74,159,212,0.18)",
              display: "flex",
              flexDirection: "column",
              padding: "22px 26px",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#4a9fd4",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 100,
                  height: 9,
                  borderRadius: 6,
                  backgroundColor: "rgba(255,255,255,0.14)",
                  display: "flex",
                }}
              />
            </div>
            <div
              style={{
                width: 220,
                height: 8,
                borderRadius: 6,
                backgroundColor: "rgba(255,255,255,0.08)",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 180,
                height: 8,
                borderRadius: 6,
                backgroundColor: "rgba(255,255,255,0.06)",
                display: "flex",
              }}
            />
          </div>

          {/* Card 2 — streak card */}
          <div
            style={{
              width: 296,
              height: 96,
              borderRadius: 22,
              backgroundColor: "rgba(200,125,94,0.08)",
              border: "1px solid rgba(200,125,94,0.18)",
              display: "flex",
              flexDirection: "column",
              padding: "18px 26px",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#c87d5e",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 9,
                  borderRadius: 6,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  display: "flex",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {[1, 1, 1, 1, 0, 1, 1].map((active, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 20,
                    borderRadius: 5,
                    backgroundColor: active
                      ? "rgba(74,159,212,0.45)"
                      : "rgba(255,255,255,0.06)",
                    display: "flex",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card 3 — subtle */}
          <div
            style={{
              width: 296,
              height: 84,
              borderRadius: 22,
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              padding: "18px 26px",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 160,
                height: 8,
                borderRadius: 6,
                backgroundColor: "rgba(255,255,255,0.09)",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 220,
                height: 8,
                borderRadius: 6,
                backgroundColor: "rgba(255,255,255,0.05)",
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
