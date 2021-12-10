<!-- componentB -->
<template>
  <h4>componentB</h4>
  <h4>
    使用带有参数的路由时需要注意的是，当用户从 /user/lili 导航到 /user/kiki
    时，相同的组件实例将被重复使用。
    <br />
    因为两个路由都渲染同个组件，比起销毁再重建，复用则显得更加高效。
    <br />
    不过，这也意味着组件的生命周期钩子不会被调用.
  </h4>
  <a-button @click="jumpB">跳转到本组件</a-button>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'ComponentB',

  setup(props) {
    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
      console.log(route.params)
      console.log(router)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    const jumpB = () => {
      console.log('跳转到本组件，生命周期钩子不会被调用。')
      console.log('😊😊😊😊😊😊😊😊😊😊')
      router.push('/studyVueRouter/base/dynamicRouteMatch/componentB/20')
    }

    // watch监听路由变化
    watch(
      () => route.params,
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      }
    )

    onBeforeRouteUpdate((to, from) => {
      // 对路由变化做出响应
      console.log(to)
      console.log(from)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    return {
      jumpB
    }
  }
})
</script>
