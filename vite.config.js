import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate source maps for debugging
    sourcemap: false,
    // Minify for production
    minify: 'esbuild',
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    // Target modern browsers
    target: 'es2020',
    // Chunk size warnings
    chunkSizeWarningLimit: 500
  },
  // Preview server config
  preview: {
    port: 4173,
    strictPort: true
  }
})

