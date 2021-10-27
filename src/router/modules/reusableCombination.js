const router = {
  path: '/reusableCombination',
  name: 'reusableCombination',
  meta: {
    title: '可复用组合'
  },
  component: () => import('@/views/studyVue/reusableCombination'),
  children: []
}

export default router
