const router = {
  path: '/goDeepComponent',
  name: 'goDeepComponent',
  meta: {
    title: '深入组件'
  },
  component: () => import('@/views/studyVue/goDeepComponent'),
  children: [
    {
      path: 'props',
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
    },
    {
      path: 'provideInject',
      name: 'provideInject',
      meta: {
        title: 'provide/inject'
      },
      component: () => import('@/views/studyVue/goDeepComponent/provideInject')
    },
    {
      path: 'dynamicAsyncComponent',
      name: 'dynamicAsyncComponent',
      meta: {
        title: '动态 && 异步组件'
      },
      component: () => import('@/views/studyVue/goDeepComponent/dynamicAsyncComponent')
    },
    {
      path: 'controlUpdate',
      name: 'controlUpdate',
      meta: {
        title: '控制更新'
      },
      component: () => import('@/views/studyVue/goDeepComponent/controlUpdate')
    }
  ]
}

export default router
