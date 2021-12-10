<!-- dynamicRouteMatch -->
<template>
  <h2>dynamicRouteMatch</h2>
  <a-button @click="jumpA">跳转到componentA组件</a-button>
  <br />
  <a-button @click="jumpB">跳转到componentB组件</a-button>

  <router-view />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DynamicRouteMatch',

  setup(props) {
    const router = useRouter()

    const jumpA = () => {
      router.push('/studyVueRouter/base/dynamicRouteMatch/componentA/杜心武')
    }
    const jumpB = () => {
      router.push('/studyVueRouter/base/dynamicRouteMatch/componentB/10')
    }
    return {
      jumpA,
      jumpB
    }
  }
})
</script>
