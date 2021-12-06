import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 10,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    /**
     * 通过属性访问
     * 在通过属性访问时是作为Vue的响应式系统的一部分缓存其中的
     */
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done)
    },
    // 接收其他getter作为第二个参数
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },

    /**
     * 通过方法访问
     * 返回一个函数，来实现给getter传参
     * 每次都会去进行调用，而不会缓存结果
     */
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id)
    }
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++
    },
    addCount(state, payload) {
      console.log(payload)
      console.log('😊😊😊😊😊😊😊😊😊😊')

      state.count += payload.amount
    }
  },
  actions: {},
  modules: {}
})
