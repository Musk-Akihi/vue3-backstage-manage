<!-- 可复用组合 -->
<template>
  <RouteContents :route-obj="reusableCombination" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import reusableCombination from '@/router/modules/reusableCombination.js'

export default defineComponent({
  name: 'ReusableCombination',

  components: {
    RouteContents
  },

  setup() {
    return {
      reusableCombination
    }
  }
})
</script>

<style lang="scss" scoped></style>
