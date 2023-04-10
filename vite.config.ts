import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'

import type { UserConfigExport } from 'vite'


export default ():UserConfigExport =>{
	return{
		define: {
			__DEV__:process.env.NODE_ENV !== 'production'
		},
		plugins: [
			vue(),
			// jsx支持 https://www.npmjs.com/package/@vitejs/plugin-vue-jsx?activeTab=readme
			vueJsx()
		]
	}
}