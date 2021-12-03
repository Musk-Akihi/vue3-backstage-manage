<!-- studyVue -->
<template>
  <ul>
    <li v-for="(item, index) in studyVue" :key="index" class="mg20" @click="routeJump(item)">
      {{ item.meta.title }}
    </li>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import studyVue from '@/router/modules/studyVue'

export default defineComponent({
  name: 'StudyVue',

  setup(props) {
    const router = useRouter()
    const routeJump = (item) => {
      router.push(item.path)
    }

    return {
      studyVue,
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
