import Vue from 'vue';
import {
  LOGOUT,
  CHECK_AUTHENTICATION,
  LOGIN,
} from './../../mutation-types';

export default {
  [CHECK_AUTHENTICATION](state) {
    state.authenticated = !!localStorage.getItem('id_token');

    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
    }
  },

  [LOGIN](state, opt) {
    state.authenticated = true;
    localStorage.setItem('id_token', opt.token);
    localStorage.setItem('id_company', opt.companyId);

    state.token = opt.token;
    state.companyId = opt.companyId;

    Vue.$http.defaults.headers.common.Authorization = `Bearer ${opt.token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem('id_token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
