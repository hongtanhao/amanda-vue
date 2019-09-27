// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axiosPlugin from './plugins/axios-plugin'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import router from './router'
// use
Vue.use(axiosPlugin)
Vue.use(mavonEditor)
Vue.config.productionTip = false
require('../static/style/reset.css')
require('./amas-loader.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render (h) {
    return h(App)
  }
})
