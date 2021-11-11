<template>
  <div class="content">
    <!-- 左侧目录 -->
    <div class="level pd20">
      <div class="first-level" @click="routeJump(firstLevelRouter)">
        {{ firstLevelRouter.title }}
      </div>

      <ul class="second-level mg20">
        <li
          v-for="(item, index) in secondLevelRouter"
          :key="index"
          class="mg-tb10"
          @click="routeJump(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>

    <!-- 右侧内容 -->
    <div class="view pd20">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    routeObj: {
      type: Object,
      default: () => {}
    }
  },

  setup(props) {
    let firstLevelRouter = reactive({
      title: props.routeObj.meta.title,
      path: props.routeObj.path
    })
    let secondLevelRouter = []

    if (props.routeObj?.children?.length) {
      secondLevelRouter = props.routeObj.children.map((item) => {
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
.content {
  height: 100%;
  display: flex;

  .level {
    width: 250px;
    border-right: 1px solid #e8e8e8;
    .first-level {
      @include hoverStyle;
      font-size: 24px;
      font-weight: bold;
    }
    .second-level {
      li {
        @include hoverStyle;
      }
    }
  }

  .view {
    flex: 1;
  }
}
</style>
