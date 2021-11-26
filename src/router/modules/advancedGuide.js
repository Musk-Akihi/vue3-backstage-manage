const router = {
  path: '/advancedGuide',
  name: 'advancedGuide',
  meta: {
    title: '高阶指南'
  },
  component: () => import('@/views/studyVue/advancedGuide'),
  children: [
    {
      path: 'responsiveComputedListen',
      name: 'responsiveComputedListen',
      meta: {
        title: '响应式计算侦听'
      },
      component: () => import('@/views/studyVue/advancedGuide/responsiveComputedListen')
    }
  ]
}

export default router
