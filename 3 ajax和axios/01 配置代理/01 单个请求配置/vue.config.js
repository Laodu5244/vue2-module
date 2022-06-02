module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  // 开启代理服务器
  devServer: {
    proxy: 'http://localhost:5050'
  }
}
