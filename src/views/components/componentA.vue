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
import { defineComponent, ref, reactive, readonly, toRef, toRefs, unref, isProxy, isRef } from 'vue'

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
    // console.log(props)
    // console.log(context)
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    // const { title, isMan, obj } = toRefs(props)
    // console.log(title)
    // console.log(obj.value)
    // console.log(isMan.value)
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    // val = isRef(val) ? val.value : val 语法糖函数
    // console.log(unref(title))
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    // const isMan = toRef(props, 'isMan')
    // console.log(isMan)

    // 使用readonly防止更改响应性对象
    const original = reactive({ count: 100 })
    const copy = readonly(original)

    original.count++
    // copy.count++
    // target is readonly.

    console.log(original.count)
    console.log(copy.count)
    console.log(isProxy(original))
    console.log(isProxy(copy))
    console.log(isProxy(ref(1)))
    console.log(readonly({ count: 0 }))
    console.log(isProxy(readonly({ count: 0 })))
    console.log(isRef(ref(null)))
    console.log('😊😊😊😊😊😊😊😊😊😊')

    // const count = ref(1)
    // const obj = reactive({})
    // obj.count = count

    // console.log(obj.count === count.value)
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    return {}
  }
})
</script>
