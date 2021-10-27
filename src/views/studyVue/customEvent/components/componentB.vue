<!-- 处理v-model修饰符 -->
<template>
  <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
  <input type="text" :value="modelValue" @input="emitValue" />
  <br />
  <input
    type="text"
    :value="description"
    @input="$emit('update:description', $event.target.value)"
  />
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    modelModifiers: {
      type: Object,
      default: () => {}
    },
    description: {
      type: String,
      default: ''
    },
    // 带参数的v-model修饰符
    descriptionModifiers: {
      type: Object,
      default: () => {}
    }
  },

  emits: ['update:modelValue', 'update:description'],

  setup(props, context) {
    // 编写修饰符
    const emitValue = (e) => {
      let value = e.target.value
      if (props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      context.emit('update:modelValue', value)
    }

    console.log(props)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    return {
      emitValue
    }
  }
})
</script>
