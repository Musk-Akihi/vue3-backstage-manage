const router = {
  path: '/principle',
  name: 'principle',
  meta: {
    title: '原理'
  },
  component: () => import('@/views/studyVue/principle'),
  children: [
    {
      path: 'dataFunction',
      name: 'dataFunction',
      meta: {
        title: 'data为什么是函数？'
      },
      component: () => import('@/views/studyVue/principle/dataFunction')
    }
  ]
}

export default router
