<!-- watch -->
<template>
  <div ref="watchTitle">I am watch</div>
</template>
<script>
import { defineComponent, h, reactive, ref, watch, watchEffect } from 'vue'

export default defineComponent({
  setup() {
    /**
     * 与watchEffect比较 watch允许我们：
     * 1、懒执行副作用
     * 2、更具体地说明什么状态应该触发侦听器重新运行
     * 3、访问侦听状态变化前后的值
     */

    /**
     * 侦听单个数据源
     */
    /*
    const state = reactive({ count: 0 })

    setTimeout(() => {
      state.count = 100
    }, 1000)

    // 侦听一个getter
    watch(
      () => state.count,
      (count, prevCount) => {
        console.log('prevCount-------', prevCount)
        console.log('count-----------', count)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      }
    )
    */

    /*
    const count = ref(0)

    setTimeout(() => {
      count.value = 99
    }, 1000)

    // 直接侦听ref
    watch(count, (count, prevCount) => {
      console.log('prevCount-------', prevCount)
      console.log('count-----------', count)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })
    */

    /**
     * 侦听多个数据源
     * 使用数组同时侦听多个源
     */
    /*
    const firstName = ref('')
    const lastName = ref('')

    watch(
      [firstName, lastName],
      (newValues, prevValues) => {
        console.log('prevValues-------', prevValues)
        console.log('newValues--------', newValues)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      // 设置flush: 'sync'，我们可以为每个更改都强制触发侦听器，尽管这是不推荐的。
      // 或者可以使用 nextTick 等待侦听器在下一步改变之前运行
      {
        flush: 'sync'
      }
    )

    // 这种变更 几次 就侦听几次
    // firstName.value = 'Elon'
    // lastName.value = 'Musk'

    // 如果在同一个函数中同时改变这些被侦听的源, 侦听器仍只会执行一次
    setTimeout(() => {
      firstName.value = 'Elon'
      lastName.value = 'Musk'
    }, 1000)

    // 注意：多个同步更改只会触发一次侦听器
    */

    /**
     * 侦听响应式对象
     * 使用侦听器来比较一个数组或对象的值，这些值时响应性的，要求他有一个由值构成的副本
     */

    /*
    const numbers = reactive([1, 2, 3, 4])

    watch(
      // getters
      () => [...numbers],
      (newNumbers, oldNumbers) => {
        console.log(newNumbers)
        console.log(oldNumbers)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      }
    )

    numbers.push(5)
    */

    // 尝试检查深度嵌套对象或数组中的property变化时，仍然需要deep选项设置为true
    const state = reactive({
      id: 1,
      attributes: {
        name: ''
      }
    })

    watch(
      () => state,
      (state, prevState) => {
        console.log('no deep', state.attributes.name, prevState.attributes.name)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      }
    )

    watch(
      // () => state,
      state,
      (state, prevState) => {
        console.log('deep', state.attributes.name, prevState.attributes.name)
        console.log('😊😊😊😊😊😊😊😊😊😊')
      },
      {
        deep: true
      }
    )

    state.attributes.name = 'Musk'

    /**
     * 侦听一个响应式对象或数组将始终返回该对象的当前值和上一个状态值的引用。
     * 为了完全侦听深度嵌套的对象和数组，需要对值进行深拷贝。
     * 可以通过如 lodash.cloneDeep 这样的实用工具来实现。
     */

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
