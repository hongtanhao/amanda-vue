<template>
  <div>
    <header>
      <h3>video h5视频播放器美化版</h3>
      <br>
    </header>
    <section>
      <h4 class="opt-h4">See my show</h4>

      <ama-drag-container>
        <ama-video src="http://localhost:9005/static/videos/DreamItPossible.mp4" width="100%" height="100%"></ama-video>
      </ama-drag-container>
        
    </section>
    <section>
      <h4 class="opt-h4">See your show</h4>
      <h4>用途</h4>
      <p>
        被美化的h5视频播放器
      </P>
      <h4>怎么用</h4>
      <p>
        <ama-a href="http://localhost:8081/amanda-vue-docs/art/a1.html" text="戳这啊"></ama-a>
      </P>
      <h4>组件源码</h4>
      <p>
        <ama-a href="https://github.com/hongtanhao/amanda-vue/blob/dev/src/components/a/index.js" text="<ama-a>组件源码"></ama-a>
      </P>
    </section>
  </div>
</template>
<script>
export default {
  name: '',
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
