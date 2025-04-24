import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './wwwroot',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 8080, // For Azure compatibility
    proxy: process.env.NODE_ENV === 'development' ? {
      '/ask': 'http://localhost:5000',
      '/chat': 'http://localhost:5000'
    } : {}
  }
})
