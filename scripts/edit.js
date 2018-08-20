const BASE_URL = `http://localhost:3000/api`
const currentTodo = window.location.href.split('?')[1]
console.log(currentTodo)
new Vue({
  el: '#app',
  data: {
    title: '',
    deadline: ''
  },
  created() {
    let token = localStorage.getItem('token')
    if(!token) { window.location.replace = 'login.html'}

    axios({
      method: 'get',
      url: `${BASE_URL}/todos/${currentTodo}`,
      headers: {
        token
      }
    })
    .then(response => {
      console.log(response.data)
      this.title = response.data.todo.title
      this.deadline = response.data.todo.deadline
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    editTodo() {
      let token = localStorage.getItem('token')
      if (!token) { window.location.replace = 'login.html' }
      axios({
        method: 'put',
        url: `${BASE_URL}/todos/${currentTodo}`,
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