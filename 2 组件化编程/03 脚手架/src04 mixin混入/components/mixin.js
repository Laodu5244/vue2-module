/* 当多个组件使用相同的配置项(方法属性完全相同)
可以用mixins配置项把这些功能抽离成一个js文件
父组件import调用,再添加mixins配置项即可混入使用
局部混入: 在vue组件里添加
全局混入: 在main.js文件里添加 */
export const mixin = {
  methods: {
    show() {
      alert(this.name);
    }
  },
  mounted() {
    console.log('挂载完毕')
  },
}
// 可以配置多个mixin混入
export const $$data = {
  data() {
    return {
      x: 10,
      y: 20
    }
  },
}

