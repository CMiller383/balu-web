import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          backgroundColor: "#10243f",
          position: "relative",
        }}
      >
        {/* Subtle blue glow */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(74,159,212,0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: 108,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size }
  );
}
