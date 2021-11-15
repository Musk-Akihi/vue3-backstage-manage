<template>
  <h2 ref="h2ref">mixin</h2>
  <div>
    基础： Mixin提供了一种非常灵活的方式，来分发vue组件中的可复用功能。
    一个mixin对象可以包含任意组件选项。
    当组件使用mixin对象时，所有mixin对象的选项将被‘混合’进入该组件本身的选项。
  </div>
</template>

<script>
/**
 * 每个mixin可以拥有自己的data函数。每个data函数都会被调用，并将返回结果合并。
 * 在数据的property发生冲突时，会以组件自身的数据为优先。
 * 同名钩子函数将合并为一个数组，因此都将被调用。另外，mixin对象的钩子将在组件自身钩子之前调用。
 * 值为对象的选项，例如：methods、components 和 direactives，将被合并为同一个对象。两个键名冲突时，取组件对象的键值对。
 */
import { defineComponent } from 'vue'
import mixinA from './mixins/mixinA'

export default defineComponent({
  name: 'Mixin',

  components: {},

  mixins: [mixinA],

  setup(props) {
    return {}
  },

  data() {
    return {
      message: 'goodBye',
      bar: 'def',
      name: 'dxw'
    }
  },

  mounted() {
    console.log('组件钩子被调用~')
    console.log('😊😊😊😊😊😊😊😊😊😊')
    this.conflicting()
    console.log(this.name)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  methods: {
    conflicting() {
      console.log('form self')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    }
  }
})
</script>

<style lang="scss" scoped></style>
