const BASE_URL = `http://localhost:3000/api`

new Vue({
  el: '#app',
  data: {
    action: 'register'
  },
  methods: {
    register({ email, password }) {
      axios({
        method: 'post',
        url: `${BASE_URL}/register`,
        data: { email, password }
      })
      .then(response => {
        console.log(response.data)
        window.location.replace('/login.html')
      })
      .catch(err => {
        console.log('register error ->', err.response)
      })
    }
  }
})