<template>
  <h2>我是Teleport ComponentA组件.</h2>

  <br />

  <button @click="modalOpen = true">Open full screen modal! (With teleport!)</button>

  <teleport to=".teleportOne">
    <h1>我是要传送给 teleportOne 的内容.</h1>
  </teleport>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! (My parent is "body")
        <button @click="modalOpen = false">Close</button>
      </div>
    </div>
  </teleport>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>I'm a teleported modal! (My parent is "body")</div>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      modalOpen: false
    }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50px;
  left: 500px;
  color: red;
}
</style>
