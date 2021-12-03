<!-- 介绍 -->
<template>
  <RouteContents :route-obj="introduce" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import introduce from '@/router/modules/studyVuex/introduce.js'

export default defineComponent({
  name: 'Introduce',

  components: {
    RouteContents
  },

  setup() {
    return {
      introduce
    }
  }
})
</script>

<style lang="scss" scoped></style>
