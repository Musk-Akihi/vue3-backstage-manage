<!-- state -->
<template>
  <h4>
    Vuex使用单一状态树-是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个‘唯一数据源（SSOT）’而存在。
    <br />
    意味着，每个应用将仅仅包含一个store实例。单一状态树让我们能够直接的定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用的快照。
  </h4>
  <h4>单状态树和模块化并不冲突。</h4>
  <h4>储存在Vuex中的数据和Vue实例中的data遵循相同的原则，例如状态对象必须是纯粹（plain）的。</h4>
  <ComponentA />
  <ComponentB />
  <ComponentC />
</template>

<script>
import { defineComponent, ref } from 'vue'
import ComponentA from './components/componentA.vue'
import ComponentB from './components/componentB.vue'
import ComponentC from './components/componentC.vue'

export default defineComponent({
  name: 'State',

  components: {
    ComponentA,
    ComponentB,
    ComponentC
  },

  setup(props) {
    return {}
  }
})
</script>
