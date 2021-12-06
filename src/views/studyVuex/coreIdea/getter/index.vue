<!-- getter -->
<template>
  <h4>getters</h4>
</template>

<script>
import { defineComponent } from 'vue'
import store from '@/store'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Getter',

  components: {},

  computed: {
    // doneTodosCount() {
    //   return store.getters.doneTodosCount
    // },
    // mapGetters 辅助函数仅仅是将store中的getter映射到局部计算属性
    ...mapGetters(['doneTodos', 'doneTodosCount', 'getTodoById'])
  },

  mounted() {
    console.log(this.$store.getters.doneTodos)
    console.log(store.getters.doneTodosCount)
    console.log(this.doneTodosCount)
    console.log(this.doneTodos)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    console.log(store.getters.getTodoById(2))
    console.log('😊😊😊😊😊😊😊😊😊😊')
  }
})
</script>
