import { defineConfig } from 'vite'
import path from 'path';
const { createVuePlugin } = require('vite-plugin-vue2')

export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    manifest: true,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `assets/[name].js`,
    //     chunkFileNames: `assets/[name].js`,
    //     assetFileNames: `assets/[name].[ext]`
    //   }
    // },
    output: {
      manualChunks: undefined
    }
  },
  css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "./src/assets/scss/variables.scss";` },
      },
    },
  define: {
    'process.env': process.env
  },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
})