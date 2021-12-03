<!-- 原理 -->
<template>
  <RouteContents :route-obj="principle" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import principle from '@/router/modules/studyVue/principle.js'

export default defineComponent({
  name: 'Principle',

  components: {
    RouteContents
  },

  setup() {
    return {
      principle
    }
  }
})
</script>

<style lang="scss" scoped></style>
