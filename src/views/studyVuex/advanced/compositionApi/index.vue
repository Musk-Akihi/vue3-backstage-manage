<!-- compositionApi -->
<template>
  <h2 @click="increment(10)">组合式Api</h2>
  <h4>{{ count }}</h4>
  <h4>{{ doneTodos }}</h4>
  <h4>{{ getTodoById(2) }}</h4>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CompositionApi',

  setup(props) {
    const store = useStore()

    return {
      // 在 computed 函数中访问 state
      count: computed(() => store.state.count),

      // 在 computed 函数中 访问 getter
      doneTodos: computed(() => store.getters.doneTodos),

      getTodoById: computed(() => store.getters.getTodoById),

      // 使用mutation
      increment: () => store.commit('addCount', { amount: 10 }),

      // 使用action
      asyncIncrement: () => store.dispatch('increment')
    }
  }
})
</script>
