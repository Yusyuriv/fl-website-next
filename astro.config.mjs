// @ts-check
import {defineConfig} from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import process from "node:process";
import svelte from '@astrojs/svelte';

const baseUrl = "/" + (process.env.WEBSITE_BASE?.split('/')?.slice(1)?.join('/') ?? "");

// https://astro.build/config
export default defineConfig({
  site: process.env.WEBSITE_HOST,
  base: baseUrl,

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

  integrations: [svelte()],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
