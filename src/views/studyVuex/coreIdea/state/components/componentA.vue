<template>
  <div>ComponentA</div>
  {{ count }}
  {{ countCopy }}
</template>

<script>
import { defineComponent, ref } from 'vue'
import store from '@/store'

export default defineComponent({
  setup(props) {
    return {}
  },

  computed: {
    // store.state.count 变化的时候，都会重新求取计算属性，触发更新相关联的DOM
    // 这种模式导致组件依赖全局状态单例。在模块化的构建系统中，需要频繁的导入.
    count() {
      return store.state.count
    },
    // Vuex通过Vue的插件系统将store实例从根组件中‘注入’到所有的子组件里。且子组件能通过this.$store访问到。
    countCopy() {
      return this.$store.state.count + 1
    }
  }
})
</script>
