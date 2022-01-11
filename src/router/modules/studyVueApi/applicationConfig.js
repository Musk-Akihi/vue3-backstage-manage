const router = {
  path: '/studyVueApi/applicationConfig',
  name: 'applicationConfig',
  meta: {
    title: '应用配置'
  },
  component: () => import('@/views/studyVueApi/applicationConfig')
}

export default router
