<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   */
  import store from './store';
  import { router } from './../bootstrap';
  import accountService from './services/account';

  export default {
    store,
    router,

    /**
     * Fires when the app has been mounted
     */
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.$store.state.auth.authenticated) {
        accountService.find();
      }
    },
  };
</script>
