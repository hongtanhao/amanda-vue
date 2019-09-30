<template>
  <div>
    <header>
      <h3>grid 网格布局</h3>
      <br>
    </header>
    <section>
      <h4>用途</h4>
      <p>
        类似于bootstrap的网格系统，主要用于搭建网站骨架
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/grid.html" text="戳这啊"></ama-a>
      </P>
      <h4>效果如下</h4>
      <div class="grid">
        <p>网格布局</p>
        <ama-row style="margin-top: 15px">
          <ama-col span="24" align="center">
            <div style="backgroundColor: #eee">span:24</div>
          </ama-col>
        </ama-row>
        <ama-row style="margin-top: 15px">
          <ama-col span="12" align="center">
            <div style="backgroundColor: #eee">span=12</div>
          </ama-col>
          <ama-col span="12" align="center">
            <div style="backgroundColor: #eee">span=12</div>
          </ama-col>
        </ama-row>
        <ama-row style="margin-top: 15px">
          <ama-col span="8" align="center">
            <div style="backgroundColor: #eee">span=8</div>
          </ama-col>
          <ama-col span="8" align="center">
            <div style="backgroundColor: #eee">span=8</div>
          </ama-col>
          <ama-col span="8" align="center">
            <div style="backgroundColor: #eee">span=8</div>
          </ama-col>
        </ama-row>
        <p>文本对齐方式</p>
        <ama-row style="margin-top: 15px">
          <ama-col span="8" align="center">
            <div style="backgroundColor: #eee">center</div>
          </ama-col>
          <ama-col span="8" align="left">
            <div style="backgroundColor: #eee">left</div>
          </ama-col>
          <ama-col span="8" align="right">
            <div style="backgroundColor: #eee">right</div>
          </ama-col>
        </ama-row>
        <ama-row style="margin-top: 15px">
          <ama-col offset="8" span="8" align="left">
            <div style="backgroundColor: #eee">left</div>
          </ama-col>
          <ama-col span="8" align="right">
            <div style="backgroundColor: #eee">right</div>
          </ama-col>
        </ama-row>
      </div>  
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/grid/index.js" text="<ama-row>和<ama-col>组件源码"></ama-a>
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
    let dom = document.getElementsByClassName('grid')
    console.log('dom===', dom)
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
