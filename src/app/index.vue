<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view class="animated"></router-view>
    </transition>
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
<style lang="stylus">
  @import '~animate.css';
  .animated {
    animation-duration: .377s;
  }
</style>
