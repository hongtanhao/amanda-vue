const fs = require('fs')
const path = require('path')
// 获取文件的绝对路径
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
// 文件是否存在
function isAccess (fullPath) {
  let flag
  fs.access(fullPath, fs.constants.F_OK, err => {
    err ? flag = false : flag = true
  })
  return flag
}
// 文件是否可读
function isReadable (fullPath) {
  let flag
  fs.access(fullPath, fs.constants.R_OK, err => {
    err ? flag = false : flag = true
  })
  return flag
}
// 读取文件内容
function readFile (fileN) {
  return fs.readFileSync(fileN, 'utf8')
}
export default {
  read (fileN) {
    return readFile(resolve(fileN))
  }
}
export {
  resolve,
  isAccess,
  isReadable
}
