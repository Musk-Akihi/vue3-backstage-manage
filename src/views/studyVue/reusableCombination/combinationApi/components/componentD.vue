<template>
  <h2>模板引用</h2>
  <div ref="root">This is a root element.</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  /**
   * 在渲染上下文中暴露root，并通过ref='root'，将其绑定到div作为其ref。
   * 在虚拟 DOM 补丁算法中，如果 VNode 的 ref 键对应于渲染上下文中的 ref，则 VNode 的相应元素或组件实例将被分配给该 ref 的值。
   * 这是在虚拟 DOM 挂载/打补丁过程中执行的，因此模板引用只会在初始渲染之后获得赋值。
   * 作为模板使用的 ref 的行为与任何其他 ref 一样：它们是响应式的，可以传递到 (或从中返回) 复合函数中。
   */
  setup() {
    const root = ref(null)

    onMounted(() => {
      // DOM 元素在初始渲染后分配给 ref
      console.log(root.value)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    return {
      root
    }
  }
})
</script>
