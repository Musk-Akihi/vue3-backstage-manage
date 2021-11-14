<template>
  <h2>生命周期钩子</h2>
</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated
} from 'vue'

export default defineComponent({
  setup(props) {
    /**
     * setup 是围绕 beforeCreate 和 created生命周期钩子运行的，所以不需要显式的定义他们。
     * 换句话说 在这些钩子中 编写的任意代码都应该直接在setup 函数中编写。
     */
    console.log('setup中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')

    onBeforeMount(() => {
      console.log('onBeforeMount中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onMounted(() => {
      console.log('onMounted中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onUpdated(() => {
      console.log('onUpdated中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onUnmounted(() => {
      console.log('onUnmounted中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onActivated(() => {
      console.log('onActivated中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    onDeactivated(() => {
      console.log('onDeactivated中执行的...')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })
  },

  beforeCreate() {
    console.log('beforeCreate中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  created() {
    console.log('created中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  beforeMount() {
    console.log('beforeMount中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  mounted() {
    console.log('mounted中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  beforeUpdate() {
    console.log('beforeUpdate中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  updated() {
    console.log('updated中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  beforeUnmount() {
    console.log('beforeUnmount中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  unmounted() {
    console.log('unmounted中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  errorCaptured() {
    console.log('errorCaptured中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  /**
   * 动态组件切换 component 只有keep-alive 组件包裹 才存在
   * 组件之间切换的时候 会请求一些请求过的数据，每次请求都会导致重复渲染影响性能。
   * 这些数据可以缓存，使用 keep-alive将组件包裹起来。
   * 但这样的话其他的生命周期钩子将会失效。
   * 取而代之的是 activated 和 deactivated
   * activated: 被包裹组件被激活的状态下使用
   * deactivated: 被包裹组件停止使用时调用
   */

  activated() {
    console.log('activated中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  deactivated() {
    console.log('deactivated中执行的...')
    console.log('😊😊😊😊😊😊😊😊😊😊')
  }
})
</script>
