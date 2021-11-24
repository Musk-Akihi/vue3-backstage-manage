<!-- 进入离开过渡 -->
<template>
  <ComponentA />
</template>

<script>
import { defineComponent } from 'vue'
import ComponentA from './components/componentA.vue'

export default defineComponent({
  name: 'EnterLeaveTransition',

  components: {
    ComponentA
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
