<template>
  <!-- 绑定上父级的 data-status="activated" -->
  <div>
    {{ $attrs.title ?? '默认标题' }}

    <input type="text" :="$attrs" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // 禁用属性继承
  // inheritAttrs: false,

  props: {},

  setup(props, context) {
    console.log(context)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>
