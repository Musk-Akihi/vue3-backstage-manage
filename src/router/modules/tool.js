const router = {
  path: '/tool',
  name: 'tool',
  meta: {
    title: '工具'
  },
  component: () => import('@/views/studyVue/tool'),
  children: []
}

export default router
