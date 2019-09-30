const fs = require('fs')
const path = require('path')
const fsp = require('fs.promised')
const fileReader = async (ctx) => {
  let params = ctx.query
  console.log('params ==', params)
  let docPath = '../../docs/art/' + params.comN + '.vue'
  let fullPath = path.resolve(__dirname, docPath)
  let result = fs.createReadStream(fullPath)
  ctx.response.type = 'text'
  ctx.response.body = result
}
exports.fileReader = fileReader
