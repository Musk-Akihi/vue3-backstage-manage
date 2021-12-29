import { createRouter, createWebHistory } from 'vue-router'
import modules from './modules'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  ...modules
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to)
    // console.log(from)
    // savedPosition 只有当是一个 popstate 导航时才可用(由浏览器的前进/后退按钮触发)
    // console.log(savedPosition)
    // console.log('😊😊😊😊😊😊😊😊😊😊')
    // return 期望滚动到哪个的位置
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 全局解析守卫
router.beforeResolve((to, from) => {
  // console.log(to)
  // console.log(from)
  // console.log('😊😊😊😊😊😊😊😊😊😊')
})

// 全局后置钩子
router.afterEach((to, from) => {
  // console.log(to)
  // console.log(from)
  // console.log('😊😊😊😊😊😊😊😊😊😊')
})

export default router
