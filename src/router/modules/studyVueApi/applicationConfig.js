const router = {
  path: '/studyVueApi/applicationConfig',
  name: 'applicationConfig',
  meta: {
    title: '介绍'
  },
  component: () => import('@/views/studyVueApi/applicationConfig')
}

export default router
