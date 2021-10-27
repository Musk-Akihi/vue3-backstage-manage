const router = {
  path: '/goDeepComponent',
  name: 'goDeepComponent',
  meta: {
    title: '深入组件'
  },
  component: () => import('@/views/studyVue/goDeepComponent'),
  children: [
    {
      path: 'customEvent',
      name: 'customEvent',
      meta: {
        title: '自定义事件'
      },
      component: () => import('@/views/studyVue/goDeepComponent/customEvent')
    }
  ]
}

export default router
