import Vue from 'vue'
require('./main.scss')
export default function (dirName, options) {
  Vue.directive(dirName, options)
}
