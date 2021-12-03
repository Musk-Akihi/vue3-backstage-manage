const router = {
  path: '/studyVue/advancedGuide',
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
    },
    {
      path: 'virtualDom',
      name: 'virtualDom',
      meta: {
        title: '虚拟Dom'
      },
      component: () => import('@/views/studyVue/advancedGuide/virtualDom')
    },
    {
      path: 'vue2ChangeDetectionNotice',
      name: 'vue2ChangeDetectionNotice',
      meta: {
        title: 'Vue2中更改检测的注意事项'
      },
      component: () => import('@/views/studyVue/advancedGuide/vue2ChangeDetectionNotice')
    }
  ]
}

export default router
