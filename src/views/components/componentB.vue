<template>
  <div>
    <p>{{ title }}</p>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },

  setup(props, context) {
    console.log(props)
    console.log(context)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    const count = ref(0)
    const increment = () => ++count.value
    context.expose({
      increment
    })

    // return () => h('div', count.value)
    return {
      count
    }
  }
})
</script>
