Vue.component('todo-list', ({
  props: ['todo'],
  methods: {
    editRedirect() {
      window.location.replace(`edit.html?${this.todo._id}`)
    },
    deleteTodo(event) {
      this.$emit('delete-todo', this.todo._id)
    }
  },
  template: `
  <div class="col-sm-12">
    <div class="card" style="margin-bottom: 1em">
      <div class="card-body">
        <h5 class="card-title">{{ todo.title }}</h5>
        <p class="card-text">Deadline: {{ todo.deadline }}</p>
      </div>
      <div class="card-footer">
        <button v-on:click="editRedirect" class="btn btn-primary">Edit</button>
        <button v-on:click="deleteTodo" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
  `
}))