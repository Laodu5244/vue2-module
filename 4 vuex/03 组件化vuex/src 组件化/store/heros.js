// 英雄列表功能相关的配置
import axios from "axios"
import { nanoid } from "nanoid"
export default {
  namespaced: true, // 开启命名空间
  actions: {
    addZhou(context, value) {
      if (value.name.indexOf('周') === 0) {
        context.commit('AddHero', value)
      } else {
        alert('添加的人必须姓周')
      }
    },
    addServer(context) {
      axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
        res => {
          context.commit("AddHero", { id: nanoid(), name: res.data })
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  mutations: {
    AddHero(state, value) {
      state.heroList.unshift(value)
    }
  },
  state: {
    heroList: [
      { id: '01', name: '张无忌' }
    ]
  },
  getters: {
    firstName(state) {
      return state.heroList[0].name;
    }
  }
}