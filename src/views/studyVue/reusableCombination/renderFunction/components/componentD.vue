<script>
import { defineComponent, h } from 'vue'

// 函数式组件
export default defineComponent({
  props: {
    level: {
      type: Number,
      default: 1
    }
  },

  render() {
    console.log(this.level)
    console.log('😊😊😊😊😊😊😊😊😊😊')
    /**
     * 如果这个 props 选项没有被定义，那么被传入函数的 props 对象就会像 attrs 一样会包含所有 attribute。除非指定了 props 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。
     * 函数式组件可以像普通组件一样被注册和消费。如果你将一个函数作为第一个参数传入 h，它将会被当作一个函数式组件来对待。
     */

    return h(function (props, context) {
      console.log(props)
      console.log(context)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })
  }
})
</script>
