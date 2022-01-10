<!-- 应用配置 -->
<template>
  <RouteContents :route-obj="applicationConfig" />
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import RouteContents from '@/components/routeContents.vue'
import applicationConfig from '@/router/modules/studyVueApi/applicationConfig.js'
import app from '@/main.js'

export default defineComponent({
  name: 'ApplicationConfig',

  components: {
    RouteContents
  },

  setup() {
    /**
     * 每个Vue应用都会暴露一个包含其配置项的config对象
     * config properties:
     * compilerOptions 编译器选项
     * errorHandler 错误处理程序
     * globalProperties 全局属性
     * isNativeTag 是否为本地标签
     * optionMergeStrategies 选项合并策略
     * performance 表现
     * warnHandler 警告处理程序
     */
    console.log(app.config)
    console.log('😊😊😊😊😊😊😊😊😊😊')

    /**
     * errorHandler
     * 指定一个处理函数，来处理组件渲染函数和侦听器执行期间抛出的未捕获错误。这个处理函数被调用时，可获取错误信息和相应的应用实例。
     */
    app.config.errorHandler = (err, vm, info) => {
      /**
       * 处理错误
       * vm应用实例
       * info 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
       */
      console.error(info)
      console.error(err)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    }

    /**
     * warnHandler
     * 为 Vue 的运行时警告指定一个自定义处理函数。注意这只会在开发环境下生效，在生产环境下它会被忽略。
     */
    app.config.warnHandler = (msg, vm, trace) => {
      // trace 是组件的继承关系追踪
      console.warn(msg)
      console.warn(trace)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    }

    /**
     * globalProperties
     * 添加一个可以在应用的任何组件实例中访问的全局property。组件的property在命名冲突时具有优先权。
     * 可以代替Vue2.x的 Vue.prototype
     */
    /**
     * Note
     * ctx 和 proxy 都是 当前组件实例，即选项式Api的this。
     * this 和 proxy 都是 响应对象，ctx 是 原始对象。
     * 下列取值 在 不同生命周期 中的值 是不同的。
     * 打包后好像ctx的编译有问题，proxy无。
     */
    const { ctx, proxy } = getCurrentInstance()
    onMounted(() => {
      console.log(ctx)
      console.log(proxy)
      console.log(ctx.author)
      console.log(proxy.author)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    /**
     * optionMergeStrategies
     */
    app.config.optionMergeStrategies.name = (parent, child) => {
      return child
    }

    /**
     * performance
     * 默认 false
     * 设置为 true 以在浏览器开发工具的 performance/timeline 面板中启用对组件初始化、编译、渲染和更新的性能追踪。
     * 只适用于开发模式和支持 performance.mark API的浏览器。
     */

    /**
     * compilerOptions
     * 配置运行时编译器的选项。设置在这个对象上的值将会被传入浏览器内的模板编译器，并影响配置过的应用内的每个组件。
     * 也可以使用 compilerOptions 选项在每个组件的基础上覆写这些选项。
     * properties:
     * isCustomElement 指定一个方法来识别Vue以外定义的自定义元素。
     * whitespace 默认情况下，Vue会移除/压缩模板元素之间的空格以产生更高效的编译结果。
     * delimiters 分割符设置。
     * comments 默认情况下，Vue会在生产环境下移除模板内的HTML注释。将这个选项设为true可以强制Vue在生产环境下保留注释。而在开发环境下注释是始终被保留的。
     */

    return {
      applicationConfig
    }
  },

  data() {
    return {
      author: 'Musk'
    }
  },

  mounted() {
    console.log(this.$options)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  }
})
</script>

<style lang="scss" scoped></style>
