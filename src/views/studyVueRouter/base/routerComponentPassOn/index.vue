<!-- routerComponentPassOn -->
<template>
  <h2>routerComponentPassOn</h2>
  <a-button @click="jump">跳转到componentA页面</a-button>

  <!-- <router-view /> -->
  <router-view name="routerComponentPassOn" />
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RouterComponentPassOn',

  setup(props) {
    const router = useRouter()
    const jump = () => {
      router.push({ name: 'componentA', params: { id: 30 } })
    }

    return {
      jump
    }
  }
})
</script>
