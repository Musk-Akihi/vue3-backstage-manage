<!-- routeMatchGrammar -->
<template>
  <h2>routeMatchGrammar</h2>

  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RouteMatchGrammar',

  setup(props) {
    const router = useRouter()

    return {}
  }
})
</script>
