import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { fileURLToPath, URL } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: "https://institutorizoma.com.br",
  build: {
    assets: 'assets'
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
