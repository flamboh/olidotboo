// @ts-check
import cloudflare from "@astrojs/cloudflare";
import stylex from "@stylexjs/unplugin";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  env: {
    schema: {
      LASTFM_API_KEY: envField.string({ context: "server", access: "secret" }),
    },
  },
  vite: {
    plugins: [stylex.vite({ useCSSLayers: true })],
  },
});
