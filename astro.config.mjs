// @ts-check
import {defineConfig} from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import {getBaseUrl} from "@/utils";

// https://astro.build/config
export default defineConfig({
  site: process.env.WEBSITE_HOST,
  base: getBaseUrl(),

  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).toString(),
      },
    },
    plugins: [yaml()],
  },

  experimental: {
    contentIntellisense: true,
    svg: true,
  },
});
