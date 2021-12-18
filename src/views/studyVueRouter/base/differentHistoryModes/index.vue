<!-- differentHistoryModes -->
<template>
  <h2>differentHistoryModes</h2>
  <div>
    <h3>Hash模式</h3>
    <h4>hash模式是用 createWebHashHistory()创建的</h4>
    <h5>
      它在内部传递的实际URL之前 使用了一个哈希字符（#）。
      由于这部分URL从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。
      不过，它在SEO中确实有不好的影响。
    </h5>
  </div>

  <div>
    <h3>HTML5模式</h3>
    <h4>html5模式是用 createWebHistory()创建的</h4>
    <h5>
      问题：由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置， 用户在浏览器中直接访问
      https://example.com/user/id 就会得到一个 404 错误
      <br />
      解决：在服务器上添加一个简单的回退路由。 如果不匹配任何静态资源，它应提供与你的应用程序中的
      index.html 相同的页面。
    </h5>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DifferentHistoryModes',

  setup(props) {
    const router = useRouter()

    return {}
  }
})
</script>
