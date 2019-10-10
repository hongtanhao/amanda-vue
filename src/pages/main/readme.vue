<template>
  <div>
    <p>AmandaVue是基于vue2.0开发的一台适配组件库，主要是以学习为目的，目前并未商用。以开源源码、使用示例和效果图的方式呈现给大家</p>
    <h5>特性</h5>
    <ul>
      <li>简单</li>
      <li>高效</li>
      <li>实用</li>
    </ul>
    <h5>参考文档</h5>
    <ul>
      <li><ama-a href="https://cn.vuejs.org/" text="vue官网"></ama-a></li>
      <li><ama-a href="https://ant.design/index-cn" text="Ant Design"></ama-a></li>
      <li><ama-a href="https://element.eleme.cn/#/zh-CN" text="Element"></ama-a></li>
      <li><ama-a href="https://youzan.github.io/vant/#/zh-CN/intro" text="Vant"></ama-a></li>
      <li><ama-a href="https://github.com/hongtanhao/vue-element-admin" text="vue-element-admin"></ama-a></li>
      <li><ama-a href="https://hongtanhao.github.io/" text="个人博客"></ama-a></li>
    </ul>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'readme',
  data () {
    return {
      content: '',
      html: ''
    }
  },
  componets: {
    mavonEditor
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    submit () {
      console.log(this.content)
      console.log(this.html)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
