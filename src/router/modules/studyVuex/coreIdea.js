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
    }
  ]
}

export default router
