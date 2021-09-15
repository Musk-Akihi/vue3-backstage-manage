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
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
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

    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
      value: ref([]),
      options
    }
  }
})
</script>
