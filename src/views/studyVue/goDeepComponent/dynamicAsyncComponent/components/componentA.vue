<template>
  <h3>我是componentA组件</h3>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props) {
    console.log('我是componentA组件')
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>
