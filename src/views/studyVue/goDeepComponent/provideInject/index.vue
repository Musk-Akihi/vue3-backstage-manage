<!--
  无论组件层次结构多深，父组件都可以作为其所有子组件的依赖提供者。
  这个特性有两个部分：父组件有一个provide选项来提供数据，子组件接收这些数据.
-->
<template>
  <h2>provide-inject</h2>

  <itemParentVue></itemParentVue>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import itemParentVue from './components/itemParent.vue'

export default defineComponent({
  name: 'ProvideInject',

  components: {
    itemParentVue
  },

  // 要访问组件实例property，我们需要将provide转换为返回对象的函数
  // 默认情况下 provide/inject 绑定并不是响应式的
  // ref 或 reactive 或 computed
  provide() {
    return {
      user: '杜心武啊',
      todos: this.todos
    }
  },

  setup(props) {
    const todos = reactive(['语文', '数学', '英语'])
    return {
      todos
    }
  }
})
</script>
