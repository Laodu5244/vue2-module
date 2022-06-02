let express = require('express')
let app = express()

app.use((req, res, next) => {
  console.log('有人请求服务器了')
  next()
})

app.get('/heros', (req, res) => {
  const heros = [
    { id: '01', name: '谢逊', age: '41' },
    { id: '02', name: '杨逍', age: '39' },
    { id: '03', name: '范遥', age: '38' },
  ]
  res.send(heros)
})
app.listen(5055, (err) => {
  if (!err) console.log('5055端口已经启动')
})