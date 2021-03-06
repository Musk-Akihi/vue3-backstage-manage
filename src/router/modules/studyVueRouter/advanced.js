function hash(to, from) {
  // console.log(to)
  // console.log(from)
  // console.log('๐๐๐๐๐๐๐๐๐๐')
}

const router = {
  path: '/studyVueRouter/advanced',
  name: 'advanced',
  meta: {
    title: '่ฟ้ถ'
  },
  component: () => import('@/views/studyVueRouter/advanced'),
  children: [
    {
      path: 'navigationGuard',
      name: 'navigationGuard',
      meta: {
        title: 'ๅฏผ่ชๅฎๅซ'
      },
      component: () => import('@/views/studyVueRouter/advanced/navigationGuard'),
      /**
       * ่ทฏ็ฑ็ฌไบซๅฎๅซ
       * ๅชๅจ่ฟๅฅ่ทฏ็ฑๆถ่งฆๅ๏ผไธไผๅจparamsใqueryๆhashๆนๅๆถ่งฆๅใ
       */
      // beforeEnter: (to, from, next) => {
      //   console.log(to)
      //   console.log(from)
      //   console.log('๐๐๐๐๐๐๐๐๐๐')
      //   next()
      // }
      beforeEnter: [hash]
    },
    {
      path: 'routeMetaFields',
      name: 'routeMetaFields',
      meta: {
        title: '่ทฏ็ฑๅไฟกๆฏ'
      },
      component: () => import('@/views/studyVueRouter/advanced/routeMetaFields')
    },
    {
      path: 'compositionApi',
      name: 'compositionApi',
      meta: {
        title: 'Vue Router ๅ ็ปๅๅผApi'
      },
      component: () => import('@/views/studyVueRouter/advanced/compositionApi')
    },
    {
      path: 'scrollBehavior',
      name: 'scrollBehavior',
      meta: {
        title: 'ๆปๅจ่กไธบ'
      },
      component: () => import('@/views/studyVueRouter/advanced/scrollBehavior')
    }
  ]
}

export default router
