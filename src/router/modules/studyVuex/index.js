import introduce from './introduce'
import coreIdea from './coreIdea'
import advanced from './advanced'

const router = {
  path: '/studyVuex',
  name: 'studyVuex',
  meta: {
    title: '学习Vuex'
  },
  component: () => import('@/views/studyVuex')
}

export default [router, introduce, coreIdea, advanced]
