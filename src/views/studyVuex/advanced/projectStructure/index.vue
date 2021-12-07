<!-- projectStructure -->
<template>
  <h2>项目结构</h2>
  <h4>
    Vuex并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
    <br />
    1、应用层级的状态应该集中到单个store对象中。
    <br />
    2、提交mutation是更改状态的唯一方法，并且这个过程是同步的。
    <br />
    3、异步逻辑都应该封装到action里面。
    <br />
    只要遵守以上规则，如何组织代码随你便。如果你的store文件太大，只需将action、mutation、getter分割到单独的文件。
  </h4>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectStructure'
})
</script>
