<template>
  <h2>item</h2>

  <itemChildVue></itemChildVue>
</template>

<script>
import { defineComponent } from 'vue'
import itemChildVue from './itemChild.vue'

export default defineComponent({
  components: {
    itemChildVue
  },

  setup(props) {
    return {}
  }
})
</script>
