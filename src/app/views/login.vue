<template>
  <div>
    <div>
      <h1 class="panel-title" > Login </h1>
      <div>
        <form @submit.prevent="login(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"> <i class="fa fa-envelope fa-fw"></i> </div>
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control" >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="form-control" >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary"> Login </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script lang="babel">
  import store from './../store';

  export default {

    data() {
      return {
        user: {
          email: null,
          password: null,
        },
      };
    },

    methods: {
      login(user) {
        const { email, password } = user;

        store.dispatch('Login', { email, password });
      },
    },
  };

</script>
