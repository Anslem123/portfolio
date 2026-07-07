import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6C63FF 0%, #22D3EE 100%)",
          borderRadius: "36px",
          fontSize: "72px",
          fontWeight: 800,
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
