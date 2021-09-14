import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入Antd
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(Antd)
app.use(Button)
app.mount('#app')
