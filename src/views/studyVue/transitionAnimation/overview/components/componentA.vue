<template>
  <div>我是componentA组件</div>

  <div id="demo">
    Push this button to do something you shouldn't be doing:<br />

    <div :class="{ shake: noActivated }">
      <button @click="noActivated = !noActivated">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const noActivated = ref(false)

    return {
      noActivated
    }
  }
})
</script>

<style lang="scss" scoped>
.shake {
  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
