<!-- 自定义事件 -->
<template>
  <div>count: {{ count }}</div>
  <div>name: {{ name }}</div>
  <div>componentATitle: {{ componentATitle }}</div>
  <div>componentAAuthor: {{ componentAAuthor }}</div>
  <div>componentBValue: {{ componentBValue }}</div>
  <div>componentBDiscription: {{ componentBDiscription }}</div>
  <br />
  <hr />
  <br />
  <componentA
    v-model:title="componentATitle"
    v-model:author="componentAAuthor"
    @changeCount="changeCount"
    @changeName="changeName"
  ></componentA>
  <br />
  <hr />
  <br />
  <componentB
    v-model.capitalize="componentBValue"
    v-model:description.capitalize="componentBDiscription"
  ></componentB>
</template>

<script>
import componentA from './components/componentA.vue'
import componentB from './components/componentB.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CustomEvent',

  components: {
    componentA,
    componentB
  },

  setup(props) {
    const count = ref(0)
    const name = ref('杜心武')
    const componentATitle = ref('componentATitle')
    const componentAAuthor = ref('componentAAuthor')
    const componentBValue = ref('componentBValue')
    const componentBDiscription = ref('componentBDiscription')

    const changeCount = () => {
      count.value++
    }
    const changeName = (val) => {
      name.value = val
    }

    return {
      count,
      name,
      componentATitle,
      componentAAuthor,
      componentBValue,
      componentBDiscription,
      changeCount,
      changeName
    }
  }
})
</script>

<style></style>
