import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/items': {
        target: 'http://10.93.25.242:42002',  // ← жёстко прописали
        changeOrigin: true,
        secure: false,
      },
      '/learners': {
        target: 'http://10.93.25.242:42002',
        changeOrigin: true,
        secure: false,
      },
      '/interactions': {
        target: 'http://10.93.25.242:42002',
        changeOrigin: true,
        secure: false,
      },
      '/docs': {
        target: 'http://10.93.25.242:42002',
        changeOrigin: true,
        secure: false,
      },
      '/openapi.json': {
        target: 'http://10.93.25.242:42002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})