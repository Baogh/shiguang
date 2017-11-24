// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'


import home from './components/home'
import films_hot from './components/films_hot'
import swipe from './components/swipe'
import footer_a from './components/footer'
// import store from './vuex/index'
// console.log(store)
Vue.config.productionTip = false
Vue.component(home.name,home)
Vue.component(films_hot.name,films_hot)
Vue.component(swipe.name,swipe)
Vue.component(footer_a.name,footer_a)

Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  template: '<App/>',
  components: { App }
})
