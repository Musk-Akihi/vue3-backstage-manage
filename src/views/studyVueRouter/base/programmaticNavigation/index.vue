<!-- programmaticNavigation -->
<template>
  <h2>programmaticNavigation</h2>
  <h4>
    想要导航到不同的url，可以使用router.push方法。这个方法会向history栈添加一个新的记录，所以当用户点击浏览器后退按钮时，会回到之前的url、
    <br />
    所以当你点击 router-link 时，内部会调用这个方法，相当于 router.push(...)
    <br />
    替换当前位置：router.replace(...)，它在导航时不会向history添加新纪录，它取代了当前的条目。
    <br />
    横跨历史：采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于window.history.go()
  </h4>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ProgrammaticNavigation',

  setup(props) {
    const router = useRouter()

    // 字符串路径
    // router.push('/users/eduardo')

    // 带有路径的对象
    // router.push({ path: '/users/eduardo' })

    // 命名的路由，并加上参数，让路由建立url
    // router.push({ name: 'user', params: { username: 'eduardo' } })

    // 带查询参数，结果是 /register?plan=private
    // router.push({ path: 'register', query: { plan: 'private' } })

    // 带hash。结果是 /about#team
    // router.push({ path: '/user', hash: '#team' })

    /**
     * path 和 query一起使用；name 和 params 一起使用。
     */

    /**
     * 横跨历史
     * 向前移动一条记录，与router.forword()相同
     * 向后移动一条记录，与router.back()相同
     * 前进3条记录，router.go(3)
     * 如果没有那么多记录，静默失败
     * router.go(-100)
     */

    return {}
  }
})
</script>
