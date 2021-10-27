const router = {
  path: '/transitionAnimation',
  name: 'transitionAnimation',
  meta: {
    title: '过渡动画'
  },
  component: () => import('@/views/studyVue/transitionAnimation')
}

export default router
