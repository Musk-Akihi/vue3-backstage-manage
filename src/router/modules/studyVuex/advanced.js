const router = {
  path: '/studyVuex/advanced',
  name: 'advanced',
  meta: {
    title: '进阶'
  },
  component: () => import('@/views/studyVuex/advanced'),
  children: [
    {
      path: 'projectStructure',
      name: 'projectStructure',
      meta: {
        title: '项目结构'
      },
      component: () => import('@/views/studyVuex/advanced/projectStructure')
    },
    {
      path: 'compositionApi',
      name: 'compositionApi',
      meta: {
        title: '组合式Api'
      },
      component: () => import('@/views/studyVuex/advanced/compositionApi')
    }
  ]
}

export default router
