import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Andres Rabellino";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8F7F4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 64, color: "#111111", fontFamily: "serif", marginBottom: 24 }}>
          Andres Rabellino
        </div>
        <div style={{ fontSize: 28, color: "#444444" }}>
          Strategy &amp; operations professional.
        </div>
      </div>
    ),
    { ...size }
  );
}
