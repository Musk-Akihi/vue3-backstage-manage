<!-- 工具 -->
<template>
  <RouteContents :route-obj="tool" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import tool from '@/router/modules/studyVue/tool.js'

export default defineComponent({
  name: 'Tool',

  components: {
    RouteContents
  },

  setup() {
    return {
      tool
    }
  }
})
</script>

<style lang="scss" scoped></style>
