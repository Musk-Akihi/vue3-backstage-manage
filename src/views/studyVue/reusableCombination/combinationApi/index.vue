<template>
  <h2 ref="h2ref">组合式Api</h2>

  <ComponentA ref="ComponentA" />
  <br />
  <hr />
  <br />
  <ComponentB />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import ComponentA from './components/componentA.vue'
import ComponentB from './components/componentB.vue'

export default defineComponent({
  name: 'CombinationApi',

  components: {
    ComponentA,
    ComponentB
  },

  setup(props) {
    /**
     * 将同一个逻辑关注点相关代码收集在一起
     * setup选项在组件创建之前执行，一旦props被解析，就将作为组合式Api的入口
     * WARNING：在setup中应该避免使用 this，应为它不会找到组件实例
     * setup的调用发生在 data property、computed property或methods被解析之前
     * setup返回的所有内容都暴露给组件的其余部分（计算属性、方法、生命周期钩子等等）以及组件的模板
     * ref 为我们的值 创建了一个响应式引用。在整个组合Api中会经常使用 引用 的概念
     */

    /**
     * 使用 `toRefs` 创建对prop property 的响应式应用
     */

    const h2ref = ref(null)
    const ComponentA = ref(null)

    // onMounted(() => {
    //   console.log(h2ref.value)
    //   console.log(ComponentA.value.increment())
    //   console.log('😊😊😊😊😊😊😊😊😊😊')
    // })

    return {
      h2ref,
      ComponentA
    }
  }
})
</script>

<style lang="scss" scoped></style>
