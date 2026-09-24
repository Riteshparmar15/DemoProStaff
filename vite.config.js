import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Local: /  ·  GitHub Pages: /DemoProStaff/
const pagesBase = process.env.GITHUB_PAGES === 'true' ? '/DemoProStaff/' : '/'

export default defineConfig({
  base: pagesBase,
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
