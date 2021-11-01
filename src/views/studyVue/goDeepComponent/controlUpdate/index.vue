<!-- 控制更新 -->
<template>
  <h2>控制更新</h2>
  <div>
    强制更新：如果你发现自己需要在Vue中强制更新，在99.99%的情况下，你在某个地方犯了错误。例如，你可能依赖于Vue响应性系统未跟踪的状态。比如在组件创建之后添加了data属性。
    条件罕见，必须强制更新，那么可以使用 $forceUpdate
  </div>
  <div>
    低级静态组件与v-once
    有时可能有一个包含很多静态内容的组件，在这些情况下，可以通过v-once指令来确保只对其求值一次，然后进行缓存.
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ControlUpdate',

  components: {},

  setup(props, context) {
    console.log(context)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>

<style></style>
