<!-- nameRouter -->
<template>
  <h2>nameRouter</h2>
  <a-button @click="jump">跳转到带参数的动态路由匹配</a-button>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NameRouter',

  setup(props) {
    const router = useRouter()

    const jump = () => {
      // router.push('/studyVueRouter/base/dynamicRouteMatch/componentA/杜心武')
      router.push({
        name: 'componentA',
        params: { userName: '阿杜' }
      })
    }

    return {
      jump
    }
  }
})
</script>
