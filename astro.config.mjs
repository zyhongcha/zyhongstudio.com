import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.ENV === "production"
      ? "https://zyhongstudio.com/"
      : "https://localhost:4321/",
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
});
