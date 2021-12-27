<!-- 路由元信息 -->
<template>
  <div>
    <h2>routeMetaFields</h2>
    <h4>
      routes 配置中的每个路由对象为 路由记录。
      路由记录可以是嵌套的，因此当一个路由匹配成功后，它可能匹配多个路由记录。
    </h4>
    <h4>
      一个路由匹配到的所有路由记录会暴露为 $route 对象 的 matched 数组。
      $route.meta，非递归合并所有meta字段的（从父字段到子字段）的方法。
    </h4>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RouteMetaFields',

  components: {},

  setup() {
    return {}
  },

  mounted() {
    console.log(this.$route)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  }
})
</script>

<style lang="scss" scoped></style>
