Vue.component('todo-list', ({
  props: ['todo'],
  methods: {
    redirectDetails() {
      window.location.replace(`details.html?${this.todo._id}`)
    }
  },
  template: `
  <div class="col-sm-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ todo.title }}</h5>
        <p class="card-text">Deadline: {{ todo.deadline }}</p>
      </div>
      <div class="card-footer">
        <button v-on:click="redirectDetails" class="btn btn-primary">See details</button>
      </div>
    </div>
  </div>
  `
}))