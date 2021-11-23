<template>
  <button @click="changeCount">更改count</button>
  <br />
  <button @click="changeName($event)">更改name</button>
  <br />
  <!-- 多个v-model绑定 每个v-model将同步到不同的prop上 -->
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
  <br />
  <input type="text" :value="author" @input="$emit('update:author', $event.target.value)" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }
  },
  // 定义自定义事件
  // emits: ['changeCount'],
  // 验证抛出的事件
  emits: {
    changeCount: null,
    changeName: (res) => {
      if (res) {
        return true
      } else {
        console.error('error')
        return false
        // [Vue warn]: Invalid event arguments: event validation failed for event "changeName".
      }
    },
    'update:title': null,
    'update:author': null
  },

  setup(props, context) {
    const changeCount = (event) => {
      console.log(event)
      console.log(event.target.tagName)
      console.log('😊😊😊😊😊😊😊😊😊😊')

      context.emit('changeCount')
    }
    const changeName = (event) => {
      console.log(event)
      console.log('😊😊😊😊😊😊😊😊😊😊')

      context.emit('changeName', null)
    }

    return {
      changeCount,
      changeName
    }
  }
})
</script>
