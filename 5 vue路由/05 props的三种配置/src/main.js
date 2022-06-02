import Vue from 'vue'

import App from './App.vue'

// 引入 vue-router
import VueRouter from "vue-router";
// 引入路由器
import router from './router'

Vue.use(VueRouter)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})


