import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio-2023/' : '/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})

