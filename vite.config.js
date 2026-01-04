import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // This ensures assets load correctly on GitHub Pages later
  base: '/', 
})