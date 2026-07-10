import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: "#0a0a0e",
  colorScheme: "dark",
};

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

const SITE_URL = "https://earmix.com.br";
const DESCRIPTION =
  "Controle o seu retorno de palco (fone/in-ear) direto do celular numa mesa Behringer X32 ou Midas M32. Volume, VU em tempo real e presets, na rede Wi-Fi da mesa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EarMix — Seu mix de fone, na palma da mão",
    template: "%s — EarMix",
  },
  description: DESCRIPTION,
  applicationName: "EarMix",
  authors: [{ name: "EarMix" }],
  creator: "EarMix",
  publisher: "EarMix",
  category: "music",
  keywords: [
    "EarMix",
    "mix de fone",
    "monitor de palco",
    "retorno in-ear",
    "Behringer X32",
    "Midas M32",
    "OSC",
    "mesa de som",
    "personal monitor mixer",
    "controle de retorno pelo celular",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "EarMix",
    locale: "pt_BR",
    title: "EarMix — Seu mix de fone, na palma da mão",
    description:
      "Controle o seu retorno de palco numa Behringer X32 / Midas M32 pelo celular.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EarMix — Seu mix de fone, na palma da mão",
    description:
      "Controle o seu retorno de palco numa Behringer X32 / Midas M32 pelo celular.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Dados estruturados (Schema.org) — ajudam o Google a entender a marca e o app.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "EarMix",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "bernardonasciimento@gmail.com",
        telephone: "+5516992452216",
        availableLanguage: ["Portuguese"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "EarMix",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "EarMix",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "iOS, Android",
      inLanguage: "pt-BR",
      url: SITE_URL,
      description: DESCRIPTION,
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${grotesk.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stage text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
        <WhatsAppFab />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
