"use client";

interface PhoneMockupProps {
  className?: string;
  animate?: boolean;
  tilt?: boolean;
}

export default function PhoneMockup({
  className = "",
  animate = true,
  tilt = true,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={
        tilt
          ? { perspective: "1200px", perspectiveOrigin: "50% 50%" }
          : undefined
      }
    >
      {/* Phone shell */}
      <div
        className={animate ? "animate-float" : ""}
        style={tilt ? { transform: "rotateY(-8deg) rotateX(3deg)" } : undefined}
      >
        <div
          style={{
            position: "relative",
            width: "280px",
            height: "580px",
            borderRadius: "2.75rem",
            background: "linear-gradient(160deg, #1c2b3a 0%, #0f1c2b 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.08) inset," +
              "0 32px 80px rgba(13,32,61,0.28)," +
              "0 8px 24px rgba(13,32,61,0.14)," +
              "0 0 60px rgba(74,159,212,0.08)",
            padding: "12px",
          }}
        >
          {/* Volume up button */}
          <div
            style={{
              position: "absolute",
              left: "-3px",
              top: "88px",
              width: "3px",
              height: "32px",
              borderRadius: "2px 0 0 2px",
              background: "linear-gradient(180deg, #2a3d52 0%, #1a2d40 100%)",
            }}
          />
          {/* Volume down button */}
          <div
            style={{
              position: "absolute",
              left: "-3px",
              top: "130px",
              width: "3px",
              height: "56px",
              borderRadius: "2px 0 0 2px",
              background: "linear-gradient(180deg, #2a3d52 0%, #1a2d40 100%)",
            }}
          />
          {/* Silent switch */}
          <div
            style={{
              position: "absolute",
              left: "-3px",
              top: "196px",
              width: "3px",
              height: "56px",
              borderRadius: "2px 0 0 2px",
              background: "linear-gradient(180deg, #2a3d52 0%, #1a2d40 100%)",
            }}
          />
          {/* Power button */}
          <div
            style={{
              position: "absolute",
              right: "-3px",
              top: "148px",
              width: "3px",
              height: "72px",
              borderRadius: "0 2px 2px 0",
              background: "linear-gradient(180deg, #2a3d52 0%, #1a2d40 100%)",
            }}
          />

          {/* Screen */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "2.25rem",
              overflow: "hidden",
              background: "linear-gradient(160deg, #e8f3fb 0%, #f0f7ff 40%, #f9f3f0 100%)",
              position: "relative",
            }}
          >
            {/* Dynamic island */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90px",
                height: "28px",
                borderRadius: "14px",
                background: "linear-gradient(160deg, #0a1520 0%, #0f1c2b 100%)",
                zIndex: 10,
              }}
            />

            {/* Screen content */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "64px",
                paddingLeft: "18px",
                paddingRight: "18px",
                paddingBottom: "28px",
              }}
            >
              {/* Status bar */}
              <div
                style={{
                  alignSelf: "flex-start",
                  marginLeft: "4px",
                  marginBottom: "18px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#10243f",
                  opacity: 0.45,
                }}
              >
                9:41
              </div>

              {/* App header */}
              <div
                style={{
                  alignSelf: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#4a9fd4",
                    marginBottom: "4px",
                  }}
                >
                  Good morning
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#10243f",
                    lineHeight: 1.2,
                  }}
                >
                  Today&apos;s check-in
                </div>
              </div>

              {/* Prompt card */}
              <div
                style={{
                  width: "100%",
                  borderRadius: "1rem",
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(8px)",
                  padding: "16px",
                  boxShadow:
                    "0 4px 20px rgba(13, 32, 61, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#4a9fd4",
                    marginBottom: "10px",
                  }}
                >
                  Today&apos;s prompt
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <div
                    style={{
                      height: "9px",
                      borderRadius: "6px",
                      background: "rgba(16,36,63,0.12)",
                    }}
                  />
                  <div
                    style={{
                      height: "9px",
                      borderRadius: "6px",
                      background: "rgba(16,36,63,0.08)",
                      width: "88%",
                    }}
                  />
                  <div
                    style={{
                      height: "9px",
                      borderRadius: "6px",
                      background: "rgba(16,36,63,0.06)",
                      width: "65%",
                    }}
                  />
                </div>
              </div>

              {/* Mood row */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "6px",
                  marginBottom: "auto",
                }}
              >
                {["😌", "🙂", "😊", "😐", "😔"].map((emoji, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: "36px",
                      borderRadius: "10px",
                      background: i === 2
                        ? "rgba(74, 159, 212, 0.18)"
                        : "rgba(255, 255, 255, 0.5)",
                      border: i === 2
                        ? "1.5px solid rgba(74,159,212,0.4)"
                        : "1px solid rgba(220,228,239,0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              {/* Record button */}
              <div
                style={{
                  marginTop: "20px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4a9fd4 0%, #2d7fb5 100%)",
                  boxShadow: "0 6px 20px rgba(74, 159, 212, 0.40)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "14px solid white",
                    marginLeft: "3px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow behind phone */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(74,159,212,0.18), transparent 70%)",
          transform: "scale(1.4)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}
