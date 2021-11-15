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
    },
    {
      path: 'mixin',
      name: 'mixin',
      meta: {
        title: 'mixin'
      },
      component: () => import('@/views/studyVue/reusableCombination/mixin')
    }
  ]
}

export default router
