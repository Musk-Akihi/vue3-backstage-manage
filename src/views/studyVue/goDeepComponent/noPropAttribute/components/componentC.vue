<!--
  多个根节点上的Attribute继承
  不具有自动attribute fallthrough(隐式贯穿)行为
  如果没有显示的绑定$attrs 将发出运行时警告
-->
<template>
  <header>header</header>
  <section>section</section>
  <footer :="$attrs">footer</footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {},

  setup(props, context) {
    console.log(context)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>
