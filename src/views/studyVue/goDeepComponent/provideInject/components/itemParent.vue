<template>
  <h2>item-parent</h2>

  <itemVue></itemVue>
</template>

<script>
import { defineComponent } from 'vue'
import itemVue from './item.vue'

export default defineComponent({
  components: {
    itemVue
  },

  setup(props) {
    return {}
  }
})
</script>
