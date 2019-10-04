<template>
  <div>
    <header>
      <h3>tabs 选项卡</h3>
      <br>
    </header>
    <section>
      <h4>用途</h4>
      <p>
        具选项卡功能
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/m/tabs.html" text="戳这啊"></ama-a>
      </P>
      <h4>效果如下</h4>
      <ama-tabs @amaTabsClicked="toggle" :tabs="tabs"></ama-tabs>
      <p>{{ text }}</p>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/tabs/index.js" text="<ama-tabs>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
export default {
  name: 'a-demo',
  data () {
    return {
      tabs: [
        {
          id: '1',
          text: '示例1'
        },
        {
          id: '2',
          text: '示例2'
        },
        {
          id: '3',
          text: '示例3'
        }
      ],
      text: ''
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    toggle (item) {
      this.text = `您选择了${item.text}`
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
