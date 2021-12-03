<template>
  <div>ComponentB</div>
  {{ count }}
  {{ countAlias }}
  {{ countPlusLocalState }}
</template>

<script>
import { computed, defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  data() {
    return {
      name: 'dxw'
    }
  },

  // 当一个组件需要获取多个状态的时候，可以使用mapState辅助函数帮助我们生成计算属性。
  computed: mapState({
    // 箭头函数使代码更加简练
    count: (state) => state.count,

    // 传字符串参数 'count' 等同于 'state => state.count'
    countAlias: 'count',

    // 为了使用 this 获取局部状态，必须使用常规函数
    countPlusLocalState: function (state) {
      return state.count + this.name
    }
  })

  // 当映射的计算属性的名称与state的子节点名称相同时，我们也可以给mapState传一个字符串数组
  // computed: mapState([
  //   // 映射 this.count 为store.state.count
  //   'count'
  // ])
})
</script>
