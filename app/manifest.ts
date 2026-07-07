import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EarMix — Seu mix de fone, na palma da mão",
    short_name: "EarMix",
    description:
      "Controle o seu retorno de palco numa Behringer X32 / Midas M32 pelo celular.",
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0e",
    theme_color: "#0a0a0e",
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
