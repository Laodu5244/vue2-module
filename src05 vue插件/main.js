import Vue from 'vue'

import App from './App.vue'

// 引入插件
import plugins from "./plugins";

// 使用插件
Vue.use(plugins);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  // 将App组件放入容器中
  render: h => h(App),
})

