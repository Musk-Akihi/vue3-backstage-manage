<!-- formHandle -->
<template>
  <h2>表单处理</h2>
  <h4>使用带有setter的双向绑定计算属性</h4>
  <input v-model="message" type="text" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormHandle',

  computed: {
    message: {
      get() {
        return this.$store.state.count
      },
      set(value) {
        this.$store.commit('addCount', { amount: value })
      }
    }
  }
})
</script>
