import Vue from 'vue'
import App from './App.vue'
import UScroller from '../src/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(UScroller)

import Index from './views/Index.vue'
import RefreshAndInfinite from './views/RefreshAndInfinite.vue'
import LoadMoreAndNoMore from './views/LoadMoreAndNoMore.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/refreshAndInfinite', component: RefreshAndInfinite },
  { path: '/loadMoreAndNoMore', component: LoadMoreAndNoMore }
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
