// @ts-check
import {defineConfig} from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
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
