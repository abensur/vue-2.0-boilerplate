/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import Home from './views/home';
import Login from './views/login';

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: Home,
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: Login,
    meta: {
      guest: true,
    },
  },

  { path: '/', redirect: '/home' },
  { path: '/*', redirect: '/home' },
];
