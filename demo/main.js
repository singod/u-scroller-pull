import Vue from 'vue'
import App from './App.vue'
import VScroller from 'v-scroller'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VScroller)

import Index from './views/Index.vue'


const routes = [
  { path: '/', component: Index }
]


const router = new VueRouter({ routes })

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
