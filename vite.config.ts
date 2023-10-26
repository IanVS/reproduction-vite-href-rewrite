import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': `default-src 'self'; script-src 'self' 'unsafe-inline'; base-uri 'self'; object-src 'none'; style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src fonts.gstatic.com;  connect-src 'self' https://fonts.googleapis.com;`,
    },
  },

})
