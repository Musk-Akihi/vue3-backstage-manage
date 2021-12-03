import base from './base'
import goDeepComponent from './goDeepComponent'
import transitionAnimation from './transitionAnimation'
import reusableCombination from './reusableCombination'
import advancedGuide from './advancedGuide'
import tool from './tool'
import scale from './scale'
import barrierFree from './barrierFree'
import principle from './principle'

const router = {
  path: '/studyVue',
  name: 'studyVue',
  meta: {
    title: '学习Vue'
  },
  component: () => import('@/views/studyVue')
}

export default [
  router,
  base,
  goDeepComponent,
  transitionAnimation,
  reusableCombination,
  advancedGuide,
  tool,
  scale,
  barrierFree,
  principle
]
