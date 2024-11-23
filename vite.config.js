import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 安裝並匯入插件
import Icons from 'unplugin-icons/vite'
// 安裝並匯入插件
import Pages from 'vite-plugin-pages'
// 安裝並匯入插件
import Components from 'unplugin-vue-components/vite'

import IconsResolver from 'unplugin-icons/resolver'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          // false 表示在使用icons時無須書寫開頭i字樣
          prefix: false,
          // 只需拿取指定範圍內的圖集
          enabledCollections: ['heroicons-outline','ri'],
        })
      ]
    }),
    Icons({ /* options */ }),
    Pages(),
  ],
})
