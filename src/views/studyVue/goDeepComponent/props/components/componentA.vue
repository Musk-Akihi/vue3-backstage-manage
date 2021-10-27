<template>
  <div>title: {{ title }}</div>
  <div>title-a: {{ titleA }}</div>
  <div>title-b: {{ titleB }}</div>
  <div>likes: {{ likes }}</div>
  <div>likesA: {{ likesA }}</div>
  <div>isPublished: {{ isPublished }}</div>
  <div>isPublishedA: {{ isPublishedA }}</div>
  <div>commentIds: {{ commentIds }}</div>
  <div>author: {{ author }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // prop 会在一个组件实例创建之前进行验证
  props: {
    // null 和 undefined会通过任何类型的检查
    title: {
      type: String,
      default: ''
    },
    titleA: {
      type: String,
      default: ''
    },
    titleB: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: 0
    },
    likesA: {
      type: Number,
      default: 10
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    isPublishedA: {
      type: Boolean,
      default: true
    },
    // 在js中 对象和数组是通过引用传入的，所以对于一个数组或对象类型的prop来说，在子组件中改变变更数组和对象本身将会影响到父组件的状态
    commentIds: {
      type: Array,
      default: () => []
    },
    author: {
      type: Object,
      default: () => {}
    }
  },

  setup(props, context) {
    return {}
  }
})
</script>
