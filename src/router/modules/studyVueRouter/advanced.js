const router = {
  path: '/studyVueRouter/advanced',
  name: 'advanced',
  meta: {
    title: '进阶'
  },
  component: () => import('@/views/studyVueRouter/advanced'),
  children: [
    // {
    //   path: 'projectStructure',
    //   name: 'projectStructure',
    //   meta: {
    //     title: '项目结构'
    //   },
    //   component: () => import('@/views/studyVueRouter/advanced/projectStructure')
    // }
  ]
}

export default router
