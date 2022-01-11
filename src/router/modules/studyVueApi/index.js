import applicationConfig from './applicationConfig'
import applicationApi from './applicationApi'

const router = {
  path: '/studyVueApi',
  name: 'studyVueApi',
  meta: {
    title: '学习VueApi'
  },
  component: () => import('@/views/studyVueApi')
}

export default [router, applicationConfig, applicationApi]
