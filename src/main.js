import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入antd配置文件
import antd from './plugins/antd'

const app = createApp(App)
app.use(antd)
app.use(router).use(store).mount('#app')
