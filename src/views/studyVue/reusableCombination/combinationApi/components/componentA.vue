<script>
import { h, ref } from 'vue'

export default {
  setup(props, { expose }) {
    const count = ref(10)
    const increment = () => ++count.value

    expose({
      increment
    })

    return () => h('p', count.value)
  }
}
</script>
