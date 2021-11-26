<!-- watchEffect -->
<template>
  <div ref="watchEffectTitle">I am watchEffect</div>
</template>
<script>
import { defineComponent, h, reactive, ref, watchEffect } from 'vue'

export default defineComponent({
  setup() {
    const watchEffectTitle = ref(null)

    /**
     * 为了根据响应式状态自动应用和重新应用副作用，我们可以使用watchEffect函数
     * 他立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数
     *
     * 当watchEffect在组件的setup()函数或生命周期钩子被调用时，侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止
     */

    const count = ref(1)
    watchEffect(() => {
      console.log(count.value)
      console.log('😊😊😊😊😊😊😊😊😊😊')
      console.log(watchEffectTitle.value)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })
    setTimeout(() => {
      count.value = 10
    }, 500)

    const obj = reactive({
      name: 'dxw',
      sex: 'man'
    })

    const stop = watchEffect(
      () => {
        console.log(obj.name)
        console.log('😊😊😊😊😊😊😊😊😊😊')
        console.log(watchEffectTitle.value)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      /**
       * 如果需要在组件更新（例如：当与模板引用一起）后重新运行侦听器副作用
       * 我们可以传递带有flush选项的附加options对象（默认'pre'）
       * 在组件更新后触发，这样就可以访问更新后的DOM
       * 注意：这也将推迟副作用的初始运行 直到组件的首次渲染完成
       */
      {
        flush: 'post'
      }
    )

    // 显式调用返回值以停止侦听
    stop()

    setTimeout(() => {
      obj.name = 'da'
    }, 500)

    return {
      watchEffectTitle
    }
  }

  // render() {
  //   return h('div', 'I am watchEffect')
  // }
})
</script>

<style lang="scss" scoped></style>
