<template>
  <div>componentA组件</div>
  <slot></slot>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup(props) {
    return {}
  }
})
</script>

<style scoped></style>
