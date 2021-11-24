<!-- 概述 -->
<template>
  <h1>过渡 & 动画 概述</h1>
  <ComponentA />
</template>

<script>
import { defineComponent } from 'vue'
import ComponentA from './components/componentA.vue'

export default defineComponent({
  name: 'Overview',

  components: {
    ComponentA
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
