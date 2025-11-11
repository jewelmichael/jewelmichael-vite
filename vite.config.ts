import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: './', // use '/' if hosting at root, or './' for relative paths
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Optional: make variables and mixins globally available
        additionalData: `
          @use "@/styles/utils/variables" as vars;
          @use "@/styles/utils/mixins" as mixins;
        `,
      },
    },
  },
})
