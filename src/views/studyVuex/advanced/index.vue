<!-- 进阶 -->
<template>
  <RouteContents :route-obj="advanced" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import advanced from '@/router/modules/studyVuex/advanced.js'

export default defineComponent({
  name: 'Advanced',

  components: {
    RouteContents
  },

  setup() {
    return {
      advanced
    }
  }
})
</script>

<style lang="scss" scoped></style>
