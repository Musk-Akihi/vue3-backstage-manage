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
app.use(antd)
app.use(router)
app.use(store)
app.mount('#app')
