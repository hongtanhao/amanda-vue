import Vue from 'vue'
require('@/components/main/index.scss')
export default function (comName, options) {
  Vue.component(comName, options)
}
