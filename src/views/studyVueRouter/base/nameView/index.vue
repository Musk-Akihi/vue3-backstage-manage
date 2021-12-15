<!-- nameView -->
<template>
  <h2>nameView</h2>

  <!-- <router-view name="default" /> -->
  <router-view name="nameView" />
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NameView',

  setup(props) {
    const router = useRouter()

    return {}
  }
})
</script>
