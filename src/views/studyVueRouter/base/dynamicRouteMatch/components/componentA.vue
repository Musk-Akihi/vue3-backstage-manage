<!-- componentA -->
<template>
  <h4>componentA</h4>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'ComponentA',

  setup(props) {
    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
      console.log(route.params)
      console.log(router)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })
  }
})
</script>
