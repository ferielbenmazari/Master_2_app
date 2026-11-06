import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vitest/config'

// Couleurs du manifeste : lues dans tokens.css (source de vérité), pas dupliquées.
const tokens = readFileSync(
  fileURLToPath(new URL('./src/styles/tokens.css', import.meta.url)),
  'utf8',
)
const token = (name: string) =>
  new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,8})`).exec(tokens)?.[1] ?? '#000000'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      // précharge les polices de la première vue (sinon demandées seulement après l'exécution du JS)
      name: 'preload-fonts',
      transformIndexHtml: {
        order: 'post',
        handler(_html, ctx) {
          return Object.keys(ctx.bundle ?? {})
            .filter((f) => /(unbounded-latin-700|manrope-latin-400)-normal.*\.woff2$/.test(f))
            .map((f) => ({
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'font',
                type: 'font/woff2',
                crossorigin: '',
                href: `./${f}`,
              },
              injectTo: 'head' as const,
            }))
        },
      },
    },
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false, // enregistrement différé dans main.tsx (le script injecté bloque le rendu)
      includeAssets: ['favicon.svg', 'icon.svg'],
      manifest: {
        name: 'Révision M2',
        short_name: 'Révision',
        lang: 'fr',
        display: 'standalone',
        start_url: './',
        scope: './',
        background_color: token('bg'),
        theme_color: token('bg'),
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{html,js,css,woff2,json,svg,png}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: 'index.html',
      },
    }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'scripts/**/*.test.ts', 'tools/**/*.test.ts'],
  },
})
