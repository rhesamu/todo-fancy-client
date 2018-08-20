const BASE_URL = `http://localhost:3000/api`
new Vue({
  el: '#app',
  data: {
    title: '',
    deadline: ''
  },
  methods: {
    addTodo() {
      let token = localStorage.getItem('token')
      if (!token) { window.location.replace = 'login.html' }
      axios({
        method: 'post',
        url: `${BASE_URL}/todos`,
        headers: { token },
        data: { title: this.title, deadline: this.deadline }
      })
      .then(response => {
        console.log(response.data)
        window.location.replace('index.html')
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  }
})