import introduce from './introduce'

const router = {
  path: '/studyVuex',
  name: 'studyVuex',
  meta: {
    title: '学习Vuex'
  },
  component: () => import('@/views/studyVuex')
}

export default [router, introduce]
