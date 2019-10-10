<template>
  <div>
    <header>
      <h3>svg 雪碧图</h3>
      <br>
    </header>
    <section>
      <h4>需知</h4>
      <p>
        请先阅读<ama-a href="https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/?spm=a313x.7781069.1998910419.50" text="未来必热：SVG Sprites技术介绍"></ama-a>， 然后加以封装
      </P>
      <h4>用途</h4>
      <p>页面icon</p>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/m/icon-svg.html" text="戳这啊"></ama-a>
      </P>
      <h4>效果如下</h4>
      <p>
        <ama-icon-svg iconClass="qq"></ama-icon-svg>
        <ama-icon-svg iconClass="wechat"></ama-icon-svg>
        <ama-icon-svg iconClass="mail"></ama-icon-svg>
      </p>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/icon/index.js" text="<ama-icon-svg>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
import "@/icons/qq.svg"
import "@/icons/wechat.svg"
import "@/icons/mail.svg"
export default {
  name: 'a-demo',
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.icon-ul {
}
.icon-ul > li {
  display: inline-block;
  margin: 1rem;
}
</style>
