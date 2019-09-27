'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction
    }),
    loader: 'sass-resources-loader',
    options: {
      // 这里的resources 属性是个数组，可以放多个想全局引用的文件
      resources: [path.resolve('@/style/var.scss')]
    }
  },
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
