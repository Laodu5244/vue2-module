// 求和功能相关的配置
export default {
  namespaced: true, // 开启命名空间
  actions: {
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
  },
  mutations: {
    Add(state, value) {
      state.sum += value
    },
    Sub(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0,
    home: '家里',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  },
}