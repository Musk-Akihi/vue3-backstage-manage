const router = {
  path: '/studyVue/base',
  name: 'base',
  meta: {
    title: '基础'
  },
  component: () => import('@/views/studyVue/base'),
  children: []
}

export default router
