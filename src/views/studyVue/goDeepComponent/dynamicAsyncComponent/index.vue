<template>
  <h2>动态 && 异步组件</h2>

  <button
    v-for="(item, index) in tabs"
    :key="index"
    :class="curTabComponent === item ? 'active' : ''"
    @click="curTabComponent = item"
  >
    {{ item }}
  </button>

  <!-- 反复渲染会导致性能问题 -->
  <!-- <component :is="curTabComponent"></component> -->

  <!-- 组件实例能够被在他们第一次被创建的时候缓存下来 -->
  <keep-alive>
    <component :is="curTabComponent"></component>
  </keep-alive>

  <hr />

  <button @click="isShowComDVue = !isShowComDVue">
    {{ isShowComDVue ? '隐藏' : '展示' }}componentDVue组件
  </button>
  <componentDVue v-if="isShowComDVue"></componentDVue>

  <hr />

  <componentEVueASync></componentEVueASync>
</template>

<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue'
import componentAVue from './components/componentA.vue'
import componentBVue from './components/componentB.vue'
import componentCVue from './components/componentC.vue'
import componentDVue from './components/componentD.vue'

const componentEVueASync = defineAsyncComponent({
  loader: () => import('./components/componentE.vue'),
  delay: 5000
  // loadingComponent: LoadingComponent /* 在加载时显示 */,
  // errorComponent: ErrorComponent /* 显示是否有错误 */,
  // delay: 1000 /* 在显示加载组件之前延迟毫秒 */,
  // timeout: 3000 /* 这个毫秒之后的超时 */
})

export default defineComponent({
  name: 'DynamicAsyncComponent',

  components: {
    componentAVue,
    componentBVue,
    componentCVue,
    componentDVue,
    componentEVueASync
  },

  setup(props) {
    const curTabComponent = ref('componentAVue')
    const tabs = reactive(['componentAVue', 'componentBVue', 'componentCVue'])

    const isShowComDVue = ref(false)
    return {
      curTabComponent,
      tabs,
      isShowComDVue
    }
  }
})
</script>

<style scoped>
.active {
  color: blue;
}
</style>
