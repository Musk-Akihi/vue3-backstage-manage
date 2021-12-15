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
    },
    {
      path: 'routeMatchGrammar',
      name: 'routeMatchGrammar',
      meta: {
        title: '路由匹配语法'
      },
      component: () => import('@/views/studyVueRouter/base/routeMatchGrammar')
    },
    {
      path: 'programmaticNavigation',
      name: 'programmaticNavigation',
      meta: {
        title: '编程式导航'
      },
      component: () => import('@/views/studyVueRouter/base/programmaticNavigation')
    },
    {
      path: 'nameRouter',
      name: 'nameRouter',
      meta: {
        title: '命名路由'
      },
      component: () => import('@/views/studyVueRouter/base/nameRouter')
    },
    {
      path: 'nameView',
      name: 'nameView',
      meta: {
        title: '命名视图'
      },
      component: () => import('@/views/studyVueRouter/base/nameView'),
      children: [
        {
          path: '',
          // component: () => import('@/views/studyVueRouter/base/nameView/components/componentA')
          components: {
            // key值与router-view 的 name 相映射
            nameView: () => import('@/views/studyVueRouter/base/nameView/components/componentA')
          }
        }
      ]
    }
  ]
}

export default router
