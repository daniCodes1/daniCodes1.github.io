import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/daniCodes1.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the correct output directory
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite can resolve .jsx files
  },
})
