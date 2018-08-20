new Vue({
  el: '#app',
  data: {
    action: 'login'
  },
  methods: {
    login({ email, password }) {
      console.log('login ->',email, password)
    }
  }
})