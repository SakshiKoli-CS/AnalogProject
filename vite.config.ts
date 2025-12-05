/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true,
      prerender: {
        routes: ['/', '/about-us'],
      },
      nitro: {
        routeRules: {
          // SSR route should be server-rendered on each request (not prerendered)
          '/ssr': {
            ssr: true,
            headers: {
              'Cache-Control': 'no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0',
            },
          },
          // SSR API route with cache-control headers
          '/ssr-api': {
            ssr: true,
            headers: {
              'Cache-Control': 'no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0',
            },
          },
          // CSR route - client-side rendering only (no SSR)
          '/csr': {
            ssr: false,
          },
          // ISR route - Incremental Static Regeneration (regenerates every 40 seconds)
          '/isr': {
            ssr: true,
            headers: {
              'Cache-Control': 'public, s-maxage=40, stale-while-revalidate=60',
            },
          },
          // Static assets - CSS, JS, images (cache for 1 year with immutable)
          '/assets/**': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          // CSS files
          '/*.css': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          // JavaScript files
          '/*.js': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          // Image files
          '/*.jpg': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.jpeg': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.png': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.gif': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.svg': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.webp': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.ico': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          // Font files
          '/*.woff': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.woff2': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.ttf': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
          '/*.eot': {
            headers: {
              'Cache-Control': 'public, s-maxage=31536000, immutable',
            },
          },
        },
      },
    }),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
