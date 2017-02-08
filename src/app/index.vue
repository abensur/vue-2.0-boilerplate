<template>
  <div>
    <router-view class="animated"></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   */
  import store from './store';
  import { router } from './../bootstrap';

  export default {
    store,
    router,

    mounted() {
      if (localStorage.getItem('token')) {
        store.commit('AUTHENTICATE', { token: localStorage.getItem('token') });
      }
    },
  };
</script>
<style lang="stylus">
  @import '~animate.css';
  .animated {
    // animation-duration: .377s;
  }
</style>
