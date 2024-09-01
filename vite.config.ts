import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/management-test',
  resolve: {
    alias: { src: '/src' },
  },
});
