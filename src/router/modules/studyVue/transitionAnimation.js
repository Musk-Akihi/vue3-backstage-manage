const router = {
  path: '/studyVue/transitionAnimation',
  name: 'transitionAnimation',
  meta: {
    title: '过渡动画'
  },
  component: () => import('@/views/studyVue/transitionAnimation'),
  children: [
    {
      path: 'overview',
      name: 'overview',
      meta: {
        title: '过渡 & 动画 概述'
      },
      component: () => import('@/views/studyVue/transitionAnimation/overview')
    },
    {
      path: 'enterLeaveTransition',
      name: 'enterLeaveTransition',
      meta: {
        title: '进入离开过渡'
      },
      component: () => import('@/views/studyVue/transitionAnimation/enterLeaveTransition')
    }
  ]
}

export default router
