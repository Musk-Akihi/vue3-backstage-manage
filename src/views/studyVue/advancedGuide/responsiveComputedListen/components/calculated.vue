<!-- 计算值 -->
<script>
import { computed, defineComponent, h, ref } from 'vue'

export default defineComponent({
  setup() {
    // const count = ref(1)
    // const plusOne = computed(() => count.value + 10)
    /**
     * 更改失败
     * computed value is readonly.
     */
    // plusOne.value++
    // console.log(plusOne.value)
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    // 可以使用一个带有get 和 set 函数的对象来创建一个可写的ref对象
    const num = ref(1)
    const plusTwo = computed({
      get: () => num.value + 10,
      set: () => (num.value = 0)
    })

    console.log(plusTwo.value) // 11
    plusTwo.value++
    console.log(plusTwo.value) // 10

    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  render() {
    return h('div', 'I am calculated')
  }
})
</script>

<style lang="scss" scoped></style>
