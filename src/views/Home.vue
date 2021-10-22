<template>
  <div>
    <a-button type="primary" loading>Loading</a-button>
    <a-button type="primary" size="small" loading>Loading</a-button>
    <br />
    <a-button type="primary" :loading="loading" @mouseenter="loading = true"
      >mouseenter me!</a-button
    >
    <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
      延迟1s
    </a-button>
    <br />
    <a-button type="primary" loading />
    <a-button type="primary" shape="circle" loading />
    <a-button danger shape="round" loading />
  </div>

  <br />
  <hr />
  <br />

  <div>
    <a-cascader v-model:value="value" :options="options" />
  </div>

  <hr />

  <component-a
    style="border: 1px solid red"
    title="dxw"
    :age="25"
    :is-man="false"
    :obj="obj"
    data-status="activated"
  >
    我是默认插槽</component-a
  >
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import componentA from './components/componentA.vue'

export default defineComponent({
  components: {
    componentA
  },

  setup() {
    const iconLoading = ref(false)
    const enterIconLoading = () => {
      iconLoading.value = {
        delay: 1000
      }
      setTimeout(() => {
        iconLoading.value = false
      }, 6000)
    }
    const options = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake'
              }
            ]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }
            ]
          }
        ]
      }
    ]
    const obj = {
      name: '丽丽',
      age: 18,
      sex: '女'
    }
    const { $http } = getCurrentInstance().appContext.config.globalProperties
    $http.getTeacherList({ name: 1 }).then((res) => {
      console.log(res)
      console.log('😊😊😊😊😊😊😊😊😊😊')
    })

    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
      value: ref([]),
      options,
      obj
    }
  }
})
</script>
