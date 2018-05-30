/* global Vue */

/* weex initialized here, please do not move this line */
// import store from 'store/index'
const store = require('./store/index')
const router = require('./router')
console.log(store)
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
