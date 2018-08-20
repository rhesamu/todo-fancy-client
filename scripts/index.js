const BASE_URL = `http://localhost:3000/api`

new Vue({
  el: '#app',
  data: {
    todos: []
  },
  created() {
    let token = localStorage.getItem('token')
    if (!token) {
      window.location.replace('login.html')
    } else {
      this.getAllTodos()
    }
  },
  methods: {
    getAllTodos() {
      let token = localStorage.getItem('token')
      axios({
        method: 'get',
        url: `${BASE_URL}/todos`,
        headers: { token },
      })
      .then(response => {
        console.log('all todos -> ',response.data)
        this.todos = response.data.todos
        console.log(this.todos)
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    deleteTodo(value) {
      let token = localStorage.getItem('token')
      let todoId = value
      axios({
        method: 'delete',
        url: `${BASE_URL}/todos/${todoId}`,
        headers: { token }
      })
      .then(response => {
        console.log(response)
        window.location.reload(true)
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    logout() {
      localStorage.removeItem('token')
      window.location.replace('login.html')
    }
  }
})