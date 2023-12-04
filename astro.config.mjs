import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.ENV === "production"
      ? "https://zyhongstudio.com/"
      : "https://localhost:4321/",
  integrations: [tailwind()],
  output: "server",
  adapter: netlify({}),
});
