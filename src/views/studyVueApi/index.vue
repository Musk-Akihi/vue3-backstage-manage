<!-- studyVueApi -->
<template>
  <ul>
    <li v-for="(item, index) in studyVueApi" :key="index" class="mg20" @click="routeJump(item)">
      {{ item.meta.title }}
    </li>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import studyVueApi from '@/router/modules/studyVueApi'

export default defineComponent({
  name: 'StudyVueApi',

  setup(props) {
    const router = useRouter()
    const routeJump = (item) => {
      router.push(item.path)
    }

    return {
      studyVueApi,
      routeJump
    }
  }
})
</script>

<style lang="scss" scoped>
li {
  @include hoverStyle;
}
</style>
