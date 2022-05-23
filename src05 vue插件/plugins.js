export default {
  // install的形参是vue实例对象
  install(Vue) {
    // 定义一个全局过滤器
    Vue.filter('mySlice', function (val) {
      return val.slice(0, 3);
    })
    // 定义一个混入
    Vue.mixin({
      data() {
        return {
          x: 10,
          y: 20
        }
      },
    })
    // 给vue原型上添加一个方法(vm和vc都可以用)
    Vue.prototype.hello = () => { alert('hello vue插件') }
  }
}