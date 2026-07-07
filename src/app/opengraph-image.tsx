import { ImageResponse } from "next/og";
import { seo } from "@/data/seo";

export const alt = seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #08080F 0%, #12122A 50%, #0A1628 100%)",
          color: "#F4F4FA",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            fontSize: "22px",
            color: "#8B84FF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "4px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #6C63FF, #22D3EE)",
            }}
          />
          Portfolio
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          {seo.author}
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#A8A8C0",
            marginBottom: "40px",
            lineHeight: 1.4,
          }}
        >
          Full Stack Web Developer
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "22px",
            color: "#6C63FF",
          }}
        >
          <span>React</span>
          <span style={{ color: "#3A3A55" }}>•</span>
          <span>Next.js</span>
          <span style={{ color: "#3A3A55" }}>•</span>
          <span>TypeScript</span>
          <span style={{ color: "#3A3A55" }}>•</span>
          <span>Node.js</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "20px",
            color: "#6B6B88",
          }}
        >
          Goa, India · Remote &amp; Freelance
        </div>
      </div>
    ),
    { ...size },
  );
}
