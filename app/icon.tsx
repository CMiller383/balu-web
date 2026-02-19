import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          backgroundColor: "#10243f",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 20,
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
