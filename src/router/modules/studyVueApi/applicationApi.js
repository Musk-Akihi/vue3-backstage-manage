const router = {
  path: '/studyVueApi/applicationApi',
  name: 'applicationApi',
  meta: {
    title: '应用Api'
  },
  component: () => import('@/views/studyVueApi/applicationApi'),
  children: [
    {
      path: 'component',
      name: 'component',
      meta: {
        title: 'component'
      },
      component: () => import('@/views/studyVueApi/applicationApi/component')
    }
  ]
}

export default router
