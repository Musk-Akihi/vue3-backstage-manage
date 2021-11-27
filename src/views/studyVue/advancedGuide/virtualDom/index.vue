<!-- 虚拟DOM -->
<template>
  <div>虚拟DOM</div>
  <div>
    我们用JS生成名为 Virtual DOM 的 DOM副本，这样做的原因是用 JS 直接操作DOM的计算成本很高。
    虽然用JS 执行更新很快，但是找到所需的DOM节点并用JS更新它们的成本却很高。
    所以我们批量处理调用，并一次性更改DOM。
    <br />
    虚拟DOM是轻量级的 JS 对象，由渲染函数创建。它包含三个参数：元素，context，子级数组。
    <br />
    如果需要更新列表项，我们可以借助前面提到的响应性在JS中进行。
    我们将更改应用至JS副本、虚拟DOM中，然后在它们和实际DOM之间执行diff。
    只有这样，我们才能对已更改的内容进行更新。 虚拟DOM允许我们对UI进行高效的更新！
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VirtualDOM',

  components: {},

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
