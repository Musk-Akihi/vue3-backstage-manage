<template>
  <h2>动态指令参数</h2>

  <div id="dynamic-arguments-example" class="demo">
    <p>Scroll down the page</p>
    <!-- JavaScript 对象字面量 -->
    <p v-pin:[direction]="pinPadding">
      Stick me {{ pinPadding + 'px' }} from the {{ direction || 'top' }} of the page
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  directives: {
    /**
     * 如果指令需要多个值，可以传入一个JS对象字面量。
     * 指令函数能够接受所有合法的JS表达式
     */

    /*pin: {
      mounted(el, binding) {
        console.log(binding)
        console.log('😊😊😊😊😊😊😊😊😊😊')

        el.style.position = 'fixed'
        // binding.value 是我们传递给指令的值 - 在这里是200
        // binding.arg 是我们传递给指令的参数 - 在这里是 direction
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
      },
      // 扩展指令逻辑在组件更新后重新计算固定的距离
      updated(el, binding) {
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
      }
    }*/

    // 函数简写
    pin: (el, binding) => {
      el.style.position = 'fixed'
      const s = binding.arg || 'top'
      el.style[s] = binding.value + 'px'
    }
  },

  setup() {
    const direction = ref('left')
    const pinPadding = ref('200')

    return {
      direction,
      pinPadding
    }
  }
})
</script>
