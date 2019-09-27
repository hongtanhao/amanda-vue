const route = require('koa-route')
const FileAction = require('../common/api/FileActions')
// fileAction
// get
route.get('/fileAction/getAllImages', FileAction.getAllImages)
route.get('/fileAction/getImageByImgId', FileAction.getImageByImgId)
route.get('/fileAction/deleteImage', FileAction.deleteImage)
// post
route.post('/fileAction/getAllImages', FileAction.getAllImages)
route.post('/fileAction/saveImage', FileAction.saveImage)
route.post('/fileAction/updateImage', FileAction.updateImage)

exports = route
