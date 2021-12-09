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
            import('@/views/studyVueRouter/base/dynamicRouteMatch/components/componentA.vue')
        }
      ]
    }
  ]
}

export default router
