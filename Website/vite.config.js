import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',          // 👈 Make asset URLs relative
  plugins: [react()],
  server: {
    host: true,        // Exposes your server to the local network
  },
})
