<!-- dynamicRouteMatch -->
<template>
  <h2>dynamicRouteMatch</h2>
  <a-button @click="jump">跳转到componentA组件</a-button>

  <router-view />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DynamicRouteMatch',

  setup(props) {
    const router = useRouter()

    const jump = () => {
      router.push('/studyVueRouter/base/dynamicRouteMatch/componentA/杜心武')
    }
    return {
      jump
    }
  }
})
</script>
