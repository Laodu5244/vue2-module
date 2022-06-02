import VueRouter from 'vue-router'

import TheAbout from "../pages/TheAbout.vue";
import TheHome from "../pages/TheHome.vue";
// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/About',
      component: TheAbout
    },
    {
      path: '/Home',
      component: TheHome
    },
  ]
})