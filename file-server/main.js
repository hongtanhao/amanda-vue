const Koa = require('koa')
const route = require('koa-route')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const router = require('./router')
const server = require('koa-static')
const path = require('path')
const fs = require('fs')
require('./common/utils')
const fr = require('./common/api/FileReader')
const app = new Koa()

// 解析请求体
app.use(bodyParser({
  formLimit: '5mb',
  jsonLimit: '5mb',
  textLimit: '5mb'
}))

// 测试连接
const main = ctx => {
  ctx.response.type = 'text'
  ctx.response.body = fs.createReadStream(path.resolve(__dirname, './static/demo.html'))
}
app.use(route.get('/', main))

// 跨域配置
const koaOptions = {
  origin: true,
  credentials: true
}
app.use(cors(koaOptions))

// 处理静态资源
app.use(server(path.join(__dirname)))

// router
// app.use(router)

// event error
app.on('error', err => {
  console.error('server error', err)
})

// 处理异常
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    }
  }
}
app.use(handler)
app.use(route.get('/amasVuFile/read', fr.fileReader))
// lsiten port
app.listen(9005)
console.log(`file-server started, please visit ${'localhost:9005'}`)
