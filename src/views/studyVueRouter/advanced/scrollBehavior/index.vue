<!-- 滚动行为 -->
<template>
  <div>
    <h2>scrollBehavior</h2>
    <h4>注意：这个功能只支持 history.pushState 的浏览器中可用。</h4>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ScrollBehavior',

  components: {},

  setup() {
    const router = useRouter()
    // 检查路由是否存在
    console.log(router.hasRoute('advanced'))
    // 获取一个包含所有路由记录的数组
    console.log(router.getRoutes())
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
