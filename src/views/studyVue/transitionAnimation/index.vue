<!-- 过渡动画 -->
<template>
  <RouteContents :route-obj="transitionAnimation" />
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import transitionAnimation from '@/router/modules/transitionAnimation.js'

export default defineComponent({
  name: 'TransitionAnimation',

  components: {
    RouteContents
  },

  setup() {
    return {
      transitionAnimation
    }
  }
})
</script>
