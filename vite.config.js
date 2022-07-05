import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://127.0.0.1'
    }
  },
  plugins: [
    vue(),
    vueJsx({
      include: /\.(jsx|tsx)/
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss"
        `
      }
    }
  }
})
