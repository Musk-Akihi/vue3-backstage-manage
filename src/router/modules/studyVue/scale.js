const router = {
  path: '/studyVue/scale',
  name: 'scale',
  meta: {
    title: '规模化'
  },
  component: () => import('@/views/studyVue/scale'),
  children: []
}

export default router
