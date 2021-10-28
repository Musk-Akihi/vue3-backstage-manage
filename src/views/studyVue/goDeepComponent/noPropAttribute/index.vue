<!--
  一个非Prop的Attribute是指传向一个组件，但是该组件没有相应props或emits定义的attribute
  常见的示例包括class、style、id属性等。
-->
<template>
  <componentA class="componentA" data-status="activated" :title="post.titleA"></componentA>
  <hr />
  <!-- 事件监听器 -->
  <componentB @change="showChange"></componentB>
  <hr />

  <componentC :author="post.author"></componentC>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import componentA from './components/componentA.vue'
import componentB from './components/componentB.vue'
import componentC from './components/componentC.vue'

export default defineComponent({
  name: 'NoPropAttribute',

  components: {
    componentA,
    componentB,
    componentC
  },

  setup(props) {
    const post = reactive({
      titleA: '动态标题',
      author: {
        name: 'dxw',
        company: 'Veridian Dynamics'
      },
      likesA: 20
    })

    const showChange = (event) => {
      console.log(event.target.value)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    }

    return {
      post,
      showChange
    }
  }
})
</script>

<style scoped>
.componentA {
  padding: 20px;
  border: 1px solid red;
}
</style>
