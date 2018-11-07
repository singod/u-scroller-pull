import Vue from 'vue'
import App from './App.vue'
import VScroller from 'v-scroller'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VScroller)

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
