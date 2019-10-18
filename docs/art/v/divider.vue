<template>
  <div>
    <header>
      <h3>divider 分割器</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <p>分割线</p>
      <div class="divider">
        <div><ama-divider bgColor="red" width="80%" type='line'></ama-divider></div>
        <div><ama-divider bgColor="green" width="50%" type='line'></ama-divider></div>
        <div><ama-divider bgColor="blue" width="100%" type='line'></ama-divider></div>
      </div>
      <p>分割块</p>
      <div class="divider">
      <ama-divider bgColor="red" height="40" type='block'></ama-divider>
      <ama-divider bgColor="green" height="60" type='block'></ama-divider>
      <ama-divider bgColor="blue" height="80" type='block'></ama-divider>
      </div>
    </section>
    <section>
      <h4 class="opt-h4">See you show</h4>
      <h4>用途</h4>
      <p>
        分割线可以美化页面，分割块可以帮助页面布局
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/divider.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/divider/index.js" text="<ama-divider>组件源码"></ama-a>
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
.divider > div {
  height: 40px;
}
</style>
