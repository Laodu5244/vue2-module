let express = require('express')
let app = express()

app.use((req, res, next) => {
  console.log('有人请求服务器了')
  next()
})

app.get('/heros', (req, res) => {
  const heros = [
    { id: '01', name: '张无忌', age: '21' },
    { id: '02', name: '周芷若', age: '19' },
    { id: '03', name: '赵敏', age: '18' },
  ]
  res.send(heros)
})
app.listen(5050, (err) => {
  if (!err) console.log('5050端口已经启动')
})