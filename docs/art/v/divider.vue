<template>
  <div>
    <header>
      <h3>divider 分割器</h3>
      <br>
    </header>
    <section>
      <h4>用途</h4>
      <p>
        分割线可以美化页面，分割块可以帮助页面布局
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/divider.html" text="戳这啊"></ama-a>
      </P>
      <h4>效果如下</h4>
      <p>分割线</p>
        <div class="divider">
          <p><ama-divider color="red" width="80%" type='line'></ama-divider></p>
          <p><ama-divider color="green" width="50%" type='line'></ama-divider></p>
          <p><ama-divider color="blue" width="100%" type='line'></ama-divider></p>
        </div>
      <p>分割块</p>
       <div class="divider">
          <p><ama-divider color="red" height="40" type='block'></ama-divider></p>
          <p><ama-divider color="green" height="60" type='block'></ama-divider></p>
          <p><ama-divider color="blue" height="80" type='block'></ama-divider></p>
        </div>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/divider/index.js" text="<ama-a>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
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
.divider > p {
  height: 40px;
}
</style>
