const router = {
  path: '/studyVuex/introduce',
  name: 'introduce',
  meta: {
    title: '介绍'
  },
  component: () => import('@/views/studyVuex/introduce'),
  children: [
    {
      path: 'whatIsIt',
      name: 'whatIsIt',
      meta: {
        title: 'Vuex是什么'
      },
      component: () => import('@/views/studyVuex/introduce/whatIsIt')
    },
    {
      path: 'start',
      name: 'start',
      meta: {
        title: '开始'
      },
      component: () => import('@/views/studyVuex/introduce/start')
    }
  ]
}

export default router
