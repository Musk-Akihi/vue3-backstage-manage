<!-- 基础 -->
<template>
  <RouteContents :route-obj="base" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import base from '@/router/modules/studyVueRouter/base.js'

export default defineComponent({
  name: 'Base',

  components: {
    RouteContents
  },

  setup() {
    return {
      base
    }
  }
})
</script>

<style lang="scss" scoped></style>
