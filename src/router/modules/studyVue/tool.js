const router = {
  path: '/studyVue/tool',
  name: 'tool',
  meta: {
    title: '工具'
  },
  component: () => import('@/views/studyVue/tool'),
  children: [
    // {
    //   path: 'responsiveComputedListen',
    //   name: 'responsiveComputedListen',
    //   meta: {
    //     title: '响应式计算侦听'
    //   },
    //   component: () => import('@/views/studyVue/advancedGuide/responsiveComputedListen')
    // }
  ]
}

export default router
