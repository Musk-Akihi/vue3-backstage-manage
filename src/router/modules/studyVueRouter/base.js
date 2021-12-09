const router = {
  path: '/studyVueRouter/base',
  name: 'base',
  meta: {
    title: '基础'
  },
  component: () => import('@/views/studyVueRouter/base'),
  children: [
    // {
    //   path: 'projectStructure',
    //   name: 'projectStructure',
    //   meta: {
    //     title: '项目结构'
    //   },
    //   component: () => import('@/views/studyVueRouter/base/projectStructure')
    // }
  ]
}

export default router
