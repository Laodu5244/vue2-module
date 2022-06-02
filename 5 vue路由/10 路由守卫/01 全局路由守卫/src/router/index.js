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
      meta: { title: '关于' }
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
          meta: { isAuth: true, title: '新闻' }
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

// 全局前置路由守卫 => 初始化被调用,每次路由切换前调用
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫')
  // 判断是否需要权限
  if (to.meta.isAuth) {
    // localStorage的值是name:admin时才可以访问
    if (localStorage.getItem('name') === 'admin') {
      next()
    } else {
      alert('name不对,无权限查看!')
    }
  } else {
    next()
  }
})

// 全局后置路由守卫 => 初始化被调用,每次路由切换后调用 
router.afterEach((to, from) => {
  console.log('后置路由守卫', to, from)
  document.title = to.meta.title || "路由守卫"
})



export default router