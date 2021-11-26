<!-- 响应式计算和侦听 -->
<template>
  <div>响应式计算和侦听</div>
  <Calculated />
  <WatchEffect />
  <Watch />
</template>

<script>
import { defineComponent } from 'vue'
import Calculated from './components/calculated'
import WatchEffect from './components/watchEffect'
import Watch from './components/watch'

export default defineComponent({
  name: 'ResponsiveComputedListen',

  components: {
    Calculated,
    WatchEffect,
    Watch
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
