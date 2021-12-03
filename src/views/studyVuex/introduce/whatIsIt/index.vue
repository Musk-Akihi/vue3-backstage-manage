<!-- Vuex是什么 -->
<template>
  <h2>Vuex是什么</h2>
  <h4>
    Vuex是一个专为Vue.js应用程序开发的 状态管理模式 + 库。
    <br />
    它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    <hr />
  </h4>
  <ul>
    这个状态自管理应用包含几个部分：
    <li>状态，驱动应用的数据源；</li>
    <li>视图，以声明方式将状态映射到视图；</li>
    <li>操作，响应在视图上的用户输入导致的状态变化</li>
  </ul>
  <h4>
    通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化和易维护。
  </h4>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WhatIsIt',

  components: {},

  setup(props) {
    return {}
  }
})
</script>
