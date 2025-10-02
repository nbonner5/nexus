import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'nexus',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button/Button.tsx',
        './Card': './src/components/Card/Card.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  }
})
