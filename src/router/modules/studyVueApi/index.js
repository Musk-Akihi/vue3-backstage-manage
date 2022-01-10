import applicationConfig from './applicationConfig'

const router = {
  path: '/studyVueApi',
  name: 'studyVueApi',
  meta: {
    title: '学习VueApi'
  },
  component: () => import('@/views/studyVueApi')
}

export default [router, applicationConfig]
