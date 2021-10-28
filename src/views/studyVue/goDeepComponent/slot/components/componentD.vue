<template>
  <h2>作用域插槽</h2>

  <ul>
    <li v-for="(item, index) in items" :key="index">
      <!-- 绑定在 <slot>元素上的属性被称为 插槽prop -->
      <slot name="li" :item="item" :index="index + 10" author="dxw"></slot>
    </li>
  </ul>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup(props) {
    const items = reactive(['语文', '数学', '英语'])

    return { items }
  }
})
</script>

<style scoped></style>
