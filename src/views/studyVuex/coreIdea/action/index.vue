<!-- action -->
<template>
  <h2>action</h2>
  <h4>
    action 类似于 mutation，不同在于：
    <br />
    1、action 提交的是 mutation，而不是直接变更状态.
    <br />
    2、action 可以包含任意异步操作。
  </h4>
  <h5>
    {{ store.state.count }}
  </h5>
</template>

<script>
import { defineComponent } from 'vue'
import store from '@/store'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'Action',

  components: {},

  data() {
    return {
      store
    }
  },

  mounted() {
    store.dispatch('increment')
    this.increment()
  },
  methods: {
    ...mapActions(['increment'])
  }
})
</script>
