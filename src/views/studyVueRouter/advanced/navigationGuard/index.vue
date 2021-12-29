<!-- 导航守卫 -->
<template>
  <div>
    <h2>navigationGuard</h2>
    <h4>
      vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
      这里有很多方式植入路由导航中的：全局的，单个路由独享的，或者组件级的。
    </h4>

    <hr />

    <h2>完整的导航解析流程</h2>
    <ul>
      <li>1、导航被触发</li>
      <li>2、在失活的组件里调用 beforeRouteLeave 守卫</li>
      <li>3、调用全局的 beforeEach 守卫</li>
      <li>4、在重用的组件里调用 beforeRouteUpdate 守卫</li>
      <li>5、在路由配置里调用 beforeEnter 守卫</li>
      <li>6、解析异步路由组件</li>
      <li>7、在被激活的组件里调用 beforeRouteEnter 守卫</li>
      <li>8、调用全局的 beforeResolve 守卫</li>
      <li>9、导航被确认</li>
      <li>10、调用全局的 afterEach 钩子</li>
      <li>11、触发DOM更新</li>
      <li>
        12、调用 beforeRouteEnter 守卫中传给 next
        的回调函数，创建好的组件实例会作为回调函数的参数传入
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export default defineComponent({
  name: 'NavigationGuard',

  components: {},

  /**
   * 进入组件之前的钩子 不能访问this
   * 可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调。
   */
  // beforeRouteEnter(to, from, next) {
  //   console.log(to)
  //   console.log(from)
  //   console.log('😊😊😊😊😊😊😊😊😊😊')
  //   next((vm) => {
  //     console.log(vm)
  //     console.log('😊😊😊😊😊😊😊😊😊😊')
  //   })
  // },

  // beforeRouteUpdate(to, from) {
  //   console.log(to)
  //   console.log(from)
  //   console.log(this)
  //   console.log('😊😊😊😊😊😊😊😊😊😊')
  // },

  // 离开守卫
  // beforeRouteLeave(to, from) {
  //   console.log(to)
  //   console.log(from)
  //   console.log('😊😊😊😊😊😊😊😊😊😊')
  //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  //   if (!answer) return false
  // },

  setup() {
    // onBeforeRouteLeave((to, from) => {
    //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    //   // 取消导航并停留在同一页面上
    //   if (!answer) return false
    // })

    return {}
  }

  // mounted() {
  //   console.log(this)
  //   console.log('😊😊😊😊😊😊😊😊😊😊')
  // }
})
</script>

<style lang="scss" scoped></style>
