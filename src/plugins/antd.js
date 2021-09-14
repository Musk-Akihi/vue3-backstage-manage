// 按需引入antd
import { Button, Cascader } from 'ant-design-vue'

const antd = {
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(Cascader.name, Cascader)
  }
}
export default antd
