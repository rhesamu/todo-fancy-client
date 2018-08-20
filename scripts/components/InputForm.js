Vue.component('input-form', {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: ['action'],
  methods: {
    submitAction(event) {
      this.$emit('submit-action', {
        email: this.email,
        password: this.password
      })
    }
  },
  template: `
  <div class="container" style="max-width: 500px;">
    <div class="row">
      <div class="col-sm-12">
        <div class="card" style="padding: 1em;">
          <div class="card-body">
            <h4 v-if="action == 'login'" class="card-title mb-3">Login</h4>
            <h4 v-else class="card-title mb-3">Register</h4>

            <form @submit.prevent="submitAction" action="post">
                <div class="form-group">
                  <input v-model="email" type="text" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                  <input v-model="password" type="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                  <button v-if="action == 'login'" type="submit" class="btn btn-primary">Login</button>
                  <button v-else type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>
            <a v-if="action == 'login'" href="register.html">Don't have an account? Register here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})