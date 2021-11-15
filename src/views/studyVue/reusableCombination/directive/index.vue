<template>
  <h2>自定义指令</h2>

  <input type="text" value="123" />
  <input v-partFocus type="text" value="456" />

  <br />
  <hr />
  <br />

  <ComponentA></ComponentA>
</template>

<script>
import { defineComponent } from 'vue'
import ComponentA from './components/componentA.vue'

export default defineComponent({
  name: 'Directive',

  components: {
    ComponentA
  },

  /*
  // 注册一个全局自定义指令 'v-focus'
  app.directive('focus', {
    // 当被绑定的元素挂载到 DOM 中时...
    mounted(el) {
      // 聚焦元素
      el.focus()
    }
  })
  */

  // 局部指令
  directives: {
    partFocus: {
      // 指令的定义
      created() {
        console.log('directive - created...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      beforeMount() {
        console.log('directive - beforeMount...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      // 在绑定元素的父组件被挂载后调用
      mounted(el) {
        // 聚焦元素
        el.focus()
        console.log('directive - mounted...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      // 在更新包含组件的VNode之前调用
      beforeUpdate() {
        console.log('directive - beforeUpdate...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      // 在包含组件的VNode及其子组件的VNode更新后调用
      updated() {
        console.log('directive - updated...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      // 在卸载绑定元素的父组件 之前调用
      beforeUnmount() {
        console.log('directive - beforeUnmount...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      // 当指令与元素解除绑定且父组件已卸载时，只调用一次
      unmounted() {
        console.log('directive - unmounted...')
        console.log('😊😊😊😊😊😊😊😊😊😊')
      }
    }
  },

  setup(props) {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
