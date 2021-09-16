const fs = require('fs')
const path = require('path')
let express = require('express')
let app = express()
const port = 3000

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin) //获取请求源 这样所有请求就都有访问权限了
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 访问文件地址
function resolveJsonFile(filePath) {
  return path.join(__dirname, filePath + '.json')
}

app.use('/*', (req, res) => {
  const filePath = resolveJsonFile(req.baseUrl)
  // 判断文件是否存在
  fs.exists(filePath, (exists) => {
    if (!exists) {
      res.json({
        code: -1,
        msg: 'error',
        data: `${req.baseUrl} 接口不存在！`
      })
    } else {
      // 读取文件
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err || !data) {
          res.json({
            code: -1,
            msg: 'error',
            data: `${req.baseUrl} 接口存在，文件读取失败或内容为空！`
          })
        } else {
          res.json({
            code: 200,
            msg: 'success',
            data: JSON.parse(data)
          })
        }
      })
    }
  })
})

app.listen(port, () => {
  console.log(`Mock Server is successfully running on port ${port}...`)
})
