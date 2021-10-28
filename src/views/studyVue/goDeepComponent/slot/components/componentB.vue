<template>
  <div>componentB组件</div>

  <button>
    <slot>备用内容</slot>
  </button>
</template>

<script>
import { defineComponent, reactive, ref, toRaw } from 'vue'

export default defineComponent({
  setup(props, context) {
    console.log(context)
    console.log(context.slots)
    console.log(toRaw(context.slots))
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>

<style scoped></style>
