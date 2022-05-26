import Vue from "vue";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线,$bus就是vm
    Vue.prototype.$bus = this;
  },
});
