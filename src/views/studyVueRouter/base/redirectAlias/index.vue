<!-- redirectAlias -->
<template>
  <h2>redirectAlias</h2>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RedirectAlias',

  setup(props) {
    const router = useRouter()

    return {}
  }
})
</script>
