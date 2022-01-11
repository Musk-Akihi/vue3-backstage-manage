<!-- component -->
<template>
  <div>component</div>
  <ButtonCounter />
</template>

<script>
import { defineComponent } from 'vue'
import app from '@/main.js'

export default defineComponent({
  name: 'Component',

  setup() {
    /**
     * 如果传入 definition 参数，则返回应用实例
     * 如果不传入 definition 参数，则返回组件定义
     */
    /*app.component('ButtonCounter', {
      data() {
        return {
          count: 0
        }
      },
      template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
    })
    */
    // console.log(app.component('ButtonCounter'))
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    /**
     * config 一个包含应用配置的对象
     */

    /**
     * directive 注册或检索全局指令
     * 具有一组生命周期钩子
     */

    // 注册 (函数指令)
    // app.directive('my-directive', () => {
    // 这将被作为 `mounted` 和 `updated` 调用
    // })

    /**
     * mixin
     * 注册全局mixins 将一个mixin应用在整个应用范围内。
     */

    /**
     * mount
     * 返回根组件实例
     * 所提供DOM元素的 innerHTML将被替换为应用根组件的模板渲染结果。
     */

    /**
     * unmount
     * 卸载应用实例的根组件
     */

    /**
     * provide
     * 设置一个可以被注入到应用范围内所有组件中的值。组件应该使用 inject 来接收 provide 的值。
     * 从 provide/inject 的角度来看，可以将应用程序视为根级别的祖先，而根组件是其唯一的子级。
     * 通过应用提供值在编写插件时尤其有用，因为插件一般不能使用组件来提供值。这是对 globalProperties 的替代选择。
     * provide 和 inject 绑定不是响应式的。这是有意为之的。不过，如果你向下传递一个响应式对象，这个对象上的 property 会保持响应式。
     */

    /**
     * use
     * 参数：
     *  Object | Function （plugin）
     *  ...options(可选)
     * 返回应用实例
     * 用法：安装Vue.js插件。如果插件是一个对象，则它必须暴露一个install方法。如果插件本身是一个函数，则它将被视为install方法。
     * 该install方法将以应用实例（app）作为第一个参数被调用。传给use的其他options参数将作为后续参数传入该安装方法。
     * 当在同一个插件上多次调用此方法时，该插件仅安装一次。
     */

    /**
     * version
     * 以字符串的形式提供已安装的Vue的版本号。
     */

    console.log(app.version)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
