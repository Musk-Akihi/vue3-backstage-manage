<!-- Vue2中更改检测的注意事项 -->
<template>
  <div>Vue2中更改检测的注意事项</div>
  <!-- {{ firstName }} -->
  {{ lastName }}
  {{ someObj.str }}
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Vue2ChangeDetectionNotice',

  components: {},

  /**
   * Vue 无法检测到 property 的添加或删除
   * 由于Vue在实例初始化期间执行 getter/setter 转换过程，因此必须在 data 对象中存在一个property
   * 以便Vue对其进行转换并使其具有响应式
   */
  data() {
    return {
      lastName: '',
      someObj: {}
    }
  },

  mounted() {
    // 不是响应式的
    // this.firstName = 'Elon'

    // 是响应性的
    this.lastName = 'Musk'

    // vue3 是根据proxy进行处理的
    this.someObj.str = '你知道吗'

    // this.$set(this.someObj, 'str', '你知道吗')

    console.log(this)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  }
})
</script>

<style lang="scss" scoped></style>
