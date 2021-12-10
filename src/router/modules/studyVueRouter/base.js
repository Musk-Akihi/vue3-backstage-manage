const router = {
  path: '/studyVueRouter/base',
  name: 'base',
  meta: {
    title: '基础'
  },
  component: () => import('@/views/studyVueRouter/base'),
  children: [
    {
      path: 'gettingStarted',
      name: 'gettingStarted',
      meta: {
        title: '入门'
      },
      component: () => import('@/views/studyVueRouter/base/gettingStarted')
    },
    {
      path: 'dynamicRouteMatch',
      name: 'dynamicRouteMatch',
      meta: {
        title: '动态路由匹配'
      },
      component: () => import('@/views/studyVueRouter/base/dynamicRouteMatch'),
      children: [
        {
          path: 'componentA/:userName',
          name: 'componentA',
          meta: {
            title: '带参数的动态路由匹配'
          },
          component: () =>
            import('@/views/studyVueRouter/base/dynamicRouteMatch/components/componentA')
        },
        {
          path: 'componentB/:id',
          name: 'componentB',
          meta: {
            title: '响应路由参数的变化'
          },
          component: () =>
            import('@/views/studyVueRouter/base/dynamicRouteMatch/components/componentB')
        }
      ]
    }
  ]
}

export default router
