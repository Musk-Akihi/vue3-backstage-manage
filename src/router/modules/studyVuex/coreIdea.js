const router = {
  path: '/studyVuex/coreIdea',
  name: 'introduce',
  meta: {
    title: '核心概念'
  },
  component: () => import('@/views/studyVuex/coreIdea'),
  children: [
    {
      path: 'state',
      name: 'state',
      meta: {
        title: '单一状态树'
      },
      component: () => import('@/views/studyVuex/coreIdea/state')
    },
    {
      path: 'getter',
      name: 'getter',
      meta: {
        title: 'getter'
      },
      component: () => import('@/views/studyVuex/coreIdea/getter')
    },
    {
      path: 'mutation',
      name: 'mutation',
      meta: {
        title: 'mutation'
      },
      component: () => import('@/views/studyVuex/coreIdea/mutation')
    }
  ]
}

export default router
