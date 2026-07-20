import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('@splinetool')) return 'vendor-spline';
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor-react';
            return 'vendor-core';
          }
        }
      }
    }
  },
})
