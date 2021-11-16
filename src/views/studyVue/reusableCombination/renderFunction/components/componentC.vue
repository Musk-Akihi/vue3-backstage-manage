<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  render() {
    return h('div', [h('span', '我是componentC组件啊..'), this.$slots.default()])
  }
})
</script>
