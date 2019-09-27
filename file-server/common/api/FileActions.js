const res = require('../res/response')
const mysql = require('../db/init')

const getAllImages = async (ctx) => {
  let sql = 'select * from `store_image`'
  let result = await mysql.queryAll(sql)
  if (result) {
    ctx.response.body = res.response(result, '200', '000000', 'seccessed')
  }
}

const getImageByImgId = async (ctx) => {
  let params = ctx.query
  let sql = 'SELECT * FROM `store_image` WHERE `id` = ?'
  let result = await mysql.queryByCondition(sql, params.id)
  if (result) {
    ctx.response.body = res.response(result, '200', '000000', 'seccessed')
  }
}

const saveImage = async (ctx) => {
  let body = ctx.request.body
  let image = {
    name: body.name,
    size: body.size,
    image_content: body.imageContent
  }
  image.create_time = new Date().format('yyyy-MM-dd hh:mm:ss')
  // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
  let sql = 'INSERT INTO `store_image` SET `name`=?, `create_time`=?, `size`=?, `image_content`=?'
  let result = await mysql.save(sql, [image.name, image.create_time, image.size, image.image_content])
  if (result) {
    ctx.response.body = res.response(result, '200', '000000', 'seccessed')
  }
}

const upateImage = async (ctx) => {
  let params = ctx.query
  let sql = 'UPDATE `store_image` SET name = ?  WHERE id = ?'
  let result = await mysql.updateImage(sql, [params.id])
  if (result) {
    ctx.response.body = res.response(result, '200', '000000', 'seccessed')
  }
}

const deleteImage = async (ctx) => {
  let sql = 'DELETE FROM `store_image`  WHERE id = ?'
  let result = await mysql.deleteImage(sql, [ctx.query.id])
  if (result) {
    ctx.response.body = res.response(result, '200', '000000', 'seccessed')
  }
}

exports.getAllImages = getAllImages
exports.getImageByImgId = getImageByImgId
exports.saveImage = saveImage
exports.updateImage = upateImage
exports.deleteImage = deleteImage
