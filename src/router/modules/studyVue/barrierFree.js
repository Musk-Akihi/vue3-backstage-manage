const router = {
  path: '/studyVue/barrierFree',
  name: 'barrierFree',
  meta: {
    title: '无障碍'
  },
  component: () => import('@/views/studyVue/barrierFree'),
  children: []
}

export default router
