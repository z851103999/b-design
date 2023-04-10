/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'


export default (): UserConfigExport => {
  return {
    define: {
      __DEV__: process.env.NODE_ENV !== 'production'
    },
    /** 配置插件 vue，如果不配置则识别不了 vue 文件 */
    plugins: [vue()],
    test: {
      // globals: true,
      /**
       * 配置环境
       */
      environment: 'jsdom',
      css: true,
      /**
       * 包含目录
       *
       * @see include https://cn.vitest.dev/config/#include
       */
      include: ['**/__test__/*.{test,spec}.{ts,tsx}']
    }
  } as UserConfigExport
}
