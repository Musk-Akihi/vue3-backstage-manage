<template>
  <h2>Provide / Inject</h2>
  <ul class="mg10">
    <li>author --- {{ author }}</li>
    <li>sex --- {{ personalInfo.sex }}</li>
    <li>hobby --- {{ personalInfo.hobby }}</li>
    <li>subject --- {{ personalInfo.subject }}</li>
  </ul>
  <a-button type="primary" @click="modifyInfo"> 修改个人信息 </a-button>
</template>

<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup(props) {
    const author = inject('author')
    const personalInfo = inject('personalInfo')
    const modifyInfo = inject('modifyInfo')

    // provide 的此属性 被设为 readonly 故不生效
    // author.value = '李华'
    // console.log(author)
    // console.log('😊😊😊😊😊😊😊😊😊😊')

    return {
      author,
      personalInfo,
      modifyInfo
    }
  }
})
</script>
