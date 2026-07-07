import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://earmix.com.br"),
  title: "EarMix — Seu mix de fone, na palma da mão",
  description:
    "Controle o seu retorno de palco (fone/in-ear) direto do celular numa mesa Behringer X32 ou Midas M32. Volume, VU em tempo real e presets, na rede Wi-Fi da mesa.",
  openGraph: {
    title: "EarMix — Seu mix de fone, na palma da mão",
    description:
      "Controle o seu retorno de palco numa Behringer X32 / Midas M32 pelo celular.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${grotesk.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stage text-ink">{children}</body>
    </html>
  );
}
