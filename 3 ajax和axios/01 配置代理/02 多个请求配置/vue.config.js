module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  // 开启代理服务器
  devServer: {
    proxy: {
      '/demo1': {
        target: 'http://localhost:5050',
        // 用正则表达式重写一下路径
        pathRewrite: { '^/demo1': '' }
      },
      '/demo2': {
        target: 'http://localhost:5055',
        pathRewrite: { '^/demo2': '' }
      }
    }
  }
}
