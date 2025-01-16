import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.png|\.jpg|\.jpeg|\.svg|\.gif|\.webp$/.test(assetInfo.name)) {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
})



