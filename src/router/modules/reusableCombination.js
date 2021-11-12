const router = {
  path: '/reusableCombination',
  name: 'reusableCombination',
  meta: {
    title: '可复用组合'
  },
  component: () => import('@/views/studyVue/reusableCombination'),
  children: [
    {
      path: 'combinationApi',
      name: 'combinationApi',
      meta: {
        title: 'combinationApi'
      },
      component: () => import('@/views/studyVue/reusableCombination/combinationApi')
    }
  ]
}

export default router
