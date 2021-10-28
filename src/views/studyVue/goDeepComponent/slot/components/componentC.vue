<template>
  <div>
    <h2>具名插槽</h2>
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
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
