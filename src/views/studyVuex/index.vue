<!-- studyVuex -->
<template>
  <ul>
    <li v-for="(item, index) in studyVuex" :key="index" class="mg20" @click="routeJump(item)">
      {{ item.meta.title }}
    </li>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import studyVuex from '@/router/modules/studyVuex'

export default defineComponent({
  name: 'StudyVuex',

  setup(props) {
    const router = useRouter()
    const routeJump = (item) => {
      router.push(item.path)
    }

    return {
      studyVuex,
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
