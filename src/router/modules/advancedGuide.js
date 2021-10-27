const router = {
  path: '/advancedGuide',
  name: 'advancedGuide',
  meta: {
    title: '高阶指南'
  },
  component: () => import('@/views/studyVue/advancedGuide'),
  children: []
}

export default router
