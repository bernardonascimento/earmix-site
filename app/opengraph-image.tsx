import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "EarMix — Seu mix de fone, na palma da mão";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Segmentos de VU decorativos (ecoam o hero do site).
const VU = [
  { h: 210, c: "#22c55e" },
  { h: 150, c: "#22c55e" },
  { h: 250, c: "#ffd60a" },
  { h: 120, c: "#22c55e" },
  { h: 190, c: "#22c55e" },
  { h: 280, c: "#ff453a" },
  { h: 160, c: "#3b82f6" },
];

export default async function Image() {
  const iconData = await readFile(join(process.cwd(), "public/icon.png"));
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0a0a0e 0%, #15151d 100%)",
          color: "#f2f2f7",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* VU ambiente à direita */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "flex-end",
            gap: 18,
            paddingRight: 80,
            paddingBottom: 80,
            opacity: 0.9,
          }}
        >
          {VU.map((s, i) => (
            <div
              key={i}
              style={{
                width: 26,
                height: s.h,
                borderRadius: 8,
                background: s.c,
              }}
            />
          ))}
        </div>

        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img src={iconSrc} width={76} height={76} alt="" />
          <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            EarMix
          </span>
        </div>

        {/* Headline + selo */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#22c55e",
              marginBottom: 24,
            }}
          >
            Seu retorno, no seu controle
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
              Seu mix de fone,
            </span>
            <span
              style={{
                fontSize: 82,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -2,
                color: "#3b82f6",
              }}
            >
              na palma da mão
            </span>
          </div>
          <span style={{ fontSize: 30, color: "#9a9aa8", marginTop: 34 }}>
            Behringer X32 · Midas M32 · pela rede Wi-Fi
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
