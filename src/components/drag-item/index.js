import Vue from 'vue'
import create from '@/utils/create'
import tpl from './tpl'
export default () => {
  create('ama-drag-item', Vue.extend(tpl))
}
