const mixinA = {
  data() {
    return {
      message: 'hello',
      foo: 'abc',
      name: 'df'
    }
  },

  mounted() {
    console.log('This is mixinA.')
    console.log(this.$data)
    console.log('😊😊😊😊😊😊😊😊😊😊')
  },

  methods: {
    conflicting() {
      console.log('form mixinA.')
      console.log('😊😊😊😊😊😊😊😊😊😊')
    }
  }
}

export default mixinA
