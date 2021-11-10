<template>
  <h1 class="first-level" @click="routeJump(firstLevelRouter)">{{ firstLevelRouter.title }}</h1>

  <ul class="second-level">
    <li v-for="(item, index) in secondLevelRouter" :key="index" @click="routeJump(item)">
      {{ item.title }}
    </li>
  </ul>

  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, reactive } from 'vue'
import goDeepComponent from '@/router/modules/goDeepComponent.js'

export default defineComponent({
  name: 'GoDeepComponent',

  setup(props) {
    let firstLevelRouter = reactive({
      title: goDeepComponent.meta.title,
      path: goDeepComponent.path
    })
    let secondLevelRouter = []

    if (goDeepComponent?.children?.length) {
      secondLevelRouter = goDeepComponent.children.map((item) => {
        return {
          title: item.meta.title,
          path: `${firstLevelRouter.path}/${item.path}`
        }
      })
    }
    secondLevelRouter = reactive(secondLevelRouter)

    const router = useRouter()
    const routeJump = (item) => {
      router.push(item.path)
    }

    return {
      firstLevelRouter,
      secondLevelRouter,
      routeJump
    }
  }
})
</script>

<style lang="scss" scoped>
.second-level {
  li {
    list-style: none;
    margin: 10px 0;

    &:hover {
      cursor: pointer;
      color: #108ee9;
    }
  }
}
</style>
