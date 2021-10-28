<template>
  <div>slot</div>
  <componentA>
    <!-- 我是一个字符串插槽 -->
    <button>点击</button>

    <!--
      渲染作用域
      父级模板里的所有内容都是在父级作用域中编译的，子模板里的所有内容都是在子作用域中编译的
    -->
    <p>姓名：{{ post.name }}</p>
  </componentA>

  <componentB>传递进去的内容</componentB>

  <componentC>
    <!-- v-slot: 简写为 # -->
    <!-- v-slot:default 简写为 v-slot -->
    <template #header> this is header </template>
    <template #default> this is default </template>
    <!-- 动态插槽名 -->
    <template #[dynamicSlotName]> this is footer </template>
  </componentC>

  <componentD>
    <!-- v-slot:default="slotProps" 简写为 v-slot="slotProps" -->
    <!-- 默认插槽缩写语法不能和具名插槽混用 -->
    <!-- <template #li="slotProps">
      <div>
        <span>index: {{ slotProps.index }}</span>
        <span>item: {{ slotProps.item }}</span>
        <span>author: {{ slotProps.author }}</span>
      </div>
    </template> -->
    <!-- 解构插槽prop -->
    <!-- author变量名已在上层作用域中生命 -->
    <template #li="{ index, item, author: name }">
      <div>
        <span>index: {{ index }}</span>
        <span>item: {{ item }}</span>
        <span>author: {{ name }}</span>
      </div>
    </template>
  </componentD>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import componentA from './components/componentA.vue'
import componentB from './components/componentB.vue'
import componentC from './components/componentC.vue'
import componentD from './components/componentD.vue'

export default defineComponent({
  name: 'Slot',

  components: {
    componentA,
    componentB,
    componentC,
    componentD
  },

  setup(props) {
    const post = reactive({
      name: '杜心武',
      title: '你知道吗'
    })

    const dynamicSlotName = ref('footer')

    const author = ref('Musk')

    return {
      post,
      dynamicSlotName,
      author
    }
  }
})
</script>

<style scoped></style>
