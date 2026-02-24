import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rodrigo Barreto | Frontend Engineer",
    short_name: "R. Barreto",
    description:
      "Frontend Engineer com 4+ anos de experiência em React, Next.js, TypeScript e React Native",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#14b8a6",
    icons: [
      {
        src: "/rbarreto-dark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
