<template>
  <div>
    <div
      contextual-style="primary"
    >
      <h1 class="panel-title" slot="heading">
        Bem vindo!
      </h1>
      <div slot="body">
        <h2>
          Vue 2 boilerplate
        </h2>
        <a @click="logout()">Logout</a>
      </div>
    </div>
  </div>
</template>
<script lang="babel">
  import store from './../store';

  export default {
    methods: {
      logout() {
        store.commit('LOGOUT');
      },
    },
  };

</script>
