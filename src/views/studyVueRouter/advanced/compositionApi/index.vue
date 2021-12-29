<!-- Vue Router 和 组合式Api -->
<template>
  <div>
    <h2>compositionApi</h2>
    <h4>
      {{ $route }}
    </h4>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'CompositionApi',

  components: {},

  setup() {
    // 访问路由和当前路由
    const route = useRoute()
    const router = useRouter()
    console.log(route)
    console.log(router)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
