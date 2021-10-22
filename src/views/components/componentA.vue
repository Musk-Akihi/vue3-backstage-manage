<template>
  <div>
    <p>componentA组件</p>
    {{ title }}
    {{ age }}
    {{ isMan }}

    <hr />

    {{ $attrs }}
    {{ $props }}

    <input type="datetime-local" v-bind="$attrs" />
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, toRef, toRefs, unref } from 'vue'

export default defineComponent({
  inheritAttrs: false,

  props: {
    title: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 99
    },
    isMan: {
      type: Boolean,
      default: true
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },

  setup(props, context) {
    console.log(props)
    console.log(context)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    const { title, isMan, obj } = toRefs(props)
    console.log(title)
    console.log(obj.value)
    console.log(isMan.value)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    // val = isRef(val) ? val.value : val 语法糖函数
    console.log(unref(title))
    console.log('😊😊😊😊😊😊😊😊😊😊')

    // const isMan = toRef(props, 'isMan')
    // console.log(isMan)

    return {}
  }
})
</script>
