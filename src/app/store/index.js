/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  auth: {
    authenticated: false,
  },
};

const mutations = {
  AUTHENTICATE(state, response) {
    state.auth.authenticated = true;
    state.auth.token = response.token;

    localStorage.setItem('token', response.token);

    Vue.router.push({
      name: 'home.index',
    });
  },

  LOGOUT(state) {
    state.auth.authenticated = false;
    state.auth.token = null;
    localStorage.removeItem('token');

    Vue.router.push({
      name: 'login.index',
    });
  },
};

const actions = {
  Login({ commit }, user) {
    const { email, password } = user;

    Vue.$http
       .post('/authenticate', { email, password })
       .then((response) => {
         const token = response.data.data.token;
         const companyId = response.data.data.company[0].id;
         commit('AUTHENTICATE', { token, companyId });
       })
        .catch((error) => {
          alert(error);
        });
  },

  checkAuthentication() {
    Vue.router.push({
      name: (state.auth.authenticated || localStorage.getItem('token')) ?
        'login.index' :
        'home.index',
    });
  },

};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
