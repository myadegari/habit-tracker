import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),compression(),
    VitePWA({ registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest:{
      "name": "TrackIt",
      "short_name": "TrackIt",
      "icons": [
        {
          "src": "/habit-tracker/pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/habit-tracker/pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/habit-tracker/pwa-maskable-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/habit-tracker/pwa-maskable-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
      "start_url": "/habit-tracker/",
      "display": "standalone",
      "background_color": "#030617",
      "theme_color": "#f2f5f9",
      "description": "simple habit tracker"
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,eot,ttf,woff}'],
    }

     })
  ],
  base:'/habit-tracker/',
})
