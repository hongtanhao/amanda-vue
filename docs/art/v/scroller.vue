<template>
  <div>
    <header>
      <h3>scroller 滚动式承载区</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>
      <ama-row>
        <ama-col span="12" align="left">
          <div>
           <p>Y轴有滚动</p>
            <ama-scroller height="200" scroll="Y">
              <div style="height: 300px">内容多余可视区</div>
            </ama-scroller>
          </div>
        </ama-col>
        <ama-col span="12" align="left">
           <p>X轴有滚动</p>
            <ama-scroller height="200" scroll="X">
              <div style="width: 1300px">内容多余可视区</div>
            </ama-scroller>
        </ama-col>
      </ama-row>
    </section>
    <section>
      <h4 class="opt-h4">See your show</h4>
      <h4>用途</h4>
      <p>
        有限的可视区域内，滚动显示多余可视区的内容
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/scroller.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/a/scroller.js" text="<ama-scroller>组件源码"></ama-a>
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
</style>
