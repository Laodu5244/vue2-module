import VueRouter from 'vue-router'

import TheAbout from "../pages/TheAbout";
import TheHome from "../pages/TheHome";
import TheNews from "../pages/TheNews";
import TheMsg from "../pages/TheMsg";
// 创建一个路由器
export default new VueRouter({
  // 一级路由
  routes: [
    {
      path: '/About',
      component: TheAbout
    },
    {
      path: '/Home',
      component: TheHome,
      // 二级路由
      children: [
        {
          path: 'news',
          component: TheNews
        },
        {
          path: 'msg',
          component: TheMsg
        }
      ]
    },
  ]
})