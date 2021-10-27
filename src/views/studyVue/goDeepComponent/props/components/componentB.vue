<template>
  <div>name: {{ name }}</div>
  <div>sex: {{ sex }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    sex: {
      type: String,
      default: ''
    }
  },

  setup(props, context) {
    return {}
  }
})
</script>
