// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from "vuex"
// 应用vuex插件
Vue.use(Vuex)

// 准备actions: 用于响应组件的动作
const actions = {
  addOdd(context, value) { //奇数++
    if (context.state.sum % 2) {
      context.commit('Add', value)
    }
  },
  addWait(context, value) { //等一秒++
    setTimeout(() => {
      context.commit('Add', value)
    }, 1000);
  },
}

// 准备mutations: 用于操作数据(state)
const mutations = {
  Add(state, value) {
    state.sum += value
  },
  Sub(state, value) {
    state.sum -= value
  },
  AddHero(state, value) {
    console.log("AddHero被调用了");
    state.heroList.unshift(value)
  }
}
// 准备state: 用于存储数据(相当于data)
const state = {
  sum: 0,
  home: '家里',
  subject: '前端',
  heroList: [
    { id: '01', name: '张无忌' }
  ]
}

// getters相当于vue里的 computed 属性
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建并暴露store接口
export default new Vuex.Store({
  actions, mutations, state, getters
})
