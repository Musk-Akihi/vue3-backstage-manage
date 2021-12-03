const router = {
  path: '/studyVuex/introduce',
  name: 'introduce',
  meta: {
    title: '介绍'
  },
  component: () => import('@/views/studyVuex/introduce'),
  children: []
}

export default router
