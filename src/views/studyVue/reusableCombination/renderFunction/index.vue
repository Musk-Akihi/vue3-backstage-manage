<template>
  <h2>renderFunction</h2>

  <ComponentAVue :level="2">
    <template #name>
      <div>你好啊</div>
      <div>你知道吗</div>
    </template>
  </ComponentAVue>
  <br />
  <hr />
  <br />
  <ComponentBVue />
  <br />
  <hr />
  <br />
  <ReplaceTemplate />
</template>

<script>
import { defineComponent } from 'vue'
import ComponentAVue from './components/componentA.vue'
import ComponentBVue from './components/componentB.vue'
import ReplaceTemplate from './components/replaceTemplate.vue'

export default defineComponent({
  name: 'RenderFunction',

  components: {
    ComponentAVue,
    ComponentBVue,
    ReplaceTemplate
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
