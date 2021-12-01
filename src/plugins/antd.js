// 按需引入antd
import { Layout, Menu, Button, Cascader } from 'ant-design-vue'

const antd = {
  install(Vue) {
    Vue.component(Layout.name, Layout)
    Vue.component(Layout.Sider.name, Layout.Sider)
    Vue.component(Layout.Header.name, Layout.Header)
    Vue.component(Layout.Content.name, Layout.Content)
    Vue.component(Menu.name, Menu)
    Vue.component(Menu.Item.name, Menu.Item)
    Vue.component(Button.name, Button)
    Vue.component(Cascader.name, Cascader)
  }
}
export default antd
