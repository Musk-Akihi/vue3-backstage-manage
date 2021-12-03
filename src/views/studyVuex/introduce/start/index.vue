<!-- start -->
<template>
  <h2>start</h2>
  <h4>
    每一个Vuex应用的核心就是store（仓库）。
    <br />
    store基本上就是一个容器，它包含着你的应用中大部分的状态。
    <br />
    Vuex和单纯的全局对象有以下两点不同：
    <br />
    1、Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应的得到高效更新。
    <br />
    2、不能直接改变store中的状态。唯一的途径就是显式地提交（commit）mutation。
    这样使得我们可以方便地跟踪每一个状态的变化（明确追踪状态变化）
  </h4>
  <h4>
    由于store中的状态是响应式的，在组件中调用store中的状态简单到仅需在计算属性中返回即可。
    触发变化也仅仅是在组件的methods中提交mutation。
  </h4>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Start',

  components: {},

  setup(props) {
    return {}
  }
})
</script>
