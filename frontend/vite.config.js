import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:6969,
    proxy:{
      '/api':'http://localhost:6310'
    }
  },
  plugins: [react()],
})