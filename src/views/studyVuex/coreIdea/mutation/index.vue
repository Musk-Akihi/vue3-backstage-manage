<!-- mutation -->
<template>
  <h2>mutation</h2>
  <h4>
    更改Vuex的store中的状态的唯一方法是提交mutation。
    Vuex中的mutation非常类似于事件；每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler）。
  </h4>
  <h4>在Vuex中，mutation都是同步事务;</h4>
</template>

<script>
import { defineComponent } from 'vue'
import store from '@/store'
import { mapMutations } from 'vuex'

export default defineComponent({
  name: 'Mutation',

  components: {},

  mounted() {
    store.commit('increment')
    console.log(store.state.count)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    store.commit('addCount', { amount: 10 })
    console.log(store.state.count)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    store.commit({
      type: 'addCount',
      amount: 10
    })
    console.log(store.state.count)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    this.increment()
    console.log(store.state.count)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  methods: {
    ...mapMutations(['increment'])
  }
})
</script>
