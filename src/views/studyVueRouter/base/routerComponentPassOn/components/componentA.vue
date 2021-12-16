<!-- componentA -->
<template>
  <h4>componentA</h4>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'ComponentA',

  props: {
    id: {
      type: String,
      default: ''
    },
    newsletterPopup: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const router = useRouter()
    const route = useRoute()

    onMounted(() => {
      console.log(route.params)
      console.log(props)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    return {}
  }
})
</script>
