<template>
  <h2>Teleport</h2>

  <!-- 只渲染到 查找到的第一个元素下 -->
  <div class="teleportOne">
    <span>你知道吗</span>
  </div>
  <div class="teleportOne"></div>

  <!-- 请注意，目标元素 必须在组件挂载之前存在 - 
  即目标不能由组件本身呈现，理想情况下应该在整个 Vue 组件树之外。 -->
  <ComponentAVue v-if="componentVisible" />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import ComponentAVue from './components/componentA.vue'

export default defineComponent({
  name: 'Teleport',

  components: {
    ComponentAVue
  },

  setup(props) {
    const componentVisible = ref(false)

    onMounted(() => {
      componentVisible.value = true
    })

    return {
      componentVisible
    }
  }
})
</script>

<style lang="scss" scoped></style>
