import { defineConfig } from "astro/config";

// GitHub Pages serves the site at https://<owner>.github.io/<repo>/.
// Override with SITE / BASE env vars when deploying to a custom domain (BASE=/).
export default defineConfig({
  site: process.env.SITE ?? "https://ducksonmoon.github.io",
  base: process.env.BASE ?? "/diyar-sazeh/",
  build: { inlineStylesheets: "auto" },
});
