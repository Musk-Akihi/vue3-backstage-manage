<!-- 高阶指南 -->
<template>
  <RouteContents :route-obj="advancedGuide" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import advancedGuide from '@/router/modules/studyVue/advancedGuide.js'

export default defineComponent({
  name: 'AdvancedGuide',

  components: {
    RouteContents
  },

  setup() {
    return {
      advancedGuide
    }
  }
})
</script>

<style lang="scss" scoped></style>
