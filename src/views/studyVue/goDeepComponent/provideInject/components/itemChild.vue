<template>
  <h2>item-child</h2>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  inject: ['user', 'todos'],

  setup(props) {
    return {}
  },

  mounted() {
    setTimeout(() => {
      console.log('itemChild组件接收顶组件user', this.user)
      console.log('itemChild组件接收顶组件todos', this.todos)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    }, 1000)
  }
})
</script>
