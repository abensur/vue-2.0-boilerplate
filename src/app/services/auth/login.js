import Vue from 'vue';
import accountService from './../account';
import store from './../../store';

const success = (token, companyId) => {
  store.dispatch('login', { token, companyId });
  accountService.find();
  Vue.router.push({
    name: 'home.index',
  });
};

const failed = () => {

};

export default (user) => {
  const { email, password } = user;

  Vue.$http.post('/authenticate', {
    email,
    password,
  }).then((response) => {
    const token = response.data.data.token;
    const companyId = response.data.data.company[0].id;
    success(token, companyId);
  }).catch((error) => {
    failed(error);
  });
};
