<template>
  <!-- change事件监听器从父组件传递到子组件 -->
  <select>
    <option value="1">yesterday</option>
    <option value="2">today</option>
    <option value="3">tomorrow</option>
  </select>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {},

  setup(props, context) {
    console.log(context)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>
