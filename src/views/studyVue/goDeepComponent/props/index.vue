<!-- props -->
<template>
  <componentA
    title="静态标题"
    :title-a="post.titleA"
    :title-b="post.titleA + ' by ' + post.author.name"
    :likes="12"
    :likes-a="post.likesA"
    is-published
    :is-published-a="false"
    :comment-ids="[10, 20, 30]"
    :author="post.author"
  ></componentA>
  <br />
  <hr />
  <br />
  <componentB :="info"></componentB>
  <!-- 等价于 -->
  <componentB :name="info.name" :sex="info.sex"></componentB>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import componentA from './components/componentA.vue'
import componentB from './components/componentB.vue'

export default defineComponent({
  name: 'CustomEvent',

  components: {
    componentA,
    componentB
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

    const info = reactive({
      name: '杜心武',
      sex: '女'
    })

    return {
      post,
      info
    }
  }
})
</script>

<style></style>
