import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Deen.dsgn — Product / UX/UI дизайнер";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 500, marginBottom: 28, opacity: 0.7 }}>
          Deen.dsgn
        </div>
        <div style={{ fontSize: 54, fontWeight: 500, lineHeight: 1.2, maxWidth: 940 }}>
          Создаю цифровые интерфейсы, которые интуитивны и функциональны
        </div>
      </div>
    ),
    { ...size }
  );
}
