<!-- 404 -->
<template>
  <h2>404页面啊</h2>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'DynamicRouteMatch',

  setup(props) {
    const route = useRoute()
    console.log(route.params)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>
