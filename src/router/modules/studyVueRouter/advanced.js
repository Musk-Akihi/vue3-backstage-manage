function hash(to, from) {
  // console.log(to)
  // console.log(from)
  // console.log('😊😊😊😊😊😊😊😊😊😊')
}

const router = {
  path: '/studyVueRouter/advanced',
  name: 'advanced',
  meta: {
    title: '进阶'
  },
  component: () => import('@/views/studyVueRouter/advanced'),
  children: [
    {
      path: 'navigationGuard',
      name: 'navigationGuard',
      meta: {
        title: '导航守卫'
      },
      component: () => import('@/views/studyVueRouter/advanced/navigationGuard'),
      /**
       * 路由独享守卫
       * 只在进入路由时触发，不会在params、query或hash改变时触发。
       */
      // beforeEnter: (to, from, next) => {
      //   console.log(to)
      //   console.log(from)
      //   console.log('😊😊😊😊😊😊😊😊😊😊')
      //   next()
      // }
      beforeEnter: [hash]
    },
    {
      path: 'routeMetaFields',
      name: 'routeMetaFields',
      meta: {
        title: '路由元信息'
      },
      component: () => import('@/views/studyVueRouter/advanced/routeMetaFields')
    },
    {
      path: 'compositionApi',
      name: 'compositionApi',
      meta: {
        title: 'Vue Router 和 组合式Api'
      },
      component: () => import('@/views/studyVueRouter/advanced/compositionApi')
    },
    {
      path: 'scrollBehavior',
      name: 'scrollBehavior',
      meta: {
        title: '滚动行为'
      },
      component: () => import('@/views/studyVueRouter/advanced/scrollBehavior')
    }
  ]
}

export default router
