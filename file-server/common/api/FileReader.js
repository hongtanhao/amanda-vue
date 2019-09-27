const fs = require('fs')
const path = require('path')
const fsp = require('fs.promised')
const fileReader = async (ctx) => {
  // let params = ctx.query
  let fullPath = path.resolve(__dirname, '../../docs/art/a.html')
  let result = fs.createReadStream(fullPath)
  ctx.response.type = 'text'
  ctx.response.body = result
}
exports.fileReader = fileReader
