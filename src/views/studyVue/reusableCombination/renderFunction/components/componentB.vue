<script>
import { defineComponent, h, render } from 'vue'
import componentCVue from './componentC.vue'

export default defineComponent({
  components: {
    componentCVue
  },

  /**
   * 约束
   * VNodes 必须唯一
   * 组件树中的所有VNode必须是唯一的。
   */
  /*
    render() {
      const myParagraphVNode = h('p', 'hello world!!!')
      return h('div', [
        // 错误 - 重复的 VNode！（不合法） （未报错）
        myParagraphVNode,
        myParagraphVNode
      ])
    }
  */

  /*
  // 如果真的需要重复很多次的元素、组件，可以使用工厂函数来实现。
    render() {
      console.log(componentCVue)
      console.log('😊😊😊😊😊😊😊😊😊😊')

      return h(
        'div',
        Array.from({ length: 20 }).map(() => {
          return h('p', 'hello world!!!')
        })
      )
    }
  */

  render() {
    // 组件 - 插槽
    return h(componentCVue, [h('span', '我是componentB组件啊')])
  }
})
</script>
