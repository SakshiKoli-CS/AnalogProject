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
