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
          /**
           * /studyVueRouter/base/nameView
           * /studyVueRouter/base/nameView/list
           * /people
           */
          path: '',
          alias: ['list', '/people'],
          // component: () => import('@/views/studyVueRouter/base/nameView/components/componentA')
          components: {
            // key值与router-view 的 name 相映射
            nameView: () => import('@/views/studyVueRouter/base/nameView/components/componentA')
          }
        }
      ]
    },
    {
      path: 'redirectAlias',
      name: 'redirectAlias',
      meta: {
        title: '重定向别名'
      },
      // redirect: '/studyVueRouter/base/nameView'
      redirect: { name: 'nameView' }
      // component: () => import('@/views/studyVueRouter/base/redirectAlias')
    },
    {
      path: 'routerComponentPassOn',
      name: 'routerComponentPassOn',
      meta: {
        title: '路由组件传参'
      },
      component: () => import('@/views/studyVueRouter/base/routerComponentPassOn'),
      children: [
        {
          path: 'componentA/:id',
          name: 'componentA',
          meta: {
            title: '路由组件传参A'
          },
          /**
           * props 为true的时候，route.params 将被设置为组件的props
           */
          // component: () =>
          //   import('@/views/studyVueRouter/base/routerComponentPassOn/components/componentA'),
          // props: true
          // 命名视图
          components: {
            routerComponentPassOn: () =>
              import('@/views/studyVueRouter/base/routerComponentPassOn/components/componentA')
          },
          // props: {
          //   routerComponentPassOn: true
          // }
          props: {
            // 当值不是Boolean，是一个Object时，它将原样设置为组件props。当props是静态的时候很有用。
            routerComponentPassOn: { newsletterPopup: true }
          }
        }
      ]
    }
  ]
}

export default router
