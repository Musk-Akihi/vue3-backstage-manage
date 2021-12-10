const router = [
  {
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/studyVueRouter/error/404')
  },
  {
    // 将匹配以 `user` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
    path: '/user:afterUser(.*)',
    name: 'afterUser',
    meta: {
      title: 'afterUser'
    },
    component: () => import('@/views/studyVueRouter/error/user')
  }
]

export default router
