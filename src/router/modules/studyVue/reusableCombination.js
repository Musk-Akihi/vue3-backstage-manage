const router = {
  path: '/studyVue/reusableCombination',
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
    },
    {
      path: 'directive',
      name: 'directive',
      meta: {
        title: 'directive'
      },
      component: () => import('@/views/studyVue/reusableCombination/directive')
    },
    {
      path: 'teleport',
      name: 'teleport',
      meta: {
        title: 'teleport'
      },
      component: () => import('@/views/studyVue/reusableCombination/teleport')
    },
    {
      path: 'renderFunction',
      name: 'renderFunction',
      meta: {
        title: 'renderFunction'
      },
      component: () => import('@/views/studyVue/reusableCombination/renderFunction')
    }
  ]
}

export default router
