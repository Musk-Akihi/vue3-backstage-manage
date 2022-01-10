import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入antd
import antd from './plugins/antd'
// 引入全部api
import api from '@/api/index'
// global css
import '@/assets/style/index.scss'

const app = createApp(App)
// api挂载至全局（不推荐）
app.config.globalProperties.$http = api
app.config.globalProperties.author = '杜先森'
app.use(antd)
app.use(router)
app.use(store)
// DOM元素 #app 的innerHTML 将被替换为 应用根组件的模板渲染结果
app.mount('#app')

export default app
