// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from "vuex"

import count from "./count";
import heros from "./heros";
// 应用vuex插件
Vue.use(Vuex)

// 创建并暴露store接口
export default new Vuex.Store({
  modules: {
    count, heros
  }
})
