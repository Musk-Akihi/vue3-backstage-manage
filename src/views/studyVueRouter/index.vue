<!-- studyVueRouter -->
<template>
  <ul>
    <li v-for="(item, index) in studyVueRouter" :key="index" class="mg20" @click="routeJump(item)">
      {{ item.meta.title }}
    </li>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import studyVueRouter from '@/router/modules/studyVueRouter'

export default defineComponent({
  name: 'StudyVueRouter',

  setup(props) {
    const router = useRouter()
    const routeJump = (item) => {
      router.push(item.path)
    }

    return {
      studyVueRouter,
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
