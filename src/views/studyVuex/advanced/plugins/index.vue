<!-- plugins -->
<template>
  <h2>插件</h2>
  <h4>Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。</h4>
  <h4>Vuex 自带一个日志插件用于一般调试。</h4>
  <h4>createLogger 插件会生成状态快照，所以仅在开发环境使用。</h4>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Plugins'
})
</script>
