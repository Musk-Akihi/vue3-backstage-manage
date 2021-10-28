const router = {
  path: '/goDeepComponent',
  name: 'goDeepComponent',
  meta: {
    title: '深入组件'
  },
  component: () => import('@/views/studyVue/goDeepComponent'),
  children: [
    {
      path: '',
      name: 'props',
      meta: {
        title: 'props'
      },
      component: () => import('@/views/studyVue/goDeepComponent/props')
    },
    {
      path: 'noPropAttribute',
      name: 'noPropAttribute',
      meta: {
        title: '非Prop的Attribute'
      },
      component: () => import('@/views/studyVue/goDeepComponent/noPropAttribute')
    },
    {
      path: 'customEvent',
      name: 'customEvent',
      meta: {
        title: '自定义事件'
      },
      component: () => import('@/views/studyVue/goDeepComponent/customEvent')
    },
    {
      path: 'slot',
      name: 'slot',
      meta: {
        title: '插槽'
      },
      component: () => import('@/views/studyVue/goDeepComponent/slot')
    }
  ]
}

export default router
