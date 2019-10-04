<template>
  <div>
    <header>
      <h3>button 按钮</h3>
      <br>
    </header>
    <section>
      <h4>用途</h4>
      <p>
        具有自定义样式的button标签
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/m/button.html" text="戳这啊"></ama-a>
      </P>
      <h4>效果如下</h4>
      <h4>组件源码</h4>
      <ama-button fill="red" @amaButtonClicked="handleBtn1">删除</ama-button>
      <ama-button fill="purple" @amaButtonClicked="handleBtn2">修改</ama-button>
      <ama-button fill="blue" @amaButtonClicked="handleBtn3">增加</ama-button>
      <ama-button fill="green" @amaButtonClicked="handleBtn3">查询</ama-button>
      <ama-button @amaButtonClicked="handleBtn3" :disabled="true">禁用</ama-button>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/button/index.js" text="<ama-button>组件源码"></ama-a>
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
    handleBtn1 () {
      alert('btn1')
    },
    handleBtn2 () {
      alert('btn2')
    },
    handleBtn3 () {
      alert('btn3')
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
