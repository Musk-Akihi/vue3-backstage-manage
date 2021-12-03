<!-- 核心概念 -->
<template>
  <RouteContents :route-obj="coreIdea" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import coreIdea from '@/router/modules/studyVuex/coreIdea.js'

export default defineComponent({
  name: 'CoreIdea',

  components: {
    RouteContents
  },

  setup() {
    return {
      coreIdea
    }
  }
})
</script>

<style lang="scss" scoped></style>
