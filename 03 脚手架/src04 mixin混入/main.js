// 引入vue
import Vue from "vue";
// 引入app
import App from './App.vue'


// 关闭生产提示
Vue.config.productionTip = false;

/* 全局引入mixin
import { mixin, $$data } from "./components/mixin";
Vue.mixin(mixin)
Vue.mixin($$data) */

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App)
})