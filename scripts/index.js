const BASE_URL = `http://localhost:3000/api`

new Vue({
  el: '#app',
  data: {
    todos: []
  },
  created() {
    if (!localStorage.getItem('token')) {
      window.location.replace = 'login.html'
    }
    this.getAllTodos()
    
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
    }
  }
})