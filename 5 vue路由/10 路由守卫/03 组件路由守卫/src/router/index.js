import VueRouter from 'vue-router'

import TheAbout from "../pages/TheAbout";
import TheHome from "../pages/TheHome";
import TheNews from "../pages/TheNews";
import TheMsg from "../pages/TheMsg";
import TheDetail from "../pages/TheDetail";

// 创建一个路由器
const router = new VueRouter({
  // 一级路由
  routes: [
    {
      name: 'about',
      path: '/about',
      component: TheAbout,
      meta: { isAuth: true, title: '关于' }
    },
    {
      name: 'home',
      path: '/home',
      component: TheHome,
      meta: { title: '主页' },
      // 二级路由
      children: [
        {
          name: 'news',
          path: 'news',
          component: TheNews,
          meta: { isAuth: true, title: '新闻' },
        },
        {
          name: 'msg',
          path: 'msg',
          component: TheMsg,
          meta: { isAuth: true, title: '消息' },
          // 三级路由
          children: [
            {
              name: 'detail',
              path: 'detail/:id/:title',
              component: TheDetail,
              meta: { isAuth: true, title: '详情' },
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title
                }
              }
            }
          ]
        }
      ]
    },
  ]
})

export default router