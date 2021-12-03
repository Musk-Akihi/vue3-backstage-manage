<template>
  <div>ComponentC</div>
  {{ ownName }}
  {{ countAlias }}
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  data() {
    return {
      name: 'dxw'
    }
  },

  computed: {
    ownName: function () {
      return this.name
    },

    // mapState函数返回的是一个对象
    ...mapState({
      countAlias: 'count'
    })
  }
})
</script>
