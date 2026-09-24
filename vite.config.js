import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://riteshparmar15.github.io/DemoProStaff/
export default defineConfig({
  base: '/DemoProStaff/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    open: true,
  },
})
