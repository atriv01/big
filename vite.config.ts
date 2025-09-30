import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
  // Completely exclude Angular files and directories
  optimizeDeps: {
    exclude: ['src/**/*']
  },
  // Ignore Angular files during dev and build
  esbuild: {
    exclude: [
      'src/**/*',
      '**/*.scss',
      '**/*.component.ts',
      '**/*.service.ts',
      '**/*.routes.ts'
    ]
  }
})