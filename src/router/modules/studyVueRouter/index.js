import base from './base'
import advanced from './advanced'

const router = {
  path: '/studyVueRouter',
  name: 'studyVueRouter',
  meta: {
    title: '学习VueRouter'
  },
  component: () => import('@/views/studyVueRouter')
}

export default [router, base, advanced]
