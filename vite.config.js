// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import path from 'node:path';

const folderName = `${path.basename(process.cwd())}/`;
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const base = mode === 'production' ? `/${folderName}` : '/';

export default defineConfig({
  root: 'src',
  base,
  mode,
  envDir: '../',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  build: {
    outDir: '../dist',
    assetsDir: './',
  },
});
