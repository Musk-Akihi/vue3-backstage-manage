<!-- gettingStarted -->
<template>
  <h2>gettingStarted</h2>
  <!-- 使用router-link组件进行导航 -->
  <!-- 通过传递`to`来指定链接 -->
  <!-- <router-link> 将呈现一个带有正确 `href` 属性的 `a` 标签 -->
  <router-link to="/studyVueRouter">Go To studyVueRouter</router-link>
  <br />
  <a-button @click="$router.push('/studyVueRouter')">Go To studyVueRouter</a-button>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GettingStarted',

  components: {},

  setup(props) {
    return {}
  },

  mounted() {
    // 通过调用 app.use(router) 我们可以在任意组件中以 this.$router的形式访问它，并且以 this.$route 的形式访问当前路由
    console.log(this.$router)
    console.log(this.$route)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  }
})
</script>
