<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      default: 1
    }
  },

  render() {
    console.log(this.$slots.name())
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return h(
      'h' + this.level, // 标签名
      // {}, // prop 或 attribute
      // null,
      // this.$slots.default() // 包含其子节点的数组
      this.$slots.name()
    )
  }
})
</script>

<style lang="scss" scoped></style>
