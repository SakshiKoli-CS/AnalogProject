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
        routes: ['/', '/isr'],
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
          // ISR route - statically generated with revalidation every 20 seconds
          '/isr': {
            isr: 20, // Revalidate every 20 seconds
            headers: {
              'Cache-Control': 'public, s-maxage=20, stale-while-revalidate=20',
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
