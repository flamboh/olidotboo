// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { defineConfig, envField, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: "Chillax",
      cssVariable: "--font-chillax",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Azeret Mono",
      cssVariable: "--font-azeret-mono",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],
  env: {
    schema: {
      LASTFM_API_KEY: envField.string({ context: "server", access: "secret" }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
