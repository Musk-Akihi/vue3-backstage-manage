<!-- 应用Api -->
<template>
  <RouteContents :route-obj="applicationApi" />
  <h4>
    在Vue3中，全局改变Vue行为的Api现在被移动到了由新的createApp方法所创建的应用实例上。
    现在它们的影响仅限于该特定应用实例：
    <br />
    import { createApp } from 'vue'
    <br />
    const app = createApp({})
  </h4>
</template>

<script>
import { defineComponent } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import applicationApi from '@/router/modules/studyVueApi/applicationApi.js'

export default defineComponent({
  name: 'ApplicationApi',

  components: {
    RouteContents
  },

  setup() {
    return {
      applicationApi
    }
  }
})
</script>

<style lang="scss" scoped></style>
