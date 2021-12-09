const router = {
  path: '/studyVueRouter/base',
  name: 'base',
  meta: {
    title: '基础'
  },
  component: () => import('@/views/studyVueRouter/base'),
  children: [
    {
      path: 'gettingStarted',
      name: 'gettingStarted',
      meta: {
        title: '入门'
      },
      component: () => import('@/views/studyVueRouter/base/gettingStarted')
    }
  ]
}

export default router
