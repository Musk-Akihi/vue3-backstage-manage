<script>
import { defineComponent, h, reactive, resolveDirective, withDirectives } from 'vue'

export default defineComponent({
  directives: {
    pin: {
      mounted(el, binding) {
        console.log(el)
        console.log(binding)
        console.log('😊😊😊😊😊😊😊😊😊😊')

        const s = binding.arg || 'left'
        el.style.position = 'fixed'
        el.style[s] = binding.value + 'px'
        el.style.color = 'red'
      }
    }
  },

  setup() {
    const items = reactive([
      { name: 'dd', subject: '语文' },
      { name: 'xx', subject: '数学' },
      { name: 'ww', subject: '英语' }
    ])

    return {
      items
    }
  }

  /*
    // if/else map 重写 v-if v-for
    render() {
      if (this.items.length) {
        return h(
          'ul',
          this.items.map((item) => {
            return h('li', `${item.name} - ${item.subject}`)
          })
        )
      } else {
        return h('p', 'No items found.')
      }
    }
  */

  /**
   * v-model 指令扩展为 modelValue 和 onUpdate:modelValue
   * 在模板编译的过程中，我们必须自己提供这些prop
   */

  /**
   * v-on
   * 我们必须为事件处理程序提供一个正确的prop名称
   * 例如：要处理click事件，prop名称应该是onClick
   */
  /*
    render() {
      return h(
        'div',
        {
          onclick: ($event) => {
            console.log($event.target)
            console.log('😊😊😊😊😊😊😊😊😊😊')
          }
        },
        'click事件'
      )
    }
  */

  /**
   * 事件修饰符
   * 对于.passive .capture .once 事件修饰符 可以使用驼峰写法将他们拼接在事件名后面
   * 对于其他的修饰符 私有前缀都不是必须的 可以在事件处理函数中使用事件方法
   */
  /*
    render() {
      return h(
        'div',
        {
          style: {
            cursor: 'pointer'
          },
          onClickOnce: (el) => {
            console.log(el)
            console.log('😊😊😊😊😊😊😊😊😊😊')

            console.log('click once 修饰符')
            console.log('😊😊😊😊😊😊😊😊😊😊')
          }
        },
        'onClickOnce修饰符'
      )
    }
  */

  /**
   * 可以通过this.$slots 访问静态插槽的内容，每个插槽都是一个VNode数组
   */

  /*
    render() {
      // 默认插槽
      // <div> <slot></slot> </div>
      // return h('div', {}, this.$slots.default())

      // 插槽传参
      // <div> <slot :items="items"></slot> </div>
      // return h('div', {}, this.$slots.default({
      //     items: this.items
      //   })
      // )

      // 具名插槽
      // <div> <slot name="named"></slot> </div>
      // return h('div', {}, this.$slots.named())

      // 插槽以函数的形式传递，允许子组件 控制每个插槽内容的创建。任何响应式数据都应该在插槽函数内访问，以确保它被注册为子组件的依赖关系，而不是父组件。

    }
  */

  /**
   * component 和 is
   * 与<template> 标签一样，<component> 标签仅在模板中作为语法占位符需要，当迁移到 render 函数中，应被丢弃.
   */

  /**
   * 自定义指令
   * 可以使用 withDirectives 将自定义指令 应用于VNode
   * resolveDirective 是模板内部用来解析指令名称的同一个函数. 只有当你还没有直接访问指令的定义对象时，才需要这样做。
   */
  /*
    render() {
      // <div v-pin:top="200">我是自定义指令啊</div>

      const pin = resolveDirective('pin')
      return withDirectives(h('div', '我是自定义指令啊'), [[pin, 200, 'top']])
    }
  */

  /**
   * 内置组件
   * <keep-alive>、<transition>、<teleport> 等内置组件默认没有被全局注册。
   * 在模板中这些组件会被特殊处理，即在他们被用到的时候自动导入。
   * 当我们在编写render 函数时，需要自行导入他们。
   */

  /**
   * 函数式组件
   * 是自身没有任何状态的组件的另一种形式。
   * 在渲染过程中不会创建组件实例，并跳过常规的组件生命周期。
   * 若果将一个函数作为第一个参数传入 h ，它将会被当做一个函数式组件来对待。
   * 个人理解：函数组件 跟 setup类似  没有 expose 对象
   */
})
</script>
