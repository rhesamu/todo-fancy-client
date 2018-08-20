const BASE_URL = `http://localhost:3000/api`

new Vue({
  el: '#app',
  data: {
    action: 'login'
  },
  methods: {
    login({ email, password }) {
      axios({
        method: 'post',
        url: `${BASE_URL}/login`,
        data: { email, password }
      })
      .then(response => {
        let token = response.data.token
        if (token) {
          localStorage.setItem('token', token)
          window.location.replace('index.html')
        }
      })
      .catch(err => {
        console.log('login error ->', err.response)
      })
    }
  }
})